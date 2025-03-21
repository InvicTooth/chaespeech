'use server';

import { revalidatePath } from "next/cache";
import { prisma } from "@/prisma/client";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { profileFormSchema, type ActionState } from "@/app/lib/definitions";

export const getProfile = async () => {
  const session = await auth();
  if (session?.user?.id == null)
    redirect('/login');

  let profile = await prisma.profile.findFirst({
    where: {
      userId: session.user.id,
    },
  });

  if (!profile) {
    profile = await prisma.profile.create({
      data: {
        userId: session.user.id,
      },
    });
  }
  return profile;
}

export const updateProfile = async (
  prevState: ActionState,
  formData: FormData,
) => {
  const validatedFields = profileFormSchema.safeParse({
    id: formData.get("id"),
    userId: formData.get("userId"),
    name: formData.get("name"),
    brand: formData.get("brand"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    businessRegistrationNumber: formData.get("businessRegistrationNumber"),
    address: formData.get("address"),
    bank: formData.get("bank"),
    accountNumber: formData.get("accountNumber"),
    depositor: formData.get("depositor"),
  });

  if (!validatedFields.success) {
    return {
      message: "데이터 검증에 실패했습니다.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const { name, brand, phone, email, businessRegistrationNumber, address, bank, accountNumber, depositor } = validatedFields.data;
    await prisma.profile.update({
      where: {
        id: validatedFields.data.id,
      },
      data: {
        name,
        brand,
        phone,
        email,
        businessRegistrationNumber,
        address,
        bank,
        accountNumber,
        depositor,
      }
    });
  } catch (error) {
    return {
      message: `프로필 업데이트에 실패했습니다. ${error}`,
    };
  }

  // TODO: 실제 프로필 업데이트 로직 구현
  revalidatePath("/dashboard/profile");
  return {
    message: "프로필이 업데이트되었습니다.",
  };
};
