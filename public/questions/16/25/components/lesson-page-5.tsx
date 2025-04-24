"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

interface LessonPage5Props {
  onNext: () => void
  onPrev: () => void
}

export default function LessonPage5({ onNext, onPrev }: LessonPage5Props) {
  const [selectedDigits, setSelectedDigits] = useState<string[]>([])
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)

  const handleDigitClick = (digit: string) => {
    if (selectedDigits.includes(digit)) {
      setSelectedDigits(selectedDigits.filter((d) => d !== digit))
    } else if (selectedDigits.length < 2) {
      setSelectedDigits([...selectedDigits, digit])
    }
    setIsCorrect(null)
  }

  const checkAnswer = () => {
    // Check if the selected digits are 8 and 7 (in any order)
    const isAnswerCorrect = selectedDigits.length === 2 && selectedDigits.includes("8") && selectedDigits.includes("7")

    setIsCorrect(isAnswerCorrect)

    if (isAnswerCorrect) {
      setTimeout(() => {
        setShowExplanation(true)
      }, 1000)
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">🧠 Rounding Correctly</h2>
        <p className="text-slate-600 italic">Applying significant digits to our area calculation</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 max-w-2xl mx-auto">
        <h3 className="font-semibold text-lg mb-4">Step 2: Round to the correct number of significant digits</h3>

        <div className="bg-purple-50 border border-purple-100 p-4 rounded-lg mb-6">
          <h4 className="font-medium text-purple-800 mb-2">From our previous calculation:</h4>
          <div className="text-xl text-center">
            <span className="text-amber-600 font-semibold">41 ft</span> ×{" "}
            <span className="text-blue-600 font-semibold">21.25 ft</span> ={" "}
            <span className="text-purple-600 font-semibold">871.25 ft²</span>
          </div>
          <p className="mt-3 text-slate-700">
            We need to round this to <span className="font-semibold">2 significant digits</span> because our least
            precise measurement (41 ft) has 2 significant digits.
          </p>
        </div>

        <div className="bg-slate-50 p-4 rounded-lg mb-6">
          <h4 className="font-medium mb-3">Your turn: Select the 2 significant digits in our answer</h4>
          <p className="text-sm text-slate-600 mb-3">
            Click on the 2 digits that should be kept as significant in our final answer.
          </p>

          <div className="flex items-center justify-center gap-2 mb-4">
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-lg font-semibold text-xl cursor-pointer transition-colors ${
                selectedDigits.includes("8") ? "bg-green-500 text-white" : "bg-slate-200 hover:bg-slate-300"
              }`}
              onClick={() => handleDigitClick("8")}
            >
              8
            </div>
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-lg font-semibold text-xl cursor-pointer transition-colors ${
                selectedDigits.includes("7") ? "bg-green-500 text-white" : "bg-slate-200 hover:bg-slate-300"
              }`}
              onClick={() => handleDigitClick("7")}
            >
              7
            </div>
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-lg font-semibold text-xl cursor-pointer transition-colors ${
                selectedDigits.includes("1") ? "bg-green-500 text-white" : "bg-slate-200 hover:bg-slate-300"
              }`}
              onClick={() => handleDigitClick("1")}
            >
              1
            </div>
            <div className="w-12 h-12 flex items-center justify-center rounded-lg font-semibold text-xl bg-slate-100">
              .
            </div>
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-lg font-semibold text-xl cursor-pointer transition-colors ${
                selectedDigits.includes("2") ? "bg-green-500 text-white" : "bg-slate-200 hover:bg-slate-300"
              }`}
              onClick={() => handleDigitClick("2")}
            >
              2
            </div>
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-lg font-semibold text-xl cursor-pointer transition-colors ${
                selectedDigits.includes("5") ? "bg-green-500 text-white" : "bg-slate-200 hover:bg-slate-300"
              }`}
              onClick={() => handleDigitClick("5")}
            >
              5
            </div>
          </div>

          <div className="flex justify-center">
            <Button onClick={checkAnswer} disabled={selectedDigits.length !== 2}>
              Check My Answer
            </Button>
          </div>

          {isCorrect === true && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg"
            >
              <div className="flex items-center">
                <Check className="h-5 w-5 mr-2" />
                <span className="font-medium">Correct!</span>
              </div>
              <p className="mt-1">The first two digits (8 and 7) are the significant digits we need to keep.</p>
            </motion.div>
          )}

          {isCorrect === false && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 p-3 bg-red-100 text-red-800 rounded-lg"
            >
              <div className="flex items-center">
                <X className="h-5 w-5 mr-2" />
                <span className="font-medium">Not quite!</span>
              </div>
              <p className="mt-1">
                Remember, significant digits are counted from the first non-zero digit. In 871.25, the first two
                significant digits are 8 and 7.
              </p>
            </motion.div>
          )}
        </div>

        {showExplanation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 border border-green-100 p-4 rounded-lg"
          >
            <h4 className="font-medium text-green-800 mb-2">Rounding to 2 significant digits:</h4>
            <div className="text-xl text-center mb-3">
              <span className="text-purple-600 font-semibold">871.25 ft²</span> →{" "}
              <span className="text-green-600 font-semibold">870 ft²</span>
            </div>
            <p className="text-slate-700">
              Since we need 2 significant digits, we keep the 8 and 7, and replace the remaining digits with zeros.
            </p>
            <p className="mt-2 text-slate-700">
              The 1 in the third position is less than 5, so we round down (no change to the 7).
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
        <Button onClick={onNext} disabled={!showExplanation}>
          Final Answer
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
