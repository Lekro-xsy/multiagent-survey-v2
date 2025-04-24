"use client"

import { useState } from "react"
import { Check, X } from "lucide-react"

import { PageLayout } from "@/components/page-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function SummaryPage() {
  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleAnswerChange = (question: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [question]: value,
    }))
  }

  const handleSubmit = () => {
    setIsSubmitted(true)
  }

  const getCorrectAnswers = () => {
    let correct = 0
    if (answers.q1 === "c") correct++
    if (answers.q2 === "b") correct++
    if (answers.q3.toLowerCase().includes("rate") || answers.q3.toLowerCase().includes("1/x")) correct++
    if (answers.q4.toLowerCase().includes("add") || answers.q4.toLowerCase().includes("sum")) correct++
    return correct
  }

  return (
    <PageLayout>
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-3xl font-bold text-center">📚 Review and Reflect</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Key Takeaways</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-bold mb-2">1. Work together = Add rates, not times</h3>
                <p>
                  When people work together, we add their work rates (1/x + 1/y), not their times. This is why the
                  combined time is always less than either individual time.
                </p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-bold mb-2">2. Build the correct formula: xy/(x+y)</h3>
                <p>
                  The formula Time = (x × y) ÷ (x + y) works for all "working together" problems, regardless of whether
                  it's people cleaning, mowing, or faucets filling a tub.
                </p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-bold mb-2">3. Solve systematically</h3>
                <p>
                  Break down the problem into clear steps: identify the values, substitute into the formula, calculate
                  the numerator and denominator separately, then divide.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Mini-Quiz</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-3">
                  1. If person A can complete a task in 4 minutes and person B can complete it in 6 minutes, how long
                  will it take them working together?
                </h3>
                <RadioGroup value={answers.q1} onValueChange={(value) => handleAnswerChange("q1", value)}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="a" id="q1-a" />
                    <Label htmlFor="q1-a">5 minutes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="b" id="q1-b" />
                    <Label htmlFor="q1-b">10 minutes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="c" id="q1-c" />
                    <Label htmlFor="q1-c">2.4 minutes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="d" id="q1-d" />
                    <Label htmlFor="q1-d">1 minute</Label>
                  </div>
                </RadioGroup>

                {isSubmitted && (
                  <div className="mt-2">
                    {answers.q1 === "c" ? (
                      <p className="text-green-600 flex items-center gap-1">
                        <Check className="h-4 w-4" /> Correct! (4 × 6) ÷ (4 + 6) = 24 ÷ 10 = 2.4 minutes
                      </p>
                    ) : (
                      <p className="text-red-600 flex items-center gap-1">
                        <X className="h-4 w-4" /> Incorrect. The answer is 2.4 minutes: (4 × 6) ÷ (4 + 6) = 24 ÷ 10 =
                        2.4
                      </p>
                    )}
                  </div>
                )}
              </div>

              <div>
                <h3 className="font-medium mb-3">2. Which of these is NOT a "working together" problem?</h3>
                <RadioGroup value={answers.q2} onValueChange={(value) => handleAnswerChange("q2", value)}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="a" id="q2-a" />
                    <Label htmlFor="q2-a">Two pipes filling a tank</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="b" id="q2-b" />
                    <Label htmlFor="q2-b">A car traveling at different speeds on different roads</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="c" id="q2-c" />
                    <Label htmlFor="q2-c">Two printers printing a document</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="d" id="q2-d" />
                    <Label htmlFor="q2-d">Two people painting a fence</Label>
                  </div>
                </RadioGroup>

                {isSubmitted && (
                  <div className="mt-2">
                    {answers.q2 === "b" ? (
                      <p className="text-green-600 flex items-center gap-1">
                        <Check className="h-4 w-4" /> Correct! A car traveling at different speeds is not a "working
                        together" problem.
                      </p>
                    ) : (
                      <p className="text-red-600 flex items-center gap-1">
                        <X className="h-4 w-4" /> Incorrect. A car traveling at different speeds is not a "working
                        together" problem.
                      </p>
                    )}
                  </div>
                )}
              </div>

              <div>
                <h3 className="font-medium mb-3">
                  3. What does 1/x represent in a "working together" problem where x is the time it takes someone to
                  complete a task alone?
                </h3>
                <Input
                  value={answers.q3}
                  onChange={(e) => handleAnswerChange("q3", e.target.value)}
                  placeholder="Your answer..."
                />

                {isSubmitted && (
                  <div className="mt-2">
                    {answers.q3.toLowerCase().includes("rate") || answers.q3.toLowerCase().includes("1/x") ? (
                      <p className="text-green-600 flex items-center gap-1">
                        <Check className="h-4 w-4" /> Correct! 1/x represents the work rate or the fraction of the job
                        completed per unit time.
                      </p>
                    ) : (
                      <p className="text-red-600 flex items-center gap-1">
                        <X className="h-4 w-4" /> Not quite. 1/x represents the work rate or the fraction of the job
                        completed per unit time.
                      </p>
                    )}
                  </div>
                )}
              </div>

              <div>
                <h3 className="font-medium mb-3">
                  4. Explain why we add the denominators in the formula 1/T = 1/x + 1/y.
                </h3>
                <Input
                  value={answers.q4}
                  onChange={(e) => handleAnswerChange("q4", e.target.value)}
                  placeholder="Your answer..."
                />

                {isSubmitted && (
                  <div className="mt-2">
                    {answers.q4.toLowerCase().includes("add") || answers.q4.toLowerCase().includes("sum") ? (
                      <p className="text-green-600 flex items-center gap-1">
                        <Check className="h-4 w-4" /> Good explanation! We add the work rates because each person
                        contributes their portion of the work per unit time.
                      </p>
                    ) : (
                      <p className="text-red-600 flex items-center gap-1">
                        <X className="h-4 w-4" /> We add the work rates because each person contributes their portion of
                        the work per unit time, and these contributions add up.
                      </p>
                    )}
                  </div>
                )}
              </div>

              <div className="text-center">
                <Button onClick={handleSubmit} size="lg">
                  Submit Answers
                </Button>

                {isSubmitted && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-bold">Your Score: {getCorrectAnswers()} / 4</h3>
                    <p className="mt-2">
                      {getCorrectAnswers() === 4
                        ? "Perfect score! You've mastered working together problems!"
                        : "Great effort! Review the concepts and try again."}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  )
}
