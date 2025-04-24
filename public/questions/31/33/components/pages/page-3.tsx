"use client"

import { useState } from "react"
import { BarChartIcon as ChartSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Page3() {
  const [selectedOunce, setSelectedOunce] = useState<number | null>(null)

  const calculateCost = (ounces: number) => {
    if (ounces <= 0) return 0
    return 0.43 + Math.max(0, ounces - 1) * 0.29
  }

  const ounces = [1, 2, 3, 4, 5]

  return (
    <div className="space-y-6">
      <Card className="border-2 border-teal-100 shadow-md">
        <CardHeader className="bg-gradient-to-r from-teal-50 to-emerald-50">
          <CardTitle className="flex items-center text-2xl text-teal-800">
            <ChartSquare className="mr-2 h-6 w-6 text-teal-600" />
            How the Price Grows
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="mb-6 text-lg">
            Let's visualize how the shipping cost increases as the package weight increases. Click on each weight to see
            the cost breakdown.
          </p>

          <div className="mb-8 grid grid-cols-5 gap-4">
            {ounces.map((ounce) => (
              <Button
                key={ounce}
                variant={selectedOunce === ounce ? "default" : "outline"}
                className={selectedOunce === ounce ? "bg-teal-600 hover:bg-teal-700" : ""}
                onClick={() => setSelectedOunce(ounce)}
              >
                {ounce} {ounce === 1 ? "ounce" : "ounces"}
              </Button>
            ))}
          </div>

          {selectedOunce !== null && (
            <div className="mb-6 rounded-lg bg-teal-50 p-6">
              <h3 className="mb-4 text-center text-xl font-medium text-teal-800">
                Cost for {selectedOunce} {selectedOunce === 1 ? "ounce" : "ounces"}
              </h3>

              <div className="mb-6 flex items-end justify-center space-x-2">
                {Array.from({ length: selectedOunce }).map((_, index) => (
                  <div
                    key={index}
                    className={`flex h-32 w-16 flex-col justify-end rounded-t-lg ${
                      index === 0 ? "bg-teal-600" : "bg-teal-400"
                    }`}
                  >
                    <div className="p-2 text-center text-white">${index === 0 ? "0.43" : "0.29"}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 text-center">
                {selectedOunce === 1 ? (
                  <p className="text-lg">Cost = $0.43 (first ounce)</p>
                ) : (
                  <>
                    <p className="text-lg">
                      Cost = $0.43 (first ounce) + ${(0.29 * (selectedOunce - 1)).toFixed(2)} ({selectedOunce - 1}{" "}
                      additional {selectedOunce - 1 === 1 ? "ounce" : "ounces"})
                    </p>
                    <p className="text-lg">Cost = $0.43 + $0.29 × {selectedOunce - 1}</p>
                  </>
                )}
                <p className="text-xl font-bold text-teal-700">
                  Total Cost = ${calculateCost(selectedOunce).toFixed(2)}
                </p>
              </div>
            </div>
          )}

          <div className="rounded-lg border-2 border-teal-200 bg-teal-50 p-4">
            <h3 className="mb-4 text-center text-lg font-medium text-teal-800">Key Concept</h3>
            <div className="space-y-4">
              <p className="text-center text-lg">The shipping cost has two components:</p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <h4 className="mb-2 font-medium text-teal-700">Fixed Cost</h4>
                  <p>$0.43 for the first ounce</p>
                  <p className="mt-2 text-sm text-gray-600">
                    This cost is always present, regardless of package weight
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <h4 className="mb-2 font-medium text-teal-700">Variable Cost</h4>
                  <p>$0.29 for each additional ounce</p>
                  <p className="mt-2 text-sm text-gray-600">
                    This cost increases with each additional ounce after the first
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
