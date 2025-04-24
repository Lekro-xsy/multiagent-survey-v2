import type React from "react"

import { Progress } from "@/components/ui/progress"

interface PageLayoutProps {
  title: string
  currentPage: number
  totalPages: number
  children: React.ReactNode
}

export default function PageLayout({ title, currentPage, totalPages, children }: PageLayoutProps) {
  const progress = (currentPage / totalPages) * 100

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-gradient-to-r from-green-400 to-teal-500 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white">{title}</h1>
          <div className="mt-4 flex items-center gap-4">
            <Progress value={progress} className="h-2 w-full" />
            <span className="whitespace-nowrap text-sm font-medium text-white">
              Page {currentPage} of {totalPages}
            </span>
          </div>
        </div>
      </header>

      <main className="container mx-auto flex-1 px-4 py-8">
        <div className="mx-auto max-w-3xl">{children}</div>
      </main>

      <footer className="bg-gray-100 py-4 text-center text-sm text-gray-600">
        Interactive Math Learning Module © {new Date().getFullYear()}
      </footer>
    </div>
  )
}
