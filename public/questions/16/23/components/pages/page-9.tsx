"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, XCircle, Trophy } from "lucide-react"

export default function Page9() {
  const [selectedOption, setSelectedOption] = useState("")
  const [explanation, setExplanation] = useState("")
  const [scenario, setScenario] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [feedback, setFeedback] = useState({
    option: null,
    explanation: null,
    scenario: null,
  })

  const checkAnswers = () => {
    setSubmitted(true)

    // Check multiple choice
    const optionCorrect = selectedOption === "option2"

    // Check explanation
    const explanationCorrect =
      explanation.toLowerCase().includes("multiply") &&
      (explanation.toLowerCase().includes("add") || explanation.toLowerCase().includes("sum")) &&
      explanation.length > 20

    // Check scenario
    const scenarioCorrect =
      scenario.length > 30 &&
      (scenario.toLowerCase().includes("price") ||
        scenario.toLowerCase().includes("rate") ||
        scenario.toLowerCase().includes("cost") ||
        scenario.toLowerCase().includes("earn")) &&
      (scenario.toLowerCase().includes("quantity") ||
        scenario.toLowerCase().includes("number") ||
        scenario.toLowerCase().includes("amount") ||
        scenario.toLowerCase().includes("items"))

    setFeedback({
      option: optionCorrect,
      explanation: explanationCorrect,
      scenario: scenarioCorrect,
    })
  }

  const resetForm = () => {
    setSelectedOption("")
    setExplanation("")
    setScenario("")
    setSubmitted(false)
    setFeedback({
      option: null,
      explanation: null,
      scenario: null,
    })
  }

  const allCorrect = feedback.option && feedback.explanation && feedback.scenario

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-emerald-700">📚 What Have You Learned?</h2>

      <Card className="p-6">
        <h3 className="mb-4 text-lg font-semibold">Summary:</h3>

        <div className="mb-6 space-y-3 rounded-lg bg-emerald-50 p-4">
          <div className="flex items-start gap-2">
            <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white">
              1
            </div>
            <p>Multiply the rate by quantity for each group of items.</p>
          </div>

          <div className="flex items-start gap-2">
            <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white">
              2
            </div>
            <p>Add separate subtotal amounts to find the total.</p>
          </div>

          <div className="flex items-start gap-2">
            <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white">
              3
            </div>
            <p>Recognize repeated math structures in different situations.</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="mb-4 text-lg font-semibold">Mini-Quiz:</h3>

          <div className="space-y-6">
            <div>
              <p className="mb-3 font-medium">
                1. Choose the correct expression for finding the total cost of 12 apples at $0.75 each and 8 oranges at
                $0.95 each:
              </p>

              <RadioGroup
                value={selectedOption}
                onValueChange={setSelectedOption}
                className="space-y-3"
                disabled={submitted}
              >
                <div
                  className={`flex items-center space-x-2 rounded-md border p-3 ${
                    submitted && selectedOption === "option1" ? "border-red-500 bg-red-50" : "border-gray-200"
                  }`}
                >
                  <RadioGroupItem value="option1" id="option1" />
                  <Label htmlFor="option1" className="flex-1">
                    (12 + 8) × (0.75 + 0.95)
                  </Label>
                  {submitted && selectedOption === "option1" && <XCircle className="h-5 w-5 text-red-500" />}
                </div>

                <div
                  className={`flex items-center space-x-2 rounded-md border p-3 ${
                    submitted && selectedOption === "option2" ? "border-green-500 bg-green-50" : "border-gray-200"
                  }`}
                >
                  <RadioGroupItem value="option2" id="option2" />
                  <Label htmlFor="option2" className="flex-1">
                    (0.75 × 12) + (0.95 × 8)
                  </Label>
                  {submitted && selectedOption === "option2" && <CheckCircle className="h-5 w-5 text-green-500" />}
                </div>

                <div
                  className={`flex items-center space-x-2 rounded-md border p-3 ${
                    submitted && selectedOption === "option3" ? "border-red-500 bg-red-50" : "border-gray-200"
                  }`}
                >
                  <RadioGroupItem value="option3" id="option3" />
                  <Label htmlFor="option3" className="flex-1">
                    0.75 × 0.95 × (12 + 8)
                  </Label>
                  {submitted && selectedOption === "option3" && <XCircle className="h-5 w-5 text-red-500" />}
                </div>

                <div
                  className={`flex items-center space-x-2 rounded-md border p-3 ${
                    submitted && selectedOption === "option4" ? "border-red-500 bg-red-50" : "border-gray-200"
                  }`}
                >
                  <RadioGroupItem value="option4" id="option4" />
                  <Label htmlFor="option4" className="flex-1">
                    (12 × 8) + (0.75 × 0.95)
                  </Label>
                  {submitted && selectedOption === "option4" && <XCircle className="h-5 w-5 text-red-500" />}
                </div>
              </RadioGroup>

              {submitted && !feedback.option && (
                <p className="mt-2 text-sm text-red-500">The correct answer is: (0.75 × 12) + (0.95 × 8)</p>
              )}
            </div>

            <div>
              <label className="mb-2 block font-medium">2. Why do we add after multiplying in these problems?</label>
              <div className="relative">
                <Textarea
                  value={explanation}
                  onChange={(e) => setExplanation(e.target.value)}
                  placeholder="We multiply first to find the subtotal for each group of items, then add those subtotals to find the overall total."
                  className={`min-h-[100px] pr-10 ${
                    submitted && feedback.explanation !== null
                      ? feedback.explanation
                        ? "border-green-500 focus-visible:ring-green-500"
                        : "border-red-500 focus-visible:ring-red-500"
                      : ""
                  }`}
                  disabled={submitted}
                />
                {submitted && feedback.explanation !== null && (
                  <div className="absolute right-3 top-6">
                    {feedback.explanation ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500" />
                    )}
                  </div>
                )}
              </div>
              {submitted && !feedback.explanation && (
                <p className="mt-1 text-sm text-red-500">
                  Explain how we multiply to find each subtotal first, then add those subtotals together.
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block font-medium">
                3. Write your own scenario that matches the structure: (price × quantity1) + (price × quantity2)
              </label>
              <div className="relative">
                <Textarea
                  value={scenario}
                  onChange={(e) => setScenario(e.target.value)}
                  placeholder="A movie theater charges $8.50 per ticket. On Saturday, they sold 145 tickets for the afternoon show and 210 tickets for the evening show. How much money did they collect from ticket sales that day?"
                  className={`min-h-[120px] pr-10 ${
                    submitted && feedback.scenario !== null
                      ? feedback.scenario
                        ? "border-green-500 focus-visible:ring-green-500"
                        : "border-red-500 focus-visible:ring-red-500"
                      : ""
                  }`}
                  disabled={submitted}
                />
                {submitted && feedback.scenario !== null && (
                  <div className="absolute right-3 top-6">
                    {feedback.scenario ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500" />
                    )}
                  </div>
                )}
              </div>
              {submitted && !feedback.scenario && (
                <p className="mt-1 text-sm text-red-500">
                  Create a scenario with a price/rate and two different quantities that need to be multiplied and added.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          {!submitted ? (
            <Button
              onClick={checkAnswers}
              className="bg-emerald-600 hover:bg-emerald-700"
              disabled={!selectedOption || !explanation || !scenario}
            >
              Submit Quiz
            </Button>
          ) : (
            <Button onClick={resetForm} className="bg-emerald-600 hover:bg-emerald-700">
              Try Again
            </Button>
          )}
        </div>

        {allCorrect && (
          <div className="mt-6 rounded-lg bg-gradient-to-r from-amber-100 to-amber-200 p-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-amber-500 p-3 text-white">
                <Trophy className="h-8 w-8" />
              </div>
            </div>
            <h3 className="mb-2 text-xl font-bold text-amber-800">Congratulations! 🎉</h3>
            <p className="text-amber-800">You've earned the "Commission Math Star" badge!</p>
            <div className="mt-4 flex justify-center">
              <div className="text-4xl">⭐</div>
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}
