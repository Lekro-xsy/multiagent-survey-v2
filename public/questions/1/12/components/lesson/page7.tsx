"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Page7() {
  const [answers, setAnswers] = useState({
    expression: "",
    parentheses: "",
    final: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [feedback, setFeedback] = useState<{ correct: boolean; message: string } | null>(null)

  const handleChange = (field: keyof typeof answers, value: string) => {
    setAnswers((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    setSubmitted(true)

    // Check answers
    const isExpressionCorrect =
      answers.expression.replace(/\s+/g, "") === "2(5+4)" || answers.expression.replace(/\s+/g, "") === "2(4+5)"
    const isParenthesesCorrect = answers.parentheses.replace(/\s+/g, "") === "2(9)"
    const isFinalCorrect = answers.final.replace(/\s+/g, "") === "18"

    if (isExpressionCorrect && isParenthesesCorrect && isFinalCorrect) {
      setFeedback({
        correct: true,
        message: "Great job! Your calculation is correct. The perimeter of this rectangle is 18 meters.",
      })
    } else {
      setFeedback({
        correct: false,
        message: "Some of your answers need revision. Let's check each step carefully.",
      })
    }
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">🔁 Try a New Rectangle!</h1>

      <div className="mb-8 text-center max-w-xl">
        <p className="text-lg mb-4">Now let's try a different rectangle with new measurements.</p>
        <p className="text-lg font-medium">
          What is the perimeter of a rectangle with length 5 meters and width 4 meters?
        </p>
      </div>

      <div className="relative w-full max-w-md h-64 mb-8 border-4 border-blue-400 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl mb-4">Rectangle</div>
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center">
              <div className="text-green-600 font-bold text-xl">l = 5 meters</div>
            </div>
            <div className="text-center">
              <div className="text-yellow-600 font-bold text-xl">w = 4 meters</div>
            </div>
          </div>
        </div>

        {/* Side labels */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white px-2 font-bold text-green-600">
          l = 5m
        </div>
        <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white px-2 font-bold text-yellow-600">
          w = 4m
        </div>
      </div>

      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2">
          <Label htmlFor="expression">Write the full expression:</Label>
          <Input
            id="expression"
            placeholder="2(5 + 4)"
            value={answers.expression}
            onChange={(e) => handleChange("expression", e.target.value)}
            disabled={submitted}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="parentheses">Simplify inside the parentheses:</Label>
          <Input
            id="parentheses"
            placeholder="2(9)"
            value={answers.parentheses}
            onChange={(e) => handleChange("parentheses", e.target.value)}
            disabled={submitted}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="final">Multiply to find the perimeter:</Label>
          <Input
            id="final"
            placeholder="18"
            value={answers.final}
            onChange={(e) => handleChange("final", e.target.value)}
            disabled={submitted}
          />
        </div>

        {!submitted && (
          <Button
            onClick={handleSubmit}
            className="w-full"
            disabled={!answers.expression || !answers.parentheses || !answers.final}
          >
            Submit My Work
          </Button>
        )}

        {feedback && (
          <div
            className={`p-4 ${feedback.correct ? "bg-green-50 border-green-200" : "bg-yellow-50 border-yellow-200"} border rounded-lg`}
          >
            <p className={`font-medium ${feedback.correct ? "text-green-700" : "text-yellow-700"}`}>
              {feedback.message}
            </p>

            {!feedback.correct && (
              <div className="mt-4 space-y-2 text-sm">
                <p>Remember to:</p>
                <ul className="list-disc pl-5">
                  <li>Substitute l = 5 and w = 4 into the formula 2(l + w)</li>
                  <li>Add the numbers inside the parentheses first</li>
                  <li>Then multiply the result by 2</li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
