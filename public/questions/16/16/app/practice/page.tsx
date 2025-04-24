"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Practice problems data
const problems = [
  {
    id: 1,
    context: "Running",
    question: "You ran 8 miles in 64 minutes. What was your average speed in miles per minute?",
    setup: "8 ÷ 64",
    answer: "0.125",
    unit: "miles per minute",
    explanation:
      "To find the average speed in miles per minute, divide the total distance (8 miles) by the total time (64 minutes).",
  },
  {
    id: 2,
    context: "Shopping",
    question: "You bought 3 pounds of apples for $5.25. How much did the apples cost per pound?",
    setup: "5.25 ÷ 3",
    answer: "1.75",
    unit: "dollars per pound",
    explanation: "To find the cost per pound, divide the total cost ($5.25) by the total weight (3 pounds).",
  },
  {
    id: 3,
    context: "Reading",
    question: "You read 156 pages in 4 hours. How many pages do you read per hour?",
    setup: "156 ÷ 4",
    answer: "39",
    unit: "pages per hour",
    explanation:
      "To find the reading rate in pages per hour, divide the total pages (156) by the total time (4 hours).",
  },
  {
    id: 4,
    context: "Driving",
    question: "A car traveled 210 miles on 7 gallons of gas. How many miles per gallon did the car get?",
    setup: "210 ÷ 7",
    answer: "30",
    unit: "miles per gallon",
    explanation:
      "To find the fuel efficiency in miles per gallon, divide the total distance (210 miles) by the total fuel used (7 gallons).",
  },
  {
    id: 5,
    context: "Cooking",
    question:
      "A recipe calls for 2.5 cups of flour to make 4 dozen cookies. How many cups of flour are needed per dozen cookies?",
    setup: "2.5 ÷ 4",
    answer: "0.625",
    unit: "cups per dozen",
    explanation:
      "To find the amount of flour needed per dozen cookies, divide the total flour (2.5 cups) by the number of dozens (4).",
  },
]

