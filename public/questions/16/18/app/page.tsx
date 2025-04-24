"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, HelpCircle, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

export default function MathLearningExperience() {
  const [currentPage, setCurrentPage] = useState(0)
  const [edmondVariable, setEdmondVariable] = useState("")
  const [raymondExpression, setRaymondExpression] = useState("")
  const [sophiaExpression, setSophiaExpression] = useState("")
  const [smallBoxExpression, setSmallBoxExpression] = useState("")
  const [quizAnswers, setQuizAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
  })
  const [showHint, setShowHint] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [draggedOperation, setDraggedOperation] = useState<string | null>(null)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  const totalPages = 9

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
      setShowHint(false)
      setShowFeedback(false)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
      setShowHint(false)
      setShowFeedback(false)
    }
  }

  const checkAnswer = (page: number) => {
    setShowFeedback(true)

    if (page === 4) {
      const isEdmondCorrect = edmondVariable.trim().toLowerCase() === "e"
      const isRaymondCorrect =
        raymondExpression.trim().toLowerCase() === "e-14" || raymondExpression.trim().toLowerCase() === "e - 14"

      setIsCorrect(isEdmondCorrect && isRaymondCorrect)

      if (isEdmondCorrect && isRaymondCorrect && !completedSteps.includes(4)) {
        setCompletedSteps([...completedSteps, 4])
      }
    } else if (page === 6) {
      const isSophiaCorrect =
        sophiaExpression.trim().toLowerCase() === "l-10" || sophiaExpression.trim().toLowerCase() === "l - 10"

      setIsCorrect(isSophiaCorrect)

      if (isSophiaCorrect && !completedSteps.includes(6)) {
        setCompletedSteps([...completedSteps, 6])
      }
    } else if (page === 7) {
      const isSmallBoxCorrect =
        smallBoxExpression.trim().toLowerCase() === "b-5" || smallBoxExpression.trim().toLowerCase() === "b - 5"

      setIsCorrect(isSmallBoxCorrect)

      if (isSmallBoxCorrect && !completedSteps.includes(7)) {
        setCompletedSteps([...completedSteps, 7])
      }
    }
  }

  const toggleHint = () => {
    setShowHint(!showHint)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 0:
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-emerald-700">🌻 Whose Garden is Bigger?</h1>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="relative w-full max-w-md aspect-video bg-emerald-100 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/side-by-side-gardens.png"
                    alt="Raymond and Edmond standing next to their gardens"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
                <p className="text-lg">
                  Raymond and Edmond are both proud of their gardens. But Raymond's garden is a bit smaller — exactly{" "}
                  <strong className="text-red-600">14 square feet smaller</strong> than Edmond's garden.
                </p>
                <div className="mt-4 p-4 bg-amber-50 rounded-md border border-amber-200">
                  <p className="text-amber-800 font-medium">
                    We'll learn how to write an algebraic expression to represent this situation.
                  </p>
                </div>
              </div>
            </div>
            <Button
              onClick={() => {
                nextPage()
                if (!completedSteps.includes(0)) {
                  setCompletedSteps([...completedSteps, 0])
                }
              }}
              className="mt-4 bg-emerald-600 hover:bg-emerald-700"
            >
              Let's Explore <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )

      case 1:
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-emerald-700">🧩 What Are We Told?</h1>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-white shadow-md">
                <h2 className="text-xl font-semibold mb-4">Known Information:</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-emerald-100 p-2 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-emerald-600" />
                    </div>
                    <p>
                      Edmond's garden: unknown size (we'll call it <strong>e</strong>)
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-emerald-100 p-2 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-emerald-600" />
                    </div>
                    <p>
                      Raymond's garden: <strong>14 square feet less</strong> than Edmond's
                    </p>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-white shadow-md">
                <h2 className="text-xl font-semibold mb-4">Need to Find:</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                      <HelpCircle className="h-4 w-4 text-blue-600" />
                    </div>
                    <p>An algebraic expression for Raymond's garden area</p>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-amber-50 rounded-md border border-amber-200">
                  <p className="text-amber-800">
                    When we write an algebraic expression, we use a variable to represent an unknown value.
                  </p>
                </div>
              </Card>
            </div>
            <div className="flex justify-between mt-4">
              <Button onClick={prevPage} variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button
                onClick={() => {
                  nextPage()
                  if (!completedSteps.includes(1)) {
                    setCompletedSteps([...completedSteps, 1])
                  }
                }}
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-emerald-700">👀 What Does '14 Less' Look Like?</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="space-y-4 flex-1">
                  <div className="relative">
                    <div className="bg-emerald-200 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Edmond's Garden</h3>
                      <div className="w-full h-32 bg-emerald-500 rounded-md flex items-center justify-center">
                        <span className="text-white font-bold text-xl">e</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="bg-amber-100 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Raymond's Garden</h3>
                      <div className="w-full h-32 relative">
                        <div className="absolute inset-0 flex">
                          <div className="flex-1 bg-emerald-500 rounded-l-md flex items-center justify-center">
                            <span className="text-white font-bold text-xl">e</span>
                          </div>
                          <div className="w-16 bg-red-400 rounded-r-md flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <X className="h-8 w-8 text-white" />
                            </div>
                            <span className="text-white font-bold text-sm">14 sq ft</span>
                          </div>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-gray-600">Raymond's garden = Edmond's garden - 14 sq ft</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg max-w-md flex-1">
                  <h3 className="font-semibold text-blue-800 mb-3">Guiding Idea:</h3>
                  <p className="text-lg mb-4">
                    <strong>"Less than"</strong> means <strong>subtract</strong>, not add.
                  </p>
                  <p>
                    When we say Raymond's garden is 14 square feet <strong>less than</strong> Edmond's garden, we're
                    saying:
                  </p>
                  <div className="mt-3 p-3 bg-white rounded-md border border-blue-200">
                    <p className="font-medium text-center">Raymond's garden = Edmond's garden - 14</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <Button onClick={prevPage} variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button
                onClick={() => {
                  nextPage()
                  if (!completedSteps.includes(2)) {
                    setCompletedSteps([...completedSteps, 2])
                  }
                }}
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-emerald-700">🧮 How Do We Write It?</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Step-by-step guidance:</h2>

              <div className="space-y-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium mb-2">Step 1: Represent Edmond's garden with a variable</h3>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <span className="font-bold">1</span>
                    </div>
                    <p>
                      Let's use <strong>e</strong> to represent Edmond's garden area.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium mb-2">Step 2: Write Raymond's garden in terms of Edmond's</h3>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <span className="font-bold">2</span>
                    </div>
                    <p>
                      Since Raymond's area is 14 less, we write: <strong>e - 14</strong>
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <h3 className="font-medium text-amber-800 mb-2">Mini-tip:</h3>
                  <p>Subtraction means "take away," not "add on."</p>
                  <p className="mt-2">When you see "less than," think about removing that amount.</p>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium mb-3">Try it yourself:</h3>
                  <p className="mb-3">Drag the correct operation to complete the expression:</p>

                  <div className="flex items-center gap-4 mb-4">
                    <p>Raymond's garden = e</p>
                    <div
                      className={cn(
                        "w-10 h-10 border-2 border-dashed border-gray-300 rounded flex items-center justify-center",
                        draggedOperation && "bg-gray-100",
                      )}
                    >
                      {draggedOperation && <span className="text-xl font-bold">{draggedOperation}</span>}
                    </div>
                    <p>14</p>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      className="h-10 w-10 p-0 font-bold text-xl"
                      onClick={() => setDraggedOperation("+")}
                    >
                      +
                    </Button>
                    <Button
                      variant="outline"
                      className="h-10 w-10 p-0 font-bold text-xl"
                      onClick={() => setDraggedOperation("-")}
                    >
                      -
                    </Button>
                    <Button
                      variant="outline"
                      className="h-10 w-10 p-0 font-bold text-xl"
                      onClick={() => setDraggedOperation("×")}
                    >
                      ×
                    </Button>
                    <Button
                      variant="outline"
                      className="h-10 w-10 p-0 font-bold text-xl"
                      onClick={() => setDraggedOperation("÷")}
                    >
                      ÷
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <Button onClick={prevPage} variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button
                onClick={() => {
                  nextPage()
                  if (draggedOperation === "-" && !completedSteps.includes(3)) {
                    setCompletedSteps([...completedSteps, 3])
                  }
                }}
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-emerald-700">✍️ Write It Yourself!</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="space-y-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h2 className="text-xl font-semibold mb-4">Now it's your turn to write the expression:</h2>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="edmondVariable" className="text-base">
                        Variable for Edmond's garden area:
                      </Label>
                      <Input
                        id="edmondVariable"
                        value={edmondVariable}
                        onChange={(e) => setEdmondVariable(e.target.value)}
                        className="mt-1"
                        placeholder="Enter a variable"
                      />
                    </div>

                    <div>
                      <Label htmlFor="raymondExpression" className="text-base">
                        Expression for Raymond's garden area:
                      </Label>
                      <Input
                        id="raymondExpression"
                        value={raymondExpression}
                        onChange={(e) => setRaymondExpression(e.target.value)}
                        className="mt-1"
                        placeholder="Enter an expression"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    onClick={toggleHint}
                    variant="outline"
                    className="text-amber-600 border-amber-300 hover:bg-amber-50"
                  >
                    <HelpCircle className="mr-2 h-4 w-4" />
                    Need a hint?
                  </Button>

                  <Button onClick={() => checkAnswer(4)} className="bg-emerald-600 hover:bg-emerald-700">
                    Check My Answer
                  </Button>
                </div>

                {showHint && (
                  <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <h3 className="font-medium text-amber-800 mb-2">Hint:</h3>
                    <p>
                      Remember, we typically use a single letter for a variable. For Edmond's garden, we've been using
                      "e".
                    </p>
                    <p className="mt-2">
                      For Raymond's garden, think about what "14 less than Edmond's garden" means mathematically.
                    </p>
                  </div>
                )}

                {showFeedback && (
                  <div
                    className={cn(
                      "p-4 rounded-lg border",
                      isCorrect
                        ? "bg-green-50 border-green-200 text-green-800"
                        : "bg-red-50 border-red-200 text-red-800",
                    )}
                  >
                    <h3 className="font-medium mb-2">{isCorrect ? "Correct! 🎉" : "Not quite right. Try again!"}</h3>
                    {!isCorrect && (
                      <p>Check that you're using "e" for Edmond's garden and "e-14" for Raymond's garden.</p>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <Button onClick={prevPage} variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button
                onClick={nextPage}
                className="bg-emerald-600 hover:bg-emerald-700"
                disabled={!isCorrect && showFeedback}
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-emerald-700">🎯 Let's See the Solution!</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Full explanation:</h2>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                    <h3 className="font-medium text-emerald-800 mb-3">Edmond's garden:</h3>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-emerald-200 rounded-md flex items-center justify-center mr-4">
                        <span className="font-bold text-2xl">e</span>
                      </div>
                      <p>
                        We use the variable <strong>e</strong> to represent Edmond's garden area.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <h3 className="font-medium text-amber-800 mb-3">Raymond's garden:</h3>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-amber-200 rounded-md flex items-center justify-center mr-4">
                        <span className="font-bold text-2xl">e-14</span>
                      </div>
                      <p>
                        Raymond's garden is <strong>e-14</strong> square feet.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-medium text-blue-800 mb-3">Why Subtract?</h3>
                  <p className="mb-3">Because "14 less than" means subtract 14 from Edmond's size.</p>
                  <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="flex-1">
                      <div className="w-full h-16 bg-emerald-400 rounded-md flex items-center justify-center">
                        <span className="text-white font-bold">Edmond's garden (e)</span>
                      </div>
                    </div>
                    <div className="text-2xl font-bold">-</div>
                    <div className="w-20 h-16 bg-red-400 rounded-md flex items-center justify-center">
                      <span className="text-white font-bold">14</span>
                    </div>
                    <div className="text-2xl font-bold">=</div>
                    <div className="flex-1">
                      <div className="w-full h-16 bg-amber-400 rounded-md flex items-center justify-center">
                        <span className="text-white font-bold">Raymond's garden (e-14)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="font-medium text-green-800 mb-2">Conclusion:</h3>
                  <p className="text-lg">
                    "Raymond's garden area is represented by <strong>e-14</strong>."
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <Button onClick={prevPage} variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button
                onClick={() => {
                  nextPage()
                  if (!completedSteps.includes(5)) {
                    setCompletedSteps([...completedSteps, 5])
                  }
                }}
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-emerald-700">🔄 Another Garden Comparison!</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="space-y-6">
                <div className="p-5 bg-purple-50 rounded-lg border border-purple-200">
                  <h2 className="text-xl font-semibold text-purple-800 mb-3">New scenario:</h2>
                  <p className="text-lg mb-4">
                    "Sophia's garden is 10 square feet less than Lucas's garden. Write an expression for the area of
                    Sophia's garden if Lucas's garden area is <strong>l</strong>."
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                      <h3 className="font-medium mb-2">Lucas's garden:</h3>
                      <div className="w-full h-24 bg-purple-400 rounded-md flex items-center justify-center">
                        <span className="text-white font-bold text-2xl">l</span>
                      </div>
                    </div>

                    <div className="p-4 bg-white rounded-lg shadow-sm">
                      <h3 className="font-medium mb-2">Sophia's garden:</h3>
                      <div className="w-full h-24 bg-purple-200 rounded-md flex items-center justify-center border-2 border-dashed border-purple-400">
                        <span className="text-purple-800 font-bold text-xl">?</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="sophiaExpression" className="text-base font-medium">
                    Write an expression for Sophia's garden area:
                  </Label>
                  <Input
                    id="sophiaExpression"
                    value={sophiaExpression}
                    onChange={(e) => setSophiaExpression(e.target.value)}
                    className="mt-1"
                    placeholder="Enter an expression"
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    onClick={toggleHint}
                    variant="outline"
                    className="text-amber-600 border-amber-300 hover:bg-amber-50"
                  >
                    <HelpCircle className="mr-2 h-4 w-4" />
                    Need a hint?
                  </Button>

                  <Button onClick={() => checkAnswer(6)} className="bg-emerald-600 hover:bg-emerald-700">
                    Check My Answer
                  </Button>
                </div>

                {showHint && (
                  <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <h3 className="font-medium text-amber-800 mb-2">Hint:</h3>
                    <p>
                      This problem is similar to the previous one. If Sophia's garden is 10 square feet less than
                      Lucas's garden, what operation should you use?
                    </p>
                  </div>
                )}

                {showFeedback && (
                  <div
                    className={cn(
                      "p-4 rounded-lg border",
                      isCorrect
                        ? "bg-green-50 border-green-200 text-green-800"
                        : "bg-red-50 border-red-200 text-red-800",
                    )}
                  >
                    <h3 className="font-medium mb-2">{isCorrect ? "Correct! 🎉" : "Not quite right. Try again!"}</h3>
                    {isCorrect ? (
                      <p>
                        Great job! Since Sophia's garden is 10 square feet less than Lucas's garden, the expression is
                        l-10.
                      </p>
                    ) : (
                      <p>
                        Remember, "less than" means we need to subtract. If Lucas's garden is represented by l, and
                        Sophia's garden is 10 square feet less, then we write l-10.
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <Button onClick={prevPage} variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button
                onClick={nextPage}
                className="bg-emerald-600 hover:bg-emerald-700"
                disabled={!isCorrect && showFeedback}
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )

      case 7:
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-emerald-700">🚀 New Story, Same Thinking!</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="space-y-6">
                <div className="p-5 bg-blue-50 rounded-lg border border-blue-200">
                  <h2 className="text-xl font-semibold text-blue-800 mb-3">Completely new scenario:</h2>
                  <p className="text-lg mb-4">
                    "A large box weighs 5 pounds more than a small box. Write an expression for the weight of the small
                    box if the large box weighs <strong>b</strong> pounds."
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                      <h3 className="font-medium mb-2">Large box:</h3>
                      <div className="w-full h-24 bg-blue-400 rounded-md flex items-center justify-center">
                        <span className="text-white font-bold text-2xl">b pounds</span>
                      </div>
                      <p className="mt-2 text-center text-sm">5 pounds more than small box</p>
                    </div>

                    <div className="p-4 bg-white rounded-lg shadow-sm">
                      <h3 className="font-medium mb-2">Small box:</h3>
                      <div className="w-full h-24 bg-blue-200 rounded-md flex items-center justify-center border-2 border-dashed border-blue-400">
                        <span className="text-blue-800 font-bold text-xl">?</span>
                      </div>
                      <p className="mt-2 text-center text-sm">5 pounds less than large box</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <h3 className="font-medium text-amber-800 mb-2">Key Shift:</h3>
                  <p>Now the comparison is flipped: the larger amount is known, and we're asking for the smaller.</p>
                  <p className="mt-2">
                    <strong>Guiding Question:</strong> "If the large box is 5 pounds more, how do you express the small
                    box's weight?"
                  </p>
                </div>

                <div>
                  <Label htmlFor="smallBoxExpression" className="text-base font-medium">
                    Write an expression for the small box's weight:
                  </Label>
                  <Input
                    id="smallBoxExpression"
                    value={smallBoxExpression}
                    onChange={(e) => setSmallBoxExpression(e.target.value)}
                    className="mt-1"
                    placeholder="Enter an expression"
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    onClick={toggleHint}
                    variant="outline"
                    className="text-amber-600 border-amber-300 hover:bg-amber-50"
                  >
                    <HelpCircle className="mr-2 h-4 w-4" />
                    Need a hint?
                  </Button>

                  <Button onClick={() => checkAnswer(7)} className="bg-emerald-600 hover:bg-emerald-700">
                    Check My Answer
                  </Button>
                </div>

                {showHint && (
                  <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <h3 className="font-medium text-amber-800 mb-2">Hint:</h3>
                    <p>
                      If the large box weighs b pounds and is 5 pounds more than the small box, then the small box must
                      weigh 5 pounds less than b.
                    </p>
                  </div>
                )}

                {showFeedback && (
                  <div
                    className={cn(
                      "p-4 rounded-lg border",
                      isCorrect
                        ? "bg-green-50 border-green-200 text-green-800"
                        : "bg-red-50 border-red-200 text-red-800",
                    )}
                  >
                    <h3 className="font-medium mb-2">{isCorrect ? "Correct! 🎉" : "Not quite right. Try again!"}</h3>
                    {isCorrect ? (
                      <p>
                        Excellent! Since the large box weighs b pounds and is 5 pounds more than the small box, the
                        small box weighs b-5 pounds.
                      </p>
                    ) : (
                      <p>
                        Think about it this way: If the large box weighs b pounds and is 5 pounds more than the small
                        box, then the small box must weigh 5 pounds less than b.
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <Button onClick={prevPage} variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button
                onClick={nextPage}
                className="bg-emerald-600 hover:bg-emerald-700"
                disabled={!isCorrect && showFeedback}
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )

      case 8:
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-emerald-700">📚 Great Work! Let's Review</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Key Reflections:</h2>

              <div className="space-y-6">
                <div className="p-4 bg-emerald-50 rounded-lg">
                  <h3 className="font-medium text-emerald-800 mb-2">Understanding "less than" in expressions</h3>
                  <p>When we say "A is X less than B," we write the expression as B-X.</p>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium text-blue-800 mb-2">Using variables correctly</h3>
                  <p>We use variables (like e, l, or b) to represent unknown quantities in our expressions.</p>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-medium text-purple-800 mb-2">How to model real-world comparison situations</h3>
                  <p>
                    We can use algebraic expressions to represent relationships between quantities in real-world
                    situations.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Mini-Quiz:</h3>

                  <div className="space-y-6">
                    <div>
                      <p className="mb-2 font-medium">
                        1. If Jamal's height is 6 inches less than Priya's height, and Priya's height is h inches, what
                        expression represents Jamal's height?
                      </p>
                      <RadioGroup
                        value={quizAnswers.q1}
                        onValueChange={(value) => setQuizAnswers({ ...quizAnswers, q1: value })}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="h+6" id="q1-a" />
                          <Label htmlFor="q1-a">h+6</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="h-6" id="q1-b" />
                          <Label htmlFor="q1-b">h-6</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="6-h" id="q1-c" />
                          <Label htmlFor="q1-c">6-h</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <p className="mb-2 font-medium">
                        2. A small car uses 3 gallons less fuel than a large truck for the same trip. If the truck uses
                        t gallons, which expression represents the amount of fuel the car uses?
                      </p>
                      <RadioGroup
                        value={quizAnswers.q2}
                        onValueChange={(value) => setQuizAnswers({ ...quizAnswers, q2: value })}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="t+3" id="q2-a" />
                          <Label htmlFor="q2-a">t+3</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="3-t" id="q2-b" />
                          <Label htmlFor="q2-b">3-t</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="t-3" id="q2-c" />
                          <Label htmlFor="q2-c">t-3</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label htmlFor="q3" className="font-medium">
                        3. Explain why "14 less than" leads to subtraction, not addition:
                      </Label>
                      <Textarea
                        id="q3"
                        value={quizAnswers.q3}
                        onChange={(e) => setQuizAnswers({ ...quizAnswers, q3: e.target.value })}
                        className="mt-1"
                        placeholder="Type your explanation here"
                      />
                    </div>
                  </div>
                </div>

                {quizAnswers.q1 === "h-6" && quizAnswers.q2 === "t-3" && quizAnswers.q3.length > 10 && (
                  <div className="p-6 bg-green-50 rounded-lg border border-green-200 mt-6">
                    <h3 className="text-xl font-bold text-green-800 mb-3">Congratulations! 🎉</h3>
                    <p className="text-lg">
                      You've successfully completed this lesson on writing algebraic expressions for "less than"
                      comparisons!
                    </p>
                    <div className="mt-4 p-3 bg-white rounded-md border border-green-200 inline-block">
                      <p className="font-medium text-green-700">Expression Builder Star! ⭐</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <Button onClick={prevPage} variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button
                onClick={() => {
                  if (!completedSteps.includes(8)) {
                    setCompletedSteps([...completedSteps, 8])
                  }
                }}
                className="bg-emerald-600 hover:bg-emerald-700"
                disabled
              >
                Complete Lesson
              </Button>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  const progress = Math.round((completedSteps.length / totalPages) * 100)

  return (
    <div className="min-h-screen bg-emerald-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-medium">Progress</h2>
            <span className="text-sm font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">{renderPage()}</div>
      </div>
    </div>
  )
}
