"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { DragDropContext, Droppable, Draggable, type DropResult } from "@/components/drag-drop-context"
import { CheckCircle, XCircle } from "lucide-react"

interface LessonContentProps {
  lessonId: number
}

export default function LessonContent({ lessonId }: LessonContentProps) {
  // State for interactive elements
  const [dragItems, setDragItems] = useState({
    items: [
      { id: "advertising", content: "🎯 Advertising cost: $20", type: "fixed" },
      { id: "flowerCost", content: "🌸 Cost per flower: $3", type: "variable" },
    ],
    fixed: [],
    variable: [],
  })

  const [expression1Value, setExpression1Value] = useState("")
  const [expression2Value, setExpression2Value] = useState("")
  const [interpretation1, setInterpretation1] = useState("")
  const [interpretation2, setInterpretation2] = useState("")
  const [quizAnswers, setQuizAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
  })
  const [showTeam, setShowTeam] = useState(false)
  const [feedback, setFeedback] = useState<{ show: boolean; correct: boolean; message: string }>({
    show: false,
    correct: false,
    message: "",
  })

  // Handle drag and drop
  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result

    if (!destination) return

    const item = dragItems.items.find((item) => item.id === result.draggableId)

    if (!item) return

    if (destination.droppableId === "fixed") {
      setDragItems({
        ...dragItems,
        fixed: [...dragItems.fixed, item],
        items: dragItems.items.filter((i) => i.id !== item.id),
      })
    } else if (destination.droppableId === "variable") {
      setDragItems({
        ...dragItems,
        variable: [...dragItems.variable, item],
        items: dragItems.items.filter((i) => i.id !== item.id),
      })
    }

    // Check if correct
    if (
      (item.id === "advertising" && destination.droppableId === "fixed") ||
      (item.id === "flowerCost" && destination.droppableId === "variable")
    ) {
      setFeedback({
        show: true,
        correct: true,
        message: "Correct! You've identified this cost correctly.",
      })
    } else {
      setFeedback({
        show: true,
        correct: false,
        message: "That's not quite right. Think about whether this cost changes based on the number of flowers sold.",
      })
    }
  }

  // Check expression values
  const checkExpressionValues = () => {
    if (expression1Value === "32" && expression2Value === "72") {
      setFeedback({
        show: true,
        correct: true,
        message: "Correct! 3n + 20 = 3(4) + 20 = 12 + 20 = 32, and 3(n + 20) = 3(4 + 20) = 3(24) = 72",
      })
    } else {
      setFeedback({
        show: true,
        correct: false,
        message: "Check your calculations again. Remember to substitute n = 4 in both expressions.",
      })
    }
  }

  // Submit interpretations
  const submitInterpretations = () => {
    if (
      (interpretation1.toLowerCase().includes("cost") &&
        interpretation1.toLowerCase().includes("flower") &&
        interpretation2.toLowerCase().includes("incorrect")) ||
      interpretation2.toLowerCase().includes("wrong")
    ) {
      setFeedback({
        show: true,
        correct: true,
        message: "Great explanation! You understand the difference between these expressions.",
      })
    } else {
      setFeedback({
        show: true,
        correct: false,
        message:
          "Your explanation needs more detail. Think about what each expression represents in the context of the flower sale.",
      })
    }
  }

  // Submit quiz
  const submitQuiz = () => {
    const correctAnswers = {
      q1: "3n + 20",
      q2: "50t + 2000",
      q3: true, // Any answer for q3 is fine as long as they explain
    }

    const score = [
      quizAnswers.q1 === correctAnswers.q1,
      quizAnswers.q2 === correctAnswers.q2,
      quizAnswers.q3.length > 10, // At least wrote something substantial
    ].filter(Boolean).length

    if (score >= 2) {
      setFeedback({
        show: true,
        correct: true,
        message: `Great job! You got ${score}/3 correct. You're understanding these algebraic expressions well!`,
      })
    } else {
      setFeedback({
        show: true,
        correct: false,
        message: `You got ${score}/3 correct. Review the lessons to better understand the difference between these expressions.`,
      })
    }
  }

  // Render content based on lesson ID
  switch (lessonId) {
    case 1:
      return (
        <div>
          <h2 className="mb-6 text-center text-3xl font-bold text-pink-600">🌸 Selling Flowers for Homecoming!</h2>

          <div className="mb-8 overflow-hidden rounded-lg">
            <Image
              src="/school-dance-flowers.png"
              alt="Students selling flowers"
              width={800}
              height={300}
              className="w-full object-cover"
            />
          </div>

          <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
            <p className="text-lg text-gray-700">
              The student government is selling flowers to raise money for the homecoming dance. But selling isn't free
              — they spent $20 on advertising, and each flower they sell costs them $3.
            </p>
          </div>

          {!showTeam ? (
            <div className="text-center">
              <Button onClick={() => setShowTeam(true)} className="bg-pink-600 hover:bg-pink-700">
                Meet the Flower Team
              </Button>
            </div>
          ) : (
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-semibold text-pink-600">The Flower Team</h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="text-center">
                  <div className="mx-auto mb-2 h-20 w-20 overflow-hidden rounded-full">
                    <Image
                      src="/cartoon-short-hair-student.png"
                      alt="Team member"
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="font-medium">Maya</p>
                  <p className="text-sm text-gray-600">Team Leader</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-2 h-20 w-20 overflow-hidden rounded-full">
                    <Image
                      src="/cartoon-glasses-boy.png"
                      alt="Team member"
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="font-medium">Jamal</p>
                  <p className="text-sm text-gray-600">Treasurer</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-2 h-20 w-20 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=80&width=80&query=student girl with ponytail, cartoon style"
                      alt="Team member"
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="font-medium">Sophia</p>
                  <p className="text-sm text-gray-600">Marketing</p>
                </div>
              </div>
              <p className="mt-4 text-center text-gray-700">They need your help to figure out their total costs!</p>
            </div>
          )}
        </div>
      )

    case 2:
      return (
        <div>
          <h2 className="mb-6 text-center text-3xl font-bold text-pink-600">🧩 What Do We Know?</h2>

          <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
            <p className="mb-4 text-lg text-gray-700">
              Let's organize what we know about the flower sale. Drag each cost to the correct category:
            </p>

            <DragDropContext onDragEnd={handleDragEnd}>
              <div className="mb-6">
                <h3 className="mb-2 font-semibold">Available Items:</h3>
                <Droppable droppableId="items">
                  {(provided) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className="min-h-16 rounded-lg border-2 border-dashed border-gray-200 p-4"
                    >
                      {dragItems.items.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="mb-2 rounded-lg bg-pink-100 p-3"
                            >
                              {item.content}
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                      {dragItems.items.length === 0 && (
                        <p className="text-center text-gray-500">All items categorized!</p>
                      )}
                    </div>
                  )}
                </Droppable>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 font-semibold">Fixed Cost:</h3>
                  <Droppable droppableId="fixed">
                    {(provided) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="min-h-32 rounded-lg border-2 border-dashed border-blue-200 bg-blue-50 p-4"
                      >
                        {dragItems.fixed.map((item, index) => (
                          <div key={index} className="mb-2 rounded-lg bg-blue-100 p-3">
                            {item.content}
                          </div>
                        ))}
                        {provided.placeholder}
                        {dragItems.fixed.length === 0 && (
                          <p className="text-center text-gray-500">Drop fixed costs here</p>
                        )}
                      </div>
                    )}
                  </Droppable>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold">Variable Cost:</h3>
                  <Droppable droppableId="variable">
                    {(provided) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="min-h-32 rounded-lg border-2 border-dashed border-green-200 bg-green-50 p-4"
                      >
                        {dragItems.variable.map((item, index) => (
                          <div key={index} className="mb-2 rounded-lg bg-green-100 p-3">
                            {item.content}
                          </div>
                        ))}
                        {provided.placeholder}
                        {dragItems.variable.length === 0 && (
                          <p className="text-center text-gray-500">Drop variable costs here</p>
                        )}
                      </div>
                    )}
                  </Droppable>
                </div>
              </div>
            </DragDropContext>

            <div className="mt-6">
              <h3 className="mb-2 font-semibold">Goal:</h3>
              <div className="rounded-lg bg-yellow-100 p-3">❓ Find the total cost for selling n flowers.</div>
            </div>

            {feedback.show && (
              <div className={`mt-6 rounded-lg ${feedback.correct ? "bg-green-100" : "bg-red-100"} p-4`}>
                <div className="flex items-center gap-2">
                  {feedback.correct ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-600" />
                  )}
                  <p className={feedback.correct ? "text-green-700" : "text-red-700"}>{feedback.message}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )

    case 3:
      return (
        <div>
          <h2 className="mb-6 text-center text-3xl font-bold text-pink-600">🔍 Understanding the Two Expressions</h2>

          <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
            <p className="mb-6 text-lg text-gray-700">
              Let's compare two different expressions that might represent the total cost:
            </p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <Card className="border-2 border-green-200 p-4">
                <h3 className="mb-4 text-center text-xl font-bold text-green-600">3n + 20</h3>
                <div className="mb-4 rounded-lg bg-green-50 p-4">
                  <p className="text-center">Multiply flowers by 3, then add 20.</p>
                </div>
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400&query=visual diagram showing 3 dollars times n flowers plus 20 dollars, math illustration"
                    alt="Expression 1 visualization"
                    fill
                    className="rounded-lg object-contain"
                  />
                </div>
              </Card>

              <Card className="border-2 border-red-200 p-4">
                <h3 className="mb-4 text-center text-xl font-bold text-red-600">3(n + 20)</h3>
                <div className="mb-4 rounded-lg bg-red-50 p-4">
                  <p className="text-center">Add 20 to the number of flowers, then multiply by 3.</p>
                </div>
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400&query=visual diagram showing 3 dollars times (n flowers plus 20), math illustration"
                    alt="Expression 2 visualization"
                    fill
                    className="rounded-lg object-contain"
                  />
                </div>
              </Card>
            </div>

            <div className="mt-8">
              <h3 className="mb-4 text-xl font-semibold">Animation: Step-by-Step Calculation</h3>
              <div className="rounded-lg bg-gray-100 p-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="mb-2 font-medium text-green-600">3n + 20 (when n = 4)</h4>
                    <ol className="ml-5 list-decimal space-y-2">
                      <li>Start with n = 4 flowers</li>
                      <li>Multiply by $3: 3 × 4 = $12</li>
                      <li>Add fixed cost: $12 + $20 = $32</li>
                      <li>Total cost: $32</li>
                    </ol>
                  </div>

                  <div>
                    <h4 className="mb-2 font-medium text-red-600">3(n + 20) (when n = 4)</h4>
                    <ol className="ml-5 list-decimal space-y-2">
                      <li>Start with n = 4 flowers</li>
                      <li>Add 20: 4 + 20 = 24</li>
                      <li>Multiply by $3: 3 × 24 = $72</li>
                      <li>Total cost: $72</li>
                    </ol>
                  </div>
                </div>

                <div className="mt-4 rounded-lg bg-yellow-100 p-3">
                  <p className="font-medium">Think: Which makes more sense for our flower sale?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )

    case 4:
      return (
        <div>
          <h2 className="mb-6 text-center text-3xl font-bold text-pink-600">🧮 Let's Plug in n = 4</h2>

          <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
            <p className="mb-6 text-lg text-gray-700">
              Now let's evaluate both expressions when n = 4 (selling 4 flowers):
            </p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <Card className="border-2 border-green-200 p-4">
                <h3 className="mb-4 text-center text-xl font-bold text-green-600">3n + 20</h3>
                <div className="space-y-4">
                  <div className="rounded-lg bg-green-50 p-3">
                    <p>3(4) + 20 = ?</p>
                  </div>
                  <div className="rounded-lg bg-green-50 p-3">
                    <p>3 × 4 = ?</p>
                  </div>
                  <div className="rounded-lg bg-green-50 p-3">
                    <p>12 + 20 = ?</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium">Final answer:</p>
                    <Input
                      value={expression1Value}
                      onChange={(e) => setExpression1Value(e.target.value)}
                      className="w-24"
                      placeholder="?"
                    />
                  </div>
                </div>
              </Card>

              <Card className="border-2 border-red-200 p-4">
                <h3 className="mb-4 text-center text-xl font-bold text-red-600">3(n + 20)</h3>
                <div className="space-y-4">
                  <div className="rounded-lg bg-red-50 p-3">
                    <p>3(4 + 20) = ?</p>
                  </div>
                  <div className="rounded-lg bg-red-50 p-3">
                    <p>3(24) = ?</p>
                  </div>
                  <div className="rounded-lg bg-red-50 p-3">
                    <p>3 × 24 = ?</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium">Final answer:</p>
                    <Input
                      value={expression2Value}
                      onChange={(e) => setExpression2Value(e.target.value)}
                      className="w-24"
                      placeholder="?"
                    />
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-6">
              <Button onClick={checkExpressionValues} className="bg-pink-600 hover:bg-pink-700">
                Check My Answers
              </Button>

              {feedback.show && (
                <div className={`mt-4 rounded-lg ${feedback.correct ? "bg-green-100" : "bg-red-100"} p-4`}>
                  <div className="flex items-center gap-2">
                    {feedback.correct ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600" />
                    )}
                    <p className={feedback.correct ? "text-green-700" : "text-red-700"}>{feedback.message}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 rounded-lg bg-yellow-100 p-4">
              <h3 className="mb-2 font-semibold">Hint Question:</h3>
              <p>Which expression gives a more reasonable cost for selling just 4 flowers?</p>
              <p className="mt-2 text-sm text-gray-700">
                Think about it: Would it make sense for the cost of selling 4 flowers to be $72?
              </p>
            </div>
          </div>
        </div>
      )

    case 5:
      return (
        <div>
          <h2 className="mb-6 text-center text-3xl font-bold text-pink-600">✍️ Explain What Each Expression Means!</h2>

          <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
            <p className="mb-6 text-lg text-gray-700">
              Now that you've evaluated both expressions, explain what each one represents in the context of our flower
              sale:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-green-600">3n + 20</h3>
                <p className="mb-2">What does this expression represent in the flower sale situation?</p>
                <Textarea
                  value={interpretation1}
                  onChange={(e) => setInterpretation1(e.target.value)}
                  placeholder="This expression represents..."
                  className="min-h-24"
                />
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-red-600">3(n + 20)</h3>
                <p className="mb-2">What does this expression represent? Is it logical for our situation?</p>
                <Textarea
                  value={interpretation2}
                  onChange={(e) => setInterpretation2(e.target.value)}
                  placeholder="This expression represents..."
                  className="min-h-24"
                />
              </div>

              <Button onClick={submitInterpretations} className="bg-pink-600 hover:bg-pink-700">
                Submit My Explanations
              </Button>

              {feedback.show && (
                <div className={`rounded-lg ${feedback.correct ? "bg-green-100" : "bg-red-100"} p-4`}>
                  <div className="flex items-center gap-2">
                    {feedback.correct ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600" />
                    )}
                    <p className={feedback.correct ? "text-green-700" : "text-red-700"}>{feedback.message}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )

    case 6:
      return (
        <div>
          <h2 className="mb-6 text-center text-3xl font-bold text-pink-600">🎯 Let's See the Full Picture!</h2>

          <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
            <div className="mb-8 space-y-6">
              <div className="rounded-lg bg-green-100 p-4">
                <h3 className="mb-2 flex items-center gap-2 text-xl font-semibold text-green-600">
                  <CheckCircle className="h-5 w-5" />
                  3n + 20 correctly models the cost
                </h3>
                <p className="text-gray-700">
                  This expression accurately represents: $3 per flower × number of flowers + $20 fixed advertising fee.
                </p>
                <div className="mt-4">
                  <div className="rounded-lg bg-white p-3">
                    <p className="font-medium">When n = 4:</p>
                    <p>3(4) + 20 = 12 + 20 = $32</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-red-100 p-4">
                <h3 className="mb-2 flex items-center gap-2 text-xl font-semibold text-red-600">
                  <XCircle className="h-5 w-5" />
                  3(n + 20) incorrectly models the cost
                </h3>
                <p className="text-gray-700">
                  This expression incorrectly suggests: $3 per flower × (number of flowers + 20 additional flowers).
                </p>
                <p className="mt-2 text-gray-700">
                  The problem is that the $20 is not 20 additional flowers - it's a fixed dollar amount for advertising.
                </p>
                <div className="mt-4">
                  <div className="rounded-lg bg-white p-3">
                    <p className="font-medium">When n = 4:</p>
                    <p>3(4 + 20) = 3(24) = $72</p>
                    <p className="mt-1 text-sm text-red-600">This is much higher than the actual cost!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-yellow-100 p-4">
              <h3 className="mb-2 text-xl font-semibold">Key Takeaways:</h3>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  <span className="font-medium">Fixed costs</span> (like the $20 advertising fee) are added separately
                  to the expression.
                </li>
                <li>
                  <span className="font-medium">Variable costs</span> (like the $3 per flower) are multiplied by the
                  quantity.
                </li>
                <li>
                  The correct expression is <span className="font-medium">3n + 20</span>, which follows the pattern:
                  (cost per item × number of items) + fixed cost.
                </li>
                <li>
                  Parentheses change the meaning of an expression dramatically! 3(n + 20) means something very different
                  from 3n + 20.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )

    case 7:
      return (
        <div>
          <h2 className="mb-6 text-center text-3xl font-bold text-pink-600">🔄 Try a Similar Sales Problem!</h2>

          <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
            <div className="mb-6 rounded-lg bg-blue-100 p-4">
              <h3 className="mb-2 text-xl font-semibold text-blue-600">Bake Sale Problem</h3>
              <p className="text-gray-700">
                At a bake sale, setup costs are $15, and each cookie costs $2 to make. Write and evaluate the
                expressions 2n + 15 and 2(n + 15) when n = 5.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <Card className="border-2 border-green-200 p-4">
                <h3 className="mb-4 text-center text-xl font-bold text-green-600">2n + 15</h3>
                <div className="space-y-4">
                  <div className="rounded-lg bg-green-50 p-3">
                    <p>2(5) + 15 = ?</p>
                  </div>
                  <div className="rounded-lg bg-green-50 p-3">
                    <p>10 + 15 = ?</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium">Final answer:</p>
                    <Input className="w-24" placeholder="?" defaultValue="25" readOnly />
                  </div>
                </div>
              </Card>

              <Card className="border-2 border-red-200 p-4">
                <h3 className="mb-4 text-center text-xl font-bold text-red-600">2(n + 15)</h3>
                <div className="space-y-4">
                  <div className="rounded-lg bg-red-50 p-3">
                    <p>2(5 + 15) = ?</p>
                  </div>
                  <div className="rounded-lg bg-red-50 p-3">
                    <p>2(20) = ?</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium">Final answer:</p>
                    <Input className="w-24" placeholder="?" defaultValue="40" readOnly />
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-8">
              <h3 className="mb-4 text-xl font-semibold">Which expression correctly models the total cost?</h3>
              <RadioGroup defaultValue="2n + 15">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="2n + 15" id="r1" />
                  <Label htmlFor="r1">2n + 15</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="2(n + 15)" id="r2" />
                  <Label htmlFor="r2">2(n + 15)</Label>
                </div>
              </RadioGroup>

              <div className="mt-6 rounded-lg bg-green-100 p-4">
                <h4 className="mb-2 font-semibold text-green-600">Explanation:</h4>
                <p>The correct expression is 2n + 15 because:</p>
                <ul className="ml-5 mt-2 list-disc">
                  <li>$2 per cookie × 5 cookies = $10 (variable cost)</li>
                  <li>$15 setup cost (fixed cost)</li>
                  <li>Total cost = $10 + $15 = $25</li>
                </ul>
                <p className="mt-2">
                  The expression 2(n + 15) = 2(5 + 15) = 2(20) = $40 incorrectly treats the $15 setup cost as 15
                  additional cookies.
                </p>
              </div>
            </div>
          </div>
        </div>
      )

    case 8:
      return (
        <div>
          <h2 className="mb-6 text-center text-3xl font-bold text-pink-600">🚀 Same Math, Different World!</h2>

          <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
            <div className="mb-6 rounded-lg bg-purple-100 p-4">
              <h3 className="mb-2 text-xl font-semibold text-purple-600">Concert Hall Problem</h3>
              <p className="text-gray-700">
                A concert hall spends $2000 on setup costs and $50 per ticket sold. Which expression models total cost:
                50t + 2000 or 50(t + 2000)? Evaluate for t = 30.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="mb-4 text-xl font-semibold">Evaluate Both Expressions:</h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-green-100 p-4">
                  <h4 className="mb-2 font-medium text-green-600">50t + 2000 (when t = 30)</h4>
                  <div className="space-y-2">
                    <p>50(30) + 2000</p>
                    <p>1500 + 2000</p>
                    <p>= $3500</p>
                  </div>
                </div>

                <div className="rounded-lg bg-red-100 p-4">
                  <h4 className="mb-2 font-medium text-red-600">50(t + 2000) (when t = 30)</h4>
                  <div className="space-y-2">
                    <p>50(30 + 2000)</p>
                    <p>50(2030)</p>
                    <p>= $101,500</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="mb-4 text-xl font-semibold">Which expression is correct?</h3>
              <RadioGroup defaultValue="50t + 2000">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="50t + 2000" id="r3" />
                  <Label htmlFor="r3">50t + 2000</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="50(t + 2000)" id="r4" />
                  <Label htmlFor="r4">50(t + 2000)</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <h3 className="mb-2 text-xl font-semibold">Explain Your Reasoning:</h3>
              <Textarea
                className="min-h-24"
                placeholder="Explain why you chose this expression..."
                defaultValue="The correct expression is 50t + 2000 because it properly represents the $50 per ticket variable cost multiplied by the number of tickets (t), plus the $2000 fixed setup cost. The expression 50(t + 2000) incorrectly treats the $2000 as 2000 additional tickets, which doesn't make sense in this context."
                readOnly
              />
            </div>
          </div>
        </div>
      )

    case 9:
      return (
        <div>
          <h2 className="mb-6 text-center text-3xl font-bold text-pink-600">📚 Review and Reflect!</h2>

          <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
            <div className="mb-8">
              <h3 className="mb-4 text-xl font-semibold">Key Takeaways:</h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-blue-100 p-4">
                  <h4 className="mb-2 font-medium">Understanding Fixed vs. Variable Costs</h4>
                  <p className="text-sm">
                    Fixed costs don't change with quantity. Variable costs multiply by quantity.
                  </p>
                </div>

                <div className="rounded-lg bg-green-100 p-4">
                  <h4 className="mb-2 font-medium">Building Correct Algebraic Models</h4>
                  <p className="text-sm">(cost per item × number of items) + fixed cost</p>
                </div>

                <div className="rounded-lg bg-yellow-100 p-4">
                  <h4 className="mb-2 font-medium">Recognizing Structure Differences</h4>
                  <p className="text-sm">3n + 20 ≠ 3(n + 20)</p>
                </div>

                <div className="rounded-lg bg-purple-100 p-4">
                  <h4 className="mb-2 font-medium">Applying to Different Contexts</h4>
                  <p className="text-sm">The same pattern works for flowers, cookies, concert tickets, etc.</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="mb-4 text-xl font-semibold">Mini-Quiz:</h3>
              <div className="space-y-6">
                <div>
                  <p className="mb-2 font-medium">
                    1. Which expression correctly models the cost of selling n flowers at $3 each with a $20 advertising
                    fee?
                  </p>
                  <RadioGroup
                    value={quizAnswers.q1}
                    onValueChange={(value) => setQuizAnswers({ ...quizAnswers, q1: value })}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="3n + 20" id="q1a" />
                      <Label htmlFor="q1a">3n + 20</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="3(n + 20)" id="q1b" />
                      <Label htmlFor="q1b">3(n + 20)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="20n + 3" id="q1c" />
                      <Label htmlFor="q1c">20n + 3</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <p className="mb-2 font-medium">
                    2. A theater charges $50 per ticket plus a $2000 setup fee. Which expression models the total cost?
                  </p>
                  <RadioGroup
                    value={quizAnswers.q2}
                    onValueChange={(value) => setQuizAnswers({ ...quizAnswers, q2: value })}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="2000t + 50" id="q2a" />
                      <Label htmlFor="q2a">2000t + 50</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="50t + 2000" id="q2b" />
                      <Label htmlFor="q2b">50t + 2000</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="50(t + 2000)" id="q2c" />
                      <Label htmlFor="q2c">50(t + 2000)</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <p className="mb-2 font-medium">
                    3. Why is it important to add the fixed cost separately instead of inside the parentheses?
                  </p>
                  <Textarea
                    value={quizAnswers.q3}
                    onChange={(e) => setQuizAnswers({ ...quizAnswers, q3: e.target.value })}
                    placeholder="Type your answer here..."
                    className="min-h-24"
                  />
                </div>
              </div>

              <div className="mt-6">
                <Button onClick={submitQuiz} className="bg-pink-600 hover:bg-pink-700">
                  Submit Quiz
                </Button>

                {feedback.show && (
                  <div className={`mt-4 rounded-lg ${feedback.correct ? "bg-green-100" : "bg-red-100"} p-4`}>
                    <div className="flex items-center gap-2">
                      {feedback.correct ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-600" />
                      )}
                      <p className={feedback.correct ? "text-green-700" : "text-red-700"}>{feedback.message}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )

    default:
      return (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-pink-600">Lesson not found</h2>
          <p className="mt-4">Please return to the home page and start again.</p>
        </div>
      )
  }
}
