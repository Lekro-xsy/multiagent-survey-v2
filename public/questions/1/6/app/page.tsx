"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight, Home } from "lucide-react"
import LessonContent from "@/components/lesson-content"

export default function MathLearningApp() {
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

  const goToHome = () => {
    setCurrentPage(1)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 p-4 md:p-8">
      <div className="mx-auto max-w-4xl">
        <header className="mb-6 flex items-center justify-between">
          <Button variant="ghost" onClick={goToHome} className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            <span className="hidden md:inline">Home</span>
          </Button>
          <div className="text-center">
            <h1 className="text-xl font-bold text-indigo-800 md:text-2xl">Math Shopping Challenge</h1>
            <p className="text-sm text-indigo-600">Learning through real-world problems</p>
          </div>
          <div className="w-[72px]"></div> {/* Spacer for alignment */}
        </header>

        <div className="mb-4">
          <div className="mb-1 flex justify-between text-xs text-indigo-700">
            <span>
              Step {currentPage} of {totalPages}
            </span>
            <span>{Math.round((currentPage / totalPages) * 100)}% Complete</span>
          </div>
          <Progress value={(currentPage / totalPages) * 100} className="h-2 bg-indigo-200" />
        </div>

        <Card className="overflow-hidden rounded-xl border-indigo-200 bg-white p-4 shadow-lg md:p-6">
          <LessonContent currentPage={currentPage} />
        </Card>

        <div className="mt-6 flex justify-between">
          <Button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          <Button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
