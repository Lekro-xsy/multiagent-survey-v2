"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function CombineExpressionsPage() {
  const [userExpression, setUserExpression] = useState("")
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [showHint, setShowHint] = useState(false)

  const correctExpression = "(3.20+0.45×18)+(0.20×6)"
  const simplifiedExpression = "3.20+0.45×18+0.20×6"

  const checkExpression = () => {
    // Remove all spaces and convert to lowercase for comparison
    const normalizedInput = userExpression.replace(/\s+/g, "").toLowerCase()
    const normalizedCorrect1 = correctExpression.replace(/\s+/g, "").toLowerCase()
    const normalizedCorrect2 = simplifiedExpression.replace(/\s+/g, "").toLowerCase()

    // Check if the input matches either of the acceptable forms
    setIsCorrect(normalizedInput === normalizedCorrect1 || normalizedInput === normalizedCorrect2)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">🧩 Bringing It All Together!</h1>
            <p className="text-xl text-gray-600">Part C: Combining expressions for the total cost</p>
          </div>

          <div className="mb-8 overflow-hidden rounded-xl bg-white p-6 shadow-lg">
            <div className="mb-6">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">Combining the Expressions</h2>

              <div className="space-y-6">
                <Card className="p-4 bg-gray-50">
                  <h3 className="mb-2 text-lg font-medium">Mileage Expression (Part A)</h3>
                  <div className="rounded-md bg-yellow-50 p-3 text-center text-xl font-medium">
                    $3.20 + ($0.45 × 18)
                  </div>
                </Card>

                <Card className="p-4 bg-gray-50">
                  <h3 className="mb-2 text-lg font-medium">Traffic Charge Expression (Part B)</h3>
                  <div className="rounded-md bg-blue-50 p-3 text-center text-xl font-medium">$0.20 × 6</div>
                </Card>

                <Card className="p-4 bg-gray-50">
                  <h3 className="mb-2 text-lg font-medium">Total Cost Expression (Part C)</h3>
                  <p className="mb-4">
                    Write the complete expression for the total taxi fare by combining Parts A and B:
                  </p>

                  <div className="mb-4">
                    <Input
                      value={userExpression}
                      onChange={(e) => setUserExpression(e.target.value)}
                      placeholder="Type your expression here (e.g., 3.20+0.45×18+0.20×6)"
                      className="text-center text-lg"
                    />
                  </div>

                  <Button onClick={checkExpression} className="w-full bg-yellow-500 text-black hover:bg-yellow-600">
                    Check My Answer
                  </Button>
                </Card>
              </div>
            </div>

            {isCorrect !== null && (
              <div className={`rounded-lg p-4 text-center ${isCorrect ? "bg-green-50" : "bg-red-50"}`}>
                {isCorrect ? (
                  <div className="mb-2 flex items-center justify-center text-green-600">
                    <Check className="mr-2 h-5 w-5" />
                    <span className="text-lg font-medium">Correct! You've successfully combined the expressions.</span>
                  </div>
                ) : (
                  <div className="mb-2 text-red-600">
                    <span className="text-lg font-medium">Not quite right. Try again!</span>
                  </div>
                )}
              </div>
            )}

            <div className="mt-4 text-center">
              <button
                onClick={() => setShowHint(!showHint)}
                className="text-sm text-yellow-600 underline hover:text-yellow-700"
              >
                {showHint ? "Hide Hint" : "Show Hint"}
              </button>

              {showHint && (
                <div className="mt-2 rounded-lg bg-yellow-50 p-3 text-sm text-gray-700">
                  To find the total cost, add the mileage charge and the traffic charge together. You can write it as:
                  (Mileage Expression) + (Traffic Expression)
                </div>
              )}
            </div>

            {isCorrect && (
              <div className="mt-6 rounded-lg bg-gray-100 p-4">
                <h3 className="mb-2 text-lg font-medium">Why We Add the Expressions</h3>
                <p className="text-gray-700">
                  We add the two expressions because the total cost consists of two separate charges: what you pay for
                  distance traveled and what you pay for time spent in traffic. Each charge is calculated independently,
                  then combined for the final amount.
                </p>
              </div>
            )}
          </div>

          <div className="flex justify-between">
            <Link href="/traffic-expression">
              <Button variant="outline" className="flex items-center gap-2">
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
            </Link>
            <Link href="/solve-expression">
              <Button className="group bg-yellow-500 text-black hover:bg-yellow-600" disabled={!isCorrect}>
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
