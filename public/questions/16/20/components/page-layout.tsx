import type React from "react"
import PageNavigation from "./page-navigation"
import { Card, CardContent } from "@/components/ui/card"

interface PageLayoutProps {
  title: string
  emoji?: string
  children: React.ReactNode
}

export default function PageLayout({ title, emoji, children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-sky-100 py-8">
      <div className="container mx-auto px-4">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardContent className="p-6 sm:p-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-center text-sky-700 mb-6 flex items-center justify-center gap-2">
              {emoji && <span className="text-3xl">{emoji}</span>}
              {title}
            </h1>

            <div className="space-y-6">{children}</div>

            <PageNavigation />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
