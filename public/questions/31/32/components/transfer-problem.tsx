"use client"

import { useState } from "react"
import { Check, X, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

interface TransferProblemProps {
  type: "near" | "far"
  problem: string
  hint: string
}

export default function TransferProblem({ type, problem, hint }: TransferProblemProps) {
  const [answer, setAnswer] = useState("")
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [showHint, setShowHint] = useState(false)
  const [showSolution, setShowSolution] = useState(false)

  // Define correct answers based on problem type
  const correctAnswer = type === "near" ? "16,17" : "22,23"
  const solution =
    type === "near"
      ? "n(n+1) = 272, n² + n - 272 = 0, (n-16)(n+17) = 0, n = 16, n+1 = 17"
      : "n(n+1) = 506, n² + n - 506 = 0, (n-22)(n+23) = 0, n = 22, n+1 = 23"

  const checkAnswer = () => {
    // Accept various formats of the correct answer
    const normalizedAnswer = answer.replace(/\s+/g, "").toLowerCase()
    const correctAnswers = [
      correctAnswer,
      correctAnswer.split(",").reverse().join(","),
      correctAnswer.replace(",", "and"),
      correctAnswer.replace(",", "&"),
    ]

    const isCorrect = correctAnswers.some((correct) => normalizedAnswer.includes(correct))

    setIsCorrect(isCorrect)
  }

  return (
    <div className="space-y-6">
      <div className="rounded-lg bg-slate-100 p-4">
        <h3 className="text-lg font-medium text-slate-800">New Problem:</h3>
        <p className="mt-2 text-slate-700">{problem}</p>
      </div>

      <Card className="p-4">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-slate-800">Your Solution:</h3>
            <p className="text-sm text-slate-600">
              {type === "near"
                ? "What are the two page numbers? Enter them separated by a comma."
                : "What are the two locker numbers? Enter them separated by a comma."}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <Input
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder={type === "near" ? "e.g., 16, 17" : "e.g., 22, 23"}
              className="font-mono"
            />
            <Button onClick={checkAnswer} disabled={!answer} className="bg-blue-600 hover:bg-blue-700">
              Check
            </Button>
          </div>

          {isCorrect === true && (
            <div className="rounded-md bg-green-50 p-3 text-green-800">
              <div className="flex items-center">
                <Check className="mr-2 h-5 w-5 text-green-600" />
                <p className="font-medium">
                  Correct! The {type === "near" ? "page" : "locker"} numbers are {correctAnswer.replace(",", " and ")}.
                </p>
              </div>
            </div>
          )}

          {isCorrect === false && (
            <div className="rounded-md bg-red-50 p-3 text-red-800">
              <div className="flex items-center">
                <X className="mr-2 h-5 w-5 text-red-600" />
                <p className="font-medium">Not quite right. Try again!</p>
              </div>
            </div>
          )}

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setShowHint(!showHint)} className="flex items-center">
              <Lightbulb className="mr-2 h-4 w-4" />
              {showHint ? "Hide Hint" : "Show Hint"}
            </Button>

            <Button variant="outline" onClick={() => setShowSolution(!showSolution)}>
              {showSolution ? "Hide Solution" : "Show Solution"}
            </Button>
          </div>

          {showHint && (
            <div className="rounded-md bg-yellow-50 p-3 text-yellow-800">
              <p className="font-medium">Hint:</p>
              <p>{hint}</p>
              <p className="mt-2">Set up the equation n(n+1) = {type === "near" ? "272" : "506"} and solve for n.</p>
            </div>
          )}

          {showSolution && (
            <div className="mt-2 rounded-md bg-blue-50 p-3 text-blue-800">
              <p className="font-medium">Solution:</p>
              <p className="mt-1">{solution}</p>
              <p className="mt-2 font-medium">
                The {type === "near" ? "page" : "locker"} numbers are {correctAnswer.replace(",", " and ")}.
              </p>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
