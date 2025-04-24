"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent } from "@/components/ui/card"

interface ContextStoryProps {
  onComplete: () => void
}

export function ContextStory({ onComplete }: ContextStoryProps) {
  const [pounds, setPounds] = useState(2)
  const [hasInteracted, setHasInteracted] = useState(false)

  const handlePoundsChange = (value: number[]) => {
    setPounds(value[0])
    if (!hasInteracted) {
      setHasInteracted(true)
      onComplete()
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-orange-800">🍴 Getting Ready for a Big Dinner!</h2>

      <div className="flex flex-col gap-6 md:flex-row">
        <div className="flex-1">
          <div className="mb-4 overflow-hidden rounded-lg bg-orange-100">
            <img
              src="/placeholder.svg?key=nyc3q"
              alt="Butcher shop with cuts of steak"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg">
                You&apos;re preparing a steak dinner. You know that <strong>2 pounds of steak costs $8.50</strong>.
              </p>
              <p className="mt-2 text-lg">
                You need <strong>4.5 pounds</strong>. How much will that cost?
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4 rounded-lg border border-orange-200 bg-orange-50 p-4">
            <h3 className="font-semibold">Add More Steak:</h3>
            <div className="flex items-center gap-4">
              <Slider
                defaultValue={[2]}
                max={5}
                step={0.1}
                value={[pounds]}
                onValueChange={handlePoundsChange}
                className="flex-1"
              />
              <span className="w-16 text-center font-bold">{pounds.toFixed(1)} lbs</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-6 rounded bg-orange-400" style={{ width: `${(pounds / 5) * 100}%` }}></div>
              <span className="text-sm font-medium">${((8.5 / 2) * pounds).toFixed(2)}</span>
            </div>

            <p className="text-sm text-gray-600">
              Try adjusting the slider to see how the amount of steak changes. Think about how the cost might change
              too!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
