"use client"

import { useState, useEffect } from "react"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent } from "@/components/ui/card"

interface VisualizingRelationshipProps {
  onComplete: () => void
}

export function VisualizingRelationship({ onComplete }: VisualizingRelationshipProps) {
  const [pounds, setPounds] = useState(2)
  const [hasInteracted, setHasInteracted] = useState(false)
  const costPerPound = 8.5 / 2

  useEffect(() => {
    if (pounds >= 4.5 && !hasInteracted) {
      setHasInteracted(true)
      onComplete()
    }
  }, [pounds, hasInteracted, onComplete])

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-orange-800">📊 How Are Weight and Cost Related?</h2>

      <Card className="bg-orange-50">
        <CardContent className="p-6">
          <p className="text-lg">
            Let&apos;s visualize how the weight of steak relates to its cost. If we know the price per pound, we can
            find the cost for any weight.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-6 rounded-lg border border-orange-200 bg-white p-6">
        <h3 className="text-xl font-semibold text-orange-800">Proportional Relationship</h3>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-medium">Weight:</span>
            <span className="font-bold">{pounds.toFixed(1)} pounds</span>
          </div>

          <div className="h-8 w-full rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-orange-500 transition-all duration-300"
              style={{ width: `${(pounds / 5) * 100}%` }}
            >
              <div className="flex h-full items-center justify-end">
                <span className="mr-2 text-sm font-bold text-white">{pounds.toFixed(1)} lbs</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between text-xs text-gray-600">
            <span>0 lbs</span>
            <span>2 lbs</span>
            <span>4.5 lbs</span>
            <span>5 lbs</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-medium">Cost:</span>
            <span className="font-bold">${(pounds * costPerPound).toFixed(2)}</span>
          </div>

          <div className="h-8 w-full rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-green-500 transition-all duration-300"
              style={{ width: `${(pounds / 5) * 100}%` }}
            >
              <div className="flex h-full items-center justify-end">
                <span className="mr-2 text-sm font-bold text-white">${(pounds * costPerPound).toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between text-xs text-gray-600">
            <span>$0.00</span>
            <span>$8.50</span>
            <span>$19.13</span>
            <span>$21.25</span>
          </div>
        </div>

        <div className="space-y-2">
          <p className="font-medium">Adjust the weight:</p>
          <Slider
            defaultValue={[2]}
            max={5}
            step={0.1}
            value={[pounds]}
            onValueChange={(value) => setPounds(value[0])}
          />
        </div>

        <div className="rounded-lg bg-blue-50 p-4">
          <h4 className="mb-2 font-semibold text-blue-800">Key Concept:</h4>
          <p>
            This is a <strong>proportional relationship</strong>. The cost increases at the same rate as the weight.
            Each pound costs the same amount ($4.25), so we can find the cost of any weight by multiplying:
          </p>
          <p className="mt-2 text-center font-bold">Cost = (Cost per pound) × (Number of pounds)</p>
        </div>

        <div className="rounded-lg bg-orange-100 p-4">
          <p className="font-medium">Try moving the slider to 4.5 pounds. What do you notice about the cost?</p>
        </div>
      </div>
    </div>
  )
}
