"use client"

import { useState } from "react"
import { LessonLayout } from "@/components/lesson-layout"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, XCircle } from "lucide-react"

export default function LessonSevenPage() {
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
        normalizedInput === "t<2" ||
        normalizedInput === "t<2.0" ||
        normalizedInput === "t<2hours" ||
        normalizedInput === "time<2" ||
        normalizedInput === "t<2h"
      ) {
        setFeedback({
          correct: true,
          message: "Correct! 'Under 2 hours' means the time must be less than 2 hours, which is represented by t < 2.",
        })
      } else {
        setFeedback({
          correct: false,
          message:
            "Your inequality isn't quite right. 'Under 2 hours' means the time must be less than 2 hours, which is represented by t < 2.",
        })
      }
    } else {
      setFeedback({
        correct: false,
        message:
          "Not quite. 'Under 2 hours' describes a range of possible times (any time less than 2 hours), so it should be modeled with an inequality.",
      })
    }
  }

  return (
    <LessonLayout currentPage={7} totalPages={9}>
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">🔄 Practice with Another Situation</h1>
          <p className="text-muted-foreground">Let's apply what we've learned to a new scenario</p>
        </div>

        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Scenario:</h2>
                <p className="text-lg">
                  "You must finish a race in <span className="font-bold text-primary">under 2 hours</span> to qualify."
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
                      placeholder="e.g., t < 2"
                      value={inequalityInput}
                      onChange={(e) => setInequalityInput(e.target.value)}
                      disabled={isSubmitted}
                    />
                    <div className="text-sm text-muted-foreground">(Use t for time)</div>
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
              The phrase "under 2 hours" indicates that any time less than 2 hours would qualify. This creates a range
              of possible values (any time from 0 to 1:59:59), not a single exact value.
            </p>
            <div className="relative mb-8 mt-6 h-8">
              {/* Number line */}
              <div className="absolute left-0 right-0 top-4 h-0.5 bg-gray-300"></div>

              {/* Tick marks */}
              {Array.from({ length: 5 }, (_, i) => (
                <div key={i} className="absolute top-2 h-4 w-0.5 bg-gray-300" style={{ left: `${(i / 4) * 100}%` }}>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs">{i}</div>
                </div>
              ))}

              {/* Highlighted area */}
              <div
                className="absolute top-4 h-0.5 bg-primary"
                style={{
                  left: "0",
                  right: `${100 - (2 / 4) * 100}%`,
                }}
              ></div>

              {/* Marker */}
              <div className="absolute top-2 h-4 w-0.5 bg-primary" style={{ left: `${(2 / 4) * 100}%` }}>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 rounded-full bg-primary px-2 py-1 text-xs text-white">
                  2
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-primary">
                  t &lt; 2
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              The inequality t &lt; 2 represents all possible finishing times that would qualify for the race.
            </p>
          </div>
        )}
      </div>
    </LessonLayout>
  )
}
