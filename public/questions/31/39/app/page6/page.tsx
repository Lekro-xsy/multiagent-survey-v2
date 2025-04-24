"use client"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Page6() {
  const [showAnimation, setShowAnimation] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(0)

  const startAnimation = () => {
    setShowAnimation(true)
    setCurrentMonth(0)

    const interval = setInterval(() => {
      setCurrentMonth((prev) => {
        if (prev >= 13) {
          clearInterval(interval)
          return prev
        }
        return prev + 1
      })
    }, 500)
  }

  const resetAnimation = () => {
    setShowAnimation(false)
    setCurrentMonth(0)
  }

  return (
    <PageLayout title="🎯 Let's Check Your Solution!" pageNumber={6} totalPages={9} prevPage="/page5" nextPage="/page7">
      <div className="space-y-8">
        <div className="rounded-lg bg-blue-50 p-6">
          <h2 className="mb-4 text-xl font-semibold text-blue-800">Complete Solution:</h2>

          <div className="mb-6 space-y-4 rounded-lg bg-white p-4 shadow-sm">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-blue-700">The Equation:</h3>
              <p className="text-lg">50 × x = 650</p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-blue-700">Step-by-Step Solution:</h3>
              <div className="space-y-2 pl-4">
                <p>Step 1: Write the equation using the monthly saving rate and target amount.</p>
                <p className="pl-4">50 × x = 650</p>
                <p>Step 2: Solve for x by dividing both sides by 50.</p>
                <p className="pl-4">x = 650 ÷ 50</p>
                <p>Step 3: Calculate the result.</p>
                <p className="pl-4">x = 13</p>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-blue-700">Final Answer:</h3>
              <p className="text-lg font-medium text-green-700">You need to save for 13 months to buy the subwoofer.</p>
            </div>
          </div>

          <div className="rounded-lg bg-yellow-50 p-4">
            <h3 className="mb-2 font-semibold text-yellow-800">Mathematical Insight:</h3>
            <p className="text-yellow-700">
              This problem uses a linear equation where the rate of change (saving rate) is constant. The solution
              represents the point where your savings equal or exceed the target amount.
            </p>
          </div>
        </div>

        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-blue-600 p-4 text-center text-white">
              <h3 className="text-lg font-semibold">Visual Recap</h3>
              <p>Watch your savings grow month by month until you can buy the subwoofer!</p>
            </div>

            <div className="p-6">
              {showAnimation ? (
                <div className="space-y-6">
                  <div className="flex items-center justify-between rounded-lg bg-blue-50 p-4">
                    <div>
                      <p className="text-lg font-medium">Month: {currentMonth}</p>
                      <p className="text-lg">Savings: ${currentMonth * 50}</p>
                    </div>
                    <div>
                      <p className="text-lg">Target: $650</p>
                      <p className="text-lg">Remaining: ${Math.max(0, 650 - currentMonth * 50)}</p>
                    </div>
                  </div>

                  <div className="h-8 w-full overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full bg-blue-600 transition-all duration-500"
                      style={{ width: `${Math.min(100, ((currentMonth * 50) / 650) * 100)}%` }}
                    ></div>
                  </div>

                  {currentMonth >= 13 && (
                    <div className="rounded-lg bg-green-100 p-4 text-center">
                      <p className="text-lg font-bold text-green-700">Congratulations! 🎉</p>
                      <p className="text-green-700">After 13 months, you've saved $650 and can buy your subwoofer!</p>
                    </div>
                  )}

                  <div className="flex justify-center">
                    <Button
                      variant="outline"
                      onClick={resetAnimation}
                      className="border-blue-300 text-blue-700 hover:bg-blue-100"
                    >
                      Reset Animation
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <Button onClick={startAnimation} className="bg-blue-600 px-6 py-2 hover:bg-blue-700">
                    Start Animation
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  )
}
