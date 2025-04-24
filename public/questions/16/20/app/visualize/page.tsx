"use client"

import { useState } from "react"
import PageLayout from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function VisualizePage() {
  const [gallonsClicked, setGallonsClicked] = useState<number[]>([])
  const totalGallons = 5 // We'll show 5 gallons for visualization

  const handleGallonClick = (index: number) => {
    if (gallonsClicked.includes(index)) {
      setGallonsClicked(gallonsClicked.filter((i) => i !== index))
    } else {
      setGallonsClicked([...gallonsClicked, index])
    }
  }

  const resetGallons = () => {
    setGallonsClicked([])
  }

  // Calculate miles per gallon (simplified for visualization)
  const mpg = 32.3

  return (
    <PageLayout title="What Does 'Miles Per Gallon' Mean?" emoji="🔍">
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <p className="text-lg">
            Miles per gallon (MPG) tells us how far a car can travel on a single gallon of gas. It's like asking:{" "}
            <span className="font-bold">For each gallon of gas, how many miles can I drive?</span>
          </p>
        </div>

        <div className="bg-sky-50 p-6 rounded-lg border border-sky-200">
          <h2 className="text-xl font-bold text-sky-800 mb-4">Visualizing Miles Per Gallon</h2>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center text-2xl">⛽</div>
              <span className="text-2xl">=</span>
              <div className="h-8 bg-sky-600 rounded-lg flex items-center justify-center px-3 text-white">? miles</div>
            </div>

            <p className="mb-6 text-center max-w-md">
              Click on each gallon below to see how many miles it can power the car to travel.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {Array.from({ length: totalGallons }).map((_, index) => (
                <div key={index} className="relative">
                  <button
                    onClick={() => handleGallonClick(index)}
                    className={`w-20 h-20 rounded-lg flex items-center justify-center text-2xl transition-all ${
                      gallonsClicked.includes(index) ? "bg-yellow-500" : "bg-yellow-300"
                    }`}
                  >
                    ⛽
                  </button>
                  {gallonsClicked.includes(index) && (
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-sky-600 text-white px-3 py-1 rounded-lg whitespace-nowrap">
                      {mpg.toFixed(1)} miles
                    </div>
                  )}
                </div>
              ))}
            </div>

            <Button onClick={resetGallons} variant="outline" size="sm">
              Reset Gallons
            </Button>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-bold mb-3">Key Insight:</h3>
            <p>
              To find miles per gallon, we need to divide the <span className="font-bold">total miles</span> by the{" "}
              <span className="font-bold">total gallons</span>:
            </p>

            <div className="flex justify-center my-6">
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <div className="text-xl font-bold">
                  Miles per gallon (MPG) = <span className="text-sky-700">Total miles ÷ Total gallons</span>
                </div>
              </div>
            </div>

            <p>
              This gives us the <span className="font-bold">unit rate</span> - how many miles for each single gallon of
              gas.
            </p>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  )
}
