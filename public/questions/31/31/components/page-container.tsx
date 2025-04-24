import type React from "react"

interface PageContainerProps {
  title: string
  pageNumber: number
  totalPages: number
  children: React.ReactNode
}

export function PageContainer({ title, pageNumber, totalPages, children }: PageContainerProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-red-50 py-8">
      <div className="container mx-auto px-4">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-red-700">{title}</h1>
          <div className="mt-2 text-gray-600">
            Page {pageNumber} of {totalPages}
          </div>
        </header>

        <main className="max-w-4xl mx-auto">{children}</main>
      </div>
    </div>
  )
}
