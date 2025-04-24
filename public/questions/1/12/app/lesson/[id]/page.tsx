"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

import Page1 from "@/components/lesson/page1"
import Page2 from "@/components/lesson/page2"
import Page3 from "@/components/lesson/page3"
import Page4 from "@/components/lesson/page4"
import Page5 from "@/components/lesson/page5"
import Page6 from "@/components/lesson/page6"
import Page7 from "@/components/lesson/page7"
import Page8 from "@/components/lesson/page8"
import Page9 from "@/components/lesson/page9"

export default function LessonPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const pageId = Number.parseInt(params.id)
  const [showHint, setShowHint] = useState(false)

  // Validate page number
  useEffect(() => {
    if (isNaN(pageId) || pageId < 1 || pageId > 9) {
      router.push("/lesson/1")
    }
  }, [pageId, router])

  const totalPages = 9
  const progress = (pageId / totalPages) * 100

  const getPageComponent = () => {
    switch (pageId) {
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

  const getPageHint = () => {
    switch (pageId) {
      case 1:
        return "Think about what it means to go around something completely."
      case 2:
        return "Remember that a rectangle has 2 lengths and 2 widths."
      case 3:
        return "Notice how we can group the sides to create the formula."
      case 4:
        return "Substitute the actual values into the formula."
      case 5:
        return "First add the numbers inside the parentheses, then multiply by 2."
      case 6:
        return "Check your work against the solution."
      case 7:
        return "Apply the same formula with different numbers."
      case 8:
        return "This is still a perimeter problem, even though it's about a race track."
      case 9:
        return "Review what you've learned about perimeter."
      default:
        return "Think about the meaning of perimeter."
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 flex flex-col">
      <div className="container mx-auto p-4 flex-1 flex flex-col">
        {/* Progress bar */}
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-500 mb-1">
            <span>
              Step {pageId} of {totalPages}
            </span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Main content */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex-1 flex flex-col">
          {getPageComponent()}

          {/* Hint system */}
          <div className="mt-4">
            {showHint ? (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800">{getPageHint()}</p>
              </div>
            ) : (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowHint(true)}
                className="text-yellow-600 border-yellow-300 hover:bg-yellow-50"
              >
                <HelpCircle className="mr-2 h-4 w-4" />
                Need a hint?
              </Button>
            )}
          </div>

          {/* Navigation */}
          <div className="mt-6 flex justify-between">
            {pageId > 1 ? (
              <Link href={`/lesson/${pageId - 1}`}>
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
              </Link>
            ) : (
              <Link href="/">
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Home
                </Button>
              </Link>
            )}

            {pageId < totalPages ? (
              <Link href={`/lesson/${pageId + 1}`}>
                <Button>
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            ) : (
              <Link href="/">
                <Button>
                  Finish
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
