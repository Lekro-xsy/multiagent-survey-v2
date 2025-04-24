"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"

interface TransferProblemProps {
  scenario: string
  correctDrivingTime: string
  correctDistance: string
}

export function TransferProblem({ scenario, correctDrivingTime, correctDistance }: TransferProblemProps) {
  const [drivingTime, setDrivingTime] = useState("")
  const [distance, setDistance] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [showSolution, setShowSolution] = useState(false)
  const [feedback, setFeedback] = useState<{
    drivingTime: "correct" | "incorrect" | null
    distance: "correct" | "incorrect" | null
  }>({
    drivingTime: null,
    distance: null,
  })

  const handleSubmit = () => {
    setFeedback({
      drivingTime: drivingTime === correctDrivingTime ? "correct" : "incorrect",
      distance: distance === correctDistance ? "correct" : "incorrect",
    })
    setSubmitted(true)
  }

  const allCorrect = feedback.drivingTime === "correct" && feedback.distance === "correct"

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>New Problem</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-blue-50 rounded-lg mb-4">
            <p>{scenario}</p>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="driving-time">What is the total driving time (in hours)?</Label>
              <Input
                id="driving-time"
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
                      <span>Try again</span>
                    </>
                  )}
                </div>
              )}
            </div>

            <div>
              <Label htmlFor="distance">What is the total distance (in miles)?</Label>
              <Input
                id="distance"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                className={
                  feedback.distance === "correct"
                    ? "border-green-500"
                    : feedback.distance === "incorrect"
                      ? "border-red-500"
                      : ""
                }
              />
              {feedback.distance && (
                <div
                  className={`flex items-center gap-2 mt-2 ${
                    feedback.distance === "correct" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {feedback.distance === "correct" ? (
                    <>
                      <Check className="h-5 w-5" />
                      <span>Correct!</span>
                    </>
                  ) : (
                    <>
                      <X className="h-5 w-5" />
                      <span>Try again</span>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center gap-4">
        <Button onClick={handleSubmit} disabled={submitted && allCorrect}>
          {submitted && allCorrect ? "Great Job! ✓" : "Check My Work"}
        </Button>

        {submitted && !allCorrect && (
          <Button variant="outline" onClick={() => setShowSolution(true)}>
            Show Solution
          </Button>
        )}
      </div>

      {showSolution && (
        <Card>
          <CardHeader>
            <CardTitle>Solution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Driving Time:</h3>
                <div className="p-3 bg-blue-50 rounded-md">{correctDrivingTime} hours</div>
              </div>
              <div>
                <h3 className="font-semibold">Distance:</h3>
                <div className="p-3 bg-blue-50 rounded-md">{correctDistance} miles</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
