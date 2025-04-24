"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CheckCircle2, XCircle } from "lucide-react"

export default function Page9() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({
    q1: "",
    q2: "",
    q3: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const questions = [
    {
      id: "q1",
      question:
        "A type of bacteria doubles in number every hour. If there are initially 100 bacteria, how many will there be after 5 hours?",
      options: [
        { value: "a", label: "500 bacteria" },
        { value: "b", label: "1,000 bacteria" },
        { value: "c", label: "3,200 bacteria" },
        { value: "d", label: "3,200 bacteria" },
      ],
      correctAnswer: "c",
      explanation: "100 × 2^5 = 100 × 32 = 3,200 bacteria",
    },
    {
      id: "q2",
      question:
        "An investment grows by 20% each year. If the initial investment is $1,000, what will it be worth after 3 years?",
      options: [
        { value: "a", label: "$1,600" },
        { value: "b", label: "$1,728" },
        { value: "c", label: "$2,000" },
        { value: "d", label: "$3,000" },
      ],
      correctAnswer: "b",
      explanation: "$1,000 × (1 + 20%)^3 = $1,000 × 1.2^3 = $1,000 × 1.728 = $1,728",
    },
    {
      id: "q3",
      question:
        "If a city's population increases by 30% every 10 years, and the initial population is 1 million, approximately what will the population be after 50 years?",
      options: [
        { value: "a", label: "2.5 million" },
        { value: "b", label: "3.0 million" },
        { value: "c", label: "3.7 million" },
        { value: "d", label: "3.8 million" },
      ],
      correctAnswer: "c",
      explanation: "1 million × (1 + 30%)^5 = 1 million × 1.3^5 ≈ 1 million × 3.7 = 3.7 million",
    },
  ]

  const handleAnswerChange = (questionId: string, value: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: value,
    })
  }

  const handleSubmit = () => {
    let newScore = 0

    questions.forEach((question) => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        newScore += 1
      }
    })

    setScore(newScore)
    setSubmitted(true)
  }

  const resetQuiz = () => {
    setSelectedAnswers({
      q1: "",
      q2: "",
      q3: "",
    })
    setSubmitted(false)
    setScore(0)
  }

  return (
    <div className="flex flex-col items-center">
      <motion.h1
        className="text-3xl font-bold text-purple-700 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🔔 What Have You Learned Today?
      </motion.h1>

      <motion.div
        className="w-full max-w-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Card>
          <CardContent className="p-6">
            <div className="bg-purple-50 p-4 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-purple-700 mb-4">Knowledge Summary</h3>
              <ul className="space-y-2 list-disc list-inside text-purple-800">
                <li>Exponential growth model: Used when quantities grow by a fixed ratio</li>
                <li>General formula: Initial value × growth rate^time</li>
                <li>Doubling is a special case of exponential growth with a growth rate of 2</li>
                <li>Exponential growth is common in nature, economics, population studies, and more</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Mini Quiz: Test Your Understanding</h3>

              <div className="space-y-6">
                {questions.map((question) => (
                  <div key={question.id} className="space-y-3">
                    <p className="font-medium">{question.question}</p>
                    <RadioGroup
                      value={selectedAnswers[question.id]}
                      onValueChange={(value) => handleAnswerChange(question.id, value)}
                      disabled={submitted}
                    >
                      {question.options.map((option) => (
                        <div key={option.value} className="flex items-center space-x-2">
                          <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} />
                          <Label htmlFor={`${question.id}-${option.value}`}>{option.label}</Label>
                          {submitted && option.value === question.correctAnswer && (
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                          )}
                        </div>
                      ))}
                    </RadioGroup>

                    {submitted && (
                      <div
                        className={`p-3 rounded-md ${
                          selectedAnswers[question.id] === question.correctAnswer ? "bg-green-50" : "bg-red-50"
                        }`}
                      >
                        <div className="flex items-center">
                          {selectedAnswers[question.id] === question.correctAnswer ? (
                            <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                          ) : (
                            <XCircle className="h-4 w-4 text-red-600 mr-2" />
                          )}
                          <p
                            className={`text-sm ${
                              selectedAnswers[question.id] === question.correctAnswer
                                ? "text-green-700"
                                : "text-red-700"
                            }`}
                          >
                            {question.explanation}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              {!submitted ? (
                <Button
                  onClick={handleSubmit}
                  className="bg-purple-600 hover:bg-purple-700"
                  disabled={Object.values(selectedAnswers).some((value) => value === "")}
                >
                  Submit Answers
                </Button>
              ) : (
                <Button onClick={resetQuiz} variant="outline">
                  Retake Quiz
                </Button>
              )}
            </div>

            {submitted && (
              <motion.div
                className="mt-6 p-4 rounded-lg bg-blue-50 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Quiz Results</h3>
                <p className="text-blue-800">
                  You got {score} out of {questions.length} questions correct.
                  {score === questions.length ? " Excellent! You've mastered this concept." : " Keep practicing!"}
                </p>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        className="bg-green-50 p-6 rounded-lg max-w-lg text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-xl font-semibold text-green-700 mb-4">Your Learning Journey is Complete!</h3>
        <p className="mb-4">
          Congratulations on completing this lesson on exponential growth models. You now have a powerful mathematical
          tool that you can apply to many real-world problems.
        </p>
        <p>
          Remember: Whenever you encounter terms like "doubling" or "growing by a percentage," think about using an
          exponential model!
        </p>
      </motion.div>
    </div>
  )
}
