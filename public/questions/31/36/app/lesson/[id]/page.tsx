"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, ArrowRight, CheckCircle2, HelpCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"

import { LessonContent } from "@/components/lesson-content"
import { lessonData } from "@/lib/lesson-data"

export default function LessonPage() {
  const params = useParams()
  const router = useRouter()
  const { toast } = useToast()
  const [currentPage, setCurrentPage] = useState(1)
  const [showHint, setShowHint] = useState(false)
  const [completed, setCompleted] = useState<number[]>([])

  useEffect(() => {
    const id = Number(params.id)
    if (isNaN(id) || id < 1 || id > 9) {
      router.push("/lesson/1")
    } else {
      setCurrentPage(id)
    }
  }, [params.id, router])

  const handleComplete = () => {
    if (!completed.includes(currentPage)) {
      setCompleted([...completed, currentPage])
      toast({
        title: "Great job!",
        description: "You've completed this section.",
        variant: "default",
      })
    }
  }

  const handleNext = () => {
    if (currentPage < 9) {
      router.push(`/lesson/${currentPage + 1}`)
    }
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      router.push(`/lesson/${currentPage - 1}`)
    }
  }

  const toggleHint = () => {
    setShowHint(!showHint)
  }

  const progress = (completed.length / 9) * 100

  return (
    <div className="container mx-auto py-6">
      <div className="mb-6 flex items-center justify-between">
        <Link href="/">
          <Button variant="outline" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Progress:</span>
          <Progress value={progress} className="w-40" />
          <span className="text-sm font-medium">{Math.round(progress)}%</span>
        </div>
      </div>

      <Card className="mx-auto max-w-4xl">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">{lessonData[currentPage - 1]?.title || "Loading..."}</CardTitle>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Page {currentPage} of 9</span>
              {completed.includes(currentPage) && <CheckCircle2 className="h-5 w-5 text-green-500" />}
            </div>
          </div>
          <Separator />
        </CardHeader>
        <CardContent className="min-h-[400px] p-6">
          <LessonContent pageId={currentPage} showHint={showHint} />
        </CardContent>
        <CardFooter className="flex justify-between border-t p-4">
          <div>
            <Button variant="outline" onClick={toggleHint}>
              <HelpCircle className="mr-2 h-4 w-4" />
              {showHint ? "Hide Hint" : "Show Hint"}
            </Button>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handlePrevious} disabled={currentPage === 1}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            <Button onClick={handleComplete}>Mark as Complete</Button>
            <Button onClick={handleNext} disabled={currentPage === 9}>
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
