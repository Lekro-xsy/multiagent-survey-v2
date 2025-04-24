"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface FullSolutionProps {
  onComplete: () => void
}

export function FullSolution({ onComplete }: FullSolutionProps) {
  const [showReceipt, setShowReceipt] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-orange-800">🎯 Let&apos;s Check the Full Solution!</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-4 text-xl font-semibold text-orange-800">Step 1: Find the cost per pound</h3>
              <div className="rounded-lg bg-orange-50 p-4">
                <div className="flex items-center justify-center text-2xl font-bold">
                  <span className="mr-2">$8.50</span>
                  <span className="mx-2">÷</span>
                  <span className="ml-2">2</span>
                  <span className="mx-2">=</span>
                  <span className="ml-2 text-green-700">$4.25</span>
                </div>
                <p className="mt-4 text-center">
                  The cost per pound is <strong>$4.25</strong>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-4 text-xl font-semibold text-orange-800">Step 2: Find the total cost</h3>
              <div className="rounded-lg bg-orange-50 p-4">
                <div className="flex items-center justify-center text-2xl font-bold">
                  <span className="mr-2">$4.25</span>
                  <span className="mx-2">×</span>
                  <span className="ml-2">4.5</span>
                  <span className="mx-2">=</span>
                  <span className="ml-2 text-green-700">$19.125</span>
                </div>
                <p className="mt-4 text-center">
                  The total cost is <strong>$19.13</strong> (rounded to the nearest cent)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="mb-6 text-center">
            <p className="text-lg">Let&apos;s see what our final receipt would look like:</p>
          </div>

          <Button onClick={() => setShowReceipt(true)} className="mb-6 bg-orange-600 hover:bg-orange-700">
            Print Receipt
          </Button>

          <div
            className={`transition-all duration-500 ${showReceipt ? "opacity-100 transform-none" : "opacity-0 -translate-y-10"}`}
          >
            <div className="w-64 rounded-lg border border-gray-300 bg-white p-6 shadow-lg">
              <div className="mb-4 text-center">
                <h3 className="text-xl font-bold">RECEIPT</h3>
                <p className="text-sm text-gray-500">Butcher Shop</p>
              </div>

              <div className="mb-4 border-b border-dashed border-gray-300 pb-4">
                <div className="flex justify-between">
                  <span>Steak</span>
                  <span>4.5 lbs</span>
                </div>
                <div className="flex justify-between">
                  <span>Price per lb</span>
                  <span>$4.25</span>
                </div>
              </div>

              <div className="flex justify-between font-bold">
                <span>TOTAL</span>
                <span>$19.13</span>
              </div>

              <div className="mt-4 text-center text-xs text-gray-500">Thank you for your purchase!</div>
            </div>
          </div>
        </div>
      </div>

      <Card className="bg-blue-50">
        <CardContent className="p-6">
          <h3 className="mb-2 font-semibold text-blue-800">Key Takeaway:</h3>
          <p>
            We solved this problem using <strong>proportional reasoning</strong>. We found the unit rate (cost per
            pound) and then multiplied by the quantity we needed. This is a powerful strategy that can be applied to
            many real-world situations.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
