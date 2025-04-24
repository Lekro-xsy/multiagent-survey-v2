"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Transfer2Page() {
  const [rate, setRate] = useState("")
  const [totalWater, setTotalWater] = useState("")
  const [decision, setDecision] = useState("")
  const [explanation, setExplanation] = useState("")
  const [isCorrect, setIsCorrect] = useState(false)

  const checkAnswers = () => {
    const rateCorrect = Number.parseFloat(rate) === 0.25 || Number.parseFloat(rate) === 0.25
    const totalWaterCorrect = Math.abs(Number.parseFloat(totalWater) - 5) < 0.1
    const decisionCorrect = decision === "yes"
    const explanationCorrect =
      explanation.toLowerCase().includes("5") &&
      explanation.toLowerCase().includes("liters") &&
      explanation.toLowerCase().includes("20") &&
      explanation.toLowerCase().includes("miles") &&
      (explanation.toLowerCase().includes("enough") || explanation.toLowerCase().includes("sufficient"))

    setIsCorrect(rateCorrect && totalWaterCorrect && decisionCorrect && explanationCorrect)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex items-center justify-between">
            <Link href="/transfer1">
              <Button variant="ghost" className="flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" /> Back
              </Button>
            </Link>
            <div className="text-sm text-slate-500">Page 8 of 9</div>
          </div>

          <div className="mb-4 rounded-xl bg-amber-50 p-6 shadow-lg">
            <h1 className="mb-6 flex items-center gap-2 text-3xl font-bold text-slate-800">
              <Rocket className="h-8 w-8 text-amber-600" /> New Context: Same Math!
            </h1>

            <div className="mb-6 rounded-xl bg-white p-4 shadow-md">
              <h2 className="mb-4 text-xl font-semibold text-slate-700">Far Transfer — Different Context, Same Math</h2>

              <div className="mb-6 rounded-lg bg-blue-50 p-4">
                <h3 className="mb-2 text-lg font-medium text-blue-700">New Scenario:</h3>
                <p className="text-blue-600">
                  A hiker knows they consume <span className="font-semibold">2 liters</span> of water for every
                  <span className="font-semibold"> 8 miles</span> of hiking. They carry{" "}
                  <span className="font-semibold">5 liters</span> of water. Will they have enough water for a planned{" "}
                  <span className="font-semibold">20-mile</span> hike?
                </p>
              </div>

              <div className="space-y-6">
                <div className="rounded-lg bg-slate-50 p-4">
                  <h3 className="mb-3 text-lg font-medium text-slate-700">
                    Step 1: Calculate the rate (liters per mile)
                  </h3>
                  <div className="flex items-center gap-2">
                    <span>Liters per mile =</span>
                    <Input
                      type="text"
                      value={rate}
                      onChange={(e) => setRate(e.target.value)}
                      className="w-24 text-center"
                      placeholder="?"
                    />
                    <span>liters/mile</span>
                  </div>
                </div>

                <div className="rounded-lg bg-slate-50 p-4">
                  <h3 className="mb-3 text-lg font-medium text-slate-700">Step 2: Calculate the total water needed</h3>
                  <div className="flex items-center gap-2">
                    <span>Total water needed =</span>
                    <Input
                      type="text"
                      value={totalWater}
                      onChange={(e) => setTotalWater(e.target.value)}
                      className="w-24 text-center"
                      placeholder="?"
                    />
                    <span>liters</span>
                  </div>
                </div>

                <div className="rounded-lg bg-slate-50 p-4">
                  <h3 className="mb-3 text-lg font-medium text-slate-700">Step 3: Make your decision</h3>
                  <p className="mb-3 text-slate-600">Will the hiker have enough water for the 20-mile hike?</p>

                  <RadioGroup value={decision} onValueChange={setDecision} className="mb-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes-hiker" />
                      <Label htmlFor="yes-hiker">Yes, they have enough water</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no-hiker" />
                      <Label htmlFor="no-hiker">No, they need more water</Label>
                    </div>
                  </RadioGroup>

                  <div>
                    <Label htmlFor="explanation-hiker" className="mb-2 block">
                      Explain your reasoning:
                    </Label>
                    <Textarea
                      id="explanation-hiker"
                      value={explanation}
                      onChange={(e) => setExplanation(e.target.value)}
                      placeholder="Explain why the hiker does or doesn't have enough water..."
                      className="min-h-24"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <Button onClick={checkAnswers} className="bg-amber-600 hover:bg-amber-700">
                  Check My Work
                </Button>
              </div>

              {isCorrect && (
                <div className="mt-4 rounded-lg bg-emerald-100 p-4">
                  <h3 className="mb-2 text-lg font-medium text-emerald-700">Correct!</h3>
                  <div className="space-y-2 text-emerald-600">
                    <p>
                      <strong>Step 1:</strong> 2 liters ÷ 8 miles = 0.25 liters/mile
                    </p>
                    <p>
                      <strong>Step 2:</strong> 0.25 liters/mile × 20 miles = 5 liters
                    </p>
                    <p>
                      <strong>Step 3:</strong> Since the hiker needs exactly 5 liters and they have 5 liters, they have
                      just enough water for the hike.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-between">
              <Link href="/transfer1">
                <Button variant="outline">
                  <ArrowLeft className="mr-1 h-4 w-4" /> Previous
                </Button>
              </Link>
              <Link href="/summary">
                <Button className="bg-emerald-600 hover:bg-emerald-700" disabled={!isCorrect}>
                  Continue <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
