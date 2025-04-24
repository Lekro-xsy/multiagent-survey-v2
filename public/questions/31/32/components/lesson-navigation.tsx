"use client"

import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface LessonNavigationProps {
  currentPage: number
  totalPages: number
  goToNextPage: () => void
  goToPreviousPage: () => void
  goToPage: (page: number) => void
}

export default function LessonNavigation({
  currentPage,
  totalPages,
  goToNextPage,
  goToPreviousPage,
  goToPage,
}: LessonNavigationProps) {
  return (
    <div className="mt-8 flex items-center justify-between">
      <Button variant="outline" onClick={goToPreviousPage} disabled={currentPage === 1} className="flex items-center">
        <ChevronLeft className="mr-2 h-4 w-4" />
        Previous
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center">
            <span>Page {currentPage}</span>
            <MoreHorizontal className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center">
          {Array.from({ length: totalPages }).map((_, i) => (
            <DropdownMenuItem key={i} onClick={() => goToPage(i + 1)}>
              Page {i + 1}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <Button
        variant="outline"
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
        className="flex items-center"
      >
        Next
        <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}
