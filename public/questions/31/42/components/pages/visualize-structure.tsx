"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { BarChart } from "lucide-react"

export function VisualizeStructure() {
  const [firstClassPassengers, setFirstClassPassengers] = useState(32)
  const [coachPassengers, setCoachPassengers] = useState(298)
  const [firstClassRevenue, setFirstClassRevenue] = useState(0)
  const [coachRevenue, setCoachRevenue] = useState(0)
  const [totalRevenue, setTotalRevenue] = useState(0)
  const [animationComplete, setAnimationComplete] = useState(false)

  const firstClassPrice = 860
  const coachPrice = 360
  const maxFirstClass = 50
  const totalPassengers = 330

  useEffect(() => {
    // Calculate revenues
    const firstRev = firstClassPassengers * firstClassPrice
    const coachRev = coachPassengers * coachPrice

    // Animate the revenue counters
    let firstClassCounter = 0
    let coachCounter = 0
    let totalCounter = 0

    const interval = setInterval(() => {
      if (firstClassCounter < firstRev) {
        firstClassCounter = Math.min(firstClassCounter + 1000, firstRev)
        setFirstClassRevenue(firstClassCounter)
      }

      if (coachCounter < coachRev) {
        coachCounter = Math.min(coachCounter + 1000, coachRev)
        setCoachRevenue(coachCounter)
      }

      if (totalCounter < firstRev + coachRev) {
        totalCounter = Math.min(totalCounter + 2000, firstRev + coachRev)
        setTotalRevenue(totalCounter)
      }

      if (firstClassCounter === firstRev && coachCounter === coachRev && totalCounter === firstRev + coachRev) {
        clearInterval(interval)
        setAnimationComplete(true)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [firstClassPassengers, coachPassengers])

  const handleFirstClassChange = (value: number[]) => {
    const newFirstClass = value[0]
    setFirstClassPassengers(newFirstClass)
    setCoachPassengers(totalPassengers - newFirstClass)
    setAnimationComplete(false)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold flex items-center">
          <BarChart className="mr-2 h-6 w-6" /> How Does Revenue Build?
        </h2>
        <p className="text-gray-600">Visualize how the total revenue is composed of first-class and coach revenues.</p>
      </div>

      <Card className="p-6 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="space-y-8">
          <div className="space-y-2">
            <label className="font-medium">Adjust First Class Passengers (Coach will adjust automatically)</label>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium w-8">0</span>
              <Slider
                value={[firstClassPassengers]}
                max={maxFirstClass}
                step={1}
                onValueChange={handleFirstClassChange}
                className="flex-1"
              />
              <span className="text-sm font-medium w-8">{maxFirstClass}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>First Class: {firstClassPassengers}</span>
              <span>Coach: {coachPassengers}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-yellow-800">First Class Revenue</h3>
              <div className="flex items-end space-x-2">
                <div
                  className="bg-yellow-400 rounded-t w-full"
                  style={{
                    height: `${(firstClassRevenue / (firstClassPassengers * firstClassPrice)) * 200}px`,
                    maxHeight: "200px",
                    transition: "height 0.5s ease-out",
                  }}
                ></div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm">{firstClassPassengers} passengers</p>
                  <p className="text-sm">at ${firstClassPrice} each</p>
                </div>
                <p className="text-xl font-bold">${firstClassRevenue.toLocaleString()}</p>
              </div>
              <div className="text-sm text-gray-600 mt-2">
                {firstClassPassengers} × ${firstClassPrice} = $
                {(firstClassPassengers * firstClassPrice).toLocaleString()}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-blue-800">Coach Revenue</h3>
              <div className="flex items-end space-x-2">
                <div
                  className="bg-blue-400 rounded-t w-full"
                  style={{
                    height: `${(coachRevenue / (coachPassengers * coachPrice)) * 200}px`,
                    maxHeight: "200px",
                    transition: "height 0.5s ease-out",
                  }}
                ></div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm">{coachPassengers} passengers</p>
                  <p className="text-sm">at ${coachPrice} each</p>
                </div>
                <p className="text-xl font-bold">${coachRevenue.toLocaleString()}</p>
              </div>
              <div className="text-sm text-gray-600 mt-2">
                {coachPassengers} × ${coachPrice} = ${(coachPassengers * coachPrice).toLocaleString()}
              </div>
            </div>
          </div>

          <div className="bg-sky-50 p-4 rounded-lg border border-sky-100">
            <h3 className="font-semibold text-sky-800">Total Revenue</h3>
            <div className="flex justify-between items-center mt-2">
              <p className="text-lg">First Class + Coach</p>
              <p className="text-2xl font-bold">${totalRevenue.toLocaleString()}</p>
            </div>
            <div className="text-sm text-gray-600 mt-2">
              ${firstClassRevenue.toLocaleString()} + ${coachRevenue.toLocaleString()} = $
              {totalRevenue.toLocaleString()}
            </div>
          </div>
        </div>
      </Card>

      <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
        <h3 className="font-semibold text-indigo-800">Key Concept</h3>
        <p className="text-indigo-700 mt-1">Total revenue = First-class revenue + Coach revenue</p>
        <p className="text-indigo-600 mt-2">When calculating total revenue from different price categories, we:</p>
        <ol className="list-decimal list-inside text-indigo-600 mt-1 space-y-1">
          <li>Calculate the revenue for each category separately</li>
          <li>Add the category revenues together to find the total</li>
        </ol>
      </div>
    </div>
  )
}
