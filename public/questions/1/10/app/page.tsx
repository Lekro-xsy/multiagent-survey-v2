"use client"

import { useState } from "react"
import { LessonLayout } from "@/components/lesson-layout"
import { PageOne } from "@/components/pages/page-one"
import { PageTwo } from "@/components/pages/page-two"
import { PageThree } from "@/components/pages/page-three"
import { PageFour } from "@/components/pages/page-four"
import { PageFive } from "@/components/pages/page-five"
import { PageSix } from "@/components/pages/page-six"
import { PageSeven } from "@/components/pages/page-seven"
import { PageEight } from "@/components/pages/page-eight"
import { PageNine } from "@/components/pages/page-nine"

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 9

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleGoToPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber)
    }
  }

  const renderCurrentPage = () => {
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
    <LessonLayout
      currentPage={currentPage}
      totalPages={totalPages}
      onNext={handleNext}
      onPrevious={handlePrevious}
      onGoToPage={handleGoToPage}
    >
      {renderCurrentPage()}
    </LessonLayout>
  )
}
