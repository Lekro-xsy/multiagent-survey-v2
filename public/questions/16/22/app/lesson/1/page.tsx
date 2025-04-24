"use client"

import { useState } from "react"
import Image from "next/image"
import { LessonLayout } from "@/components/lesson-layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Page1() {
  const [calculatorCount, setCalculatorCount] = useState(0)
  const [radioCount, setRadioCount] = useState(0)
  const [showCounts, setShowCounts] = useState(false)

  const handleViewSales = () => {
    setShowCounts(true)

    // Animate the counters
    let calcCount = 0
    let radCount = 0

    const calcInterval = setInterval(() => {
      if (calcCount < 12) {
        calcCount++
        setCalculatorCount(calcCount)
      } else {
        clearInterval(calcInterval)
      }
    }, 200)

    const radInterval = setInterval(() => {
      if (radCount < 16) {
        radCount++
        setRadioCount(radCount)
      } else {
        clearInterval(radInterval)
      }
    }, 150)
  }

  return (
    <LessonLayout pageNumber={1} totalPages={9} title="💼 Selling Calculators and Radios!">
      <div className="space-y-8">
        <div className="relative mx-auto h-64 w-full overflow-hidden rounded-xl bg-gray-100 md:h-80">
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            <Image
              src="/mall-electronics-booth.png"
              alt="Salesman at a mall booth with calculators and pocket radios"
              width={800}
              height={320}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <Card className="p-6">
          <h2 className="text-2xl font-bold text-teal-700">The Salesman's Story</h2>

          <div className="mt-4 space-y-4 text-lg">
            <p>
              Each morning, a salesman earns a commission of{" "}
              <span className="font-semibold text-emerald-600">$3.15</span> for every item he sells.
            </p>
            <p>
              Today, he sold <span className="font-semibold text-emerald-600">12 calculators</span> and{" "}
              <span className="font-semibold text-emerald-600">16 pocket radios</span>.
            </p>
            <p className="font-semibold">How much commission did he earn?</p>
          </div>

          {showCounts ? (
            <div className="mt-6 flex flex-col items-center gap-4 rounded-lg bg-teal-50 p-4 sm:flex-row sm:justify-center">
              <div className="flex flex-col items-center">
                <span className="text-sm font-medium text-teal-700">Calculators Sold</span>
                <div className="mt-1 flex h-12 w-16 items-center justify-center rounded-md bg-white text-2xl font-bold text-teal-700 shadow-sm">
                  {calculatorCount}
                </div>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-sm font-medium text-teal-700">Pocket Radios Sold</span>
                <div className="mt-1 flex h-12 w-16 items-center justify-center rounded-md bg-white text-2xl font-bold text-teal-700 shadow-sm">
                  {radioCount}
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-6 flex justify-center">
              <Button onClick={handleViewSales} className="bg-emerald-600 hover:bg-emerald-700">
                View Sales
              </Button>
            </div>
          )}
        </Card>

        <div className="rounded-lg bg-blue-50 p-4 text-blue-800">
          <h3 className="font-semibold">Think About It:</h3>
          <p>What mathematical operations will you need to use to solve this problem?</p>
        </div>
      </div>
    </LessonLayout>
  )
}
