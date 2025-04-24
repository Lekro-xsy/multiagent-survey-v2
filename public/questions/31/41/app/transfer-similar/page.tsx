"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function TransferSimilarPage() {
  const [inequality, setInequality] = useState("")
  const [solution, setSolution] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [feedback, setFeedback] = useState<{
    inequality: boolean
    solution: boolean
  }>({
    inequality: false,
    solution: false,
  })

  const handleSubmit = () => {
    const inequalityCorrect =
      inequality.replace(/\s+/g, "").includes("60+1.5x≥180") || inequality.replace(/\s+/g, "").includes("12×5+1.5x≥180")

    const solutionCorrect =
      solution.includes("80") &&
      (solution.toLowerCase().includes("at least 80") ||
        solution.toLowerCase().includes("≥ 80") ||
        solution.toLowerCase().includes(">= 80"))

    setFeedback({
      inequality: inequalityCorrect,
      solution: solutionCorrect,
    })

    setSubmitted(true)
  }

  const allCorrect = feedback.inequality && feedback.solution

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
            <CardTitle className="text-2xl">🔄 Another Weekly Goal!</CardTitle>
            <CardDescription>Apply what you've learned to a similar problem</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="mx-auto max-w-2xl space-y-6">
              <div className="rounded-lg bg-blue-50 p-4">
                <h3 className="mb-2 text-center text-lg font-medium text-blue-700">Lana's Earnings Challenge</h3>
                <div className="space-y-4">
                  <p className="text-center">Lana earns $12 a day plus $1.50 per download she sells.</p>
                  <p className="text-center">She works 5 days a week.</p>
                  <p className="text-center">Her goal: at least $180.</p>
                  <p className="text-center font-medium">How many downloads must she sell?</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="inequality">Write the inequality:</Label>
                  <Input
                    id="inequality"
                    placeholder="Set up the inequality for Lana's earnings..."
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
                          ? "Correct inequality!"
                          : "The inequality should be 60 + 1.5x ≥ 180 (where 60 = 12 × 5)"}
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="solution">Solve and write your answer:</Label>
                  <Textarea
                    id="solution"
                    placeholder="Solve the inequality and explain your answer..."
                    className="min-h-[120px]"
                    value={solution}
                    onChange={(e) => setSolution(e.target.value)}
                    disabled={submitted}
                  />
                  {submitted && (
                    <div className="flex items-center gap-2 text-sm">
                      {feedback.solution ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <X className="h-4 w-4 text-red-500" />
                      )}
                      <span className={feedback.solution ? "text-green-600" : "text-red-600"}>
                        {feedback.solution
                          ? "Correct solution!"
                          : "The solution should be at least 80 downloads. (60 + 1.5x ≥ 180 → 1.5x ≥ 120 → x ≥ 80)"}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {!submitted && (
                <Button onClick={handleSubmit} className="w-full" disabled={!inequality || !solution}>
                  Submit Your Solution
                </Button>
              )}

              {submitted && allCorrect && (
                <div className="rounded-lg bg-green-50 p-4 text-center text-green-700">
                  <p className="text-lg font-medium">Excellent work!</p>
                  <p>You've correctly applied the same approach to a new problem.</p>
                  <p className="mt-2 font-medium">
                    Lana needs to sell at least 80 downloads per week to meet her goal.
                  </p>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/full-solution">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" /> Back
              </Button>
            </Link>
            <Link href="/transfer-different">
              <Button className="gap-2" disabled={!submitted}>
                Try a Different Context <ArrowRight className="h-4 w-4" />
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
