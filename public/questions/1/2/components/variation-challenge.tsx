"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle } from "lucide-react"

interface VariationChallengeProps {
  userAnswer: string
  setUserAnswer: (value: string) => void
}

export default function VariationChallenge({ userAnswer, setUserAnswer }: VariationChallengeProps) {
  const [showHint, setShowHint] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const correctAnswer = "256"

  const handleSubmit = () => {
    setSubmitted(true)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-center text-blue-700">Try a Challenge!</h1>

      <div className="bg-blue-50 p-6 rounded-lg">
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4">New Variation</h2>
            <p className="mb-4">
              What if each student tells <span className="font-bold text-blue-700">4 new students</span> instead of 3?
            </p>

            <div className="p-3 bg-yellow-50 rounded-lg mb-4">
              <p className="font-medium">Challenge Question:</p>
              <p className="text-lg">
                If each student tells 4 new students, how many students will hear the message in round 4?
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <Input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className="w-32"
                placeholder="Your answer"
              />

              <Button onClick={handleSubmit} disabled={submitted}>
                Submit
              </Button>

              {submitted && (
                <div className="flex items-center">
                  {userAnswer === correctAnswer ? (
                    <>
                      <CheckCircle className="text-green-500 h-6 w-6 mr-2" />
                      <span className="text-green-600 font-medium">Correct!</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="text-red-500 h-6 w-6 mr-2" />
                      <span className="text-red-600 font-medium">Try again</span>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4">Work Through It</h2>
            <p className="mb-2">Use the same pattern we discovered earlier, but with 4 instead of 3:</p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-2 bg-gray-100">Round</th>
                    <th className="border border-gray-300 p-2 bg-gray-100">Number of Students</th>
                    <th className="border border-gray-300 p-2 bg-gray-100">Mathematical Expression</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2 text-center">0</td>
                    <td className="border border-gray-300 p-2 text-center">1</td>
                    <td className="border border-gray-300 p-2 text-center">1</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 text-center">1</td>
                    <td className="border border-gray-300 p-2 text-center">4</td>
                    <td className="border border-gray-300 p-2 text-center">4 = 4¹</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 text-center">2</td>
                    <td className="border border-gray-300 p-2 text-center">16</td>
                    <td className="border border-gray-300 p-2 text-center">16 = 4²</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 text-center">3</td>
                    <td className="border border-gray-300 p-2 text-center">64</td>
                    <td className="border border-gray-300 p-2 text-center">64 = 4³</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 text-center">4</td>
                    <td className="border border-gray-300 p-2 text-center">?</td>
                    <td className="border border-gray-300 p-2 text-center">? = 4⁴</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4">
              <Button variant="outline" onClick={() => setShowHint(!showHint)}>
                {showHint ? "Hide Hint" : "Show Hint"}
              </Button>

              {showHint && (
                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                  <p>In each round, the number of students is multiplied by 4. This creates a pattern where:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Round 1: 4¹ = 4 students</li>
                    <li>Round 2: 4² = 16 students</li>
                    <li>Round 3: 4³ = 64 students</li>
                    <li>Round 4: 4⁴ = 4 × 4 × 4 × 4 = ?</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {submitted && userAnswer === correctAnswer && (
            <div className="bg-green-50 p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-4 text-green-700">Excellent Work!</h2>
              <p>
                You've correctly identified that when each student tells 4 new students, the number in round 4 is 256
                students.
              </p>
              <p className="mt-2">This is because 4⁴ = 4 × 4 × 4 × 4 = 256.</p>
              <p className="mt-2">Notice how quickly the numbers grow when we increase from 3 to 4 students!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
