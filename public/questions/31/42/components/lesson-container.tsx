"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContextStory } from "@/components/pages/context-story"
import { ProblemBreakdown } from "@/components/pages/problem-breakdown"
import { VisualizeStructure } from "@/components/pages/visualize-structure"
import { GuidedSetup } from "@/components/pages/guided-setup"
import { StudentSolve } from "@/components/pages/student-solve"
import { RevealSolution } from "@/components/pages/reveal-solution"
import { NearTransfer } from "@/components/pages/near-transfer"
import { FarTransfer } from "@/components/pages/far-transfer"
import { Summary } from "@/components/pages/summary"
import { Progress } from "@/components/ui/progress"

export function LessonContainer() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 9

  const pages = [
    <ContextStory key="page-1" />,
    <ProblemBreakdown key="page-2" />,
    <VisualizeStructure key="page-3" />,
    <GuidedSetup key="page-4" />,
    <StudentSolve key="page-5" />,
    <RevealSolution key="page-6" />,
    <NearTransfer key="page-7" />,
    <FarTransfer key="page-8" />,
    <Summary key="page-9" />,
  ]

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      window.scrollTo(0, 0)
    }
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      window.scrollTo(0, 0)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 bg-sky-50 border-b border-sky-100">
          <h1 className="text-2xl font-bold text-sky-900">Revenue Modeling: Airline Example</h1>
          <div className="flex items-center mt-4 space-x-2">
            <Progress value={(currentPage / totalPages) * 100} className="h-2" />
            <span className="text-sm font-medium text-sky-700">
              {currentPage} of {totalPages}
            </span>
          </div>
        </div>

        <div className="p-6 min-h-[600px]">{pages[currentPage - 1]}</div>

        <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-between">
          <Button
            variant="outline"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="flex items-center"
          >
            <ChevronLeft className="h-4 w-4 mr-2" /> Previous
          </Button>
          <Button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="flex items-center bg-sky-600 hover:bg-sky-700"
          >
            Next <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}
