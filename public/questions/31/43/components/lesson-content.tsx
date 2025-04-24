"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle, Clock, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Timeline } from "@/components/timeline"
import { TruckAnimation } from "@/components/truck-animation"

interface LessonContentProps {
  step: number
  onComplete: () => void
}

export function LessonContent({ step, onComplete }: LessonContentProps) {
  const [answer, setAnswer] = useState("")
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [draggedItems, setDraggedItems] = useState<{ [key: string]: string }>({})
  const [showHint, setShowHint] = useState(false)
  const [timelineActive, setTimelineActive] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState<{ [key: string]: string }>({})

  const checkAnswer = () => {
    if (step === 5) {
      if (answer === "300") {
        setIsCorrect(true)
        onComplete()
      } else {
        setIsCorrect(false)
      }
    }
  }

  const handleDragStart = (e: React.DragEvent, id: string) => {
    e.dataTransfer.setData("id", id)
  }

  const handleDrop = (e: React.DragEvent, category: string) => {
    const id = e.dataTransfer.getData("id")
    const newDraggedItems = { ...draggedItems, [id]: category }
    setDraggedItems(newDraggedItems)

    // Check if all items are correctly categorized
    if (Object.keys(newDraggedItems).length === 5) {
      const correctCategories = {
        "depart-time": "affect-driving-time",
        "return-time": "affect-driving-time",
        "lunch-break": "affect-driving-time",
        "delivery-work": "affect-driving-time",
        "driving-speed": "other-information",
      }

      const allCorrect = Object.entries(correctCategories).every(
        ([itemId, correctCategory]) => newDraggedItems[itemId] === correctCategory,
      )

      if (allCorrect) {
        onComplete()
      }
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleQuizAnswer = (question: string, value: string) => {
    const newAnswers = { ...quizAnswers, [question]: value }
    setQuizAnswers(newAnswers)

    // Check if all answers are correct
    if (Object.keys(newAnswers).length === 2) {
      const correctAnswers = {
        steps: "b",
        drivingTime: "false",
      }

      const allCorrect = Object.entries(correctAnswers).every(
        ([question, correctAnswer]) => newAnswers[question] === correctAnswer,
      )

      if (allCorrect) {
        onComplete()
      }
    }
  }

  switch (step) {
    case 1:
      return (
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Truck className="h-6 w-6 text-amber-600" />
            <h1 className="text-3xl font-bold">Delivering Fresh Bread!</h1>
          </div>

          <Card>
            <div className="relative h-64 overflow-hidden rounded-t-lg">
              <div className="absolute inset-0 bg-[url('/early-bird-bakery.png')] bg-cover bg-center"></div>
            </div>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-lg">
                  A bakery truck leaves the bakery at <strong>5:30 A.M.</strong>
                </p>
                <p className="text-lg">
                  The driver stops for lunch between <strong>11:30 A.M.</strong> and <strong>12:00 P.M.</strong>
                </p>
                <p className="text-lg">
                  Delivering goods into stores takes a total of{" "}
                  <strong>
                    1<sup>3</sup>/<sub>4</sub>
                  </strong>{" "}
                  hours.
                </p>
                <p className="text-lg">
                  Driving speed averages <strong>40 miles/hour</strong>.
                </p>
                <p className="text-lg">
                  The driver returns to the bakery at <strong>3:15 P.M.</strong>
                </p>
                <p className="mt-6 text-xl font-bold">How many miles did the truck travel?</p>
              </div>
            </CardContent>
            <CardFooter className="border-t bg-muted/20 px-6 py-4">
              <Button
                className="bg-amber-600 hover:bg-amber-700"
                onClick={() => {
                  setTimelineActive(true)
                  setTimeout(() => {
                    onComplete()
                  }, 2000)
                }}
              >
                Start the Route
              </Button>
            </CardFooter>
          </Card>

          {timelineActive && (
            <div className="mt-4 rounded-lg border bg-amber-50 p-4">
              <TruckAnimation />
            </div>
          )}
        </div>
      )

    case 2:
      return (
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold">🧩 What Information Do We Have?</h1>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="mb-6 space-y-4">
                <p className="text-lg">
                  Let's organize the information from the problem. Drag each fact to the appropriate category:
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div
                  className="rounded-lg border border-dashed border-amber-300 bg-amber-50 p-4"
                  onDrop={(e) => handleDrop(e, "affect-driving-time")}
                  onDragOver={handleDragOver}
                >
                  <h3 className="mb-4 text-center text-lg font-semibold">Facts That Affect Driving Time</h3>
                  <div className="min-h-[200px] space-y-2">
                    {Object.entries(draggedItems)
                      .filter(([_, category]) => category === "affect-driving-time")
                      .map(([id, _]) => (
                        <div key={id} className="rounded-md bg-white p-3 shadow-sm">
                          {id === "depart-time" && "Depart time: 5:30 A.M."}
                          {id === "return-time" && "Return time: 3:15 P.M."}
                          {id === "lunch-break" && "Lunch break: 30 minutes"}
                          {id === "delivery-work" && "Delivery work time: 1¾ hours"}
                          {id === "driving-speed" && "Driving speed: 40 miles/hour"}
                        </div>
                      ))}
                  </div>
                </div>

                <div
                  className="rounded-lg border border-dashed border-amber-300 bg-amber-50 p-4"
                  onDrop={(e) => handleDrop(e, "other-information")}
                  onDragOver={handleDragOver}
                >
                  <h3 className="mb-4 text-center text-lg font-semibold">Other Information</h3>
                  <div className="min-h-[200px] space-y-2">
                    {Object.entries(draggedItems)
                      .filter(([_, category]) => category === "other-information")
                      .map(([id, _]) => (
                        <div key={id} className="rounded-md bg-white p-3 shadow-sm">
                          {id === "depart-time" && "Depart time: 5:30 A.M."}
                          {id === "return-time" && "Return time: 3:15 P.M."}
                          {id === "lunch-break" && "Lunch break: 30 minutes"}
                          {id === "delivery-work" && "Delivery work time: 1¾ hours"}
                          {id === "driving-speed" && "Driving speed: 40 miles/hour"}
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="mb-4 text-lg font-semibold">Available Facts:</h3>
                <div className="flex flex-wrap gap-2">
                  {!draggedItems["depart-time"] && (
                    <div
                      className="cursor-move rounded-md bg-white p-3 shadow-sm"
                      draggable
                      onDragStart={(e) => handleDragStart(e, "depart-time")}
                    >
                      Depart time: 5:30 A.M.
                    </div>
                  )}
                  {!draggedItems["return-time"] && (
                    <div
                      className="cursor-move rounded-md bg-white p-3 shadow-sm"
                      draggable
                      onDragStart={(e) => handleDragStart(e, "return-time")}
                    >
                      Return time: 3:15 P.M.
                    </div>
                  )}
                  {!draggedItems["lunch-break"] && (
                    <div
                      className="cursor-move rounded-md bg-white p-3 shadow-sm"
                      draggable
                      onDragStart={(e) => handleDragStart(e, "lunch-break")}
                    >
                      Lunch break: 30 minutes
                    </div>
                  )}
                  {!draggedItems["delivery-work"] && (
                    <div
                      className="cursor-move rounded-md bg-white p-3 shadow-sm"
                      draggable
                      onDragStart={(e) => handleDragStart(e, "delivery-work")}
                    >
                      Delivery work time: 1¾ hours
                    </div>
                  )}
                  {!draggedItems["driving-speed"] && (
                    <div
                      className="cursor-move rounded-md bg-white p-3 shadow-sm"
                      draggable
                      onDragStart={(e) => handleDragStart(e, "driving-speed")}
                    >
                      Driving speed: 40 miles/hour
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t bg-muted/20 px-6 py-4">
              <Button variant="outline" onClick={() => setShowHint(!showHint)} className="mr-auto">
                {showHint ? "Hide Hint" : "Show Hint"}
              </Button>
            </CardFooter>
          </Card>

          {showHint && (
            <Card className="border-amber-200 bg-amber-50">
              <CardContent className="p-4">
                <p>
                  <strong>Hint:</strong> Think about which pieces of information will help you calculate how long the
                  truck was actually driving. Some information tells you about time spent not driving, while other
                  information helps you convert driving time to distance.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      )

    case 3:
      return (
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Clock className="h-6 w-6 text-amber-600" />
            <h1 className="text-3xl font-bold">Understanding the Day</h1>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="mb-6 space-y-4">
                <p className="text-lg">
                  Let's visualize the timeline of the bakery truck's day. This will help us understand how much time was
                  spent driving.
                </p>

                <div className="rounded-lg bg-amber-50 p-4">
                  <h3 className="mb-4 text-center text-lg font-semibold">Key Concept</h3>
                  <p className="text-center text-lg font-medium">
                    Total trip duration minus non-driving time = actual driving time
                  </p>
                </div>
              </div>

              <Timeline onComplete={onComplete} />
            </CardContent>
          </Card>
        </div>
      )

    case 4:
      return (
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold">🧮 Building the Model for Distance</h1>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="mb-6 space-y-4">
                <p className="text-lg">Let's set up our model step by step:</p>
              </div>

              <div className="space-y-8">
                <div className="rounded-lg border bg-white p-4 shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold">Step 1: Find total time on trip</h3>
                  <div className="space-y-2">
                    <p className="font-mono text-lg">3:15 P.M. − 5:30 A.M. = 9 hours 45 minutes = 9.75 hours</p>
                    <p className="text-sm text-muted-foreground">
                      We convert the total elapsed time to decimal hours for easier calculations.
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border bg-white p-4 shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold">Step 2: Subtract lunch break (0.5 hours)</h3>
                  <div className="space-y-2">
                    <p className="font-mono text-lg">9.75 − 0.5 = 9.25 hours</p>
                    <p className="text-sm text-muted-foreground">
                      The lunch break was 30 minutes, which is 0.5 hours. We subtract this from the total time.
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border bg-white p-4 shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold">Step 3: Subtract time spent delivering goods</h3>
                  <div className="space-y-2">
                    <p className="font-mono text-lg">9.25 − 1.75 = 7.5 hours of driving</p>
                    <p className="text-sm text-muted-foreground">
                      The delivery work took 1¾ hours, which is 1.75 hours. We subtract this from our remaining time.
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border bg-white p-4 shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold">Step 4: Use distance formula</h3>
                  <div className="space-y-2">
                    <p className="font-mono text-lg">Distance = 40 × 7.5</p>
                    <p className="text-sm text-muted-foreground">
                      We use the formula Distance = Speed × Time, where speed is 40 miles/hour and time is 7.5 hours.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-amber-50 p-4">
                <h3 className="mb-2 text-center text-lg font-semibold">Key Formula</h3>
                <p className="text-center text-xl font-medium">Distance = Speed × Time</p>
              </div>

              <Button className="mt-6 bg-amber-600 hover:bg-amber-700" onClick={onComplete}>
                I understand the model
              </Button>
            </CardContent>
          </Card>
        </div>
      )

    case 5:
      return (
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold">✍️ Now You Solve It!</h1>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="mb-6 space-y-4">
                <p className="text-lg">
                  Now it's your turn to solve the problem. Use the steps we've learned to find the total distance the
                  bakery truck traveled.
                </p>
              </div>

              <div className="space-y-6">
                <div className="rounded-lg border bg-white p-4 shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold">Step 1: Calculate the driving time</h3>
                  <div className="space-y-2">
                    <p>Total time: 9.75 hours</p>
                    <p>Lunch break: 0.5 hours</p>
                    <p>Delivery time: 1.75 hours</p>
                    <p className="font-medium">Driving time = 9.75 - 0.5 - 1.75 = 7.5 hours</p>
                  </div>
                </div>

                <div className="rounded-lg border bg-white p-4 shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold">Step 2: Calculate the distance</h3>
                  <div className="space-y-2">
                    <p>Speed: 40 miles/hour</p>
                    <p>Driving time: 7.5 hours</p>
                    <p className="font-medium">Distance = Speed × Time = 40 × 7.5 = ?</p>
                  </div>
                </div>

                <div className="rounded-lg border bg-white p-4 shadow-sm">
                  <Label htmlFor="answer" className="text-lg font-semibold">
                    Your Answer (in miles):
                  </Label>
                  <div className="mt-2 flex items-center gap-2">
                    <Input
                      id="answer"
                      type="number"
                      placeholder="Enter your answer"
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      className="max-w-[200px]"
                    />
                    <Button onClick={checkAnswer} className="bg-amber-600 hover:bg-amber-700">
                      Check Answer
                    </Button>
                  </div>
                  {isCorrect === true && (
                    <p className="mt-2 text-green-600">
                      <CheckCircle className="mr-1 inline-block h-4 w-4" />
                      Correct! The bakery truck traveled 300 miles.
                    </p>
                  )}
                  {isCorrect === false && (
                    <p className="mt-2 text-red-600">
                      Try again. Remember to multiply the speed (40 miles/hour) by the driving time (7.5 hours).
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )

    case 6:
      return (
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold">🎯 Let's See If You're Right!</h1>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="mb-6 space-y-4">
                <p className="text-lg">Here's the complete solution to our bakery truck problem:</p>
              </div>

              <div className="space-y-6">
                <div className="rounded-lg border bg-white p-4 shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold">Step 1: Calculate total time</h3>
                  <div className="space-y-2">
                    <p className="font-mono">3:15 P.M. - 5:30 A.M. = 9 hours 45 minutes = 9.75 hours</p>
                  </div>
                </div>

                <div className="rounded-lg border bg-white p-4 shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold">Step 2: Calculate non-driving time</h3>
                  <div className="space-y-2">
                    <p className="font-mono">Lunch break: 30 minutes = 0.5 hours</p>
                    <p className="font-mono">Delivery time: 1¾ hours = 1.75 hours</p>
                    <p className="font-mono">Total non-driving time: 0.5 + 1.75 = 2.25 hours</p>
                  </div>
                </div>

                <div className="rounded-lg border bg-white p-4 shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold">Step 3: Calculate driving time</h3>
                  <div className="space-y-2">
                    <p className="font-mono">Driving time = Total time - Non-driving time</p>
                    <p className="font-mono">Driving time = 9.75 - 2.25 = 7.5 hours</p>
                  </div>
                </div>

                <div className="rounded-lg border bg-white p-4 shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold">Step 4: Calculate distance</h3>
                  <div className="space-y-2">
                    <p className="font-mono">Distance = Speed × Time</p>
                    <p className="font-mono">Distance = 40 miles/hour × 7.5 hours</p>
                    <p className="font-mono">Distance = 300 miles</p>
                  </div>
                </div>

                <div className="rounded-lg bg-green-50 p-4 text-center">
                  <h3 className="text-xl font-bold text-green-700">Final Answer: 300 miles</h3>
                  <p className="mt-2">The bakery truck traveled a total of 300 miles on its delivery route.</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="mb-4 text-lg font-semibold">Visual Recap</h3>
                <div className="relative h-64 overflow-hidden rounded-lg border">
                  <div className="absolute inset-0 bg-[url('/bakery-route-map.png')] bg-cover bg-center"></div>
                  <TruckAnimation />
                </div>
              </div>

              <Button className="mt-6 bg-amber-600 hover:bg-amber-700" onClick={onComplete}>
                Continue to Practice Problems
              </Button>
            </CardContent>
          </Card>
        </div>
      )

    case 7:
      return (
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold">🔄 Another Delivery Day!</h1>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="mb-6 space-y-4">
                <p className="text-lg">
                  Let's try a similar problem to reinforce what we've learned. This time, we'll look at a florist
                  delivery van:
                </p>

                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-xl font-semibold">Florist Delivery Problem</h3>
                  <p className="mb-2">A florist delivery van leaves at 7:00 A.M. and returns at 1:00 P.M.</p>
                  <p className="mb-2">The driver spends 2 hours on deliveries and 45 minutes at lunch.</p>
                  <p className="mb-2">The driving speed averages 35 miles per hour.</p>
                  <p className="mt-4 text-lg font-medium">How many miles did the florist travel?</p>
                </div>
              </div>

              <Tabs defaultValue="timeline" className="mt-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="timeline">Timeline</TabsTrigger>
                  <TabsTrigger value="calculation">Calculation</TabsTrigger>
                  <TabsTrigger value="solution">Solution</TabsTrigger>
                </TabsList>
                <TabsContent value="timeline" className="rounded-lg border p-4">
                  <h3 className="mb-4 text-lg font-semibold">Step 1: Build the Timeline</h3>
                  <div className="space-y-4">
                    <p>Total time: 1:00 P.M. - 7:00 A.M. = 6 hours</p>
                    <p>Non-driving time: 2 hours (deliveries) + 0.75 hours (lunch) = 2.75 hours</p>
                    <p className="font-medium">Driving time: 6 - 2.75 = 3.25 hours</p>
                  </div>
                </TabsContent>
                <TabsContent value="calculation" className="rounded-lg border p-4">
                  <h3 className="mb-4 text-lg font-semibold">Step 2: Calculate the Distance</h3>
                  <div className="space-y-4">
                    <p>Speed: 35 miles/hour</p>
                    <p>Driving time: 3.25 hours</p>
                    <p className="font-medium">Distance = Speed × Time = 35 × 3.25 = 113.75 miles</p>
                  </div>
                </TabsContent>
                <TabsContent value="solution" className="rounded-lg border p-4">
                  <h3 className="mb-4 text-lg font-semibold">Solution</h3>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-green-50 p-4 text-center">
                      <h3 className="text-xl font-bold text-green-700">Final Answer: 113.75 miles</h3>
                      <p className="mt-2">The florist delivery van traveled a total of 113.75 miles.</p>
                    </div>
                    <p className="mt-4">
                      <strong>Explanation:</strong> We found the total time (6 hours), subtracted the non-driving time
                      (2.75 hours) to get the driving time (3.25 hours), and then multiplied by the speed (35
                      miles/hour) to get the distance.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>

              <Button className="mt-6 bg-amber-600 hover:bg-amber-700" onClick={onComplete}>
                I understand this example
              </Button>
            </CardContent>
          </Card>
        </div>
      )

    case 8:
      return (
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold">🚀 Same Math, New Situation!</h1>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="mb-6 space-y-4">
                <p className="text-lg">
                  Now let's apply what we've learned to a completely different scenario. This time, we'll look at a
                  moving truck:
                </p>

                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-xl font-semibold">Moving Truck Problem</h3>
                  <p className="mb-2">A moving truck leaves a storage facility at 8:00 A.M. and returns at 5:30 P.M.</p>
                  <p className="mb-2">It spends 3 hours loading and unloading furniture, plus a 1-hour lunch break.</p>
                  <p className="mb-2">The driving speed averages 50 miles per hour.</p>
                  <p className="mt-4 text-lg font-medium">How many miles did the truck travel?</p>
                </div>
              </div>

              <div className="mt-6 space-y-6">
                <div className="rounded-lg border bg-white p-4 shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold">Your Solution</h3>
                  <p className="mb-4">
                    Try to solve this problem on your own using the steps we've learned. Then check your answer below.
                  </p>
                  <Button variant="outline" onClick={() => setShowHint(!showHint)} className="mr-auto">
                    {showHint ? "Hide Hint" : "Show Hint"}
                  </Button>
                </div>

                {showHint && (
                  <div className="rounded-lg border-l-4 border-amber-400 bg-amber-50 p-4">
                    <h4 className="mb-2 font-semibold">Hint</h4>
                    <ol className="ml-4 list-decimal space-y-2">
                      <li>Calculate the total time: 5:30 P.M. - 8:00 A.M. = 9.5 hours</li>
                      <li>Calculate non-driving time: 3 hours (loading/unloading) + 1 hour (lunch) = 4 hours</li>
                      <li>Calculate driving time: 9.5 - 4 = 5.5 hours</li>
                      <li>Calculate distance: 50 miles/hour × 5.5 hours = ?</li>
                    </ol>
                  </div>
                )}

                <div className="rounded-lg border bg-white p-4 shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold">Solution</h3>
                  <div className="space-y-4">
                    <p>
                      <strong>Step 1:</strong> Calculate total time
                      <br />
                      5:30 P.M. - 8:00 A.M. = 9 hours 30 minutes = 9.5 hours
                    </p>
                    <p>
                      <strong>Step 2:</strong> Calculate non-driving time
                      <br />
                      Loading/unloading: 3 hours
                      <br />
                      Lunch break: 1 hour
                      <br />
                      Total non-driving time: 4 hours
                    </p>
                    <p>
                      <strong>Step 3:</strong> Calculate driving time
                      <br />
                      Driving time = 9.5 - 4 = 5.5 hours
                    </p>
                    <p>
                      <strong>Step 4:</strong> Calculate distance
                      <br />
                      Distance = 50 miles/hour × 5.5 hours = 275 miles
                    </p>
                    <div className="rounded-lg bg-green-50 p-4 text-center">
                      <h3 className="text-xl font-bold text-green-700">Final Answer: 275 miles</h3>
                      <p className="mt-2">The moving truck traveled a total of 275 miles.</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="mt-6 bg-amber-600 hover:bg-amber-700" onClick={onComplete}>
                Continue to Summary
              </Button>
            </CardContent>
          </Card>
        </div>
      )

    case 9:
      return (
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold">📚 Review and Reflect</h1>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="mb-6 space-y-4">
                <h2 className="text-xl font-semibold">Key Learning Points</h2>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Build timelines to manage driving vs. stopping time.</li>
                  <li>
                    Use the formula: <strong>Distance = Speed × Time</strong>
                  </li>
                  <li>Always check for non-driving time when solving distance problems.</li>
                  <li>Convert between different time formats (hours, minutes, decimal hours).</li>
                </ul>
              </div>

              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-semibold">Mini-Quiz</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="mb-2 font-medium">1. What steps are needed to find driving time?</h4>
                    <RadioGroup value={quizAnswers.steps} onValueChange={(value) => handleQuizAnswer("steps", value)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="a" id="option-a" />
                        <Label htmlFor="option-a">Add all the times together and multiply by the speed</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="b" id="option-b" />
                        <Label htmlFor="option-b">Calculate total time, then subtract non-driving time</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="c" id="option-c" />
                        <Label htmlFor="option-c">Divide the total distance by the speed</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <h4 className="mb-2 font-medium">
                      2. True or False: "Stopping for delivery or lunch should be counted as driving time."
                    </h4>
                    <RadioGroup
                      value={quizAnswers.drivingTime}
                      onValueChange={(value) => handleQuizAnswer("drivingTime", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="true" id="option-true" />
                        <Label htmlFor="option-true">True</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="false" id="option-false" />
                        <Label htmlFor="option-false">False</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-amber-50 p-4">
                <h3 className="mb-2 text-center text-lg font-semibold">Congratulations!</h3>
                <p className="text-center">
                  You've completed the Bakery Truck Problem lesson and earned the "Delivery Distance Pro" badge! 🏆
                </p>
              </div>

              <Button className="mt-6 bg-amber-600 hover:bg-amber-700" onClick={onComplete}>
                Complete Lesson
              </Button>
            </CardContent>
          </Card>
        </div>
      )

    default:
      return <div>Loading lesson content...</div>
  }
}
