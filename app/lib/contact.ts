'use server';

import { type ActionState, contactFormSchema, ownerSMTPPassword } from '@/app/lib/definitions';
import { getSiteOwnerProfile } from '@/app/lib/profile';
import nodemailer from 'nodemailer';

export const sendContactEmail = async (
  state: ActionState,
  formData: FormData,
): Promise<ActionState> => {

  const owner = await getSiteOwnerProfile();
  if (owner == null) return {
    status: "error",
    message: "사이트 주인 프로필을 찾을 수 없습니다.",
  };

  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    message: formData.get("message"),
    service: formData.get("service"),
  });

  if (!validatedFields.success) {
    return {
      message: "데이터 검증에 실패했습니다.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, phone, email, message, service } = validatedFields.data;

  try {
    const transporter = nodemailer.createTransport({
      service: 'naver',
      host: 'smtp.naver.com',
      port: 587,
      secure: false,
      auth: {
        user: owner.email,
        pass: ownerSMTPPassword,
      }
    });

    await transporter.sendMail({
      from: owner.email,
      to: owner.email,
      subject: `[${service}] ${name}님의 문의가 접수되었습니다.`,
      html: `
<div>
  <h2>문의 정보</h2>
  <p><strong>이름:</strong> ${name}</p>
  <p><strong>연락처:</strong> ${phone}</p>
  <p><strong>이메일:</strong> ${email}</p>
  <p><strong>문의 서비스:</strong> ${service}</p>
  <p><strong>문의 내용:</strong></p>
  <p>${message}</p>
</div>
`,
    });
  } catch (error) {
    console.error(error);
    return {
      status: "error",
      message: "이메일 전송에 실패했습니다. 전화/문자로 연락 부탁드립니다",
    };
  }
  
  return {
    status: "success",
    message: "문의가 성공적으로 접수되었습니다.",
  };
};