"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function PageSix() {
  const [currentStep, setCurrentStep] = useState(0)

  const explanationSteps = [
    "x = number of miles traveled",
    "2x = cost based on distance (e.g., $2 per mile)",
    "99 = base fee (maybe taxes, or fixed airline costs)",
    "The complete expression 2x + 99 represents the total ticket price in dollars.",
  ]

  const handleNextStep = () => {
    if (currentStep < explanationSteps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-center text-3xl font-bold text-sky-700">🎯 Let's See the Full Explanation!</h1>

      <div className="rounded-lg bg-sky-50 p-6">
        <h2 className="mb-4 text-xl font-semibold text-sky-700">Full step-by-step explanation:</h2>
        <div className="space-y-3">
          {explanationSteps.slice(0, currentStep).map((step, index) => (
            <div key={index} className="rounded-lg bg-white p-3 shadow-sm transition-all duration-300">
              <p className="text-lg">{step}</p>
            </div>
          ))}

          {currentStep < explanationSteps.length && (
            <div className="flex justify-center pt-4">
              <Button onClick={handleNextStep} className="flex items-center gap-2">
                Next Step
                <ChevronRight size={16} />
              </Button>
            </div>
          )}
        </div>
      </div>

      {currentStep === explanationSteps.length && (
        <Card className="border-sky-200">
          <CardContent className="p-6">
            <h2 className="mb-4 text-xl font-semibold text-sky-700">Sample Paragraph:</h2>
            <p className="text-lg leading-relaxed">
              "The variable x likely represents distance in miles. Since the cost is 2x, it suggests the ticket price
              increases by $2 for each mile traveled. The +99 represents a base fee that stays constant no matter how
              far you travel. This could include taxes, airport fees, or fixed costs that the airline has regardless of
              flight distance. So the complete expression 2x + 99 gives us the total ticket price in dollars."
            </p>
          </CardContent>
        </Card>
      )}

      <div className="rounded-lg border border-sky-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold text-sky-700">Key Takeaways:</h2>
        <ul className="space-y-2 pl-5">
          <li className="text-lg">
            <span className="font-medium">Variables</span> (like x) represent quantities that can change
          </li>
          <li className="text-lg">
            <span className="font-medium">Coefficients</span> (like 2 in 2x) tell us how much the variable affects the
            result
          </li>
          <li className="text-lg">
            <span className="font-medium">Constants</span> (like 99) represent fixed values that don't change
          </li>
          <li className="text-lg">Algebraic expressions can model real-world situations, like ticket pricing</li>
        </ul>
      </div>
    </div>
  )
}
