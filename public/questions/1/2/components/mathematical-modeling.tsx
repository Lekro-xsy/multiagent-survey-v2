"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface MathematicalModelingProps {
  userAnswer: string
  setUserAnswer: (value: string) => void
}

export default function MathematicalModeling({ userAnswer, setUserAnswer }: MathematicalModelingProps) {
  const [showHint, setShowHint] = useState(false)

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-center text-blue-700">Can We Describe This Process Mathematically?</h1>

      <div className="bg-blue-50 p-6 rounded-lg">
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4">Observe the Pattern</h2>
            <p className="mb-4">
              Look at how the number of students changes in each round. Can you identify a pattern?
            </p>

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
                    <td className="border border-gray-300 p-2 text-center">3</td>
                    <td className="border border-gray-300 p-2 text-center">3 = 3¹</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 text-center">2</td>
                    <td className="border border-gray-300 p-2 text-center">9</td>
                    <td className="border border-gray-300 p-2 text-center">9 = 3²</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 text-center">3</td>
                    <td className="border border-gray-300 p-2 text-center">27</td>
                    <td className="border border-gray-300 p-2 text-center">27 = 3³</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 text-center">4</td>
                    <td className="border border-gray-300 p-2 text-center">
                      <Input
                        type="text"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        className="w-20 mx-auto text-center"
                        placeholder="?"
                      />
                    </td>
                    <td className="border border-gray-300 p-2 text-center">? = 3⁴</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4">Guiding Questions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>How does the number of students multiply in each round?</li>
              <li>If we start with 1 student, and each student tells 3 new students, what pattern do you notice?</li>
              <li>Can you express the number of students in round 4 using an exponent?</li>
            </ul>

            <div className="mt-4">
              <Button variant="outline" onClick={() => setShowHint(!showHint)}>
                {showHint ? "Hide Hint" : "Show Hint"}
              </Button>

              {showHint && (
                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                  <p>In each round, the number of students is multiplied by 3. This creates a pattern where:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Round 1: 3¹ = 3 students</li>
                    <li>Round 2: 3² = 9 students</li>
                    <li>Round 3: 3³ = 27 students</li>
                    <li>Round 4: 3⁴ = ?</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
