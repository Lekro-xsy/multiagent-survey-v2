"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

export default function PageThree() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null)

  // Create an array of rows from 25 down to 1
  const rows = Array.from({ length: 25 }, (_, i) => 25 - i)

  return (
    <div className="space-y-6">
      <h2 className="text-center text-2xl font-bold text-blue-800">📊 What's the Pattern?</h2>

      <div className="flex flex-col items-center justify-center">
        <Card className="w-full max-w-2xl p-4">
          <h3 className="mb-4 text-center text-xl font-semibold text-blue-700">Visualizing the Staircase Pattern</h3>

          <div className="mb-6 flex justify-center">
            <div className="space-y-1">
              {rows.map((count, index) => (
                <div
                  key={index}
                  className="flex items-center"
                  onMouseEnter={() => setHoveredRow(index)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <div className="mr-3 w-10 text-right font-medium">Row {25 - index}:</div>
                  <div className="flex">
                    {Array.from({ length: count }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-4 w-4 border border-gray-300 ${
                          hoveredRow === index ? "bg-blue-500" : "bg-blue-200"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="ml-3 font-medium">{hoveredRow === index && `${count} cartons`}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg bg-yellow-50 p-4">
            <h4 className="mb-2 font-semibold text-yellow-800">Key Pattern:</h4>
            <p>
              This is a sequence of consecutive numbers in reverse order:
              <br />
              <span className="font-medium">25, 24, 23, ..., 3, 2, 1</span>
            </p>
            <p className="mt-2">We're counting down by 1 from the bottom row to the top.</p>
          </div>
        </Card>

        <div className="mt-6 w-full max-w-2xl rounded-lg bg-green-50 p-4">
          <h4 className="mb-2 font-semibold text-green-800">Helpful Tip:</h4>
          <p>For the sum of the first n integers, we can use the formula:</p>
          <div className="my-3 flex justify-center">
            <div className="rounded-lg bg-white p-3 text-center text-xl font-medium">
              Sum = <span className="text-blue-700">n(n+1)/2</span>
            </div>
          </div>
          <p className="text-center">Where n is the number of terms (in our case, n = 25)</p>
        </div>
      </div>
    </div>
  )
}
