"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

interface StudentSolvesProps {
  onComplete: () => void
}

export function StudentSolves({ onComplete }: StudentSolvesProps) {
  const [step1, setStep1] = useState("")
  const [step2, setStep2] = useState("")
  const [explanation, setExplanation] = useState("")
  const [isChecked, setIsChecked] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const checkAnswers = () => {
    // Check if the answers are correct (allowing for slight variations in expression)
    const step1Correct = step1.includes("8.50 / 2") || step1.includes("8.5 / 2") || step1.includes("4.25")

    const step2Correct = step2.includes("4.25 * 4.5") || step2.includes("19.125") || step2.includes("19.13")

    const explanationCorrect = explanation.length > 10

    setIsCorrect(step1Correct && step2Correct && explanationCorrect)
    setIsChecked(true)

    if (step1Correct && step2Correct && explanationCorrect) {
      onComplete()
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-orange-800">✍️ Write It and Solve It Yourself!</h2>

      <Card className="bg-orange-50">
        <CardContent className="p-6">
          <p className="text-lg">
            Now it&apos;s your turn to write out the complete solution. Show your work for each step.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-6 rounded-lg border border-orange-200 bg-white p-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-orange-800">Step 1: Find the cost per pound</h3>

          <div className="space-y-2">
            <label htmlFor="step1" className="font-medium">
              Write your calculation:
            </label>
            <Input
              id="step1"
              value={step1}
              onChange={(e) => setStep1(e.target.value)}
              placeholder="Example: 8.50 / 2 = 4.25"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-orange-800">Step 2: Find the total cost for 4.5 pounds</h3>

          <div className="space-y-2">
            <label htmlFor="step2" className="font-medium">
              Write your calculation:
            </label>
            <Input
              id="step2"
              value={step2}
              onChange={(e) => setStep2(e.target.value)}
              placeholder="Example: 4.25 * 4.5 = 19.125"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-orange-800">Explain Your Reasoning</h3>

          <div className="space-y-2">
            <label htmlFor="explanation" className="font-medium">
              Write a short explanation of how you solved this problem:
            </label>
            <Textarea
              id="explanation"
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
              placeholder="I divided the total price by 2 pounds to get the unit price, then multiplied by 4.5 pounds to find the total cost."
              rows={3}
            />
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <Button onClick={checkAnswers} className="bg-orange-600 hover:bg-orange-700">
            Check My Work
          </Button>
        </div>

        {isChecked && (
          <div
            className={`mt-4 rounded-lg p-4 ${isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
          >
            {isCorrect ? (
              <div>
                <p className="font-medium">Excellent work! Your solution is correct.</p>
                <p className="mt-2">
                  You've successfully applied proportional reasoning to solve this real-world problem.
                </p>
              </div>
            ) : (
              <div>
                <p className="font-medium">Not quite there yet. Let's review:</p>
                <ul className="mt-2 list-inside list-disc">
                  <li>Step 1: Calculate $8.50 ÷ 2 = $4.25 per pound</li>
                  <li>Step 2: Calculate $4.25 × 4.5 = $19.13 total</li>
                  <li>Make sure your explanation clearly describes your reasoning process</li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
