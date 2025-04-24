"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, XCircle } from "lucide-react"

export default function Page9() {
  const [quizAnswers, setQuizAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
    explanation: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const handleChange = (question: string, answer: string) => {
    setQuizAnswers((prev) => ({ ...prev, [question]: answer }))
  }

  const handleSubmit = () => {
    let newScore = 0

    if (quizAnswers.q1 === "distance") newScore += 1
    if (quizAnswers.q2 === "2lw") newScore += 1
    if (quizAnswers.q3 === "18") newScore += 1

    setScore(newScore)
    setSubmitted(true)
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">📚 Wrap Up: What You Learned!</h1>

      <div className="mb-8 text-center max-w-xl">
        <p className="text-lg mb-4">Let's review what we've learned about perimeter.</p>
      </div>

      <div className="w-full max-w-lg space-y-8">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h2 className="font-bold text-blue-700 mb-2">Key Takeaways:</h2>
          <ul className="space-y-2 pl-5 list-disc">
            <li>Perimeter is the total distance around a shape</li>
            <li>For rectangles, we can use the formula 2(l + w)</li>
            <li>This works because a rectangle has 2 lengths and 2 widths</li>
            <li>We can apply this formula to real-world problems</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="font-bold text-lg">Mini-Quiz</h2>

          <div className="space-y-3">
            <p className="font-medium">1. Perimeter measures the _____ around a shape.</p>
            <RadioGroup
              value={quizAnswers.q1}
              onValueChange={(value) => handleChange("q1", value)}
              disabled={submitted}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="area" id="q1-a" />
                <Label htmlFor="q1-a">Area</Label>
                {submitted && quizAnswers.q1 === "area" && <XCircle className="h-5 w-5 text-red-500 ml-2" />}
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="distance" id="q1-b" />
                <Label htmlFor="q1-b">Distance</Label>
                {submitted && quizAnswers.q1 === "distance" && <CheckCircle2 className="h-5 w-5 text-green-500 ml-2" />}
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="volume" id="q1-c" />
                <Label htmlFor="q1-c">Volume</Label>
                {submitted && quizAnswers.q1 === "volume" && <XCircle className="h-5 w-5 text-red-500 ml-2" />}
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <p className="font-medium">2. Which of these is NOT a correct formula for the perimeter of a rectangle?</p>
            <RadioGroup
              value={quizAnswers.q2}
              onValueChange={(value) => handleChange("q2", value)}
              disabled={submitted}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="2l2w" id="q2-a" />
                <Label htmlFor="q2-a">2l + 2w</Label>
                {submitted && quizAnswers.q2 === "2l2w" && <XCircle className="h-5 w-5 text-red-500 ml-2" />}
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="2lw" id="q2-b" />
                <Label htmlFor="q2-b">2(l × w)</Label>
                {submitted && quizAnswers.q2 === "2lw" && <CheckCircle2 className="h-5 w-5 text-green-500 ml-2" />}
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="2lw2" id="q2-c" />
                <Label htmlFor="q2-c">2(l + w)</Label>
                {submitted && quizAnswers.q2 === "2lw2" && <XCircle className="h-5 w-5 text-red-500 ml-2" />}
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <p className="font-medium">3. What is the perimeter of a rectangle with length 7m and width 2m?</p>
            <RadioGroup
              value={quizAnswers.q3}
              onValueChange={(value) => handleChange("q3", value)}
              disabled={submitted}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="14" id="q3-a" />
                <Label htmlFor="q3-a">14 meters</Label>
                {submitted && quizAnswers.q3 === "14" && <XCircle className="h-5 w-5 text-red-500 ml-2" />}
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="18" id="q3-b" />
                <Label htmlFor="q3-b">18 meters</Label>
                {submitted && quizAnswers.q3 === "18" && <CheckCircle2 className="h-5 w-5 text-green-500 ml-2" />}
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="9" id="q3-c" />
                <Label htmlFor="q3-c">9 meters</Label>
                {submitted && quizAnswers.q3 === "9" && <XCircle className="h-5 w-5 text-red-500 ml-2" />}
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <p className="font-medium">4. Explain why the perimeter formula makes sense for a rectangle.</p>
            <Textarea
              value={quizAnswers.explanation}
              onChange={(e) => handleChange("explanation", e.target.value)}
              placeholder="Type your explanation here..."
              className="min-h-[100px]"
              disabled={submitted}
            />
          </div>

          {!submitted && (
            <Button
              onClick={handleSubmit}
              className="w-full"
              disabled={!quizAnswers.q1 || !quizAnswers.q2 || !quizAnswers.q3}
            >
              Submit Quiz
            </Button>
          )}

          {submitted && (
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="font-medium mb-2">Your score: {score}/3</p>

              {score === 3 ? (
                <p className="text-green-600">Great job! You've mastered the concept of perimeter!</p>
              ) : (
                <p className="text-blue-600">Good effort! Review the key takeaways to strengthen your understanding.</p>
              )}

              <div className="mt-4">
                <p className="font-medium">Your explanation:</p>
                <p className="mt-1 italic">{quizAnswers.explanation || "No explanation provided."}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
