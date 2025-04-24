"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function TestSolutionPage() {
  const [substitution, setSubstitution] = useState("")
  const [calculation, setCalculation] = useState("")
  const [conclusion, setConclusion] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [feedback, setFeedback] = useState<{
    substitution: boolean
    calculation: boolean
    conclusion: boolean
  }>({
    substitution: false,
    calculation: false,
    conclusion: false,
  })

  const handleSubmit = () => {
    const substitutionCorrect =
      substitution.replace(/\s+/g, "").includes("50+2(30)") || substitution.replace(/\s+/g, "").includes("50+2×30")

    const calculationCorrect =
      calculation.includes("110") && (calculation.includes("50 + 60") || calculation.includes("60 + 50"))

    const conclusionCorrect =
      conclusion.toLowerCase().includes("not enough") ||
      conclusion.toLowerCase().includes("less than") ||
      (conclusion.toLowerCase().includes("no") && conclusion.toLowerCase().includes("150"))

    setFeedback({
      substitution: substitutionCorrect,
      calculation: calculationCorrect,
      conclusion: conclusionCorrect,
    })

    setSubmitted(true)
  }

  const allCorrect = feedback.substitution && feedback.calculation && feedback.conclusion

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
            <CardTitle className="text-2xl">🔍 Check if 30 CDs Are Enough!</CardTitle>
            <CardDescription>Test if selling 30 CDs per week is enough to meet Tony's goal</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="mx-auto max-w-2xl space-y-6">
              <div className="rounded-lg bg-blue-50 p-4">
                <h3 className="mb-2 text-center text-lg font-medium text-blue-700">Test the Solution</h3>
                <p className="text-center">Let's substitute x = 30 into our inequality: 50 + 2x ≥ 150</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="substitution">Write the substitution:</Label>
                  <Input
                    id="substitution"
                    placeholder="e.g., 50 + 2(30) ≥ 150"
                    value={substitution}
                    onChange={(e) => setSubstitution(e.target.value)}
                    disabled={submitted}
                  />
                  {submitted && (
                    <div className="flex items-center gap-2 text-sm">
                      {feedback.substitution ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <X className="h-4 w-4 text-red-500" />
                      )}
                      <span className={feedback.substitution ? "text-green-600" : "text-red-600"}>
                        {feedback.substitution
                          ? "Correct substitution!"
                          : "The substitution should be 50 + 2(30) ≥ 150"}
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="calculation">Calculate the result:</Label>
                  <Input
                    id="calculation"
                    placeholder="e.g., 50 + 60 = 110"
                    value={calculation}
                    onChange={(e) => setCalculation(e.target.value)}
                    disabled={submitted}
                  />
                  {submitted && (
                    <div className="flex items-center gap-2 text-sm">
                      {feedback.calculation ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <X className="h-4 w-4 text-red-500" />
                      )}
                      <span className={feedback.calculation ? "text-green-600" : "text-red-600"}>
                        {feedback.calculation
                          ? "Correct calculation!"
                          : "The calculation should be 50 + 2(30) = 50 + 60 = 110"}
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="conclusion">What's your conclusion? Is 30 CDs enough?</Label>
                  <Textarea
                    id="conclusion"
                    placeholder="Write your conclusion..."
                    className="min-h-[80px]"
                    value={conclusion}
                    onChange={(e) => setConclusion(e.target.value)}
                    disabled={submitted}
                  />
                  {submitted && (
                    <div className="flex items-center gap-2 text-sm">
                      {feedback.conclusion ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <X className="h-4 w-4 text-red-500" />
                      )}
                      <span className={feedback.conclusion ? "text-green-600" : "text-red-600"}>
                        {feedback.conclusion
                          ? "Good conclusion!"
                          : "Your conclusion should state that 30 CDs is not enough because $110 is less than $150."}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {!submitted && (
                <Button
                  onClick={handleSubmit}
                  className="w-full"
                  disabled={!substitution || !calculation || !conclusion}
                >
                  Submit Your Answer
                </Button>
              )}

              {submitted && allCorrect && (
                <div className="rounded-lg bg-green-50 p-4 text-center text-green-700">
                  <p className="text-lg font-medium">Great job testing the solution!</p>
                  <p>You've correctly determined that selling 30 CDs is not enough.</p>
                  <p className="mt-2">Tony would earn $110, which is less than his goal of $150.</p>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/solve-inequality">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" /> Back
              </Button>
            </Link>
            <Link href="/full-solution">
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
