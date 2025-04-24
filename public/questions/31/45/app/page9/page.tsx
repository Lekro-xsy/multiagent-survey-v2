"use client"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, XCircle } from "lucide-react"

export default function Page9() {
  const [q1Answer, setQ1Answer] = useState("")
  const [q2Answer, setQ2Answer] = useState("")
  const [q3Answer, setQ3Answer] = useState("")
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

  const checkAnswers = () => {
    let newScore = 0

    if (q1Answer === "c") newScore++
    if (q2Answer === "b") newScore++
    if (
      q3Answer.toLowerCase().includes("distance") &&
      q3Answer.toLowerCase().includes("speed") &&
      q3Answer.toLowerCase().includes("time") &&
      q3Answer.length > 20
    )
      newScore++

    setScore(newScore)
    setShowResults(true)
  }

  return (
    <PageLayout pageNumber={9} totalPages={9} title="📚 Review and Reflect!">
      <Card>
        <CardContent className="pt-6">
          <div className="mb-6 space-y-6">
            <div className="rounded-lg bg-blue-50 p-4">
              <h2 className="mb-2 text-xl font-semibold text-blue-800">Key Learning Points:</h2>
              <ul className="ml-6 list-disc space-y-1 text-blue-800">
                <li>Always convert units carefully when solving real-world problems</li>
                <li>Time = Distance ÷ Speed is the fundamental relationship</li>
                <li>The same mathematical model can be applied to different contexts</li>
                <li>Diagrams help visualize parallel motion problems</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Mini-Quiz:</h2>

              <div className="space-y-4">
                <h3 className="font-medium">1. Which formula correctly finds time?</h3>
                <RadioGroup value={q1Answer} onValueChange={setQ1Answer}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="a" id="q1-a" />
                    <Label htmlFor="q1-a">Time = Speed × Distance</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="b" id="q1-b" />
                    <Label htmlFor="q1-b">Time = Speed ÷ Distance</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="c" id="q1-c" />
                    <Label htmlFor="q1-c">Time = Distance ÷ Speed</Label>
                  </div>
                </RadioGroup>

                {showResults && (
                  <div className="flex items-center space-x-2">
                    {q1Answer === "c" ? (
                      <>
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-green-600">Correct!</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-5 w-5 text-red-600" />
                        <span className="text-red-600">Incorrect. The correct answer is: Time = Distance ÷ Speed</span>
                      </>
                    )}
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">
                  2. True or False: You don't need to convert units if distances and speeds use different units.
                </h3>
                <RadioGroup value={q2Answer} onValueChange={setQ2Answer}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="a" id="q2-a" />
                    <Label htmlFor="q2-a">True</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="b" id="q2-b" />
                    <Label htmlFor="q2-b">False</Label>
                  </div>
                </RadioGroup>

                {showResults && (
                  <div className="flex items-center space-x-2">
                    {q2Answer === "b" ? (
                      <>
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-green-600">
                          Correct! You must convert units to ensure they are compatible.
                        </span>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-5 w-5 text-red-600" />
                        <span className="text-red-600">
                          Incorrect. You must convert units to ensure they are compatible.
                        </span>
                      </>
                    )}
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">
                  3. Create a real-world example of parallel motion that requires unit conversion.
                </h3>
                <Textarea
                  value={q3Answer}
                  onChange={(e) => setQ3Answer(e.target.value)}
                  placeholder="Write your example here..."
                  rows={4}
                />

                {showResults && (
                  <div>
                    {q3Answer.toLowerCase().includes("distance") &&
                    q3Answer.toLowerCase().includes("speed") &&
                    q3Answer.toLowerCase().includes("time") &&
                    q3Answer.length > 20 ? (
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-green-600">Good example!</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <XCircle className="h-5 w-5 text-red-600" />
                        <span className="text-red-600">
                          Your example should include distance, speed, time, and require unit conversion.
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {!showResults && <Button onClick={checkAnswers}>Submit Quiz</Button>}

              {showResults && (
                <div className="rounded-lg bg-green-50 p-4 text-center">
                  <h3 className="mb-2 text-xl font-semibold text-green-800">Your Score: {score}/3</h3>
                  {score === 3 ? (
                    <div className="space-y-2">
                      <p className="text-green-800">
                        Congratulations! You've earned the "Speed Conversion Champion" badge! 🏆
                      </p>
                      <p className="text-green-800">
                        You've mastered the concepts of speed, distance, and time calculations!
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <p className="text-green-800">Good effort! Review the key concepts and try again.</p>
                      <p className="text-green-800">Remember: Time = Distance ÷ Speed and always convert units!</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </PageLayout>
  )
}
