"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface BookVisualizationProps {
  showNumbers: boolean
  leftPage: string
  rightPage: string
  showLabels?: boolean
}

export default function BookVisualization({
  showNumbers,
  leftPage,
  rightPage,
  showLabels = false,
}: BookVisualizationProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative mx-auto w-full max-w-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex">
        {/* Book spine */}
        <div className="h-64 w-4 bg-slate-700"></div>

        {/* Left page */}
        <motion.div
          className="flex h-64 w-1/2 items-center justify-center rounded-tl-md rounded-bl-md border border-slate-300 bg-white shadow-md"
          animate={isHovered ? { rotateY: -5 } : { rotateY: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            {showLabels && <div className="mb-2 text-sm font-medium text-slate-500">Left Page</div>}
            <div className="text-4xl font-bold text-slate-800">{leftPage}</div>
            {showLabels && <div className="mt-4 text-sm font-medium text-blue-600">n</div>}
          </div>
        </motion.div>

        {/* Right page */}
        <motion.div
          className="flex h-64 w-1/2 items-center justify-center rounded-tr-md rounded-br-md border border-slate-300 bg-white shadow-md"
          animate={isHovered ? { rotateY: 5 } : { rotateY: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            {showLabels && <div className="mb-2 text-sm font-medium text-slate-500">Right Page</div>}
            <div className="text-4xl font-bold text-slate-800">{rightPage}</div>
            {showLabels && <div className="mt-4 text-sm font-medium text-blue-600">n+1</div>}
          </div>
        </motion.div>
      </div>

      {showLabels && (
        <div className="mt-4 text-center text-sm text-slate-600">
          <p>Hover over the book to see it open slightly</p>
          {isHovered && (
            <motion.div
              className="mt-2 rounded-md bg-blue-50 p-2 text-blue-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              The product of these pages is 306
            </motion.div>
          )}
        </div>
      )}
    </div>
  )
}
