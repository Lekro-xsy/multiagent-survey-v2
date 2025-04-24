"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { BookOpen, Trophy } from "lucide-react"

export function Summary() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [trueOrFalse, setTrueOrFalse] = useState<string | null>(null)
  const [ownProblem, setOwnProblem] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const handleSubmit = () => {
    let newScore = 0

    // Check multiple choice
    if (selectedOption === "option3") {
      newScore += 1
    }

    // Check true/false
    if (trueOrFalse === "true") {
      newScore += 1
    }

    // Check own problem (just check if they wrote something substantial)
    if (ownProblem.length > 20) {
      newScore += 1
    }

    setScore(newScore)
    setSubmitted(true)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold flex items-center">
          <BookOpen className="mr-2 h-6 w-6" /> Review and Reflect
        </h2>
        <p className="text-gray-600">Let's summarize what we've learned and test your understanding.</p>
      </div>

      <Card className="p-6 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="space-y-4">
          <h3 className="font-semibold text-xl">Key Learning Points:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-gray-700">Model total revenue by combining fixed group revenues</li>
            <li className="text-gray-700">Set up expressions clearly and solve carefully</li>
            <li className="text-gray-700">Apply the same model across different real-world settings</li>
          </ul>
        </div>
      </Card>

      <Card className="p-6">
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-semibold">Mini-Quiz:</h3>

            <div className="space-y-2">
              <h4 className="font-medium">1. What expression models the airline's revenue?</h4>
              <RadioGroup value={selectedOption || ""} onValueChange={setSelectedOption} disabled={submitted}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option1" id="option1" />
                  <Label htmlFor="option1">(32 + 298) × (860 + 360)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option2" id="option2" />
                  <Label htmlFor="option2">(32 × 298) + (860 × 360)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option3" id="option3" />
                  <Label htmlFor="option3">(32 × 860) + (298 × 360)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option4" id="option4" />
                  <Label htmlFor="option4">(32 + 860) × (298 + 360)</Label>
                </div>
              </RadioGroup>
              {submitted && (
                <div className={`text-sm ${selectedOption === "option3" ? "text-green-600" : "text-red-600"} mt-1`}>
                  {selectedOption === "option3"
                    ? "Correct! We multiply each group's count by its price, then add them."
                    : "Incorrect. The correct answer is (32 × 860) + (298 × 360)."}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <h4 className="font-medium">2. True or False: You should add the revenue from each group.</h4>
              <RadioGroup value={trueOrFalse || ""} onValueChange={setTrueOrFalse} disabled={submitted}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="true" id="true" />
                  <Label htmlFor="true">True</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="false" id="false" />
                  <Label htmlFor="false">False</Label>
                </div>
              </RadioGroup>
              {submitted && (
                <div className={`text-sm ${trueOrFalse === "true" ? "text-green-600" : "text-red-600"} mt-1`}>
                  {trueOrFalse === "true"
                    ? "Correct! We add the revenue from each group to find the total."
                    : "Incorrect. We need to add the revenue from each group to find the total."}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <h4 className="font-medium">3. Write a new real-world problem involving two different-priced groups.</h4>
              <Textarea
                value={ownProblem}
                onChange={(e) => setOwnProblem(e.target.value)}
                placeholder="Create your own problem similar to the ones we've solved..."
                rows={4}
                disabled={submitted}
              />
              {submitted && (
                <div className={`text-sm ${ownProblem.length > 20 ? "text-green-600" : "text-red-600"} mt-1`}>
                  {ownProblem.length > 20
                    ? "Great job creating your own problem!"
                    : "Please write a more detailed problem with two different-priced groups."}
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end">
            {!submitted ? (
              <Button onClick={handleSubmit}>Submit Quiz</Button>
            ) : (
              <div className="text-lg font-medium">Your score: {score}/3</div>
            )}
          </div>
        </div>
      </Card>

      {submitted && score === 3 && (
        <div className="bg-gradient-to-r from-amber-100 to-yellow-100 p-6 rounded-lg border border-yellow-200 flex items-center justify-between">
          <div className="space-y-2">
            <h3 className="font-bold text-amber-800 text-xl">Congratulations!</h3>
            <p className="text-amber-700">
              You've earned the "Revenue Rockstar" badge! You've mastered the concept of modeling revenue with different
              price categories.
            </p>
          </div>
          <Trophy className="h-16 w-16 text-yellow-500" />
        </div>
      )}

      {submitted && score < 3 && (
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h3 className="font-semibold text-blue-800">Keep Learning!</h3>
          <p className="text-blue-700 mt-1">
            You're on the right track. Review the key concepts and try applying them to more problems to strengthen your
            understanding.
          </p>
        </div>
      )}
    </div>
  )
}
