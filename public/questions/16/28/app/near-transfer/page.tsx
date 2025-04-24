"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function NearTransferPage() {
  const [step, setStep] = useState(1)
  const [mileageExpression, setMileageExpression] = useState("")
  const [trafficExpression, setTrafficExpression] = useState("")
  const [totalExpression, setTotalExpression] = useState("")
  const [totalCost, setTotalCost] = useState("")

  const [mileageCorrect, setMileageCorrect] = useState<boolean | null>(null)
  const [trafficCorrect, setTrafficCorrect] = useState<boolean | null>(null)
  const [totalExpressionCorrect, setTotalExpressionCorrect] = useState<boolean | null>(null)
  const [totalCostCorrect, setTotalCostCorrect] = useState<boolean | null>(null)

  const checkMileageExpression = () => {
    // Normalize input by removing spaces and converting to lowercase
    const normalized = mileageExpression.replace(/\s+/g, "").toLowerCase()
    // Check against possible correct answers
    const isCorrect =
      normalized === "3.50+0.50×20" ||
      normalized === "3.5+0.5×20" ||
      normalized === "3.50+0.50*20" ||
      normalized === "3.5+0.5*20"

    setMileageCorrect(isCorrect)
    if (isCorrect && step === 1) setStep(2)
  }

  const checkTrafficExpression = () => {
    // Normalize input
    const normalized = trafficExpression.replace(/\s+/g, "").toLowerCase()
    // Check against possible correct answers
    const isCorrect =
      normalized === "0.25×5" || normalized === "0.25*5" || normalized === "0.25×5" || normalized === "0.25*5"

    setTrafficCorrect(isCorrect)
    if (isCorrect && step === 2) setStep(3)
  }

  const checkTotalExpression = () => {
    // Normalize input
    const normalized = totalExpression.replace(/\s+/g, "").toLowerCase()
    // Check against possible correct answers
    const isCorrect =
      normalized === "(3.50+0.50×20)+(0.25×5)" ||
      normalized === "(3.5+0.5×20)+(0.25×5)" ||
      normalized === "3.50+0.50×20+0.25×5" ||
      normalized === "3.5+0.5×20+0.25×5" ||
      normalized === "(3.50+0.50*20)+(0.25*5)" ||
      normalized === "(3.5+0.5*20)+(0.25*5)" ||
      normalized === "3.50+0.50*20+0.25*5" ||
      normalized === "3.5+0.5*20+0.25*5"

    setTotalExpressionCorrect(isCorrect)
    if (isCorrect && step === 3) setStep(4)
  }

  const checkTotalCost = () => {
    // Normalize input
    const normalized = totalCost.replace(/\s+/g, "").toLowerCase()
    // Check against correct answer
    const isCorrect = normalized === "13.75" || normalized === "$13.75"

    setTotalCostCorrect(isCorrect)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">🔄 Another Taxi Ride!</h1>
            <p className="text-xl text-gray-600">Apply what you've learned to a similar problem</p>
          </div>

          <div className="mb-8 overflow-hidden rounded-xl bg-white p-6 shadow-lg">
            <div className="mb-6">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">New Scenario</h2>

              <div className="mb-6 rounded-lg bg-gray-100 p-4">
                <p className="text-lg text-gray-800">This time, a taxi charges:</p>
                <ul className="my-3 space-y-1 text-gray-700">
                  <li>• $3.50 for the first 1/5 mile</li>
                  <li>• $0.50 for each additional 1/5 mile</li>
                  <li>• $0.25 per minute stuck in traffic</li>
                </ul>
                <p className="text-lg text-gray-800">The trip is 4.2 miles long with 5 minutes of stopped time.</p>
                <p className="mt-3 font-medium text-gray-800">How much does this taxi ride cost?</p>
              </div>

              <div className="space-y-6">
                <Card className="p-4 bg-yellow-50">
                  <h3 className="mb-2 text-lg font-medium">Step 1: Build the mileage expression</h3>
                  <p className="mb-4 text-sm text-gray-600">
                    Hint: First calculate how many additional 1/5-mile segments are in 4.2 miles after the first 1/5
                    mile. 4.2 miles - 0.2 miles = 4.0 miles 4.0 miles ÷ 0.2 miles/segment = 20 additional segments
                  </p>

                  <div className="mb-4">
                    <Input
                      value={mileageExpression}
                      onChange={(e) => setMileageExpression(e.target.value)}
                      placeholder="Type your mileage expression here"
                      className="text-center text-lg"
                    />
                  </div>

                  <Button
                    onClick={checkMileageExpression}
                    className="w-full bg-yellow-500 text-black hover:bg-yellow-600"
                  >
                    Check Mileage Expression
                  </Button>

                  {mileageCorrect !== null && (
                    <div
                      className={`mt-2 rounded-lg p-2 text-center ${mileageCorrect ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}
                    >
                      {mileageCorrect ? (
                        <span className="text-sm font-medium">Correct! $3.50 + ($0.50 × 20)</span>
                      ) : (
                        <span className="text-sm font-medium">Not quite right. Try again!</span>
                      )}
                    </div>
                  )}
                </Card>

                {step >= 2 && (
                  <Card className="p-4 bg-blue-50">
                    <h3 className="mb-2 text-lg font-medium">Step 2: Build the traffic expression</h3>

                    <div className="mb-4">
                      <Input
                        value={trafficExpression}
                        onChange={(e) => setTrafficExpression(e.target.value)}
                        placeholder="Type your traffic expression here"
                        className="text-center text-lg"
                      />
                    </div>

                    <Button
                      onClick={checkTrafficExpression}
                      className="w-full bg-blue-500 text-white hover:bg-blue-600"
                    >
                      Check Traffic Expression
                    </Button>

                    {trafficCorrect !== null && (
                      <div
                        className={`mt-2 rounded-lg p-2 text-center ${trafficCorrect ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}
                      >
                        {trafficCorrect ? (
                          <span className="text-sm font-medium">Correct! $0.25 × 5</span>
                        ) : (
                          <span className="text-sm font-medium">Not quite right. Try again!</span>
                        )}
                      </div>
                    )}
                  </Card>
                )}

                {step >= 3 && (
                  <Card className="p-4 bg-purple-50">
                    <h3 className="mb-2 text-lg font-medium">Step 3: Combine the expressions</h3>

                    <div className="mb-4">
                      <Input
                        value={totalExpression}
                        onChange={(e) => setTotalExpression(e.target.value)}
                        placeholder="Type your combined expression here"
                        className="text-center text-lg"
                      />
                    </div>

                    <Button
                      onClick={checkTotalExpression}
                      className="w-full bg-purple-500 text-white hover:bg-purple-600"
                    >
                      Check Combined Expression
                    </Button>

                    {totalExpressionCorrect !== null && (
                      <div
                        className={`mt-2 rounded-lg p-2 text-center ${totalExpressionCorrect ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}
                      >
                        {totalExpressionCorrect ? (
                          <span className="text-sm font-medium">Correct! ($3.50 + $0.50 × 20) + ($0.25 × 5)</span>
                        ) : (
                          <span className="text-sm font-medium">Not quite right. Try again!</span>
                        )}
                      </div>
                    )}
                  </Card>
                )}

                {step >= 4 && (
                  <Card className="p-4 bg-green-50">
                    <h3 className="mb-2 text-lg font-medium">Step 4: Calculate the total cost</h3>

                    <div className="mb-4">
                      <Input
                        value={totalCost}
                        onChange={(e) => setTotalCost(e.target.value)}
                        placeholder="Type the final answer here"
                        className="text-center text-lg"
                      />
                    </div>

                    <Button onClick={checkTotalCost} className="w-full bg-green-500 text-white hover:bg-green-600">
                      Check Final Answer
                    </Button>

                    {totalCostCorrect !== null && (
                      <div
                        className={`mt-2 rounded-lg p-2 text-center ${totalCostCorrect ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}
                      >
                        {totalCostCorrect ? (
                          <div>
                            <span className="text-sm font-medium">Correct! The total cost is $13.75</span>
                            <div className="mt-2 text-xs">
                              Calculation: $3.50 + ($0.50 × 20) + ($0.25 × 5) = $3.50 + $10.00 + $1.25 = $13.75
                            </div>
                          </div>
                        ) : (
                          <span className="text-sm font-medium">Not quite right. Try again!</span>
                        )}
                      </div>
                    )}
                  </Card>
                )}
              </div>
            </div>

            {totalCostCorrect && (
              <div className="mt-6 rounded-lg bg-green-50 p-4 text-center">
                <div className="mb-2 flex items-center justify-center text-green-600">
                  <Check className="mr-2 h-5 w-5" />
                  <span className="text-lg font-medium">
                    Great job! You've applied the same problem-solving approach to a new scenario.
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between">
            <Link href="/solve-expression">
              <Button variant="outline" className="flex items-center gap-2">
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
            </Link>
            <Link href="/far-transfer">
              <Button className="group bg-yellow-500 text-black hover:bg-yellow-600" disabled={!totalCostCorrect}>
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
