"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function Transfer1Page() {
  const [mpg, setMpg] = useState("")
  const [distance, setDistance] = useState("")
  const [decision, setDecision] = useState("")
  const [isCorrect, setIsCorrect] = useState(false)

  const checkAnswers = () => {
    const mpgCorrect = Number.parseFloat(mpg) === 20 || Number.parseFloat(mpg) === 20.0
    const distanceCorrect = Math.abs(Number.parseFloat(distance) - 360) < 1
    const decisionCorrect = decision === "yes"

    setIsCorrect(mpgCorrect && distanceCorrect && decisionCorrect)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex items-center justify-between">
            <Link href="/solution">
              <Button variant="ghost" className="flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" /> Back
              </Button>
            </Link>
            <div className="text-sm text-slate-500">Page 7 of 9</div>
          </div>

          <div className="mb-4 rounded-xl bg-amber-50 p-6 shadow-lg">
            <h1 className="mb-6 flex items-center gap-2 text-3xl font-bold text-slate-800">
              <RefreshCw className="h-8 w-8 text-amber-600" /> Another Trip Planning!
            </h1>

            <div className="mb-6 rounded-xl bg-white p-4 shadow-md">
              <h2 className="mb-4 text-xl font-semibold text-slate-700">Near Transfer — Similar Problem</h2>

              <div className="mb-6 rounded-lg bg-blue-50 p-4">
                <h3 className="mb-2 text-lg font-medium text-blue-700">New Scenario:</h3>
                <p className="text-blue-600">
                  This time, you know your car uses <span className="font-semibold">12 gallons</span> to travel
                  <span className="font-semibold"> 240 miles</span>. Your trip is{" "}
                  <span className="font-semibold">360 miles</span>. Your tank holds{" "}
                  <span className="font-semibold">18 gallons</span>. Will you make it without refueling?
                </p>
              </div>

              <div className="space-y-6">
                <div className="rounded-lg bg-slate-50 p-4">
                  <h3 className="mb-3 text-lg font-medium text-slate-700">Step 1: Calculate miles per gallon</h3>
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
                  <h3 className="mb-3 text-lg font-medium text-slate-700">
                    Step 2: Calculate the distance with a full tank
                  </h3>
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
                  <h3 className="mb-3 text-lg font-medium text-slate-700">Step 3: Make your decision</h3>
                  <p className="mb-3 text-slate-600">Will you be able to make the 360-mile trip on one tank of gas?</p>

                  <RadioGroup value={decision} onValueChange={setDecision}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes-transfer" />
                      <Label htmlFor="yes-transfer">Yes, I can make it on one tank</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no-transfer" />
                      <Label htmlFor="no-transfer">No, I'll need to refuel</Label>
                    </div>
                  </RadioGroup>
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
                      <strong>Step 1:</strong> 240 miles ÷ 12 gallons = 20.0 miles/gallon
                    </p>
                    <p>
                      <strong>Step 2:</strong> 20.0 miles/gallon × 18 gallons = 360 miles
                    </p>
                    <p>
                      <strong>Step 3:</strong> Since you can travel exactly 360 miles and your trip is 360 miles, you
                      can make it without refueling (though it will be cutting it very close!).
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-between">
              <Link href="/solution">
                <Button variant="outline">
                  <ArrowLeft className="mr-1 h-4 w-4" /> Previous
                </Button>
              </Link>
              <Link href="/transfer2">
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
