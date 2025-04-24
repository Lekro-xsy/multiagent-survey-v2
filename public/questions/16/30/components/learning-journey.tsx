"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContextStory } from "./pages/context-story"
import { ProblemBreakdown } from "./pages/problem-breakdown"
import { VisualizingRelationship } from "./pages/visualizing-relationship"
import { BuildingModel } from "./pages/building-model"
import { StudentSolves } from "./pages/student-solves"
import { FullSolution } from "./pages/full-solution"
import { NearTransfer } from "./pages/near-transfer"
import { FarTransfer } from "./pages/far-transfer"
import { Summary } from "./pages/summary"
import { Progress } from "@/components/ui/progress"

export function LearningJourney() {
  const [currentPage, setCurrentPage] = useState(0)
  const [completedPages, setCompletedPages] = useState<boolean[]>(Array(9).fill(false))

  const pages = [
    <ContextStory key="context" onComplete={() => markPageComplete(0)} />,
    <ProblemBreakdown key="breakdown" onComplete={() => markPageComplete(1)} />,
    <VisualizingRelationship key="visualize" onComplete={() => markPageComplete(2)} />,
    <BuildingModel key="model" onComplete={() => markPageComplete(3)} />,
    <StudentSolves key="solve" onComplete={() => markPageComplete(4)} />,
    <FullSolution key="solution" onComplete={() => markPageComplete(5)} />,
    <NearTransfer key="near" onComplete={() => markPageComplete(6)} />,
    <FarTransfer key="far" onComplete={() => markPageComplete(7)} />,
    <Summary key="summary" onComplete={() => markPageComplete(8)} />,
  ]

  const markPageComplete = (pageIndex: number) => {
    const newCompletedPages = [...completedPages]
    newCompletedPages[pageIndex] = true
    setCompletedPages(newCompletedPages)
  }

  const goToNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1)
      window.scrollTo(0, 0)
    }
  }

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
      window.scrollTo(0, 0)
    }
  }

  const progressPercentage = Math.round(((currentPage + 1) / pages.length) * 100)

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-6 flex items-center gap-2">
        <Progress value={progressPercentage} className="h-2" />
        <span className="text-sm font-medium text-orange-800">{progressPercentage}%</span>
      </div>

      <div className="rounded-xl border border-orange-200 bg-white p-6 shadow-lg">
        {pages[currentPage]}

        <div className="mt-8 flex justify-between">
          <Button
            variant="outline"
            onClick={goToPreviousPage}
            disabled={currentPage === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" /> Previous
          </Button>
          <Button
            onClick={goToNextPage}
            disabled={currentPage === pages.length - 1}
            className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700"
          >
            Next <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
