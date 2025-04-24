"use client"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Page4() {
  const [step, setStep] = useState(1)
  const [milesPerHour, setMilesPerHour] = useState("25")
  const [yardsPerMile, setYardsPerMile] = useState("")
  const [secondsPerHour, setSecondsPerHour] = useState("")
  const [yardsPerSecond, setYardsPerSecond] = useState("")
  const [showHint, setShowHint] = useState(false)

  const checkStep1 = () => {
    if (yardsPerMile === "1760" && secondsPerHour === "3600") {
      setStep(2)
      setShowHint(false)
    } else {
      setShowHint(true)
    }
  }

  const checkStep2 = () => {
    // Allow for some rounding differences
    const calculatedValue = (25 * 1760) / 3600
    const userValue = Number.parseFloat(yardsPerSecond)

    if (userValue >= calculatedValue - 0.1 && userValue <= calculatedValue + 0.1) {
      setStep(3)
      setShowHint(false)
    } else {
      setShowHint(true)
    }
  }

  return (
    <PageLayout pageNumber={4} totalPages={9} title="🧮 Building the Time Equation">
      <Card>
        <CardContent className="pt-6">
          <div className="mb-6 space-y-6">
            <h2 className="text-xl font-semibold">Converting Units:</h2>

            {step === 1 && (
              <div className="space-y-4">
                <p>First, we need to convert 25 miles/hour to yards/second:</p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="yardsPerMile">How many yards in 1 mile?</Label>
                    <Input
                      id="yardsPerMile"
                      value={yardsPerMile}
                      onChange={(e) => setYardsPerMile(e.target.value)}
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
                      <li>There are 1760 yards in 1 mile</li>
                      <li>There are 3600 seconds in 1 hour (60 min × 60 sec)</li>
                    </ul>
                  </div>
                )}

                <Button onClick={checkStep1}>Check & Continue</Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <p>Now, let's calculate the speed in yards/second:</p>

                <div className="rounded-lg bg-slate-50 p-4">
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <div className="mb-2 text-lg">
                        {milesPerHour} miles/hour × {yardsPerMile} yards/mile
                      </div>
                      <div className="border-t border-black"></div>
                      <div className="mt-2 text-lg">{secondsPerHour} seconds/hour</div>
                    </div>
                    <div className="mx-4 text-lg">=</div>
                    <div>
                      <Input
                        className="w-32"
                        value={yardsPerSecond}
                        onChange={(e) => setYardsPerSecond(e.target.value)}
                        placeholder="yards/second"
                      />
                    </div>
                  </div>
                </div>

                {showHint && (
                  <div className="rounded-lg bg-amber-50 p-4 text-amber-800">
                    <p className="font-medium">Hint:</p>
                    <p className="mt-2">Calculate: (25 × 1760) ÷ 3600 = 12.22 yards/second</p>
                  </div>
                )}

                <Button onClick={checkStep2}>Check & Continue</Button>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Setting Up the Time Equation:</h2>

                <div className="rounded-lg bg-green-50 p-4">
                  <p className="mb-4 text-green-800">
                    Now that we have the speed in yards/second, we can set up the equation to find time:
                  </p>

                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <div className="mb-2 text-lg">Time =</div>
                    </div>
                    <div className="mx-4 text-lg">
                      <div className="text-center">
                        <div className="mb-2 text-lg">50 yards</div>
                        <div className="border-t border-black"></div>
                        <div className="mt-2 text-lg">{yardsPerSecond} yards/second</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-blue-50 p-4 text-blue-800">
                  <p className="font-medium">Remember:</p>
                  <p className="mt-2">Time = Distance ÷ Speed</p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </PageLayout>
  )
}
