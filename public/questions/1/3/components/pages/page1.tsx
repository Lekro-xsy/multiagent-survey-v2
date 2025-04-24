"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Leaf } from "lucide-react"

export default function Page1() {
  const [hover, setHover] = useState(false)

  return (
    <div className="flex flex-col items-center">
      <motion.h1
        className="text-3xl font-bold text-green-700 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🌱 The Amazing Journey of a Seed!
      </motion.h1>

      <div className="relative w-full max-w-md h-64 mb-8">
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          initial={{ scale: 0.8 }}
          animate={{ scale: hover ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div className="relative">
            {/* Soil */}
            <div className="w-64 h-16 bg-amber-800 rounded-t-full"></div>

            {/* Seed/Plant */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              {hover ? (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="flex flex-col items-center"
                >
                  {/* Stem */}
                  <div className="w-2 h-20 bg-green-500"></div>

                  {/* Leaves */}
                  <div className="relative bottom-4">
                    <motion.div
                      initial={{ rotate: -20, scale: 0 }}
                      animate={{ rotate: -20, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="absolute -left-8 -top-2"
                    >
                      <Leaf className="h-10 w-10 text-green-500 transform -rotate-45" />
                    </motion.div>
                    <motion.div
                      initial={{ rotate: 20, scale: 0 }}
                      animate={{ rotate: 20, scale: 1 }}
                      transition={{ delay: 0.4 }}
                      className="absolute -right-8 -top-2"
                    >
                      <Leaf className="h-10 w-10 text-green-500 transform rotate-45" />
                    </motion.div>
                  </div>
                </motion.div>
              ) : (
                <div className="w-6 h-6 bg-amber-600 rounded-full transform -translate-y-2"></div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="bg-white p-6 rounded-lg shadow-md max-w-lg text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <p className="text-lg mb-4">You plant a seed, and after 10 days, it grows 2 small leaves.</p>
        <p className="text-lg mb-4">
          After that, every 10 days, the number of leaves <span className="font-bold text-green-600">doubles</span>!
        </p>
        <p className="text-xl font-semibold text-green-700">
          Can you guess how many leaves it will have after 60 days?
        </p>
      </motion.div>

      <motion.div
        className="mt-8 text-sm text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p>Hint: Hover your mouse over the seed to see what happens!</p>
      </motion.div>
    </div>
  )
}
