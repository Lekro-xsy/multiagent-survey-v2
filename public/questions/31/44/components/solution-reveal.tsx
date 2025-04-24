"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface SolutionStep {
  title: string
  explanation: string
  formula: string
}

export function SolutionReveal() {
  const [currentStep, setCurrentStep] = useState(0)
  const [showAll, setShowAll] = useState(false)

  const steps: SolutionStep[] = [
    {
      title: "Calculate Total Trip Time",
      explanation: "First, we find the total time from departure to arrival:",
      formula: "2:30 P.M. - 6:30 A.M. = 8 hours",
    },
    {
      title: "Calculate Total Stop Time",
      explanation: "Next, we add up all the time Roberto spent not driving:",
      formula: "Breakfast: 45 min (0.75 hr) + Gas/stretch: 30 min (0.5 hr) = 1.25 hours",
    },
    {
      title: "Calculate Actual Driving Time",
      explanation: "Now we can find how long Roberto was actually driving:",
      formula: "Total Trip Time - Total Stop Time = 8 - 1.25 = 6.75 hours",
    },
    {
      title: "Calculate Distance",
      explanation: "Using the speed formula: Distance = Speed × Time",
      formula: "50 mph × 6.75 hours = 337.5 miles",
    },
    {
      title: "Round to Nearest 10 Miles",
      explanation: "Finally, we round to the nearest 10 miles as requested:",
      formula: "337.5 miles ≈ 340 miles",
    },
  ]

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setShowAll(true)
    }
  }

  return (
    <div className="space-y-6">
      {showAll ? (
        <>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">{step.explanation}</p>
                  <div className="p-3 bg-blue-50 rounded-md font-mono text-lg">{step.formula}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="p-6 bg-green-50 border border-green-200 rounded-lg text-center">
            <h3 className="text-xl font-bold text-green-700 mb-2">Final Answer: Roberto drove 340 miles</h3>
            <p>
              We calculated the exact distance as 337.5 miles, and then rounded to the nearest 10 miles to get 340
              miles.
            </p>
          </div>
        </>
      ) : (
        <>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{steps[currentStep].title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">{steps[currentStep].explanation}</p>
              <div className="p-3 bg-blue-50 rounded-md font-mono text-lg">{steps[currentStep].formula}</div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Button onClick={handleNext} className="flex items-center gap-2">
              {currentStep < steps.length - 1 ? "Next Step" : "Show Full Solution"}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
