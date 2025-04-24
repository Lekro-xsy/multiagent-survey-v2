"use client"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function Page9() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [trueFalse, setTrueFalse] = useState<string | null>(null)
  const [scenario, setScenario] = useState("")
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const handleSubmitQuiz = () => {
    let newScore = 0

    // Check multiple choice answer
    if (selectedOption === "option3") {
      newScore += 1
    }

    // Check true/false answer
    if (trueFalse === "true") {
      newScore += 1
    }

    // Check scenario (just check if they wrote something)
    if (scenario.trim().length > 10) {
      newScore += 1
    }

    setScore(newScore)
    setQuizSubmitted(true)
  }

  const resetQuiz = () => {
    setSelectedOption(null)
    setTrueFalse(null)
    setScenario("")
    setQuizSubmitted(false)
    setScore(0)
  }

  return (
    <PageLayout title="📚 Wrap-Up and Reflect" pageNumber={9} totalPages={9} prevPage="/page8">
      <div className="space-y-8">
        <div className="rounded-lg bg-blue-50 p-6">
          <h2 className="mb-4 text-xl font-semibold text-blue-800">Key Learning Points:</h2>
          <ul className="space-y-3 pl-6">
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">✓</span>
              <span>Use division to find out how many times a repeated amount must be added.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">✓</span>
              <span>Set up real-world models with simple multiplication/division.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">✓</span>
              <span>Recognize and apply consistent math structures across different contexts.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">✓</span>
              <span>Visualize linear growth to understand how constant rates accumulate over time.</span>
            </li>
          </ul>
        </div>

        <Card>
          <CardContent className="p-6">
            <h2 className="mb-6 text-xl font-semibold text-blue-800">Mini-Quiz:</h2>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="font-medium">1. Which equation models saving $900 at $75 per month?</h3>
                <RadioGroup value={selectedOption || ""} onValueChange={setSelectedOption}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option1" id="option1" disabled={quizSubmitted} />
                    <Label htmlFor="option1">75 ÷ 900 = x</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option2" id="option2" disabled={quizSubmitted} />
                    <Label htmlFor="option2">900 × 75 = x</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option3" id="option3" disabled={quizSubmitted} />
                    <Label htmlFor="option3">75 × x = 900</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option4" id="option4" disabled={quizSubmitted} />
                    <Label htmlFor="option4">900 + 75 = x</Label>
                  </div>
                </RadioGroup>

                {quizSubmitted && (
                  <div className={selectedOption === "option3" ? "text-green-600" : "text-red-600"}>
                    {selectedOption === "option3"
                      ? "✓ Correct! The equation 75 × x = 900 correctly models saving $75 per month to reach $900."
                      : "✗ Incorrect. The correct answer is 75 × x = 900, where x represents the number of months."}
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">
                  2. True or False: "To find time, you divide the goal by the saving rate."
                </h3>
                <RadioGroup value={trueFalse || ""} onValueChange={setTrueFalse}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="true" id="true" disabled={quizSubmitted} />
                    <Label htmlFor="true">True</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="false" id="false" disabled={quizSubmitted} />
                    <Label htmlFor="false">False</Label>
                  </div>
                </RadioGroup>

                {quizSubmitted && (
                  <div className={trueFalse === "true" ? "text-green-600" : "text-red-600"}>
                    {trueFalse === "true"
                      ? "✓ Correct! To find the time, you divide the goal (total amount) by the rate."
                      : "✗ Incorrect. The statement is true. To find the time, you divide the goal by the rate."}
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">3. Create a real-world scenario needing an equation like: 25x = 300</h3>
                <Textarea
                  value={scenario}
                  onChange={(e) => setScenario(e.target.value)}
                  placeholder="Write your scenario here..."
                  className="min-h-[100px]"
                  disabled={quizSubmitted}
                />

                {quizSubmitted && scenario.trim().length > 10 && (
                  <div className="text-green-600">
                    ✓ Great job creating a scenario! Here's an example: "You're saving $25 per week to buy a $300 gaming
                    console. How many weeks will it take?"
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 flex justify-center space-x-4">
              {!quizSubmitted ? (
                <Button
                  onClick={handleSubmitQuiz}
                  disabled={!selectedOption || !trueFalse || scenario.trim().length < 10}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Submit Quiz
                </Button>
              ) : (
                <Button
                  variant="outline"
                  onClick={resetQuiz}
                  className="border-blue-300 text-blue-700 hover:bg-blue-100"
                >
                  Retake Quiz
                </Button>
              )}
            </div>

            {quizSubmitted && (
              <div className="mt-6 rounded-lg bg-blue-50 p-4 text-center">
                <h3 className="mb-2 text-lg font-semibold text-blue-800">Your Score: {score}/3</h3>
                {score === 3 ? (
                  <div>
                    <p className="mb-4 text-blue-700">
                      Congratulations! You've earned the "Savings Superstar" badge! 🏆
                    </p>
                    <div className="flex justify-center">
                      <div className="rounded-full bg-yellow-100 p-6 text-4xl">🏆</div>
                    </div>
                  </div>
                ) : (
                  <p className="text-blue-700">Good effort! Review the material and try again to earn your badge.</p>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        <div className="flex justify-center">
          <Link href="/">
            <Button className="bg-green-600 hover:bg-green-700">Complete Learning Journey</Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}
