"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Page1 from "@/components/pages/page1"
import Page2 from "@/components/pages/page2"
import Page3 from "@/components/pages/page3"
import Page4 from "@/components/pages/page4"
import Page5 from "@/components/pages/page5"
import Page6 from "@/components/pages/page6"
import Page7 from "@/components/pages/page7"
import Page8 from "@/components/pages/page8"
import Page9 from "@/components/pages/page9"

export default function UnitRateLesson() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 9

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <Page1 />
      case 2:
        return <Page2 />
      case 3:
        return <Page3 />
      case 4:
        return <Page4 />
      case 5:
        return <Page5 />
      case 6:
        return <Page6 />
      case 7:
        return <Page7 />
      case 8:
        return <Page8 />
      case 9:
        return <Page9 />
      default:
        return <Page1 />
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-800">Unit Rate Lesson</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-600">
              Page {currentPage} of {totalPages}
            </span>
            <Progress value={(currentPage / totalPages) * 100} className="w-40" />
          </div>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">{renderPage()}</div>

        <div className="mt-6 flex justify-between">
          <Button
            variant="outline"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" /> Previous
          </Button>
          <Button onClick={goToNextPage} disabled={currentPage === totalPages} className="flex items-center gap-2">
            Next <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
