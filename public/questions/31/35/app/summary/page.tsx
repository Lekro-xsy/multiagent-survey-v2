"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, Home } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

export default function SummaryPage() {
  const [quizAnswers, setQuizAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
  })

  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const handleSubmit = () => {
    let newScore = 0

    if (quizAnswers.q1 === "4") newScore += 1
    if (quizAnswers.q2 === "false") newScore += 1
    if (quizAnswers.q3.trim().length > 20) newScore += 1

    setScore(newScore)
    setHasSubmitted(true)
  }

  return (
    <div className="container py-8">
      <Card className="mx-auto max-w-4xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">📚 Wrap-Up and Reflect!</CardTitle>
          <CardDescription>Let's review what we've learned and test your understanding</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div className="rounded-lg bg-blue-50 p-4">
              <h2 className="mb-3 text-xl font-semibold text-blue-800">Key Learning Points</h2>
              <ul className="ml-4 list-disc space-y-2 text-blue-700">
                <li>Recognize patterns in sequences (like perfect squares decreasing: 6², 5², 4², etc.)</li>
                <li>Apply multiplication to find total quantities (number of items × value per item)</li>
                <li>
                  Break down problems into manageable steps:
                  <ol className="ml-6 list-decimal space-y-1 text-blue-700">
                    <li>Identify the pattern</li>
                    <li>Find the specific value using the pattern</li>
                    <li>Apply the appropriate operation (multiplication)</li>
                  </ol>
                </li>
                <li>Transfer mathematical patterns to different contexts</li>
              </ul>
            </div>

            <div className="rounded-lg border p-6">
              <h2 className="mb-4 text-xl font-semibold">Mini-Quiz</h2>

              <div className="space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="q1" className="text-base font-medium">
                    1. What is the number of bricks in the 4th layer if the pattern is decreasing squares?
                  </Label>
                  <RadioGroup
                    id="q1"
                    value={quizAnswers.q1}
                    onValueChange={(value) => setQuizAnswers({ ...quizAnswers, q1: value })}
                    className="space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="16" id="q1-1" />
                      <Label htmlFor="q1-1">16</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="9" id="q1-2" />
                      <Label htmlFor="q1-2">9</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="4" id="q1-3" />
                      <Label htmlFor="q1-3">4</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1" id="q1-4" />
                      <Label htmlFor="q1-4">1</Label>
                    </div>
                  </RadioGroup>
                  {hasSubmitted && (
                    <div className={`mt-2 text-sm ${quizAnswers.q1 === "4" ? "text-green-600" : "text-red-600"}`}>
                      {quizAnswers.q1 === "4" ? (
                        <span className="flex items-center gap-1">
                          <Check className="h-4 w-4" /> Correct! The 4th layer has 3² = 9 bricks.
                        </span>
                      ) : (
                        <span>Incorrect. The 4th layer has 3² = 9 bricks.</span>
                      )}
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <Label htmlFor="q2" className="text-base font-medium">
                    2. True or False: "The 5th layer has more bricks than the 3rd layer."
                  </Label>
                  <RadioGroup
                    id="q2"
                    value={quizAnswers.q2}
                    onValueChange={(value) => setQuizAnswers({ ...quizAnswers, q2: value })}
                    className="space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="true" id="q2-1" />
                      <Label htmlFor="q2-1">True</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="false" id="q2-2" />
                      <Label htmlFor="q2-2">False</Label>
                    </div>
                  </RadioGroup>
                  {hasSubmitted && (
                    <div className={`mt-2 text-sm ${quizAnswers.q2 === "false" ? "text-green-600" : "text-red-600"}`}>
                      {quizAnswers.q2 === "false" ? (
                        <span className="flex items-center gap-1">
                          <Check className="h-4 w-4" /> Correct! The 5th layer has 4 bricks, while the 3rd layer has 16
                          bricks.
                        </span>
                      ) : (
                        <span>Incorrect. The 5th layer has 4 bricks, while the 3rd layer has 16 bricks.</span>
                      )}
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <Label htmlFor="q3" className="text-base font-medium">
                    3. Create your own real-world story involving a layered structure with decreasing quantities.
                  </Label>
                  <Textarea
                    id="q3"
                    value={quizAnswers.q3}
                    onChange={(e) => setQuizAnswers({ ...quizAnswers, q3: e.target.value })}
                    placeholder="Write your story here..."
                    className="min-h-[100px]"
                  />
                  {hasSubmitted && (
                    <div
                      className={`mt-2 text-sm ${quizAnswers.q3.trim().length > 20 ? "text-green-600" : "text-red-600"}`}
                    >
                      {quizAnswers.q3.trim().length > 20 ? (
                        <span className="flex items-center gap-1">
                          <Check className="h-4 w-4" /> Great job creating your own story!
                        </span>
                      ) : (
                        <span>Please write a more detailed story.</span>
                      )}
                    </div>
                  )}
                </div>

                <Button onClick={handleSubmit} className="w-full" disabled={hasSubmitted}>
                  {hasSubmitted ? "Submitted" : "Submit Answers"}
                </Button>
              </div>
            </div>

            {hasSubmitted && (
              <div
                className={`rounded-lg p-4 text-center ${
                  score === 3
                    ? "bg-green-100 text-green-800"
                    : score >= 1
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                }`}
              >
                <h3 className="text-xl font-medium">
                  {score === 3 ? "🏆 Perfect Score!" : score >= 1 ? "👍 Good Effort!" : "🔄 Keep Practicing!"}
                </h3>
                <p className="mt-2">You scored {score} out of 3 points.</p>
                {score === 3 && (
                  <p className="mt-2 font-medium">
                    Congratulations! You've earned the "Pyramid Math Builder" badge! 🏆
                  </p>
                )}
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/different">
            <Button variant="outline">Previous: Different Context</Button>
          </Link>
          <Link href="/">
            <Button className="gap-2">
              Back to Home <Home className="h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
