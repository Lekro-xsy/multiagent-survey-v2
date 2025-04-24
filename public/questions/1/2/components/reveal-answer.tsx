"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, XCircle } from "lucide-react"

interface RevealAnswerProps {
  userAnswer: string
  userDerivation: string
}

export default function RevealAnswer({ userAnswer, userDerivation }: RevealAnswerProps) {
  const [showAnswer, setShowAnswer] = useState(false)
  const correctAnswer = "81"
  const isCorrect = userAnswer === correctAnswer

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-center text-blue-700">The Answer Revealed!</h1>

      <div className="bg-blue-50 p-6 rounded-lg">
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4">Your Response</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 border rounded-lg">
                <h3 className="font-medium mb-2">Your Answer:</h3>
                <div className="flex items-center">
                  <div className="text-2xl font-bold">{userAnswer || "No answer provided"}</div>
                  {userAnswer && (
                    <div className="ml-2">
                      {isCorrect ? (
                        <CheckCircle className="text-green-500 h-6 w-6" />
                      ) : (
                        <XCircle className="text-red-500 h-6 w-6" />
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="p-3 border rounded-lg">
                <h3 className="font-medium mb-2">Your Derivation:</h3>
                <div className="text-sm whitespace-pre-wrap">{userDerivation || "No derivation provided"}</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Button onClick={() => setShowAnswer(!showAnswer)} className="bg-blue-600 hover:bg-blue-700">
              {showAnswer ? "Hide Detailed Solution" : "Show Detailed Solution"}
            </Button>
          </div>

          <AnimatePresence>
            {showAnswer && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-white p-4 rounded-lg shadow-sm"
              >
                <h2 className="text-xl font-bold mb-4">Detailed Solution</h2>

                <div className="space-y-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <h3 className="font-medium mb-2">Step-by-Step Derivation:</h3>
                    <ul className="list-decimal pl-6 space-y-2">
                      <li>Round 0: We start with 1 student</li>
                      <li>Round 1: 1 × 3 = 3 students</li>
                      <li>Round 2: 3 × 3 = 9 students</li>
                      <li>Round 3: 9 × 3 = 27 students</li>
                      <li>Round 4: 27 × 3 = 81 students</li>
                    </ul>
                  </div>

                  <div className="p-3 bg-blue-50 rounded-lg">
                    <h3 className="font-medium mb-2">Using Exponents:</h3>
                    <p>We can express this pattern using exponents:</p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      <li>Round 1: 3¹ = 3 students</li>
                      <li>Round 2: 3² = 9 students</li>
                      <li>Round 3: 3³ = 27 students</li>
                      <li>Round 4: 3⁴ = 81 students</li>
                    </ul>
                    <p className="mt-2 font-medium">
                      Therefore, in round 4, there are 81 students who hear the message.
                    </p>
                  </div>

                  <div className="p-3 bg-green-50 rounded-lg">
                    <h3 className="font-medium mb-2">Formula:</h3>
                    <p>For any round n, the number of students is 3ⁿ.</p>
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <div className="grid grid-cols-9 gap-1">
                    {Array.from({ length: 81 }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.01, duration: 0.3 }}
                        className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
