"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function SolveExpressionPage() {
  const [step, setStep] = useState(1)

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">🎯 Check Your Work!</h1>
            <p className="text-xl text-gray-600">Part D: Solving the expression to find the total cost</p>
          </div>

          <div className="mb-8 overflow-hidden rounded-xl bg-white p-6 shadow-lg">
            <div className="mb-6">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">Step-by-Step Solution</h2>

              <div className="space-y-6">
                <Card className={`p-4 ${step >= 1 ? "bg-yellow-50 border-yellow-200" : "bg-gray-50"}`}>
                  <h3 className="mb-2 text-lg font-medium">Step 1: Calculate the mileage charge</h3>
                  <div className="rounded-md bg-white p-3">
                    <div className="mb-2 text-center text-xl font-medium">$0.45 × 18 = $8.10</div>
                    <div className="text-center text-xl font-medium">$3.20 + $8.10 = $11.30</div>
                  </div>
                </Card>

                {step >= 2 && (
                  <Card className={`p-4 ${step >= 2 ? "bg-blue-50 border-blue-200" : "bg-gray-50"}`}>
                    <h3 className="mb-2 text-lg font-medium">Step 2: Calculate the traffic charge</h3>
                    <div className="rounded-md bg-white p-3 text-center text-xl font-medium">$0.20 × 6 = $1.20</div>
                  </Card>
                )}

                {step >= 3 && (
                  <Card className={`p-4 ${step >= 3 ? "bg-green-50 border-green-200" : "bg-gray-50"}`}>
                    <h3 className="mb-2 text-lg font-medium">Step 3: Find the total taxi fare</h3>
                    <div className="rounded-md bg-white p-3">
                      <div className="mb-2 text-center text-xl font-medium">$11.30 + $1.20 = $12.50</div>
                      <div className="text-center text-2xl font-bold text-green-600">
                        Cindy's total taxi cost was $12.50
                      </div>
                    </div>
                  </Card>
                )}
              </div>
            </div>

            {step < 3 && (
              <div className="mb-4 flex justify-center">
                <Button
                  onClick={() => setStep((prev) => prev + 1)}
                  className="bg-yellow-500 text-black hover:bg-yellow-600"
                >
                  Next Step
                </Button>
              </div>
            )}

            {step === 3 && (
              <div className="mt-6 rounded-lg bg-green-50 p-4 text-center">
                <div className="mb-2 flex items-center justify-center text-green-600">
                  <Check className="mr-2 h-5 w-5" />
                  <span className="text-lg font-medium">Congratulations! You've solved the problem.</span>
                </div>
                <p className="text-gray-700">
                  You've successfully broken down a complex problem into manageable parts, built expressions for each
                  part, and combined them to find the solution.
                </p>
              </div>
            )}

            {step === 3 && (
              <div className="mt-6 rounded-lg bg-gray-100 p-4">
                <h3 className="mb-2 text-lg font-medium">Key Takeaways</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500">•</span>
                    Break complex problems into simpler parts
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500">•</span>
                    Build expressions for each part separately
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500">•</span>
                    Combine the parts to find the complete solution
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500">•</span>
                    Solve step-by-step to avoid mistakes
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="flex justify-between">
            <Link href="/combine-expressions">
              <Button variant="outline" className="flex items-center gap-2">
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
            </Link>
            <Link href="/near-transfer">
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
