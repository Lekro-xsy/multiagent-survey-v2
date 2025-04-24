"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, ArrowRight, Bike, Clock, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useMobile } from "@/hooks/use-mobile"

// Lesson content data
const lessons = [
  {
    id: 1,
    title: "🚴‍♂️ Biking and Burning Energy!",
    content:
      "You went for a 30-minute bike ride and burned 190 calories. Now you're curious — how many calories are you burning every minute?",
    interactive: "animation",
  },
  {
    id: 2,
    title: "🧩 What Do We Know?",
    content: "Let's break down the information we have and what we need to find.",
    facts: [
      { icon: <Flame className="h-5 w-5 text-orange-500" />, text: "Total calories burned: 190" },
      { icon: <Clock className="h-5 w-5 text-blue-500" />, text: "Total time: 30 minutes" },
      { icon: <Bike className="h-5 w-5 text-green-500" />, text: "Find: Calories per 1 minute" },
    ],
    interactive: "drag",
  },
  {
    id: 3,
    title: "🎯 What Does 'Per Minute' Mean?",
    content:
      "When we say 'calories per minute', we're looking for how many calories are burned in just one minute of biking.",
    explanation:
      "If the calories are spread evenly across all 30 minutes, we need to find out how much is assigned to each individual minute.",
    interactive: "visualization",
  },
  {
    id: 4,
    title: "🧮 How Can We Find It?",
    content: "To find the calories burned per minute, we need to divide the total calories by the total minutes.",
    steps: [
      "Find total calories: 190",
      "Find total minutes: 30",
      "Set up division: Calories per minute = Total calories ÷ Total minutes",
    ],
    formula: "Calories per minute = 190 ÷ 30",
    interactive: "setup",
  },
  {
    id: 5,
    title: "✍️ Your Turn to Solve!",
    content:
      "Now it's your turn to solve the problem. Divide the total calories by the total minutes to find the calories burned per minute.",
    hint: "Set up the division expression and solve it step by step.",
    interactive: "solve",
  },
  {
    id: 6,
    title: "🎯 Let's Check Your Work!",
    content: "Let's see the complete solution to our problem.",
    solution: {
      setup: "190 ÷ 30",
      steps: ["190 ÷ 30 = 6.33 (approximately)"],
      conclusion: "You burn about 6.33 calories per minute!",
      verification: "30 minutes × 6.33 ≈ 190 calories",
    },
    interactive: "reveal",
  },
  {
    id: 7,
    title: "🔄 Try a New Exercise!",
    content: "Let's try a similar problem to practice what you've learned.",
    problem: "You swim for 20 minutes and burn 150 calories. How many calories do you burn per minute?",
    interactive: "practice",
  },
  {
    id: 8,
    title: "🚀 A Totally New Scenario!",
    content: "Now let's apply the same concept to a different situation.",
    problem: "You study for 3 hours and complete 180 practice questions. How many questions do you complete per hour?",
    interactive: "transfer",
  },
  {
    id: 9,
    title: "📚 Review What You've Learned!",
    content: "Let's review what you've learned about unit rates.",
    summary: [
      "A unit rate tells us how much of one quantity corresponds to 1 unit of another quantity.",
      "To find a unit rate, divide the first quantity by the second quantity.",
      "Unit rates help us compare different situations and make predictions.",
    ],
    interactive: "quiz",
  },
]

