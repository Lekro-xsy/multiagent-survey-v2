"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

import { PageLayout } from "@/components/page-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function SolutionPage() {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      title: "Start with the formula",
      content: (
        <div className="text-center">
          <div className="text-2xl font-mono p-4 bg-blue-50 rounded-lg inline-block">Time = (x × y) ÷ (x + y)</div>
          <p className="mt-2">Where x = 6 minutes (your time) and y = 8 minutes (brother's time)</p>
        </div>
      ),
    },
    {
      title: "Substitute the values",
      content: (
        <div className="text-center">
          <div className="text-2xl font-mono p-4 bg-blue-50 rounded-lg inline-block">Time = (6 × 8) ÷ (6 + 8)</div>
        </div>
      ),
    },
    {
      title: "Calculate the numerator",
      content: (
        <div className="text-center">
          <div className="text-2xl font-mono p-4 bg-blue-50 rounded-lg inline-block">
            Time = <span className="text-red-600">48</span> ÷ (6 + 8)
          </div>
          <p className="mt-2">6 × 8 = 48</p>
        </div>
      ),
    },
    {
      title: "Calculate the denominator",
      content: (
        <div className="text-center">
          <div className="text-2xl font-mono p-4 bg-blue-50 rounded-lg inline-block">
            Time = 48 ÷ <span className="text-blue-600">14</span>
          </div>
          <p className="mt-2">6 + 8 = 14</p>
        </div>
      ),
    },
    {
      title: "Perform the division",
      content: (
        <div className="text-center">
          <div className="text-2xl font-mono p-4 bg-green-50 rounded-lg inline-block">
            Time = <span className="text-green-600">3.428...</span> minutes
          </div>
          <p className="mt-2">48 ÷ 14 = 3.428571... minutes</p>
        </div>
      ),
    },
    {
      title: "Convert to minutes and seconds",
      content: (
        <div className="text-center">
          <div className="text-2xl font-mono p-4 bg-green-50 rounded-lg inline-block">
            Time = <span className="text-green-600">3 minutes and 26 seconds</span>
          </div>
          <p className="mt-2">0.428571... minutes × 60 = 25.71... seconds ≈ 26 seconds</p>
        </div>
      ),
    },
    {
      title: "Interpretation",
      content: (
        <div className="p-6 bg-yellow-50 rounded-lg">
          <h3 className="font-bold text-xl mb-4 text-center">Final Answer</h3>
          <p className="text-lg">
            You and your brother would finish sweeping the kitchen floor in approximately{" "}
            <strong>3 minutes and 26 seconds</strong> when working together!
          </p>
          <p className="mt-4">This is much faster than either of you working alone:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>You alone: 6 minutes</li>
            <li>Brother alone: 8 minutes</li>
            <li>Together: ~3.43 minutes</li>
          </ul>
          <p className="mt-4">This demonstrates how combining work rates makes tasks go faster!</p>
        </div>
      ),
    },
  ]

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <PageLayout>
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-3xl font-bold text-center">🎯 Let's Solve It Together!</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{steps[currentStep].title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="py-4">{steps[currentStep].content}</div>

            <div className="flex justify-between mt-8">
              <Button variant="outline" onClick={handlePrevStep} disabled={currentStep === 0}>
                Previous Step
              </Button>

              <div className="text-sm text-muted-foreground">
                Step {currentStep + 1} of {steps.length}
              </div>

              <Button onClick={handleNextStep} disabled={currentStep === steps.length - 1} className="gap-2">
                Next Step
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  )
}
