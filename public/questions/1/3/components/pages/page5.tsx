"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, XCircle, Calculator, Lightbulb } from "lucide-react"

export default function Page5() {
  const [formula, setFormula] = useState("")
  const [showHint, setShowHint] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const handleSubmit = () => {
    // Check if the formula is correct (multiple possible correct answers)
    const correctAnswers = [
      "2*2*2*2*2*2",
      "2×2×2×2×2×2",
      "2^6",
      "2**6",
      "2 to the power of 6",
      "2*32",
      "2×32",
      "64",
      "2*2^5",
      "2×2^5",
    ]

    const normalizedFormula = formula.replace(/\s+/g, "").toLowerCase()
    const isFormulaCorrect = correctAnswers.some((answer) =>
      normalizedFormula.includes(answer.replace(/\s+/g, "").toLowerCase()),
    )

    setIsCorrect(isFormulaCorrect)
    setSubmitted(true)
  }

  const resetForm = () => {
    setFormula("")
    setSubmitted(false)
    setShowHint(false)
  }

  return (
    <div className="flex flex-col items-center">
      <motion.h1
        className="text-3xl font-bold text-purple-700 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        ✍️ Write Your Mathematical Expression!
      </motion.h1>

      <motion.div
        className="w-full max-w-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-700 mb-2 flex items-center">
                  <Calculator className="h-5 w-5 mr-2" />
                  Think About It:
                </h3>
                <p className="mb-4">Based on our observations, we know:</p>
                <ul className="list-disc list-inside space-y-2 text-purple-800 mb-4">
                  <li>On day 10, there are 2 leaves</li>
                  <li>Every 10 days, the number of leaves doubles</li>
                  <li>From day 10 to day 60, there are 5 "doubling cycles"</li>
                </ul>
                <p>You can use multiplication or exponents to write a formula for the number of leaves on day 60.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Write your calculation formula:</label>
                <div className="flex gap-2">
                  <Input
                    value={formula}
                    onChange={(e) => setFormula(e.target.value)}
                    placeholder="Example: 2 × 2 × 2..."
                    disabled={submitted}
                    className="flex-1"
                  />
                  {!submitted ? (
                    <Button onClick={handleSubmit} className="bg-purple-600 hover:bg-purple-700">
                      Submit
                    </Button>
                  ) : (
                    <Button onClick={resetForm} variant="outline">
                      Try Again
                    </Button>
                  )}
                </div>

                <div className="mt-2 flex justify-end">
                  <Button variant="ghost" size="sm" onClick={() => setShowHint(!showHint)} className="text-amber-600">
                    <Lightbulb className="h-4 w-4 mr-1" />
                    {showHint ? "Hide Hint" : "Show Hint"}
                  </Button>
                </div>

                {showHint && (
                  <motion.div
                    className="mt-2 bg-amber-50 p-3 rounded-md text-sm"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-amber-800">
                      Hint: You can write it as 2 × 2 × 2 × 2 × 2 × 2, or use exponents like 2<sup>6</sup>, or 2 × 2
                      <sup>5</sup>, or calculate the final result.
                    </p>
                  </motion.div>
                )}
              </div>

              {submitted && (
                <motion.div
                  className={`p-4 rounded-lg ${isCorrect ? "bg-green-50" : "bg-red-50"}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="h-5 w-5 text-green-600 mr-2" />
                        <p className="text-green-700 font-medium">Great! Your formula is correct.</p>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-5 w-5 text-red-600 mr-2" />
                        <p className="text-red-700 font-medium">
                          Try again! Hint: Think about how the number of leaves changes every 10 days.
                        </p>
                      </>
                    )}
                  </div>
                </motion.div>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        className="bg-gray-50 p-6 rounded-lg max-w-lg text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-gray-700">
          Don't worry about getting it wrong! That's part of the learning process.
          <br />
          Try different ways to express this mathematical relationship.
        </p>
      </motion.div>
    </div>
  )
}
