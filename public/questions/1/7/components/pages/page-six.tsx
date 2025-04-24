"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { PyramidAnimation } from "@/components/pyramid-animation"

export default function PageSix() {
  const [showAnimation, setShowAnimation] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (showAnimation && count < 325) {
      interval = setInterval(() => {
        setCount((prev) => Math.min(prev + 5, 325))
      }, 50)
    }

    return () => clearInterval(interval)
  }, [showAnimation, count])

  return (
    <div className="space-y-6">
      <h2 className="text-center text-2xl font-bold text-blue-800">🎯 Check Your Work!</h2>

      <Card className="p-6">
        <h3 className="mb-4 text-xl font-semibold text-blue-700">Complete Solution</h3>

        <div className="space-y-6">
          <div className="rounded-lg bg-blue-50 p-4">
            <h4 className="mb-2 font-medium text-blue-800">Setup:</h4>
            <div className="space-y-2">
              <p>
                <span className="font-medium">Step 1:</span> Identify that we have 25 rows (n = 25)
              </p>
              <p>
                <span className="font-medium">Step 2:</span> Apply the formula for sum of first n integers:
              </p>
              <div className="my-2 rounded-lg bg-white p-3 text-center text-lg">
                Sum = n(n+1)/2 = 25(25+1)/2 = 25(26)/2 = 650/2 = 325
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-green-100 p-4 text-center">
            <h4 className="mb-2 text-xl font-bold text-green-800">Final Answer:</h4>
            <p className="text-lg">325 cartons are needed for the complete display.</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <Button
              onClick={() => setShowAnimation(true)}
              className="bg-blue-600 hover:bg-blue-700"
              disabled={showAnimation}
            >
              Show Animated Pyramid
            </Button>

            {showAnimation && (
              <div className="w-full">
                <PyramidAnimation rows={25} animated />
                <div className="mt-4 text-center text-xl font-bold text-blue-800">Total Cartons: {count}</div>
              </div>
            )}
          </div>
        </div>
      </Card>

      <div className="rounded-lg bg-yellow-50 p-4">
        <h4 className="mb-2 font-semibold text-yellow-800">Key Insight:</h4>
        <p>
          The formula n(n+1)/2 gives us a quick way to find the sum without having to add up all the numbers
          individually.
        </p>
        <p className="mt-2">This is much more efficient than adding 1+2+3+...+25 one by one!</p>
      </div>
    </div>
  )
}
