"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface PageEightProps {
  onNext: () => void
}

export function PageEight({ onNext }: PageEightProps) {
  const [rate, setRate] = useState("")
  const [setup, setSetup] = useState("")
  const [answer, setAnswer] = useState("")
  const [feedback, setFeedback] = useState<string | null>(null)
  const [isCorrect, setIsCorrect] = useState(false)

  const handleSubmit = () => {
    const userRate = Number.parseFloat(rate)
    const userAnswer = Number.parseFloat(answer)

    // Check if the rate is correct (within a small margin of error)
    const isRateCorrect = Math.abs(userRate - 9) < 0.1

    // Check if the final answer is correct (within a small margin of error)
    const isAnswerCorrect = Math.abs(userAnswer - 63) < 0.1

    if (isRateCorrect && isAnswerCorrect) {
      setFeedback("Great job! Your solution is correct.")
      setIsCorrect(true)
    } else if (!isRateCorrect) {
      setFeedback(
        "Check your rate calculation. The painter covers 27 square feet in 3 hours, so the rate is 27 ÷ 3 = 9 square feet per hour.",
      )
    } else {
      setFeedback(
        "Your rate is correct, but check your final calculation. The painter would cover 9 square feet per hour × 7 hours = 63 square feet.",
      )
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-purple-600">🚀 New Scenario, Same Thinking!</h1>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Different Context, Same Math</h2>
        <p className="mb-6">
          A painter paints 27 square feet in 3 hours. At that same rate, how much area can the painter cover in 7 hours?
        </p>

        <div className="space-y-6">
          <div>
            <Label htmlFor="rate" className="text-lg">
              Step 1: Calculate the rate (square feet per hour)
            </Label>
            <Input
              id="rate"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="Enter the rate"
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="setup" className="text-lg">
              Step 2: Explain your setup
            </Label>
            <Textarea
              id="setup"
              value={setup}
              onChange={(e) => setSetup(e.target.value)}
              placeholder="Explain how you're setting up the problem"
              className="mt-2 min-h-[100px]"
            />
          </div>

          <div>
            <Label htmlFor="answer" className="text-lg">
              Step 3: Final answer (square feet)
            </Label>
            <Input
              id="answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Enter your final answer"
              className="mt-2"
            />
          </div>
        </div>
      </Card>

      {feedback && (
        <div
          className={`p-4 rounded-lg border ${isCorrect ? "bg-green-50 border-green-200" : "bg-yellow-50 border-yellow-200"}`}
        >
          <p className={isCorrect ? "text-green-700" : "text-yellow-700"}>{feedback}</p>
          {!isCorrect && (
            <p className="mt-2 text-yellow-700">
              Remember that this problem follows the same proportional relationship pattern as the cyclist problem!
            </p>
          )}
        </div>
      )}

      <div className="flex justify-between items-center">
        {!isCorrect && (
          <Button onClick={handleSubmit} className="bg-purple-600 hover:bg-purple-700" disabled={!rate || !answer}>
            Check My Answer
          </Button>
        )}
        <div className="flex-1"></div>
        <Button onClick={onNext} className="bg-purple-600 hover:bg-purple-700" disabled={!isCorrect}>
          Continue to Summary
        </Button>
      </div>
    </div>
  )
}
