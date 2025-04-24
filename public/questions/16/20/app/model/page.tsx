"use client"

import type React from "react"

import { useState } from "react"
import PageLayout from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, X } from "lucide-react"

export default function ModelPage() {
  const [numerator, setNumerator] = useState<string | null>(null)
  const [denominator, setDenominator] = useState<string | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)

  const handleDragStart = (e: React.DragEvent, value: string) => {
    e.dataTransfer.setData("text/plain", value)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent, position: "numerator" | "denominator") => {
    e.preventDefault()
    const value = e.dataTransfer.getData("text/plain")

    if (position === "numerator") {
      setNumerator(value)
    } else {
      setDenominator(value)
    }
  }

  const handleReset = () => {
    setNumerator(null)
    setDenominator(null)
    setShowFeedback(false)
  }

  const handleCheck = () => {
    setShowFeedback(true)
  }

  const isCorrect = () => {
    return numerator === "523" && denominator === "16.2"
  }

  return (
    <PageLayout title="How Should We Set Up the Math?" emoji="🧮">
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <p className="text-lg">
            Now that we understand what miles per gallon means, let's set up the mathematical model to solve our
            problem.
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-bold mb-3">The Formula:</h3>
            <div className="flex justify-center my-4">
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <div className="text-xl font-bold">
                  Miles per gallon (MPG) = <span className="text-sky-700">Total miles ÷ Total gallons</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-sky-50 p-6 rounded-lg border border-sky-200">
          <h2 className="text-xl font-bold text-sky-800 mb-4">Build the Expression</h2>

          <p className="mb-6">
            Drag the values to the correct positions in the fraction to set up the miles per gallon calculation.
          </p>

          <div className="flex justify-center mb-8">
            <div className="flex flex-col items-center">
              <div
                className={`w-32 h-16 border-2 border-dashed ${numerator ? "border-green-500 bg-green-50" : "border-gray-400"} rounded-lg flex items-center justify-center text-xl mb-1`}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, "numerator")}
              >
                {numerator || "Drop here"}
              </div>

              <div className="w-32 h-1 bg-black"></div>

              <div
                className={`w-32 h-16 border-2 border-dashed ${denominator ? "border-green-500 bg-green-50" : "border-gray-400"} rounded-lg flex items-center justify-center text-xl mt-1`}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, "denominator")}
              >
                {denominator || "Drop here"}
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6 mb-6">
            <div
              draggable={!numerator && !denominator}
              onDragStart={(e) => handleDragStart(e, "523")}
              className={`w-24 h-12 bg-yellow-200 rounded-lg flex items-center justify-center cursor-move ${
                numerator === "523" || denominator === "523" ? "opacity-50" : ""
              }`}
            >
              523
            </div>

            <div
              draggable={!numerator && !denominator}
              onDragStart={(e) => handleDragStart(e, "16.2")}
              className={`w-24 h-12 bg-yellow-200 rounded-lg flex items-center justify-center cursor-move ${
                numerator === "16.2" || denominator === "16.2" ? "opacity-50" : ""
              }`}
            >
              16.2
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <Button onClick={handleReset} variant="outline">
              Reset
            </Button>
            <Button onClick={handleCheck} disabled={!numerator || !denominator} className="bg-sky-600 hover:bg-sky-700">
              Check My Answer
            </Button>
          </div>
        </div>

        {showFeedback && (
          <div
            className={`p-4 rounded-lg ${isCorrect() ? "bg-green-100 border border-green-300" : "bg-red-100 border border-red-300"}`}
          >
            <div className="flex items-center gap-2">
              {isCorrect() ? (
                <>
                  <Check className="h-5 w-5 text-green-600" />
                  <p className="font-medium text-green-800">
                    Correct! To find miles per gallon, we divide the total miles (523) by the total gallons (16.2).
                  </p>
                </>
              ) : (
                <>
                  <X className="h-5 w-5 text-red-600" />
                  <p className="font-medium text-red-800">
                    Not quite right. Remember, miles per gallon means miles ÷ gallons. The total miles (523) should be
                    on top, and the total gallons (16.2) should be on the bottom.
                  </p>
                </>
              )}
            </div>
          </div>
        )}

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-lg font-bold text-blue-800 mb-3">Mini-Tip:</h3>
          <p>
            Remember that MPG is a <span className="font-bold">unit rate</span> - it tells us how many miles (units) per
            one gallon. When calculating any unit rate, we always divide the total amount by the number of units.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}
