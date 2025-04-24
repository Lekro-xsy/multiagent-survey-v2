"use client"

import { useState, useEffect } from "react"
import { LessonLayout } from "@/components/lesson-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowDown, DollarSign } from "lucide-react"

export default function Page6() {
  const [step, setStep] = useState(0)
  const [moneyCounter, setMoneyCounter] = useState(0)
  const [showAnimation, setShowAnimation] = useState(false)

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1)
    } else if (step === 3 && !showAnimation) {
      setShowAnimation(true)
    }
  }

  useEffect(() => {
    if (showAnimation) {
      let count = 0
      const interval = setInterval(() => {
        if (count < 88.2) {
          count += 2
          if (count > 88.2) count = 88.2
          setMoneyCounter(Number.parseFloat(count.toFixed(2)))
        } else {
          clearInterval(interval)
        }
      }, 50)

      return () => clearInterval(interval)
    }
  }, [showAnimation])

  return (
    <LessonLayout pageNumber={6} totalPages={9} title="🎯 Let's Check Your Work!">
      <div className="space-y-8">
        <Card className="p-6">
          <h2 className="text-2xl font-bold text-teal-700">Full Solution and Explanation</h2>

          <p className="mt-4 text-lg">Let's walk through the complete solution step by step.</p>

          <div className="mt-6 space-y-6">
            <div className="rounded-lg border border-teal-200 bg-teal-50 p-4">
              <h3 className="text-xl font-semibold text-teal-700">Solution Walkthrough</h3>

              <div className="mt-4 space-y-4">
                <div
                  className={`rounded-lg bg-white p-4 shadow-sm transition-opacity ${step >= 1 ? "opacity-100" : "opacity-50"}`}
                >
                  <h4 className="font-medium text-teal-700">Step 1: Calculate commission from calculators</h4>
                  <div className="mt-2 flex items-center justify-center gap-3 text-xl">
                    <span>3.15</span>
                    <span>×</span>
                    <span>12</span>
                    <span>=</span>
                    <span className={`font-bold ${step >= 1 ? "text-teal-700" : "text-gray-400"}`}>37.80</span>
                  </div>
                </div>

                <div
                  className={`rounded-lg bg-white p-4 shadow-sm transition-opacity ${step >= 2 ? "opacity-100" : "opacity-50"}`}
                >
                  <h4 className="font-medium text-emerald-700">Step 2: Calculate commission from pocket radios</h4>
                  <div className="mt-2 flex items-center justify-center gap-3 text-xl">
                    <span>3.15</span>
                    <span>×</span>
                    <span>16</span>
                    <span>=</span>
                    <span className={`font-bold ${step >= 2 ? "text-emerald-700" : "text-gray-400"}`}>50.40</span>
                  </div>
                </div>

                {step >= 2 && (
                  <div className="flex justify-center">
                    <ArrowDown className="h-8 w-8 text-purple-500" />
                  </div>
                )}

                <div
                  className={`rounded-lg bg-white p-4 shadow-sm transition-opacity ${step >= 3 ? "opacity-100" : "opacity-50"}`}
                >
                  <h4 className="font-medium text-purple-700">Step 3: Add both commissions for the total</h4>
                  <div className="mt-2 flex items-center justify-center gap-3 text-xl">
                    <span>37.80</span>
                    <span>+</span>
                    <span>50.40</span>
                    <span>=</span>
                    <span className={`font-bold ${step >= 3 ? "text-purple-700" : "text-gray-400"}`}>88.20</span>
                  </div>
                </div>
              </div>
            </div>

            {step >= 3 && (
              <div className="rounded-lg border border-purple-200 bg-purple-50 p-4">
                <h3 className="text-xl font-semibold text-purple-700">Conclusion</h3>

                <div className="mt-4 text-center text-lg">
                  <p>
                    The salesman earned <span className="font-bold text-purple-700">$88.20</span> in total commission.
                  </p>

                  {showAnimation && (
                    <div className="mt-4 flex justify-center">
                      <div className="flex items-center rounded-lg bg-white px-6 py-3 shadow-md">
                        <DollarSign className="mr-1 h-6 w-6 text-green-600" />
                        <span className="text-3xl font-bold text-green-600">{moneyCounter.toFixed(2)}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="flex justify-center">
              <Button
                onClick={handleNextStep}
                className="bg-purple-600 hover:bg-purple-700"
                disabled={step === 3 && showAnimation}
              >
                {step < 3 ? "Next Step" : showAnimation ? "Complete!" : "Show Animation"}
              </Button>
            </div>
          </div>
        </Card>

        <div className="rounded-lg bg-blue-50 p-4 text-blue-800">
          <h3 className="font-semibold">Key Takeaway:</h3>
          <p>
            Breaking down a complex problem into smaller steps makes it easier to solve. We first calculated each
            product's commission separately, then combined them for the total.
          </p>
        </div>
      </div>
    </LessonLayout>
  )
}
