"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import confetti from "canvas-confetti"
import { useEffect, useRef } from "react"

interface LessonPage6Props {
  onNext: () => void
  onPrev: () => void
}

export default function LessonPage6({ onNext, onPrev }: LessonPage6Props) {
  const confettiRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Trigger confetti when the component mounts
    if (confettiRef.current) {
      const rect = confettiRef.current.getBoundingClientRect()
      const x = rect.left + rect.width / 2
      const y = rect.top + rect.height / 2

      confetti({
        particleCount: 100,
        spread: 70,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
      })
    }
  }, [])

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">✅ What's the Final Area?</h2>
        <p className="text-slate-600 italic">Putting it all together</p>
      </div>

      <div
        ref={confettiRef}
        className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-100 rounded-lg p-8 max-w-2xl mx-auto text-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-green-800 mb-4">The classroom area is:</h3>
          <div className="text-5xl font-bold text-green-600 mb-6">870 ft²</div>

          <div className="inline-block bg-white px-4 py-2 rounded-lg shadow-sm">
            <p className="text-slate-700">
              <span className="font-semibold">Not</span> 871.25 ft² (raw calculation)
            </p>
          </div>
        </motion.div>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 max-w-2xl mx-auto">
        <h3 className="font-semibold text-lg mb-4">Summary of What We Learned</h3>

        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium text-blue-800 mb-2">The Process:</h4>
            <ol className="list-decimal list-inside space-y-2 text-slate-700">
              <li>We calculated the raw area: 41 ft × 21.25 ft = 871.25 ft²</li>
              <li>We identified the measurement with the fewest significant digits: 41 ft (2 sig figs)</li>
              <li>We rounded our answer to match: 870 ft²</li>
            </ol>
          </div>

          <div className="bg-amber-50 p-4 rounded-lg">
            <h4 className="font-medium text-amber-800 mb-2">The Key Principle:</h4>
            <p className="text-slate-700">
              <span className="font-semibold">
                Your final answer can only be as precise as your least precise measurement.
              </span>{" "}
              This is why we had to round to 2 significant digits.
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-medium text-green-800 mb-2">Why This Matters:</h4>
            <p className="text-slate-700">
              Reporting a result with too many significant digits gives a false impression of precision. In science and
              engineering, correctly handling significant digits is essential for honest and accurate reporting of
              results.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={onPrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4"
          >
            <path d="m15 18-6-6 6-6"></path>
          </svg>
          Previous
        </Button>
        <Button onClick={onNext}>
          Try a Practice Problem
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2 h-4 w-4"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Button>
      </div>
    </div>
  )
}
