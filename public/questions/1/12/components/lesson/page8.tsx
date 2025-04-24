"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function Page8() {
  const [selectedFormula, setSelectedFormula] = useState<string | null>(null)
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
    const isFormulaCorrect = selectedFormula === "perimeter"
    const isExpressionCorrect =
      answers.expression.replace(/\s+/g, "") === "2(10+3)" || answers.expression.replace(/\s+/g, "") === "2(3+10)"
    const isParenthesesCorrect = answers.parentheses.replace(/\s+/g, "") === "2(13)"
    const isFinalCorrect = answers.final.replace(/\s+/g, "") === "26"

    if (isFormulaCorrect && isExpressionCorrect && isParenthesesCorrect && isFinalCorrect) {
      setFeedback({
        correct: true,
        message:
          "Excellent! You recognized this is a perimeter problem and solved it correctly. The race track distance is 26 meters.",
      })
    } else {
      setFeedback({
        correct: false,
        message: "Let's review your solution. Remember to identify what type of problem this is first.",
      })
    }
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">🚀 Different World, Same Thinking!</h1>

      <div className="mb-8 text-center max-w-xl">
        <p className="text-lg mb-4">Now let's try a different scenario that uses the same mathematical thinking.</p>
        <p className="text-lg font-medium">
          You are designing a race track in the shape of a rectangle. The track is 10 meters long and 3 meters wide. How
          long is the outer track distance?
        </p>
      </div>

      <div className="relative w-full max-w-md h-64 mb-8 border-4 border-blue-400 rounded-lg flex items-center justify-center bg-gray-50">
        {/* Race track visualization */}
        <div className="absolute inset-8 border-4 border-dashed border-gray-400 rounded-lg">
          {/* Car icon */}
          <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 text-2xl">🏎️</div>
        </div>

        {/* Side labels */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white px-2 font-bold text-blue-600">
          10m
        </div>
        <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white px-2 font-bold text-blue-600">
          3m
        </div>
      </div>

      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2">
          <Label>What type of calculation is this?</Label>
          <RadioGroup value={selectedFormula || ""} onValueChange={setSelectedFormula} disabled={submitted}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="area" id="area" />
              <Label htmlFor="area">Area calculation</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="perimeter" id="perimeter" />
              <Label htmlFor="perimeter">Perimeter calculation</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="volume" id="volume" />
              <Label htmlFor="volume">Volume calculation</Label>
            </div>
          </RadioGroup>
        </div>

        {selectedFormula && (
          <>
            <div className="space-y-2">
              <Label htmlFor="expression">Write the full expression:</Label>
              <Input
                id="expression"
                placeholder="2(10 + 3)"
                value={answers.expression}
                onChange={(e) => handleChange("expression", e.target.value)}
                disabled={submitted}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="parentheses">Simplify inside the parentheses:</Label>
              <Input
                id="parentheses"
                placeholder="2(13)"
                value={answers.parentheses}
                onChange={(e) => handleChange("parentheses", e.target.value)}
                disabled={submitted}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="final">Calculate the final answer:</Label>
              <Input
                id="final"
                placeholder="26"
                value={answers.final}
                onChange={(e) => handleChange("final", e.target.value)}
                disabled={submitted}
              />
            </div>
          </>
        )}

        {!submitted && selectedFormula && (
          <Button
            onClick={handleSubmit}
            className="w-full"
            disabled={!selectedFormula || !answers.expression || !answers.parentheses || !answers.final}
          >
            Submit My Solution
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
                <p>Hints:</p>
                <ul className="list-disc pl-5">
                  <li>Think about what "outer track distance" means - it's the distance around the track</li>
                  <li>
                    Even though the word "perimeter" isn't used, this is still asking for the distance around a
                    rectangle
                  </li>
                  <li>Use the same formula: 2(length + width)</li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
