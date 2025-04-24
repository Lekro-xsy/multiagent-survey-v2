"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"

export function StudentSolution() {
  const [drivingTime, setDrivingTime] = useState("")
  const [distanceFormula, setDistanceFormula] = useState("")
  const [finalDistance, setFinalDistance] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [feedback, setFeedback] = useState<{
    drivingTime: "correct" | "incorrect" | null
    distanceFormula: "correct" | "incorrect" | null
    finalDistance: "correct" | "incorrect" | null
  }>({
    drivingTime: null,
    distanceFormula: null,
    finalDistance: null,
  })

  const handleSubmit = () => {
    // Simple validation - in a real app, this would be more sophisticated
    const drivingTimeCorrect = drivingTime.includes("6.75") || drivingTime.includes("6.75")
    const distanceFormulaCorrect =
      distanceFormula.includes("50") &&
      (distanceFormula.includes("6.75") || distanceFormula.includes("6.75")) &&
      (distanceFormula.includes("*") || distanceFormula.includes("×") || distanceFormula.includes("·"))
    const finalDistanceCorrect = finalDistance === "340"

    setFeedback({
      drivingTime: drivingTimeCorrect ? "correct" : "incorrect",
      distanceFormula: distanceFormulaCorrect ? "correct" : "incorrect",
      finalDistance: finalDistanceCorrect ? "correct" : "incorrect",
    })

    setSubmitted(true)
  }

  const allCorrect =
    feedback.drivingTime === "correct" && feedback.distanceFormula === "correct" && feedback.finalDistance === "correct"

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Calculate the Driving Time</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="driving-time">Write the calculation for total driving time (in hours):</Label>
              <Textarea
                id="driving-time"
                placeholder="8 - 1.25 = 6.75 hours"
                value={drivingTime}
                onChange={(e) => setDrivingTime(e.target.value)}
                className={
                  feedback.drivingTime === "correct"
                    ? "border-green-500"
                    : feedback.drivingTime === "incorrect"
                      ? "border-red-500"
                      : ""
                }
              />
              {feedback.drivingTime && (
                <div
                  className={`flex items-center gap-2 mt-2 ${
                    feedback.drivingTime === "correct" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {feedback.drivingTime === "correct" ? (
                    <>
                      <Check className="h-5 w-5" />
                      <span>Correct!</span>
                    </>
                  ) : (
                    <>
                      <X className="h-5 w-5" />
                      <span>Try again. Remember to subtract all stop times from the total trip time.</span>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Write the Distance Formula</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="distance-formula">Write the formula to calculate the distance:</Label>
              <Textarea
                id="distance-formula"
                placeholder="50 × 6.75 = 337.5 miles"
                value={distanceFormula}
                onChange={(e) => setDistanceFormula(e.target.value)}
                className={
                  feedback.distanceFormula === "correct"
                    ? "border-green-500"
                    : feedback.distanceFormula === "incorrect"
                      ? "border-red-500"
                      : ""
                }
              />
              {feedback.distanceFormula && (
                <div
                  className={`flex items-center gap-2 mt-2 ${
                    feedback.distanceFormula === "correct" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {feedback.distanceFormula === "correct" ? (
                    <>
                      <Check className="h-5 w-5" />
                      <span>Correct!</span>
                    </>
                  ) : (
                    <>
                      <X className="h-5 w-5" />
                      <span>Try again. Use the formula: speed × time = distance</span>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Final Answer</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="final-distance">What is the final distance to the nearest 10 miles?</Label>
              <Input
                id="final-distance"
                placeholder="340"
                value={finalDistance}
                onChange={(e) => setFinalDistance(e.target.value)}
                className={
                  feedback.finalDistance === "correct"
                    ? "border-green-500"
                    : feedback.finalDistance === "incorrect"
                      ? "border-red-500"
                      : ""
                }
              />
              {feedback.finalDistance && (
                <div
                  className={`flex items-center gap-2 mt-2 ${
                    feedback.finalDistance === "correct" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {feedback.finalDistance === "correct" ? (
                    <>
                      <Check className="h-5 w-5" />
                      <span>Correct!</span>
                    </>
                  ) : (
                    <>
                      <X className="h-5 w-5" />
                      <span>Try again. Remember to round to the nearest 10 miles.</span>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <Button size="lg" onClick={handleSubmit} disabled={submitted && allCorrect}>
          {submitted && allCorrect ? "Great Job! ✓" : "Check My Work"}
        </Button>
      </div>

      {submitted && allCorrect && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
          <h3 className="text-xl font-bold text-green-700 mb-2">Excellent work! 🎉</h3>
          <p>You've correctly calculated that Roberto drove approximately 340 miles on his trip.</p>
        </div>
      )}
    </div>
  )
}
