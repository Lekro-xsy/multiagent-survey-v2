"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Page1() {
  const [isAnimating, setIsAnimating] = useState(false)

  const startAnimation = () => {
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 3000)
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-6 text-center text-2xl font-bold text-blue-600">📚 Brandon&apos;s Reading Marathon!</h2>

      <div className="mb-8 flex flex-col items-center md:flex-row md:gap-8">
        <div className="relative mb-6 h-64 w-64 md:mb-0">
          <img
            src="/placeholder.svg?key=u7l2j"
            alt="Brandon reading in a library"
            className="h-full w-full rounded-lg object-cover shadow-md"
          />

          {isAnimating && (
            <motion.div
              className="absolute right-4 top-4 h-16 w-12 origin-bottom-left rounded bg-white shadow-md"
              animate={{
                rotateY: [0, 180],
                opacity: [1, 0.8, 1],
              }}
              transition={{
                duration: 0.5,
                repeat: 5,
                repeatType: "reverse",
              }}
            />
          )}
        </div>

        <div className="max-w-md space-y-4 text-center md:text-left">
          <p className="text-lg text-slate-700">
            Brandon loves to read. Today, he read <span className="font-bold text-blue-600">360 words</span> in
            <span className="font-bold text-blue-600"> 12 minutes</span>.
          </p>

          <p className="text-lg text-slate-700">
            He&apos;s curious: <span className="font-bold">how many words does he read in just 1 minute?</span>
          </p>

          <Button onClick={startAnimation} className="mt-4 bg-blue-500 hover:bg-blue-600" disabled={isAnimating}>
            See Brandon Reading
          </Button>
        </div>
      </div>

      <div className="mt-4 rounded-lg bg-blue-50 p-4 text-center text-sm text-blue-700">
        <p>
          In this lesson, we&apos;ll learn how to find a <strong>unit rate</strong> - the amount per 1 unit.
        </p>
      </div>
    </div>
  )
}
