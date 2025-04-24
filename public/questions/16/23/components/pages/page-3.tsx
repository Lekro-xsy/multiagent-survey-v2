"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calculator, Radio } from "lucide-react"

export default function Page3() {
  const [calculatorEarnings, setCalculatorEarnings] = useState(0)
  const [radioEarnings, setRadioEarnings] = useState(0)
  const [calculatorCount, setCalculatorCount] = useState(0)
  const [radioCount, setRadioCount] = useState(0)

  const handleCalculatorClick = () => {
    if (calculatorCount < 15) {
      const newCount = calculatorCount + 1
      setCalculatorCount(newCount)
      setCalculatorEarnings(Number.parseFloat((newCount * 2.65).toFixed(2)))
    }
  }

  const handleRadioClick = () => {
    if (radioCount < 19) {
      const newCount = radioCount + 1
      setRadioCount(newCount)
      setRadioEarnings(Number.parseFloat((newCount * 2.65).toFixed(2)))
    }
  }

  const resetCounts = () => {
    setCalculatorCount(0)
    setRadioCount(0)
    setCalculatorEarnings(0)
    setRadioEarnings(0)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-emerald-700">📊 How Do the Sales Add Up?</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="overflow-hidden">
          <div className="bg-emerald-600 p-4 text-white">
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <Calculator className="h-5 w-5" /> Calculator Sales
            </h3>
          </div>
          <div className="p-4">
            <div className="mb-4 flex items-center justify-between">
              <p>Each calculator sale earns:</p>
              <p className="font-bold text-emerald-600">$2.65</p>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <p>Number sold:</p>
              <p className="font-bold">{calculatorCount} / 15</p>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <p>Subtotal earnings:</p>
              <p className="text-xl font-bold text-emerald-600">${calculatorEarnings}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 15 }).map((_, index) => (
                <button
                  key={`calc-${index}`}
                  onClick={handleCalculatorClick}
                  disabled={calculatorCount > index}
                  className={`flex h-10 w-10 items-center justify-center rounded-md border ${
                    calculatorCount > index
                      ? "border-emerald-500 bg-emerald-100 text-emerald-700"
                      : "border-gray-300 bg-white hover:border-emerald-500 hover:bg-emerald-50"
                  }`}
                >
                  <Calculator className="h-5 w-5" />
                </button>
              ))}
            </div>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500">Click calculators to add sales</p>
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden">
          <div className="bg-emerald-600 p-4 text-white">
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <Radio className="h-5 w-5" /> Pocket Radio Sales
            </h3>
          </div>
          <div className="p-4">
            <div className="mb-4 flex items-center justify-between">
              <p>Each radio sale earns:</p>
              <p className="font-bold text-emerald-600">$2.65</p>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <p>Number sold:</p>
              <p className="font-bold">{radioCount} / 19</p>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <p>Subtotal earnings:</p>
              <p className="text-xl font-bold text-emerald-600">${radioEarnings}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 19 }).map((_, index) => (
                <button
                  key={`radio-${index}`}
                  onClick={handleRadioClick}
                  disabled={radioCount > index}
                  className={`flex h-10 w-10 items-center justify-center rounded-md border ${
                    radioCount > index
                      ? "border-emerald-500 bg-emerald-100 text-emerald-700"
                      : "border-gray-300 bg-white hover:border-emerald-500 hover:bg-emerald-50"
                  }`}
                >
                  <Radio className="h-5 w-5" />
                </button>
              ))}
            </div>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500">Click radios to add sales</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="bg-emerald-50 p-6">
        <h3 className="mb-4 text-lg font-semibold text-emerald-700">Key Concept:</h3>
        <div className="mb-4 rounded-lg bg-white p-4 shadow-sm">
          <p className="text-center text-lg">Same commission rate × Number of items sold = Subtotal</p>
        </div>

        <div className="mb-4 rounded-lg bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="font-medium">Total earnings so far:</p>
            <p className="text-xl font-bold text-emerald-600">${(calculatorEarnings + radioEarnings).toFixed(2)}</p>
          </div>
        </div>

        <div className="text-center">
          <Button onClick={resetCounts} className="bg-emerald-600 hover:bg-emerald-700">
            Reset Counts
          </Button>
        </div>
      </Card>
    </div>
  )
}
