"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, X, HelpCircle } from "lucide-react"

interface PageEightProps {
  onNext: () => void
}

export default function PageEight({ onNext }: PageEightProps) {
  const [answer, setAnswer] = useState("")
  const [equation, setEquation] = useState("")
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null)
  const [isEquationCorrect, setIsEquationCorrect] = useState<boolean | null>(null)
  const [showHint, setShowHint] = useState(false)

  const checkAnswer = () => {
    const userAnswer = Number.parseInt(answer)
    if (userAnswer === 32) {
      setIsAnswerCorrect(true)
    } else {
      setIsAnswerCorrect(false)
    }
  }

  const checkEquation = () => {
    // Check for various correct forms of the equation
    const correctAnswers = ["2^5", "2**5", "2*2*2*2*2", "1*2^5", "1*2**5", "2⁵", "2^5=32", "32", "1*2*2*2*2*2"]

    const normalizedEquation = equation.replace(/\s+/g, "").toLowerCase()

    if (correctAnswers.some((ans) => normalizedEquation === ans.replace(/\s+/g, "").toLowerCase())) {
      setIsEquationCorrect(true)
    } else {
      setIsEquationCorrect(false)
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">🚀 A Different World... Same Math!</h1>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h3 className="font-bold text-blue-800 mb-4 text-xl">Cell Division Challenge:</h3>
        <p className="text-lg mb-4">
          A single cell divides into 2 cells. Each new cell divides again in the next round. After 5 divisions, how many
          cells are there?
        </p>

        <div className="flex justify-center mb-6">
          <img src="/cell-division-petri-dish.png" alt="Cell division in petri dish" className="rounded-lg" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-bold text-blue-700 mb-4">Your Answer:</h3>
          <div className="flex gap-2 mb-4">
            <Input
              value={answer}
              onChange={(e) => {
                setAnswer(e.target.value)
                setIsAnswerCorrect(null)
              }}
              placeholder="Number of cells"
              type="number"
            />
            <Button onClick={checkAnswer} className="bg-blue-700 hover:bg-blue-800" disabled={!answer}>
              Check
            </Button>
          </div>

          {isAnswerCorrect !== null && (
            <div className={`flex items-center ${isAnswerCorrect ? "text-green-600" : "text-red-600"} mb-4`}>
              {isAnswerCorrect ? (
                <>
                  <Check className="mr-2" />
                  <span>Correct! There are 32 cells after 5 divisions.</span>
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
          <h3 className="font-bold text-blue-700 mb-4">Your Equation:</h3>
          <div className="flex gap-2 mb-4">
            <Input
              value={equation}
              onChange={(e) => {
                setEquation(e.target.value)
                setIsEquationCorrect(null)
              }}
              placeholder="Mathematical expression"
            />
            <Button onClick={checkEquation} className="bg-blue-700 hover:bg-blue-800" disabled={!equation}>
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

      <div className="bg-blue-100 p-4 rounded-lg mb-6">
        <h4 className="font-medium text-blue-800 mb-2">Notice anything familiar?</h4>
        <p>
          Even though we&apos;re talking about cells instead of logs, the mathematical pattern is the same! This is the
          power of mathematical modeling - the same patterns appear in many different situations.
        </p>
      </div>

      <div className="flex justify-between items-center">
        <Button variant="ghost" size="sm" onClick={() => setShowHint(!showHint)} className="text-blue-700">
          <HelpCircle className="mr-2 h-4 w-4" />
          {showHint ? "Hide Hint" : "Show Hint"}
        </Button>

        <Button
          onClick={onNext}
          className="bg-blue-700 hover:bg-blue-800"
          disabled={!isAnswerCorrect || !isEquationCorrect}
        >
          Continue to Summary
        </Button>
      </div>

      {showHint && (
        <div className="mt-4 p-4 bg-white rounded-lg border border-blue-200">
          <h4 className="font-medium text-blue-700 mb-2">Hints:</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Think about how this problem compares to the log splitting problem</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>The cells double each round, just like the logs did</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>The same mathematical model applies: 2 raised to the power of 5</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
