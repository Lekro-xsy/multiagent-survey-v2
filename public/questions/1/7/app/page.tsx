"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import PageOne from "@/components/pages/page-one"
import PageTwo from "@/components/pages/page-two"
import PageThree from "@/components/pages/page-three"
import PageFour from "@/components/pages/page-four"
import PageFive from "@/components/pages/page-five"
import PageSix from "@/components/pages/page-six"
import PageSeven from "@/components/pages/page-seven"
import PageEight from "@/components/pages/page-eight"
import PageNine from "@/components/pages/page-nine"

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 9

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

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <PageOne />
      case 2:
        return <PageTwo />
      case 3:
        return <PageThree />
      case 4:
        return <PageFour />
      case 5:
        return <PageFive />
      case 6:
        return <PageSix />
      case 7:
        return <PageSeven />
      case 8:
        return <PageEight />
      case 9:
        return <PageNine />
      default:
        return <PageOne />
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-4 md:p-8">
      <div className="mx-auto max-w-4xl">
        <Card className="mb-4 p-4 shadow-lg">
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-xl font-bold text-blue-800 md:text-2xl">Math in Action: The Cola Pyramid Challenge</h1>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <HelpCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Progress value={(currentPage / totalPages) * 100} className="h-2" />
        </Card>

        <Card className="mb-4 min-h-[500px] p-6 shadow-lg">{renderPage()}</Card>

        <div className="flex justify-between">
          <Button onClick={prevPage} disabled={currentPage === 1} className="flex items-center gap-1">
            <ChevronLeft className="h-4 w-4" /> Previous
          </Button>
          <Button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700"
          >
            Next <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </main>
  )
}
