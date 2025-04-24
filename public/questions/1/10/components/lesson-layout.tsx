import type { ReactNode } from "react"
import { PageNavigation } from "./page-navigation"

interface LessonLayoutProps {
  children: ReactNode
  currentPage: number
  totalPages: number
  onNext: () => void
  onPrevious: () => void
  onGoToPage: (page: number) => void
}

export function LessonLayout({ children, currentPage, totalPages, onNext, onPrevious, onGoToPage }: LessonLayoutProps) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="mb-6 rounded-xl border border-sky-100 bg-white p-8 shadow-md">{children}</div>
        <PageNavigation
          currentPage={currentPage}
          totalPages={totalPages}
          onNext={onNext}
          onPrevious={onPrevious}
          onGoToPage={onGoToPage}
        />
      </div>
    </main>
  )
}
