'use server';

import { revalidatePath } from "next/cache";
import { prisma } from "@/prisma/client";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { profileFormSchema, type ActionState } from "@/app/lib/definitions";
import { ownerId } from "@/app/lib/definitions";

export async function getSiteOwnerProfile() {
  try {
    if (!ownerId) {
      throw new Error('SITE_OWNER_ID 환경 변수가 설정되지 않았습니다.');
    }

    const profile = await prisma.profile.findFirst({
      where: {
        userId: ownerId,
      },
    });

    if (!profile) {
      throw new Error('사이트 주인 프로필을 찾을 수 없습니다.');
    }

    return profile;
  } catch (error) {
    console.error('사이트 주인 프로필을 가져오는 중 오류 발생:', error);
    return null;
  }
}

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
): Promise<ActionState> => {
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
      message: `DB Error: 프로필 업데이트에 실패했습니다. ${error}`,
    };
  }

  revalidatePath("/dashboard/profile");
  return {
    message: "프로필이 업데이트되었습니다.",
  };
};
