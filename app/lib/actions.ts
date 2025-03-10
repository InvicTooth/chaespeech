'use server';

import {z} from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { prisma } from '@/prisma/client';


export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

const FormSchema = z.object({
  id:z.string(),
  customerId: z.string({invalid_type_error:'Please select a customer'}),
  amount: z.coerce.number().positive('Please enter an amount greater than $0.'),
  status: z.enum(['pending', 'paid'], {invalid_type_error:'Please select an invoice status'}),
  date:z.string(),
});

const CreateInvoice = FormSchema.omit({id:true, date:true});

export async function createInvoice(prevState:State, formData: FormData) {
  const validatedFields = CreateInvoice.safeParse({
			customerId: formData.get("customerId"),
			amount: formData.get("amount"),
			status: formData.get("status"),
		});
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }
  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString();

  try {
    await prisma.invoices.create({
      data: {
        customer_id: customerId,
        amount: amountInCents,
        status,
        date,
      },
    });
  } catch (error){
    return {
      message: `Database Error: Failed to Create Invoice. \n ${error}`,
    };
  } 
  

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

const UpdateInvoice = FormSchema.omit({ id: true, date: true });

export async function updateInvoice(id: string, prevState:State, formData: FormData) {
  const validatedFields = UpdateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Invoice.',
    };
  }

  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;

  try{
    await prisma.invoices.update({
      where: { id },
      data: {
        customer_id: customerId,
        amount: amountInCents,
        status,
      },
    });
  }catch(error){
    return { message: `Database Error: Failed to Update Invoice. \n${error}` };
  }
  
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string){
  try{
    await prisma.invoices.delete({
      where: { id },
    });
  }catch(error){
    // return { message: `Database Error: Failed to Delete Invoice. \n${error}` };
    console.log(error);
  }
  revalidatePath('/dashboard/invoices');
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function signInWithGoogle() {
  await signIn('google', { redirect: true, redirectTo: '/dashboard' } );
}
export async function signInWithNaver() {
  await signIn('naver', { redirect: true, redirectTo: '/dashboard' } );
}
export async function signInWithKakao() {
  await signIn('kakao', { redirect: true, redirectTo: '/dashboard' } );
}