export default function LessonPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const isMobile = useMobile()
  const lessonId = Number.parseInt(params.id)
  const lesson = lessons.find((l) => l.id === lessonId) || lessons[0]

  const [userAnswer, setUserAnswer] = useState("")
  const [showSolution, setShowSolution] = useState(false)
  const [animationProgress, setAnimationProgress] = useState(0)
  const [calories, setCalories] = useState(0)
  const [draggedItems, setDraggedItems] = useState<{ [key: string]: boolean }>({})
  const [quizAnswers, setQuizAnswers] = useState<{ [key: string]: string }>({})
  const [practiceAnswer, setPracticeAnswer] = useState("")
  const [transferAnswer, setTransferAnswer] = useState("")
  const [showPracticeSolution, setShowPracticeSolution] = useState(false)
  const [showTransferSolution, setShowTransferSolution] = useState(false)

  // Animation for the bike ride
  useEffect(() => {
    if (lesson.id === 1) {
      const interval = setInterval(() => {
        setAnimationProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          // Calculate calories based on progress (190 total)
          const newCalories = Math.floor((prev / 100) * 190)
          setCalories(newCalories)
          return prev + 1
        })
      }, 100)

      return () => clearInterval(interval)
    }
  }, [lesson.id])

  const handleNext = () => {
    if (lessonId < lessons.length) {
      router.push(`/lesson/${lessonId + 1}`)
    } else {
      router.push("/practice")
    }
  }

  const handlePrevious = () => {
    if (lessonId > 1) {
      router.push(`/lesson/${lessonId - 1}`)
    }
  }

  const handleDragItem = (item: string) => {
    setDraggedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }))
  }

  const renderInteractiveContent = () => {
    switch (lesson.interactive) {
      case "animation":
        return (
          <div className="flex flex-col items-center space-y-4">
            <div className="relative w-full max-w-md h-48 bg-gradient-to-b from-blue-100 to-green-100 rounded-lg overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full">
                <div className="relative h-12">
                  <Bike
                    className="absolute bottom-0 text-blue-600"
                    style={{
                      left: `${animationProgress}%`,
                      transform: `translateX(-${animationProgress}%)`,
                      width: isMobile ? "40px" : "60px",
                      height: isMobile ? "40px" : "60px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between w-full max-w-md">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-500" />
                <span>{Math.floor((animationProgress / 100) * 30)} minutes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Flame className="h-5 w-5 text-orange-500" />
                <span>{calories} calories</span>
              </div>
            </div>
            <Progress value={animationProgress} className="w-full max-w-md" />
            <Button
              onClick={() => {
                setAnimationProgress(100)
                setCalories(190)
              }}
              disabled={animationProgress === 100}
            >
              Start Riding
            </Button>
          </div>
        )

      case "drag":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {lesson.facts?.map((fact, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all ${draggedItems[`fact-${index}`] ? "opacity-50" : ""}`}
                  onClick={() => handleDragItem(`fact-${index}`)}
                >
                  <CardContent className="p-4 flex items-center space-x-3">
                    {fact.icon}
                    <span>{fact.text}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 min-h-[100px]">
                <h3 className="font-medium mb-2">Given Information:</h3>
                <div className="space-y-2">
                  {Object.entries(draggedItems)
                    .filter(([key, value]) => value && key.startsWith("fact-"))
                    .map(([key]) => {
                      const index = Number.parseInt(key.split("-")[1])
                      return (
                        lesson.facts && (
                          <div key={key} className="flex items-center space-x-3 p-2 bg-gray-100 rounded">
                            {lesson.facts[index].icon}
                            <span>{lesson.facts[index].text}</span>
                          </div>
                        )
                      )
                    })}
                </div>
              </div>
            </div>
          </div>
        )

      case "visualization":
        return (
          <div className="space-y-6">
            <p className="text-lg">{lesson.explanation}</p>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-medium mb-4">Visualizing calories spread across 30 minutes:</h3>
              <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                {Array.from({ length: 30 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-blue-100 hover:bg-blue-200 rounded flex items-center justify-center text-sm cursor-pointer transition-colors"
                    onClick={() => {}}
                  >
                    <div className="text-center">
                      <div className="text-xs">{i + 1}</div>
                      <div className="text-xs font-medium">≈6.33</div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-center">
                If 190 calories are spread evenly across 30 minutes, each minute gets an equal share.
              </p>
            </div>
          </div>
        )

      case "setup":
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              {lesson.steps?.map((step, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm">
                    {index + 1}
                  </div>
                  <p>{step}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="font-medium mb-4">Mathematical Model:</h3>
              <div className="flex flex-col items-center">
                <div className="text-xl font-medium mb-2">Calories per minute = Total calories ÷ Total minutes</div>
                <div className="text-2xl font-bold">Calories per minute = 190 ÷ 30</div>
              </div>
            </div>
          </div>
        )

      case "solve":
        return (
          <div className="space-y-6">
            <p>{lesson.hint}</p>

            <div className="space-y-4">
              <div>
                <Label htmlFor="division-setup">Write the division expression:</Label>
                <Input
                  id="division-setup"
                  placeholder="e.g., 190 ÷ 30"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="answer">Your answer (calories per minute):</Label>
                <div className="flex space-x-2">
                  <Input id="answer" placeholder="e.g., 6.33" type="number" step="0.01" />
                  <Button onClick={() => setShowSolution(true)}>Check</Button>
                </div>
              </div>

              {showSolution && (
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg mt-4">
                  <p className="font-medium text-green-800">Great job!</p>
                  <p>Click "Next" to see the full solution.</p>
                </div>
              )}
            </div>
          </div>
        )

      case "reveal":
        return (
          <div className="space-y-6">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="font-medium mb-4">Solution:</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Step 1: Set up the division</p>
                  <p className="text-xl">{lesson.solution?.setup}</p>
                </div>

                <div>
                  <p className="font-medium">Step 2: Solve</p>
                  {lesson.solution?.steps.map((step, index) => (
                    <p key={index} className="text-xl">
                      {step}
                    </p>
                  ))}
                </div>

                <div>
                  <p className="font-medium">Conclusion:</p>
                  <p className="text-xl text-green-700">{lesson.solution?.conclusion}</p>
                </div>

                <div>
                  <p className="font-medium">Verification:</p>
                  <p>{lesson.solution?.verification}</p>
                </div>
              </div>
            </div>
          </div>
        )

      case "practice":
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-medium">{lesson.problem}</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="practice-setup">Write the division expression:</Label>
                <Input
                  id="practice-setup"
                  placeholder="e.g., 150 ÷ 20"
                  value={practiceAnswer}
                  onChange={(e) => setPracticeAnswer(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="practice-answer">Your answer (calories per minute):</Label>
                <div className="flex space-x-2">
                  <Input id="practice-answer" placeholder="e.g., 7.5" type="number" step="0.01" />
                  <Button onClick={() => setShowPracticeSolution(true)}>Check</Button>
                </div>
              </div>

              {showPracticeSolution && (
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg mt-4">
                  <p className="font-medium text-green-800">Solution:</p>
                  <p>150 ÷ 20 = 7.5</p>
                  <p>You burn 7.5 calories per minute when swimming.</p>
                </div>
              )}
            </div>
          </div>
        )

      case "transfer":
        return (
          <div className="space-y-6">
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-medium">{lesson.problem}</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="transfer-setup">Write the division expression:</Label>
                <Input
                  id="transfer-setup"
                  placeholder="e.g., 180 ÷ 3"
                  value={transferAnswer}
                  onChange={(e) => setTransferAnswer(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="transfer-answer">Your answer (questions per hour):</Label>
                <div className="flex space-x-2">
                  <Input id="transfer-answer" placeholder="e.g., 60" type="number" />
                  <Button onClick={() => setShowTransferSolution(true)}>Check</Button>
                </div>
              </div>

              {showTransferSolution && (
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg mt-4">
                  <p className="font-medium text-green-800">Solution:</p>
                  <p>180 ÷ 3 = 60</p>
                  <p>You complete 60 practice questions per hour.</p>
                </div>
              )}
            </div>
          </div>
        )

      case "quiz":
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              {lesson.summary?.map((point, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <p>{point}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 mt-6">
              <h3 className="font-medium">Quick Quiz:</h3>

              <div className="space-y-2">
                <p>1. What is a unit rate?</p>
                <div className="space-y-2">
                  {[
                    "A quantity that changes over time",
                    "A comparison of two different units",
                    "A ratio that compares a quantity to one unit of another quantity",
                    "The total of two measurements",
                  ].map((option, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id={`q1-${i}`}
                        name="q1"
                        value={option}
                        checked={quizAnswers["q1"] === option}
                        onChange={() => setQuizAnswers({ ...quizAnswers, q1: option })}
                      />
                      <label htmlFor={`q1-${i}`}>{option}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <p>2. To find a unit rate, you:</p>
                <div className="space-y-2">
                  {[
                    "Multiply the two quantities",
                    "Add the two quantities",
                    "Divide the first quantity by the second quantity",
                    "Subtract the smaller quantity from the larger one",
                  ].map((option, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id={`q2-${i}`}
                        name="q2"
                        value={option}
                        checked={quizAnswers["q2"] === option}
                        onChange={() => setQuizAnswers({ ...quizAnswers, q2: option })}
                      />
                      <label htmlFor={`q2-${i}`}>{option}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="q3">3. Describe a real-world situation where you would find a unit rate:</Label>
                <Input
                  id="q3"
                  placeholder="Type your answer here..."
                  value={quizAnswers["q3"] || ""}
                  onChange={(e) => setQuizAnswers({ ...quizAnswers, q3: e.target.value })}
                />
              </div>

              <Button
                className="mt-4"
                onClick={() => {
                  if (
                    quizAnswers["q1"] === "A ratio that compares a quantity to one unit of another quantity" &&
                    quizAnswers["q2"] === "Divide the first quantity by the second quantity" &&
                    quizAnswers["q3"]?.length > 5
                  ) {
                    alert("Great job! You've completed the unit rate lesson!")
                  } else {
                    alert("Check your answers and try again!")
                  }
                }}
              >
                Submit Quiz
              </Button>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="container py-8 px-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={handlePrevious} disabled={lessonId === 1}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <span className="text-sm text-muted-foreground">
            Lesson {lessonId} of {lessons.length}
          </span>
        </div>
        <Button size="sm" onClick={handleNext}>
          {lessonId === lessons.length ? "Finish" : "Next"}
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

      <Progress value={(lessonId / lessons.length) * 100} className="mb-6" />

      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">{lesson.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg">{lesson.content}</p>
          {renderInteractiveContent()}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handlePrevious} disabled={lessonId === 1}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <Button onClick={handleNext}>
            {lessonId === lessons.length ? "Finish" : "Next"}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
