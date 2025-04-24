"use client"

import { useState } from "react"
import { LessonLayout } from "@/components/lesson-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, Radio, DollarSign } from "lucide-react"

export default function Page3() {
  const [showCalculatorEarnings, setShowCalculatorEarnings] = useState(false)
  const [showRadioEarnings, setShowRadioEarnings] = useState(false)
  const [calculatorAnimation, setCalculatorAnimation] = useState(0)
  const [radioAnimation, setRadioAnimation] = useState(0)

  const handleShowCalculatorEarnings = () => {
    setShowCalculatorEarnings(true)

    // Animate the counter
    let count = 0
    const interval = setInterval(() => {
      if (count < 37.8) {
        count += 3.15
        if (count > 37.8) count = 37.8
        setCalculatorAnimation(Number.parseFloat(count.toFixed(2)))
      } else {
        clearInterval(interval)
      }
    }, 250)
  }

  const handleShowRadioEarnings = () => {
    setShowRadioEarnings(true)

    // Animate the counter
    let count = 0
    const interval = setInterval(() => {
      if (count < 50.4) {
        count += 3.15
        if (count > 50.4) count = 50.4
        setRadioAnimation(Number.parseFloat(count.toFixed(2)))
      } else {
        clearInterval(interval)
      }
    }, 200)
  }

  return (
    <LessonLayout pageNumber={3} totalPages={9} title="💸 How Does He Earn?">
      <div className="space-y-8">
        <Card className="p-6">
          <h2 className="text-2xl font-bold text-teal-700">Visualizing Earnings</h2>

          <p className="mt-4 text-lg">Let's see how the salesman's commission works for each type of product.</p>

          <div className="mt-6 space-y-8">
            {/* Calculators */}
            <div className="rounded-lg border border-teal-200 bg-teal-50 p-4">
              <h3 className="flex items-center text-xl font-semibold text-teal-700">
                <Calculator className="mr-2 h-6 w-6" />
                Calculator Commission
              </h3>

              <div className="mt-4 flex flex-col items-center gap-4 md:flex-row md:items-start">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-lg font-medium">12 calculators</span>
                    <span className="text-lg">×</span>
                    <span className="text-lg font-medium">$3.15 per calculator</span>
                  </div>

                  <div className="mt-4 grid grid-cols-4 gap-2 md:grid-cols-6">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className={`flex h-12 w-12 items-center justify-center rounded-md ${
                          showCalculatorEarnings && i * 3.15 <= calculatorAnimation
                            ? "bg-teal-500 text-white"
                            : "bg-white text-teal-700"
                        } shadow-sm transition-colors`}
                      >
                        <DollarSign className="h-6 w-6" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-sm font-medium text-teal-700">Subtotal</span>
                  <div className="mt-1 flex h-16 min-w-24 items-center justify-center rounded-md bg-white px-4 text-2xl font-bold text-teal-700 shadow-sm">
                    ${showCalculatorEarnings ? calculatorAnimation.toFixed(2) : "0.00"}
                  </div>

                  {!showCalculatorEarnings && (
                    <Button
                      onClick={handleShowCalculatorEarnings}
                      className="mt-2 bg-teal-600 hover:bg-teal-700"
                      size="sm"
                    >
                      Calculate
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* Radios */}
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
              <h3 className="flex items-center text-xl font-semibold text-emerald-700">
                <Radio className="mr-2 h-6 w-6" />
                Pocket Radio Commission
              </h3>

              <div className="mt-4 flex flex-col items-center gap-4 md:flex-row md:items-start">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-lg font-medium">16 pocket radios</span>
                    <span className="text-lg">×</span>
                    <span className="text-lg font-medium">$3.15 per radio</span>
                  </div>

                  <div className="mt-4 grid grid-cols-4 gap-2 md:grid-cols-8">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div
                        key={i}
                        className={`flex h-12 w-12 items-center justify-center rounded-md ${
                          showRadioEarnings && i * 3.15 <= radioAnimation
                            ? "bg-emerald-500 text-white"
                            : "bg-white text-emerald-700"
                        } shadow-sm transition-colors`}
                      >
                        <DollarSign className="h-6 w-6" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-sm font-medium text-emerald-700">Subtotal</span>
                  <div className="mt-1 flex h-16 min-w-24 items-center justify-center rounded-md bg-white px-4 text-2xl font-bold text-emerald-700 shadow-sm">
                    ${showRadioEarnings ? radioAnimation.toFixed(2) : "0.00"}
                  </div>

                  {!showRadioEarnings && (
                    <Button
                      onClick={handleShowRadioEarnings}
                      className="mt-2 bg-emerald-600 hover:bg-emerald-700"
                      size="sm"
                    >
                      Calculate
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="rounded-lg bg-blue-50 p-4 text-blue-800">
          <h3 className="font-semibold">Math Concept:</h3>
          <p>
            Multiplication is used for repeated addition. Instead of adding $3.15 twelve times for calculators, we can
            multiply: 12 × $3.15
          </p>
        </div>
      </div>
    </LessonLayout>
  )
}
