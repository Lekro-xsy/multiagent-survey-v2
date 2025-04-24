"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import PageLayout from "@/components/page-layout"

export default function Page8() {
  const [timeHours, setTimeHours] = useState("")
  const [timeMinutes, setTimeMinutes] = useState("")
  const [conclusion, setConclusion] = useState("")
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [feedback, setFeedback] = useState("")

  const checkAnswer = () => {
    // Check if time calculation is correct (1.25 hours or 75 minutes)
    const hoursCorrect = /1\.25|5\/4|1\s*1\/4/i.test(timeHours)
    const minutesCorrect = /75|1\.25\s*\*\s*60/i.test(timeMinutes)

    // Check if conclusion mentions that 12 mph is not fast enough
    const conclusionCorrect =
      /not fast enough|no|insufficient|inadequate/i.test(conclusion) &&
      /more than 60|over 60|exceeds 60/i.test(conclusion)

    if ((hoursCorrect || minutesCorrect) && conclusionCorrect) {
      setIsCorrect(true)
      setFeedback(
        "Excellent! Your solution is correct. 12 mph is not fast enough for this 15-mile bike ride in 1 hour.",
      )
    } else {
      setIsCorrect(false)
      setFeedback("Let's try again. Remember to divide 15 miles by 12 mph to find the time.")
    }
  }

  return (
    <PageLayout title="🚀 Same Math, Different Scene!" currentPage={8} totalPages={9}>
      <Card className="border-2 border-green-200 shadow-lg">
        <CardHeader className="bg-green-50">
          <CardTitle className="text-2xl text-green-800">🚀 Same Math, Different Scene!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="rounded-lg bg-blue-50 p-6">
            <h3 className="mb-4 text-xl font-semibold text-blue-800">New Scenario:</h3>

            <div className="relative mx-auto mb-4 h-48 overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg?key=olile"
                alt="Person biking on a trail"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="space-y-3">
              <div className="rounded-lg bg-white p-3 shadow-sm">
                <p className="font-medium text-gray-800">
                  <span className="mr-2 inline-block rounded-full bg-blue-200 px-2 py-1 text-xs font-bold text-blue-800">
                    Distance
                  </span>
                  <span>
                    to bike = <strong className="text-blue-700">15 miles</strong>
                  </span>
                </p>
              </div>

              <div className="rounded-lg bg-white p-3 shadow-sm">
                <p className="font-medium text-gray-800">
                  <span className="mr-2 inline-block rounded-full bg-green-200 px-2 py-1 text-xs font-bold text-green-800">
                    Time goal
                  </span>
                  <span>
                    = <strong className="text-green-700">1 hour</strong>
                  </span>
                </p>
              </div>

              <div className="rounded-lg bg-white p-3 shadow-sm">
                <p className="font-medium text-gray-800">
                  <span className="mr-2 inline-block rounded-full bg-purple-200 px-2 py-1 text-xs font-bold text-purple-800">
                    Biking speed
                  </span>
                  <span>
                    = <strong className="text-purple-700">12 miles per hour</strong>
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-lg bg-yellow-100 p-3 text-center">
              <p className="text-yellow-800">
                <strong>Question:</strong> Will you reach your destination in time?
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
                  Convert to minutes (if needed):
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
                  Will you reach your destination in time? Why?
                </Label>
                <Textarea
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
          <Link href="/page7">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
          </Link>
          <Link href="/page9">
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
