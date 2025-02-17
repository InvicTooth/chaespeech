import "./globals.css"
import './ui/global.css'

import { inter } from '@/app/ui/fonts'
import type React from "react" // Import React

export const metadata = {
  title: "ChaeSpeech",
  description:
    "박채은의 기분좋은 스피치",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-quaternary text-primary`}>{children}</body>
    </html>
  )
}

