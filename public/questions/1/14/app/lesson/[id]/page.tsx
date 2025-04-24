"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import LessonContent from "@/components/lesson-content"

export default function LessonPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const lessonId = Number.parseInt(params.id)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Calculate progress based on current lesson
    setProgress((lessonId / 9) * 100)
  }, [lessonId])

  const goToNextLesson = () => {
    if (lessonId < 9) {
      router.push(`/lesson/${lessonId + 1}`)
    } else {
      router.push("/completion")
    }
  }

  const goToPreviousLesson = () => {
    if (lessonId > 1) {
      router.push(`/lesson/${lessonId - 1}`)
    } else {
      router.push("/")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-blue-50 pb-12">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" className="text-pink-600 hover:text-pink-700">
              Home
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-600">Lesson {lessonId} of 9</span>
            <div className="w-48">
              <Progress value={progress} className="h-2 bg-pink-100" />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-4xl">
          <Card className="border-2 border-pink-200 p-6 shadow-lg">
            <LessonContent lessonId={lessonId} />

            <div className="mt-8 flex justify-between">
              <Button
                variant="outline"
                onClick={goToPreviousLesson}
                disabled={lessonId === 1}
                className="border-pink-200 text-pink-600 hover:bg-pink-50 hover:text-pink-700"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <Button onClick={goToNextLesson} className="bg-pink-600 hover:bg-pink-700">
                {lessonId === 9 ? "Complete" : "Next"}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
