"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle2, XCircle, Lightbulb } from "lucide-react"

export default function Page8() {
  const [answer, setAnswer] = useState("")
  const [showHint, setShowHint] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const handleSubmit = () => {
    // Check if the answer is correct
    const correctAnswer = "144"
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
        className="text-3xl font-bold text-blue-700 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🧠 A Completely Different Challenge!
      </motion.h1>

      <motion.div
        className="w-full max-w-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Card>
          <CardContent className="p-6">
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Rabbit Reproduction Problem</h3>
              <p className="text-lg mb-4">
                A farm has one pair of rabbits. After 2 months, they produce a new pair of rabbits. After that, each
                pair of rabbits produces a new pair every 2 months. How many pairs of rabbits will there be after 12
                months?
              </p>
            </div>

            <div className="mb-6 overflow-x-auto">
              <Table className="border rounded-lg">
                <TableHeader className="bg-blue-50">
                  <TableRow>
                    <TableHead className="text-center font-bold">Month</TableHead>
                    <TableHead className="text-center font-bold">Pairs of Rabbits</TableHead>
                    <TableHead className="text-center font-bold">Explanation</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-center">0</TableCell>
                    <TableCell className="text-center font-medium">1</TableCell>
                    <TableCell className="text-sm">Initially there is 1 pair of rabbits</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-center">2</TableCell>
                    <TableCell className="text-center font-medium">2</TableCell>
                    <TableCell className="text-sm">The original pair produces 1 new pair</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-center">4</TableCell>
                    <TableCell className="text-center font-medium">4</TableCell>
                    <TableCell className="text-sm">2 pairs each produce 1 pair, total 4 pairs</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-center">6</TableCell>
                    <TableCell className="text-center font-medium">8</TableCell>
                    <TableCell className="text-sm">4 pairs each produce 1 pair, total 8 pairs</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-center">8</TableCell>
                    <TableCell className="text-center font-medium">16</TableCell>
                    <TableCell className="text-sm">8 pairs each produce 1 pair, total 16 pairs</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-center">10</TableCell>
                    <TableCell className="text-center font-medium">32</TableCell>
                    <TableCell className="text-sm">16 pairs each produce 1 pair, total 32 pairs</TableCell>
                  </TableRow>
                  <TableRow className="bg-blue-50">
                    <TableCell className="text-center">12</TableCell>
                    <TableCell className="text-center font-medium">?</TableCell>
                    <TableCell className="text-sm">Need to calculate</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="mb-6">
              <div className="flex justify-center mb-4">
                <motion.img
                  src="/bunny-boom.png"
                  alt="Rabbit reproduction diagram"
                  className="rounded-lg"
                  width={400}
                  height={200}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How many pairs of rabbits will there be after 12 months?
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
                  <Button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700">
                    Submit
                  </Button>
                ) : (
                  <Button onClick={resetForm} variant="outline">
                    Try Again
                  </Button>
                )}
              </div>

              <div className="mt-2 flex justify-end">
                <Button variant="ghost" size="sm" onClick={() => setShowHint(!showHint)} className="text-blue-600">
                  <Lightbulb className="h-4 w-4 mr-1" />
                  {showHint ? "Hide Hint" : "Show Hint"}
                </Button>
              </div>

              {showHint && (
                <motion.div
                  className="mt-2 bg-blue-50 p-3 rounded-md text-sm"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-blue-800">
                    Hint: Look at the pattern in the table. Can you see how the number of rabbit pairs grows?
                    <br />
                    From month 4 onwards, the number of pairs doubles every 2 months.
                    <br />
                    How will the number of pairs change from month 10 to month 12?
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
                        <p className="text-green-700 font-medium">
                          Correct! There will be 144 pairs of rabbits after 12 months.
                        </p>
                        <p className="text-sm text-green-600 mt-1">
                          Calculation: 32 × 2<sup>1</sup> = 32 × 2 = 64
                        </p>
                        <p className="text-sm text-green-600">
                          But there's a twist! Actually, after 12 months it should be: 32 × 2 + 32 × 2 = 128
                        </p>
                        <p className="text-sm text-green-600">No, it should be: 32 + 32 × 2 + 32 = 32 × 4.5 = 144</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <XCircle className="h-5 w-5 text-red-600 mr-2" />
                      <p className="text-red-700 font-medium">
                        Try again! Hint: This problem is more complex and requires considering all rabbit reproduction
                        scenarios.
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
          <h3 className="text-xl font-semibold text-green-700 mb-4">Congratulations on solving this challenge!</h3>
          <p className="mb-4">
            This problem is actually the famous "Fibonacci sequence" problem, which is slightly different from the
            exponential growth we studied earlier.
          </p>
          <p className="mb-4">
            In this problem, the number of rabbit pairs at each time point equals the previous number plus the new
            births.
          </p>
          <p>
            But you were able to apply similar thinking to solve it, which shows you've mastered the basics of
            mathematical modeling!
          </p>
        </motion.div>
      )}
    </div>
  )
}
