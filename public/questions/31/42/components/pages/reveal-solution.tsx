"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Target, DollarSign } from "lucide-react"

export function RevealSolution() {
  const [firstClassRevenue, setFirstClassRevenue] = useState(0)
  const [coachRevenue, setCoachRevenue] = useState(0)
  const [totalRevenue, setTotalRevenue] = useState(0)
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    // Animate the counters
    let firstClassCounter = 0
    let coachCounter = 0
    let totalCounter = 0
    const firstClassTarget = 27520
    const coachTarget = 107280
    const totalTarget = 134800

    const interval = setInterval(() => {
      if (firstClassCounter < firstClassTarget) {
        firstClassCounter = Math.min(firstClassCounter + 500, firstClassTarget)
        setFirstClassRevenue(firstClassCounter)
      }

      if (coachCounter < coachTarget) {
        coachCounter = Math.min(coachCounter + 2000, coachTarget)
        setCoachRevenue(coachCounter)
      }

      if (totalCounter < totalTarget) {
        totalCounter = Math.min(totalCounter + 2500, totalTarget)
        setTotalRevenue(totalCounter)
      }

      if (firstClassCounter === firstClassTarget && coachCounter === coachTarget && totalCounter === totalTarget) {
        clearInterval(interval)
        setAnimationComplete(true)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold flex items-center">
          <Target className="mr-2 h-6 w-6" /> Check Your Work!
        </h2>
        <p className="text-gray-600">Here's the complete solution with step-by-step calculations.</p>
      </div>

      <Card className="p-6 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="font-semibold text-yellow-800">First-class revenue:</h3>
            <div className="flex items-center space-x-2">
              <div className="bg-yellow-100 p-3 rounded-lg border border-yellow-200 flex-1">
                <div className="text-lg">32 × 860 = ${firstClassRevenue.toLocaleString()}</div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-blue-800">Coach revenue:</h3>
            <div className="flex items-center space-x-2">
              <div className="bg-blue-100 p-3 rounded-lg border border-blue-200 flex-1">
                <div className="text-lg">298 × 360 = ${coachRevenue.toLocaleString()}</div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-sky-800">Total revenue:</h3>
            <div className="flex items-center space-x-2">
              <div className="bg-sky-100 p-3 rounded-lg border border-sky-200 flex-1">
                <div className="text-lg">$27,520 + $107,280 = ${totalRevenue.toLocaleString()}</div>
              </div>
            </div>
          </div>

          <div className="bg-green-100 p-4 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-800 flex items-center">
              <DollarSign className="h-5 w-5 mr-2" /> Final Answer:
            </h3>
            <p className="text-green-700 text-xl font-bold mt-1">
              The airline will gross ${totalRevenue.toLocaleString()} if the plane is full.
            </p>
          </div>
        </div>
      </Card>

      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <h3 className="font-semibold">Solution Walkthrough:</h3>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li className="text-gray-700">
            <span className="font-medium">Identify the two revenue categories:</span> First class and coach
          </li>
          <li className="text-gray-700">
            <span className="font-medium">Calculate first-class revenue:</span> 32 passengers × $860 per ticket =
            $27,520
          </li>
          <li className="text-gray-700">
            <span className="font-medium">Calculate coach revenue:</span> 298 passengers × $360 per ticket = $107,280
          </li>
          <li className="text-gray-700">
            <span className="font-medium">Add the revenues together:</span> $27,520 + $107,280 = $134,800
          </li>
        </ol>
      </div>

      <div className="relative h-20 bg-gradient-to-r from-green-100 to-green-200 rounded-lg border border-green-300 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-2xl font-bold text-green-800">
            ${animationComplete ? totalRevenue.toLocaleString() : totalRevenue.toLocaleString()}
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 h-1 bg-green-500"
          style={{
            width: `${(totalRevenue / 134800) * 100}%`,
            transition: "width 0.5s ease-out",
          }}
        ></div>
      </div>
    </div>
  )
}
