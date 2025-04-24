"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

interface LessonPage3Props {
  onNext: () => void
  onPrev: () => void
}

export default function LessonPage3({ onNext, onPrev }: LessonPage3Props) {
  const [userAnswer, setUserAnswer] = useState("")
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [showSolution, setShowSolution] = useState(false)

  const checkAnswer = () => {
    const parsedAnswer = Number.parseFloat(userAnswer.replace(/,/g, ""))
    // Check if the answer is within a small margin of error of 871.25
    const isAnswerCorrect = Math.abs(parsedAnswer - 871.25) < 0.01
    setIsCorrect(isAnswerCorrect)

    if (isAnswerCorrect) {
      setTimeout(() => {
        setShowSolution(true)
      }, 1000)
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">✍️ Multiply to Find Area</h2>
        <p className="text-slate-600 italic">Let's calculate the raw area first</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 max-w-2xl mx-auto">
        <h3 className="font-semibold text-lg mb-4">Step 1: Use the area formula</h3>

        <div className="flex items-center justify-center mb-6">
          <div className="text-center">
            <div className="text-2xl font-medium mb-2">Area = Length × Width</div>
            <div className="text-xl">
              Area = <span className="text-amber-600 font-semibold">41 ft</span> ×{" "}
              <span className="text-blue-600 font-semibold">21.25 ft</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-4 rounded-lg mb-6">
          <h4 className="font-medium mb-2">Your turn: Calculate the area</h4>
          <div className="flex items-center gap-2">
            <div className="text-lg">Area =</div>
            <div className="flex-1">
              <Input
                type="text"
                value={userAnswer}
                onChange={(e) => {
                  setUserAnswer(e.target.value)
                  setIsCorrect(null)
                }}
                placeholder="Enter your answer"
                className={`text-lg ${
                  isCorrect === true ? "border-green-500" : isCorrect === false ? "border-red-500" : ""
                }`}
              />
            </div>
            <div className="text-lg">ft²</div>
            <Button onClick={checkAnswer} disabled={!userAnswer} size="sm">
              Check
            </Button>
          </div>

          {isCorrect === true && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center mt-2 text-green-600"
            >
              <Check className="h-5 w-5 mr-1" />
              <span>Correct! 41 × 21.25 = 871.25 ft²</span>
            </motion.div>
          )}

          {isCorrect === false && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center mt-2 text-red-600"
            >
              <X className="h-5 w-5 mr-1" />
              <span>Try again. Multiply 41 by 21.25.</span>
            </motion.div>
          )}
        </div>

        {showSolution && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 border border-green-100 p-4 rounded-lg"
          >
            <h4 className="font-medium text-green-800 mb-2">Raw Calculation:</h4>
            <div className="text-xl text-center">
              <span className="text-amber-600 font-semibold">41 ft</span> ×{" "}
              <span className="text-blue-600 font-semibold">21.25 ft</span> ={" "}
              <span className="text-purple-600 font-semibold">871.25 ft²</span>
            </div>
            <p className="mt-3 text-slate-700">
              Great! We've calculated the raw area. But wait - is this our final answer?
              <span className="font-medium"> Not yet!</span> We need to consider significant digits.
            </p>
          </motion.div>
        )}
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
        <Button onClick={onNext} disabled={!showSolution}>
          Learn About Significant Digits
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
