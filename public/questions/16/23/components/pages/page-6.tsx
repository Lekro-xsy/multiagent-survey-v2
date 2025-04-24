"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Page6() {
  const [showSolution, setShowSolution] = useState(false)
  const [animateTotal, setAnimateTotal] = useState(false)

  const handleShowSolution = () => {
    setShowSolution(true)
    setTimeout(() => {
      setAnimateTotal(true)
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-emerald-700">🎯 Check Your Work!</h2>

      <Card className="p-6">
        <h3 className="mb-4 text-lg font-semibold">Solution Walkthrough:</h3>

        {!showSolution ? (
          <div className="mb-6 text-center">
            <p className="mb-4">Ready to see the complete solution?</p>
            <Button onClick={handleShowSolution} className="bg-emerald-600 hover:bg-emerald-700">
              Show Solution
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="rounded-lg bg-emerald-50 p-4">
              <h4 className="mb-2 font-medium">Step 1:</h4>
              <div className="flex items-center justify-center gap-2 text-lg">
                <span className="font-bold text-emerald-600">2.65</span>
                <span>×</span>
                <span className="font-bold text-emerald-600">15</span>
                <span>=</span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="font-bold text-emerald-700"
                >
                  39.75
                </motion.span>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Multiply the commission rate by the number of calculators sold.
              </p>
            </div>

            <div className="rounded-lg bg-emerald-50 p-4">
              <h4 className="mb-2 font-medium">Step 2:</h4>
              <div className="flex items-center justify-center gap-2 text-lg">
                <span className="font-bold text-emerald-600">2.65</span>
                <span>×</span>
                <span className="font-bold text-emerald-600">19</span>
                <span>=</span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="font-bold text-emerald-700"
                >
                  50.35
                </motion.span>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Multiply the commission rate by the number of pocket radios sold.
              </p>
            </div>

            <div className="rounded-lg bg-emerald-50 p-4">
              <h4 className="mb-2 font-medium">Step 3:</h4>
              <div className="flex items-center justify-center gap-2 text-lg">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="font-bold text-emerald-600"
                >
                  39.75
                </motion.span>
                <span>+</span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="font-bold text-emerald-600"
                >
                  50.35
                </motion.span>
                <span>=</span>
                <motion.span
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: 1, scale: animateTotal ? [1, 1.2, 1] : 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="font-bold text-xl text-emerald-700"
                >
                  90.10
                </motion.span>
              </div>
              <p className="mt-2 text-sm text-gray-600">Add the subtotals to find the total commission earned.</p>
            </div>

            <div className="mt-6 rounded-lg bg-emerald-700 p-6 text-center text-white">
              <h3 className="mb-4 text-xl font-bold">Final Answer:</h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="text-2xl font-bold"
              >
                The salesman earned $90.10 in total commission.
              </motion.p>
            </div>

            <div className="mt-6 flex justify-center">
              <div className="relative h-32 w-64 overflow-hidden rounded-lg border-2 border-emerald-500 bg-white shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-white"></div>
                <div className="absolute left-0 top-0 h-full w-full p-4">
                  <div className="mb-2 text-center text-lg font-bold text-emerald-700">Total Commission</div>
                  <div className="flex items-center justify-center">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1.5, duration: 1.5 }}
                      className="h-8 rounded-lg bg-emerald-100"
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.5 }}
                        className="flex h-full items-center justify-center text-2xl font-bold text-emerald-700"
                      >
                        $90.10
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}
