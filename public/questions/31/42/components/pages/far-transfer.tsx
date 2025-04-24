"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, Rocket } from "lucide-react"

export function FarTransfer() {
  const [vipRevenue, setVipRevenue] = useState("")
  const [regularRevenue, setRegularRevenue] = useState("")
  const [totalRevenue, setTotalRevenue] = useState("")
  const [expression, setExpression] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const handleSubmit = () => {
    // Check if the answers are correct
    const vipRevenueCorrect = Number.parseFloat(vipRevenue.replace(/[^0-9.]/g, "")) === 20000
    const regularRevenueCorrect = Number.parseFloat(regularRevenue.replace(/[^0-9.]/g, "")) === 32000
    const totalRevenueCorrect = Number.parseFloat(totalRevenue.replace(/[^0-9.]/g, "")) === 52000

    // Check if expression includes the correct structure
    const expressionCorrect =
      expression.includes("(100") &&
      expression.includes("200") &&
      expression.includes("400") &&
      expression.includes("80") &&
      expression.includes("+")

    setIsCorrect(vipRevenueCorrect && regularRevenueCorrect && totalRevenueCorrect && expressionCorrect)
    setSubmitted(true)
  }

  const resetForm = () => {
    setVipRevenue("")
    setRegularRevenue("")
    setTotalRevenue("")
    setExpression("")
    setSubmitted(false)
    setIsCorrect(false)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold flex items-center">
          <Rocket className="mr-2 h-6 w-6" /> Same Math, New Situation!
        </h2>
        <p className="text-gray-600">Apply the same model to a completely different context.</p>
      </div>

      <Card className="p-6 bg-gradient-to-b from-purple-50 to-indigo-50 border-indigo-100">
        <div className="space-y-4">
          <h3 className="font-semibold text-xl text-indigo-800">Concert Scenario:</h3>
          <p className="text-lg">
            A concert has 500 tickets: 100 VIP tickets at $200 each and the rest regular tickets at $80 each.
          </p>
          <p className="text-lg font-medium">How much revenue if all tickets are sold?</p>
        </div>
      </Card>

      <Card className="p-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="font-medium">Write the complete revenue expression:</label>
            <Input
              value={expression}
              onChange={(e) => setExpression(e.target.value)}
              placeholder="e.g., (100 × 200) + (400 × 80)"
              disabled={submitted}
              className={submitted ? (isCorrect ? "border-green-500" : "border-red-500") : ""}
            />
          </div>

          <div className="space-y-2">
            <label className="font-medium">VIP ticket revenue:</label>
            <Input
              value={vipRevenue}
              onChange={(e) => setVipRevenue(e.target.value)}
              placeholder="$"
              disabled={submitted}
              className={submitted ? (isCorrect ? "border-green-500" : "border-red-500") : ""}
            />
          </div>

          <div className="space-y-2">
            <label className="font-medium">Regular ticket revenue:</label>
            <Input
              value={regularRevenue}
              onChange={(e) => setRegularRevenue(e.target.value)}
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
            <Check className="h-5 w-5 mr-2" /> Excellent Transfer!
          </h3>
          <p className="text-green-700 mt-1">
            You've successfully applied the same mathematical model to a completely different context. This shows you
            understand the underlying structure!
          </p>
          <div className="mt-4 bg-white p-3 rounded-lg border border-green-100">
            <h4 className="font-medium text-green-800">Solution:</h4>
            <ul className="list-disc list-inside text-green-700 mt-1 space-y-1">
              <li>VIP ticket revenue: 100 × $200 = $20,000</li>
              <li>Regular ticket revenue: 400 × $80 = $32,000</li>
              <li>Total revenue: $20,000 + $32,000 = $52,000</li>
            </ul>
          </div>
        </div>
      )}

      {submitted && !isCorrect && (
        <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
          <h3 className="font-semibold text-amber-800">Try Again</h3>
          <p className="text-amber-700 mt-1">Check your calculations carefully. Remember to:</p>
          <ul className="list-disc list-inside text-amber-700 mt-1 space-y-1">
            <li>Calculate how many regular tickets there are (500 - 100 = 400)</li>
            <li>Multiply each ticket type by its price</li>
            <li>Add the two revenues together</li>
          </ul>
        </div>
      )}

      {!submitted && (
        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
          <h3 className="font-semibold text-indigo-800">Key Insight</h3>
          <p className="text-indigo-700 mt-1">
            Notice how the same mathematical model applies to different real-world situations. The structure is
            identical:
          </p>
          <ul className="list-disc list-inside text-indigo-700 mt-1 space-y-1">
            <li>Two different price categories</li>
            <li>Calculate revenue for each category</li>
            <li>Add them together for the total</li>
          </ul>
        </div>
      )}
    </div>
  )
}
