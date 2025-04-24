"use client"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function Page7() {
  const [equation, setEquation] = useState("")
  const [solution, setSolution] = useState("")
  const [answer, setAnswer] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const handleSubmit = () => {
    setSubmitted(true)

    // Check if the answer is correct (8 months)
    const correctAnswer = answer.trim().toLowerCase().includes("8") || answer.trim().toLowerCase().includes("eight")
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
    <PageLayout title="🔄 Another Savings Plan!" pageNumber={7} totalPages={9} prevPage="/page6" nextPage="/page8">
      <div className="space-y-8">
        <div className="rounded-lg bg-blue-50 p-6">
          <h2 className="mb-4 text-xl font-semibold text-blue-800">Similar Saving Scenario:</h2>
          <div className="mb-6 rounded-lg bg-white p-4 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold text-blue-700">New Scenario:</h3>
            <p className="mb-2 text-lg">
              You want a gaming chair that costs <span className="font-bold text-blue-700">$480</span>.
            </p>
            <p className="mb-2 text-lg">
              You save <span className="font-bold text-blue-700">$60 per month</span>.
            </p>
            <p className="mb-4 text-lg">How many months will it take?</p>
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
                placeholder="e.g., 60 × x = 480"
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
                placeholder="How many months will it take?"
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
                    Great job! You've correctly determined that it will take 8 months to save enough for the gaming
                    chair.
                  </p>

                  <div className="rounded-lg bg-white p-4 shadow-sm">
                    <div className="mb-3">
                      <span className="font-medium text-blue-700">Correct solution:</span>
                      <div className="mt-2 space-y-1 pl-4">
                        <p>60 × x = 480</p>
                        <p>x = 480 ÷ 60</p>
                        <p>x = 8 months</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="mb-4 text-red-700">Let's review the solution together:</p>

                  <div className="rounded-lg bg-white p-4 shadow-sm">
                    <div className="mb-3">
                      <span className="font-medium text-blue-700">Correct solution:</span>
                      <div className="mt-2 space-y-1 pl-4">
                        <p>60 × x = 480</p>
                        <p>x = 480 ÷ 60</p>
                        <p>x = 8 months</p>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-red-700">Try again with the correct approach!</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        <div className="rounded-lg bg-yellow-50 p-4">
          <h3 className="mb-2 font-semibold text-yellow-800">Hint:</h3>
          <p className="text-yellow-700">
            Use the same approach as the subwoofer problem. Set up an equation with the monthly saving rate, the unknown
            number of months (x), and the target amount. Then solve for x.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}
