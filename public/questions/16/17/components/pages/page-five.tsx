"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface PageFiveProps {
  onNext: () => void
}

export function PageFive({ onNext }: PageFiveProps) {
  const [rateValue, setRateValue] = useState("")
  const [calculation, setCalculation] = useState("")
  const [finalAnswer, setFinalAnswer] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  const handleSubmit = () => {
    setIsComplete(true)
  }

  const isReadyToSubmit = rateValue !== "" && calculation !== "" && finalAnswer !== ""

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-teal-600">✍️ Solve It Yourself!</h1>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Show Your Work</h2>
        <p className="mb-6">Now it's your turn to solve the problem. Remember to show all your steps!</p>

        <div className="space-y-6">
          <div>
            <Label htmlFor="rate" className="text-lg">
              Step 1: Calculate the rate (miles per hour)
            </Label>
            <div className="flex items-center mt-2">
              <span className="mr-2">Rate =</span>
              <Input
                id="rate"
                value={rateValue}
                onChange={(e) => setRateValue(e.target.value)}
                placeholder="Enter your calculation and result"
                className="flex-1"
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">Hint: Divide the distance (41.4 miles) by the time (3 hours)</p>
          </div>

          <div>
            <Label htmlFor="calculation" className="text-lg">
              Step 2: Set up the calculation for 7 hours
            </Label>
            <div className="flex items-center mt-2">
              <span className="mr-2">Distance =</span>
              <Input
                id="calculation"
                value={calculation}
                onChange={(e) => setCalculation(e.target.value)}
                placeholder="Enter your calculation"
                className="flex-1"
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">Hint: Multiply the rate by the new time (7 hours)</p>
          </div>

          <div>
            <Label htmlFor="answer" className="text-lg">
              Step 3: Final answer
            </Label>
            <div className="flex items-center mt-2">
              <Input
                id="answer"
                value={finalAnswer}
                onChange={(e) => setFinalAnswer(e.target.value)}
                placeholder="Enter your final answer with units"
                className="flex-1"
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">Don't forget to include the units (miles)!</p>
          </div>
        </div>
      </Card>

      {isComplete ? (
        <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
          <p className="text-teal-700 font-medium">
            Great job showing your work! Let's check the solution together on the next page.
          </p>
        </div>
      ) : (
        <div className="flex justify-end">
          <Button onClick={handleSubmit} className="bg-teal-600 hover:bg-teal-700" disabled={!isReadyToSubmit}>
            Submit My Solution
          </Button>
        </div>
      )}

      {isComplete && (
        <div className="flex justify-end">
          <Button onClick={onNext} className="bg-teal-600 hover:bg-teal-700">
            Continue to Check Solution
          </Button>
        </div>
      )}
    </div>
  )
}
