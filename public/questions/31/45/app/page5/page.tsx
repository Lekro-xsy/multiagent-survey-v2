"use client"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Page5() {
  const [speed, setSpeed] = useState("")
  const [distance, setDistance] = useState("")
  const [time, setTime] = useState("")
  const [explanation, setExplanation] = useState("")
  const [feedback, setFeedback] = useState<{ message: string; type: "success" | "error" } | null>(null)

  const checkAnswer = () => {
    // Convert to numbers for comparison
    const speedNum = Number.parseFloat(speed)
    const distanceNum = Number.parseFloat(distance)
    const timeNum = Number.parseFloat(time)

    // Check if values are close enough (allowing for rounding)
    const isSpeedCorrect = Math.abs(speedNum - 12.22) < 0.1
    const isDistanceCorrect = distanceNum === 50

    // Calculate expected time (allowing for rounding)
    const expectedTime = distanceNum / speedNum
    const isTimeCorrect = Math.abs(timeNum - expectedTime) < 0.1

    // Check if explanation contains key concepts
    const hasKeywords =
      explanation.toLowerCase().includes("distance") &&
      explanation.toLowerCase().includes("speed") &&
      explanation.toLowerCase().includes("time")

    if (isSpeedCorrect && isDistanceCorrect && isTimeCorrect && hasKeywords) {
      setFeedback({
        message: "Great job! Your calculation is correct.",
        type: "success",
      })
    } else {
      setFeedback({
        message: "Check your work. Remember that Time = Distance ÷ Speed.",
        type: "error",
      })
    }
  }

  return (
    <PageLayout pageNumber={5} totalPages={9} title="✍️ Now You Solve It!">
      <Card>
        <CardContent className="pt-6">
          <div className="mb-6 space-y-6">
            <h2 className="text-xl font-semibold">Solve the Problem:</h2>

            <div className="space-y-4">
              <div>
                <Label htmlFor="speed">Speed (in yards/second)</Label>
                <Input
                  id="speed"
                  value={speed}
                  onChange={(e) => setSpeed(e.target.value)}
                  placeholder="Enter the converted speed"
                />
              </div>

              <div>
                <Label htmlFor="distance">Distance (in yards)</Label>
                <Input
                  id="distance"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  placeholder="Enter the distance"
                />
              </div>

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

              {feedback && (
                <div
                  className={`rounded-lg p-4 ${feedback.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
                >
                  {feedback.message}
                </div>
              )}

              <Button onClick={checkAnswer}>Check My Answer</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </PageLayout>
  )
}
