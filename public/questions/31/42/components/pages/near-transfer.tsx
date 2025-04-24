"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Check, RefreshCw } from "lucide-react"

export function NearTransfer() {
  const [businessRevenue, setBusinessRevenue] = useState("")
  const [economyRevenue, setEconomyRevenue] = useState("")
  const [totalRevenue, setTotalRevenue] = useState("")
  const [workShown, setWorkShown] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const handleSubmit = () => {
    // Check if the answers are correct
    const businessRevenueCorrect = Number.parseFloat(businessRevenue.replace(/[^0-9.]/g, "")) === 18000
    const economyRevenueCorrect = Number.parseFloat(economyRevenue.replace(/[^0-9.]/g, "")) === 72000
    const totalRevenueCorrect = Number.parseFloat(totalRevenue.replace(/[^0-9.]/g, "")) === 90000

    // Check if work shown includes calculations
    const workCorrect = workShown.includes("18000") && workShown.includes("72000") && workShown.includes("90000")

    setIsCorrect(businessRevenueCorrect && economyRevenueCorrect && totalRevenueCorrect && workCorrect)
    setSubmitted(true)
  }

  const resetForm = () => {
    setBusinessRevenue("")
    setEconomyRevenue("")
    setTotalRevenue("")
    setWorkShown("")
    setSubmitted(false)
    setIsCorrect(false)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold flex items-center">
          <RefreshCw className="mr-2 h-6 w-6" /> Another Flight, Another Calculation!
        </h2>
        <p className="text-gray-600">Apply what you've learned to solve a similar problem.</p>
      </div>

      <Card className="p-6 bg-gradient-to-b from-blue-50 to-sky-50 border-sky-100">
        <div className="space-y-4">
          <h3 className="font-semibold text-xl text-sky-800">New Scenario:</h3>
          <p className="text-lg">
            A flight has 200 seats: 20 in business class at $900 each, and the rest in economy at $400 each.
          </p>
          <p className="text-lg font-medium">How much revenue if the plane is full?</p>
        </div>
      </Card>

      <Card className="p-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="font-medium">Business class revenue:</label>
            <Input
              value={businessRevenue}
              onChange={(e) => setBusinessRevenue(e.target.value)}
              placeholder="$"
              disabled={submitted}
              className={submitted ? (isCorrect ? "border-green-500" : "border-red-500") : ""}
            />
          </div>

          <div className="space-y-2">
            <label className="font-medium">Economy revenue:</label>
            <Input
              value={economyRevenue}
              onChange={(e) => setEconomyRevenue(e.target.value)}
              placeholder="$"
              disabled={submitted}
              className={submitted ? (isCorrect ? "border-green-500" : "border-red-500") : ""}
            />
          </div>

          <div className="space-y-2">
            <label className="font-medium">Total revenue:</label>
            <Input
              value={totalRevenue}
              onChange={(e) => setTotalRevenue(e.target.value)}
              placeholder="$"
              disabled={submitted}
              className={submitted ? (isCorrect ? "border-green-500" : "border-red-500") : ""}
            />
          </div>

          <div className="space-y-2">
            <label className="font-medium">Show your work:</label>
            <Textarea
              value={workShown}
              onChange={(e) => setWorkShown(e.target.value)}
              placeholder="Show your step-by-step calculations here..."
              rows={4}
              disabled={submitted}
              className={submitted ? (isCorrect ? "border-green-500" : "border-red-500") : ""}
            />
          </div>

          <div className="flex justify-end space-x-4">
            {submitted ? (
              <Button onClick={resetForm}>Try Again</Button>
            ) : (
              <Button onClick={handleSubmit}>Submit</Button>
            )}
          </div>
        </div>
      </Card>

      {submitted && isCorrect && (
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="font-semibold text-green-800 flex items-center">
            <Check className="h-5 w-5 mr-2" /> Excellent!
          </h3>
          <p className="text-green-700 mt-1">You've correctly applied the same model to a new problem. Great job!</p>
          <div className="mt-4 bg-white p-3 rounded-lg border border-green-100">
            <h4 className="font-medium text-green-800">Solution:</h4>
            <ul className="list-disc list-inside text-green-700 mt-1 space-y-1">
              <li>Business class revenue: 20 × $900 = $18,000</li>
              <li>Economy revenue: 180 × $400 = $72,000</li>
              <li>Total revenue: $18,000 + $72,000 = $90,000</li>
            </ul>
          </div>
        </div>
      )}

      {submitted && !isCorrect && (
        <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
          <h3 className="font-semibold text-amber-800">Try Again</h3>
          <p className="text-amber-700 mt-1">Check your calculations carefully. Remember to:</p>
          <ul className="list-disc list-inside text-amber-700 mt-1 space-y-1">
            <li>Calculate how many economy seats there are (200 - 20 = 180)</li>
            <li>Multiply each seat type by its price</li>
            <li>Add the two revenues together</li>
          </ul>
        </div>
      )}

      {!submitted && (
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h3 className="font-semibold text-blue-800">Hint</h3>
          <p className="text-blue-700 mt-1">
            This problem follows the same structure as the airline problem we just solved. Break it down into the same
            steps.
          </p>
        </div>
      )}
    </div>
  )
}
