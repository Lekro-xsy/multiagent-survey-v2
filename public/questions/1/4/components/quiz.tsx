"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Check, X } from "lucide-react"

interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
}

interface QuizProps {
  questions: QuizQuestion[]
  onComplete?: () => void
}

export function Quiz({ questions, onComplete }: QuizProps) {
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswerChange = (questionId: string, answerIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answerIndex,
    }))
  }

  const handleSubmit = () => {
    let correctCount = 0

    questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        correctCount++
      }
    })

    setScore(correctCount)
    setShowResults(true)

    if (correctCount === questions.length && onComplete) {
      onComplete()
    }
  }

  return (
    <div className="space-y-6">
      {questions.map((question) => (
        <Card key={question.id}>
          <CardHeader>
            <CardTitle className="text-lg">{question.question}</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={answers[question.id]?.toString()}
              onValueChange={(value) => handleAnswerChange(question.id, Number.parseInt(value))}
            >
              {question.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={index.toString()} id={`${question.id}-${index}`} />
                  <Label htmlFor={`${question.id}-${index}`}>{option}</Label>
                  {showResults && (
                    <>
                      {index === question.correctAnswer && <Check className="h-4 w-4 text-green-600 ml-2" />}
                      {answers[question.id] === index && index !== question.correctAnswer && (
                        <X className="h-4 w-4 text-red-600 ml-2" />
                      )}
                    </>
                  )}
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>
      ))}

      <Button onClick={handleSubmit} disabled={showResults} className="w-full">
        Submit Answers
      </Button>

      {showResults && (
        <div className="p-4 bg-blue-50 rounded-md">
          <p className="font-medium">
            Your score: {score} out of {questions.length}
          </p>
          {score === questions.length ? (
            <p className="text-green-600 mt-2">
              Congratulations! You've earned the "Braking Distance Master" badge! 🏆
            </p>
          ) : (
            <p className="text-blue-600 mt-2">Review the questions you missed and try again!</p>
          )}
        </div>
      )}
    </div>
  )
}
