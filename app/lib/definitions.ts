import type { Activity, User } from "@prisma/client"

const activityTypes = [
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

const colors = [
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

export type { Activity, User };
export { activityTypes, colors };

