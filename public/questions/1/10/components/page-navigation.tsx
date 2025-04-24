"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PageNavigationProps {
  currentPage: number
  totalPages: number
  onNext: () => void
  onPrevious: () => void
  onGoToPage: (page: number) => void
}

export function PageNavigation({ currentPage, totalPages, onNext, onPrevious, onGoToPage }: PageNavigationProps) {
  return (
    <div className="flex items-center justify-between">
      <Button variant="outline" onClick={onPrevious} disabled={currentPage === 1} className="flex items-center gap-2">
        <ChevronLeft className="h-4 w-4" />
        Previous
      </Button>

      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <Button
            key={index}
            variant={currentPage === index + 1 ? "default" : "outline"}
            size="icon"
            className="h-8 w-8"
            onClick={() => onGoToPage(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
      </div>

      <Button
        variant="outline"
        onClick={onNext}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2"
      >
        Next
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
