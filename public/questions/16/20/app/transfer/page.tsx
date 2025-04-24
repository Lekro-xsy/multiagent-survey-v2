"use client"

import { useState } from "react"
import PageLayout from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Check, X } from "lucide-react"

export default function TransferPage() {
  const [setup, setSetup] = useState("")
  const [calculation, setCalculation] = useState("")
  const [answer, setAnswer] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    setSubmitted(true)
  }

  const handleReset = () => {
    setSetup("")
    setCalculation("")
    setAnswer("")
    setSubmitted(false)
  }

  const isSetupCorrect = () => {
    // Check if setup contains both 480 and 15 and some form of division
    return /480.*[÷/].*15|480.*÷.*15/.test(setup)
  }

  const isCalculationCorrect = () => {
    // Check if calculation is approximately 32 (allowing for minor differences in expression)
    return /32/.test(calculation)
  }

  const isAnswerCorrect = () => {
    // Check if answer is 32.0
    return answer === "32.0" || answer === "32"
  }

  return (
    <PageLayout title="Try Another Road Trip!" emoji="🔄">
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <p className="text-lg">Let's practice with a similar problem to reinforce what we've learned.</p>

          <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="font-bold">New Scenario:</p>
            <p>
              Another motorist drives <span className="font-bold">480 miles</span> using{" "}
              <span className="font-bold">15 gallons</span> of gas. Find their miles per gallon, rounded to one decimal
              place.
            </p>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Step 1: Write the division setup</label>
                <Input
                  value={setup}
                  onChange={(e) => setSetup(e.target.value)}
                  placeholder="Enter your division setup (e.g., 480 ÷ 15)"
                  disabled={submitted}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Step 2: Calculate the result</label>
                <Input
                  value={calculation}
                  onChange={(e) => setCalculation(e.target.value)}
                  placeholder="Enter your calculation"
                  disabled={submitted}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Step 3: Round to one decimal place</label>
                <Input
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="Enter your final answer"
                  disabled={submitted}
                />
              </div>

              <div className="flex justify-end space-x-3">
                {submitted && (
                  <Button onClick={handleReset} variant="outline">
                    Try Again
                  </Button>
                )}

                <Button
                  onClick={handleSubmit}
                  disabled={!setup || !calculation || !answer || submitted}
                  className="bg-sky-600 hover:bg-sky-700"
                >
                  Submit Answer
                </Button>
              </div>

              {submitted && (
                <div
                  className={`p-4 rounded-lg ${
                    isSetupCorrect() && isCalculationCorrect() && isAnswerCorrect()
                      ? "bg-green-100 border border-green-300"
                      : "bg-red-100 border border-red-300"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {isSetupCorrect() && isCalculationCorrect() && isAnswerCorrect() ? (
                      <>
                        <Check className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <p className="font-medium text-green-800">Excellent! Your solution is correct.</p>
                          <div className="mt-2 space-y-1 text-green-700">
                            <p>Setup: 480 ÷ 15</p>
                            <p>Calculation: 32</p>
                            <p>Final answer: 32.0 miles per gallon</p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <X className="h-5 w-5 text-red-600 mt-1" />
                        <div>
                          <p className="font-medium text-red-800">Your solution needs some revision.</p>
                          <div className="mt-2 space-y-1 text-red-700">
                            {!isSetupCorrect() && (
                              <p>Setup: Remember to divide total miles by total gallons (480 ÷ 15)</p>
                            )}
                            {!isCalculationCorrect() && <p>Calculation: 480 ÷ 15 = 32</p>}
                            {!isAnswerCorrect() && <p>Final answer: 32 rounded to one decimal place is 32.0</p>}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {submitted && isSetupCorrect() && isCalculationCorrect() && isAnswerCorrect() && (
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="text-lg font-bold text-green-800 mb-3">Great job!</h3>
            <p>You've successfully applied what you learned to a similar problem. The process is the same:</p>
            <ol className="list-decimal pl-5 mt-2 space-y-1">
              <li>Identify the total miles (480) and total gallons (15)</li>
              <li>Set up the division: miles ÷ gallons</li>
              <li>Calculate: 480 ÷ 15 = 32</li>
              <li>Round to one decimal place: 32.0 miles per gallon</li>
            </ol>
          </div>
        )}
      </div>
    </PageLayout>
  )
}
