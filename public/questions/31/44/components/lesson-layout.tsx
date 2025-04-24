import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface LessonLayoutProps {
  children: React.ReactNode
  title: string
  pageNumber: number
  totalPages: number
}

export function LessonLayout({ children, title, pageNumber, totalPages }: LessonLayoutProps) {
  const progress = (pageNumber / totalPages) * 100
  const prevPage = pageNumber > 1 ? pageNumber - 1 : null
  const nextPage = pageNumber < totalPages ? pageNumber + 1 : null

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-blue-50 to-white">
      <Card className="w-full max-w-4xl shadow-lg">
        <CardHeader className="border-b">
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl font-bold">{title}</CardTitle>
            <div className="text-sm text-muted-foreground">
              Page {pageNumber} of {totalPages}
            </div>
          </div>
          <Progress value={progress} className="h-2" />
        </CardHeader>
        <CardContent className="pt-6 pb-4">{children}</CardContent>
        <CardFooter className="flex justify-between border-t pt-4">
          {prevPage ? (
            <Button variant="outline" asChild>
              <Link href={`/lesson/${prevPage}`}>Previous</Link>
            </Button>
          ) : (
            <div></div>
          )}
          {nextPage ? (
            <Button asChild>
              <Link href={`/lesson/${nextPage}`}>Next</Link>
            </Button>
          ) : (
            <Button asChild>
              <Link href="/lesson/1">Start Over</Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
