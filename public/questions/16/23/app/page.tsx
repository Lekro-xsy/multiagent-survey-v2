"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Page1 from "@/components/pages/page-1"
import Page2 from "@/components/pages/page-2"
import Page3 from "@/components/pages/page-3"
import Page4 from "@/components/pages/page-4"
import Page5 from "@/components/pages/page-5"
import Page6 from "@/components/pages/page-6"
import Page7 from "@/components/pages/page-7"
import Page8 from "@/components/pages/page-8"
import Page9 from "@/components/pages/page-9"

export default function MathLearningApp() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 9

  const pages = [
    <Page1 key="page1" />,
    <Page2 key="page2" />,
    <Page3 key="page3" />,
    <Page4 key="page4" />,
    <Page5 key="page5" />,
    <Page6 key="page6" />,
    <Page7 key="page7" />,
    <Page8 key="page8" />,
    <Page9 key="page9" />,
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <Card className="p-6 shadow-lg">
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">Math Modeling: Sales & Commission</h1>
            <div className="text-sm text-gray-500">
              Page {currentPage} of {totalPages}
            </div>
          </div>

          <Progress value={(currentPage / totalPages) * 100} className="mb-6" />

          <div className="min-h-[500px]">{pages[currentPage - 1]}</div>

          <div className="mt-8 flex justify-between">
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
        </Card>
      </div>
    </div>
  )
}
