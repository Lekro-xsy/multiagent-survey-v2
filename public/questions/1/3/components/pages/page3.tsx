"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Leaf } from "lucide-react"

export default function Page3() {
  const [doubleCount, setDoubleCount] = useState(1)
  const [leaves, setLeaves] = useState(2)

  const handleDouble = () => {
    if (doubleCount < 3) {
      setDoubleCount(doubleCount + 1)
      setLeaves(leaves * 2)
    }
  }

  const resetDemo = () => {
    setDoubleCount(1)
    setLeaves(2)
  }

  const renderLeaves = (count: number) => {
    const leafElements = []
    for (let i = 0; i < count; i++) {
      leafElements.push(
        <motion.div
          key={i}
          initial={{ scale: 0, rotate: Math.random() * 360 }}
          animate={{ scale: 1, rotate: Math.random() * 60 - 30 }}
          transition={{ delay: i * 0.1, duration: 0.3 }}
          className="inline-block mx-1"
        >
          <Leaf className="h-8 w-8 text-green-500" />
        </motion.div>,
      )
    }
    return leafElements
  }

  return (
    <div className="flex flex-col items-center">
      <motion.h1
        className="text-3xl font-bold text-green-700 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🔄 What Does Doubling Mean?
      </motion.h1>

      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl mb-8">
        <div className="flex flex-col items-center">
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold mb-2">
              Day {doubleCount * 10}: {leaves} leaves
            </h2>
            <div className="flex flex-wrap justify-center gap-2 min-h-24">{renderLeaves(leaves)}</div>
          </div>

          <div className="flex gap-4">
            <Button onClick={handleDouble} disabled={doubleCount >= 3} className="bg-green-600 hover:bg-green-700">
              Double It
            </Button>
            <Button variant="outline" onClick={resetDemo}>
              Reset Demo
            </Button>
          </div>
        </div>
      </div>

      <motion.div
        className="bg-amber-50 p-6 rounded-lg max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-xl font-semibold text-amber-700 mb-4">What Does Doubling Mean?</h3>
        <p className="mb-4">Every 10 days, the number of leaves doubles, meaning it becomes twice as many as before.</p>
        <p className="mb-4">You can imagine each leaf "creating" one new leaf:</p>
        <ul className="list-disc list-inside space-y-2 text-amber-800">
          <li>2 leaves double to become 2 × 2 = 4 leaves</li>
          <li>4 leaves double to become 4 × 2 = 8 leaves</li>
          <li>8 leaves double to become 8 × 2 = 16 leaves</li>
        </ul>
      </motion.div>

      <motion.div
        className="mt-8 text-center text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p>Click the "Double It" button to see how the number of leaves changes!</p>
      </motion.div>
    </div>
  )
}
