import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface PageLayoutProps {
  title: string
  pageNumber: number
  totalPages: number
  children: React.ReactNode
  nextPage?: string
  prevPage?: string
}

export function PageLayout({ title, pageNumber, totalPages, children, nextPage, prevPage = "/" }: PageLayoutProps) {
  const progress = (pageNumber / totalPages) * 100

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-8">
      <div className="container mx-auto px-4">
        <Card className="mx-auto max-w-4xl shadow-lg">
          <CardHeader className="border-b bg-blue-50 pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-bold text-blue-800">{title}</CardTitle>
              <div className="text-sm text-blue-600">
                Page {pageNumber} of {totalPages}
              </div>
            </div>
            <Progress value={progress} className="h-2 bg-blue-200" />
          </CardHeader>
          <CardContent className="p-6">{children}</CardContent>
          <CardFooter className="flex justify-between border-t bg-blue-50 px-6 py-4">
            <Link href={prevPage}>
              <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100">
                Previous
              </Button>
            </Link>
            {nextPage && (
              <Link href={nextPage}>
                <Button className="bg-blue-600 hover:bg-blue-700">Next</Button>
              </Link>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
