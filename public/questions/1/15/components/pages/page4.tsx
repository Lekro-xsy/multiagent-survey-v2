"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Page4() {
  const [numerator, setNumerator] = useState<number | null>(null)
  const [denominator, setDenominator] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)

  const isCorrect = numerator === 360 && denominator === 12

  const handleCheck = () => {
    setShowFeedback(true)
  }

  const handleDragNumber = (number: number, position: "numerator" | "denominator") => {
    if (position === "numerator") {
      setNumerator(number)
    } else {
      setDenominator(number)
    }
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-6 text-center text-2xl font-bold text-orange-600">🧮 How Can We Find It Mathematically?</h2>

      <div className="mb-8 max-w-2xl space-y-4 text-center">
        <p className="text-lg text-slate-700">To find the unit rate (words per minute), we need to:</p>

        <div className="space-y-2 rounded-lg bg-orange-50 p-4 text-left">
          <p className="flex items-center text-slate-700">
            <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-white">
              1
            </span>
            Identify total words: <span className="ml-2 font-bold text-orange-600">360 words</span>
          </p>
          <p className="flex items-center text-slate-700">
            <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-white">
              2
            </span>
            Identify total time: <span className="ml-2 font-bold text-orange-600">12 minutes</span>
          </p>
          <p className="flex items-center text-slate-700">
            <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-white">
              3
            </span>
            Divide: words ÷ minutes
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="mb-4 text-center text-lg font-semibold text-orange-600">
          Drag the numbers to set up the division
        </h3>

        <div className="flex flex-col items-center">
          <div className="mb-6 flex items-center gap-6">
            <motion.div
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              className="cursor-grab rounded-lg border-2 border-dashed bg-white p-3 shadow-sm"
              onDragEnd={() => handleDragNumber(360, "numerator")}
            >
              <p className="text-xl font-bold">360</p>
            </motion.div>

            <motion.div
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              className="cursor-grab rounded-lg border-2 border-dashed bg-white p-3 shadow-sm"
              onDragEnd={() => handleDragNumber(12, "denominator")}
            >
              <p className="text-xl font-bold">12</p>
            </motion.div>
          </div>

          <div className="flex flex-col items-center">
            <Card className="mb-2 flex h-16 w-32 items-center justify-center border-2 border-dashed border-orange-200">
              {numerator !== null ? (
                <p className="text-xl font-bold text-orange-600">{numerator}</p>
              ) : (
                <p className="text-sm text-slate-400">Drag here</p>
              )}
            </Card>

            <div className="h-1 w-32 bg-orange-500"></div>

            <Card className="mt-2 flex h-16 w-32 items-center justify-center border-2 border-dashed border-orange-200">
              {denominator !== null ? (
                <p className="text-xl font-bold text-orange-600">{denominator}</p>
              ) : (
                <p className="text-sm text-slate-400">Drag here</p>
              )}
            </Card>
          </div>

          <div className="mt-6">
            <Button
              onClick={handleCheck}
              disabled={numerator === null || denominator === null}
              className="bg-orange-500 hover:bg-orange-600"
            >
              Check My Setup
            </Button>
          </div>
        </div>
      </div>

      {showFeedback && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-4 rounded-lg p-4 text-center ${
            isCorrect ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {isCorrect ? (
            <p className="font-semibold">Perfect! To find words per minute, we divide 360 words by 12 minutes.</p>
          ) : (
            <p className="font-semibold">
              Not quite. Remember, to find words per minute, we need to divide the total words (360) by the total
              minutes (12).
            </p>
          )}
        </motion.div>
      )}

      <div className="mt-6 rounded-lg bg-blue-50 p-4 text-center text-sm text-blue-700">
        <p>
          <strong>Words per minute</strong> = Total words ÷ Total minutes
        </p>
      </div>
    </div>
  )
}
