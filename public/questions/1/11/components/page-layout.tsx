import type React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PageLayoutProps {
  title: string
  pageNumber: number
  totalPages: number
  children: React.ReactNode
}

export function PageLayout({ title, pageNumber, totalPages, children }: PageLayoutProps) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-200 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <div className="text-sm font-medium">
            Page {pageNumber} of {totalPages}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b">
            <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
          </div>

          <div className="p-6">{children}</div>
        </div>
      </div>
    </main>
  )
}
