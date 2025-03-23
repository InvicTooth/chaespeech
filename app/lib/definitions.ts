import type { Activity, User, Profile } from "@prisma/client"
import { z } from "zod";

export type { Activity, User, Profile };

export const activityTypes = [
  { value: "MainCareer", label: "메인 커리어" },
  { value: "SubCareer", label: "서브 커리어" },
  { value: "Lecture", label: "강의" },
  { value: "Consulting", label: "컨설팅" },
  { value: "GovermentEvent", label: "정부 행사" },
  { value: "NationalTrainingEvent", label: "국가 훈련" },
  { value: "StartupEvent", label: "창업 행사" },
  { value: "TalkConcertEvent", label: "토크 콘서트" },
  { value: "CultureEvent", label: "음악회 및 문화예술 행사" },
  { value: "OpeningCeremonyEvent", label: "개막식 및 시상식, 포럼, 기공식" },
  { value: "PromotionEvent", label: "홍보영상(정부, 관공서, 기업) MC" },
];

export const colors = [
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
];

export const developerId = process.env.SITE_DEVELOPER_ID;
export const ownerId = process.env.SITE_OWNER_ID;
export const ownerSMTPPassword = process.env.SITE_OWNER_SMTP_PASSWORD;

export type ActionState = {
  status?: "idle" | "submitting" | "success" | "error",
  message?: string | null,
  errors?: {
    [key: string]: string[]
  },
};

export const activityFormSchema = z.object({
  title: z.string().min(2, {
    message: "제목은 최소 2글자 이상이어야 합니다.",
  }),
  type: z.string(),
  content: z.string().optional(),
  mediaUrl: z.string().optional(),
  date: z
    .object(
      {
        from: z.date(),
        to: z.date().optional(),
      },
      { required_error: "Date is required." },
    )
    .refine((date) => {
      return !!date.to;
    }, "End Date is required."),
});

export const profileFormSchema = z.object({
  id: z.coerce.bigint(),
  userId: z.string(),
  name: z.string(),
  brand: z.string(),
  phone: z.string(),
  email: z.string().email(),
  businessRegistrationNumber: z.string(),
  address: z.string(),
  bank: z.string(),
  accountNumber: z.string(),
  depositor: z.string(),
});


export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "이름은 최소 2글자 이상이어야 합니다.",
  }),
  phone: z
    .string(),
  email: z
    .string()
    .email({ message: "올바른 이메일 형식이 아닙니다." }),
  message: z
    .string()
    .min(10, { message: "문의 내용은 최소 10글자 이상이어야 합니다." }),
  service: z.string().min(2),
});