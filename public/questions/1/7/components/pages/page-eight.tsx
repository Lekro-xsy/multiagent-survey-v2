"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function PageEight() {
  const [answer, setAnswer] = useState("")
  const [workingOut, setWorkingOut] = useState("")
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [showSolution, setShowSolution] = useState(false)

  const checkAnswer = () => {
    // The correct answer is 210 (sum of 1 to 20)
    const isAnswerCorrect = answer === "210"
    setIsCorrect(isAnswerCorrect)

    if (isAnswerCorrect) {
      setShowSolution(true)
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-center text-2xl font-bold text-blue-800">🚀 Same Math, Different Story!</h2>

      <Card className="p-6">
        <h3 className="mb-4 text-xl font-semibold text-blue-700">Far Transfer Challenge</h3>

        <div className="space-y-4">
          <div className="rounded-lg bg-purple-50 p-4">
            <p className="text-lg">
              A theater stacks chairs for an event. The first row has 20 chairs, the second row has 19 chairs, and so
              on, ending with 1 chair.
            </p>
            <p className="mt-2 font-bold text-purple-800">How many chairs are stacked in total?</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <img
              src="/diminishing-theater-stacks.png"
              alt="Theater chairs stacked in decreasing rows"
              className="rounded-lg"
              height={200}
              width={300}
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="working-out">Show your working:</Label>
            <Input
              id="working-out"
              value={workingOut}
              onChange={(e) => setWorkingOut(e.target.value)}
              placeholder="Write your formula and calculation here"
            />

            <Label htmlFor="chair-answer">Your answer:</Label>
            <div className="flex items-center gap-2">
              <Input
                id="chair-answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="max-w-[120px]"
                placeholder="?"
              />
              <Button onClick={checkAnswer}>Check</Button>
            </div>

            {isCorrect !== null && (
              <div
                className={`rounded-lg p-3 ${isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
              >
                {isCorrect
                  ? "Excellent! You've successfully applied the same mathematical model to a different context."
                  : "Not quite. Remember to use the formula n(n+1)/2 where n = 20."}
              </div>
            )}
          </div>

          {showSolution && (
            <div className="mt-4 rounded-lg bg-blue-50 p-4">
              <h4 className="mb-2 font-medium text-blue-800">Solution:</h4>
              <p>Using the formula for sum of first n integers:</p>
              <div className="my-2 rounded-lg bg-white p-3 text-center">
                Sum = n(n+1)/2 = 20(20+1)/2 = 20(21)/2 = 420/2 = 210
              </div>
              <p>Therefore, 210 chairs are stacked in total.</p>
            </div>
          )}
        </div>
      </Card>

      <div className="rounded-lg bg-green-50 p-4">
        <h4 className="mb-2 font-semibold text-green-700">Transfer of Learning:</h4>
        <p>
          This problem has a different context (chairs instead of cola cartons), but it uses the same mathematical
          model: the sum of consecutive integers.
        </p>
        <p className="mt-2">
          Being able to recognize when different real-world situations use the same mathematical model is a powerful
          problem-solving skill!
        </p>
      </div>
    </div>
  )
}
