"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Trophy } from "lucide-react"

export function PageNine() {
  const [q1Answer, setQ1Answer] = useState<string | null>(null)
  const [q2Answer, setQ2Answer] = useState<string | null>(null)
  const [q3Answer, setQ3Answer] = useState("")
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [showBadge, setShowBadge] = useState(false)

  const handleSubmit = () => {
    setHasSubmitted(true)
    setTimeout(() => {
      setShowBadge(true)
    }, 1000)
  }

  const isComplete = q1Answer !== null && q2Answer !== null && q3Answer.length > 10

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-emerald-600">📚 Wrap Up and Reflect!</h1>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Key Reflections</h2>
        <div className="space-y-4">
          <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
            <h3 className="font-medium text-emerald-800 mb-2">What is proportional reasoning?</h3>
            <p className="text-emerald-700">
              Proportional reasoning involves understanding the relationship between quantities that scale together at a
              constant rate. When one quantity changes, the other changes by the same factor.
            </p>
          </div>

          <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
            <h3 className="font-medium text-emerald-800 mb-2">How to find and apply unit rates</h3>
            <p className="text-emerald-700">
              1. Find the unit rate by dividing the total amount by the total units (e.g., miles ÷ hours = miles per
              hour).
              <br />
              2. Multiply the unit rate by the new quantity to find the corresponding value.
            </p>
          </div>

          <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
            <h3 className="font-medium text-emerald-800 mb-2">Why proportionality matters</h3>
            <p className="text-emerald-700">
              Proportional relationships appear everywhere in real life - from cooking and shopping to travel and
              construction. Understanding these relationships helps us make predictions and solve practical problems.
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Mini-Quiz</h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-3">
              1. In a proportional relationship, if one quantity doubles, what happens to the other quantity?
            </h3>
            <RadioGroup value={q1Answer || ""} onValueChange={setQ1Answer}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="a" id="q1-a" />
                <Label htmlFor="q1-a">It also doubles</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="b" id="q1-b" />
                <Label htmlFor="q1-b">It stays the same</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="c" id="q1-c" />
                <Label htmlFor="q1-c">It is squared</Label>
              </div>
            </RadioGroup>

            {hasSubmitted && (
              <div className="mt-2 text-sm">
                {q1Answer === "a" ? (
                  <p className="text-green-600 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-1" /> Correct! In a proportional relationship, quantities scale
                    by the same factor.
                  </p>
                ) : (
                  <p className="text-red-600">
                    Not quite. In a proportional relationship, quantities scale by the same factor, so if one doubles,
                    the other also doubles.
                  </p>
                )}
              </div>
            )}
          </div>

          <div>
            <h3 className="font-medium mb-3">2. Which of these is an example of a proportional relationship?</h3>
            <RadioGroup value={q2Answer || ""} onValueChange={setQ2Answer}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="a" id="q2-a" />
                <Label htmlFor="q2-a">The cost of a subscription that charges $10 per month plus a $15 setup fee</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="b" id="q2-b" />
                <Label htmlFor="q2-b">The distance traveled by a car moving at a constant speed</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="c" id="q2-c" />
                <Label htmlFor="q2-c">The height of a child as they age from 2 to 18 years old</Label>
              </div>
            </RadioGroup>

            {hasSubmitted && (
              <div className="mt-2 text-sm">
                {q2Answer === "b" ? (
                  <p className="text-green-600 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-1" /> Correct! A car moving at constant speed creates a
                    proportional relationship between time and distance.
                  </p>
                ) : (
                  <p className="text-red-600">
                    Not quite. A car moving at constant speed creates a proportional relationship between time and
                    distance.
                  </p>
                )}
              </div>
            )}
          </div>

          <div>
            <h3 className="font-medium mb-3">
              3. Explain why you divide first before multiplying in problems like these.
            </h3>
            <Textarea
              value={q3Answer}
              onChange={(e) => setQ3Answer(e.target.value)}
              placeholder="Type your explanation here..."
              className="min-h-[100px]"
            />

            {hasSubmitted && (
              <div className="mt-2 text-sm">
                <p className="text-green-600">
                  Thank you for your reflection! A good explanation would mention that we divide first to find the unit
                  rate (the constant of proportionality), which tells us how much one quantity changes for each unit of
                  the other quantity.
                </p>
              </div>
            )}
          </div>
        </div>
      </Card>

      {!hasSubmitted ? (
        <div className="flex justify-end">
          <Button onClick={handleSubmit} className="bg-emerald-600 hover:bg-emerald-700" disabled={!isComplete}>
            Submit Quiz
          </Button>
        </div>
      ) : showBadge ? (
        <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg border border-emerald-200">
          <div className="text-5xl mb-4">
            <Trophy className="h-16 w-16 text-yellow-500" />
          </div>
          <h3 className="text-2xl font-bold text-emerald-700 mb-2">Congratulations!</h3>
          <p className="text-lg text-emerald-600 text-center">You've earned the Proportional Reasoning Master badge!</p>
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="animate-pulse text-emerald-600">Calculating your results...</div>
        </div>
      )}
    </div>
  )
}
