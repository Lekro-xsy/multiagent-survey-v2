"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function MileageExpressionPage() {
  const [step, setStep] = useState(1)
  const [showHint, setShowHint] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">🧮 Writing the Mileage Expression</h1>
            <p className="text-xl text-gray-600">Part A: Building the expression for distance charges</p>
          </div>

          <div className="mb-8 overflow-hidden rounded-xl bg-white p-6 shadow-lg">
            <div className="mb-6">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">Step-by-Step Approach</h2>

              <div className="space-y-6">
                <Card className={`p-4 ${step >= 1 ? "bg-yellow-50 border-yellow-200" : "bg-gray-50"}`}>
                  <h3 className="mb-2 text-lg font-medium">Step 1: First 1/5 mile charge</h3>
                  <p className="mb-2">The first 1/5 mile costs a fixed amount:</p>
                  <div className="rounded-md bg-white p-3 text-center text-xl font-medium">First 1/5 mile = $3.20</div>
                </Card>

                {step >= 2 && (
                  <Card className={`p-4 ${step >= 2 ? "bg-yellow-50 border-yellow-200" : "bg-gray-50"}`}>
                    <h3 className="mb-2 text-lg font-medium">Step 2: Calculate additional distance</h3>
                    <p className="mb-2">We need to find how much distance remains after the first 1/5 mile:</p>
                    <div className="rounded-md bg-white p-3 text-center text-xl font-medium">
                      Additional distance = Total miles - First 1/5 mile
                    </div>
                    <div className="mt-2 rounded-md bg-white p-3 text-center text-xl font-medium">
                      Additional distance = 3.8 miles - 0.2 miles = 3.6 miles
                    </div>
                  </Card>
                )}

                {step >= 3 && (
                  <Card className={`p-4 ${step >= 3 ? "bg-yellow-50 border-yellow-200" : "bg-gray-50"}`}>
                    <h3 className="mb-2 text-lg font-medium">Step 3: Convert to 1/5-mile segments</h3>
                    <p className="mb-2">
                      Since charges are per 1/5 mile, we need to find how many 1/5-mile segments are in 3.6 miles:
                    </p>
                    <div className="rounded-md bg-white p-3 text-center text-xl font-medium">
                      Number of additional segments = 3.6 ÷ 0.2 = 18 segments
                    </div>
                  </Card>
                )}

                {step >= 4 && (
                  <Card className={`p-4 ${step >= 4 ? "bg-yellow-50 border-yellow-200" : "bg-gray-50"}`}>
                    <h3 className="mb-2 text-lg font-medium">Step 4: Calculate cost for additional segments</h3>
                    <p className="mb-2">Each additional 1/5-mile segment costs $0.45:</p>
                    <div className="rounded-md bg-white p-3 text-center text-xl font-medium">
                      Cost for additional segments = $0.45 × 18 = $8.10
                    </div>
                  </Card>
                )}

                {step >= 5 && (
                  <Card className={`p-4 ${step >= 5 ? "bg-yellow-50 border-yellow-200" : "bg-gray-50"}`}>
                    <h3 className="mb-2 text-lg font-medium">Step 5: Write the complete mileage expression</h3>
                    <p className="mb-2">Combine the first 1/5 mile cost with the additional segments cost:</p>
                    <div className="rounded-md bg-white p-3 text-center text-xl font-medium">
                      Total mileage charge = $3.20 + ($0.45 × 18)
                    </div>
                    <div className="mt-2 rounded-md bg-white p-3 text-center text-xl font-medium">
                      Total mileage charge = $3.20 + $8.10 = $11.30
                    </div>
                  </Card>
                )}
              </div>
            </div>

            {step < 5 && (
              <div className="mb-4 flex justify-center">
                <Button
                  onClick={() => setStep((prev) => prev + 1)}
                  className="bg-yellow-500 text-black hover:bg-yellow-600"
                >
                  Next Step
                </Button>
              </div>
            )}

            {step < 5 && (
              <div className="mb-4 text-center">
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="text-sm text-yellow-600 underline hover:text-yellow-700"
                >
                  {showHint ? "Hide Hint" : "Show Hint"}
                </button>

                {showHint && (
                  <div className="mt-2 rounded-lg bg-yellow-50 p-3 text-sm text-gray-700">
                    {step === 1 && "The first part of our expression is always the fixed cost for the first 1/5 mile."}
                    {step === 2 &&
                      "To find the additional distance, subtract the first 1/5 mile (0.2 miles) from the total distance."}
                    {step === 3 && "To convert miles to 1/5-mile segments, divide by 0.2 (which is 1/5 as a decimal)."}
                    {step === 4 && "Multiply the number of additional segments by the cost per segment ($0.45)."}
                  </div>
                )}
              </div>
            )}

            {step === 5 && (
              <div className="rounded-lg bg-green-50 p-4 text-center">
                <div className="mb-2 flex items-center justify-center text-green-600">
                  <Check className="mr-2 h-5 w-5" />
                  <span className="text-lg font-medium">Great job! You've built the mileage expression.</span>
                </div>
                <p className="text-gray-700">Now let's move on to building the expression for traffic charges.</p>
              </div>
            )}
          </div>

          <div className="flex justify-between">
            <Link href="/visualizing-charges">
              <Button variant="outline" className="flex items-center gap-2">
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
            </Link>
            <Link href="/traffic-expression">
              <Button className="group bg-yellow-500 text-black hover:bg-yellow-600">
                Next
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
