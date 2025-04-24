"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, X, HelpCircle } from "lucide-react"

interface PageFiveProps {
  onNext: () => void
}

export default function PageFive({ onNext }: PageFiveProps) {
  const [equation, setEquation] = useState("")
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [showHint, setShowHint] = useState(false)

  const checkEquation = () => {
    // Check for various correct forms of the equation
    const correctAnswers = ["2^5", "2**5", "2*2*2*2*2", "1*2^5", "1*2**5", "2⁵", "2^5=32", "32", "1*2*2*2*2*2"]

    const normalizedEquation = equation.replace(/\s+/g, "").toLowerCase()

    if (correctAnswers.some((ans) => normalizedEquation === ans.replace(/\s+/g, "").toLowerCase())) {
      setIsCorrect(true)
    } else {
      setIsCorrect(false)
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">✍️ Build Your Equation!</h1>

      <div className="mb-8">
        <p className="text-lg mb-4">
          Now that you&apos;ve observed the pattern, can you write a mathematical expression that represents the number
          of log pieces after 5 rounds of splitting?
        </p>
      </div>

      <div className="bg-green-50 p-6 rounded-lg mb-8">
        <h3 className="font-bold text-green-700 mb-4">Write your equation:</h3>
        <div className="flex gap-2 mb-4">
          <Input
            value={equation}
            onChange={(e) => {
              setEquation(e.target.value)
              setIsCorrect(null)
            }}
            placeholder="Enter your mathematical expression"
            className="text-lg"
          />
          <Button onClick={checkEquation} className="bg-green-700 hover:bg-green-800" disabled={!equation}>
            Check
          </Button>
        </div>

        {isCorrect !== null && (
          <div className={`flex items-center ${isCorrect ? "text-green-600" : "text-red-600"} mb-4`}>
            {isCorrect ? (
              <>
                <Check className="mr-2" />
                <span>Correct! That&apos;s the right mathematical expression.</span>
              </>
            ) : (
              <>
                <X className="mr-2" />
                <span>Not quite. Try again!</span>
              </>
            )}
          </div>
        )}

        <div className="flex justify-between items-center">
          <Button variant="ghost" size="sm" onClick={() => setShowHint(!showHint)} className="text-green-700">
            <HelpCircle className="mr-2 h-4 w-4" />
            {showHint ? "Hide Hint" : "Show Hint"}
          </Button>

          {isCorrect && (
            <Button onClick={onNext} className="bg-green-700 hover:bg-green-800">
              Continue
            </Button>
          )}
        </div>

        {showHint && (
          <div className="mt-4 p-4 bg-white rounded-lg border border-green-200">
            <h4 className="font-medium text-green-700 mb-2">Hints:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>The number of logs doubles in each round</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>You can use exponents (powers) to represent repeated multiplication</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Try using 2 raised to the power of 5 (2^5 or 2⁵)</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
