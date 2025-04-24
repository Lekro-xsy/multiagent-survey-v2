"use client"

import { useState } from "react"
import PageLayout from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function ContextPage() {
  const [distance, setDistance] = useState(0)
  const [gas, setGas] = useState(100)
  const [animating, setAnimating] = useState(false)

  const startAnimation = () => {
    if (animating) return

    setAnimating(true)
    setDistance(0)
    setGas(100)

    const interval = setInterval(() => {
      setDistance((prev) => {
        const newValue = prev + 5
        if (newValue >= 100) {
          clearInterval(interval)
          setAnimating(false)
        }
        return Math.min(newValue, 100)
      })

      setGas((prev) => Math.max(prev - 0.8, 0))
    }, 100)
  }

  return (
    <PageLayout title="Fueling a Big Journey!" emoji="🚗">
      <div className="flex flex-col items-center">
        <img
          src="/cross-country-adventure.png"
          alt="Road trip through different landscapes"
          className="rounded-lg mb-6 w-full max-w-md"
        />

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 max-w-2xl">
          <p className="text-lg">
            A motorist travels <span className="font-bold text-sky-700">523 miles</span> on a road trip, using{" "}
            <span className="font-bold text-sky-700">16.2 gallons</span> of gasoline.
          </p>

          <p className="text-lg mt-4">
            They want to know:{" "}
            <span className="font-bold">How many miles did they travel for each gallon of gas they used?</span>
          </p>
        </div>

        <div className="mt-8 w-full max-w-md">
          <div className="flex justify-between mb-2">
            <span>Starting Point</span>
            <span>Destination</span>
          </div>
          <div className="relative mb-6">
            <Progress value={distance} className="h-4" />
            <div
              className="absolute top-0 transform -translate-y-1/2"
              style={{ left: `${distance}%`, transition: "left 0.1s ease-out" }}
            >
              <span className="inline-block bg-sky-600 text-white p-1 rounded-full">🚗</span>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-2">
            <span className="text-sm">Gas:</span>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-yellow-500 h-4 rounded-full"
                style={{ width: `${gas}%`, transition: "width 0.1s ease-out" }}
              ></div>
            </div>
          </div>
        </div>

        <Button onClick={startAnimation} disabled={animating} className="mt-6 bg-green-600 hover:bg-green-700">
          {animating ? "Driving..." : "Drive Forward"}
        </Button>
      </div>
    </PageLayout>
  )
}
