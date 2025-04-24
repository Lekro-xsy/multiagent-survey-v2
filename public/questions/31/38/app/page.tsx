"use client"

import type React from "react"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Car, Award, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"

export default function MathLesson() {
  const [currentPage, setCurrentPage] = useState(1)
  const [carPosition, setCarPosition] = useState(70)
  const [draggedFacts, setDraggedFacts] = useState<{ [key: string]: string }>({})
  const [studentAnswer, setStudentAnswer] = useState("")
  const [studentExplanation, setStudentExplanation] = useState("")
  const [nearTransferAnswer, setNearTransferAnswer] = useState("")
  const [farTransferAnswer, setFarTransferAnswer] = useState("")
  const [farTransferExplanation, setFarTransferExplanation] = useState("")
  const [quizAnswer, setQuizAnswer] = useState("")
  const [trueFalseAnswer, setTrueFalseAnswer] = useState("")
  const [ownScenario, setOwnScenario] = useState("")
  const [showHint, setShowHint] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [earnedBadge, setEarnedBadge] = useState(false)

  const totalPages = 9

  const handleNext = () => {
    if (currentPage === totalPages) return
    setCurrentPage(currentPage + 1)
    setShowHint(false)

    // Award badge on completion
    if (currentPage === 8) {
      setEarnedBadge(true)
    }
  }

  const handlePrevious = () => {
    if (currentPage === 1) return
    setCurrentPage(currentPage - 1)
    setShowHint(false)
  }

  const handleDragFact = (fact: string, category: string) => {
    setDraggedFacts({ ...draggedFacts, [fact]: category })
  }

  const handleCarSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCarPosition(Number.parseInt(e.target.value))
  }

  const checkAnswer = () => {
    if (studentAnswer === "60") {
      setShowSuccess(true)
      setTimeout(() => {
        setShowSuccess(false)
        handleNext()
      }, 1500)
    }
  }

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">🚗 Miles to Go!</h1>
            <div className="relative h-64 bg-gradient-to-b from-sky-100 to-sky-50 rounded-xl overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full h-12 bg-gray-700"></div>
              <div className="absolute bottom-12 left-0 w-full h-1 bg-yellow-400 border-dashed border-yellow-500"></div>
              <div className="absolute bottom-16 left-[70px] transform -translate-x-1/2">
                <Car className="h-12 w-12 text-red-500" />
              </div>
              <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-md">
                <div className="text-sm text-gray-500">Odometer</div>
                <div className="text-2xl font-mono font-bold">70 miles</div>
              </div>
              <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-md">
                <div className="text-sm text-gray-500">Destination</div>
                <div className="text-2xl font-mono font-bold">130 miles</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-lg">
                You are on a road trip!
                <br />
                Your goal: travel <span className="font-bold">130 miles</span> to reach your destination.
                <br />
                Your odometer shows you have already traveled <span className="font-bold">70 miles</span>.<br />
                How many more miles do you need to travel?
              </p>
            </div>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                setCarPosition((prev) => Math.min(prev + 10, 130))
              }}
            >
              Drive More Miles
            </Button>
          </div>
        )
      case 2:
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">🧩 Let&apos;s Organize the Information</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-semibold mb-4">Key Facts:</h2>
                <div className="space-y-3">
                  {!draggedFacts["total"] && (
                    <div
                      className="p-3 bg-blue-100 rounded-lg cursor-move"
                      draggable
                      onDragEnd={() => handleDragFact("total", "given")}
                    >
                      📍 Total trip distance: 130 miles
                    </div>
                  )}
                  {!draggedFacts["traveled"] && (
                    <div
                      className="p-3 bg-green-100 rounded-lg cursor-move"
                      draggable
                      onDragEnd={() => handleDragFact("traveled", "given")}
                    >
                      🚙 Distance traveled: 70 miles
                    </div>
                  )}
                  {!draggedFacts["unknown"] && (
                    <div
                      className="p-3 bg-purple-100 rounded-lg cursor-move"
                      draggable
                      onDragEnd={() => handleDragFact("unknown", "need")}
                    >
                      ❓ Unknown: miles left to travel
                    </div>
                  )}
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h2 className="text-xl font-semibold mb-4">Given:</h2>
                  <div className="min-h-[100px] border-2 border-dashed border-gray-300 rounded-lg p-3">
                    {draggedFacts["total"] === "given" && (
                      <div className="p-3 bg-blue-100 rounded-lg mb-2">📍 Total trip distance: 130 miles</div>
                    )}
                    {draggedFacts["traveled"] === "given" && (
                      <div className="p-3 bg-green-100 rounded-lg">🚙 Distance traveled: 70 miles</div>
                    )}
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h2 className="text-xl font-semibold mb-4">Need to Find:</h2>
                  <div className="min-h-[100px] border-2 border-dashed border-gray-300 rounded-lg p-3">
                    {draggedFacts["unknown"] === "need" && (
                      <div className="p-3 bg-purple-100 rounded-lg">❓ Unknown: miles left to travel</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {showHint && (
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-yellow-800">
                  Hint: Drag each fact to either "Given" or "Need to Find" based on what information we already have and
                  what we need to calculate.
                </p>
              </div>
            )}
          </div>
        )
      case 3:
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">📊 How Far Have You Gone?</h1>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="relative h-20 mb-8">
                <div className="absolute top-0 left-0 w-full h-4 bg-gray-200 rounded-full">
                  <div
                    className="absolute top-0 left-0 h-4 bg-green-500 rounded-full"
                    style={{ width: `${(carPosition / 130) * 100}%` }}
                  ></div>
                </div>
                <div className="absolute top-6 left-0 flex items-center">
                  <div className="w-1 h-6 bg-gray-400"></div>
                  <div className="text-sm font-medium ml-1">0</div>
                </div>
                <div className="absolute top-6 left-[53.8%] flex items-center">
                  <div className="w-1 h-6 bg-gray-400"></div>
                  <div className="text-sm font-medium ml-1">70</div>
                </div>
                <div className="absolute top-6 right-0 flex items-center">
                  <div className="w-1 h-6 bg-gray-400"></div>
                  <div className="text-sm font-medium ml-1">130</div>
                </div>
                <div className="absolute top-[-8px]" style={{ left: `${(carPosition / 130) * 100}%` }}>
                  <Car className="h-6 w-6 text-red-500" />
                </div>
              </div>
              <input type="range" min="0" max="130" value={carPosition} onChange={handleCarSlider} className="w-full" />
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="text-lg font-semibold text-blue-800">Key Concept:</h3>
                <p className="text-blue-700 font-medium mt-2">
                  Remaining distance = Total distance - Distance traveled
                </p>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="p-3 bg-green-100 rounded-lg text-center">
                  <div className="text-sm text-green-700">Distance traveled</div>
                  <div className="text-xl font-bold">{carPosition} miles</div>
                </div>
                <div className="p-3 bg-amber-100 rounded-lg text-center">
                  <div className="text-sm text-amber-700">Distance remaining</div>
                  <div className="text-xl font-bold">{130 - carPosition} miles</div>
                </div>
              </div>
            </div>
          </div>
        )
      case 4:
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">🧮 Building the Math Model</h1>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold mb-4">Steps:</h2>
              <ol className="list-decimal list-inside space-y-4 ml-4">
                <li className="text-lg">Start with total distance.</li>
                <li className="text-lg">Subtract distance already traveled.</li>
              </ol>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <div className="flex flex-col items-center space-y-4">
                  <div className="text-lg font-medium">Miles Left</div>
                  <div className="text-lg">=</div>
                  <div className="text-2xl font-bold">130</div>
                  <div className="flex space-x-4 items-center">
                    <button
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold",
                        draggedFacts["operation"] === "subtract"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-700",
                      )}
                      onClick={() => handleDragFact("operation", "subtract")}
                    >
                      −
                    </button>
                    <button
                      className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-xl font-bold"
                      onClick={() => handleDragFact("operation", "add")}
                    >
                      +
                    </button>
                    <button
                      className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-xl font-bold"
                      onClick={() => handleDragFact("operation", "multiply")}
                    >
                      ×
                    </button>
                    <button
                      className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-xl font-bold"
                      onClick={() => handleDragFact("operation", "divide")}
                    >
                      ÷
                    </button>
                  </div>
                  <div className="text-2xl font-bold">70</div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <h3 className="text-lg font-semibold">Guiding Question:</h3>
                <p className="mt-2 text-lg">"What operation do we use when we know the total and part of the total?"</p>
              </div>
            </div>
            {showHint && (
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-yellow-800">
                  Hint: When we know the total (130 miles) and part of it (70 miles traveled), we use subtraction to
                  find what's left.
                </p>
              </div>
            )}
          </div>
        )
      case 5:
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">✍️ Your Turn to Solve!</h1>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="expression" className="text-lg font-medium">
                    Write the subtraction expression:
                  </Label>
                  <Input id="expression" placeholder="130 - 70" className="mt-2 text-lg" />
                </div>

                <div>
                  <Label htmlFor="calculation" className="text-lg font-medium">
                    Calculate the remaining miles:
                  </Label>
                  <Input
                    id="calculation"
                    placeholder="Enter your answer"
                    className="mt-2 text-lg"
                    value={studentAnswer}
                    onChange={(e) => setStudentAnswer(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="explanation" className="text-lg font-medium">
                    Short explanation:
                  </Label>
                  <Input
                    id="explanation"
                    placeholder="I subtracted the miles already traveled from the total trip distance."
                    className="mt-2 text-lg"
                    value={studentExplanation}
                    onChange={(e) => setStudentExplanation(e.target.value)}
                  />
                </div>

                <Button className="w-full" onClick={checkAnswer}>
                  Check My Answer
                </Button>

                {showSuccess && (
                  <div className="p-4 bg-green-100 rounded-lg flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                    <span className="text-green-800 font-medium">Great job! That's correct!</span>
                  </div>
                )}
              </div>
            </div>
            {showHint && (
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-yellow-800">
                  Hint: To find the remaining miles, subtract the miles already traveled (70) from the total trip
                  distance (130).
                </p>
              </div>
            )}
          </div>
        )
      case 6:
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">🎯 Check Your Solution!</h1>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold mb-4">Walkthrough:</h2>
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold">130</div>
                  <div className="text-2xl font-bold">− 70</div>
                  <div className="border-t-2 border-blue-300 w-16 mx-auto my-2"></div>
                  <div className="text-2xl font-bold text-green-600">= 60</div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold">Final Answer:</h3>
                <p className="mt-2 text-xl">
                  "You have <span className="font-bold text-green-600">60 miles</span> left to travel."
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Visual Recap:</h3>
                <div className="relative h-20">
                  <div className="absolute top-0 left-0 w-full h-4 bg-gray-200 rounded-full">
                    <div
                      className="absolute top-0 left-0 h-4 bg-green-500 rounded-full"
                      style={{ width: "53.8%" }}
                    ></div>
                  </div>
                  <div className="absolute top-6 left-0 flex items-center">
                    <div className="w-1 h-6 bg-gray-400"></div>
                    <div className="text-sm font-medium ml-1">0</div>
                  </div>
                  <div className="absolute top-6 left-[53.8%] flex items-center">
                    <div className="w-1 h-6 bg-gray-400"></div>
                    <div className="text-sm font-medium ml-1">70</div>
                  </div>
                  <div className="absolute top-6 right-0 flex items-center">
                    <div className="w-1 h-6 bg-gray-400"></div>
                    <div className="text-sm font-medium ml-1">130</div>
                  </div>
                  <div className="absolute top-[-8px] left-[53.8%]">
                    <Car className="h-6 w-6 text-red-500" />
                  </div>
                  <div className="absolute top-[-24px] right-[23%]">
                    <div className="bg-amber-100 px-2 py-1 rounded text-sm font-medium">60 miles left</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      case 7:
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">🔄 Another Road Trip!</h1>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="p-4 bg-blue-50 rounded-lg mb-6">
                <h2 className="text-xl font-semibold mb-2">Scenario:</h2>
                <p className="text-lg">
                  "You are planning a trip of <span className="font-bold">220 miles</span>.<br />
                  You have already traveled <span className="font-bold">85 miles</span>.<br />
                  How many miles do you have left?"
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="expression" className="text-lg font-medium">
                    Set up the subtraction equation:
                  </Label>
                  <Input id="expression" placeholder="220 - 85" className="mt-2 text-lg" />
                </div>

                <div>
                  <Label htmlFor="near-transfer-answer" className="text-lg font-medium">
                    Calculate the remaining miles:
                  </Label>
                  <Input
                    id="near-transfer-answer"
                    placeholder="Enter your answer"
                    className="mt-2 text-lg"
                    value={nearTransferAnswer}
                    onChange={(e) => setNearTransferAnswer(e.target.value)}
                  />
                </div>

                <Button
                  className="w-full"
                  onClick={() => {
                    if (nearTransferAnswer === "135") {
                      setShowSuccess(true)
                      setTimeout(() => {
                        setShowSuccess(false)
                        handleNext()
                      }, 1500)
                    }
                  }}
                >
                  Check My Answer
                </Button>

                {showSuccess && (
                  <div className="p-4 bg-green-100 rounded-lg flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                    <span className="text-green-800 font-medium">
                      Great job! That's correct! You have 135 miles left to travel.
                    </span>
                  </div>
                )}
              </div>
            </div>
            {showHint && (
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-yellow-800">
                  Hint: Use the same approach as before. Subtract the miles already traveled (85) from the total trip
                  distance (220).
                </p>
              </div>
            )}
          </div>
        )
      case 8:
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">🚀 Different Journey, Same Math!</h1>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="p-4 bg-purple-50 rounded-lg mb-6">
                <h2 className="text-xl font-semibold mb-2">Scenario:</h2>
                <p className="text-lg">
                  "A baker needs to bake <span className="font-bold">150 cupcakes</span> for a party.
                  <br />
                  So far, they have baked <span className="font-bold">65 cupcakes</span>.<br />
                  How many more cupcakes do they still need to bake?"
                </p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-2">Goal:</h3>
                <p>
                  Recognize the same mathematical structure:
                  <br />
                  <span className="font-medium">Total goal - progress made = amount left.</span>
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="far-transfer-expression" className="text-lg font-medium">
                    Write the subtraction equation:
                  </Label>
                  <Input id="far-transfer-expression" placeholder="150 - 65" className="mt-2 text-lg" />
                </div>

                <div>
                  <Label htmlFor="far-transfer-answer" className="text-lg font-medium">
                    Calculate the remaining cupcakes:
                  </Label>
                  <Input
                    id="far-transfer-answer"
                    placeholder="Enter your answer"
                    className="mt-2 text-lg"
                    value={farTransferAnswer}
                    onChange={(e) => setFarTransferAnswer(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="far-transfer-explanation" className="text-lg font-medium">
                    Explain your solution:
                  </Label>
                  <Input
                    id="far-transfer-explanation"
                    placeholder="I subtracted the cupcakes already baked from the total needed."
                    className="mt-2 text-lg"
                    value={farTransferExplanation}
                    onChange={(e) => setFarTransferExplanation(e.target.value)}
                  />
                </div>

                <Button
                  className="w-full"
                  onClick={() => {
                    if (farTransferAnswer === "85") {
                      setShowSuccess(true)
                      setTimeout(() => {
                        setShowSuccess(false)
                        handleNext()
                      }, 1500)
                    }
                  }}
                >
                  Check My Answer
                </Button>

                {showSuccess && (
                  <div className="p-4 bg-green-100 rounded-lg flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                    <span className="text-green-800 font-medium">
                      Excellent! That's correct! The baker needs to bake 85 more cupcakes.
                    </span>
                  </div>
                )}
              </div>
            </div>
            {showHint && (
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-yellow-800">
                  Hint: Even though this is about cupcakes instead of miles, the math structure is the same. Subtract
                  what's been completed (65 cupcakes) from the total goal (150 cupcakes).
                </p>
              </div>
            )}
          </div>
        )
      case 9:
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">📚 Review and Reflect</h1>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold mb-4">Key Learning Points:</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li className="text-lg">Use subtraction when you know total and part and need to find what's left.</li>
                <li className="text-lg">Build and solve simple real-world equations.</li>
                <li className="text-lg">Apply same reasoning across different contexts.</li>
              </ul>

              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Mini-Quiz:</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">
                      1. Which equation finds miles left if you traveled 80 miles of a 200-mile trip?
                    </h3>
                    <RadioGroup value={quizAnswer} onValueChange={setQuizAnswer}>
                      <div className="flex items-center space-x-2 mt-2">
                        <RadioGroupItem value="a" id="a" />
                        <Label htmlFor="a">80 + 200</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="b" id="b" />
                        <Label htmlFor="b">200 - 80</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="c" id="c" />
                        <Label htmlFor="c">80 - 200</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="d" id="d" />
                        <Label htmlFor="d">200 ÷ 80</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">
                      2. True or False: You should always add distances traveled to find miles remaining.
                    </h3>
                    <RadioGroup value={trueFalseAnswer} onValueChange={setTrueFalseAnswer}>
                      <div className="flex items-center space-x-2 mt-2">
                        <RadioGroupItem value="true" id="true" />
                        <Label htmlFor="true">True</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="false" id="false" />
                        <Label htmlFor="false">False</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">
                      3. Write your own "goal and progress" scenario needing subtraction.
                    </h3>
                    <Input
                      placeholder="Example: A runner wants to run 10 miles. They've run 4 miles so far. How many more miles do they need to run?"
                      className="mt-2"
                      value={ownScenario}
                      onChange={(e) => setOwnScenario(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {earnedBadge && (
                <div className="mt-8 p-4 bg-yellow-50 rounded-lg flex flex-col items-center">
                  <Award className="h-16 w-16 text-yellow-500 mb-2" />
                  <h3 className="text-xl font-bold text-yellow-800">Congratulations!</h3>
                  <p className="text-yellow-700 text-center">You've earned the "Road Trip Math Pro" badge! 🏆</p>
                </div>
              )}
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Progress value={(currentPage / totalPages) * 100} className="h-2" />
          <div className="flex justify-between mt-2 text-sm text-gray-500">
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <span>{Math.round((currentPage / totalPages) * 100)}% Complete</span>
          </div>
        </div>

        {renderPage()}

        <div className="mt-8 flex justify-between">
          <Button variant="outline" onClick={handlePrevious} disabled={currentPage === 1} className="flex items-center">
            <ChevronLeft className="mr-2 h-4 w-4" /> Previous
          </Button>

          <Button variant="outline" onClick={() => setShowHint(true)} className="flex items-center">
            Show Hint
          </Button>

          <Button onClick={handleNext} disabled={currentPage === totalPages} className="flex items-center">
            Next <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
