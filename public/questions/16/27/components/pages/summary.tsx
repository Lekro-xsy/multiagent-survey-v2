"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, Trophy } from "lucide-react"
import confetti from "canvas-confetti"

export default function Summary() {
  const [selectedOption, setSelectedOption] = useState("")
  const [shortAnswer, setShortAnswer] = useState("")
  const [ownExample, setOwnExample] = useState("")
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false)
  const [showBadge, setShowBadge] = useState(false)

  const handleSubmit = () => {
    setIsQuizSubmitted(true)

    // Show badge with delay
    setTimeout(() => {
      setShowBadge(true)

      // Trigger confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">📚 Wrap-Up and Reflect!</h1>
        <p className="text-lg">Let's review what we've learned and test your understanding</p>
      </div>

      <Card className="p-6 bg-blue-50 border-blue-200">
        <h3 className="text-xl font-bold mb-4">Key Learning Points</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            When we know the total amount and define one part with a variable, we can express the other part by
            subtracting from the total.
          </li>
          <li>
            We can build cost models by multiplying each quantity by its unit price, then adding these costs together.
          </li>
          <li>The same mathematical structure can be applied to many different real-world situations.</li>
        </ul>
      </Card>

      <Card className="p-6 bg-purple-50 border-purple-200">
        <h3 className="text-xl font-bold mb-4">Mini-Quiz</h3>

        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-2">1. Choose the correct cost expression for this scenario:</h4>
            <p className="mb-4">
              A store sells premium chocolate at $6/lb and standard chocolate at $4/lb. You want to buy 5 pounds total.
              Let p be the pounds of premium chocolate.
            </p>

            <RadioGroup value={selectedOption} onValueChange={setSelectedOption}>
              <div className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value="a" id="option-a" />
                <Label htmlFor="option-a">a) Total cost = $6 × 5 + $4 × p</Label>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value="b" id="option-b" />
                <Label htmlFor="option-b">b) Total cost = $6 × p + $4 × (5 - p)</Label>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value="c" id="option-c" />
                <Label htmlFor="option-c">c) Total cost = $6 × (5 - p) + $4 × p</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="d" id="option-d" />
                <Label htmlFor="option-d">d) Total cost = $6 × p + $4 × 5</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <h4 className="font-medium mb-2">2. Why is it helpful to define variables in word problems?</h4>
            <Input
              value={shortAnswer}
              onChange={(e) => setShortAnswer(e.target.value)}
              placeholder="Type your answer here..."
              className="w-full"
            />
          </div>

          <div>
            <h4 className="font-medium mb-2">
              3. Create your own real-life situation that could be modeled by this expression:
            </h4>
            <p className="font-mono mb-2">5.00x + 3.50(12 - x)</p>
            <Input
              value={ownExample}
              onChange={(e) => setOwnExample(e.target.value)}
              placeholder="Type your scenario here..."
              className="w-full"
            />
          </div>

          <Button
            onClick={handleSubmit}
            className="w-full"
            disabled={!selectedOption || shortAnswer.length < 5 || ownExample.length < 10 || isQuizSubmitted}
          >
            Submit Quiz
          </Button>
        </div>
      </Card>

      {isQuizSubmitted && (
        <Card className="p-6 bg-green-50 border-green-200">
          <div className="flex items-start space-x-4">
            <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
            <div>
              <h3 className="text-lg font-bold mb-2">Great job!</h3>
              <p>You've successfully completed the lesson on mathematical modeling with the snack mix problem.</p>
              <p className="mt-2">
                You now understand how to use variables to represent unknown quantities and build expressions that model
                real-world situations.
              </p>
            </div>
          </div>
        </Card>
      )}

      {showBadge && (
        <div className="text-center p-6 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-lg border-2 border-yellow-300 animate-pulse">
          <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-2" />
          <h3 className="text-2xl font-bold text-yellow-700 mb-2">Model Building Master!</h3>
          <p className="text-lg">
            Congratulations! You've earned the Model Building Master badge for your excellent work!
          </p>
        </div>
      )}
    </div>
  )
}
