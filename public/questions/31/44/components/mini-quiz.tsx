"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Check, X } from "lucide-react"

interface Question {
  id: string
  question: string
  options: string[]
  correctAnswer: string
}

export function MiniQuiz() {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const questions: Question[] = [
    {
      id: "q1",
      question: "How do you calculate total driving time?",
      options: [
        "Total trip time",
        "Total trip time - total stop time",
        "Total trip time + total stop time",
        "Speed × distance",
      ],
      correctAnswer: "Total trip time - total stop time",
    },
    {
      id: "q2",
      question: "Stops during travel are included in total driving time.",
      options: ["True", "False"],
      correctAnswer: "False",
    },
    {
      id: "q3",
      question: "Which formula do you use to calculate distance?",
      options: [
        "Distance = Speed × Time",
        "Distance = Time ÷ Speed",
        "Distance = Speed + Time",
        "Distance = Speed - Time",
      ],
      correctAnswer: "Distance = Speed × Time",
    },
  ]

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers({
      ...answers,
      [questionId]: value,
    })
  }

  const handleSubmit = () => {
    let newScore = 0
    questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        newScore++
      }
    })
    setScore(newScore)
    setSubmitted(true)
  }

  return (
    <div className="space-y-6">
      {questions.map((question) => (
        <Card key={question.id}>
          <CardHeader>
            <CardTitle className="text-lg">{question.question}</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={answers[question.id]} onValueChange={(value) => handleAnswerChange(question.id, value)}>
              {question.options.map((option) => (
                <div
                  key={option}
                  className={`flex items-center space-x-2 p-2 rounded-md ${
                    submitted
                      ? option === question.correctAnswer
                        ? "bg-green-50"
                        : answers[question.id] === option && option !== question.correctAnswer
                          ? "bg-red-50"
                          : ""
                      : ""
                  }`}
                >
                  <RadioGroupItem value={option} id={`${question.id}-${option}`} />
                  <Label htmlFor={`${question.id}-${option}`}>{option}</Label>
                  {submitted && option === question.correctAnswer && (
                    <Check className="ml-auto h-5 w-5 text-green-600" />
                  )}
                  {submitted && answers[question.id] === option && option !== question.correctAnswer && (
                    <X className="ml-auto h-5 w-5 text-red-600" />
                  )}
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>
      ))}

      <div className="flex justify-center">
        <Button onClick={handleSubmit} disabled={submitted}>
          {submitted ? "Submitted" : "Submit Answers"}
        </Button>
      </div>

      {submitted && (
        <div
          className={`p-6 ${
            score === questions.length ? "bg-green-50 border-green-200" : "bg-blue-50 border-blue-200"
          } border rounded-lg text-center`}
        >
          <h3 className="text-xl font-bold mb-2">
            Your Score: {score}/{questions.length}
          </h3>
          {score === questions.length ? (
            <p>Congratulations! You've earned the Road Trip Math Master badge! 🏆</p>
          ) : (
            <p>Good effort! Review the correct answers above and try again.</p>
          )}
        </div>
      )}
    </div>
  )
}
