"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Page1() {
  const [animationStarted, setAnimationStarted] = useState(false)
  const [calculatorsSold, setCalculatorsSold] = useState(0)
  const [radiosSold, setRadiosSold] = useState(0)
  const [commission, setCommission] = useState(0)

  const startSelling = () => {
    setAnimationStarted(true)

    // Reset counters
    setCalculatorsSold(0)
    setRadiosSold(0)
    setCommission(0)

    // Animate sales
    let calcCount = 0
    let radioCount = 0
    let totalCommission = 0

    const interval = setInterval(() => {
      if (calcCount < 15) {
        calcCount++
        setCalculatorsSold(calcCount)
        totalCommission += 2.65
        setCommission(Number.parseFloat(totalCommission.toFixed(2)))
      } else if (radioCount < 19) {
        radioCount++
        setRadiosSold(radioCount)
        totalCommission += 2.65
        setCommission(Number.parseFloat(totalCommission.toFixed(2)))
      } else {
        clearInterval(interval)
      }
    }, 300)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-emerald-700">💼 Sales Success: Calculators and Radios!</h2>

      <div className="relative h-64 overflow-hidden rounded-lg bg-gradient-to-r from-emerald-100 to-teal-100">
        <img
          src="/electronics-hub.png"
          alt="Mall with electronics booth"
          className="h-full w-full object-cover"
        />

        {animationStarted && (
          <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/90 p-3 shadow-lg">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="font-medium">Calculators</p>
                <p className="text-xl font-bold text-emerald-600">{calculatorsSold}</p>
              </div>
              <div>
                <p className="font-medium">Radios</p>
                <p className="text-xl font-bold text-emerald-600">{radiosSold}</p>
              </div>
              <div>
                <p className="font-medium">Commission</p>
                <p className="text-xl font-bold text-emerald-600">${commission}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="rounded-lg bg-white p-6 shadow-md">
        <h3 className="mb-3 text-lg font-semibold">The Story:</h3>
        <p className="mb-4 text-gray-700">
          Each item the salesman sells earns him <span className="font-bold text-emerald-600">$2.65</span> in
          commission. This morning, he sold <span className="font-bold text-emerald-600">15 calculators</span> and
          <span className="font-bold text-emerald-600"> 19 pocket radios</span>.
        </p>
        <p className="mb-6 text-lg font-medium">How much total commission did he earn?</p>

        <Button
          onClick={startSelling}
          className="w-full bg-emerald-600 hover:bg-emerald-700"
          disabled={animationStarted && (calculatorsSold < 15 || radiosSold < 19)}
        >
          {!animationStarted
            ? "Start Selling"
            : calculatorsSold < 15 || radiosSold < 19
              ? "Selling in progress..."
              : "Sell Again"}
        </Button>
      </div>
    </div>
  )
}
