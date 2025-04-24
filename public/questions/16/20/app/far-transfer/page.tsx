"use client"

import { useState } from "react"
import PageLayout from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Check, HelpCircle, X } from "lucide-react"

export default function FarTransferPage() {
  const [setup, setSetup] = useState("")
  const [answer, setAnswer] = useState("")
  const [showHint, setShowHint] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    setSubmitted(true)
  }

  const handleReset = () => {
    setSetup("")
    setAnswer("")
    setSubmitted(false)
    setShowHint(false)
  }

  const isSetupCorrect = () => {
    // Check if setup contains both 740 and 18.5 and some form of division
    return /740.*[÷/].*18\.5|740.*÷.*18\.5/.test(setup)
  }

  const isAnswerCorrect = () => {
    // Check if answer is approximately 40.0 (allowing for minor rounding differences)
    return answer === "40.0" || answer === "40"
  }

  return (
    <PageLayout title="New World, Same Math Thinking!" emoji="🚀">
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <p className="text-lg">Now let's apply the same mathematical thinking to a completely different context!</p>

          <div className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
            <p className="font-bold">Different Scenario:</p>
            <p>
              A baker uses <span className="font-bold">18.5 pounds</span> of flour to make{" "}
              <span className="font-bold">740 cupcakes</span>. How many cupcakes does the baker make per pound of flour?
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img src="/flour-covered-baker.png" alt="Baker with cupcakes" className="rounded-lg w-full h-auto" />
          </div>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">Key Shift:</h3>
              <p>
                Instead of miles per gallon, we're now finding <span className="font-bold">cupcakes per pound</span> of
                flour.
              </p>
              <p className="mt-2">But the mathematical thinking is the same - we're still finding a unit rate!</p>

              <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-sm">
                  <span className="font-bold">Remember:</span> To find a unit rate, divide the total amount by the
                  number of units.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Step 1: Write the division setup to find cupcakes per pound
                </label>
                <Input
                  value={setup}
                  onChange={(e) => setSetup(e.target.value)}
                  placeholder="Enter your division setup"
                  disabled={submitted}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Step 2: Calculate and round to one decimal place
                </label>
                <Input
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="Enter your final answer"
                  disabled={submitted}
                />
              </div>

              <div className="flex justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowHint(!showHint)}
                  className="flex items-center gap-1"
                >
                  <HelpCircle className="h-4 w-4" />
                  Need Help?
                </Button>

                <div className="space-x-3">
                  {submitted && (
                    <Button onClick={handleReset} variant="outline">
                      Try Again
                    </Button>
                  )}

                  <Button
                    onClick={handleSubmit}
                    disabled={!setup || !answer || submitted}
                    className="bg-sky-600 hover:bg-sky-700"
                  >
                    Submit Answer
                  </Button>
                </div>
              </div>

              {showHint && (
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-bold text-yellow-800 mb-2">Hints:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>To find cupcakes per pound, divide total cupcakes by total pounds of flour</li>
                    <li>Think about what goes on top and bottom in the division</li>
                    <li>Remember to round your answer to one decimal place</li>
                  </ul>
                </div>
              )}

              {submitted && (
                <div
                  className={`p-4 rounded-lg ${
                    isSetupCorrect() && isAnswerCorrect()
                      ? "bg-green-100 border border-green-300"
                      : "bg-red-100 border border-red-300"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {isSetupCorrect() && isAnswerCorrect() ? (
                      <>
                        <Check className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <p className="font-medium text-green-800">Excellent! Your solution is correct.</p>
                          <div className="mt-2 space-y-1 text-green-700">
                            <p>Setup: 740 ÷ 18.5</p>
                            <p>Final answer: 40.0 cupcakes per pound of flour</p>
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
                              <p>
                                Setup: To find cupcakes per pound, divide total cupcakes by total pounds (740 ÷ 18.5)
                              </p>
                            )}
                            {!isAnswerCorrect() && <p>Final answer: 740 ÷ 18.5 = 40.0 cupcakes per pound</p>}
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

        {submitted && isSetupCorrect() && isAnswerCorrect() && (
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <h3 className="text-lg font-bold text-purple-800 mb-3">Great job applying your knowledge!</h3>
            <p>You've successfully transferred your understanding of unit rates to a completely different context.</p>
            <p className="mt-2">
              Whether it's miles per gallon or cupcakes per pound, the mathematical thinking is the same:
            </p>
            <div className="mt-3 p-3 bg-white rounded-lg text-center">
              <p className="font-bold">Unit rate = Total amount ÷ Number of units</p>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  )
}
