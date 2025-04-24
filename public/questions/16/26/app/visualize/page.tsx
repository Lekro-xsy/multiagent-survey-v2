"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Fuel, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

export default function VisualizePage() {
  const [gallons, setGallons] = useState(1)
  const milesPerGallon = 19.0 // 200 ÷ 10.5 ≈ 19.0

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex items-center justify-between">
            <Link href="/breakdown">
              <Button variant="ghost" className="flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" /> Back
              </Button>
            </Link>
            <div className="text-sm text-slate-500">Page 3 of 9</div>
          </div>

          <div className="mb-4 rounded-xl bg-amber-50 p-6 shadow-lg">
            <h1 className="mb-6 flex items-center gap-2 text-3xl font-bold text-slate-800">
              <Search className="h-8 w-8 text-amber-600" /> How Much Distance Per Gallon?
            </h1>

            <div className="mb-6 rounded-xl bg-white p-4 shadow-md">
              <h2 className="mb-4 text-xl font-semibold text-slate-700">Visualizing the Fuel Efficiency Rate</h2>

              <div className="mb-6 rounded-lg bg-blue-50 p-4">
                <h3 className="mb-2 text-lg font-medium text-blue-700">Guiding Question:</h3>
                <p className="text-blue-600">If 10.5 gallons covers 200 miles, how many miles will 1 gallon cover?</p>
              </div>

              <div className="mb-6 rounded-lg bg-slate-50 p-4">
                <h3 className="mb-3 text-lg font-medium text-slate-700">Finding the Rate:</h3>
                <div className="flex flex-col items-center gap-2 md:flex-row md:justify-center">
                  <div className="flex items-center">
                    <span className="text-lg font-medium">Miles per gallon = </span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex flex-col items-center border-b-2 border-slate-400 px-4">
                      <span className="text-lg">200 miles</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="mx-2 text-lg">÷</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-lg">10.5 gallons</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mx-2 text-lg">=</span>
                  </div>
                  <div className="flex items-center">
                    <span className="rounded-md bg-emerald-100 px-3 py-1 text-lg font-bold text-emerald-700">
                      19.0 miles/gallon
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-center text-sm text-slate-500">(Rounded to the nearest tenth)</p>
              </div>

              <div className="mb-6">
                <h3 className="mb-4 text-lg font-medium text-slate-700">Interactive Fuel Gauge:</h3>
                <p className="mb-4 text-slate-600">
                  Slide the gauge to see how many miles you can travel with different amounts of fuel.
                </p>

                <div className="mb-4 flex items-center gap-4">
                  <Fuel className="h-6 w-6 text-amber-500" />
                  <Slider
                    value={[gallons]}
                    min={1}
                    max={18}
                    step={0.5}
                    onValueChange={(value) => setGallons(value[0])}
                    className="flex-1"
                  />
                  <span className="min-w-16 text-right font-medium">{gallons} gallons</span>
                </div>

                <div className="relative mb-2 h-6 w-full rounded-full bg-slate-200">
                  <div
                    className="h-6 rounded-full bg-emerald-500 transition-all duration-300"
                    style={{ width: `${(gallons / 18) * 100}%` }}
                  ></div>
                </div>

                <div className="mt-6 rounded-lg bg-emerald-100 p-4 text-center">
                  <span className="text-lg font-medium text-emerald-800">
                    With {gallons} gallons, you can travel approximately:
                  </span>
                  <div className="mt-2 text-3xl font-bold text-emerald-700">
                    {(gallons * milesPerGallon).toFixed(1)} miles
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-amber-100 p-4">
                <h3 className="mb-2 text-lg font-medium text-amber-800">Key Insight:</h3>
                <p className="text-amber-700">
                  We've calculated that your car gets about 19.0 miles per gallon. This is our <strong>rate</strong> or{" "}
                  <strong>unit rate</strong> - how far you can go on each gallon of gas. We can use this to predict the
                  total distance for any amount of fuel.
                </p>
              </div>
            </div>

            <div className="flex justify-between">
              <Link href="/breakdown">
                <Button variant="outline">
                  <ArrowLeft className="mr-1 h-4 w-4" /> Previous
                </Button>
              </Link>
              <Link href="/model">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  Continue <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
