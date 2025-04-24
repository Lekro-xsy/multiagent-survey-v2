"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function FarTransferPage() {
  const [movingExpression, setMovingExpression] = useState("")
  const [waitingExpression, setWaitingExpression] = useState("")
  const [totalExpression, setTotalExpression] = useState("")
  const [totalCost, setTotalCost] = useState("")

  const [movingCorrect, setMovingCorrect] = useState<boolean | null>(null)
  const [waitingCorrect, setWaitingCorrect] = useState<boolean | null>(null)
  const [totalExpressionCorrect, setTotalExpressionCorrect] = useState<boolean | null>(null)
  const [totalCostCorrect, setTotalCostCorrect] = useState<boolean | null>(null)

  const checkMovingExpression = () => {
    // Normalize input
    const normalized = movingExpression.replace(/\s+/g, "").toLowerCase()
    // Check against possible correct answers
    const isCorrect = normalized === "200+50×4" || normalized === "200+50*4"

    setMovingCorrect(isCorrect)
  }

  const checkWaitingExpression = () => {
    // Normalize input
    const normalized = waitingExpression.replace(/\s+/g, "").toLowerCase()
    // Check against possible correct answers
    const isCorrect = normalized === "25×4" || normalized === "25*4"

    setWaitingCorrect(isCorrect)
  }

  const checkTotalExpression = () => {
    // Normalize input
    const normalized = totalExpression.replace(/\s+/g, "").toLowerCase()
    // Check against possible correct answers
    const isCorrect =
      normalized === "(200+50×4)+(25×4)" ||
      normalized === "(200+50*4)+(25*4)" ||
      normalized === "200+50×4+25×4" ||
      normalized === "200+50*4+25*4"

    setTotalExpressionCorrect(isCorrect)
  }

  const checkTotalCost = () => {
    // Normalize input
    const normalized = totalCost.replace(/\s+/g, "").toLowerCase()
    // Check against correct answer
    const isCorrect = normalized === "400" || normalized === "$400"

    setTotalCostCorrect(isCorrect)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">🚀 New Story: Same Math Thinking!</h1>
            <p className="text-xl text-gray-600">
              Apply the same mathematical structure to a completely different scenario
            </p>
          </div>

          <div className="mb-8 overflow-hidden rounded-xl bg-white p-6 shadow-lg">
            <div className="mb-6">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">Moving Company Scenario</h2>

              <div className="mb-6 rounded-lg bg-gray-100 p-4">
                <p className="text-lg text-gray-800">A moving company charges:</p>
                <ul className="my-3 space-y-1 text-gray-700">
                  <li>• $200 for the first hour</li>
                  <li>• $50 for every additional 30 minutes</li>
                  <li>• $25 for each minute the movers wait for elevator access</li>
                </ul>
                <p className="text-lg text-gray-800">
                  The move took 3 hours, and movers waited 4 minutes for elevators.
                </p>
                <p className="mt-3 font-medium text-gray-800">How much did the move cost in total?</p>
              </div>

              <div className="space-y-6">
                <Card className="p-4 bg-yellow-50">
                  <h3 className="mb-2 text-lg font-medium">Step 1: Build the moving time expression</h3>
                  <p className="mb-4 text-sm text-gray-600">
                    Hint: First calculate how many additional 30-minute segments are in 3 hours after the first hour. 3
                    hours - 1 hour = 2 hours = 4 additional 30-minute segments
                  </p>

                  <div className="mb-4">
                    <Input
                      value={movingExpression}
                      onChange={(e) => setMovingExpression(e.target.value)}
                      placeholder="Type your moving time expression here"
                      className="text-center text-lg"
                    />
                  </div>

                  <Button
                    onClick={checkMovingExpression}
                    className="w-full bg-yellow-500 text-black hover:bg-yellow-600"
                  >
                    Check Moving Time Expression
                  </Button>

                  {movingCorrect !== null && (
                    <div
                      className={`mt-2 rounded-lg p-2 text-center ${movingCorrect ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}
                    >
                      {movingCorrect ? (
                        <span className="text-sm font-medium">Correct! $200 + ($50 × 4)</span>
                      ) : (
                        <span className="text-sm font-medium">Not quite right. Try again!</span>
                      )}
                    </div>
                  )}
                </Card>

                <Card className="p-4 bg-blue-50">
                  <h3 className="mb-2 text-lg font-medium">Step 2: Build the elevator waiting expression</h3>

                  <div className="mb-4">
                    <Input
                      value={waitingExpression}
                      onChange={(e) => setWaitingExpression(e.target.value)}
                      placeholder="Type your elevator waiting expression here"
                      className="text-center text-lg"
                    />
                  </div>

                  <Button onClick={checkWaitingExpression} className="w-full bg-blue-500 text-white hover:bg-blue-600">
                    Check Waiting Expression
                  </Button>

                  {waitingCorrect !== null && (
                    <div
                      className={`mt-2 rounded-lg p-2 text-center ${waitingCorrect ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}
                    >
                      {waitingCorrect ? (
                        <span className="text-sm font-medium">Correct! $25 × 4</span>
                      ) : (
                        <span className="text-sm font-medium">Not quite right. Try again!</span>
                      )}
                    </div>
                  )}
                </Card>

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
                        <span className="text-sm font-medium">Correct! ($200 + $50 × 4) + ($25 × 4)</span>
                      ) : (
                        <span className="text-sm font-medium">Not quite right. Try again!</span>
                      )}
                    </div>
                  )}
                </Card>

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
                          <span className="text-sm font-medium">Correct! The total cost is $400</span>
                          <div className="mt-2 text-xs">
                            Calculation: $200 + ($50 × 4) + ($25 × 4) = $200 + $200 + $100 = $400
                          </div>
                        </div>
                      ) : (
                        <span className="text-sm font-medium">Not quite right. Try again!</span>
                      )}
                    </div>
                  )}
                </Card>
              </div>
            </div>

            {totalCostCorrect && (
              <div className="mt-6 rounded-lg bg-green-50 p-4 text-center">
                <div className="mb-2 flex items-center justify-center text-green-600">
                  <Check className="mr-2 h-5 w-5" />
                  <span className="text-lg font-medium">
                    Excellent! You've applied the same mathematical structure to a completely different scenario.
                  </span>
                </div>
                <p className="text-gray-700">
                  Notice how the mathematical structure is the same, even though the context is different: (base charge
                  + rate × additional units) + (penalty × time)
                </p>
              </div>
            )}
          </div>

          <div className="flex justify-between">
            <Link href="/near-transfer">
              <Button variant="outline" className="flex items-center gap-2">
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
            </Link>
            <Link href="/summary">
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
