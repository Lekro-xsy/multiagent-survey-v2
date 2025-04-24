"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface PageSevenProps {
  onNext: () => void
}

export function PageSeven({ onNext }: PageSevenProps) {
  const [rate, setRate] = useState("13.8")
  const [time, setTime] = useState("")
  const [distance, setDistance] = useState("")
  const [isCorrect, setIsCorrect] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)

  const handleSubmit = () => {
    setHasSubmitted(true)
    const calculatedDistance = Number.parseFloat(rate) * Number.parseFloat(time)
    const userDistance = Number.parseFloat(distance)

    // Check if the answer is correct (within a small margin of error)
    setIsCorrect(Math.abs(calculatedDistance - userDistance) < 0.1)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">🔄 More Time, More Distance!</h1>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Similar Problem</h2>
        <p className="mb-6">If the same cyclist rode for 5 hours instead, how far would they travel?</p>

        <div className="space-y-6">
          <div>
            <Label htmlFor="rate" className="text-lg">
              Rate (miles per hour)
            </Label>
            <Input id="rate" value={rate} onChange={(e) => setRate(e.target.value)} className="mt-2" readOnly />
            <p className="text-sm text-gray-500 mt-1">We already calculated this rate from the original problem.</p>
          </div>

          <div>
            <Label htmlFor="time" className="text-lg">
              Time (hours)
            </Label>
            <Input
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="Enter the time in hours"
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="distance" className="text-lg">
              Distance (miles)
            </Label>
            <Input
              id="distance"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              placeholder="Calculate the distance"
              className="mt-2"
            />
            <p className="text-sm text-gray-500 mt-1">Use the formula: Distance = Rate × Time</p>
          </div>
        </div>
      </Card>

      {hasSubmitted && (
        <div
          className={`p-4 rounded-lg border ${isCorrect ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}
        >
          {isCorrect ? (
            <p className="text-green-700 font-medium">
              Correct! At a rate of 13.8 miles per hour, the cyclist would travel 69 miles in 5 hours.
            </p>
          ) : (
            <div className="text-red-700">
              <p className="font-medium">Not quite right. Let's check your calculation:</p>
              <p className="mt-2">Distance = Rate × Time = 13.8 miles/hour × 5 hours = 69 miles</p>
            </div>
          )}
        </div>
      )}

      <div className="flex justify-between items-center">
        {!hasSubmitted && (
          <Button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700" disabled={!time || !distance}>
            Check My Answer
          </Button>
        )}
        <div className="flex-1"></div>
        <Button onClick={onNext} className="bg-blue-600 hover:bg-blue-700" disabled={!isCorrect && !hasSubmitted}>
          Continue to Different Scenario
        </Button>
      </div>
    </div>
  )
}
