"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  ChevronRight,
  ChevronLeft,
  Leaf,
  Calculator,
  Table,
  BookOpen,
  RefreshCw,
  Brain,
  CheckCircle2,
} from "lucide-react"
import Page1 from "@/components/pages/page1"
import Page2 from "@/components/pages/page2"
import Page3 from "@/components/pages/page3"
import Page4 from "@/components/pages/page4"
import Page5 from "@/components/pages/page5"
import Page6 from "@/components/pages/page6"
import Page7 from "@/components/pages/page7"
import Page8 from "@/components/pages/page8"
import Page9 from "@/components/pages/page9"

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 9

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

  const renderPageContent = () => {
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

  const pageIcons = [
    <Leaf key="1" className="h-5 w-5" />,
    <BookOpen key="2" className="h-5 w-5" />,
    <RefreshCw key="3" className="h-5 w-5" />,
    <Table key="4" className="h-5 w-5" />,
    <Calculator key="5" className="h-5 w-5" />,
    <CheckCircle2 key="6" className="h-5 w-5" />,
    <RefreshCw key="7" className="h-5 w-5" />,
    <Brain key="8" className="h-5 w-5" />,
    <CheckCircle2 key="9" className="h-5 w-5" />,
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 py-8">
      <div className="container mx-auto px-4">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lg">
                  Page {currentPage}/{totalPages}
                </span>
                <div className="bg-green-100 p-2 rounded-full">{pageIcons[currentPage - 1]}</div>
              </div>
              <Progress value={(currentPage / totalPages) * 100} className="w-1/2" />
            </div>

            <div className="min-h-[60vh]">{renderPageContent()}</div>

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="h-4 w-4" /> Previous
              </Button>
              <Button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
              >
                Next <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
