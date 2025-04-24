"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function Page9() {
  const [q1Answer, setQ1Answer] = useState<string | null>(null)
  const [q2Answer, setQ2Answer] = useState<string | null>(null)
  const [explanation, setExplanation] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    setSubmitted(true)
  }

  const score = [q1Answer === "b", q2Answer === "a", explanation.length > 10].filter(Boolean).length

  const getScoreMessage = () => {
    if (score === 3) return "Perfect! You're a unit rate master! 🎉"
    if (score === 2) return "Great job! You understand unit rates well!"
    return "Good effort! Keep practicing unit rates!"
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-6 text-center text-2xl font-bold text-green-600">📚 Great Work! Let&apos;s Review</h2>

      <div className="mb-8 max-w-2xl space-y-4 text-center">
        <p className="text-lg text-slate-700">Let&apos;s review what we&apos;ve learned about unit rates:</p>
        <div className="space-y-2 rounded-lg bg-green-50 p-4 text-left">
          <p className="flex items-center text-slate-700">
            <CheckCircle className="mr-2 h-5 w-5 text-green-500" />A unit rate tells us the amount per 1 unit.
          </p>
          <p className="flex items-center text-slate-700">
            <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
            To find a unit rate, divide the total amount by the total number of units.
          </p>
          <p className="flex items-center text-slate-700">
            <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
            Unit rates help us compare quantities and make predictions.
          </p>
        </div>
      </div>

      <div className="mb-8 w-full max-w-md space-y-6">
        <h3 className="text-center text-lg font-semibold text-green-600">Mini-Quiz</h3>

        <div className="space-y-4 rounded-lg border bg-white p-4 shadow-sm">
          <div className="space-y-2">
            <p className="font-medium text-slate-700">1. What is a unit rate?</p>
            <RadioGroup value={q1Answer || ""} onValueChange={setQ1Answer} disabled={submitted}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="a" id="q1-a" />
                <Label htmlFor="q1-a">The total amount divided by any number of units</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="b" id="q1-b" />
                <Label htmlFor="q1-b">The amount per 1 unit</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="c" id="q1-c" />
                <Label htmlFor="q1-c">The total number of units in a problem</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <p className="font-medium text-slate-700">2. How do you find a unit rate?</p>
            <RadioGroup value={q2Answer || ""} onValueChange={setQ2Answer} disabled={submitted}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="a" id="q2-a" />
                <Label htmlFor="q2-a">Divide the total amount by the total number of units</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="b" id="q2-b" />
                <Label htmlFor="q2-b">Multiply the total amount by the total number of units</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="c" id="q2-c" />
                <Label htmlFor="q2-c">Add the total amount to the total number of units</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <p className="font-medium text-slate-700">3. Explain in your own words how to find words per minute:</p>
            <Textarea
              placeholder="To find words per minute, I would..."
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
              rows={3}
              disabled={submitted}
            />
          </div>
        </div>

        <Button
          onClick={handleSubmit}
          disabled={!q1Answer || !q2Answer || !explanation || submitted}
          className="w-full bg-green-500 hover:bg-green-600"
        >
          Submit Quiz
        </Button>
      </div>

      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 rounded-lg bg-green-100 p-4 text-center"
        >
          <p className="text-xl font-bold text-green-700">{getScoreMessage()}</p>
          <p className="mt-2 text-green-600">You scored {score} out of 3</p>
          <div className="mt-4 rounded-lg bg-white p-3 text-left">
            <p className="font-medium text-slate-700">Correct answers:</p>
            <p className="mt-1 text-slate-600">1. The amount per 1 unit</p>
            <p className="text-slate-600">2. Divide the total amount by the total number of units</p>
          </div>
        </motion.div>
      )}

      <div className="mt-6 rounded-lg bg-blue-50 p-4 text-center text-sm text-blue-700">
        <p>
          <strong>Congratulations!</strong> You&apos;ve completed the unit rate lesson!
        </p>
      </div>
    </div>
  )
}
