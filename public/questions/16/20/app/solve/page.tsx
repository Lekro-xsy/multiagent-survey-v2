"use client"

import { useState } from "react"
import PageLayout from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Check, HelpCircle, X } from "lucide-react"

export default function SolvePage() {
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
    // Check if setup contains both 523 and 16.2 and some form of division
    return /523.*[÷/].*16\.2|523.*÷.*16\.2/.test(setup)
  }

  const isAnswerCorrect = () => {
    // Check if answer is approximately 32.3 (allowing for minor rounding differences)
    const numAnswer = Number.parseFloat(answer)
    return !isNaN(numAnswer) && numAnswer >= 32.2 && numAnswer <= 32.4
  }

  return (
    <PageLayout title="Your Turn: Solve It!" emoji="✍️">
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <p className="text-lg">
            Now it's your turn to solve the problem! Set up the division and calculate the miles per gallon.
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Write the division setup (e.g., 523 ÷ 16.2):</label>
                <Input
                  value={setup}
                  onChange={(e) => setSetup(e.target.value)}
                  placeholder="Enter your division setup"
                  disabled={submitted}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Calculate and round your answer to one decimal place:
                </label>
                <Input
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="Enter your answer (rounded to 1 decimal place)"
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
                    <li>Remember the formula: MPG = Total miles ÷ Total gallons</li>
                    <li>To round to one decimal place, keep only one digit after the decimal point</li>
                    <li>Example of rounding: 32.28 would round to 32.3</li>
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
                          <p className="font-medium text-green-800">Great job! Your setup and answer are correct.</p>
                          <p className="text-green-700 mt-1">We'll check the full solution on the next page.</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <X className="h-5 w-5 text-red-600 mt-1" />
                        <div>
                          <p className="font-medium text-red-800">
                            {!isSetupCorrect() && !isAnswerCorrect()
                              ? "Both your setup and answer need revision."
                              : !isSetupCorrect()
                                ? "Your setup needs revision."
                                : "Your answer needs revision."}
                          </p>
                          <p className="text-red-700 mt-1">
                            Remember to divide 523 miles by 16.2 gallons and round to one decimal place.
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  )
}
