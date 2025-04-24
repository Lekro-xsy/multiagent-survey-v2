"use client"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function Page8() {
  const [equation, setEquation] = useState("")
  const [solution, setSolution] = useState("")
  const [answer, setAnswer] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const handleSubmit = () => {
    setSubmitted(true)

    // Check if the answer is correct (13 days)
    const correctAnswer = answer.trim().toLowerCase().includes("13") || answer.trim().toLowerCase().includes("thirteen")
    setIsCorrect(correctAnswer)
  }

  const resetForm = () => {
    setEquation("")
    setSolution("")
    setAnswer("")
    setSubmitted(false)
    setIsCorrect(null)
  }

  return (
    <PageLayout
      title="🚀 Different Dream, Same Math!"
      pageNumber={8}
      totalPages={9}
      prevPage="/page7"
      nextPage="/page9"
    >
      <div className="space-y-8">
        <div className="rounded-lg bg-blue-50 p-6">
          <h2 className="mb-4 text-xl font-semibold text-blue-800">
            Far Transfer — Different Context, Same Structure:
          </h2>
          <div className="mb-6 rounded-lg bg-white p-4 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold text-blue-700">New Scenario:</h3>
            <p className="mb-2 text-lg">
              You are reading a novel with <span className="font-bold text-blue-700">390 pages</span>.
            </p>
            <p className="mb-2 text-lg">
              You read <span className="font-bold text-blue-700">30 pages each day</span>.
            </p>
            <p className="mb-4 text-lg">How many days will it take you to finish the book?</p>
          </div>

          <div className="mb-6 rounded-lg bg-purple-50 p-4">
            <h3 className="mb-2 font-semibold text-purple-800">Key Insight:</h3>
            <p className="text-purple-700">
              Notice that this problem has a different context (reading a book instead of saving money), but the
              mathematical structure is the same:
            </p>
            <p className="mt-2 text-center text-purple-700">
              <strong>Total amount ÷ rate per time unit = time units needed</strong>
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="equation" className="text-blue-700">
                Write the equation:
              </Label>
              <Input
                id="equation"
                value={equation}
                onChange={(e) => setEquation(e.target.value)}
                placeholder="e.g., 30 × x = 390"
                className="text-lg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="solution" className="text-blue-700">
                Show your step-by-step solution:
              </Label>
              <Textarea
                id="solution"
                value={solution}
                onChange={(e) => setSolution(e.target.value)}
                placeholder="Write your steps to solve for x..."
                className="min-h-[120px] text-lg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="answer" className="text-blue-700">
                Your final answer:
              </Label>
              <Input
                id="answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="How many days will it take?"
                className="text-lg"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-center space-x-4">
            <Button
              onClick={handleSubmit}
              disabled={!equation || !solution || !answer || submitted}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Submit Solution
            </Button>
            <Button variant="outline" onClick={resetForm} className="border-blue-300 text-blue-700 hover:bg-blue-100">
              Reset
            </Button>
          </div>
        </div>

        {submitted && (
          <Card className={isCorrect ? "bg-green-50" : "bg-red-50"}>
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold text-green-800">
                {isCorrect ? "Correct!" : "Not quite right"}
              </h3>

              {isCorrect ? (
                <div className="space-y-4">
                  <p className="text-green-700">
                    Excellent! You've correctly determined that it will take 13 days to finish reading the book.
                  </p>

                  <div className="rounded-lg bg-white p-4 shadow-sm">
                    <div className="mb-3">
                      <span className="font-medium text-blue-700">Correct solution:</span>
                      <div className="mt-2 space-y-1 pl-4">
                        <p>30 × x = 390</p>
                        <p>x = 390 ÷ 30</p>
                        <p>x = 13 days</p>
                      </div>
                    </div>
                  </div>

                  <p className="mt-2 text-green-700">
                    You've successfully applied the same mathematical model to a completely different context!
                  </p>
                </div>
              ) : (
                <div>
                  <p className="mb-4 text-red-700">Let's review the solution together:</p>

                  <div className="rounded-lg bg-white p-4 shadow-sm">
                    <div className="mb-3">
                      <span className="font-medium text-blue-700">Correct solution:</span>
                      <div className="mt-2 space-y-1 pl-4">
                        <p>30 × x = 390</p>
                        <p>x = 390 ÷ 30</p>
                        <p>x = 13 days</p>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-red-700">
                    Remember, the mathematical structure is the same even though the context is different!
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        <div className="rounded-lg bg-yellow-50 p-4">
          <h3 className="mb-2 font-semibold text-yellow-800">Mathematical Transfer:</h3>
          <p className="text-yellow-700">
            Being able to recognize the same mathematical structure in different contexts is a powerful skill. This is
            called "transfer of learning" and it's one of the most important aspects of mathematical thinking!
          </p>
        </div>
      </div>
    </PageLayout>
  )
}
