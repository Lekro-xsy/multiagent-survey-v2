"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function GrowthAnimation() {
  const [currentRound, setCurrentRound] = useState(0)

  const rounds = [
    { round: 0, students: 1, explanation: "We start with 1 student who knows the message." },
    { round: 1, students: 3, explanation: "The first student tells 3 new students: 1 × 3 = 3 students" },
    { round: 2, students: 9, explanation: "Each of the 3 students tells 3 new students: 3 × 3 = 9 students" },
    { round: 3, students: 27, explanation: "Each of the 9 students tells 3 new students: 9 × 3 = 27 students" },
    { round: 4, students: "?", explanation: "How many students will hear the message in round 4?" },
  ]

  const goToNextRound = () => {
    if (currentRound < rounds.length - 1) {
      setCurrentRound(currentRound + 1)
    }
  }

  const goToPreviousRound = () => {
    if (currentRound > 0) {
      setCurrentRound(currentRound - 1)
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-center text-blue-700">How Does the Number of Students Change?</h1>

      <div className="bg-blue-50 p-6 rounded-lg">
        <div className="flex justify-between items-center mb-6">
          <Button variant="outline" onClick={goToPreviousRound} disabled={currentRound === 0}>
            Previous Round
          </Button>

          <div className="text-xl font-bold">Round {rounds[currentRound].round}</div>

          <Button onClick={goToNextRound} disabled={currentRound === rounds.length - 1}>
            Next Round
          </Button>
        </div>

        <div className="flex flex-col items-center space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRound}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-blue-700">{rounds[currentRound].students}</span>
                  <span className="text-xl ml-2">students</span>
                </div>

                <div className="flex justify-center flex-wrap gap-2">
                  {Array.from({
                    length: typeof rounds[currentRound].students === "number" ? rounds[currentRound].students : 0,
                  }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.01, duration: 0.3 }}
                      className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs"
                    >
                      {i + 1}
                    </motion.div>
                  ))}

                  {rounds[currentRound].students === "?" && (
                    <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center text-white text-3xl font-bold">
                      ?
                    </div>
                  )}
                </div>

                <div className="mt-6 text-center">
                  <p className="text-lg">{rounds[currentRound].explanation}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="w-full max-w-md">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="grid grid-cols-5 gap-2 text-center">
                <div className="font-bold">Round</div>
                {rounds.map((round, i) => (
                  <div key={i} className={`${currentRound === i ? "bg-blue-100 font-bold" : ""} rounded p-1`}>
                    {round.round}
                  </div>
                ))}

                <div className="font-bold">Students</div>
                {rounds.map((round, i) => (
                  <div key={i} className={`${currentRound === i ? "bg-blue-100 font-bold" : ""} rounded p-1`}>
                    {round.students}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
