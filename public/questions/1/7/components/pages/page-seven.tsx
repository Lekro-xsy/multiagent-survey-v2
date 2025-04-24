"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PyramidAnimation } from "@/components/pyramid-animation"

export default function PageSeven() {
  const [answer, setAnswer] = useState("")
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [showSolution, setShowSolution] = useState(false)

  const checkAnswer = () => {
    // The correct answer is 120 (sum of 1 to 15)
    const isAnswerCorrect = answer === "120"
    setIsCorrect(isAnswerCorrect)

    if (isAnswerCorrect) {
      setShowSolution(true)
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-center text-2xl font-bold text-blue-800">🔄 Another Pyramid Challenge!</h2>

      <Card className="p-6">
        <h3 className="mb-4 text-xl font-semibold text-blue-700">Similar Stacking Display</h3>

        <div className="space-y-4">
          <div className="rounded-lg bg-yellow-50 p-4">
            <p className="text-lg">
              At another store, a pyramid is built starting with <strong>15 cartons</strong> at the base. Each layer has
              one fewer than the one below, ending with 1 carton at the top.
            </p>
            <p className="mt-2 font-bold text-yellow-800">How many cartons are needed in total?</p>
          </div>

          <div className="flex justify-center">
            <PyramidAnimation rows={15} compact />
          </div>

          <div className="space-y-3">
            <Label htmlFor="pyramid-answer">Your answer:</Label>
            <div className="flex items-center gap-2">
              <Input
                id="pyramid-answer"
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
                  ? "Correct! Great job applying the formula."
                  : "Not quite. Try using the formula n(n+1)/2 where n = 15."}
              </div>
            )}
          </div>

          {showSolution && (
            <div className="mt-4 rounded-lg bg-blue-50 p-4">
              <h4 className="mb-2 font-medium text-blue-800">Solution:</h4>
              <p>Using the formula for sum of first n integers:</p>
              <div className="my-2 rounded-lg bg-white p-3 text-center">
                Sum = n(n+1)/2 = 15(15+1)/2 = 15(16)/2 = 240/2 = 120
              </div>
              <p>Therefore, 120 cartons are needed for this pyramid.</p>
            </div>
          )}
        </div>
      </Card>

      <div className="rounded-lg bg-green-50 p-4">
        <h4 className="mb-2 font-semibold text-green-700">Key Learning:</h4>
        <p>The same formula works for any pyramid with consecutive layers decreasing by 1.</p>
        <p className="mt-2">Just change the value of n to match the number of layers in your pyramid!</p>
      </div>
    </div>
  )
}