export default function PracticePage() {
  const [currentTab, setCurrentTab] = useState("easy")
  const [userAnswers, setUserAnswers] = useState<{ [key: string]: string }>({})
  const [checkedAnswers, setCheckedAnswers] = useState<{ [key: string]: boolean }>({})

  const handleCheckAnswer = (problemId: number, correctAnswer: string) => {
    const userAnswer = userAnswers[`problem-${problemId}`]
    const isCorrect = Number.parseFloat(userAnswer) === Number.parseFloat(correctAnswer)

    setCheckedAnswers((prev) => ({
      ...prev,
      [`problem-${problemId}`]: isCorrect,
    }))
  }

  return (
    <div className="container py-8 px-4">
      <div className="flex items-center mb-6">
        <Link href="/">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
        <h1 className="text-2xl font-bold ml-4">Practice Unit Rates</h1>
      </div>

      <Tabs defaultValue="easy" value={currentTab} onValueChange={setCurrentTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="easy">Easy</TabsTrigger>
          <TabsTrigger value="medium">Medium</TabsTrigger>
          <TabsTrigger value="hard">Hard</TabsTrigger>
        </TabsList>

        <TabsContent value="easy" className="space-y-6">
          {problems.slice(0, 2).map((problem) => (
            <Card key={problem.id}>
              <CardHeader>
                <CardTitle>{problem.context} Problem</CardTitle>
                <CardDescription>{problem.question}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor={`setup-${problem.id}`}>Division Setup:</Label>
                    <Input
                      id={`setup-${problem.id}`}
                      placeholder={problem.setup}
                      disabled={checkedAnswers[`problem-${problem.id}`] === true}
                    />
                  </div>

                  <div>
                    <Label htmlFor={`answer-${problem.id}`}>Your Answer ({problem.unit}):</Label>
                    <div className="flex space-x-2">
                      <Input
                        id={`answer-${problem.id}`}
                        placeholder="Enter your answer"
                        value={userAnswers[`problem-${problem.id}`] || ""}
                        onChange={(e) =>
                          setUserAnswers({
                            ...userAnswers,
                            [`problem-${problem.id}`]: e.target.value,
                          })
                        }
                        disabled={checkedAnswers[`problem-${problem.id}`] === true}
                      />
                      <Button
                        onClick={() => handleCheckAnswer(problem.id, problem.answer)}
                        disabled={checkedAnswers[`problem-${problem.id}`] === true}
                      >
                        Check
                      </Button>
                    </div>
                  </div>

                  {checkedAnswers[`problem-${problem.id}`] !== undefined && (
                    <div
                      className={`p-4 rounded-lg ${checkedAnswers[`problem-${problem.id}`] ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}
                    >
                      <div className="flex items-center space-x-2">
                        {checkedAnswers[`problem-${problem.id}`] ? (
                          <Check className="h-5 w-5 text-green-600" />
                        ) : (
                          <X className="h-5 w-5 text-red-600" />
                        )}
                        <p
                          className={`font-medium ${checkedAnswers[`problem-${problem.id}`] ? "text-green-800" : "text-red-800"}`}
                        >
                          {checkedAnswers[`problem-${problem.id}`] ? "Correct!" : "Try again!"}
                        </p>
                      </div>
                      {!checkedAnswers[`problem-${problem.id}`] && <p className="mt-2">Hint: {problem.explanation}</p>}
                      {checkedAnswers[`problem-${problem.id}`] && <p className="mt-2">{problem.explanation}</p>}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="medium" className="space-y-6">
          {problems.slice(2, 4).map((problem) => (
            <Card key={problem.id}>
              <CardHeader>
                <CardTitle>{problem.context} Problem</CardTitle>
                <CardDescription>{problem.question}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor={`setup-${problem.id}`}>Division Setup:</Label>
                    <Input
                      id={`setup-${problem.id}`}
                      placeholder="Enter your division setup"
                      disabled={checkedAnswers[`problem-${problem.id}`] === true}
                    />
                  </div>

                  <div>
                    <Label htmlFor={`answer-${problem.id}`}>Your Answer ({problem.unit}):</Label>
                    <div className="flex space-x-2">
                      <Input
                        id={`answer-${problem.id}`}
                        placeholder="Enter your answer"
                        value={userAnswers[`problem-${problem.id}`] || ""}
                        onChange={(e) =>
                          setUserAnswers({
                            ...userAnswers,
                            [`problem-${problem.id}`]: e.target.value,
                          })
                        }
                        disabled={checkedAnswers[`problem-${problem.id}`] === true}
                      />
                      <Button
                        onClick={() => handleCheckAnswer(problem.id, problem.answer)}
                        disabled={checkedAnswers[`problem-${problem.id}`] === true}
                      >
                        Check
                      </Button>
                    </div>
                  </div>

                  {checkedAnswers[`problem-${problem.id}`] !== undefined && (
                    <div
                      className={`p-4 rounded-lg ${checkedAnswers[`problem-${problem.id}`] ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}
                    >
                      <div className="flex items-center space-x-2">
                        {checkedAnswers[`problem-${problem.id}`] ? (
                          <Check className="h-5 w-5 text-green-600" />
                        ) : (
                          <X className="h-5 w-5 text-red-600" />
                        )}
                        <p
                          className={`font-medium ${checkedAnswers[`problem-${problem.id}`] ? "text-green-800" : "text-red-800"}`}
                        >
                          {checkedAnswers[`problem-${problem.id}`] ? "Correct!" : "Try again!"}
                        </p>
                      </div>
                      {!checkedAnswers[`problem-${problem.id}`] && <p className="mt-2">Hint: {problem.explanation}</p>}
                      {checkedAnswers[`problem-${problem.id}`] && <p className="mt-2">{problem.explanation}</p>}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="hard" className="space-y-6">
          {problems.slice(4).map((problem) => (
            <Card key={problem.id}>
              <CardHeader>
                <CardTitle>{problem.context} Problem</CardTitle>
                <CardDescription>{problem.question}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor={`setup-${problem.id}`}>Division Setup:</Label>
                    <Input
                      id={`setup-${problem.id}`}
                      placeholder="Enter your division setup"
                      disabled={checkedAnswers[`problem-${problem.id}`] === true}
                    />
                  </div>

                  <div>
                    <Label htmlFor={`answer-${problem.id}`}>Your Answer ({problem.unit}):</Label>
                    <div className="flex space-x-2">
                      <Input
                        id={`answer-${problem.id}`}
                        placeholder="Enter your answer"
                        value={userAnswers[`problem-${problem.id}`] || ""}
                        onChange={(e) =>
                          setUserAnswers({
                            ...userAnswers,
                            [`problem-${problem.id}`]: e.target.value,
                          })
                        }
                        disabled={checkedAnswers[`problem-${problem.id}`] === true}
                      />
                      <Button
                        onClick={() => handleCheckAnswer(problem.id, problem.answer)}
                        disabled={checkedAnswers[`problem-${problem.id}`] === true}
                      >
                        Check
                      </Button>
                    </div>
                  </div>

                  {checkedAnswers[`problem-${problem.id}`] !== undefined && (
                    <div
                      className={`p-4 rounded-lg ${checkedAnswers[`problem-${problem.id}`] ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}
                    >
                      <div className="flex items-center space-x-2">
                        {checkedAnswers[`problem-${problem.id}`] ? (
                          <Check className="h-5 w-5 text-green-600" />
                        ) : (
                          <X className="h-5 w-5 text-red-600" />
                        )}
                        <p
                          className={`font-medium ${checkedAnswers[`problem-${problem.id}`] ? "text-green-800" : "text-red-800"}`}
                        >
                          {checkedAnswers[`problem-${problem.id}`] ? "Correct!" : "Try again!"}
                        </p>
                      </div>
                      {!checkedAnswers[`problem-${problem.id}`] && <p className="mt-2">Hint: {problem.explanation}</p>}
                      {checkedAnswers[`problem-${problem.id}`] && <p className="mt-2">{problem.explanation}</p>}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
