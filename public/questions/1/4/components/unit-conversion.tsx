"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"

interface UnitConversionProps {
  initialSpeed: number
  onComplete?: () => void
}

export function UnitConversion({ initialSpeed, onComplete }: UnitConversionProps) {
  const [averageSpeed, setAverageSpeed] = useState("")
  const [milesPerHour, setMilesPerHour] = useState("")
  const [feetPerSecond, setFeetPerSecond] = useState("")
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [feedback, setFeedback] = useState("")

  const handleCheck = () => {
    const avgSpeedValue = Number.parseFloat(averageSpeed)
    const milesPerHourValue = Number.parseFloat(milesPerHour)
    const feetPerSecondValue = Number.parseFloat(feetPerSecond)

    const correctAvgSpeed = initialSpeed / 2
    const correctMilesPerHour = correctAvgSpeed
    const correctFeetPerSecond = correctAvgSpeed * (5280 / 3600)

    const isAvgSpeedCorrect = Math.abs(avgSpeedValue - correctAvgSpeed) < 0.1
    const isMphCorrect = Math.abs(milesPerHourValue - correctMilesPerHour) < 0.1
    const isFpsCorrect = Math.abs(feetPerSecondValue - correctFeetPerSecond) < 0.5

    const allCorrect = isAvgSpeedCorrect && isMphCorrect && isFpsCorrect

    setIsCorrect(allCorrect)

    if (allCorrect) {
      setFeedback("Great job! Your calculations are correct.")
      if (onComplete) onComplete()
    } else {
      let errorFeedback = "Check your calculations: "
      if (!isAvgSpeedCorrect) errorFeedback += "Average speed should be half of the initial speed. "
      if (!isMphCorrect) errorFeedback += "Miles per hour should equal the average speed. "
      if (!isFpsCorrect) errorFeedback += "For the feet per second conversion, multiply by 5280 and divide by 3600. "
      setFeedback(errorFeedback)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Unit Conversion</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="average-speed">Step 1: Calculate the average speed (in mph)</Label>
          <div className="flex items-center gap-2">
            <span className="text-sm">Average Speed = </span>
            <Input
              id="average-speed"
              type="number"
              placeholder="?"
              value={averageSpeed}
              onChange={(e) => setAverageSpeed(e.target.value)}
              className="max-w-[100px]"
            />
            <span className="text-sm">mph</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Hint: With uniform deceleration, average speed = ½ × initial speed
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="mph">Step 2: Prepare for conversion</Label>
          <div className="flex items-center gap-2">
            <span className="text-sm">Average Speed = </span>
            <Input
              id="mph"
              type="number"
              placeholder="?"
              value={milesPerHour}
              onChange={(e) => setMilesPerHour(e.target.value)}
              className="max-w-[100px]"
            />
            <span className="text-sm">miles/hour</span>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="fps">Step 3: Convert to feet per second</Label>
          <div className="flex items-center gap-2">
            <span className="text-sm">Average Speed = </span>
            <Input
              id="fps"
              type="number"
              placeholder="?"
              value={feetPerSecond}
              onChange={(e) => setFeetPerSecond(e.target.value)}
              className="max-w-[100px]"
            />
            <span className="text-sm">feet/second</span>
          </div>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>Conversion factors:</p>
            <ul className="list-disc list-inside">
              <li>1 mile = 5280 feet</li>
              <li>1 hour = 3600 seconds</li>
            </ul>
          </div>
        </div>

        <Button onClick={handleCheck} className="w-full">
          Check Calculations
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
