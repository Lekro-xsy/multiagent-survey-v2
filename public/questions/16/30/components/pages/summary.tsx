"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle } from "lucide-react"

interface SummaryProps {
  onComplete: () => void
}

export function Summary({ onComplete }: SummaryProps) {
  const [quizAnswer, setQuizAnswer] = useState("")
  const [shortAnswer, setShortAnswer] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showBadge, setShowBadge] = useState(false)

  const handleSubmit = () => {
    setIsSubmitted(true)
    setShowBadge(true)
    onComplete()
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-orange-800">📚 Review and Reflect</h2>

      <Card className="bg-orange-50">
        <CardContent className="p-6">
          <h3 className="mb-4 text-xl font-semibold text-orange-800">Key Learnings</h3>
          <ul className="ml-6 list-disc space-y-2">
            <li>Understand unit rate (cost per pound, coverage per gallon)</li>
            <li>Set up proportional models to solve real-world problems</li>
            <li>Apply the same mathematical strategy across different contexts</li>
          </ul>
        </CardContent>
      </Card>

      <div className="space-y-6 rounded-lg border border-orange-200 bg-white p-6">
        <h3 className="text-xl font-semibold text-orange-800">Mini-Quiz</h3>

        <div className="space-y-4">
          <p className="font-medium">1. Which expression correctly models the steak problem?</p>

          <RadioGroup value={quizAnswer} onValueChange={setQuizAnswer}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="A" id="A" />
              <Label htmlFor="A">A. 4.5 × $8.50</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="B" id="B" />
              <Label htmlFor="B">B. (8.50 ÷ 2) × 4.5</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="C" id="C" />
              <Label htmlFor="C">C. (4.5 ÷ 2) × $8.50</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="D" id="D" />
              <Label htmlFor="D">D. $8.50 + (2.5 × $8.50)</Label>
            </div>
          </RadioGroup>

          {isSubmitted && (
            <div className="rounded-lg bg-green-100 p-3 text-green-800">
              <p className="font-medium">The correct answer is B. (8.50 ÷ 2) × 4.5</p>
              <p className="mt-1">
                We first find the unit rate (cost per pound) by dividing $8.50 by 2 pounds, then multiply by the new
                quantity (4.5 pounds).
              </p>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <p className="font-medium">2. Why do we need to find the unit price first in these problems?</p>

          <Textarea
            value={shortAnswer}
            onChange={(e) => setShortAnswer(e.target.value)}
            placeholder="Type your answer here..."
            rows={3}
          />

          {isSubmitted && (
            <div className="rounded-lg bg-green-100 p-3 text-green-800">
              <p className="font-medium">Sample answer:</p>
              <p className="mt-1">
                We need to find the unit price first because it allows us to work with a standard rate that can be
                applied to any quantity. The unit price (cost per pound) is the constant of proportionality in the
                relationship, which makes it possible to calculate the cost for any amount of the item.
              </p>
            </div>
          )}
        </div>

        <div className="mt-6 flex justify-center">
          <Button onClick={handleSubmit} className="bg-orange-600 hover:bg-orange-700" disabled={isSubmitted}>
            Submit Answers
          </Button>
        </div>

        {showBadge && (
          <div className="mt-8 flex flex-col items-center justify-center">
            <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-red-500 text-white">
              <CheckCircle className="h-16 w-16" />
            </div>
            <h3 className="text-xl font-bold text-orange-800">Proportional Reasoning Pro</h3>
            <p className="text-center text-gray-600">
              Congratulations! You've mastered proportional reasoning and can apply it to real-world problems.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
