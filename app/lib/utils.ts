export const formatCurrency = (amount: number) => {
  return (amount / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const formatDateToLocal = (dateStr: string, locale = "en-US") => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

export const generateYAxis = (list: { yearMonth: string; count: bigint }[]) => {
  // Calculate what labels we need to display on the y-axis
  // based on highest record and in 1000s
  const yAxisLabels = [];
  const highestRecord = Math.max(...list.map((data) => Number(data.count)));
  const topLabel = Math.ceil(highestRecord / 10) * 10;

  for (let i = topLabel; i >= 0; i -= topLabel / 10) {
    yAxisLabels.push(`${i}`);
  }

  return { yAxisLabels, topLabel };
};

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 3) {
    // If the current page is among the first 3 pages,
    // show the first 3, an ellipsis, and the last 2 pages.
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  if (currentPage >= totalPages - 2) {
    // If the current page is among the last 3 pages,
    // show the first 2, an ellipsis, and the last 3 pages.
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};

// 이미지 파일인지 확인하는 함수
export function isImage(url: string): boolean {
  return /\.(jpg|jpeg|png|webp|gif|svg)$/.test(url.toLowerCase());
}

// 비디오 파일인지 확인하는 함수
export function isVideo(url: string): boolean {
  return /\.(mp4|webm|ogg)$/.test(url.toLowerCase());
}

// /app/lib/utils.ts
export function formatBusinessRegistrationNumber(
  businessRegistrationNumber: string | null | undefined,
): string {
  if (!businessRegistrationNumber)
    return "";

  const cleanedNumber = businessRegistrationNumber.replace(/\D/g, "");
  if (cleanedNumber.length !== 10) {
    return businessRegistrationNumber;
  }

  return `${cleanedNumber.slice(0, 3)}-${cleanedNumber.slice(3, 5)}-${cleanedNumber.slice(5)}`;
}

export function formatPhoneNumber(phoneNumber: string | null | undefined): string {
  if (!phoneNumber) return "";
  const cleanedNumber = phoneNumber.replace(/\D/g, ""); // 숫자 이외의 문자 제거
  const numberLength = cleanedNumber.length;

  if (numberLength === 10) {
    return `${cleanedNumber.slice(0, 3)}-${cleanedNumber.slice(3, 6)}-${cleanedNumber.slice(6)}`;
  }

  if (numberLength === 11) {
    return `${cleanedNumber.slice(0, 3)}-${cleanedNumber.slice(3, 7)}-${cleanedNumber.slice(7)}`;
  }

  return phoneNumber; // 기본적으로 원래 값 반환
}