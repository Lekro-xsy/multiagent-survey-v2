"use client"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Page7() {
  const [kmPerHour, setKmPerHour] = useState("20")
  const [meters, setMeters] = useState("100")
  const [metersPerKm, setMetersPerKm] = useState("")
  const [secondsPerHour, setSecondsPerHour] = useState("")
  const [metersPerSecond, setMetersPerSecond] = useState("")
  const [time, setTime] = useState("")
  const [step, setStep] = useState(1)
  const [showHint, setShowHint] = useState(false)
  const [showSolution, setShowSolution] = useState(false)

  const checkStep1 = () => {
    if (metersPerKm === "1000" && secondsPerHour === "3600") {
      setStep(2)
      setShowHint(false)
    } else {
      setShowHint(true)
    }
  }

  const checkStep2 = () => {
    // Allow for some rounding differences
    const calculatedValue = (20 * 1000) / 3600
    const userValue = Number.parseFloat(metersPerSecond)

    if (userValue >= calculatedValue - 0.1 && userValue <= calculatedValue + 0.1) {
      setStep(3)
      setShowHint(false)
    } else {
      setShowHint(true)
    }
  }

  const checkStep3 = () => {
    // Calculate expected time (allowing for rounding)
    const speedInMetersPerSecond = (20 * 1000) / 3600
    const expectedTime = 100 / speedInMetersPerSecond
    const userTime = Number.parseFloat(time)

    if (Math.abs(userTime - expectedTime) < 0.2) {
      setShowSolution(true)
      setShowHint(false)
    } else {
      setShowHint(true)
    }
  }

  return (
    <PageLayout pageNumber={7} totalPages={9} title="🔄 Another Sprint and Car Challenge!">
      <Card>
        <CardContent className="pt-6">
          <div className="mb-6 space-y-6">
            <div className="rounded-lg bg-blue-50 p-4">
              <h2 className="mb-2 text-xl font-semibold text-blue-800">New Scenario:</h2>
              <p className="text-blue-800">
                A bike is riding parallel to a 100-meter sprint track at 20 kilometers per hour. How many seconds does
                it take to cover the 100 meters?
              </p>
            </div>

            {step === 1 && (
              <div className="space-y-4">
                <h3 className="font-medium">Step 1: Convert units</h3>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="metersPerKm">How many meters in 1 kilometer?</Label>
                    <Input
                      id="metersPerKm"
                      value={metersPerKm}
                      onChange={(e) => setMetersPerKm(e.target.value)}
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
                      <li>There are 1000 meters in 1 kilometer</li>
                      <li>There are 3600 seconds in 1 hour (60 min × 60 sec)</li>
                    </ul>
                  </div>
                )}

                <Button onClick={checkStep1}>Check & Continue</Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h3 className="font-medium">Step 2: Calculate speed in meters/second</h3>

                <div className="rounded-lg bg-slate-50 p-4">
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <div className="mb-2 text-lg">
                        {kmPerHour} km/hour × {metersPerKm} meters/km
                      </div>
                      <div className="border-t border-black"></div>
                      <div className="mt-2 text-lg">{secondsPerHour} seconds/hour</div>
                    </div>
                    <div className="mx-4 text-lg">=</div>
                    <div>
                      <Input
                        className="w-32"
                        value={metersPerSecond}
                        onChange={(e) => setMetersPerSecond(e.target.value)}
                        placeholder="meters/second"
                      />
                    </div>
                  </div>
                </div>

                {showHint && (
                  <div className="rounded-lg bg-amber-50 p-4 text-amber-800">
                    <p className="font-medium">Hint:</p>
                    <p className="mt-2">Calculate: (20 × 1000) ÷ 3600 = 5.56 meters/second</p>
                  </div>
                )}

                <Button onClick={checkStep2}>Check & Continue</Button>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h3 className="font-medium">Step 3: Calculate time</h3>

                <div className="rounded-lg bg-slate-50 p-4">
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <div className="mb-2 text-lg">Time =</div>
                    </div>
                    <div className="mx-4 text-lg">
                      <div className="text-center">
                        <div className="mb-2 text-lg">{meters} meters</div>
                        <div className="border-t border-black"></div>
                        <div className="mt-2 text-lg">{metersPerSecond} meters/second</div>
                      </div>
                    </div>
                    <div className="mx-4 text-lg">=</div>
                    <div>
                      <Input
                        className="w-32"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        placeholder="seconds"
                      />
                    </div>
                  </div>
                </div>

                {showHint && (
                  <div className="rounded-lg bg-amber-50 p-4 text-amber-800">
                    <p className="font-medium">Hint:</p>
                    <p className="mt-2">Calculate: 100 ÷ 5.56 ≈ 18 seconds</p>
                  </div>
                )}

                <Button onClick={checkStep3}>Check My Answer</Button>
              </div>
            )}

            {showSolution && (
              <div className="rounded-lg bg-green-50 p-4">
                <h3 className="mb-2 font-medium text-green-800">Solution:</h3>
                <div className="space-y-2 text-green-800">
                  <p>1. Convert 20 km/h to m/s: (20 × 1000) ÷ 3600 = 5.56 m/s</p>
                  <p>2. Calculate time: 100 m ÷ 5.56 m/s ≈ 18 seconds</p>
                  <p className="font-semibold">It takes about 18 seconds for the bike to cover 100 meters.</p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </PageLayout>
  )
}
