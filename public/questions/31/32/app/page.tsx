"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import LessonNavigation from "@/components/lesson-navigation"
import BookVisualization from "@/components/book-visualization"
import FactOrganizer from "@/components/fact-organizer"
import EquationBuilder from "@/components/equation-builder"
import ProblemSolver from "@/components/problem-solver"
import SolutionExplanation from "@/components/solution-explanation"
import TransferProblem from "@/components/transfer-problem"
import FinalQuiz from "@/components/final-quiz"

export default function Home() {
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

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-800">Math Problem Solver: Facing Pages</h1>
          <div className="mt-4">
            <Progress value={(currentPage / totalPages) * 100} className="h-2 w-full" />
            <p className="mt-2 text-sm text-slate-600">
              Page {currentPage} of {totalPages}
            </p>
          </div>
        </div>

        <div className="rounded-lg border bg-white p-6 shadow-sm">
          {currentPage === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-800">📖 What Are the Page Numbers?</h2>
              <div className="flex flex-col items-center gap-8 md:flex-row">
                <div className="flex-1">
                  <p className="text-lg text-slate-700">
                    In your math textbook, two facing pages (left and right) have a product of 306.
                  </p>
                  <p className="mt-4 text-lg text-slate-700">Facing pages are consecutive numbers (like 14 and 15).</p>
                  <p className="mt-4 text-lg font-medium text-slate-800">What are the two page numbers?</p>
                  <Button onClick={goToNextPage} className="mt-6 bg-blue-600 hover:bg-blue-700">
                    Open the Book! <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="flex-1">
                  <BookVisualization showNumbers={false} leftPage="?" rightPage="?" />
                </div>
              </div>
            </div>
          )}

          {currentPage === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-800">🧩 What Information Do We Know?</h2>
              <div className="flex flex-col items-center gap-8 md:flex-row">
                <div className="flex-1">
                  <FactOrganizer />
                </div>
                <div className="flex-1 rounded-lg bg-blue-50 p-4">
                  <h3 className="mb-4 text-xl font-medium text-slate-800">Tip:</h3>
                  <p className="text-slate-700">Set the smaller page number as n, so the next page is n + 1.</p>
                  <div className="mt-4 rounded-md bg-yellow-50 p-3 text-yellow-800">
                    <p className="font-medium">Remember:</p>
                    <p>Facing pages are always consecutive integers.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentPage === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-800">📊 See How Pages Work</h2>
              <div className="flex flex-col items-center gap-8 md:flex-row">
                <div className="flex-1">
                  <BookVisualization showNumbers={true} leftPage="n" rightPage="n+1" showLabels={true} />
                </div>
                <div className="flex-1">
                  <div className="rounded-lg bg-slate-100 p-4">
                    <h3 className="mb-2 text-xl font-medium text-slate-800">Key Concept:</h3>
                    <p className="mb-4 text-slate-700">The product of the two facing pages equals 306.</p>
                    <div className="flex items-center justify-center rounded-md bg-white p-4 shadow-sm">
                      <span className="text-xl font-medium text-slate-800">n × (n+1) = 306</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentPage === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-800">🧮 Setting Up the Equation</h2>
              <EquationBuilder />
            </div>
          )}

          {currentPage === 5 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-800">✍️ Now You Solve It!</h2>
              <ProblemSolver />
            </div>
          )}

          {currentPage === 6 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-800">🎯 Check Your Solution!</h2>
              <SolutionExplanation problem="facing-pages" equation="n(n+1) = 306" solution="n = 17, n+1 = 18" />
            </div>
          )}

          {currentPage === 7 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-800">🔄 Another Textbook Puzzle!</h2>
              <TransferProblem
                type="near"
                problem="The product of two facing pages is 272. What are the page numbers?"
                hint="Use the same approach as before."
              />
            </div>
          )}

          {currentPage === 8 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-800">🚀 Same Math, Different Story!</h2>
              <TransferProblem
                type="far"
                problem="Two consecutive locker numbers have a product of 506. What are the locker numbers?"
                hint="Apply the same mathematical model to this new scenario."
              />
            </div>
          )}

          {currentPage === 9 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-800">📚 Review and Practice!</h2>
              <FinalQuiz />
            </div>
          )}

          <LessonNavigation
            currentPage={currentPage}
            totalPages={totalPages}
            goToNextPage={goToNextPage}
            goToPreviousPage={goToPreviousPage}
            goToPage={goToPage}
          />
        </div>
      </div>
    </main>
  )
}
