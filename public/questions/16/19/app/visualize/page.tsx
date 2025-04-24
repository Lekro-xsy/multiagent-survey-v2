"use client"

import { useState } from "react"
import PageLayout from "@/components/page-layout"
import { Slider } from "@/components/ui/slider"
import { useProgress } from "@/components/progress-provider"

export default function VisualizePage() {
  const { updateProgress } = useProgress()
  const [gallons, setGallons] = useState(1)
  const milesPerGallon = 24.6 // The answer we're working toward
  const totalMiles = 337
  const totalGallons = 13.7

  // Calculate miles based on gallons
  const miles = Math.round(gallons * milesPerGallon)

  // Update progress when user interacts with the slider
  const handleSliderChange = (value: number[]) => {
    setGallons(value[0])
    updateProgress("visualize", { interacted: true })
  }

  return (
    <PageLayout title="🔍 How Do Distance and Gasoline Relate?">
      <div className="flex flex-col space-y-8">
        <div className="text-center">
          <p className="text-lg">
            Each gallon of gas allows the car to travel a certain distance. Let's visualize how the total distance of
            337 miles relates to the 13.7 gallons used.
          </p>
        </div>

        <div className="rounded-lg bg-gray-100 p-6">
          <h3 className="mb-4 text-center text-xl font-semibold">Visualizing Miles Per Gallon</h3>

          <div className="mb-8 flex flex-col items-center">
            <div className="mb-2 w-full text-center">
              <span className="text-lg font-medium">Gallons Used: {gallons.toFixed(1)}</span>
            </div>
            <Slider
              value={[gallons]}
              min={0}
              max={13.7}
              step={0.1}
              onValueChange={handleSliderChange}
              className="w-full max-w-md"
            />
          </div>

          <div className="relative mb-6 h-20 w-full overflow-hidden rounded-lg bg-white">
            {/* Gas tank visualization */}
            <div
              className="absolute bottom-0 left-0 h-full bg-yellow-400 transition-all duration-300"
              style={{ width: `${(gallons / totalGallons) * 100}%` }}
            >
              <div className="flex h-full items-center justify-center">
                <span className="text-sm font-bold text-yellow-800">{gallons.toFixed(1)} gal</span>
              </div>
            </div>
          </div>

          <div className="relative mb-2 h-20 w-full overflow-hidden rounded-lg bg-white">
            {/* Miles traveled visualization */}
            <div
              className="absolute bottom-0 left-0 h-full bg-green-500 transition-all duration-300"
              style={{ width: `${(miles / totalMiles) * 100}%` }}
            >
              <div className="flex h-full items-center justify-center">
                <span className="text-sm font-bold text-green-800">{miles} miles</span>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-lg bg-blue-50 p-4">
            <h4 className="mb-2 font-semibold">Guiding Concept:</h4>
            <p>
              We need to find how much distance (in miles) is achieved with just 1 gallon of gas. This is the unit rate,
              or "miles per gallon" (MPG).
            </p>
            <p className="mt-2">
              Notice how the miles increase proportionally with the gallons. Try moving the slider to see this
              relationship.
            </p>
          </div>
        </div>

        <div className="rounded-lg bg-gray-100 p-4">
          <div className="text-center">
            <p className="font-medium">Key Insight:</p>
            <p>
              If we know the total miles (337) and total gallons (13.7), we can find the miles per gallon by dividing:
            </p>
            <p className="mt-2 text-lg font-semibold">Miles per gallon = Total miles ÷ Total gallons</p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
