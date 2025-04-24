"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface PageOneProps {
  onNext: () => void
}

export function PageOne({ onNext }: PageOneProps) {
  const [isRiding, setIsRiding] = useState(false)
  const [distance, setDistance] = useState(0)
  const [time, setTime] = useState(0)
  const rate = 13.8 // miles per hour

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isRiding && time < 3) {
      interval = setInterval(() => {
        setTime((prev) => {
          const newTime = prev + 0.1
          setDistance(Number.parseFloat((newTime * rate).toFixed(1)))
          return Number.parseFloat(newTime.toFixed(1))
        })
      }, 200)
    } else if (time >= 3) {
      setIsRiding(false)
    }

    return () => clearInterval(interval)
  }, [isRiding, time])

  const handleRideClick = () => {
    setIsRiding(!isRiding)
    if (!isRiding) {
      setDistance(0)
      setTime(0)
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-green-600">🚴 Cycling Across the Countryside!</h1>

      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="w-full md:w-1/2">
          <div className="relative h-64 bg-gradient-to-b from-blue-100 to-green-200 rounded-lg overflow-hidden">
            <div
              className="absolute bottom-0 left-0 h-12 w-12 transition-all duration-200"
              style={{ left: `${(time / 3) * 100}%` }}
            >
              <div className="relative">
                <span className="text-3xl">🚴</span>
                <div className="absolute -top-8 left-0 bg-white px-2 py-1 rounded-md text-xs shadow-md">
                  {distance.toFixed(1)} miles
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-green-300 to-green-500"></div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <Card className="p-6">
            <p className="text-lg mb-4">
              A cyclist rides steadily through beautiful countryside. We know that in 3 hours, they travel 41.4 miles.
              How far could they travel if they kept riding for 7 hours?
            </p>

            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm text-gray-500">Time: {time.toFixed(1)} hours</div>
                <div className="text-sm text-gray-500">Distance: {distance.toFixed(1)} miles</div>
              </div>

              <Button onClick={handleRideClick} className="bg-green-600 hover:bg-green-700">
                {isRiding ? "Pause" : "Ride Along"}
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <div className="flex justify-end">
        <Button onClick={onNext} className="bg-green-600 hover:bg-green-700">
          Continue to Problem Breakdown
        </Button>
      </div>
    </div>
  )
}
