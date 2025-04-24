import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LessonLayoutProps {
  children: ReactNode
  pageNumber: number
  totalPages: number
  title: string
}

export function LessonLayout({ children, pageNumber, totalPages, title }: LessonLayoutProps) {
  const prevPage = pageNumber > 1 ? `/lesson/${pageNumber - 1}` : "/"
  const nextPage = pageNumber < totalPages ? `/lesson/${pageNumber + 1}` : "/"
  const isLastPage = pageNumber === totalPages

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-gradient-to-r from-teal-500 to-emerald-600 py-4 text-white">
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-teal-600">
              <Home className="mr-2 h-5 w-5" />
              Home
            </Button>
          </Link>
          <h1 className="text-xl font-bold md:text-2xl">{title}</h1>
          <div className="flex items-center gap-2 text-sm">
            <span className="rounded-full bg-white px-3 py-1 font-medium text-teal-700">
              Page {pageNumber} of {totalPages}
            </span>
          </div>
        </div>
      </header>

      <main className="container mx-auto flex-1 px-4 py-8">
        <div className="mx-auto max-w-4xl">{children}</div>
      </main>

      <footer className="container mx-auto border-t border-gray-200 px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href={prevPage}>
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              {pageNumber === 1 ? "Home" : "Previous"}
            </Button>
          </Link>

          <Link href={nextPage}>
            <Button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700">
              {isLastPage ? "Finish" : "Next"}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </footer>
    </div>
  )
}
