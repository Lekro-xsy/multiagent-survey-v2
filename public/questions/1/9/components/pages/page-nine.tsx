"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Check, X } from "lucide-react"

export default function PageNine() {
  const [quizAnswers, setQuizAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
  })

  const [quizResults, setQuizResults] = useState({
    q1: null as boolean | null,
    q2: null as boolean | null,
    q3: null as boolean | null,
    q4: null as boolean | null,
  })

  const [difficulty, setDifficulty] = useState<string | null>(null)

  const checkAnswers = () => {
    setQuizResults({
      q1: quizAnswers.q1 === "b",
      q2: quizAnswers.q2 === "c",
      q3: quizAnswers.q3 === "a",
      q4:
        quizAnswers.q4.toLowerCase().includes("2^") ||
        quizAnswers.q4.toLowerCase().includes("2**") ||
        quizAnswers.q4.toLowerCase().includes("power") ||
        quizAnswers.q4.toLowerCase().includes("exponent"),
    })
  }

  const allCorrect = Object.values(quizResults).every((result) => result === true)
  const allAnswered = Object.values(quizAnswers).every((answer) => answer !== "")

  return (
    <div>
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">📚 What Did You Learn?</h1>

      <div className="mb-8">
        <h3 className="font-bold text-green-700 mb-4 text-xl">Key Takeaways:</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <span>Recognizing doubling patterns in real-world situations</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <span>Understanding exponential growth and how it differs from linear growth</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <span>Building and using mathematical expressions with exponents</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <span>Applying the same mathematical model to different situations</span>
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg border mb-8">
        <h3 className="font-bold text-green-700 mb-4 text-xl">Mini-Quiz:</h3>

        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-2">1. What happens to the number of logs after each round of splitting?</h4>
            <RadioGroup value={quizAnswers.q1} onValueChange={(value) => setQuizAnswers({ ...quizAnswers, q1: value })}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="a" id="q1-a" />
                <Label htmlFor="q1-a">It increases by 2</Label>
                {quizResults.q1 === false && quizAnswers.q1 === "a" && <X className="h-4 w-4 text-red-500 ml-2" />}
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="b" id="q1-b" />
                <Label htmlFor="q1-b">It doubles (multiplies by 2)</Label>
                {quizResults.q1 === true && <Check className="h-4 w-4 text-green-500 ml-2" />}
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="c" id="q1-c" />
                <Label htmlFor="q1-c">It squares</Label>
                {quizResults.q1 === false && quizAnswers.q1 === "c" && <X className="h-4 w-4 text-red-500 ml-2" />}
              </div>
            </RadioGroup>
          </div>

          <div>
            <h4 className="font-medium mb-2">2. After 3 rounds of splitting, how many logs are there?</h4>
            <RadioGroup value={quizAnswers.q2} onValueChange={(value) => setQuizAnswers({ ...quizAnswers, q2: value })}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="a" id="q2-a" />
                <Label htmlFor="q2-a">6</Label>
                {quizResults.q2 === false && quizAnswers.q2 === "a" && <X className="h-4 w-4 text-red-500 ml-2" />}
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="b" id="q2-b" />
                <Label htmlFor="q2-b">9</Label>
                {quizResults.q2 === false && quizAnswers.q2 === "b" && <X className="h-4 w-4 text-red-500 ml-2" />}
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="c" id="q2-c" />
                <Label htmlFor="q2-c">8</Label>
                {quizResults.q2 === true && <Check className="h-4 w-4 text-green-500 ml-2" />}
              </div>
            </RadioGroup>
          </div>

          <div>
            <h4 className="font-medium mb-2">3. Which mathematical operation best represents this pattern?</h4>
            <RadioGroup value={quizAnswers.q3} onValueChange={(value) => setQuizAnswers({ ...quizAnswers, q3: value })}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="a" id="q3-a" />
                <Label htmlFor="q3-a">Exponents (powers)</Label>
                {quizResults.q3 === true && <Check className="h-4 w-4 text-green-500 ml-2" />}
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="b" id="q3-b" />
                <Label htmlFor="q3-b">Addition</Label>
                {quizResults.q3 === false && quizAnswers.q3 === "b" && <X className="h-4 w-4 text-red-500 ml-2" />}
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="c" id="q3-c" />
                <Label htmlFor="q3-c">Subtraction</Label>
                {quizResults.q3 === false && quizAnswers.q3 === "c" && <X className="h-4 w-4 text-red-500 ml-2" />}
              </div>
            </RadioGroup>
          </div>

          <div>
            <h4 className="font-medium mb-2">
              4. Explain in your own words how you would find the number of logs after any number of rounds.
            </h4>
            <div className="flex flex-col gap-2">
              <Input
                value={quizAnswers.q4}
                onChange={(e) => setQuizAnswers({ ...quizAnswers, q4: e.target.value })}
                placeholder="Type your answer here"
              />
              {quizResults.q4 !== null && (
                <div className={`flex items-center ${quizResults.q4 ? "text-green-600" : "text-red-600"}`}>
                  {quizResults.q4 ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      <span>Great explanation!</span>
                    </>
                  ) : (
                    <>
                      <X className="mr-2 h-4 w-4" />
                      <span>Try to mention exponents or powers in your explanation.</span>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <Button onClick={checkAnswers} className="bg-green-700 hover:bg-green-800" disabled={!allAnswered}>
            Check Answers
          </Button>
        </div>

        {allCorrect && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <h4 className="font-medium text-green-700 mb-2">Congratulations!</h4>
            <p>
              You&apos;ve successfully completed the quiz and demonstrated your understanding of exponential growth!
            </p>
          </div>
        )}
      </div>

      {(allCorrect || Object.values(quizResults).some((result) => result !== null)) && (
        <div className="bg-white p-6 rounded-lg border mb-8">
          <h3 className="font-bold text-green-700 mb-4">How was this lesson for you?</h3>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={difficulty === "easy" ? "default" : "outline"}
              className={difficulty === "easy" ? "bg-green-600" : ""}
              onClick={() => setDifficulty("easy")}
            >
              Easy
            </Button>
            <Button
              variant={difficulty === "medium" ? "default" : "outline"}
              className={difficulty === "medium" ? "bg-green-600" : ""}
              onClick={() => setDifficulty("medium")}
            >
              Just Right
            </Button>
            <Button
              variant={difficulty === "hard" ? "default" : "outline"}
              className={difficulty === "hard" ? "bg-green-600" : ""}
              onClick={() => setDifficulty("hard")}
            >
              Challenging
            </Button>
          </div>

          {difficulty && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p>Thank you for your feedback! This helps us improve our lessons.</p>
            </div>
          )}
        </div>
      )}

      <div className="text-center">
        <h3 className="font-bold text-green-800 mb-4 text-xl">You&apos;ve Completed the Lesson!</h3>
        <p className="mb-6">
          You now understand how exponential growth works through the context of log splitting. This same pattern
          appears in many real-world situations like population growth, compound interest, and viral spread.
        </p>
      </div>
    </div>
  )
}
