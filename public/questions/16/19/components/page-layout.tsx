"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Home } from "lucide-react"

const pages = [
  { path: "/intro", title: "🚗 Fueling the Journey!" },
  { path: "/breakdown", title: "🧩 What Are the Important Details?" },
  { path: "/visualize", title: "🔍 How Do Distance and Gasoline Relate?" },
  { path: "/model", title: "🧮 How Can We Set Up the Math?" },
  { path: "/solve", title: "✍️ Time to Solve It Yourself!" },
  { path: "/solution", title: "🎯 Let's Check the Answer!" },
  { path: "/transfer", title: "🔄 Another Fuel Efficiency Check!" },
  { path: "/far-transfer", title: "🚀 Same Math, New World!" },
  { path: "/summary", title: "📚 Great Job! Let's Reflect." },
]

export default function PageLayout({
  children,
  title,
}: {
  children: ReactNode
  title: string
}) {
  const pathname = usePathname()
  const currentIndex = pages.findIndex((page) => page.path === pathname)
  const prevPage = currentIndex > 0 ? pages[currentIndex - 1].path : null
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1].path : null

  return (
    <div className="container flex min-h-screen flex-col items-center justify-center py-8">
      <Card className="w-full max-w-4xl">
        <CardHeader className="border-b pb-3">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <Home className="h-5 w-5" />
              </Button>
            </Link>
            <CardTitle className="text-center text-2xl">{title}</CardTitle>
            <div className="w-9"></div> {/* Spacer for alignment */}
          </div>
        </CardHeader>
        <CardContent className="pt-6">{children}</CardContent>
        <CardFooter className="flex justify-between border-t pt-4">
          {prevPage ? (
            <Link href={prevPage}>
              <Button variant="outline" className="gap-2">
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
            </Link>
          ) : (
            <div></div>
          )}
          {nextPage && (
            <Link href={nextPage}>
              <Button className="gap-2">
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
