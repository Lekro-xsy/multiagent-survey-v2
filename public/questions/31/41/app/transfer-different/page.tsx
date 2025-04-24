"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function TransferDifferentPage() {
  const [inequality, setInequality] = useState("")
  const [solution, setSolution] = useState("")
  const [interpretation, setInterpretation] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [feedback, setFeedback] = useState<{
    inequality: boolean
    solution: boolean
    interpretation: boolean
  }>({
    inequality: false,
    solution: false,
    interpretation: false,
  })

  const handleSubmit = () => {
    const inequalityCorrect =
      inequality.replace(/\s+/g, "").includes("100+20x≥300") || inequality.replace(/\s+/g, "").includes("100+20x>300")

    const solutionCorrect =
      solution.includes("10") &&
      (solution.toLowerCase().includes("at least 10") ||
        solution.toLowerCase().includes("≥ 10") ||
        solution.toLowerCase().includes(">= 10"))

    const interpretationCorrect =
      interpretation.toLowerCase().includes("revision") && interpretation.toLowerCase().includes("10")

    setFeedback({
      inequality: inequalityCorrect,
      solution: solutionCorrect,
      interpretation: interpretationCorrect,
    })

    setSubmitted(true)
  }

  const allCorrect = feedback.inequality && feedback.solution && feedback.interpretation

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
            <CardTitle className="text-2xl">🚀 Different Scene, Same Strategy!</CardTitle>
            <CardDescription>Apply the same inequality model to a completely different context</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="mx-auto max-w-2xl space-y-6">
              <div className="rounded-lg bg-blue-50 p-4">
                <h3 className="mb-2 text-center text-lg font-medium text-blue-700">Freelance Designer Challenge</h3>
                <div className="space-y-4">
                  <p className="text-center">
                    A freelance designer earns $100 base per project plus $20 for each extra revision.
                  </p>
                  <p className="text-center">They need to make at least $300.</p>
                  <p className="text-center font-medium">How many revisions must they complete?</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="inequality">Write the inequality:</Label>
                  <Input
                    id="inequality"
                    placeholder="Set up the inequality for the designer's earnings..."
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
                        {feedback.inequality ? "Correct inequality!" : "The inequality should be 100 + 20x ≥ 300"}
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="solution">Solve the inequality:</Label>
                  <Input
                    id="solution"
                    placeholder="How many revisions are needed?"
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
                          : "The solution should be at least 10 revisions. (100 + 20x ≥ 300 → 20x ≥ 200 → x ≥ 10)"}
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interpretation">Interpret your answer:</Label>
                  <Textarea
                    id="interpretation"
                    placeholder="What does your answer mean in this context?"
                    className="min-h-[80px]"
                    value={interpretation}
                    onChange={(e) => setInterpretation(e.target.value)}
                    disabled={submitted}
                  />
                  {submitted && (
                    <div className="flex items-center gap-2 text-sm">
                      {feedback.interpretation ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <X className="h-4 w-4 text-red-500" />
                      )}
                      <span className={feedback.interpretation ? "text-green-600" : "text-red-600"}>
                        {feedback.interpretation
                          ? "Good interpretation!"
                          : "Your interpretation should explain that the designer needs to complete at least 10 revisions to earn $300 or more."}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {!submitted && (
                <Button
                  onClick={handleSubmit}
                  className="w-full"
                  disabled={!inequality || !solution || !interpretation}
                >
                  Submit Your Solution
                </Button>
              )}

              {submitted && allCorrect && (
                <div className="rounded-lg bg-green-50 p-4 text-center text-green-700">
                  <p className="text-lg font-medium">Excellent work!</p>
                  <p>You've successfully applied the same mathematical model to a completely different context.</p>
                  <p className="mt-2 font-medium">
                    The designer needs to complete at least 10 revisions to earn $300 or more.
                  </p>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/transfer-similar">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" /> Back
              </Button>
            </Link>
            <Link href="/summary">
              <Button className="gap-2" disabled={!submitted}>
                Continue to Summary <ArrowRight className="h-4 w-4" />
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
