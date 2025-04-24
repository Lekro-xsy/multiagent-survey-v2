"use client"

import { useState } from "react"
import { LessonLayout } from "@/components/lesson-layout"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function LessonFivePage() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [explanation, setExplanation] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = () => {
    setIsSubmitted(true)
  }

  return (
    <LessonLayout currentPage={5} totalPages={9}>
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">✍️ What's Your Answer?</h1>
          <p className="text-muted-foreground">Time to apply what you've learned</p>
        </div>

        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">True or False:</h2>
                <p className="text-lg">
                  "Problem situations involving words such as over, under, less than, and more than may be solved using
                  inequalities."
                </p>
              </div>

              <RadioGroup value={selectedOption || ""} onValueChange={setSelectedOption}>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="true" id="true" disabled={isSubmitted} />
                  <Label htmlFor="true" className="cursor-pointer">
                    True
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="false" id="false" disabled={isSubmitted} />
                  <Label htmlFor="false" className="cursor-pointer">
                    False
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
                  rows={4}
                  disabled={isSubmitted}
                />
              </div>

              <Button onClick={handleSubmit} disabled={!selectedOption || isSubmitted}>
                Submit Answer
              </Button>
            </div>
          </CardContent>
        </Card>

        {isSubmitted && (
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">Your Response</h2>
            <div className="mb-4 rounded-md bg-muted p-4">
              <p>
                <span className="font-semibold">Your answer:</span> {selectedOption === "true" ? "True" : "False"}
              </p>
              <p className="mt-2">
                <span className="font-semibold">Your explanation:</span> {explanation || "(No explanation provided)"}
              </p>
            </div>

            <p className="text-sm text-muted-foreground">
              Continue to the next page to see the correct answer and explanation.
            </p>
          </div>
        )}
      </div>
    </LessonLayout>
  )
}
