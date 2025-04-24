"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowLeft, ArrowRight, Home } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

const pages = [
  { path: "/story", label: "Story" },
  { path: "/breakdown", label: "Breakdown" },
  { path: "/visual", label: "Visual" },
  { path: "/model", label: "Model" },
  { path: "/solve", label: "Solve" },
  { path: "/solution", label: "Solution" },
  { path: "/transfer", label: "Transfer" },
  { path: "/far-transfer", label: "Far Transfer" },
  { path: "/summary", label: "Summary" },
]

export function PageLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const currentIndex = pages.findIndex((page) => page.path === pathname)
  const progress = ((currentIndex + 1) / pages.length) * 100

  const prevPage = currentIndex > 0 ? pages[currentIndex - 1].path : null
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1].path : null

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <Home className="h-5 w-5" />
              </Button>
            </Link>
            <div className="text-sm text-muted-foreground">
              Page {currentIndex + 1} of {pages.length}
            </div>
          </div>
          <Progress value={progress} className="h-2" />
        </header>

        <main className="mb-8">{children}</main>

        <footer className="flex justify-between">
          {prevPage ? (
            <Link href={prevPage}>
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Previous
              </Button>
            </Link>
          ) : (
            <div></div>
          )}

          {nextPage ? (
            <Link href={nextPage}>
              <Button className="gap-2">
                Next
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          ) : (
            <Link href="/">
              <Button className="gap-2">
                Finish
                <Home className="h-4 w-4" />
              </Button>
            </Link>
          )}
        </footer>
      </div>
    </div>
  )
}
