"use client"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Page8() {
  const [milesPerHour, setMilesPerHour] = useState("18")
  const [distance, setDistance] = useState("200")
  const [feetPerMile, setFeetPerMile] = useState("")
  const [secondsPerHour, setSecondsPerHour] = useState("")
  const [feetPerSecond, setFeetPerSecond] = useState("")
  const [time, setTime] = useState("")
  const [explanation, setExplanation] = useState("")
  const [step, setStep] = useState(1)
  const [showHint, setShowHint] = useState(false)
  const [showSolution, setShowSolution] = useState(false)

  const checkStep1 = () => {
    if (feetPerMile === "5280" && secondsPerHour === "3600") {
      setStep(2)
      setShowHint(false)
    } else {
      setShowHint(true)
    }
  }

  const checkStep2 = () => {
    // Allow for some rounding differences
    const calculatedValue = (18 * 5280) / 3600
    const userValue = Number.parseFloat(feetPerSecond)

    if (userValue >= calculatedValue - 0.5 && userValue <= calculatedValue + 0.5) {
      setStep(3)
      setShowHint(false)
    } else {
      setShowHint(true)
    }
  }

  const checkStep3 = () => {
    // Calculate expected time (allowing for rounding)
    const speedInFeetPerSecond = (18 * 5280) / 3600
    const expectedTime = 200 / speedInFeetPerSecond
    const userTime = Number.parseFloat(time)

    const hasKeywords =
      explanation.toLowerCase().includes("distance") &&
      explanation.toLowerCase().includes("speed") &&
      (explanation.toLowerCase().includes("time") || explanation.toLowerCase().includes("seconds"))

    if (Math.abs(userTime - expectedTime) < 0.5 && hasKeywords) {
      setShowSolution(true)
      setShowHint(false)
    } else {
      setShowHint(true)
    }
  }

  return (
    <PageLayout pageNumber={8} totalPages={9} title="🚀 Same Math, Different Context!">
      <Card>
        <CardContent className="pt-6">
          <div className="mb-6 space-y-6">
            <div className="rounded-lg bg-purple-50 p-4">
              <h2 className="mb-2 text-xl font-semibold text-purple-800">Far Transfer Scenario:</h2>
              <p className="text-purple-800">
                A drone flies at 18 miles per hour along a path parallel to a 200-foot obstacle course. How many seconds
                does the drone take to cover the course?
              </p>
            </div>

            {step === 1 && (
              <div className="space-y-4">
                <h3 className="font-medium">Step 1: Convert units</h3>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="feetPerMile">How many feet in 1 mile?</Label>
                    <Input
                      id="feetPerMile"
                      value={feetPerMile}
                      onChange={(e) => setFeetPerMile(e.target.value)}
                      placeholder="Enter value"
                    />
                  </div>

                  <div>
                    <Label htmlFor="secondsPerHour">How many seconds in 1 hour?</Label>
                    <Input
                      id="secondsPerHour"
                      value={secondsPerHour}
                      onChange={(e) => setSecondsPerHour(e.target.value)}
                      placeholder="Enter value"
                    />
                  </div>
                </div>

                {showHint && (
                  <div className="rounded-lg bg-amber-50 p-4 text-amber-800">
                    <p className="font-medium">Hint:</p>
                    <ul className="ml-6 mt-2 list-disc">
                      <li>There are 5280 feet in 1 mile</li>
                      <li>There are 3600 seconds in 1 hour (60 min × 60 sec)</li>
                    </ul>
                  </div>
                )}

                <Button onClick={checkStep1}>Check & Continue</Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h3 className="font-medium">Step 2: Calculate speed in feet/second</h3>

                <div className="rounded-lg bg-slate-50 p-4">
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <div className="mb-2 text-lg">
                        {milesPerHour} miles/hour × {feetPerMile} feet/mile
                      </div>
                      <div className="border-t border-black"></div>
                      <div className="mt-2 text-lg">{secondsPerHour} seconds/hour</div>
                    </div>
                    <div className="mx-4 text-lg">=</div>
                    <div>
                      <Input
                        className="w-32"
                        value={feetPerSecond}
                        onChange={(e) => setFeetPerSecond(e.target.value)}
                        placeholder="feet/second"
                      />
                    </div>
                  </div>
                </div>

                {showHint && (
                  <div className="rounded-lg bg-amber-50 p-4 text-amber-800">
                    <p className="font-medium">Hint:</p>
                    <p className="mt-2">Calculate: (18 × 5280) ÷ 3600 = 26.4 feet/second</p>
                  </div>
                )}

                <Button onClick={checkStep2}>Check & Continue</Button>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h3 className="font-medium">Step 3: Calculate time and explain</h3>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="time">Time (in seconds)</Label>
                    <Input
                      id="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      placeholder="Calculate the time"
                    />
                  </div>

                  <div>
                    <Label htmlFor="explanation">Explain your solution</Label>
                    <Textarea
                      id="explanation"
                      value={explanation}
                      onChange={(e) => setExplanation(e.target.value)}
                      placeholder="Explain how you calculated the time"
                      rows={3}
                    />
                  </div>
                </div>

                {showHint && (
                  <div className="rounded-lg bg-amber-50 p-4 text-amber-800">
                    <p className="font-medium">Hint:</p>
                    <p className="mt-2">Calculate: 200 feet ÷ 26.4 feet/second ≈ 7.6 seconds</p>
                    <p className="mt-1">Remember to explain using the distance ÷ speed = time relationship.</p>
                  </div>
                )}

                <Button onClick={checkStep3}>Check My Answer</Button>
              </div>
            )}

            {showSolution && (
              <div className="rounded-lg bg-green-50 p-4">
                <h3 className="mb-2 font-medium text-green-800">Solution:</h3>
                <div className="space-y-2 text-green-800">
                  <p>1. Convert 18 mph to ft/s: (18 × 5280) ÷ 3600 = 26.4 ft/s</p>
                  <p>2. Calculate time: 200 ft ÷ 26.4 ft/s ≈ 7.6 seconds</p>
                  <p className="font-semibold">
                    It takes about 7.6 seconds for the drone to cover the 200-foot course.
                  </p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </PageLayout>
  )
}
