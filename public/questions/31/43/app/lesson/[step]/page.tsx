"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, ArrowRight, CheckCircle2, HelpCircle, Home } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { LessonContent } from "@/components/lesson-content"
import { useLessonProgress } from "@/hooks/use-lesson-progress"

export default function LessonPage() {
  const params = useParams()
  const router = useRouter()
  const currentStep = Number.parseInt(params.step as string)
  const { progress, updateProgress, isStepCompleted } = useLessonProgress()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const totalSteps = 9
  const progressPercentage = (progress.length / totalSteps) * 100

  const handleNext = () => {
    if (currentStep < totalSteps) {
      updateProgress(currentStep)
      router.push(`/lesson/${currentStep + 1}`)
    } else {
      updateProgress(currentStep)
      router.push("/lesson/complete")
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      router.push(`/lesson/${currentStep - 1}`)
    } else {
      router.push("/")
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-amber-50">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center text-amber-900 hover:text-amber-700">
            <Home className="mr-2 h-5 w-5" />
            <span className="font-medium">Math in Motion</span>
          </Link>
          <div className="flex items-center gap-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <HelpCircle className="h-4 w-4" />
                    <span className="sr-only">Help</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Need help? Click for hints!</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">
                Step {currentStep} of {totalSteps}
              </span>
              <Progress value={progressPercentage} className="h-2 w-24" />
            </div>
          </div>
        </div>
      </header>

      <main className="container flex-1 py-8">
        <div className="mx-auto max-w-4xl">
          <LessonContent step={currentStep} onComplete={() => updateProgress(currentStep)} />

          <Separator className="my-8" />

          <div className="flex items-center justify-between">
            <Button variant="outline" onClick={handlePrevious}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
            <div className="flex gap-2">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <Link key={index} href={`/lesson/${index + 1}`}>
                  <Button
                    variant="outline"
                    size="icon"
                    className={`h-8 w-8 ${
                      currentStep === index + 1
                        ? "border-amber-500 bg-amber-50"
                        : isStepCompleted(index + 1)
                          ? "border-green-500 bg-green-50"
                          : ""
                    }`}
                  >
                    {isStepCompleted(index + 1) ? (
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </Button>
                </Link>
              ))}
            </div>
            <Button onClick={handleNext} className="bg-amber-600 hover:bg-amber-700">
              Next <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>

      <footer className="border-t bg-muted py-4">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Math in Motion. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
