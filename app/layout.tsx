import "./globals.css"
import '../backup/ui/global.css'

import { inter } from '@/backup/ui/fonts'
import type React from "react" // Import React
import type { Metadata } from "next"

export const metadata:Metadata = {
  title: {
    template: "%s | ChaeSpeech",
    default: "ChaeSpeech",
  },
  description: "박채은의 기분좋은 스피치",
  metadataBase: new URL("https://chaespeech.vercel.app"),
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

