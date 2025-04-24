"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function TrafficExpressionPage() {
  const [showExpression, setShowExpression] = useState(false)
  const [showCalculation, setShowCalculation] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
              ⏰ Writing the Traffic Time Expression
            </h1>
            <p className="text-xl text-gray-600">Part B: Building the expression for traffic charges</p>
          </div>

          <div className="mb-8 overflow-hidden rounded-xl bg-white p-6 shadow-lg">
            <div className="mb-6">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">Traffic Time Charges</h2>

              <div className="space-y-6">
                <Card className="border-blue-200 bg-blue-50 p-4">
                  <h3 className="mb-2 text-lg font-medium">Step 1: Understand the traffic charge</h3>
                  <p className="mb-2">The taxi charges for time spent waiting in traffic:</p>
                  <div className="rounded-md bg-white p-3 text-center text-xl font-medium">
                    $0.20 per minute while stopped in traffic
                  </div>
                </Card>

                <Card className="border-blue-200 bg-blue-50 p-4">
                  <h3 className="mb-2 text-lg font-medium">Step 2: Identify the time spent in traffic</h3>
                  <p className="mb-2">From the problem, we know:</p>
                  <div className="rounded-md bg-white p-3 text-center text-xl font-medium">
                    Time stopped in traffic = 6 minutes
                  </div>
                </Card>

                <Card className="border-blue-200 bg-blue-50 p-4">
                  <h3 className="mb-2 text-lg font-medium">Step 3: Write the traffic charge expression</h3>
                  <p className="mb-2">To find the total traffic charge, multiply the rate by the time:</p>

                  {!showExpression ? (
                    <Button
                      onClick={() => setShowExpression(true)}
                      className="w-full bg-blue-500 text-white hover:bg-blue-600"
                    >
                      Show Expression
                    </Button>
                  ) : (
                    <div className="rounded-md bg-white p-3 text-center text-xl font-medium">
                      Traffic charge = $0.20 × 6 minutes
                    </div>
                  )}
                </Card>

                {showExpression && (
                  <Card className="border-blue-200 bg-blue-50 p-4">
                    <h3 className="mb-2 text-lg font-medium">Step 4: Calculate the traffic charge</h3>

                    {!showCalculation ? (
                      <Button
                        onClick={() => setShowCalculation(true)}
                        className="w-full bg-blue-500 text-white hover:bg-blue-600"
                      >
                        Calculate
                      </Button>
                    ) : (
                      <div className="rounded-md bg-white p-3 text-center text-xl font-medium">
                        Traffic charge = $0.20 × 6 = $1.20
                      </div>
                    )}
                  </Card>
                )}
              </div>
            </div>

            {showCalculation && (
              <div className="rounded-lg bg-green-50 p-4 text-center">
                <div className="mb-2 flex items-center justify-center text-green-600">
                  <Check className="mr-2 h-5 w-5" />
                  <span className="text-lg font-medium">Great job! You've built the traffic charge expression.</span>
                </div>
                <p className="text-gray-700">Now let's combine both expressions to find the total taxi fare.</p>
              </div>
            )}

            <div className="mt-6 rounded-lg bg-gray-100 p-4">
              <h3 className="mb-2 text-lg font-medium">Summary of Part B</h3>
              <p className="text-gray-700">
                The traffic charge expression is simple: multiply the rate per minute by the number of minutes. This is
                a direct application of the rate × quantity formula.
              </p>
            </div>
          </div>

          <div className="flex justify-between">
            <Link href="/mileage-expression">
              <Button variant="outline" className="flex items-center gap-2">
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
            </Link>
            <Link href="/combine-expressions">
              <Button className="group bg-yellow-500 text-black hover:bg-yellow-600" disabled={!showCalculation}>
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
