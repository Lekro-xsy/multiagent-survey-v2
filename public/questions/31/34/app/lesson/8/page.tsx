"use client"

import { useState } from "react"
import { LessonLayout } from "@/components/lesson-layout"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, XCircle } from "lucide-react"

export default function LessonEightPage() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [inequalityInput, setInequalityInput] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [feedback, setFeedback] = useState<{ correct: boolean; message: string } | null>(null)

  const handleSubmit = () => {
    setIsSubmitted(true)

    if (selectedOption === "yes") {
      // Check if the inequality is correct
      const normalizedInput = inequalityInput.replace(/\s+/g, "").toLowerCase()
      if (
        normalizedInput === "b>=20" ||
        normalizedInput === "b≥20" ||
        normalizedInput === "books>=20" ||
        normalizedInput === "b>19" ||
        normalizedInput === "books>19"
      ) {
        setFeedback({
          correct: true,
          message:
            "Correct! 'At least 20 books' means the number of books must be greater than or equal to 20, which is represented by b ≥ 20.",
        })
      } else {
        setFeedback({
          correct: false,
          message:
            "Your inequality isn't quite right. 'At least 20 books' means the number of books must be greater than or equal to 20, which is represented by b ≥ 20.",
        })
      }
    } else {
      setFeedback({
        correct: false,
        message:
          "Not quite. 'At least 20 books' describes a range of possible values (20 or more books), so it should be modeled with an inequality.",
      })
    }
  }

  return (
    <LessonLayout currentPage={8} totalPages={9}>
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">🚀 A New Situation, Same Idea</h1>
          <p className="text-muted-foreground">Let's apply our knowledge to a different context</p>
        </div>

        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Scenario:</h2>
                <p className="text-lg">
                  "You must read <span className="font-bold text-primary">at least 20 books</span> to earn a reading
                  badge."
                </p>
              </div>

              <div className="rounded-md bg-amber-50 p-4 dark:bg-amber-950">
                <p className="text-sm">
                  <span className="font-semibold">Key Shift:</span> Notice the new wording "at least" — but we're still
                  dealing with inequality thinking.
                </p>
              </div>

              <div className="space-y-4">
                <p className="font-medium">Should this situation be modeled with an inequality?</p>
                <RadioGroup value={selectedOption || ""} onValueChange={setSelectedOption} disabled={isSubmitted}>
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes" className="cursor-pointer">
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no" className="cursor-pointer">
                      No
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {selectedOption === "yes" && (
                <div className="space-y-2">
                  <Label htmlFor="inequality">Write the corresponding inequality:</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id="inequality"
                      placeholder="e.g., b ≥ 20"
                      value={inequalityInput}
                      onChange={(e) => setInequalityInput(e.target.value)}
                      disabled={isSubmitted}
                    />
                    <div className="text-sm text-muted-foreground">(Use b for books)</div>
                  </div>
                </div>
              )}

              <Button
                onClick={handleSubmit}
                disabled={!selectedOption || (selectedOption === "yes" && !inequalityInput) || isSubmitted}
              >
                Submit Answer
              </Button>

              {isSubmitted && feedback && (
                <div
                  className={`mt-4 flex items-start space-x-2 rounded-md p-4 ${
                    feedback.correct ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
                  } dark:${feedback.correct ? "bg-green-950 text-green-300" : "bg-red-950 text-red-300"}`}
                >
                  {feedback.correct ? (
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                  ) : (
                    <XCircle className="h-5 w-5 shrink-0" />
                  )}
                  <p>{feedback.message}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {isSubmitted && feedback?.correct && (
          <div className="rounded-lg bg-muted p-6">
            <h2 className="mb-4 text-xl font-semibold">Explanation</h2>
            <p className="mb-4">
              The phrase "at least 20 books" means you need to read 20 books or more to earn the badge. This creates a
              range of possible values (20, 21, 22, etc.), not a single exact value.
            </p>
            <div className="relative mb-8 mt-6 h-8">
              {/* Number line */}
              <div className="absolute left-0 right-0 top-4 h-0.5 bg-gray-300"></div>

              {/* Tick marks */}
              {Array.from({ length: 6 }, (_, i) => (
                <div key={i} className="absolute top-2 h-4 w-0.5 bg-gray-300" style={{ left: `${(i / 5) * 100}%` }}>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs">{i * 5 + 15}</div>
                </div>
              ))}

              {/* Highlighted area */}
              <div
                className="absolute top-4 h-0.5 bg-primary"
                style={{
                  left: `${((20 - 15) / 25) * 100}%`,
                  right: "0",
                }}
              ></div>

              {/* Marker */}
              <div className="absolute top-2 h-4 w-0.5 bg-primary" style={{ left: `${((20 - 15) / 25) * 100}%` }}>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 rounded-full bg-primary px-2 py-1 text-xs text-white">
                  20
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-primary">
                  b ≥ 20
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              The inequality b ≥ 20 represents all possible numbers of books that would earn the reading badge.
            </p>
            <div className="mt-6 rounded-md bg-amber-50 p-4 dark:bg-amber-950">
              <p className="text-sm">
                <span className="font-semibold">Important Note:</span> "At least" means "greater than or equal to" (≥),
                which includes the boundary value. This is different from "more than," which means "greater than" (>)
                and does not include the boundary value.
              </p>
            </div>
          </div>
        )}
      </div>
    </LessonLayout>
  )
}
