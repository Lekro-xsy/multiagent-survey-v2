"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Trophy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import PageLayout from "@/components/page-layout"

export default function Page9() {
  const [selectedFormula, setSelectedFormula] = useState<string | null>(null)
  const [selectedConversion, setSelectedConversion] = useState<string | null>(null)
  const [realWorldExample, setRealWorldExample] = useState("")
  const [isCompleted, setIsCompleted] = useState(false)

  const checkAnswers = () => {
    if (selectedFormula === "time" && selectedConversion === "false" && realWorldExample.length > 10) {
      setIsCompleted(true)
    }
  }

  return (
    <PageLayout title="📚 Review and Reflect" currentPage={9} totalPages={9}>
      <Card className="border-2 border-green-200 shadow-lg">
        <CardHeader className="bg-green-50">
          <CardTitle className="text-2xl text-green-800">📚 Review and Reflect</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="rounded-lg bg-blue-50 p-6">
            <h3 className="mb-4 text-xl font-semibold text-blue-800">Key Takeaways:</h3>

            <div className="space-y-3">
              <div className="rounded-lg bg-white p-3 shadow-sm">
                <p className="font-medium text-gray-800">
                  <span className="mr-2 inline-block rounded-full bg-blue-200 px-2 py-1 text-xs font-bold text-blue-800">
                    1
                  </span>
                  <span>Use the correct form of the distance-speed-time formula.</span>
                </p>
              </div>

              <div className="rounded-lg bg-white p-3 shadow-sm">
                <p className="font-medium text-gray-800">
                  <span className="mr-2 inline-block rounded-full bg-blue-200 px-2 py-1 text-xs font-bold text-blue-800">
                    2
                  </span>
                  <span>Convert units carefully (especially minutes and hours).</span>
                </p>
              </div>

              <div className="rounded-lg bg-white p-3 shadow-sm">
                <p className="font-medium text-gray-800">
                  <span className="mr-2 inline-block rounded-full bg-blue-200 px-2 py-1 text-xs font-bold text-blue-800">
                    3
                  </span>
                  <span>Judge if the planned speed meets the time goal.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-gray-100 p-6">
            <h3 className="mb-4 text-center text-lg font-semibold text-gray-800">Mini-Quiz</h3>

            <div className="space-y-6">
              <div>
                <p className="mb-2 font-medium text-gray-800">
                  1. What formula would you use to find time if given distance and speed?
                </p>
                <RadioGroup value={selectedFormula} onValueChange={setSelectedFormula}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="distance" id="distance" />
                    <Label htmlFor="distance">Time = Speed × Distance</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="time" id="time" />
                    <Label htmlFor="time">Time = Distance ÷ Speed</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="speed" id="speed" />
                    <Label htmlFor="speed">Time = Speed ÷ Distance</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <p className="mb-2 font-medium text-gray-800">2. True or False: 45 minutes = 0.45 hours</p>
                <RadioGroup value={selectedConversion} onValueChange={setSelectedConversion}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="true" id="true" />
                    <Label htmlFor="true">True</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="false" id="false" />
                    <Label htmlFor="false">False</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <p className="mb-2 font-medium text-gray-800">
                  3. Write a new real-world situation modeled by: Time = Distance ÷ Speed
                </p>
                <Textarea
                  placeholder="Write your example here..."
                  className="mt-1"
                  value={realWorldExample}
                  onChange={(e) => setRealWorldExample(e.target.value)}
                />
              </div>

              <Button
                onClick={checkAnswers}
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={!selectedFormula || !selectedConversion || realWorldExample.length < 10}
              >
                Submit Quiz
              </Button>
            </div>
          </div>

          {isCompleted && (
            <div className="rounded-lg bg-green-100 p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-green-200 p-3">
                  <Trophy className="h-10 w-10 text-green-700" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold text-green-800">Congratulations!</h3>
              <p className="text-green-800">You've earned the "Speed Solver" badge! 🏆</p>
              <p className="mt-2 text-green-700">
                You've successfully completed this lesson on distance, speed, and time relationships.
              </p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between pb-6">
          <Link href="/page8">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
          </Link>
          <Link href="/">
            <Button className="bg-green-600 hover:bg-green-700" disabled={!isCompleted}>
              Complete Lesson
              <CheckCircle className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </PageLayout>
  )
}
