"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Introduction() {
  const [showAnimation, setShowAnimation] = useState(false)

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-center text-blue-700">The "Pass it Along" Game Begins!</h1>

      <div className="relative h-64 bg-blue-50 rounded-lg overflow-hidden">
        {!showAnimation ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <img src="/schoolyard-secrets.png" alt="Students in schoolyard" className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                >
                  1
                </motion.div>
              </div>

              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold absolute"
                  initial={{ opacity: 0, x: 0, y: 0 }}
                  animate={{
                    opacity: 1,
                    x: Math.cos((i * Math.PI * 2) / 3) * 100,
                    y: Math.sin((i * Math.PI * 2) / 3) * 100,
                  }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  {i}
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <p className="text-lg">
          During lunch break at school, Mike started a "Pass it Along" game. He shared a message with 3 classmates...
          What happens next?
        </p>
      </div>

      {!showAnimation && (
        <div className="flex justify-center">
          <Button onClick={() => setShowAnimation(true)} className="bg-blue-600 hover:bg-blue-700">
            Start the Game
          </Button>
        </div>
      )}
    </div>
  )
}
