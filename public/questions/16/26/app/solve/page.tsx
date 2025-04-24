"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, PenTool } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function SolvePage() {
  const [mpg, setMpg] = useState("")
  const [expression, setExpression] = useState("")
  const [distance, setDistance] = useState("")
  const [decision, setDecision] = useState("")
  const [explanation, setExplanation] = useState("")
  const [isCorrect, setIsCorrect] = useState(false)

  const checkAnswers = () => {
    const mpgCorrect = Number.parseFloat(mpg) === 19 || Number.parseFloat(mpg) === 19.0
    const expressionCorrect =
      expression.replace(/\s+/g, "").toLowerCase().includes("distance=19") && expression.includes("g")
    const distanceCorrect = Math.abs(Number.parseFloat(distance) - 342) < 1
    const decisionCorrect = decision === "no"
    const explanationCorrect =
      explanation.toLowerCase().includes("342") &&
      explanation.toLowerCase().includes("350") &&
      (explanation.toLowerCase().includes("not enough") || explanation.toLowerCase().includes("won't make it"))

    setIsCorrect(mpgCorrect && expressionCorrect && distanceCorrect && decisionCorrect && explanationCorrect)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex items-center justify-between">
            <Link href="/model">
              <Button variant="ghost" className="flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" /> Back
              </Button>
            </Link>
            <div className="text-sm text-slate-500">Page 5 of 9</div>
          </div>

          <div className="mb-4 rounded-xl bg-amber-50 p-6 shadow-lg">
            <h1 className="mb-6 flex items-center gap-2 text-3xl font-bold text-slate-800">
              <PenTool className="h-8 w-8 text-amber-600" /> Time to Solve!
            </h1>

            <div className="mb-6 rounded-xl bg-white p-4 shadow-md">
              <h2 className="mb-4 text-xl font-semibold text-slate-700">Student Solves and Explains</h2>

              <div className="space-y-6">
                <div className="rounded-lg bg-slate-50 p-4">
                  <h3 className="mb-3 text-lg font-medium text-slate-700">Task 1: Calculate miles per gallon</h3>
                  <div className="flex items-center gap-2">
                    <span>Miles per gallon =</span>
                    <Input
                      type="text"
                      value={mpg}
                      onChange={(e) => setMpg(e.target.value)}
                      className="w-24 text-center"
                      placeholder="?"
                    />
                    <span>miles/gallon</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-500">(Round to the nearest tenth)</p>
                </div>

                <div className="rounded-lg bg-slate-50 p-4">
                  <h3 className="mb-3 text-lg font-medium text-slate-700">Task 2: Write the general expression</h3>
                  <Input
                    type="text"
                    value={expression}
                    onChange={(e) => setExpression(e.target.value)}
                    className="text-center"
                    placeholder="Distance = ? × g"
                  />
                </div>

                <div className="rounded-lg bg-slate-50 p-4">
                  <h3 className="mb-3 text-lg font-medium text-slate-700">
                    Task 3: Calculate the distance with a full tank
                  </h3>
                  <p className="mb-3 text-slate-600">
                    Using your expression, calculate how far you can travel with 18 gallons of gas.
                  </p>
                  <div className="flex items-center gap-2">
                    <span>Distance =</span>
                    <Input
                      type="text"
                      value={distance}
                      onChange={(e) => setDistance(e.target.value)}
                      className="w-24 text-center"
                      placeholder="?"
                    />
                    <span>miles</span>
                  </div>
                </div>

                <div className="rounded-lg bg-slate-50 p-4">
                  <h3 className="mb-3 text-lg font-medium text-slate-700">Task 4: Make your decision</h3>
                  <p className="mb-3 text-slate-600">Will you be able to make the 350-mile trip on one tank of gas?</p>

                  <RadioGroup value={decision} onValueChange={setDecision} className="mb-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes">Yes, I can make it on one tank</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no">No, I'll need to refuel</Label>
                    </div>
                  </RadioGroup>

                  <div>
                    <Label htmlFor="explanation" className="mb-2 block">
                      Explain your reasoning:
                    </Label>
                    <Textarea
                      id="explanation"
                      value={explanation}
                      onChange={(e) => setExplanation(e.target.value)}
                      placeholder="Explain why you can or cannot make the trip on one tank..."
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
                <div className="mt-4 rounded-lg bg-emerald-100 p-4 text-center">
                  <h3 className="text-lg font-medium text-emerald-700">Great job!</h3>
                  <p className="text-emerald-600">You've correctly solved the problem and explained your reasoning.</p>
                </div>
              )}
            </div>

            <div className="flex justify-between">
              <Link href="/model">
                <Button variant="outline">
                  <ArrowLeft className="mr-1 h-4 w-4" /> Previous
                </Button>
              </Link>
              <Link href="/solution">
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
