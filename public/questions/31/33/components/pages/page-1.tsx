"use client"

import { useState } from "react"
import Image from "next/image"
import { Package } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Page1() {
  const [weight, setWeight] = useState(1)
  const [showAnimation, setShowAnimation] = useState(false)

  const calculateCost = (ounces: number) => {
    if (ounces <= 0) return 0
    return 0.43 + Math.max(0, ounces - 1) * 0.29
  }

  const handleWeighPackage = () => {
    setShowAnimation(true)
    setWeight(1)

    const interval = setInterval(() => {
      setWeight((prev) => {
        if (prev >= 5) {
          clearInterval(interval)
          return 5
        }
        return prev + 1
      })
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <Card className="border-2 border-teal-100 shadow-md">
        <CardHeader className="bg-gradient-to-r from-teal-50 to-emerald-50">
          <CardTitle className="flex items-center text-2xl text-teal-800">
            <Package className="mr-2 h-6 w-6 text-teal-600" />
            Sending a Package
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative flex items-center justify-center">
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder.svg?key=ehxhf"
                  alt="Post office counter with customer weighing a package"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-xl font-semibold">A shipping service charges:</h2>
              <ul className="ml-6 list-disc space-y-2">
                <li className="text-lg">
                  <span className="font-medium text-teal-700">$0.43</span> for the first ounce
                </li>
                <li className="text-lg">
                  <span className="font-medium text-teal-700">$0.29</span> for each additional ounce
                </li>
              </ul>
              <p className="text-lg">
                Let's model the total price <span className="font-medium">P</span> for shipping a package weighing
                <span className="font-medium"> x</span> ounces.
              </p>
            </div>
          </div>

          {showAnimation && (
            <div className="mt-8 rounded-lg bg-teal-50 p-4">
              <h3 className="mb-4 text-center text-lg font-medium text-teal-800">Package Weight and Cost</h3>
              <div className="flex flex-col items-center space-y-6">
                <div className="flex w-full items-center justify-between">
                  <span className="text-lg font-medium">Weight:</span>
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-teal-700">{weight}</span>
                    <span className="ml-2 text-lg">ounces</span>
                  </div>
                </div>

                <div className="h-4 w-full overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full bg-teal-500 transition-all duration-500"
                    style={{ width: `${(weight / 5) * 100}%` }}
                  ></div>
                </div>

                <div className="flex w-full items-center justify-between">
                  <span className="text-lg font-medium">Cost:</span>
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-teal-700">${calculateCost(weight).toFixed(2)}</span>
                  </div>
                </div>

                <div className="text-center text-sm text-gray-600">
                  {weight > 1 ? (
                    <>
                      ${0.43} for first ounce + ${(0.29 * (weight - 1)).toFixed(2)} for {weight - 1} additional ounce
                      {weight - 1 > 1 ? "s" : ""}
                    </>
                  ) : (
                    <>${0.43} for first ounce</>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 flex justify-center">
            <Button onClick={handleWeighPackage} className="bg-teal-600 hover:bg-teal-700">
              Weigh the Package
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
