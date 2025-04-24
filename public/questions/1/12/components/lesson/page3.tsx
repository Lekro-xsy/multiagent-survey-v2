"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Page3() {
  const [step, setStep] = useState(0)
  const [highlightedSides, setHighlightedSides] = useState<number[]>([])

  const handleSideClick = (sideNumber: number) => {
    if (highlightedSides.includes(sideNumber)) return

    const newHighlightedSides = [...highlightedSides, sideNumber]
    setHighlightedSides(newHighlightedSides)

    if (newHighlightedSides.length === 4) {
      // All sides highlighted, move to next step
      setTimeout(() => setStep(1), 500)
    }
  }

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1)
    }
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">🎬 How Does 2(l + w) Work?</h1>

      <div className="mb-8 text-center max-w-xl">
        <p className="text-lg mb-4">The perimeter is the total distance around the rectangle.</p>
        <p className="text-lg">Click on each side to see how we add them up.</p>
      </div>

      <div className="relative w-full max-w-md h-64 mb-8">
        {/* Rectangle */}
        <div className="absolute inset-0 border-4 border-gray-300 rounded-lg">
          {/* Side 1 (bottom) */}
          <div
            className={`absolute bottom-0 left-0 right-0 h-4 ${highlightedSides.includes(1) ? "bg-green-500" : "bg-gray-200"} cursor-pointer transition-colors duration-300 flex items-center justify-center`}
            onClick={() => handleSideClick(1)}
          >
            {highlightedSides.includes(1) && <span className="text-white font-bold">l</span>}
          </div>

          {/* Side 2 (right) */}
          <div
            className={`absolute top-0 bottom-0 right-0 w-4 ${highlightedSides.includes(2) ? "bg-yellow-500" : "bg-gray-200"} cursor-pointer transition-colors duration-300 flex items-center justify-center`}
            onClick={() => handleSideClick(2)}
          >
            {highlightedSides.includes(2) && <span className="text-white font-bold">w</span>}
          </div>

          {/* Side 3 (top) */}
          <div
            className={`absolute top-0 left-0 right-0 h-4 ${highlightedSides.includes(3) ? "bg-green-500" : "bg-gray-200"} cursor-pointer transition-colors duration-300 flex items-center justify-center`}
            onClick={() => handleSideClick(3)}
          >
            {highlightedSides.includes(3) && <span className="text-white font-bold">l</span>}
          </div>

          {/* Side 4 (left) */}
          <div
            className={`absolute top-0 bottom-0 left-0 w-4 ${highlightedSides.includes(4) ? "bg-yellow-500" : "bg-gray-200"} cursor-pointer transition-colors duration-300 flex items-center justify-center`}
            onClick={() => handleSideClick(4)}
          >
            {highlightedSides.includes(4) && <span className="text-white font-bold">w</span>}
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-2 font-bold text-green-600">
          l
        </div>
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-white px-2 font-bold text-yellow-600">
          w
        </div>
      </div>

      <div className="w-full max-w-lg bg-blue-50 p-6 rounded-lg">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: step >= 1 ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl mb-4"
        >
          Perimeter = l + w + l + w
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: step >= 2 ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl mb-4"
        >
          = (l + w) + (l + w)
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: step >= 3 ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold text-blue-700"
        >
          = 2(l + w)
        </motion.div>

        {step > 0 && step < 3 && (
          <Button onClick={nextStep} className="mt-4 bg-blue-600 hover:bg-blue-700">
            Continue
          </Button>
        )}

        {step === 0 && highlightedSides.length === 4 && (
          <Button onClick={nextStep} className="mt-4 bg-blue-600 hover:bg-blue-700">
            Show Formula
          </Button>
        )}

        {step === 3 && (
          <div className="mt-4 p-3 bg-green-100 border border-green-300 rounded-lg">
            <p className="text-green-800">
              Now you can see how the formula 2(l + w) represents adding up all four sides of the rectangle!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
