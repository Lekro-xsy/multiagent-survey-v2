"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Check, X, HelpCircle } from "lucide-react"
import Image from "next/image"

interface LessonPage8Props {
  onNext: () => void
  onPrev: () => void
}

export default function LessonPage8({ onNext, onPrev }: LessonPage8Props) {
  const [userAnswer, setUserAnswer] = useState("")
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [showHint, setShowHint] = useState(false)
  const [showSolution, setShowSolution] = useState(false)

  const checkAnswer = () => {
    const parsedAnswer = Number.parseFloat(userAnswer.replace(/,/g, ""))
    // Check if the answer is 3.0 (2.5 × 1.2 × 1.00 = 3.00, rounded to 2 sig figs)
    const isAnswerCorrect = Math.abs(parsedAnswer - 3.0) < 0.01
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
        <h2 className="text-3xl font-bold text-slate-800 mb-2">🌍 Challenge Problem: Volume of a Box</h2>
        <p className="text-slate-600 italic">Apply significant digits to a three-dimensional problem</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-4">The Scenario</h3>

          <div className="relative w-full aspect-video bg-slate-100 rounded-lg overflow-hidden mb-4">
            <Image src="/labeled-box.png" alt="Box with dimensions" fill className="object-cover" />
          </div>

          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <p className="text-slate-700">
              You need to calculate the volume of a rectangular box. You've measured all three dimensions:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-700">
              <li>
                Length: <span className="font-semibold text-blue-600">2.5 meters</span>
              </li>
              <li>
                Width: <span className="font-semibold text-amber-600">1.2 meters</span>
              </li>
              <li>
                Height: <span className="font-semibold text-green-600">1.00 meters</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Your measurements:</h4>
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg text-center">
                <div className="text-sm text-blue-800">Length</div>
                <div className="font-semibold text-blue-600">2.5 m</div>
                <div className="text-xs text-blue-800">(2 sig figs)</div>
              </div>
              <div className="bg-amber-100 p-2 rounded-lg text-center">
                <div className="text-sm text-amber-800">Width</div>
                <div className="font-semibold text-amber-600">1.2 m</div>
                <div className="text-xs text-amber-800">(2 sig figs)</div>
              </div>
              <div className="bg-green-100 p-2 rounded-lg text-center">
                <div className="text-sm text-green-800">Height</div>
                <div className="font-semibold text-green-600">1.00 m</div>
                <div className="text-xs text-green-800">(3 sig figs)</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-4">Calculate the Box Volume</h3>

          <div className="bg-slate-50 p-4 rounded-lg mb-4">
            <h4 className="font-medium mb-3">Step 1: Calculate the raw volume</h4>
            <div className="text-center mb-3">
              <div className="text-lg">Volume = Length × Width × Height</div>
              <div className="text-lg">Volume = 2.5 m × 1.2 m × 1.00 m = 3.00 m³</div>
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg mb-4">
            <h4 className="font-medium mb-3">Step 2: Apply significant digits rule</h4>
            <p className="mb-3 text-slate-700">
              Which measurement has the fewest significant digits? How many significant digits should your answer have?
            </p>

            <div className="flex items-center gap-2 mb-4">
              <div className="text-lg">Final Volume =</div>
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
              <div className="text-lg">m³</div>
            </div>

            <div className="flex justify-between">
              <Button onClick={checkAnswer} disabled={!userAnswer}>
                Check Answer
              </Button>

              <Button variant="outline" size="icon" onClick={() => setShowHint(!showHint)}>
                <HelpCircle className="h-4 w-4" />
              </Button>
            </div>

            {showHint && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-3 p-3 bg-blue-50 text-slate-700 rounded-lg text-sm"
              >
                <p className="font-medium text-blue-800 mb-1">Hint:</p>
                <p>
                  The same rule applies even with three measurements: identify which measurement has the fewest
                  significant digits, and round your final answer to match that precision.
                </p>
              </motion.div>
            )}

            {isCorrect === true && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-3 p-3 bg-green-100 text-green-800 rounded-lg"
              >
                <div className="flex items-center">
                  <Check className="h-5 w-5 mr-2" />
                  <span className="font-medium">Correct!</span>
                </div>
              </motion.div>
            )}

            {isCorrect === false && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-3 p-3 bg-red-100 text-red-800 rounded-lg"
              >
                <div className="flex items-center">
                  <X className="h-5 w-5 mr-2" />
                  <span className="font-medium">Try again!</span>
                </div>
                <p className="mt-1 text-sm">
                  Look at all three measurements and identify which has the fewest significant digits.
                </p>
              </motion.div>
            )}
          </div>

          {showSolution && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-50 border border-green-100 p-4 rounded-lg"
            >
              <h4 className="font-medium text-green-800 mb-2">Solution:</h4>
              <p className="text-slate-700 mb-2">
                Both the length (2.5 m) and width (1.2 m) have 2 significant digits, while the height (1.00 m) has 3
                significant digits.
              </p>
              <p className="text-slate-700 mb-2">
                Since the length and width have the fewest significant digits (2), our final answer must have 2
                significant digits.
              </p>
              <div className="text-center text-lg font-semibold text-green-600">2.5 m × 1.2 m × 1.00 m = 3.0 m³</div>
            </motion.div>
          )}
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
        <Button onClick={onNext} disabled={!showSolution}>
          Final Quiz
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
