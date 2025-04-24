"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plane } from "lucide-react"

export function ContextStory() {
  const [animationStarted, setAnimationStarted] = useState(false)

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold flex items-center">
          <span className="mr-2">✈️</span> How Much Will the Airline Earn?
        </h2>
        <p className="text-gray-600">Let's explore a real-world math problem about airline revenue.</p>
      </div>

      <Card className="p-6 bg-gradient-to-b from-blue-50 to-sky-50 border-sky-100">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-video bg-sky-100 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Plane className="h-24 w-24 text-sky-500" />
              </div>
              {animationStarted && (
                <div className="absolute inset-0">
                  <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-sky-200 rounded-lg grid grid-cols-8 grid-rows-4 gap-1 p-2">
                    {Array.from({ length: 32 }).map((_, i) => (
                      <div
                        key={`first-${i}`}
                        className="bg-yellow-400 rounded-sm animate-fade-in"
                        style={{ animationDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                  <div className="absolute top-1/2 left-1/4 w-1/2 h-1/2 bg-sky-200 rounded-lg grid grid-cols-20 grid-rows-15 gap-0.5 p-2">
                    {Array.from({ length: 298 }).map((_, i) => (
                      <div
                        key={`coach-${i}`}
                        className="bg-blue-400 rounded-sm animate-fade-in"
                        style={{ animationDelay: `${(i + 32) * 20}ms` }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-4">
            <div className="space-y-2">
              <p className="text-lg font-medium">A jumbo jet carries 330 passengers.</p>
              <p className="text-lg">32 seats are in first class, and the rest are in coach.</p>
              <p className="text-lg">Average first-class ticket = $860.</p>
              <p className="text-lg">Average coach ticket = $360.</p>
              <p className="text-lg font-semibold">If the plane is full, how much will the airline gross?</p>
            </div>

            <Button
              onClick={() => setAnimationStarted(true)}
              disabled={animationStarted}
              className="w-full md:w-auto mt-4"
            >
              Board Passengers
            </Button>
          </div>
        </div>
      </Card>

      <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
        <h3 className="font-semibold text-amber-800">Learning Goal</h3>
        <p className="text-amber-700">
          In this lesson, you'll learn how to model and calculate total revenue when there are different price
          categories.
        </p>
      </div>
    </div>
  )
}
