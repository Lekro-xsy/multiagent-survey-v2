"use client"

import { useState } from "react"
import Link from "next/link"
import PageLayout from "@/components/page-layout"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useProgress } from "@/components/progress-provider"

export default function SummaryPage() {
  const { updateProgress } = useProgress()
  const { toast } = useToast()

  const [q1Answer, setQ1Answer] = useState("")
  const [q2Answer, setQ2Answer] = useState("")
  const [explanation, setExplanation] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    const correctAnswers = q1Answer === "b" && q2Answer === "c"

    if (correctAnswers && explanation.length > 10) {
      toast({
        title: "Great job!",
        description: "You've earned the MPG Master badge! 🚗🏅",
      })
    } else {
      toast({
        title: "Almost there!",
        description: "Check your answers and make sure to explain your reasoning.",
        variant: "destructive",
      })
    }

    setSubmitted(true)
    updateProgress("summary", {
      q1Answer,
      q2Answer,
      explanation,
      correct: correctAnswers && explanation.length > 10,
    })
  }

  return (
    <PageLayout title="📚 Great Job! Let's Reflect.">
      <div className="flex flex-col space-y-8">
        <div className="text-center">
          <p className="text-lg">Let's review what we've learned about unit rates and test your understanding.</p>
        </div>

        <div className="rounded-lg bg-gray-100 p-6">
          <h3 className="mb-4 text-center text-xl font-semibold">Key Reflections</h3>

          <div className="mb-6 space-y-4">
            <div className="rounded-lg bg-white p-3">
              <p className="font-medium">Understanding unit rates (per gallon, per liter, etc.)</p>
              <p className="text-sm text-gray-600">
                A unit rate tells us how much of one quantity corresponds to exactly one unit of another quantity.
              </p>
            </div>

            <div className="rounded-lg bg-white p-3">
              <p className="font-medium">Setting up correct division expressions</p>
              <p className="text-sm text-gray-600">
                To find a unit rate, divide the total amount by the number of units.
              </p>
            </div>

            <div className="rounded-lg bg-white p-3">
              <p className="font-medium">Rounding results properly</p>
              <p className="text-sm text-gray-600">
                Make sure to round your answer to an appropriate number of decimal places.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-gray-100 p-6">
          <h3 className="mb-4 text-center text-xl font-semibold">Mini-Quiz</h3>

          <div className="mb-6">
            <p className="mb-2 font-medium">
              1. A car traveled 195 miles on 7.5 gallons of gas. What is its fuel efficiency?
            </p>
            <RadioGroup value={q1Answer} onValueChange={setQ1Answer}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="a" id="q1-a" />
                <Label htmlFor="q1-a">A. 26.0 miles per gallon</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="b" id="q1-b" />
                <Label htmlFor="q1-b">B. 26.0 miles per gallon</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="c" id="q1-c" />
                <Label htmlFor="q1-c">C. 0.038 gallons per mile</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="mb-6">
            <p className="mb-2 font-medium">
              2. Which expression correctly calculates the number of pages printed per milliliter of ink if 240 pages
              were printed using 80 milliliters?
            </p>
            <RadioGroup value={q2Answer} onValueChange={setQ2Answer}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="a" id="q2-a" />
                <Label htmlFor="q2-a">A. 80 ÷ 240</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="b" id="q2-b" />
                <Label htmlFor="q2-b">B. 240 × 80</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="c" id="q2-c" />
                <Label htmlFor="q2-c">C. 240 ÷ 80</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="mb-6">
            <p className="mb-2 font-medium">
              3. Why do we divide total amount by total units to find the "per one" rate?
            </p>
            <Textarea
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
              placeholder="Type your explanation here..."
              className="min-h-24"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <Button onClick={handleSubmit} size="lg" disabled={submitted}>
            Submit Quiz
          </Button>
        </div>

        {submitted && (
          <div className="rounded-lg bg-green-100 p-6 text-center">
            <h3 className="mb-2 text-xl font-bold">Congratulations! 🎉</h3>
            <p className="mb-4 text-lg">You've completed the Unit Rates Learning Experience!</p>
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-yellow-400 p-4">
                <span className="text-4xl">🚗🏅</span>
              </div>
            </div>
            <p className="font-medium">MPG Master Badge Earned!</p>
            <div className="mt-6">
              <Link href="/">
                <Button variant="outline">Return to Home</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  )
}
