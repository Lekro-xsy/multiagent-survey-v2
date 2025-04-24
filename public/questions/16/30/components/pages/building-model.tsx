"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

interface BuildingModelProps {
  onComplete: () => void
}

export function BuildingModel({ onComplete }: BuildingModelProps) {
  const [costPerPound, setCostPerPound] = useState("")
  const [totalCost, setTotalCost] = useState("")
  const [isChecked, setIsChecked] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const checkAnswers = () => {
    // Check if the answers are correct (allowing for slight variations in expression)
    const costPerPoundCorrect =
      costPerPound === "8.50/2" ||
      costPerPound === "8.5/2" ||
      costPerPound === "$8.50/2" ||
      costPerPound === "4.25" ||
      costPerPound === "$4.25"

    const totalCostCorrect =
      totalCost === "(8.50/2) * 4.5" ||
      totalCost === "(8.5/2) * 4.5" ||
      totalCost === "4.25 * 4.5" ||
      totalCost === "$4.25 * 4.5" ||
      totalCost === "19.125" ||
      totalCost === "$19.125" ||
      totalCost === "19.13" ||
      totalCost === "$19.13"

    setIsCorrect(costPerPoundCorrect && totalCostCorrect)
    setIsChecked(true)

    if (costPerPoundCorrect && totalCostCorrect) {
      onComplete()
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-orange-800">🧮 Setting Up the Equation</h2>

      <Card className="bg-orange-50">
        <CardContent className="p-6">
          <p className="text-lg">
            Now let&apos;s set up the mathematical model to solve our problem. We&apos;ll break it down into two steps.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-6 rounded-lg border border-orange-200 bg-white p-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-orange-800">Step 1: Find the cost per pound</h3>

          <div className="flex items-center gap-4">
            <div className="text-lg font-medium">Cost per pound =</div>
            <Input
              value={costPerPound}
              onChange={(e) => setCostPerPound(e.target.value)}
              placeholder="Enter expression"
              className="max-w-[200px]"
            />
          </div>

          <div className="rounded-lg bg-blue-50 p-4">
            <p>
              <strong>Hint:</strong> To find the cost per pound, divide the total cost by the number of pounds.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-orange-800">Step 2: Find the total cost for 4.5 pounds</h3>

          <div className="flex items-center gap-4">
            <div className="text-lg font-medium">Total cost =</div>
            <Input
              value={totalCost}
              onChange={(e) => setTotalCost(e.target.value)}
              placeholder="Enter expression"
              className="max-w-[200px]"
            />
          </div>

          <div className="rounded-lg bg-blue-50 p-4">
            <p>
              <strong>Hint:</strong> Multiply the cost per pound by the number of pounds you need.
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <Button onClick={checkAnswers} className="bg-orange-600 hover:bg-orange-700">
            Check My Equations
          </Button>
        </div>

        {isChecked && (
          <div
            className={`mt-4 rounded-lg p-4 ${isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
          >
            {isCorrect ? (
              <div>
                <p className="font-medium">Great job! Your equations are correct.</p>
                <p className="mt-2">
                  Step 1: Cost per pound = $8.50 ÷ 2 = $4.25 per pound
                  <br />
                  Step 2: Total cost = $4.25 × 4.5 = $19.13
                </p>
              </div>
            ) : (
              <div>
                <p className="font-medium">Not quite right. Try again!</p>
                <p className="mt-2">
                  Step 1: To find cost per pound, divide $8.50 by 2 pounds.
                  <br />
                  Step 2: To find total cost, multiply the cost per pound by 4.5 pounds.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
