"use client"

import { useState } from "react"
import { LessonLayout } from "@/components/lesson-layout"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, XCircle, Trophy } from "lucide-react"

export default function LessonNinePage() {
  const [mcAnswer, setMcAnswer] = useState<string | null>(null)
  const [tfAnswer, setTfAnswer] = useState<string | null>(null)
  const [inequalityInput, setInequalityInput] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const [feedback, setFeedback] = useState<{ [key: string]: { correct: boolean; message: string } }>({})

  const handleSubmit = () => {
    let newScore = 0
    const newFeedback: { [key: string]: { correct: boolean; message: string } } = {}

    // Check multiple choice
    if (mcAnswer === "more-than") {
      newScore += 1
      newFeedback.mc = {
        correct: true,
        message: "Correct! 'More than' always signals an inequality.",
      }
    } else {
      newFeedback.mc = {
        correct: false,
        message: "Not quite. 'More than' always signals an inequality because it describes a range of values.",
      }
    }

    // Check true/false
    if (tfAnswer === "false") {
      newScore += 1
      newFeedback.tf = {
        correct: true,
        message: "Correct! 'Exactly' leads to an equation, not an inequality.",
      }
    } else {
      newFeedback.tf = {
        correct: false,
        message: "Not quite. 'Exactly' specifies a precise value, so it leads to an equation, not an inequality.",
      }
    }

    // Check inequality
    const normalizedInput = inequalityInput.replace(/\s+/g, "").toLowerCase()
    if (
      normalizedInput === "s<60" ||
      normalizedInput === "speed<60" ||
      normalizedInput === "v<60" ||
      normalizedInput === "velocity<60"
    ) {
      newScore += 1
      newFeedback.inequality = {
        correct: true,
        message: "Correct! 'Speed must be less than 60 mph' is represented by s < 60.",
      }
    } else {
      newFeedback.inequality = {
        correct: false,
        message: "Not quite. 'Speed must be less than 60 mph' should be represented by s < 60.",
      }
    }

    setScore(newScore)
    setFeedback(newFeedback)
    setIsSubmitted(true)
  }

  return (
    <LessonLayout currentPage={9} totalPages={9}>
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">📚 Review and Master!</h1>
          <p className="text-muted-foreground">Let's summarize what we've learned about inequalities</p>
        </div>

        <div className="rounded-lg bg-muted p-6">
          <h2 className="mb-4 text-xl font-semibold">Key Takeaways</h2>
          <ul className="mb-6 space-y-2">
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span>
                Keywords suggesting inequalities: over, under, more than, less than, at least, at most, no more than
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span>Inequalities represent ranges of solutions, not single points</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span>
                Different inequality symbols: greater than (&gt;), less than (&lt;), greater than or equal to (≥), less
                than or equal to (≤)
              </span>
            </li>
          </ul>
        </div>

        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Mini-Quiz</h2>
              <p className="text-sm text-muted-foreground">Test your understanding with these quick questions:</p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="font-medium">1. Which keyword always signals an inequality?</p>
                  <RadioGroup value={mcAnswer || ""} onValueChange={setMcAnswer} disabled={isSubmitted}>
                    <div className="flex items-start space-x-2">
                      <RadioGroupItem value="equals" id="equals" />
                      <Label htmlFor="equals" className="cursor-pointer">
                        Equals
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <RadioGroupItem value="exactly" id="exactly" />
                      <Label htmlFor="exactly" className="cursor-pointer">
                        Exactly
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <RadioGroupItem value="more-than" id="more-than" />
                      <Label htmlFor="more-than" className="cursor-pointer">
                        More than
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <RadioGroupItem value="is" id="is" />
                      <Label htmlFor="is" className="cursor-pointer">
                        Is
                      </Label>
                    </div>
                  </RadioGroup>
                  {isSubmitted && feedback.mc && (
                    <div
                      className={`mt-2 flex items-start space-x-2 rounded-md p-2 text-sm ${
                        feedback.mc.correct ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
                      } dark:${feedback.mc.correct ? "bg-green-950 text-green-300" : "bg-red-950 text-red-300"}`}
                    >
                      {feedback.mc.correct ? (
                        <CheckCircle2 className="h-4 w-4 shrink-0" />
                      ) : (
                        <XCircle className="h-4 w-4 shrink-0" />
                      )}
                      <p>{feedback.mc.message}</p>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <p className="font-medium">2. True or False: "Exactly" leads to an inequality.</p>
                  <RadioGroup value={tfAnswer || ""} onValueChange={setTfAnswer} disabled={isSubmitted}>
                    <div className="flex items-start space-x-2">
                      <RadioGroupItem value="true" id="tf-true" />
                      <Label htmlFor="tf-true" className="cursor-pointer">
                        True
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <RadioGroupItem value="false" id="tf-false" />
                      <Label htmlFor="tf-false" className="cursor-pointer">
                        False
                      </Label>
                    </div>
                  </RadioGroup>
                  {isSubmitted && feedback.tf && (
                    <div
                      className={`mt-2 flex items-start space-x-2 rounded-md p-2 text-sm ${
                        feedback.tf.correct ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
                      } dark:${feedback.tf.correct ? "bg-green-950 text-green-300" : "bg-red-950 text-red-300"}`}
                    >
                      {feedback.tf.correct ? (
                        <CheckCircle2 className="h-4 w-4 shrink-0" />
                      ) : (
                        <XCircle className="h-4 w-4 shrink-0" />
                      )}
                      <p>{feedback.tf.message}</p>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <p className="font-medium">3. Write an inequality for "speed must be less than 60 mph."</p>
                  <Input
                    placeholder="e.g., s < 60"
                    value={inequalityInput}
                    onChange={(e) => setInequalityInput(e.target.value)}
                    disabled={isSubmitted}
                  />
                  {isSubmitted && feedback.inequality && (
                    <div
                      className={`mt-2 flex items-start space-x-2 rounded-md p-2 text-sm ${
                        feedback.inequality.correct ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
                      } dark:${
                        feedback.inequality.correct ? "bg-green-950 text-green-300" : "bg-red-950 text-red-300"
                      }`}
                    >
                      {feedback.inequality.correct ? (
                        <CheckCircle2 className="h-4 w-4 shrink-0" />
                      ) : (
                        <XCircle className="h-4 w-4 shrink-0" />
                      )}
                      <p>{feedback.inequality.message}</p>
                    </div>
                  )}
                </div>
              </div>

              <Button onClick={handleSubmit} disabled={!mcAnswer || !tfAnswer || !inequalityInput || isSubmitted}>
                Submit Answers
              </Button>
            </div>
          </CardContent>
        </Card>

        {isSubmitted && (
          <div className="rounded-lg border bg-card p-6 shadow-sm text-center">
            <div className="mb-4 flex justify-center">
              <Trophy className="h-12 w-12 text-yellow-500" />
            </div>
            <h2 className="mb-2 text-xl font-semibold">Congratulations!</h2>
            <p className="mb-4">You've earned a "Comparison Master" badge with a score of {score}/3!</p>
            <p className="text-sm text-muted-foreground">
              You now understand how to recognize and solve inequality problems using keywords like "over," "under,"
              "more than," and "less than."
            </p>
            <Button className="mt-6" onClick={() => (window.location.href = "/")}>
              Return to Home
            </Button>
          </div>
        )}
      </div>
    </LessonLayout>
  )
}
