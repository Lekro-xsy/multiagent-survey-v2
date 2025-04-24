"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function SolveInequalityPage() {
  const [inequality, setInequality] = useState("")
  const [workShown, setWorkShown] = useState("")
  const [explanation, setExplanation] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [feedback, setFeedback] = useState<{
    inequality: boolean
    workShown: boolean
    explanation: boolean
  }>({
    inequality: false,
    workShown: false,
    explanation: false,
  })

  const handleSubmit = () => {
    const inequalityCorrect = inequality.replace(/\s+/g, "") === "50+2x≥150"

    // Check if work shown contains key steps
    const workShownCorrect =
      workShown.includes("50 + 2x ≥ 150") &&
      (workShown.includes("2x ≥ 100") || workShown.includes("2x ≥ 150 - 50")) &&
      (workShown.includes("x ≥ 50") || workShown.includes("x ≥ 100/2"))

    // Check if explanation mentions key concepts
    const explanationCorrect = explanation.toLowerCase().includes("cd") && explanation.toLowerCase().includes("50")

    setFeedback({
      inequality: inequalityCorrect,
      workShown: workShownCorrect,
      explanation: explanationCorrect,
    })

    setSubmitted(true)
  }

  const allCorrect = feedback.inequality && feedback.workShown && feedback.explanation

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-gradient-to-r from-purple-700 to-purple-900 py-6 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Math in Action: Inequalities</h1>
          <p className="mt-2 text-lg">Learn how to use inequalities to solve real-world problems</p>
        </div>
      </header>

      <main className="container mx-auto flex-1 px-4 py-8">
        <Card className="mx-auto max-w-4xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">✍️ Write It and Solve It!</CardTitle>
            <CardDescription>Write the inequality and solve it step-by-step</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="mx-auto max-w-2xl space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="inequality">Write the full inequality:</Label>
                  <Input
                    id="inequality"
                    placeholder="e.g., 50 + 2x ≥ 150"
                    value={inequality}
                    onChange={(e) => setInequality(e.target.value)}
                    disabled={submitted}
                  />
                  {submitted && (
                    <div className="flex items-center gap-2 text-sm">
                      {feedback.inequality ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <X className="h-4 w-4 text-red-500" />
                      )}
                      <span className={feedback.inequality ? "text-green-600" : "text-red-600"}>
                        {feedback.inequality
                          ? "Correct! The inequality is 50 + 2x ≥ 150"
                          : "Not quite. The inequality should be 50 + 2x ≥ 150"}
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="work-shown">Show your work step-by-step:</Label>
                  <Textarea
                    id="work-shown"
                    placeholder="Write each step of your solution..."
                    className="min-h-[120px]"
                    value={workShown}
                    onChange={(e) => setWorkShown(e.target.value)}
                    disabled={submitted}
                  />
                  {submitted && (
                    <div className="flex items-center gap-2 text-sm">
                      {feedback.workShown ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <X className="h-4 w-4 text-red-500" />
                      )}
                      <span className={feedback.workShown ? "text-green-600" : "text-red-600"}>
                        {feedback.workShown
                          ? "Great work! You've shown the key steps."
                          : "Make sure to show all steps: 50 + 2x ≥ 150, then 2x ≥ 100, then x ≥ 50"}
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="explanation">Explain what your answer means:</Label>
                  <Textarea
                    id="explanation"
                    placeholder="What does your answer mean in terms of CDs sold?"
                    className="min-h-[80px]"
                    value={explanation}
                    onChange={(e) => setExplanation(e.target.value)}
                    disabled={submitted}
                  />
                  {submitted && (
                    <div className="flex items-center gap-2 text-sm">
                      {feedback.explanation ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <X className="h-4 w-4 text-red-500" />
                      )}
                      <span className={feedback.explanation ? "text-green-600" : "text-red-600"}>
                        {feedback.explanation
                          ? "Good explanation!"
                          : "Your explanation should mention that Tony needs to sell at least 50 CDs."}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {!submitted && (
                <Button onClick={handleSubmit} className="w-full" disabled={!inequality || !workShown || !explanation}>
                  Submit Your Solution
                </Button>
              )}

              {submitted && allCorrect && (
                <div className="rounded-lg bg-green-50 p-4 text-center text-green-700">
                  <p className="text-lg font-medium">Excellent work!</p>
                  <p>You've correctly set up and solved the inequality.</p>
                  <p className="mt-2 font-medium">Tony needs to sell at least 50 CDs per week to meet his goal.</p>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/setup-inequality">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" /> Back
              </Button>
            </Link>
            <Link href="/test-solution">
              <Button className="gap-2" disabled={!submitted}>
                Continue <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </main>

      <footer className="bg-gray-100 py-4 text-center text-sm text-gray-600">
        <div className="container mx-auto">
          <p>Interactive Math Lesson: Inequalities Through Real-World Problems</p>
        </div>
      </footer>
    </div>
  )
}
