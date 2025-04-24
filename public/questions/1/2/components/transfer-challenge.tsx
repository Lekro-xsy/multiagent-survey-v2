"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle } from "lucide-react"

interface TransferChallengeProps {
  userAnswer: string
  setUserAnswer: (value: string) => void
}

export default function TransferChallenge({ userAnswer, setUserAnswer }: TransferChallengeProps) {
  const [showHint, setShowHint] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const correctAnswer = "31"

  const handleSubmit = () => {
    setSubmitted(true)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-center text-blue-700">Apply Your Knowledge to a New Scenario</h1>

      <div className="bg-blue-50 p-6 rounded-lg">
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4">Computer Virus Scenario</h2>

            <div className="flex items-center justify-center mb-6">
              <img src="/digital-contagion.png" alt="Computer virus spreading" className="rounded-lg" />
            </div>

            <div className="p-3 bg-red-50 rounded-lg mb-4">
              <p className="font-medium text-red-800">Scenario:</p>
              <p className="text-lg">
                A computer gets infected with a virus. Each minute, the infected computer spreads the virus to 2 new
                computers. Each newly infected computer continues to infect 2 new computers every minute.
              </p>
              <p className="text-lg font-bold mt-2">How many computers will be infected after 4 minutes?</p>
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
            <h2 className="text-xl font-bold mb-4">Modeling the Problem</h2>
            <p className="mb-4">This problem is similar to our "Pass it Along" game, but with some differences:</p>

            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Each computer infects 2 new computers (instead of 3 students)</li>
              <li>We're tracking the total number of infected computers (not just new ones in each round)</li>
              <li>We need to count the initially infected computer in our total</li>
            </ul>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-2 bg-gray-100">Minute</th>
                    <th className="border border-gray-300 p-2 bg-gray-100">New Infections</th>
                    <th className="border border-gray-300 p-2 bg-gray-100">Total Infected</th>
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
                    <td className="border border-gray-300 p-2 text-center">2</td>
                    <td className="border border-gray-300 p-2 text-center">3</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 text-center">2</td>
                    <td className="border border-gray-300 p-2 text-center">4</td>
                    <td className="border border-gray-300 p-2 text-center">7</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 text-center">3</td>
                    <td className="border border-gray-300 p-2 text-center">8</td>
                    <td className="border border-gray-300 p-2 text-center">15</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 text-center">4</td>
                    <td className="border border-gray-300 p-2 text-center">16</td>
                    <td className="border border-gray-300 p-2 text-center">?</td>
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
                  <p>Notice that the new infections follow the pattern 2ⁿ:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Minute 0: 2⁰ = 1 new infection</li>
                    <li>Minute 1: 2¹ = 2 new infections</li>
                    <li>Minute 2: 2² = 4 new infections</li>
                    <li>Minute 3: 2³ = 8 new infections</li>
                    <li>Minute 4: 2⁴ = 16 new infections</li>
                  </ul>
                  <p className="mt-2">
                    To find the total, we need to add up all the new infections from minute 0 to minute 4.
                  </p>
                </div>
              )}
            </div>
          </div>

          {submitted && userAnswer === correctAnswer && (
            <div className="bg-green-50 p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-4 text-green-700">Excellent Work!</h2>
              <p>You've correctly identified that after 4 minutes, a total of 31 computers will be infected.</p>
              <p className="mt-2">This is calculated as: 1 + 2 + 4 + 8 + 16 = 31</p>
              <p className="mt-2">Another way to express this is: 2⁰ + 2¹ + 2² + 2³ + 2⁴ = 31</p>
              <p className="mt-2">
                This is a different pattern than our original problem because we're counting the total, not just the new
                infections in each round.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
