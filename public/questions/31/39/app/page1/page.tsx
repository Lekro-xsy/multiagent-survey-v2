"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PageLayout } from "@/components/page-layout"

export default function Page1() {
  const [currentSavings, setCurrentSavings] = useState(0)
  const [months, setMonths] = useState(0)
  const [showAnimation, setShowAnimation] = useState(false)

  const handleSaveMoney = () => {
    if (currentSavings < 650) {
      setCurrentSavings((prev) => Math.min(prev + 50, 650))
      setMonths((prev) => prev + 1)
    }

    if (currentSavings + 50 >= 650) {
      setShowAnimation(true)
    }
  }

  const resetSavings = () => {
    setCurrentSavings(0)
    setMonths(0)
    setShowAnimation(false)
  }

  return (
    <PageLayout title="🎵 Dreaming of Deep Bass!" pageNumber={1} totalPages={9} nextPage="/page2">
      <div className="flex flex-col items-center space-y-8">
        <div className="relative h-64 w-full overflow-hidden rounded-lg bg-gray-100">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Image
                src="/premium-subwoofer-price.png"
                alt="Subwoofer with $650 price tag"
                width={300}
                height={200}
                className="mx-auto rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="w-full rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-blue-800">The Situation:</h2>
          <p className="mb-3 text-lg">
            You want to buy a subwoofer that costs <span className="font-bold text-blue-700">$650</span>.
          </p>
          <p className="mb-3 text-lg">
            You can save <span className="font-bold text-blue-700">$50 per month</span>.
          </p>
          <p className="mb-6 text-lg">How long will it take to save enough?</p>

          <div className="mb-6 rounded-lg bg-blue-50 p-4">
            <div className="mb-2 flex justify-between">
              <span className="font-medium">Current Savings:</span>
              <span className="font-bold text-blue-700">${currentSavings}</span>
            </div>
            <div className="mb-4 h-4 w-full rounded-full bg-gray-200">
              <div
                className="h-4 rounded-full bg-blue-600 transition-all duration-500"
                style={{ width: `${(currentSavings / 650) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between">
              <span>$0</span>
              <span>$650</span>
            </div>
            <div className="mt-2 text-center">
              <span className="font-medium">Months passed: {months}</span>
            </div>
          </div>

          {showAnimation && (
            <div className="mb-6 rounded-lg bg-green-100 p-4 text-center text-green-800">
              <p className="text-lg font-bold">Congratulations! 🎉</p>
              <p>You've saved enough to buy the subwoofer after {months} months!</p>
            </div>
          )}

          <div className="flex justify-center space-x-4">
            <Button
              onClick={handleSaveMoney}
              disabled={currentSavings >= 650}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Save $50
            </Button>
            <Button
              variant="outline"
              onClick={resetSavings}
              className="border-blue-300 text-blue-700 hover:bg-blue-100"
            >
              Reset
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
