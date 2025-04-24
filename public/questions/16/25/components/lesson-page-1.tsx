"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

interface LessonPage1Props {
  onNext: () => void
}

export default function LessonPage1({ onNext }: LessonPage1Props) {
  const [isAnimating, setIsAnimating] = useState(false)

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">🏫 Measuring the Classroom!</h2>
        <p className="text-slate-600 italic">Let's learn about significant digits with a real-world example</p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="relative w-full md:w-1/2 aspect-video bg-slate-100 rounded-lg overflow-hidden">
          <Image
            src="/classroom-measurement.png"
            alt="Mauri and Ali measuring their classroom"
            fill
            className="object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h3 className="font-semibold text-blue-800 mb-2">The Scenario:</h3>
            <p className="text-slate-700">
              Mauri and Ali are working on a math project. They need to find the area of their classroom.
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-700">
              <li>
                Mauri measured the width <span className="font-semibold">precisely</span>.
              </li>
              <li>
                Ali measured the length <span className="font-semibold">roughly</span>.
              </li>
              <li>Now they need to calculate the area correctly!</li>
            </ul>
          </div>

          <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
            <h3 className="font-semibold text-amber-800 mb-2">The Challenge:</h3>
            <p className="text-slate-700">
              When measurements have different levels of precision, how do we report our final answer correctly?
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <motion.div animate={isAnimating ? { y: [0, -10, 0] } : {}} transition={{ duration: 0.5 }}>
          <Button
            size="lg"
            onClick={() => {
              setIsAnimating(true)
              setTimeout(onNext, 500)
            }}
            className="group"
          >
            See the Measurements!
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
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
