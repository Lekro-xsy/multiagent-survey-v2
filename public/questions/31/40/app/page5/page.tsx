"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import PageLayout from "@/components/page-layout"

export default function Page5() {
  const [equation, setEquation] = useState("")
  const [solution, setSolution] = useState("")
  const [explanation, setExplanation] = useState("")
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [feedback, setFeedback] = useState("")

  const checkAnswer = () => {
    // Check if equation is correct (Time = 3/5 or equivalent)
    const equationCorrect = /time\s*=\s*3\s*\/\s*5|time\s*=\s*3\s*÷\s*5/i.test(equation)

    // Check if solution is correct (0.6 hours or equivalent)
    const solutionCorrect = /0\.6\s*(?:hours?)?|3\/5\s*(?:hours?)?/i.test(solution)

    // Check if explanation mentions division of distance by speed
    const explanationRelevant = /divid.*distance.*speed|divid.*3.*5/i.test(explanation)

    if (equationCorrect && solutionCorrect && explanationRelevant) {
      setIsCorrect(true)
      setFeedback("Great job! Your solution is correct.")
    } else {
      setIsCorrect(false)
      setFeedback("Let's try again. Remember to divide distance by speed.")
    }
  }

  return (
    <PageLayout title="✍️ Your Turn to Solve!" currentPage={5} totalPages={9}>
      <Card className="border-2 border-green-200 shadow-lg">
        <CardHeader className="bg-green-50">
          <CardTitle className="text-2xl text-green-800">✍️ Your Turn to Solve!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="rounded-lg bg-blue-50 p-6">
            <h3 className="mb-4 text-xl font-semibold text-blue-800">Solve the Problem:</h3>

            <div className="space-y-5">
              <div>
                <Label htmlFor="equation" className="text-blue-800">
                  Write the equation to find the jogging time:
                </Label>
                <Input
                  id="equation"
                  placeholder="Time = ..."
                  className="mt-1"
                  value={equation}
                  onChange={(e) => setEquation(e.target.value)}
                />
                <p className="mt-1 text-xs text-blue-600">Hint: Use the formula Time = Distance ÷ Speed</p>
              </div>

              <div>
                <Label htmlFor="solution" className="text-blue-800">
                  Solve the equation (include units):
                </Label>
                <Input
                  id="solution"
                  placeholder="Time = ..."
                  className="mt-1"
                  value={solution}
                  onChange={(e) => setSolution(e.target.value)}
                />
                <p className="mt-1 text-xs text-blue-600">Hint: The answer will be in hours</p>
              </div>

              <div>
                <Label htmlFor="explanation" className="text-blue-800">
                  Explain your solution:
                </Label>
                <Textarea
                  id="explanation"
                  placeholder="I divided..."
                  className="mt-1"
                  value={explanation}
                  onChange={(e) => setExplanation(e.target.value)}
                />
              </div>

              <Button
                onClick={checkAnswer}
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={!equation || !solution || !explanation}
              >
                Check My Answer
              </Button>

              {isCorrect !== null && (
                <div
                  className={`mt-4 flex items-center justify-center rounded-lg p-3 ${isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                >
                  {isCorrect && <CheckCircle className="mr-2 h-5 w-5" />}
                  <span>{feedback}</span>
                </div>
              )}
            </div>
          </div>

          <div className="rounded-lg bg-yellow-100 p-4 text-center">
            <p className="text-yellow-800">After solving, we'll need to compare our answer to the 30-minute goal.</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between pb-6">
          <Link href="/page4">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
          </Link>
          <Link href="/page6">
            <Button className="bg-green-600 hover:bg-green-700" disabled={!isCorrect}>
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </PageLayout>
  )
}
