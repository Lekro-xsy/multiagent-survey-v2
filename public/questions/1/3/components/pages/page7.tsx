"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle2, XCircle, Lightbulb } from "lucide-react"

export default function Page7() {
  const [answer, setAnswer] = useState("")
  const [showHint, setShowHint] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const handleSubmit = () => {
    // Check if the answer is correct
    const correctAnswer = "128"
    const isAnswerCorrect = answer.trim() === correctAnswer

    setIsCorrect(isAnswerCorrect)
    setSubmitted(true)
  }

  const resetForm = () => {
    setAnswer("")
    setSubmitted(false)
  }

  return (
    <div className="flex flex-col items-center">
      <motion.h1
        className="text-3xl font-bold text-amber-700 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🚀 Try With Different Numbers!
      </motion.h1>

      <motion.div
        className="w-full max-w-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Card>
          <CardContent className="p-6">
            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-amber-700 mb-4">New Problem</h3>
              <p className="text-lg mb-4">
                A seed grows <span className="font-bold">4 leaves</span> in 10 days, and the number of leaves doubles
                every 10 days. How many leaves will it have after 60 days?
              </p>
              <p className="text-sm text-amber-600">
                Note: The initial value is 4 leaves instead of 2, but the growth pattern remains the same.
              </p>
            </div>

            <div className="mb-6">
              <Table className="border rounded-lg overflow-hidden">
                <TableHeader className="bg-amber-50">
                  <TableRow>
                    <TableHead className="text-center font-bold">Days</TableHead>
                    <TableHead className="text-center font-bold">Number of Leaves</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-center">Day 10</TableCell>
                    <TableCell className="text-center font-medium">4</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-center">Day 20</TableCell>
                    <TableCell className="text-center font-medium">8</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-center">Day 30</TableCell>
                    <TableCell className="text-center font-medium">16</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-center">...</TableCell>
                    <TableCell className="text-center">...</TableCell>
                  </TableRow>
                  <TableRow className="bg-amber-50">
                    <TableCell className="text-center">Day 60</TableCell>
                    <TableCell className="text-center font-medium">?</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How many leaves will there be on day 60?
              </label>
              <div className="flex gap-2">
                <Input
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="Enter your answer"
                  disabled={submitted}
                  className="flex-1"
                  type="number"
                />
                {!submitted ? (
                  <Button onClick={handleSubmit} className="bg-amber-600 hover:bg-amber-700">
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
                    Hint: Use the same method as before, but with an initial value of 4.
                    <br />
                    From day 10 to day 60, there are still 5 "doubling cycles".
                  </p>
                </motion.div>
              )}
            </div>

            {submitted && (
              <motion.div
                className={`mt-4 p-4 rounded-lg ${isCorrect ? "bg-green-50" : "bg-red-50"}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center">
                  {isCorrect ? (
                    <>
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2" />
                      <div>
                        <p className="text-green-700 font-medium">Correct! There will be 128 leaves on day 60.</p>
                        <p className="text-sm text-green-600 mt-1">
                          Calculation: 4 × 2<sup>5</sup> = 4 × 32 = 128
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <XCircle className="h-5 w-5 text-red-600 mr-2" />
                      <p className="text-red-700 font-medium">
                        Try again! Hint: The initial value is 4, and there are 5 doubling cycles from day 10 to day 60.
                      </p>
                    </>
                  )}
                </div>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {isCorrect && (
        <motion.div
          className="bg-green-50 p-6 rounded-lg max-w-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-green-700 mb-4">Congratulations on mastering this model!</h3>
          <p className="mb-4">You can now apply the exponential growth model to solve different problems.</p>
          <p>
            General formula:
            <span className="font-bold">
              Initial value × 2<sup>number of doubling cycles</sup>
            </span>
          </p>
        </motion.div>
      )}
    </div>
  )
}
