"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import LessonPage1 from "@/components/lesson-page-1"
import LessonPage2 from "@/components/lesson-page-2"
import LessonPage3 from "@/components/lesson-page-3"
import LessonPage4 from "@/components/lesson-page-4"
import LessonPage5 from "@/components/lesson-page-5"
import LessonPage6 from "@/components/lesson-page-6"
import LessonPage7 from "@/components/lesson-page-7"
import LessonPage8 from "@/components/lesson-page-8"
import FinalQuiz from "@/components/final-quiz"

export default function SignificantDigitsModule() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 9 // 8 lesson pages + final quiz

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      window.scrollTo(0, 0)
    }
  }

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    window.scrollTo(0, 0)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-slate-800">Significant Digits: Precision in Measurements</h1>
          <Progress value={(currentPage / totalPages) * 100} className="mt-2" />
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm text-slate-600">
              Page {currentPage} of {totalPages}
            </span>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <Button
                  key={i}
                  variant={currentPage === i + 1 ? "default" : "outline"}
                  size="sm"
                  onClick={() => goToPage(i + 1)}
                  className="w-8 h-8 p-0"
                >
                  {i + 1}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card className="p-6 shadow-lg">
          {currentPage === 1 && <LessonPage1 onNext={nextPage} />}
          {currentPage === 2 && <LessonPage2 onNext={nextPage} onPrev={prevPage} />}
          {currentPage === 3 && <LessonPage3 onNext={nextPage} onPrev={prevPage} />}
          {currentPage === 4 && <LessonPage4 onNext={nextPage} onPrev={prevPage} />}
          {currentPage === 5 && <LessonPage5 onNext={nextPage} onPrev={prevPage} />}
          {currentPage === 6 && <LessonPage6 onNext={nextPage} onPrev={prevPage} />}
          {currentPage === 7 && <LessonPage7 onNext={nextPage} onPrev={prevPage} />}
          {currentPage === 8 && <LessonPage8 onNext={nextPage} onPrev={prevPage} />}
          {currentPage === 9 && <FinalQuiz onPrev={prevPage} />}
        </Card>
      </main>
    </div>
  )
}
