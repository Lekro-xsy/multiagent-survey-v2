"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Page3() {
  const [distributedMinutes, setDistributedMinutes] = useState<number[]>([])
  const totalMinutes = 12
  const totalWords = 360
  const wordsPerMinute = totalWords / totalMinutes

  const handleDistribute = (minute: number) => {
    if (!distributedMinutes.includes(minute)) {
      setDistributedMinutes([...distributedMinutes, minute])
    }
  }

  const isDistributed = (minute: number) => {
    return distributedMinutes.includes(minute)
  }

  const allDistributed = distributedMinutes.length === totalMinutes

  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-6 text-center text-2xl font-bold text-purple-600">
        🎯 What Does &apos;Words Per Minute&apos; Mean?
      </h2>

      <div className="mb-6 max-w-2xl text-center">
        <p className="text-lg text-slate-700">Imagine breaking up the 360 words equally across the 12 minutes.</p>
        <p className="mt-2 text-lg text-slate-700">Each minute &quot;earns&quot; the same number of words.</p>
      </div>

      <div className="mb-8">
        <h3 className="mb-4 text-center text-lg font-semibold text-purple-600">
          Click each minute to distribute words evenly
        </h3>

        <div className="grid grid-cols-4 gap-3 md:grid-cols-6">
          {Array.from({ length: totalMinutes }).map((_, index) => (
            <motion.div
              key={index}
              className={`flex h-24 w-20 cursor-pointer flex-col items-center justify-center rounded-lg border-2 ${
                isDistributed(index) ? "border-purple-500 bg-purple-50" : "border-dashed border-gray-300 bg-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleDistribute(index)}
            >
              <p className="text-sm font-medium text-slate-600">Minute {index + 1}</p>
              {isDistributed(index) && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-2 text-center">
                  <p className="font-bold text-purple-600">{wordsPerMinute} words</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {allDistributed && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 rounded-lg bg-purple-100 p-4 text-center"
        >
          <p className="text-lg font-semibold text-purple-700">
            Great job! You&apos;ve discovered that Brandon reads {wordsPerMinute} words per minute!
          </p>
          <p className="mt-2 text-purple-600">
            This is called a <strong>unit rate</strong> - the amount per 1 unit (in this case, 1 minute).
          </p>
        </motion.div>
      )}

      <div className="mt-6 rounded-lg bg-blue-50 p-4 text-center text-sm text-blue-700">
        <p>
          <strong>Guiding Question:</strong> If 360 words are spread evenly across 12 minutes, how many in just 1
          minute?
        </p>
      </div>
    </div>
  )
}
