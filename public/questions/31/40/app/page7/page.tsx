"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import PageLayout from "@/components/page-layout"

export default function Page7() {
  const [timeHours, setTimeHours] = useState("")
  const [timeMinutes, setTimeMinutes] = useState("")
  const [conclusion, setConclusion] = useState("")
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [feedback, setFeedback] = useState("")

  const checkAnswer = () => {
    // Check if time calculation is correct (0.4 hours or 24 minutes)
    const hoursCorrect = /0\.4|2\/5/i.test(timeHours)
    const minutesCorrect = /24|0\.4\s*\*\s*60/i.test(timeMinutes)

    // Check if conclusion mentions that 5 mph is fast enough
    const conclusionCorrect =
      /fast enough|yes|sufficient|adequate/i.test(conclusion) && /less than 30|under 30|below 30/i.test(conclusion)

    if ((hoursCorrect || minutesCorrect) && conclusionCorrect) {
      setIsCorrect(true)
      setFeedback("Excellent! Your solution is correct. 5 mph is fast enough for this 2-mile jog.")
    } else {
      setIsCorrect(false)
      setFeedback("Let's try again. Remember to divide 2 miles by 5 mph to find the time.")
    }
  }

  return (
    <PageLayout title="🔄 Another Jogging Challenge!" currentPage={7} totalPages={9}>
      <Card className="border-2 border-green-200 shadow-lg">
        <CardHeader className="bg-green-50">
          <CardTitle className="text-2xl text-green-800">🔄 Another Jogging Challenge!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="rounded-lg bg-blue-50 p-6">
            <h3 className="mb-4 text-xl font-semibold text-blue-800">New Scenario:</h3>

            <div className="space-y-3">
              <div className="rounded-lg bg-white p-3 shadow-sm">
                <p className="font-medium text-gray-800">
                  <span className="mr-2 inline-block rounded-full bg-blue-200 px-2 py-1 text-xs font-bold text-blue-800">
                    Distance
                  </span>
                  <span>
                    to jog = <strong className="text-blue-700">2 miles</strong>
                  </span>
                </p>
              </div>

              <div className="rounded-lg bg-white p-3 shadow-sm">
                <p className="font-medium text-gray-800">
                  <span className="mr-2 inline-block rounded-full bg-green-200 px-2 py-1 text-xs font-bold text-green-800">
                    Time goal
                  </span>
                  <span>
                    = <strong className="text-green-700">20 minutes</strong>
                  </span>
                </p>
              </div>

              <div className="rounded-lg bg-white p-3 shadow-sm">
                <p className="font-medium text-gray-800">
                  <span className="mr-2 inline-block rounded-full bg-purple-200 px-2 py-1 text-xs font-bold text-purple-800">
                    Jogging speed
                  </span>
                  <span>
                    = <strong className="text-purple-700">5 miles per hour</strong>
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-lg bg-yellow-100 p-3 text-center">
              <p className="text-yellow-800">
                <strong>Question:</strong> Is your speed fast enough to meet your goal?
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-gray-100 p-6">
            <h3 className="mb-4 text-center text-lg font-semibold text-gray-800">Solve the Problem</h3>

            <div className="space-y-4">
              <div>
                <Label htmlFor="timeHours" className="text-gray-800">
                  Calculate the time (in hours):
                </Label>
                <Input
                  id="timeHours"
                  placeholder="Time = ... hours"
                  className="mt-1"
                  value={timeHours}
                  onChange={(e) => setTimeHours(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="timeMinutes" className="text-gray-800">
                  Convert to minutes:
                </Label>
                <Input
                  id="timeMinutes"
                  placeholder="Time = ... minutes"
                  className="mt-1"
                  value={timeMinutes}
                  onChange={(e) => setTimeMinutes(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="conclusion" className="text-gray-800">
                  Is 5 mph fast enough? Why?
                </Label>
                <Input
                  id="conclusion"
                  placeholder="Yes/No, because..."
                  className="mt-1"
                  value={conclusion}
                  onChange={(e) => setConclusion(e.target.value)}
                />
              </div>

              <Button
                onClick={checkAnswer}
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={(!timeHours && !timeMinutes) || !conclusion}
              >
                Check My Answer
              </Button>

              {isCorrect !== null && (
                <div
                  className={`mt-4 flex items-center justify-center rounded-lg p-3 ${isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                >
                  {isCorrect && <CheckCircle className="mr-2 h-5 w-5" />}
                  <span>{feedback}</span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between pb-6">
          <Link href="/page6">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
          </Link>
          <Link href="/page8">
            <Button className="bg-green-600 hover:bg-green-700" disabled={!isCorrect}>
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </PageLayout>
  )
}
