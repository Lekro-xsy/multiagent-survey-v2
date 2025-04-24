"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, X, HelpCircle } from "lucide-react"

interface PageSevenProps {
  onNext: () => void
}

export default function PageSeven({ onNext }: PageSevenProps) {
  const [answer, setAnswer] = useState("")
  const [equation, setEquation] = useState("")
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null)
  const [isEquationCorrect, setIsEquationCorrect] = useState<boolean | null>(null)
  const [showHint, setShowHint] = useState(false)

  const checkAnswer = () => {
    const userAnswer = Number.parseInt(answer)
    if (userAnswer === 81) {
      setIsAnswerCorrect(true)
    } else {
      setIsAnswerCorrect(false)
    }
  }

  const checkEquation = () => {
    // Check for various correct forms of the equation
    const correctAnswers = ["3^4", "3**4", "3*3*3*3", "1*3^4", "1*3**4", "3⁴", "3^4=81", "81", "1*3*3*3*3"]

    const normalizedEquation = equation.replace(/\s+/g, "").toLowerCase()

    if (correctAnswers.some((ans) => normalizedEquation === ans.replace(/\s+/g, "").toLowerCase())) {
      setIsEquationCorrect(true)
    } else {
      setIsEquationCorrect(false)
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">🔄 Try Another Log Problem!</h1>

      <div className="bg-amber-50 p-6 rounded-lg mb-8">
        <h3 className="font-bold text-amber-800 mb-4 text-xl">New Challenge:</h3>
        <p className="text-lg mb-4">
          This time, each log splits into <strong>3 pieces</strong> instead of 2! After 4 rounds of splitting, how many
          pieces will there be?
        </p>

        <div className="flex justify-center mb-6">
          <img src="/split-log-diagram.png" alt="Log splitting into three pieces" className="rounded-lg" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-bold text-green-700 mb-4">Your Answer:</h3>
          <div className="flex gap-2 mb-4">
            <Input
              value={answer}
              onChange={(e) => {
                setAnswer(e.target.value)
                setIsAnswerCorrect(null)
              }}
              placeholder="Number of pieces"
              type="number"
            />
            <Button onClick={checkAnswer} className="bg-green-700 hover:bg-green-800" disabled={!answer}>
              Check
            </Button>
          </div>

          {isAnswerCorrect !== null && (
            <div className={`flex items-center ${isAnswerCorrect ? "text-green-600" : "text-red-600"} mb-4`}>
              {isAnswerCorrect ? (
                <>
                  <Check className="mr-2" />
                  <span>Correct! There are 81 pieces after 4 rounds.</span>
                </>
              ) : (
                <>
                  <X className="mr-2" />
                  <span>Not quite. Try again!</span>
                </>
              )}
            </div>
          )}
        </div>

        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-bold text-green-700 mb-4">Your Equation:</h3>
          <div className="flex gap-2 mb-4">
            <Input
              value={equation}
              onChange={(e) => {
                setEquation(e.target.value)
                setIsEquationCorrect(null)
              }}
              placeholder="Mathematical expression"
            />
            <Button onClick={checkEquation} className="bg-green-700 hover:bg-green-800" disabled={!equation}>
              Check
            </Button>
          </div>

          {isEquationCorrect !== null && (
            <div className={`flex items-center ${isEquationCorrect ? "text-green-600" : "text-red-600"} mb-4`}>
              {isEquationCorrect ? (
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
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Button variant="ghost" size="sm" onClick={() => setShowHint(!showHint)} className="text-green-700">
          <HelpCircle className="mr-2 h-4 w-4" />
          {showHint ? "Hide Hint" : "Show Hint"}
        </Button>

        <Button
          onClick={onNext}
          className="bg-green-700 hover:bg-green-800"
          disabled={!isAnswerCorrect || !isEquationCorrect}
        >
          Continue to Challenge
        </Button>
      </div>

      {showHint && (
        <div className="mt-4 p-4 bg-white rounded-lg border border-green-200">
          <h4 className="font-medium text-green-700 mb-2">Hints:</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              <span>Instead of doubling, the number of logs is now tripling in each round</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              <span>You can use the same pattern as before, but with a different base number</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              <span>Try using 3 raised to the power of 4 (3^4 or 3⁴)</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
