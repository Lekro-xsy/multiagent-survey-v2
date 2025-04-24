"use client"

import { useState } from "react"
import { LessonLayout } from "@/components/lesson-layout"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function LessonFourPage() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [explanation, setExplanation] = useState("")
  const [feedback, setFeedback] = useState<{ visible: boolean; correct: boolean; message: string }>({
    visible: false,
    correct: false,
    message: "",
  })

  const handleSubmit = () => {
    if (selectedOption === "no") {
      setFeedback({
        visible: true,
        correct: true,
        message:
          "Correct! A single equation wouldn't make sense because 'more than 50 miles' represents a range of values (51, 52, 53, etc.), not a single value.",
      })
    } else {
      setFeedback({
        visible: true,
        correct: false,
        message:
          "Not quite. A single equation sets a value exactly equal to something. 'More than 50 miles' represents multiple possible values, so we need an inequality.",
      })
    }
  }

  return (
    <LessonLayout currentPage={4} totalPages={9}>
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">🧠 When Does It Become an Inequality?</h1>
          <p className="text-muted-foreground">Understanding when to use inequalities instead of equations</p>
        </div>

        <div className="rounded-lg bg-muted p-6">
          <h2 className="mb-4 text-xl font-semibold">Inequalities happen when:</h2>
          <ul className="mb-6 space-y-2">
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span>We have multiple possible solutions, not just one exact value</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span>There are open-ended comparisons (more than, less than, at least, at most)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span>We're describing a range or interval of values</span>
            </li>
          </ul>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-4">
                <h3 className="mb-2 font-semibold">Equation Example</h3>
                <p className="text-sm">
                  "The distance is <span className="font-bold">exactly 50 miles</span>."
                </p>
                <div className="mt-4 text-sm text-muted-foreground">
                  This is represented by: d = 50
                  <br />
                  There is only one possible value that makes this true.
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="mb-2 font-semibold">Inequality Example</h3>
                <p className="text-sm">
                  "The distance is <span className="font-bold">more than 50 miles</span>."
                </p>
                <div className="mt-4 text-sm text-muted-foreground">
                  This is represented by: d &gt; 50
                  <br />
                  There are infinitely many values that make this true (51, 52, 53, etc.).
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Mini Reflection</h2>
          <p className="mb-6">Would a single equation make sense for "more than 50 miles"? Why or why not?</p>

          <div className="space-y-6">
            <RadioGroup value={selectedOption || ""} onValueChange={setSelectedOption}>
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="yes" id="yes" />
                <Label htmlFor="yes" className="cursor-pointer">
                  Yes, a single equation would work
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no" className="cursor-pointer">
                  No, a single equation wouldn't work
                </Label>
              </div>
            </RadioGroup>

            <div className="space-y-2">
              <Label htmlFor="explanation">Explain your reasoning:</Label>
              <Textarea
                id="explanation"
                placeholder="Type your explanation here..."
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
                rows={3}
              />
            </div>

            <Button onClick={handleSubmit} disabled={!selectedOption}>
              Submit Answer
            </Button>

            {feedback.visible && (
              <div
                className={`mt-4 rounded-md p-4 ${
                  feedback.correct ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
                } dark:${feedback.correct ? "bg-green-950 text-green-300" : "bg-red-950 text-red-300"}`}
              >
                <p>{feedback.message}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </LessonLayout>
  )
}
