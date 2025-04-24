"use client"

import { useState } from "react"
import { Check, X, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ProblemSolver() {
  const [answer, setAnswer] = useState("")
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [showHint, setShowHint] = useState(false)
  const [hintLevel, setHintLevel] = useState(0)

  const hints = [
    "Try to factor the equation n² + n - 306 = 0",
    "Look for two numbers that multiply to -306 and add up to 1",
    "Try numbers close to √306 ≈ 17.5",
    "Check if 17 and 18 work: 17 × 18 = 306",
  ]

  const checkAnswer = () => {
    // Accept various formats of the correct answer
    const normalizedAnswer = answer.replace(/\s+/g, "").toLowerCase()
    const correctAnswers = ["17,18", "17and18", "pages17and18", "17&18", "n=17,n+1=18"]

    const isCorrect = correctAnswers.some(
      (correct) => normalizedAnswer.includes(correct) || normalizedAnswer.includes("18,17"),
    )

    setIsCorrect(isCorrect)
  }

  const getNextHint = () => {
    if (hintLevel < hints.length - 1) {
      setHintLevel(hintLevel + 1)
    }
    setShowHint(true)
  }

  return (
    <div className="space-y-6">
      <div className="rounded-lg bg-slate-100 p-4">
        <h3 className="text-lg font-medium text-slate-800">Solve the equation:</h3>
        <div className="mt-2 flex items-center justify-center rounded-md bg-white p-4 shadow-sm">
          <span className="text-xl font-medium text-slate-800">n² + n - 306 = 0</span>
        </div>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="approach">
          <AccordionTrigger>Solving Approach</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 rounded-md bg-slate-50 p-3">
              <p>There are two main ways to solve this quadratic equation:</p>
              <ol className="ml-5 list-decimal space-y-1">
                <li>Factoring: Find two numbers that multiply to -306 and add to 1</li>
                <li>Quadratic formula: x = (-b ± √(b² - 4ac)) / 2a</li>
              </ol>
              <p className="mt-2">Let's try factoring first since the numbers might work out nicely.</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Card className="p-4">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-slate-800">Your Solution:</h3>
            <p className="text-sm text-slate-600">What are the two page numbers? Enter them separated by a comma.</p>
          </div>

          <div className="flex items-center space-x-2">
            <Input
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="e.g., 17, 18"
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
                <p className="font-medium">Correct! The page numbers are 17 and 18.</p>
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
            <Button variant="outline" onClick={getNextHint} className="flex items-center">
              <Lightbulb className="mr-2 h-4 w-4" />
              Hint
            </Button>
          </div>

          {showHint && (
            <div className="rounded-md bg-yellow-50 p-3 text-yellow-800">
              <p className="font-medium">Hint {hintLevel + 1}:</p>
              <p>{hints[hintLevel]}</p>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
