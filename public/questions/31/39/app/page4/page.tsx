"use client"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function Page4() {
  const [monthlyRate, setMonthlyRate] = useState("")
  const [months, setMonths] = useState("")
  const [totalAmount, setTotalAmount] = useState("")
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const checkEquation = () => {
    const isRateCorrect = monthlyRate.trim() === "50"
    const isMonthsCorrect = months.trim() === "x"
    const isTotalCorrect = totalAmount.trim() === "650"

    setIsCorrect(isRateCorrect && isMonthsCorrect && isTotalCorrect)
  }

  const resetForm = () => {
    setMonthlyRate("")
    setMonths("")
    setTotalAmount("")
    setIsCorrect(null)
  }

  return (
    <PageLayout title="🧮 Setting Up the Equation" pageNumber={4} totalPages={9} prevPage="/page3" nextPage="/page5">
      <div className="space-y-8">
        <div className="rounded-lg bg-blue-50 p-6">
          <h2 className="mb-4 text-xl font-semibold text-blue-800">Building the Mathematical Model:</h2>
          <p className="mb-6 text-lg">
            Let's set up an equation to find how many months it will take to save enough money.
          </p>

          <div className="mb-6 rounded-lg bg-white p-4 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold text-blue-700">Think About It:</h3>
            <p className="mb-4">Total savings = Monthly saving × Number of months</p>
            <p className="font-medium">
              If we call the number of months <span className="font-bold text-blue-600">x</span>, then:
            </p>
          </div>

          <div className="mb-6">
            <h3 className="mb-4 text-center text-lg font-semibold">Fill in the blanks to form the equation:</h3>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xl">
              <Input
                value={monthlyRate}
                onChange={(e) => setMonthlyRate(e.target.value)}
                className="w-16 text-center text-lg"
                placeholder="?"
              />
              <span className="mx-2">×</span>
              <Input
                value={months}
                onChange={(e) => setMonths(e.target.value)}
                className="w-16 text-center text-lg"
                placeholder="?"
              />
              <span className="mx-2">=</span>
              <Input
                value={totalAmount}
                onChange={(e) => setTotalAmount(e.target.value)}
                className="w-16 text-center text-lg"
                placeholder="?"
              />
            </div>
          </div>

          {isCorrect !== null && (
            <Card className={isCorrect ? "bg-green-50" : "bg-red-50"}>
              <CardContent className="p-4 text-center">
                {isCorrect ? (
                  <div>
                    <p className="mb-2 text-lg font-medium text-green-700">Correct! Your equation is: 50 × x = 650</p>
                    <p className="text-green-600">Now we need to solve for x to find the number of months.</p>
                  </div>
                ) : (
                  <p className="text-lg font-medium text-red-700">Not quite right. Try again!</p>
                )}
              </CardContent>
            </Card>
          )}

          <div className="mt-6 flex justify-center space-x-4">
            <Button onClick={checkEquation} className="bg-blue-600 hover:bg-blue-700">
              Check Equation
            </Button>
            <Button variant="outline" onClick={resetForm} className="border-blue-300 text-blue-700 hover:bg-blue-100">
              Reset
            </Button>
          </div>
        </div>

        <div className="rounded-lg bg-yellow-50 p-4">
          <h3 className="mb-2 font-semibold text-yellow-800">Tip:</h3>
          <p className="text-yellow-700">
            If you know the total and the rate per month, use division to find the time.
          </p>

          <div className="mt-4 rounded-lg bg-purple-50 p-4">
            <h3 className="mb-2 font-semibold text-purple-800">Solving for x:</h3>
            <div className="space-y-2 text-purple-700">
              <p>To solve for x, we need to isolate it on one side of the equation:</p>
              <p className="ml-4">50 × x = 650</p>
              <p className="ml-4">x = 650 ÷ 50</p>
              <p className="ml-4">x = 13</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
