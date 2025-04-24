"use client"

import { useState } from "react"
import { PageOne } from "./pages/page-one"
import { PageTwo } from "./pages/page-two"
import { PageThree } from "./pages/page-three"
import { PageFour } from "./pages/page-four"
import { PageFive } from "./pages/page-five"
import { PageSix } from "./pages/page-six"
import { PageSeven } from "./pages/page-seven"
import { PageEight } from "./pages/page-eight"
import { PageNine } from "./pages/page-nine"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function LearningExperience() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 9

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <PageOne onNext={nextPage} />
      case 2:
        return <PageTwo onNext={nextPage} />
      case 3:
        return <PageThree onNext={nextPage} />
      case 4:
        return <PageFour onNext={nextPage} />
      case 5:
        return <PageFive onNext={nextPage} />
      case 6:
        return <PageSix onNext={nextPage} />
      case 7:
        return <PageSeven onNext={nextPage} />
      case 8:
        return <PageEight onNext={nextPage} />
      case 9:
        return <PageNine />
      default:
        return <PageOne onNext={nextPage} />
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">{renderPage()}</div>
        <div className="bg-gray-50 px-6 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={prevPage} disabled={currentPage === 1}>
              <ChevronLeft className="h-4 w-4 mr-1" /> Previous
            </Button>
            <Button variant="outline" size="sm" onClick={nextPage} disabled={currentPage === totalPages}>
              Next <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          <div className="text-sm text-gray-500">
            Page {currentPage} of {totalPages}
          </div>
        </div>
      </div>
    </div>
  )
}
