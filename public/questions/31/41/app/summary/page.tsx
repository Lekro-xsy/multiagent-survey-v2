"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check, Home } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

export default function SummaryPage() {
  const [quizAnswers, setQuizAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const handleSubmit = () => {
    let newScore = 0

    if (quizAnswers.q1 === "c") newScore++
    if (quizAnswers.q2 === "true") newScore++
    if (
      quizAnswers.q3.toLowerCase().includes("hour") &&
      quizAnswers.q3.toLowerCase().includes("60") &&
      quizAnswers.q3.toLowerCase().includes("4")
    )
      newScore++

    setScore(newScore)
    setSubmitted(true)
  }

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
            <CardTitle className="text-2xl">📚 Wrap-Up and Master It!</CardTitle>
            <CardDescription>Summary and mini-quiz to test your understanding</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="mx-auto max-w-2xl space-y-6">
              <div className="rounded-lg bg-blue-50 p-4">
                <h3 className="mb-4 text-center text-lg font-medium text-blue-700">Key Learning Points</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-green-500" />
                    <span>Model earning scenarios with fixed and variable parts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-green-500" />
                    <span>Write inequalities for financial goals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-green-500" />
                    <span>Solve inequalities by isolating the variable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-green-500" />
                    <span>Test solutions to verify they meet the requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-green-500" />
                    <span>Apply the same mathematical model to different contexts</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg bg-purple-50 p-4">
                <h3 className="mb-4 text-center text-lg font-medium text-purple-700">Mini-Quiz</h3>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <Label>1. Which inequality models earning $200 with $40 base and $5 per sale?</Label>
                    <RadioGroup
                      value={quizAnswers.q1}
                      onValueChange={(value) => setQuizAnswers({ ...quizAnswers, q1: value })}
                      disabled={submitted}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="a" id="q1-a" />
                        <Label htmlFor="q1-a">$40 + $5x = $200</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="b" id="q1-b" />
                        <Label htmlFor="q1-b">$40 + $5x ≤ $200</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="c" id="q1-c" />
                        <Label htmlFor="q1-c">$40 + $5x ≥ $200</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="d" id="q1-d" />
                        <Label htmlFor="q1-d">$40 × $5x ≥ $200</Label>
                      </div>
                    </RadioGroup>
                    {submitted && (
                      <p className={quizAnswers.q1 === "c" ? "text-green-600" : "text-red-600"}>
                        {quizAnswers.q1 === "c"
                          ? "Correct! The inequality uses ≥ to represent 'at least' $200."
                          : "Incorrect. The correct answer is c: $40 + $5x ≥ $200"}
                      </p>
                    )}
                  </div>

                  <div className="space-y-3">
                    <Label>2. True or False: If an inequality uses "at least," it uses the symbol ≥.</Label>
                    <RadioGroup
                      value={quizAnswers.q2}
                      onValueChange={(value) => setQuizAnswers({ ...quizAnswers, q2: value })}
                      disabled={submitted}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="true" id="q2-true" />
                        <Label htmlFor="q2-true">True</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="false" id="q2-false" />
                        <Label htmlFor="q2-false">False</Label>
                      </div>
                    </RadioGroup>
                    {submitted && (
                      <p className={quizAnswers.q2 === "true" ? "text-green-600" : "text-red-600"}>
                        {quizAnswers.q2 === "true"
                          ? "Correct! 'At least' means greater than or equal to (≥)."
                          : "Incorrect. 'At least' means greater than or equal to (≥)."}
                      </p>
                    )}
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="q3">3. Write a real-world situation modeled by: 60 + 4x ≥ 180</Label>
                    <Textarea
                      id="q3"
                      placeholder="Describe a real-world scenario..."
                      value={quizAnswers.q3}
                      onChange={(e) => setQuizAnswers({ ...quizAnswers, q3: e.target.value })}
                      disabled={submitted}
                      className="min-h-[100px]"
                    />
                    {submitted && (
                      <p className={score === 3 ? "text-green-600" : "text-amber-600"}>
                        {score === 3
                          ? "Great example!"
                          : "One possible answer: A tutor charges $60 base fee plus $4 per hour. They need to earn at least $180. How many hours must they tutor?"}
                      </p>
                    )}
                  </div>
                </div>

                {!submitted && (
                  <Button
                    onClick={handleSubmit}
                    className="mt-6 w-full"
                    disabled={!quizAnswers.q1 || !quizAnswers.q2 || !quizAnswers.q3}
                  >
                    Submit Quiz
                  </Button>
                )}

                {submitted && (
                  <div className="mt-6 rounded-lg bg-green-50 p-4 text-center">
                    <p className="text-lg font-medium text-green-700">Your score: {score}/3</p>
                    {score === 3 && (
                      <div className="mt-2">
                        <p className="text-green-700">Congratulations! You've earned the</p>
                        <p className="mt-1 text-xl font-bold text-green-700">Money Math Master Badge! 🏆</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/transfer-different">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" /> Back
              </Button>
            </Link>
            <Link href="/">
              <Button className="gap-2">
                <Home className="h-4 w-4" /> Return Home
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
