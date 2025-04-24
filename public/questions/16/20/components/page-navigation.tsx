"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Home } from "lucide-react"

const pages = [
  { path: "/context", label: "Context Story" },
  { path: "/problem", label: "Problem Breakdown" },
  { path: "/visualize", label: "Visualizing MPG" },
  { path: "/model", label: "Setting Up Model" },
  { path: "/solve", label: "Solve It" },
  { path: "/solution", label: "Check Solution" },
  { path: "/transfer", label: "Similar Problem" },
  { path: "/far-transfer", label: "New Context" },
  { path: "/summary", label: "Summary & Quiz" },
]

export default function PageNavigation() {
  const pathname = usePathname()

  const currentIndex = pages.findIndex((page) => page.path === pathname)
  const prevPage = currentIndex > 0 ? pages[currentIndex - 1] : null
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null

  return (
    <div className="flex justify-between items-center w-full mt-8 pt-4 border-t border-gray-200">
      <div>
        {prevPage && (
          <Link href={prevPage.path}>
            <Button variant="outline" className="flex items-center gap-1">
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline">{prevPage.label}</span>
              <span className="sm:hidden">Back</span>
            </Button>
          </Link>
        )}
      </div>

      <Link href="/">
        <Button variant="ghost" size="icon">
          <Home className="h-5 w-5" />
        </Button>
      </Link>

      <div>
        {nextPage && (
          <Link href={nextPage.path}>
            <Button className="bg-sky-600 hover:bg-sky-700 flex items-center gap-1">
              <span className="hidden sm:inline">{nextPage.label}</span>
              <span className="sm:hidden">Next</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        )}
      </div>
    </div>
  )
}
