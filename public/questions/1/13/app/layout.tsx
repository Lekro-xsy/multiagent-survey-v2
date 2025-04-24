import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import { ProgressProvider } from "@/components/progress-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Working Together Problems - Math Learning",
  description: "Learn how to solve math problems where people work together to complete tasks faster",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <ProgressProvider>{children}</ProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'