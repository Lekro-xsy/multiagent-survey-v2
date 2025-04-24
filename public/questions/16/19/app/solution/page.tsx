"use client"

import { useState } from "react"
import PageLayout from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { useProgress } from "@/components/progress-provider"

export default function SolutionPage() {
  const { getProgress } = useProgress()
  const solveProgress = getProgress("solve") || {}
  const [step, setStep] = useState(1)

  const userExpression = solveProgress.expression || "not provided"
  const userAnswer = solveProgress.answer || "not provided"

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <PageLayout title="🎯 Let's Check the Answer!">
      <div className="flex flex-col space-y-8">
        <div className="text-center">
          <p className="text-lg">Let's check the solution and see if you got it right!</p>
        </div>

        <div className="rounded-lg bg-gray-100 p-6">
          <h3 className="mb-4 text-center text-xl font-semibold">Full solution walkthrough</h3>

          {step === 1 && (
            <div className="rounded-lg bg-white p-4">
              <h4 className="mb-2 font-semibold">Step 1: Set up the division</h4>
              <div className="flex flex-col items-center">
                <div className="mb-4 text-center">
                  <p className="text-lg">337 ÷ 13.7</p>
                </div>

                <div className="mb-4 rounded-lg bg-blue-50 p-3">
                  <p className="text-center">
                    <span className="font-medium">Your expression:</span> {userExpression}
                  </p>
                </div>

                <p className="text-center text-sm">
                  We divide the total miles (337) by the total gallons (13.7) to find miles per gallon.
                </p>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="rounded-lg bg-white p-4">
              <h4 className="mb-2 font-semibold">Step 2: Calculate</h4>
              <div className="flex flex-col items-center">
                <div className="mb-4 text-center">
                  <p className="text-lg">337 ÷ 13.7 = 24.5985... ≈ 24.6</p>
                </div>

                <div className="mb-4 rounded-lg bg-blue-50 p-3">
                  <p className="text-center">
                    <span className="font-medium">Your answer:</span> {userAnswer}
                  </p>
                </div>

                <p className="text-center text-sm">
                  When we divide 337 by 13.7, we get approximately 24.5985. Rounding to one decimal place gives us 24.6.
                </p>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="rounded-lg bg-white p-4">
              <h4 className="mb-2 font-semibold">Step 3: Conclusion</h4>
              <div className="flex flex-col items-center">
                <div className="mb-4 text-center">
                  <p className="text-lg font-medium">The motorist traveled approximately 24.6 miles per gallon!</p>
                </div>

                <div className="relative h-20 w-full overflow-hidden rounded-lg bg-gray-200">
                  <div className="absolute bottom-0 left-0 h-full w-1/24 bg-green-500">
                    <div className="flex h-full items-center justify-center">
                      <span className="text-xs font-bold text-white">1 gal</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 h-8 w-1/4 translate-x-4 bg-blue-500">
                    <div className="flex h-full items-center justify-center">
                      <span className="text-xs font-bold text-white">24.6 miles</span>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-center text-sm">
                  This means that for every gallon of gas, the car can travel about 24.6 miles. This is the car's fuel
                  efficiency or "miles per gallon" (MPG).
                </p>
              </div>
            </div>
          )}

          <div className="mt-6 flex justify-between">
            <Button variant="outline" onClick={prevStep} disabled={step === 1}>
              Previous Step
            </Button>
            <Button onClick={nextStep} disabled={step === 3}>
              Next Step
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
