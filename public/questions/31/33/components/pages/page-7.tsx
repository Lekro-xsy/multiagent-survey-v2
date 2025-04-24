"use client"

import { useState } from "react"
import { Target } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MathEquation } from "@/components/math-equation"

export default function Page7() {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      title: "Identify the Fixed Cost",
      content: (
        <div className="space-y-4">
          <p>The first ounce costs $0.43. This is a fixed cost that applies to every package.</p>
          <div className="rounded-lg bg-teal-50 p-3">
            <p className="font-medium text-teal-700">Fixed Cost = $0.43</p>
          </div>
        </div>
      ),
    },
    {
      title: "Identify the Variable Cost",
      content: (
        <div className="space-y-4">
          <p>Each additional ounce costs $0.29. This is a variable cost that depends on the package weight.</p>
          <div className="rounded-lg bg-teal-50 p-3">
            <p className="font-medium text-teal-700">Variable Cost = $0.29 per additional ounce</p>
          </div>
        </div>
      ),
    },
    {
      title: "Calculate the Number of Additional Ounces",
      content: (
        <div className="space-y-4">
          <p>
            If the total weight is x ounces, and the first ounce is already accounted for in the fixed cost, then the
            number of additional ounces is (x - 1).
          </p>
          <div className="rounded-lg bg-teal-50 p-3">
            <p className="font-medium text-teal-700">Number of Additional Ounces = (x - 1)</p>
          </div>
        </div>
      ),
    },
    {
      title: "Combine the Components",
      content: (
        <div className="space-y-4">
          <p>The total cost is the fixed cost plus the variable cost multiplied by the number of additional ounces:</p>
          <div className="rounded-lg bg-teal-50 p-3">
            <p className="font-medium text-teal-700">
              Total Cost = Fixed Cost + (Variable Cost × Number of Additional Ounces)
            </p>
            <MathEquation equation="P = 0.43 + 0.29(x - 1)" />
          </div>
        </div>
      ),
    },
    {
      title: "Simplify the Equation",
      content: (
        <div className="space-y-4">
          <p>We can expand and simplify the equation:</p>
          <div className="rounded-lg bg-teal-50 p-3">
            <MathEquation equation="P = 0.43 + 0.29x - 0.29" />
            <MathEquation equation="P = 0.14 + 0.29x" />
          </div>
          <p>This is a linear equation in the form P = mx + b, where:</p>
          <ul className="ml-6 list-disc space-y-2">
            <li>m = 0.29 is the slope (the rate at which the price increases per ounce)</li>
            <li>b = 0.14 is the y-intercept (but this doesn't have a direct interpretation in our context)</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Define the Domain",
      content: (
        <div className="space-y-4">
          <p>In the context of this problem, x represents the weight of a package in ounces. Therefore:</p>
          <ul className="ml-6 list-disc space-y-2">
            <li>x must be a whole number (the post office charges by whole ounces)</li>
            <li>x must be at least 1 (a package must have some weight)</li>
          </ul>
          <div className="rounded-lg bg-teal-50 p-3">
            <p className="font-medium text-teal-700">Domain: x ∈ ℤ, x ≥ 1</p>
          </div>
        </div>
      ),
    },
    {
      title: "Complete Solution",
      content: (
        <div className="space-y-4">
          <div className="rounded-lg bg-teal-100 p-4">
            <h4 className="mb-2 font-medium text-teal-800">Final Equation:</h4>
            <MathEquation equation="P = 0.43 + 0.29(x - 1)" />
            <p className="mt-2">or in simplified form:</p>
            <MathEquation equation="P = 0.14 + 0.29x" />
            <h4 className="mb-2 mt-4 font-medium text-teal-800">Domain:</h4>
            <p>x ∈ ℤ, x ≥ 1</p>
          </div>
          <p>
            This equation models the cost of shipping a package weighing x ounces, where the first ounce costs $0.43 and
            each additional ounce costs $0.29.
          </p>
        </div>
      ),
    },
  ]

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="space-y-6">
      <Card className="border-2 border-teal-100 shadow-md">
        <CardHeader className="bg-gradient-to-r from-teal-50 to-emerald-50">
          <CardTitle className="flex items-center text-2xl text-teal-800">
            <Target className="mr-2 h-6 w-6 text-teal-600" />
            Check the Model!
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="mb-6 text-lg">Let's review the complete solution and reasoning for our shipping cost model.</p>

          <div className="mb-6 rounded-lg border-2 border-teal-200 p-4">
            <h3 className="mb-4 text-center text-lg font-medium text-teal-800">
              Step {currentStep + 1}: {steps[currentStep].title}
            </h3>
            {steps[currentStep].content}
          </div>

          <div className="flex justify-between">
            <Button variant="outline" onClick={handlePrev} disabled={currentStep === 0}>
              Previous Step
            </Button>

            <div className="text-sm text-muted-foreground">
              Step {currentStep + 1} of {steps.length}
            </div>

            <Button
              className={currentStep < steps.length - 1 ? "bg-teal-600 hover:bg-teal-700" : ""}
              variant={currentStep < steps.length - 1 ? "default" : "outline"}
              onClick={handleNext}
              disabled={currentStep === steps.length - 1}
            >
              Next Step
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
