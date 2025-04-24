"use client"

import { useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import confetti from "canvas-confetti"
import { ArrowLeft, Award, Home, RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useLessonProgress } from "@/hooks/use-lesson-progress"

export default function LessonCompletePage() {
  const router = useRouter()
  const { resetProgress } = useLessonProgress()

  useEffect(() => {
    // Trigger confetti when the page loads
    const duration = 3 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min
    }

    const interval: NodeJS.Timeout = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)
      // since particles fall down, start a bit higher than random
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    }, 250)

    return () => clearInterval(interval)
  }, [])

  const handleReset = () => {
    resetProgress()
    router.push("/lesson/1")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-amber-50">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center text-amber-900 hover:text-amber-700">
            <Home className="mr-2 h-5 w-5" />
            <span className="font-medium">Math in Motion</span>
          </Link>
        </div>
      </header>

      <main className="container flex-1 py-12">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="rounded-full bg-amber-100 p-6">
              <Award className="h-16 w-16 text-amber-600" />
            </div>
          </div>

          <h1 className="mb-4 text-4xl font-bold">Congratulations!</h1>
          <p className="mb-8 text-xl text-muted-foreground">
            You've successfully completed the Bakery Truck Problem lesson and earned the "Delivery Distance Pro" badge!
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Your Achievement</CardTitle>
              <CardDescription>You've mastered these key concepts:</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="ml-6 list-disc space-y-2 text-left">
                <li>Building timelines to manage driving vs. stopping time</li>
                <li>
                  Using the formula: <strong>Distance = Speed × Time</strong>
                </li>
                <li>Identifying non-driving time when solving distance problems</li>
                <li>Applying math concepts to real-world scenarios</li>
              </ul>
            </CardContent>
            <CardFooter className="flex justify-center gap-4">
              <Button variant="outline" onClick={handleReset} className="flex items-center gap-2">
                <RefreshCw className="h-4 w-4" />
                Restart Lesson
              </Button>
              <Link href="/">
                <Button className="bg-amber-600 hover:bg-amber-700">
                  <Home className="mr-2 h-4 w-4" />
                  Return Home
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <div className="flex justify-center gap-4">
            <Link href="/lesson/9">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Summary
              </Button>
            </Link>
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
