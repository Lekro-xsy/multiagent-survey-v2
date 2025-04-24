"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import PageOne from "@/components/pages/page-one"
import PageTwo from "@/components/pages/page-two"
import PageThree from "@/components/pages/page-three"
import PageFour from "@/components/pages/page-four"
import PageFive from "@/components/pages/page-five"
import PageSix from "@/components/pages/page-six"
import PageSeven from "@/components/pages/page-seven"
import PageEight from "@/components/pages/page-eight"
import PageNine from "@/components/pages/page-nine"

export default function Page() {
  const params = useParams()
  const router = useRouter()
  const pageId = Number.parseInt(params.id as string)

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Calculate progress percentage
    setProgress((pageId / 9) * 100)
  }, [pageId])

  const goToNextPage = () => {
    if (pageId < 9) {
      router.push(`/page/${pageId + 1}`)
    }
  }

  const goToPrevPage = () => {
    if (pageId > 1) {
      router.push(`/page/${pageId - 1}`)
    } else {
      router.push("/")
    }
  }

  const renderPage = () => {
    switch (pageId) {
      case 1:
        return <PageOne onNext={goToNextPage} />
      case 2:
        return <PageTwo onNext={goToNextPage} />
      case 3:
        return <PageThree onNext={goToNextPage} />
      case 4:
        return <PageFour onNext={goToNextPage} />
      case 5:
        return <PageFive onNext={goToNextPage} />
      case 6:
        return <PageSix onNext={goToNextPage} />
      case 7:
        return <PageSeven onNext={goToNextPage} />
      case 8:
        return <PageEight onNext={goToNextPage} />
      case 9:
        return <PageNine />
      default:
        return <div>Page not found</div>
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50">
      <div className="container mx-auto px-4 py-8">
        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
          <div
            className="bg-green-600 h-2.5 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Page indicator */}
        <div className="flex justify-between items-center mb-8">
          <Button variant="outline" onClick={goToPrevPage} className="flex items-center">
            <ChevronLeft className="mr-2 h-4 w-4" />
            {pageId === 1 ? "Home" : "Previous"}
          </Button>

          <div className="text-sm font-medium text-gray-600">Page {pageId} of 9</div>

          {pageId < 9 && (
            <Button variant="outline" onClick={goToNextPage} className="flex items-center">
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          )}
          {pageId === 9 && (
            <Link href="/">
              <Button variant="outline" className="flex items-center">
                Restart
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>

        {/* Main content */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">{renderPage()}</div>
      </div>
    </div>
  )
}
