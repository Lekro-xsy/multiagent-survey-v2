"use client"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent } from "@/components/ui/card"

export default function Page3() {
  const [months, setMonths] = useState(1)
  const maxMonths = 15

  const calculateSavings = (months: number) => {
    return months * 50
  }

  const savings = calculateSavings(months)
  const targetReached = savings >= 650

  return (
    <PageLayout
      title="📈 How Does Your Savings Grow?"
      pageNumber={3}
      totalPages={9}
      prevPage="/page2"
      nextPage="/page4"
    >
      <div className="space-y-8">
        <div className="rounded-lg bg-blue-50 p-6">
          <h2 className="mb-4 text-xl font-semibold text-blue-800">Visualizing Your Savings:</h2>
          <p className="mb-4 text-lg">Move the slider to see how your savings grow month by month.</p>

          <div className="mb-6">
            <div className="mb-2 flex justify-between">
              <span>Months: {months}</span>
              <span>Savings: ${savings}</span>
            </div>
            <Slider
              value={[months]}
              min={1}
              max={maxMonths}
              step={1}
              onValueChange={(value) => setMonths(value[0])}
              className="py-4"
            />
          </div>

          {/* Graph visualization */}
          <div className="relative mb-4 h-64 w-full rounded-lg bg-white p-4">
            <div className="absolute bottom-0 left-0 h-full w-full">
              {/* Y-axis */}
              <div className="absolute bottom-8 left-12 h-[calc(100%-32px)] w-px bg-gray-300"></div>
              {/* X-axis */}
              <div className="absolute bottom-8 left-12 h-px w-[calc(100%-48px)] bg-gray-300"></div>

              {/* Y-axis labels */}
              <div className="absolute bottom-8 left-0 -translate-x-2 -translate-y-1/2 text-xs">$0</div>
              <div className="absolute bottom-1/2 left-0 -translate-x-2 -translate-y-1/2 text-xs">$325</div>
              <div className="absolute bottom-[calc(100%-24px)] left-0 -translate-x-2 -translate-y-1/2 text-xs">
                $650
              </div>

              {/* X-axis labels */}
              <div className="absolute bottom-4 left-12 -translate-x-1/2 text-xs">0</div>
              <div className="absolute bottom-4 left-1/4 -translate-x-1/2 text-xs">3</div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs">6</div>
              <div className="absolute bottom-4 left-3/4 -translate-x-1/2 text-xs">9</div>
              <div className="absolute bottom-4 right-12 -translate-x-1/2 text-xs">13</div>

              {/* Target line */}
              <div className="absolute bottom-[calc((650/650)*(100%-32px)+8px)] left-12 h-px w-[calc(100%-48px)] border border-dashed border-red-400"></div>
              <div className="absolute bottom-[calc((650/650)*(100%-32px)+8px)] right-8 -translate-y-1/2 text-xs text-red-500">
                Target: $650
              </div>

              {/* Savings line */}
              <div
                className="absolute bottom-8 left-12 h-[calc((savings/650)*(100%-32px))] w-1 bg-blue-500"
                style={{
                  height: `calc((${savings}/650)*(100% - 32px))`,
                  transition: "height 0.3s ease-out",
                }}
              ></div>

              {/* Current point */}
              <div
                className="absolute left-[calc(((months-1)/13)*(100%-48px)+12px)] z-10 h-2 w-2 rounded-full bg-blue-600"
                style={{
                  bottom: `calc((${savings}/650)*(100% - 32px) + 7px)`,
                  transition: "bottom 0.3s ease-out, left 0.3s ease-out",
                }}
              ></div>

              {/* Line to current point */}
              <div
                className="absolute bottom-8 left-12 h-px bg-blue-400"
                style={{
                  width: `calc(((${months}-1)/13)*(100% - 48px))`,
                  transition: "width 0.3s ease-out",
                }}
              ></div>
            </div>
          </div>

          <div className="text-center text-sm text-gray-600">X-axis: Months | Y-axis: Savings ($)</div>
        </div>

        <Card className="bg-green-50">
          <CardContent className="p-6">
            <h3 className="mb-3 text-lg font-semibold text-green-800">Key Concept:</h3>
            <p className="text-green-700">
              Saving a constant amount each time leads to a <strong>linear growth</strong> in your total savings. This
              means your savings increase at a steady rate over time.
            </p>

            {targetReached && (
              <div className="mt-4 rounded-lg bg-green-100 p-3 text-center">
                <p className="font-medium text-green-800">You've reached your target of $650 after {months} months!</p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="rounded-lg bg-yellow-50 p-4">
          <h3 className="mb-2 font-semibold text-yellow-800">Observation:</h3>
          <p className="text-yellow-700">
            Notice how the graph forms a straight line. This is because you're adding the same amount ($50) each month.
            The slope of this line represents your monthly saving rate.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}
