"use client"

import { useState } from "react"
import { Clock } from "lucide-react"

import { Button } from "@/components/ui/button"

interface TimelineProps {
  onComplete: () => void
}

export function Timeline({ onComplete }: TimelineProps) {
  const [activeStep, setActiveStep] = useState(0)
  const [removedItems, setRemovedItems] = useState<string[]>([])

  const handleRemoveItem = (item: string) => {
    if (!removedItems.includes(item)) {
      setRemovedItems([...removedItems, item])
    }
  }

  const isRemoved = (item: string) => removedItems.includes(item)

  const handleNextStep = () => {
    if (activeStep < 3) {
      setActiveStep(activeStep + 1)
    } else {
      onComplete()
    }
  }

  return (
    <div className="space-y-6">
      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-0.5 bg-amber-200"></div>

        <div className="space-y-8">
          <div className="relative flex gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500 text-white">
              <Clock className="h-4 w-4" />
            </div>
            <div
              className={`rounded-lg border p-4 ${
                isRemoved("total") ? "border-dashed border-gray-300 bg-gray-50 text-gray-400" : "bg-white"
              }`}
            >
              <h4 className="mb-2 text-lg font-medium">Total Elapsed Time</h4>
              <p>From 5:30 A.M. to 3:15 P.M. = 9 hours 45 minutes = 9.75 hours</p>
              {!isRemoved("total") && (
                <Button variant="outline" size="sm" className="mt-2" onClick={() => handleRemoveItem("total")}>
                  This is our starting point
                </Button>
              )}
            </div>
          </div>

          <div className="relative flex gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500 text-white">
              <Clock className="h-4 w-4" />
            </div>
            <div
              className={`rounded-lg border p-4 ${
                isRemoved("lunch") ? "border-dashed border-gray-300 bg-gray-50 text-gray-400" : "bg-white"
              }`}
            >
              <h4 className="mb-2 text-lg font-medium">Lunch Break</h4>
              <p>From 11:30 A.M. to 12:00 P.M. = 30 minutes = 0.5 hours</p>
              {!isRemoved("lunch") && (
                <Button variant="outline" size="sm" className="mt-2" onClick={() => handleRemoveItem("lunch")}>
                  Remove from driving time
                </Button>
              )}
            </div>
          </div>

          <div className="relative flex gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500 text-white">
              <Clock className="h-4 w-4" />
            </div>
            <div
              className={`rounded-lg border p-4 ${
                isRemoved("delivery") ? "border-dashed border-gray-300 bg-gray-50 text-gray-400" : "bg-white"
              }`}
            >
              <h4 className="mb-2 text-lg font-medium">Delivery Time</h4>
              <p>
                Total time spent delivering goods = 1<sup>3</sup>/<sub>4</sub> hours = 1.75 hours
              </p>
              {!isRemoved("delivery") && (
                <Button variant="outline" size="sm" className="mt-2" onClick={() => handleRemoveItem("delivery")}>
                  Remove from driving time
                </Button>
              )}
            </div>
          </div>

          <div className="relative flex gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
              <Clock className="h-4 w-4" />
            </div>
            <div className="rounded-lg border border-green-200 bg-green-50 p-4">
              <h4 className="mb-2 text-lg font-medium">Actual Driving Time</h4>
              <p>
                Total time - Lunch break - Delivery time = 9.75 - 0.5 - 1.75 = <strong>7.5 hours</strong>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                This is the time the truck was actually driving on the road.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Button
          className="bg-amber-600 hover:bg-amber-700"
          onClick={handleNextStep}
          disabled={removedItems.length < 2 && activeStep === 0}
        >
          {activeStep < 3 ? "Next Step" : "I Understand"}
        </Button>
      </div>

      {activeStep >= 1 && (
        <div className="rounded-lg bg-amber-50 p-4">
          <h3 className="mb-2 text-lg font-semibold">Understanding the Timeline</h3>
          <p>
            To find the actual driving time, we need to subtract all non-driving activities from the total time. In this
            case:
          </p>
          <ul className="ml-6 mt-2 list-disc">
            <li>The truck was on its route for a total of 9.75 hours</li>
            <li>The driver took a lunch break for 0.5 hours</li>
            <li>The driver spent 1.75 hours delivering goods</li>
            <li>
              So the actual driving time was <strong>7.5 hours</strong>
            </li>
          </ul>
        </div>
      )}

      {activeStep >= 2 && (
        <div className="rounded-lg bg-amber-50 p-4">
          <h3 className="mb-2 text-lg font-semibold">Calculating the Distance</h3>
          <p>Now that we know the driving time, we can calculate the distance using the formula:</p>
          <p className="my-2 text-center text-lg font-medium">Distance = Speed × Time</p>
          <p>
            Distance = 40 miles/hour × 7.5 hours = <strong>300 miles</strong>
          </p>
        </div>
      )}

      {activeStep >= 3 && (
        <div className="rounded-lg border-2 border-green-500 bg-green-50 p-4 text-center">
          <h3 className="text-xl font-bold text-green-700">The bakery truck traveled 300 miles!</h3>
        </div>
      )}
    </div>
  )
}
