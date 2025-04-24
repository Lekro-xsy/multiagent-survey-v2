"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"

interface PageThreeProps {
  onNext: () => void
}

export function PageThree({ onNext }: PageThreeProps) {
  const [hours, setHours] = useState(3)
  const rate = 13.8 // miles per hour
  const distance = hours * rate

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-purple-600">
        🔗 Understanding the Relationship Between Time and Distance
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">The Proportional Relationship</h2>
          <p className="mb-4">
            When a cyclist rides at a constant speed, the relationship between time and distance is{" "}
            <strong>proportional</strong>.
          </p>
          <p className="mb-4">
            This means that if the time increases by a certain factor, the distance will increase by the same factor.
          </p>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <p className="font-medium text-purple-800">If 3 hours gives 41.4 miles, then:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-purple-700">
              <li>1 hour gives 41.4 ÷ 3 = 13.8 miles</li>
              <li>2 hours gives 13.8 × 2 = 27.6 miles</li>
              <li>7 hours gives 13.8 × 7 = 96.6 miles</li>
            </ul>
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Visualize the Relationship</h2>
            <p className="mb-4">Move the slider to see how distance changes with time:</p>

            <div className="space-y-4">
              <div className="flex justify-between text-sm text-gray-500">
                <span>0 hours</span>
                <span>10 hours</span>
              </div>
              <Slider value={[hours]} min={0} max={10} step={0.1} onValueChange={(value) => setHours(value[0])} />
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">Time: {hours.toFixed(1)} hours</span>
                <span className="text-lg font-medium">Distance: {distance.toFixed(1)} miles</span>
              </div>
            </div>
          </Card>

          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="relative h-20">
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-300"></div>
              <div className="absolute top-0 left-0 h-4 w-1 bg-gray-500"></div>
              <div className="absolute top-0 left-[30%] h-4 w-1 bg-gray-500"></div>
              <div className="absolute top-0 left-[70%] h-4 w-1 bg-gray-500"></div>
              <div className="absolute top-6 left-0 text-xs">0 hours</div>
              <div className="absolute top-6 left-[28%] text-xs">3 hours</div>
              <div className="absolute top-6 left-[68%] text-xs">7 hours</div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300"></div>
              <div className="absolute bottom-0 left-0 h-4 w-1 bg-gray-500"></div>
              <div className="absolute bottom-0 left-[30%] h-4 w-1 bg-gray-500"></div>
              <div className="absolute bottom-0 left-[70%] h-4 w-1 bg-gray-500"></div>
              <div className="absolute bottom-6 right-0 text-xs">Distance (miles)</div>
              <div className="absolute bottom-6 left-0 text-xs">0 miles</div>
              <div className="absolute bottom-6 left-[28%] text-xs">41.4 miles</div>
              <div className="absolute bottom-6 left-[68%] text-xs">96.6 miles</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button onClick={onNext} className="bg-purple-600 hover:bg-purple-700">
          Continue to Setting Up the Equation
        </Button>
      </div>
    </div>
  )
}
