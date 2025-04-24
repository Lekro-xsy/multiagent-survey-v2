"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2 } from "lucide-react"

export function PageNine() {
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({})
  const [openAnswer, setOpenAnswer] = useState("")
  const [difficulty, setDifficulty] = useState<string | null>(null)
  const [feedback, setFeedback] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleQuizAnswer = (questionId: string, answer: string) => {
    setQuizAnswers({
      ...quizAnswers,
      [questionId]: answer,
    })
  }

  const handleSubmit = () => {
    setIsSubmitted(true)
  }

  const quizQuestions = [
    {
      id: "q1",
      question: "Which of the following is an algebraic expression?",
      options: [
        { value: "a", label: "3x + 5 = 20" },
        { value: "b", label: "4y - 7" },
        { value: "c", label: "x² = 25" },
        { value: "d", label: "2(a + b) = 10" },
      ],
      correctAnswer: "b",
    },
    {
      id: "q2",
      question: "In the expression 3x + 15, what does the constant 15 likely represent in a real-world context?",
      options: [
        { value: "a", label: "A variable amount that changes" },
        { value: "b", label: "The number of items purchased" },
        { value: "c", label: "A fixed fee or base cost" },
        { value: "d", label: "The total cost" },
      ],
      correctAnswer: "c",
    },
    {
      id: "q3",
      question: "If the expression 0.25x + 5 represents the cost of printing photos, what might x represent?",
      options: [
        { value: "a", label: "The cost per photo" },
        { value: "b", label: "The number of photos" },
        { value: "c", label: "The base fee" },
        { value: "d", label: "The total cost" },
      ],
      correctAnswer: "b",
    },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-center text-3xl font-bold text-sky-700">📚 Reflect on What You've Learned!</h1>

      <div className="rounded-lg bg-sky-50 p-6">
        <h2 className="mb-4 text-xl font-semibold text-sky-700">Review Key Ideas:</h2>
        <ul className="space-y-3 pl-5">
          <li className="text-lg">
            An algebraic expression is a mathematical phrase with variables, numbers, and operations (but no equal sign)
          </li>
          <li className="text-lg">
            Parts of an expression can represent different quantities in real-world situations
          </li>
          <li className="text-lg">Constants represent fixed values that don't change</li>
          <li className="text-lg">Coefficients tell us how much a variable affects the result</li>
        </ul>
      </div>

      <div className="rounded-lg border border-sky-200 bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-xl font-semibold text-sky-700">Mini-Quiz:</h2>

        <div className="space-y-6">
          {quizQuestions.map((question) => (
            <div key={question.id} className="space-y-3">
              <h3 className="text-lg font-medium">{question.question}</h3>
              <RadioGroup
                value={quizAnswers[question.id]}
                onValueChange={(value) => handleQuizAnswer(question.id, value)}
                disabled={isSubmitted}
              >
                {question.options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} />
                    <Label
                      htmlFor={`${question.id}-${option.value}`}
                      className={
                        isSubmitted && option.value === question.correctAnswer ? "font-medium text-green-600" : ""
                      }
                    >
                      {option.label}
                      {isSubmitted && option.value === question.correctAnswer && (
                        <CheckCircle2 className="ml-2 inline h-4 w-4 text-green-600" />
                      )}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          ))}

          <div className="space-y-3 pt-4">
            <h3 className="text-lg font-medium">
              Open-ended question: Explain how you would create an algebraic expression to model the cost of a movie
              streaming service that charges a monthly fee plus an additional fee for premium movies.
            </h3>
            <Textarea
              placeholder="My algebraic expression would be..."
              className="min-h-[120px]"
              value={openAnswer}
              onChange={(e) => setOpenAnswer(e.target.value)}
              disabled={isSubmitted}
            />
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-sky-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold text-sky-700">Your Feedback:</h2>

        <div className="space-y-4">
          <div>
            <h3 className="mb-2 text-lg font-medium">How difficult did you find this lesson?</h3>
            <div className="flex flex-wrap gap-2">
              {["Easy", "Medium", "Challenging"].map((level) => (
                <Button
                  key={level}
                  variant={difficulty === level ? "default" : "outline"}
                  onClick={() => setDifficulty(level)}
                  disabled={isSubmitted}
                >
                  {level}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-medium">Any additional comments?</h3>
            <Textarea
              placeholder="Share your thoughts..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              disabled={isSubmitted}
            />
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <Button
            onClick={handleSubmit}
            disabled={
              Object.keys(quizAnswers).length < quizQuestions.length || !openAnswer || !difficulty || isSubmitted
            }
            className="px-8"
          >
            {isSubmitted ? "Submitted!" : "Submit Quiz & Feedback"}
          </Button>
        </div>
      </div>

      {isSubmitted && (
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <h2 className="mb-4 text-xl font-semibold text-green-700">Congratulations!</h2>
            <p className="text-lg">You've completed the lesson on algebraic expressions! You now understand how to:</p>
            <ul className="mt-4 space-y-2 pl-5">
              <li className="text-lg">Identify algebraic expressions</li>
              <li className="text-lg">Connect real-world meaning to parts of an expression</li>
              <li className="text-lg">Create your own expressions to model situations</li>
              <li className="text-lg">Apply this knowledge to different contexts</li>
            </ul>
            <p className="mt-6 text-lg">
              This understanding will help you in many areas of math and real-world problem solving!
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
