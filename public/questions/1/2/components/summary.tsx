"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface SummaryProps {
  userAnswers: {
    fourthRoundAnswer: string
    derivation: string
    variationAnswer: string
    transferAnswer: string
  }
}

export default function Summary({ userAnswers }: SummaryProps) {
  const [feedback, setFeedback] = useState("")
  const [quizAnswers, setQuizAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    setSubmitted(true)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-center text-blue-700">Great Job! You've Mastered Exponential Growth</h1>

      <div className="bg-blue-50 p-6 rounded-lg">
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4">What You've Learned</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>How to recognize patterns of exponential growth</li>
              <li>How to model a situation using mathematical expressions</li>
              <li>How to use exponents to represent repeated multiplication</li>
              <li>How to apply the same mathematical model to different scenarios</li>
            </ul>

            <div className="mt-4 p-3 bg-green-50 rounded-lg">
              <p className="font-medium">Key Formula:</p>
              <p className="text-lg">
                In the "Pass it Along" game where each person tells n new people, the number of people in round r is nʳ.
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4">Quick Quiz</h2>

            <div className="space-y-6">
              <div>
                <p className="font-medium mb-2">
                  1. If each student tells 5 new students, how many students will hear the message in round 3?
                </p>
                <RadioGroup
                  value={quizAnswers.q1}
                  onValueChange={(value) => setQuizAnswers({ ...quizAnswers, q1: value })}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="75" id="q1-a" />
                    <Label htmlFor="q1-a">75</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="125" id="q1-b" />
                    <Label htmlFor="q1-b">125</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="625" id="q1-c" />
                    <Label htmlFor="q1-c">625</Label>
                  </div>
                </RadioGroup>

                {submitted && (
                  <div className="mt-2 text-sm">
                    {quizAnswers.q1 === "125" ? (
                      <span className="text-green-600">Correct! 5³ = 5 × 5 × 5 = 125</span>
                    ) : (
                      <span className="text-red-600">Incorrect. The answer is 125 (5³ = 5 × 5 × 5 = 125)</span>
                    )}
                  </div>
                )}
              </div>

              <div>
                <p className="font-medium mb-2">
                  2. In the "Pass it Along" game with 3 new students per round, what is the formula for the number of
                  students in round n?
                </p>
                <RadioGroup
                  value={quizAnswers.q2}
                  onValueChange={(value) => setQuizAnswers({ ...quizAnswers, q2: value })}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3n" id="q2-a" />
                    <Label htmlFor="q2-a">3n</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="n³" id="q2-b" />
                    <Label htmlFor="q2-b">n³</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3^n" id="q2-c" />
                    <Label htmlFor="q2-c">3ⁿ</Label>
                  </div>
                </RadioGroup>

                {submitted && (
                  <div className="mt-2 text-sm">
                    {quizAnswers.q2 === "3^n" ? (
                      <span className="text-green-600">Correct! The formula is 3ⁿ</span>
                    ) : (
                      <span className="text-red-600">Incorrect. The formula is 3ⁿ</span>
                    )}
                  </div>
                )}
              </div>

              <div>
                <p className="font-medium mb-2">
                  3. If a virus infects 2 new computers each minute, what is the total number of infected computers
                  after 5 minutes?
                </p>
                <RadioGroup
                  value={quizAnswers.q3}
                  onValueChange={(value) => setQuizAnswers({ ...quizAnswers, q3: value })}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="32" id="q3-a" />
                    <Label htmlFor="q3-a">32</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="63" id="q3-b" />
                    <Label htmlFor="q3-b">63</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="10" id="q3-c" />
                    <Label htmlFor="q3-c">10</Label>
                  </div>
                </RadioGroup>

                {submitted && (
                  <div className="mt-2 text-sm">
                    {quizAnswers.q3 === "63" ? (
                      <span className="text-green-600">Correct! 1 + 2 + 4 + 8 + 16 + 32 = 63</span>
                    ) : (
                      <span className="text-red-600">Incorrect. The answer is 63 (1 + 2 + 4 + 8 + 16 + 32 = 63)</span>
                    )}
                  </div>
                )}
              </div>

              <Button onClick={handleSubmit} disabled={submitted}>
                Submit Quiz
              </Button>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4">Your Feedback</h2>
            <p className="mb-4">How was this learning experience for you?</p>

            <div className="flex flex-wrap gap-2">
              <Button variant={feedback === "easy" ? "default" : "outline"} onClick={() => setFeedback("easy")}>
                Easy to understand
              </Button>
              <Button
                variant={feedback === "challenging" ? "default" : "outline"}
                onClick={() => setFeedback("challenging")}
              >
                Challenging but doable
              </Button>
              <Button
                variant={feedback === "difficult" ? "default" : "outline"}
                onClick={() => setFeedback("difficult")}
              >
                Difficult, need more help
              </Button>
            </div>

            {feedback && (
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="font-medium">Thank you for your feedback!</p>
                <p>
                  {feedback === "easy" && "We're glad you found it easy to understand!"}
                  {feedback === "challenging" && "Great job working through the challenges!"}
                  {feedback === "difficult" && "Thank you for your honesty. We'll work on making it clearer!"}
                </p>
              </div>
            )}
          </div>

          <div className="bg-green-50 p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-green-700">Congratulations!</h2>
            <p>You've completed the "Pass it Along" lesson and learned about exponential growth patterns.</p>
            <p className="mt-2">
              These concepts appear in many real-world scenarios like population growth, compound interest, and viral
              spread.
            </p>
            <p className="mt-2">Keep exploring math in the world around you!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
