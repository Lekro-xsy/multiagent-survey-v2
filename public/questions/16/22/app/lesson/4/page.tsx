"use client"

import type React from "react"

import { useState } from "react"
import { LessonLayout } from "@/components/lesson-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, Radio } from "lucide-react"

export default function Page4() {
  const [calculatorExpression, setCalculatorExpression] = useState<string[]>(["", "", ""])
  const [radioExpression, setRadioExpression] = useState<string[]>(["", "", ""])
  const [totalExpression, setTotalExpression] = useState<string[]>(["", "", ""])
  const [isCorrect, setIsCorrect] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)

  const handleDragStart = (e: React.DragEvent, value: string) => {
    e.dataTransfer.setData("text/plain", value)
  }

  const handleDrop = (e: React.DragEvent, expressionType: string, index: number) => {
    e.preventDefault()
    const value = e.dataTransfer.getData("text/plain")

    if (expressionType === "calculator") {
      const newExpression = [...calculatorExpression]
      newExpression[index] = value
      setCalculatorExpression(newExpression)
    } else if (expressionType === "radio") {
      const newExpression = [...radioExpression]
      newExpression[index] = value
      setRadioExpression(newExpression)
    } else if (expressionType === "total") {
      const newExpression = [...totalExpression]
      newExpression[index] = value
      setTotalExpression(newExpression)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const checkAnswer = () => {
    const isCalculatorCorrect =
      calculatorExpression[0] === "3.15" && calculatorExpression[1] === "×" && calculatorExpression[2] === "12"

    const isRadioCorrect = radioExpression[0] === "3.15" && radioExpression[1] === "×" && radioExpression[2] === "16"

    const isTotalCorrect =
      totalExpression[0] === "3.15×12" && totalExpression[1] === "+" && totalExpression[2] === "3.15×16"

    setIsCorrect(isCalculatorCorrect && isRadioCorrect && isTotalCorrect)
    setShowFeedback(true)
  }

  return (
    <LessonLayout pageNumber={4} totalPages={9} title="🧮 Setting Up the Math Expression">
      <div className="space-y-8">
        <Card className="p-6">
          <h2 className="text-2xl font-bold text-teal-700">Building the Mathematical Model</h2>

          <p className="mt-4 text-lg">
            Let's set up the mathematical expressions to solve this problem. Drag the numbers and operators to the
            correct positions.
          </p>

          <div className="mt-6 space-y-6">
            {/* Draggable elements */}
            <div className="rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-4">
              <h3 className="mb-3 font-semibold text-gray-700">Available Elements</h3>
              <div className="flex flex-wrap gap-2">
                {["3.15", "12", "16", "×", "+", "3.15×12", "3.15×16"].map((item) => (
                  <div
                    key={item}
                    draggable
                    onDragStart={(e) => handleDragStart(e, item)}
                    className="cursor-grab rounded-lg bg-yellow-100 p-3 shadow-sm transition-transform hover:scale-105 active:cursor-grabbing"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Calculator expression */}
            <div className="rounded-lg border border-teal-200 bg-teal-50 p-4">
              <h3 className="flex items-center text-lg font-semibold text-teal-700">
                <Calculator className="mr-2 h-5 w-5" />
                Commission from calculators
              </h3>

              <div className="mt-3 flex flex-wrap items-center gap-2">
                <div
                  onDrop={(e) => handleDrop(e, "calculator", 0)}
                  onDragOver={handleDragOver}
                  className="flex h-12 w-20 items-center justify-center rounded-md border-2 border-dashed border-teal-300 bg-white"
                >
                  {calculatorExpression[0] || "?"}
                </div>

                <div
                  onDrop={(e) => handleDrop(e, "calculator", 1)}
                  onDragOver={handleDragOver}
                  className="flex h-12 w-12 items-center justify-center rounded-md border-2 border-dashed border-teal-300 bg-white"
                >
                  {calculatorExpression[1] || "?"}
                </div>

                <div
                  onDrop={(e) => handleDrop(e, "calculator", 2)}
                  onDragOver={handleDragOver}
                  className="flex h-12 w-20 items-center justify-center rounded-md border-2 border-dashed border-teal-300 bg-white"
                >
                  {calculatorExpression[2] || "?"}
                </div>
              </div>
            </div>

            {/* Radio expression */}
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
              <h3 className="flex items-center text-lg font-semibold text-emerald-700">
                <Radio className="mr-2 h-5 w-5" />
                Commission from pocket radios
              </h3>

              <div className="mt-3 flex flex-wrap items-center gap-2">
                <div
                  onDrop={(e) => handleDrop(e, "radio", 0)}
                  onDragOver={handleDragOver}
                  className="flex h-12 w-20 items-center justify-center rounded-md border-2 border-dashed border-emerald-300 bg-white"
                >
                  {radioExpression[0] || "?"}
                </div>

                <div
                  onDrop={(e) => handleDrop(e, "radio", 1)}
                  onDragOver={handleDragOver}
                  className="flex h-12 w-12 items-center justify-center rounded-md border-2 border-dashed border-emerald-300 bg-white"
                >
                  {radioExpression[1] || "?"}
                </div>

                <div
                  onDrop={(e) => handleDrop(e, "radio", 2)}
                  onDragOver={handleDragOver}
                  className="flex h-12 w-20 items-center justify-center rounded-md border-2 border-dashed border-emerald-300 bg-white"
                >
                  {radioExpression[2] || "?"}
                </div>
              </div>
            </div>

            {/* Total expression */}
            <div className="rounded-lg border border-purple-200 bg-purple-50 p-4">
              <h3 className="text-lg font-semibold text-purple-700">Total commission</h3>

              <div className="mt-3 flex flex-wrap items-center gap-2">
                <div
                  onDrop={(e) => handleDrop(e, "total", 0)}
                  onDragOver={handleDragOver}
                  className="flex h-12 w-24 items-center justify-center rounded-md border-2 border-dashed border-purple-300 bg-white"
                >
                  {totalExpression[0] || "?"}
                </div>

                <div
                  onDrop={(e) => handleDrop(e, "total", 1)}
                  onDragOver={handleDragOver}
                  className="flex h-12 w-12 items-center justify-center rounded-md border-2 border-dashed border-purple-300 bg-white"
                >
                  {totalExpression[1] || "?"}
                </div>

                <div
                  onDrop={(e) => handleDrop(e, "total", 2)}
                  onDragOver={handleDragOver}
                  className="flex h-12 w-24 items-center justify-center rounded-md border-2 border-dashed border-purple-300 bg-white"
                >
                  {totalExpression[2] || "?"}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Button onClick={checkAnswer} className="bg-purple-600 hover:bg-purple-700">
              Check My Expressions
            </Button>
          </div>

          {showFeedback && (
            <div
              className={`mt-4 rounded-lg p-4 ${isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
            >
              {isCorrect ? (
                <div>
                  <p className="font-semibold">Great job!</p>
                  <p>You've correctly set up the mathematical expressions:</p>
                  <ul className="mt-2 list-inside list-disc">
                    <li>Commission from calculators = 3.15 × 12</li>
                    <li>Commission from pocket radios = 3.15 × 16</li>
                    <li>Total commission = 3.15×12 + 3.15×16</li>
                  </ul>
                </div>
              ) : (
                <div>
                  <p className="font-semibold">Not quite right. Try again!</p>
                  <p className="mt-1">
                    Hint: For each product, we multiply the commission rate by the quantity sold. Then we add the
                    results together for the total.
                  </p>
                </div>
              )}
            </div>
          )}
        </Card>

        <div className="rounded-lg bg-blue-50 p-4 text-blue-800">
          <h3 className="font-semibold">Key Insight:</h3>
          <p>Setting up a clear mathematical model helps us solve complex problems step by step.</p>
        </div>
      </div>
    </LessonLayout>
  )
}
