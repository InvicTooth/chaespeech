import "./globals.css"

import { inter } from "./ui/fonts"
import type React from "react"
import type { Metadata } from "next"
import Header from "./components/Header"
import Footer from "./components/Footer"

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
      <body className={`${inter.className} bg-quaternary text-primary`}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}

