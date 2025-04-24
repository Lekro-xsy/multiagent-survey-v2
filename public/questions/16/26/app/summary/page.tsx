"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Book, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function SummaryPage() {
  const [quizAnswers, setQuizAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
  })

  const [showResults, setShowResults] = useState(false)

  const handleAnswerChange = (question: string, value: string) => {
    setQuizAnswers((prev) => ({
      ...prev,
      [question]: value,
    }))
  }

  const checkAnswers = () => {
    setShowResults(true)
  }

  const getScore = () => {
    let score = 0
    if (quizAnswers.q1 === "b") score++
    if (quizAnswers.q2 === "c") score++
    if (quizAnswers.q3.toLowerCase().includes("rate") && quizAnswers.q3.toLowerCase().includes("proportion")) score++
    return score
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex items-center justify-between">
            <Link href="/transfer2">
              <Button variant="ghost" className="flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" /> Back
              </Button>
            </Link>
            <div className="text-sm text-slate-500">Page 9 of 9</div>
          </div>

          <div className="mb-4 rounded-xl bg-amber-50 p-6 shadow-lg">
            <h1 className="mb-6 flex items-center gap-2 text-3xl font-bold text-slate-800">
              <Book className="h-8 w-8 text-amber-600" /> What Did You Learn?
            </h1>

            <div className="mb-6 rounded-xl bg-white p-4 shadow-md">
              <h2 className="mb-4 text-xl font-semibold text-slate-700">Summary and Mini-Quiz</h2>

              <div className="mb-6 rounded-lg bg-blue-50 p-4">
                <h3 className="mb-3 text-lg font-medium text-blue-700">Key Reflections:</h3>
                <ul className="space-y-2 pl-6">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-blue-500">✓</span>
                    <span className="text-blue-600">
                      How to calculate unit rates (miles per gallon, liters per mile)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-blue-500">✓</span>
                    <span className="text-blue-600">
                      How to set up distance models using proportional relationships
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-blue-500">✓</span>
                    <span className="text-blue-600">How to make real-world decisions using mathematical models</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-blue-500">✓</span>
                    <span className="text-blue-600">
                      How to apply the same mathematical thinking to different contexts
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <div className="rounded-lg bg-slate-50 p-4">
                  <h3 className="mb-3 text-lg font-medium text-slate-700">Mini-Quiz:</h3>

                  <div className="space-y-6">
                    <div>
                      <p className="mb-2 font-medium">1. What is the correct model for distance using gallons?</p>
                      <RadioGroup value={quizAnswers.q1} onValueChange={(value) => handleAnswerChange("q1", value)}>
                        <div className="flex items-start space-x-2">
                          <RadioGroupItem value="a" id="q1-a" className="mt-1" />
                          <Label htmlFor="q1-a" className="flex-1">
                            Distance = gallons ÷ miles per gallon
                          </Label>
                        </div>
                        <div className="flex items-start space-x-2">
                          <RadioGroupItem value="b" id="q1-b" className="mt-1" />
                          <Label htmlFor="q1-b" className="flex-1">
                            Distance = miles per gallon × gallons
                          </Label>
                        </div>
                        <div className="flex items-start space-x-2">
                          <RadioGroupItem value="c" id="q1-c" className="mt-1" />
                          <Label htmlFor="q1-c" className="flex-1">
                            Distance = gallons + miles per gallon
                          </Label>
                        </div>
                        <div className="flex items-start space-x-2">
                          <RadioGroupItem value="d" id="q1-d" className="mt-1" />
                          <Label htmlFor="q1-d" className="flex-1">
                            Distance = gallons - miles per gallon
                          </Label>
                        </div>
                      </RadioGroup>

                      {showResults && (
                        <div
                          className={`mt-2 rounded-md p-2 ${quizAnswers.q1 === "b" ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}
                        >
                          {quizAnswers.q1 === "b" ? (
                            <p className="flex items-center gap-1">
                              <CheckCircle2 className="h-4 w-4" /> Correct! Distance = miles per gallon × gallons
                            </p>
                          ) : (
                            <p>Incorrect. The correct answer is: Distance = miles per gallon × gallons</p>
                          )}
                        </div>
                      )}
                    </div>

                    <div>
                      <p className="mb-2 font-medium">
                        2. Why is it important to round when dealing with real-world problems?
                      </p>
                      <RadioGroup value={quizAnswers.q2} onValueChange={(value) => handleAnswerChange("q2", value)}>
                        <div className="flex items-start space-x-2">
                          <RadioGroupItem value="a" id="q2-a" className="mt-1" />
                          <Label htmlFor="q2-a" className="flex-1">
                            To make the numbers easier to work with
                          </Label>
                        </div>
                        <div className="flex items-start space-x-2">
                          <RadioGroupItem value="b" id="q2-b" className="mt-1" />
                          <Label htmlFor="q2-b" className="flex-1">
                            Because calculators can't handle decimal places
                          </Label>
                        </div>
                        <div className="flex items-start space-x-2">
                          <RadioGroupItem value="c" id="q2-c" className="mt-1" />
                          <Label htmlFor="q2-c" className="flex-1">
                            To reflect the appropriate level of precision for the context
                          </Label>
                        </div>
                        <div className="flex items-start space-x-2">
                          <RadioGroupItem value="d" id="q2-d" className="mt-1" />
                          <Label htmlFor="q2-d" className="flex-1">
                            Because real-world measurements are always whole numbers
                          </Label>
                        </div>
                      </RadioGroup>

                      {showResults && (
                        <div
                          className={`mt-2 rounded-md p-2 ${quizAnswers.q2 === "c" ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}
                        >
                          {quizAnswers.q2 === "c" ? (
                            <p className="flex items-center gap-1">
                              <CheckCircle2 className="h-4 w-4" /> Correct! We round to reflect the appropriate level of
                              precision for the context.
                            </p>
                          ) : (
                            <p>
                              Incorrect. The correct answer is: To reflect the appropriate level of precision for the
                              context
                            </p>
                          )}
                        </div>
                      )}
                    </div>

                    <div>
                      <p className="mb-2 font-medium">3. Write a short new situation where a rate per unit matters:</p>
                      <Textarea
                        value={quizAnswers.q3}
                        onChange={(e) => handleAnswerChange("q3", e.target.value)}
                        placeholder="Describe a real-world situation where calculating a rate is important..."
                        className="min-h-24"
                      />

                      {showResults && (
                        <div
                          className={`mt-2 rounded-md p-2 ${quizAnswers.q3.length > 20 ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}
                        >
                          {quizAnswers.q3.length > 20 ? (
                            <p className="flex items-center gap-1">
                              <CheckCircle2 className="h-4 w-4" /> Good example! Rates and proportions are used in many
                              real-world contexts.
                            </p>
                          ) : (
                            <p>
                              Please provide a more detailed example that shows how rates are used in a real-world
                              context.
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <Button onClick={checkAnswers} className="bg-amber-600 hover:bg-amber-700">
                  Check My Answers
                </Button>
              </div>

              {showResults && (
                <div className="mt-6">
                  <Card className="bg-gradient-to-r from-amber-100 to-amber-200 border-amber-300">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center">
                        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-amber-500 text-white">
                          <span className="text-3xl font-bold">{getScore()}/3</span>
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-amber-800">
                          {getScore() === 3 ? "Excellent!" : getScore() >= 2 ? "Good job!" : "Keep practicing!"}
                        </h3>
                        <p className="text-center text-amber-700">You've earned the "Fuel-Saving Math Pro" badge!</p>
                        <div className="mt-4">
                          <img
                            src="/math-achievement.png"
                            alt="Fuel-Saving Math Pro badge"
                            className="h-24 w-24"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>

            <div className="flex justify-between">
              <Link href="/transfer2">
                <Button variant="outline">
                  <ArrowLeft className="mr-1 h-4 w-4" /> Previous
                </Button>
              </Link>
              <Link href="/">
                <Button className="bg-emerald-600 hover:bg-emerald-700">Return to Home</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
