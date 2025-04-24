"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function VisualizingChargesPage() {
  const [segments, setSegments] = useState(1) // Start with first 1/5 mile
  const [minutes, setMinutes] = useState(0)

  const maxSegments = 19 // First 1/5 mile + 18 additional segments = 3.8 miles
  const maxMinutes = 6

  const mileageCost = 3.2 + (segments > 1 ? (segments - 1) * 0.45 : 0)
  const trafficCost = minutes * 0.2

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">📏🕒 How Are Charges Built?</h1>
            <p className="text-xl text-gray-600">Visualizing distance and time charges separately</p>
          </div>

          <div className="mb-8 overflow-hidden rounded-xl bg-white p-6 shadow-lg">
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">Mileage Charges</h2>
              <div className="mb-4 rounded-lg bg-yellow-100 p-4">
                <div className="mb-2 flex justify-between">
                  <span className="font-medium">Distance traveled:</span>
                  <span className="font-medium">{((segments - 1) * 0.2 + 0.2).toFixed(1)} miles</span>
                </div>
                <Progress value={(segments / maxSegments) * 100} className="h-4 bg-yellow-200" />
              </div>

              <div className="mb-4">
                <div className="mb-2 flex justify-between">
                  <span>First 1/5 mile:</span>
                  <span className="font-medium">$3.20</span>
                </div>
                {segments > 1 && (
                  <div className="mb-2 flex justify-between">
                    <span>Additional {segments - 1} segments (at $0.45 each):</span>
                    <span className="font-medium">${((segments - 1) * 0.45).toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between font-medium text-yellow-600">
                  <span>Total mileage cost:</span>
                  <span>${mileageCost.toFixed(2)}</span>
                </div>
              </div>

              <Button
                onClick={() => setSegments((prev) => Math.min(prev + 1, maxSegments))}
                disabled={segments >= maxSegments}
                className="bg-yellow-500 text-black hover:bg-yellow-600"
              >
                <Plus className="mr-2 h-4 w-4" />
                Add 1/5 mile segment
              </Button>
            </div>

            <div className="mb-4">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">Traffic Charges</h2>
              <div className="mb-4 rounded-lg bg-blue-100 p-4">
                <div className="mb-2 flex justify-between">
                  <span className="font-medium">Time stopped in traffic:</span>
                  <span className="font-medium">{minutes} minutes</span>
                </div>
                <Progress value={(minutes / maxMinutes) * 100} className="h-4 bg-blue-200" />
              </div>

              <div className="mb-4">
                <div className="flex justify-between font-medium text-blue-600">
                  <span>Total traffic cost (at $0.20 per minute):</span>
                  <span>${trafficCost.toFixed(2)}</span>
                </div>
              </div>

              <Button
                onClick={() => setMinutes((prev) => Math.min(prev + 1, maxMinutes))}
                disabled={minutes >= maxMinutes}
                className="bg-blue-500 text-white hover:bg-blue-600"
              >
                <Plus className="mr-2 h-4 w-4" />
                Add 1 minute in traffic
              </Button>
            </div>

            <div className="rounded-lg bg-gray-100 p-4">
              <div className="flex justify-between text-lg font-bold text-gray-800">
                <span>Combined total cost:</span>
                <span>${(mileageCost + trafficCost).toFixed(2)}</span>
              </div>
              <p className="mt-2 text-gray-700">
                Notice how we calculate each part separately, then add them together for the total.
              </p>
            </div>
          </div>

          <div className="flex justify-between">
            <Link href="/problem-breakdown">
              <Button variant="outline" className="flex items-center gap-2">
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
            </Link>
            <Link href="/mileage-expression">
              <Button className="group bg-yellow-500 text-black hover:bg-yellow-600">
                Next
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
