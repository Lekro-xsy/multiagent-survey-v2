"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ContextStory from "@/components/pages/context-story"
import ProblemBreakdown from "@/components/pages/problem-breakdown"
import WeightVisualization from "@/components/pages/weight-visualization"
import PeanutExpression from "@/components/pages/peanut-expression"
import StudentPeanutExpression from "@/components/pages/student-peanut-expression"
import CostExpression from "@/components/pages/cost-expression"
import StudentCostExpression from "@/components/pages/student-cost-expression"
import FullSolution from "@/components/pages/full-solution"
import TransferProblems from "@/components/pages/transfer-problems"
import Summary from "@/components/pages/summary"

export default function MathModelingLesson() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10

  const pages = [
    <ContextStory key="context" />,
    <ProblemBreakdown key="breakdown" />,
    <WeightVisualization key="visualization" />,
    <PeanutExpression key="peanut-expression" />,
    <StudentPeanutExpression key="student-peanut" />,
    <CostExpression key="cost-expression" />,
    <StudentCostExpression key="student-cost" />,
    <FullSolution key="solution" />,
    <TransferProblems key="transfer" />,
    <Summary key="summary" />,
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-8 px-4">
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg">
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl">Math Modeling: Snack Mix Problem</CardTitle>
            <div className="text-sm font-medium">
              Page {currentPage} of {totalPages}
            </div>
          </div>
          <Progress value={(currentPage / totalPages) * 100} className="h-2 bg-white/20" />
        </CardHeader>
        <CardContent className="p-6">{pages[currentPage - 1]}</CardContent>
        <CardFooter className="flex justify-between border-t p-4">
          <Button variant="outline" onClick={goToPreviousPage} disabled={currentPage === 1}>
            <ChevronLeft className="mr-2 h-4 w-4" /> Previous
          </Button>
          <Button onClick={goToNextPage} disabled={currentPage === totalPages}>
            Next <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
