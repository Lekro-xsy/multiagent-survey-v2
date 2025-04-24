"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

interface NearTransferProps {
  onComplete: () => void
}

export function NearTransfer({ onComplete }: NearTransferProps) {
  const [costPerPound, setCostPerPound] = useState("")
  const [totalCost, setTotalCost] = useState("")
  const [isChecked, setIsChecked] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const checkAnswers = () => {
    // Check if the answers are correct (allowing for slight variations in expression)
    const costPerPoundCorrect =
      costPerPound === "12.00/3" ||
      costPerPound === "12/3" ||
      costPerPound === "$12.00/3" ||
      costPerPound === "4" ||
      costPerPound === "$4" ||
      costPerPound === "4.00" ||
      costPerPound === "$4.00"

    const totalCostCorrect =
      totalCost === "(12.00/3) * 5" ||
      totalCost === "(12/3) * 5" ||
      totalCost === "4 * 5" ||
      totalCost === "$4 * 5" ||
      totalCost === "20" ||
      totalCost === "$20" ||
      totalCost === "20.00" ||
      totalCost === "$20.00"

    setIsCorrect(costPerPoundCorrect && totalCostCorrect)
    setIsChecked(true)

    if (costPerPoundCorrect && totalCostCorrect) {
      onComplete()
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-orange-800">🔄 Try Another Steak Order!</h2>

      <Card className="bg-orange-50">
        <CardContent className="p-6">
          <p className="text-lg">Let&apos;s apply what we&apos;ve learned to a similar problem.</p>
          <p className="mt-2 text-lg font-medium">
            At another store, 3 pounds of steak costs $12.00. How much would you expect 5 pounds to cost?
          </p>
        </CardContent>
      </Card>

      <div className="space-y-6 rounded-lg border border-orange-200 bg-white p-6">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex-1">
            <div className="mb-4 overflow-hidden rounded-lg bg-orange-100">
              <img
                src="/placeholder.svg?key=hrx27"
                alt="Butcher shop with premium steaks"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 space-y-4">
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
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-orange-800">Step 2: Find the total cost for 5 pounds</h3>

              <div className="flex items-center gap-4">
                <div className="text-lg font-medium">Total cost =</div>
                <Input
                  value={totalCost}
                  onChange={(e) => setTotalCost(e.target.value)}
                  placeholder="Enter expression"
                  className="max-w-[200px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <Button onClick={checkAnswers} className="bg-orange-600 hover:bg-orange-700">
            Check My Answers
          </Button>
        </div>

        {isChecked && (
          <div
            className={`mt-4 rounded-lg p-4 ${isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
          >
            {isCorrect ? (
              <div>
                <p className="font-medium">Great job! Your solution is correct.</p>
                <p className="mt-2">
                  Step 1: Cost per pound = $12.00 ÷ 3 = $4.00 per pound
                  <br />
                  Step 2: Total cost = $4.00 × 5 = $20.00
                </p>
                <p className="mt-2">
                  You've successfully applied the same proportional reasoning strategy to a new problem!
                </p>
              </div>
            ) : (
              <div>
                <p className="font-medium">Not quite right. Try again!</p>
                <p className="mt-2">
                  Remember to first find the cost per pound by dividing the total cost by the number of pounds. Then
                  multiply that unit rate by the new number of pounds.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
