"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Trophy } from "lucide-react"

export default function PageNine() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [trueOrFalse, setTrueOrFalse] = useState<string | null>(null)
  const [realWorld, setRealWorld] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const handleSubmit = () => {
    let newScore = 0

    if (selectedAnswer === "option3") newScore += 1
    if (trueOrFalse === "false") newScore += 1
    if (realWorld.length > 20) newScore += 1

    setScore(newScore)
    setSubmitted(true)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-center text-2xl font-bold text-blue-800">📚 Review and Reflect!</h2>

      <Card className="p-6">
        <h3 className="mb-4 text-xl font-semibold text-blue-700">Key Learning Points</h3>

        <div className="space-y-4">
          <div className="rounded-lg bg-blue-50 p-4">
            <ul className="ml-5 list-disc space-y-2">
              <li>
                <span className="font-medium">Identify decreasing sequences</span> in real-world problems
              </li>
              <li>
                <span className="font-medium">Model using the sum formula</span> for consecutive numbers: n(n+1)/2
              </li>
              <li>
                <span className="font-medium">Apply the model</span> to real-world stacking or layering problems
              </li>
              <li>
                <span className="font-medium">Transfer the concept</span> to different contexts with the same
                mathematical structure
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-medium text-blue-700">Mini-Quiz</h4>

            <div className="space-y-3">
              <p className="font-medium">1. What is the sum formula for 10 layers?</p>
              <RadioGroup value={selectedAnswer || ""} onValueChange={setSelectedAnswer}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option1" id="option1" />
                  <Label htmlFor="option1">10 + 9 + 8 + ... + 1</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option2" id="option2" />
                  <Label htmlFor="option2">10 × 10 ÷ 2</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option3" id="option3" />
                  <Label htmlFor="option3">10(10+1) ÷ 2</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option4" id="option4" />
                  <Label htmlFor="option4">10 × 11</Label>
                </div>
              </RadioGroup>
              {submitted && selectedAnswer === "option3" && <p className="text-green-600">Correct! 10(11)/2 = 55</p>}
            </div>

            <div className="space-y-3">
              <p className="font-medium">2. True or False: "The pyramid has one more carton per layer as you go up."</p>
              <RadioGroup value={trueOrFalse || ""} onValueChange={setTrueOrFalse}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="true" id="true" />
                  <Label htmlFor="true">True</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="false" id="false" />
                  <Label htmlFor="false">False</Label>
                </div>
              </RadioGroup>
              {submitted && trueOrFalse === "false" && (
                <p className="text-green-600">Correct! The pyramid has one fewer carton per layer as you go up.</p>
              )}
            </div>

            <div className="space-y-3">
              <p className="font-medium">3. Create a real-world stacking situation like the cola pyramid:</p>
              <Textarea
                value={realWorld}
                onChange={(e) => setRealWorld(e.target.value)}
                placeholder="Describe your own stacking problem..."
                rows={3}
              />
              {submitted && realWorld.length > 20 && (
                <p className="text-green-600">Great example! You're applying the concept to a new situation.</p>
              )}
            </div>

            <Button onClick={handleSubmit} className="w-full bg-blue-600 hover:bg-blue-700" disabled={submitted}>
              Submit Quiz
            </Button>

            {submitted && (
              <div className="rounded-lg bg-green-100 p-4 text-center">
                <div className="mb-2 flex justify-center">
                  <Trophy className="h-10 w-10 text-yellow-500" />
                </div>
                <h4 className="mb-2 text-xl font-bold text-green-800">Congratulations!</h4>
                <p className="text-lg">You scored {score} out of 3</p>
                <p className="mt-2">You've earned the "Stacking Strategy Expert" badge! 🏆</p>
              </div>
            )}
          </div>
        </div>
      </Card>

      <div className="rounded-lg bg-yellow-50 p-4 text-center">
        <h4 className="mb-2 font-semibold text-yellow-800">Remember:</h4>
        <p>
          The formula n(n+1)/2 is a powerful tool for finding the sum of consecutive integers. Look for opportunities to
          apply this in other problems!
        </p>
      </div>
    </div>
  )
}
