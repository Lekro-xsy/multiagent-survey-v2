import type React from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PageLayoutProps {
  children: React.ReactNode
  pageNumber: number
  totalPages: number
  title: string
}

export function PageLayout({ children, pageNumber, totalPages, title }: PageLayoutProps) {
  const prevPage = pageNumber > 1 ? `/page${pageNumber - 1}` : "/"
  const nextPage = pageNumber < totalPages ? `/page${pageNumber + 1}` : null

  return (
    <div className="container mx-auto flex min-h-screen flex-col py-8">
      <header className="mb-8">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Button>
          </Link>
          <div className="text-sm text-muted-foreground">
            Page {pageNumber} of {totalPages}
          </div>
        </div>
        <h1 className="mt-6 text-center text-3xl font-bold">{title}</h1>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-8 flex justify-between">
        <Link href={prevPage}>
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
        </Link>
        {nextPage && (
          <Link href={nextPage}>
            <Button>
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        )}
      </footer>
    </div>
  )
}
