"use client"

import type React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, ArrowRight, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface LessonLayoutProps {
  children: React.ReactNode
  currentPage: number
  totalPages: number
}

export function LessonLayout({ children, currentPage, totalPages }: LessonLayoutProps) {
  const router = useRouter()
  const progress = (currentPage / totalPages) * 100

  const nextPage = () => {
    if (currentPage < totalPages) {
      router.push(`/lesson/${currentPage + 1}`)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      router.push(`/lesson/${currentPage - 1}`)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <Home className="h-5 w-5" />
              <span className="sr-only">Home</span>
            </Button>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">
              Page {currentPage} of {totalPages}
            </span>
          </div>
        </div>
        <Progress value={progress} className="h-1" />
      </header>
      <main className="flex-1 py-6">
        <div className="container px-4 md:px-6">{children}</div>
      </main>
      <footer className="border-t bg-background">
        <div className="container flex h-16 items-center justify-between px-4">
          <Button variant="outline" onClick={prevPage} disabled={currentPage === 1}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          <Button onClick={nextPage} disabled={currentPage === totalPages}>
            Next
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </footer>
    </div>
  )
}
