"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"

interface DistanceCalculatorProps {
  averageSpeed: number
  brakingTime: number
  onComplete?: () => void
}

export function DistanceCalculator({ averageSpeed, brakingTime, onComplete }: DistanceCalculatorProps) {
  const [distance, setDistance] = useState("")
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [feedback, setFeedback] = useState("")

  const handleCheck = () => {
    const distanceValue = Number.parseFloat(distance)
    const correctDistance = averageSpeed * brakingTime

    // Allow for some rounding error
    const isDistanceCorrect = Math.abs(distanceValue - correctDistance) < 0.5

    setIsCorrect(isDistanceCorrect)

    if (isDistanceCorrect) {
      setFeedback(`Correct! The car travels ${correctDistance.toFixed(1)} feet while braking.`)
      if (onComplete) onComplete()
    } else {
      setFeedback(
        `Not quite. Remember to multiply the average speed (${averageSpeed.toFixed(1)} ft/sec) by the braking time (${brakingTime} seconds).`,
      )
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Calculate the Distance</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="distance">Calculate the distance traveled during braking</Label>
          <div className="flex items-center gap-2">
            <span className="text-sm">Distance = </span>
            <Input
              id="distance"
              type="number"
              placeholder="?"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              className="max-w-[100px]"
            />
            <span className="text-sm">feet</span>
          </div>
          <p className="text-sm text-muted-foreground">Hint: Distance = Average Speed × Time</p>
        </div>

        <div className="p-4 bg-blue-50 rounded-md">
          <p className="text-sm">
            <strong>Given:</strong>
          </p>
          <ul className="list-disc list-inside text-sm">
            <li>Average Speed: {averageSpeed.toFixed(1)} feet/second</li>
            <li>Braking Time: {brakingTime} seconds</li>
          </ul>
        </div>

        <Button onClick={handleCheck} className="w-full">
          Check Answer
        </Button>

        {isCorrect !== null && (
          <div className={`p-4 rounded-md ${isCorrect ? "bg-green-100" : "bg-red-100"}`}>
            <div className="flex items-center">
              {isCorrect ? (
                <Check className="h-5 w-5 text-green-600 mr-2" />
              ) : (
                <X className="h-5 w-5 text-red-600 mr-2" />
              )}
              <p className={isCorrect ? "text-green-700" : "text-red-700"}>{feedback}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
