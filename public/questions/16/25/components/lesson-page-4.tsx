"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

interface LessonPage4Props {
  onNext: () => void
  onPrev: () => void
}

export default function LessonPage4({ onNext, onPrev }: LessonPage4Props) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    setIsCorrect(option === "41")
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">📚 Which Measurement Controls Precision?</h2>
        <p className="text-slate-600 italic">Understanding the rules of significant digits</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 max-w-2xl mx-auto">
        <h3 className="font-semibold text-lg mb-4">The Rules for Multiplication and Division</h3>

        <div className="bg-yellow-50 border border-yellow-100 p-4 rounded-lg mb-6">
          <h4 className="font-medium text-yellow-800 mb-2">Key Rule:</h4>
          <p className="text-lg text-center font-medium">
            When multiplying or dividing, your answer can only be as precise as your least precise measurement.
          </p>
          <p className="mt-2 text-slate-700">
            In other words, the result must have the same number of significant digits as the factor with the fewest
            significant digits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium text-blue-800 mb-2">Width: 21.25 ft</h4>
            <div className="flex items-center justify-center gap-1 mb-2">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg font-semibold">2</div>
              <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg font-semibold">1</div>
              <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg font-semibold">.</div>
              <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg font-semibold">2</div>
              <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg font-semibold">5</div>
            </div>
            <p className="text-center text-blue-800">4 significant digits</p>
          </div>

          <div className="bg-amber-50 p-4 rounded-lg">
            <h4 className="font-medium text-amber-800 mb-2">Length: 41 ft</h4>
            <div className="flex items-center justify-center gap-1 mb-2">
              <div className="w-10 h-10 flex items-center justify-center bg-amber-100 rounded-lg font-semibold">4</div>
              <div className="w-10 h-10 flex items-center justify-center bg-amber-100 rounded-lg font-semibold">1</div>
            </div>
            <p className="text-center text-amber-800">2 significant digits</p>
          </div>
        </div>

        <div className="bg-slate-50 p-4 rounded-lg">
          <h4 className="font-medium mb-3">Your turn: Which measurement controls the precision of our final answer?</h4>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant={selectedOption === "21.25" ? "default" : "outline"}
              className={selectedOption === "21.25" && isCorrect === false ? "bg-red-500 hover:bg-red-600" : ""}
              onClick={() => handleOptionClick("21.25")}
            >
              Width (21.25 ft)
            </Button>
            <Button
              variant={selectedOption === "41" ? "default" : "outline"}
              className={selectedOption === "41" && isCorrect === true ? "bg-green-500 hover:bg-green-600" : ""}
              onClick={() => handleOptionClick("41")}
            >
              Length (41 ft)
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
              <p className="mt-1">
                The length (41 ft) has only 2 significant digits, which is fewer than the width's 4 significant digits.
                So our final answer must have 2 significant digits.
              </p>
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
                We need to look for the measurement with the fewest significant digits. The width (21.25 ft) has 4
                significant digits, while the length (41 ft) has only 2.
              </p>
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
        <Button onClick={onNext} disabled={!isCorrect}>
          Apply to Our Answer
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
