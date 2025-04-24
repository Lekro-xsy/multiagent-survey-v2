"use client"

import { useState } from "react"
import { DndContext, closestCenter } from "@dnd-kit/core"
import { SortableContext, arrayMove, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { ArrowRight, Check, GripVertical, X } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { useToast } from "@/hooks/use-toast"

interface SortableItemProps {
  id: string
  content: string
  category: string
}

const SortableItem = ({ id, content, category }: SortableItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div ref={setNodeRef} style={style} className="mb-2 flex items-center rounded-md border bg-card p-3 text-sm">
      <div {...attributes} {...listeners} className="mr-2 cursor-grab">
        <GripVertical className="h-5 w-5 text-muted-foreground" />
      </div>
      <div className="flex-1">{content}</div>
      <Badge variant="outline">{category}</Badge>
    </div>
  )
}

interface LessonContentProps {
  pageId: number
  showHint: boolean
}

export function LessonContent({ pageId, showHint }: LessonContentProps) {
  const { toast } = useToast()
  const [secondYearHours, setSecondYearHours] = useState(11)
  const [answer, setAnswer] = useState("")
  const [explanation, setExplanation] = useState("")
  const [nearTransferAnswer, setNearTransferAnswer] = useState("")
  const [farTransferAnswer, setFarTransferAnswer] = useState("")
  const [quizAnswer, setQuizAnswer] = useState("")
  const [trueOrFalse, setTrueOrFalse] = useState("")
  const [wordProblem, setWordProblem] = useState("")
  const [items, setItems] = useState([
    { id: "1", content: "First-year study time = 11 hours per week", category: "Known" },
    { id: "2", content: "Second-year study time = 2 hours more", category: "Known" },
    { id: "3", content: "Second-year study time = ?", category: "Unknown" },
  ])
  const [showCorrect, setShowCorrect] = useState(false)

  const handleDragEnd = (event: any) => {
    const { active, over } = event

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id)
        const newIndex = items.findIndex((item) => item.id === over.id)

        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  const checkAnswer = () => {
    if (answer === "13") {
      toast({
        title: "Correct!",
        description: "Great job solving the problem!",
        variant: "default",
      })
      setShowCorrect(true)
    } else {
      toast({
        title: "Not quite right",
        description: "Try again! Hint: Add 2 to 11.",
        variant: "destructive",
      })
    }
  }

  const checkNearTransfer = () => {
    if (nearTransferAnswer === "17") {
      toast({
        title: "Correct!",
        description: "You've successfully applied the same concept to a new problem!",
        variant: "default",
      })
    } else {
      toast({
        title: "Not quite right",
        description: "Try again! Hint: Add 3 to 14.",
        variant: "destructive",
      })
    }
  }

  const checkFarTransfer = () => {
    if (farTransferAnswer === "35") {
      toast({
        title: "Correct!",
        description: "You've successfully applied the concept in a different context!",
        variant: "default",
      })
    } else {
      toast({
        title: "Not quite right",
        description: "Try again! Hint: Add 5 to 30.",
        variant: "destructive",
      })
    }
  }

  const renderContent = () => {
    switch (pageId) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="flex justify-center">
              <img src="/placeholder.svg?key=quigz" alt="Bartholomew studying in the library" className="rounded-lg" />
            </div>
            <div className="space-y-4 text-center">
              <p className="text-lg">
                In his second year of college, Bartholomew studied 2 more hours per week than he did in his first year.
              </p>
              <p className="text-lg">His first-year average was 11 hours per week.</p>
              <p className="text-lg font-bold">How many hours did he study on average in his second year?</p>
            </div>
            <div className="mt-6 flex justify-center gap-8">
              <div className="text-center">
                <div className="mb-2 text-sm font-medium">Year 1</div>
                <div className="flex h-20 w-32 items-center justify-center rounded-lg bg-blue-100">
                  <span className="text-xl font-bold">11 hours</span>
                </div>
              </div>
              <div className="flex items-center">
                <ArrowRight className="h-6 w-6" />
              </div>
              <div className="text-center">
                <div className="mb-2 text-sm font-medium">Year 2</div>
                <div className="flex h-20 w-32 items-center justify-center rounded-lg bg-green-100">
                  <span className="text-xl font-bold">? hours</span>
                </div>
              </div>
            </div>
            {showHint && (
              <div className="mt-4 rounded-lg bg-amber-50 p-4 text-amber-800">
                <p className="font-medium">Hint:</p>
                <p>Think about how to represent "2 more hours than first year" mathematically.</p>
              </div>
            )}
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Important Facts</h3>
            <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
              <SortableContext items={items.map((item) => item.id)} strategy={verticalListSortingStrategy}>
                {items.map((item) => (
                  <SortableItem key={item.id} id={item.id} content={item.content} category={item.category} />
                ))}
              </SortableContext>
            </DndContext>

            <div className="mt-6">
              <h3 className="mb-4 text-xl font-bold">Equation</h3>
              <div className="flex items-center justify-center gap-2 text-xl">
                <span>11</span>
                <span>=</span>
                <span>m</span>
                <span>−</span>
                <span>2</span>
              </div>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Where m represents the second-year study time
              </p>
            </div>

            {showHint && (
              <div className="mt-4 rounded-lg bg-amber-50 p-4 text-amber-800">
                <p className="font-medium">Hint:</p>
                <p>
                  Drag the facts to organize them. The equation shows that if we subtract 2 from the second-year hours
                  (m), we get the first-year hours (11).
                </p>
              </div>
            )}
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold">How Do the Years Compare?</h3>

            <div className="flex justify-center">
              <div className="w-full max-w-md space-y-6">
                <div className="space-y-2">
                  <Label>Adjust the second-year study time:</Label>
                  <Slider
                    value={[secondYearHours]}
                    min={11}
                    max={15}
                    step={1}
                    onValueChange={(value) => setSecondYearHours(value[0])}
                  />
                  <div className="text-center text-sm">Second year: {secondYearHours} hours</div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-20 text-right text-sm font-medium">Year 1:</div>
                    <div className="h-8 w-full max-w-[220px] rounded-md bg-blue-500"></div>
                    <div className="text-sm">11 hours</div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-20 text-right text-sm font-medium">Year 2:</div>
                    <div
                      className={`h-8 rounded-md ${secondYearHours === 13 ? "bg-green-500" : "bg-orange-400"}`}
                      style={{ width: `${(secondYearHours / 11) * 220}px` }}
                    ></div>
                    <div className="text-sm">{secondYearHours} hours</div>
                  </div>
                </div>

                {secondYearHours === 13 ? (
                  <div className="rounded-lg bg-green-50 p-4 text-green-800">
                    <p className="font-medium">Correct!</p>
                    <p>The second year is 2 hours more than the first year: 11 + 2 = 13 hours</p>
                  </div>
                ) : (
                  <div className="rounded-lg bg-orange-50 p-4 text-orange-800">
                    <p className="font-medium">Not quite right!</p>
                    <p>Adjust the slider to show 2 hours more than the first year.</p>
                  </div>
                )}
              </div>
            </div>

            {showHint && (
              <div className="mt-4 rounded-lg bg-amber-50 p-4 text-amber-800">
                <p className="font-medium">Hint:</p>
                <p>The second-year bar should be exactly 2 units longer than the first-year bar.</p>
              </div>
            )}
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Building the Equation</h3>

            <div className="space-y-4">
              <p>
                Let's call the second-year average <strong>m</strong>.
              </p>

              <div className="rounded-lg bg-slate-50 p-4">
                <p className="mb-2">Since it's 2 hours more than the first year:</p>
                <div className="flex items-center justify-center gap-2 text-xl">
                  <span>m</span>
                  <span>−</span>
                  <span>2</span>
                  <span>=</span>
                  <span>11</span>
                </div>
              </div>

              <div className="rounded-lg bg-slate-50 p-4">
                <p className="mb-2">Rearranging to solve for m:</p>
                <div className="flex items-center justify-center gap-2 text-xl">
                  <span>m</span>
                  <span>=</span>
                  <span>11</span>
                  <span>+</span>
                  <span>2</span>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-blue-50 p-4 text-blue-800">
                <p className="font-medium">Concept Tip:</p>
                <p>Reverse thinking: "What number minus 2 gives 11?"</p>
                <p>Or directly: "11 plus 2 equals what number?"</p>
              </div>
            </div>

            {showHint && (
              <div className="mt-4 rounded-lg bg-amber-50 p-4 text-amber-800">
                <p className="font-medium">Hint:</p>
                <p>When we rearrange the equation m - 2 = 11, we add 2 to both sides to get m = 11 + 2.</p>
              </div>
            )}
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Your Turn: Solve Mentally!</h3>

            <div className="space-y-4">
              <p>Think: "What number is 2 more than 11?"</p>

              <div className="space-y-2">
                <Label htmlFor="answer">Value of m:</Label>
                <div className="flex gap-2">
                  <Input
                    id="answer"
                    type="number"
                    placeholder="Enter your answer"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                  />
                  <Button onClick={checkAnswer}>Check</Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="explanation">Short explanation:</Label>
                <Input
                  id="explanation"
                  placeholder="Explain how you solved it"
                  value={explanation}
                  onChange={(e) => setExplanation(e.target.value)}
                />
              </div>

              {showCorrect && (
                <div className="rounded-lg bg-green-50 p-4 text-green-800">
                  <p className="font-medium">Correct!</p>
                  <p>11 + 2 = 13. Bartholomew studied 13 hours per week in his second year.</p>
                </div>
              )}
            </div>

            {showHint && (
              <div className="mt-4 rounded-lg bg-amber-50 p-4 text-amber-800">
                <p className="font-medium">Hint:</p>
                <p>Use the equation m = 11 + 2 and calculate the result.</p>
              </div>
            )}
          </div>
        )

      case 6:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Check Your Work!</h3>

            <div className="space-y-4">
              <div className="rounded-lg bg-slate-50 p-4">
                <p className="mb-2 font-medium">Solve:</p>
                <div className="flex items-center justify-center gap-2 text-xl">
                  <span>11</span>
                  <span>+</span>
                  <span>2</span>
                  <span>=</span>
                  <span>13</span>
                </div>
              </div>

              <div className="rounded-lg bg-green-50 p-4 text-green-800">
                <p className="font-medium">Final Answer:</p>
                <p className="text-lg">Bartholomew studied an average of 13 hours per week during his second year.</p>
              </div>

              <div className="flex justify-center">
                <div className="flex gap-8">
                  <div className="text-center">
                    <div className="mb-2 text-sm font-medium">Year 1</div>
                    <div className="flex h-40 w-32 flex-col-reverse rounded-lg bg-blue-100">
                      <div className="flex h-[220px] flex-col-reverse">
                        {Array.from({ length: 11 }).map((_, i) => (
                          <div key={i} className="h-4 w-full border-t border-blue-200 bg-blue-300"></div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-2 text-sm font-medium">11 hours</div>
                  </div>
                  <div className="text-center">
                    <div className="mb-2 text-sm font-medium">Year 2</div>
                    <div className="flex h-40 w-32 flex-col-reverse rounded-lg bg-green-100">
                      <div className="flex h-[260px] flex-col-reverse">
                        {Array.from({ length: 13 }).map((_, i) => (
                          <div
                            key={i}
                            className={`h-4 w-full border-t ${i < 11 ? "border-green-200 bg-green-300" : "border-green-300 bg-green-500"}`}
                          ></div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-2 text-sm font-medium">13 hours</div>
                  </div>
                </div>
              </div>
            </div>

            {showHint && (
              <div className="mt-4 rounded-lg bg-amber-50 p-4 text-amber-800">
                <p className="font-medium">Hint:</p>
                <p>Notice how the visual representation shows the 2 additional hours in the second year.</p>
              </div>
            )}
          </div>
        )

      case 7:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Try a Similar Study Problem!</h3>

            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <p className="text-lg">
                    In her second year, Lydia studied 3 more hours per week than she did her first year.
                  </p>
                  <p className="text-lg">
                    If Lydia studied 14 hours per week her first year, how many hours did she study her second year?
                  </p>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Set up the model:</Label>
                  <div className="rounded-lg bg-slate-50 p-4">
                    <div className="flex items-center justify-center gap-2 text-xl">
                      <span>m</span>
                      <span>=</span>
                      <span>14</span>
                      <span>+</span>
                      <span>3</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nearTransferAnswer">Your answer:</Label>
                  <div className="flex gap-2">
                    <Input
                      id="nearTransferAnswer"
                      type="number"
                      placeholder="Enter your answer"
                      value={nearTransferAnswer}
                      onChange={(e) => setNearTransferAnswer(e.target.value)}
                    />
                    <Button onClick={checkNearTransfer}>Check</Button>
                  </div>
                </div>
              </div>
            </div>

            {showHint && (
              <div className="mt-4 rounded-lg bg-amber-50 p-4 text-amber-800">
                <p className="font-medium">Hint:</p>
                <p>This problem follows the same pattern as Bartholomew's. Use the equation m = 14 + 3.</p>
              </div>
            )}
          </div>
        )

      case 8:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Different Setting, Same Thinking!</h3>

            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <p className="text-lg">A runner improved his weekly training distance by 5 miles from last year.</p>
                  <p className="text-lg">If last year's average was 30 miles per week, what is this year's average?</p>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Set up the equation:</Label>
                  <div className="rounded-lg bg-slate-50 p-4">
                    <div className="flex items-center justify-center gap-2 text-xl">
                      <span>d</span>
                      <span>=</span>
                      <span>30</span>
                      <span>+</span>
                      <span>5</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="farTransferAnswer">Your answer:</Label>
                  <div className="flex gap-2">
                    <Input
                      id="farTransferAnswer"
                      type="number"
                      placeholder="Enter your answer"
                      value={farTransferAnswer}
                      onChange={(e) => setFarTransferAnswer(e.target.value)}
                    />
                    <Button onClick={checkFarTransfer}>Check</Button>
                  </div>
                </div>
              </div>
            </div>

            {showHint && (
              <div className="mt-4 rounded-lg bg-amber-50 p-4 text-amber-800">
                <p className="font-medium">Hint:</p>
                <p>
                  Although this is about running instead of studying, the mathematical structure is the same. Use the
                  equation d = 30 + 5.
                </p>
              </div>
            )}
          </div>
        )

      case 9:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Review and Reflect</h3>

            <div className="space-y-4">
              <div className="rounded-lg bg-blue-50 p-4 text-blue-800">
                <p className="font-medium">Key Learning Points:</p>
                <ul className="ml-6 list-disc space-y-1">
                  <li>Translate word problems into simple equations</li>
                  <li>Use mental math efficiently to solve simple linear relationships</li>
                  <li>Recognize "more than" or "less than" situations as needing basic algebraic models</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Mini-Quiz:</h4>

                <div className="space-y-2">
                  <Label>1. Which equation models "13 is 2 less than m"?</Label>
                  <RadioGroup value={quizAnswer} onValueChange={setQuizAnswer}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="a" id="a" />
                      <Label htmlFor="a">13 = m - 2</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="b" id="b" />
                      <Label htmlFor="b">13 = m + 2</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="c" id="c" />
                      <Label htmlFor="c">13 - 2 = m</Label>
                    </div>
                  </RadioGroup>

                  {quizAnswer === "a" && (
                    <div className="mt-2 flex items-center gap-2 text-green-600">
                      <Check className="h-4 w-4" />
                      <span>Correct! "13 is 2 less than m" means 13 = m - 2</span>
                    </div>
                  )}
                  {quizAnswer && quizAnswer !== "a" && (
                    <div className="mt-2 flex items-center gap-2 text-red-600">
                      <X className="h-4 w-4" />
                      <span>Try again. Think about what "less than" means.</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>2. True or False: "When you see 'more than,' you should add."</Label>
                  <RadioGroup value={trueOrFalse} onValueChange={setTrueOrFalse}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="true" id="true" />
                      <Label htmlFor="true">True</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="false" id="false" />
                      <Label htmlFor="false">False</Label>
                    </div>
                  </RadioGroup>

                  {trueOrFalse === "true" && (
                    <div className="mt-2 flex items-center gap-2 text-green-600">
                      <Check className="h-4 w-4" />
                      <span>Correct! "More than" indicates addition.</span>
                    </div>
                  )}
                  {trueOrFalse === "false" && (
                    <div className="mt-2 flex items-center gap-2 text-red-600">
                      <X className="h-4 w-4" />
                      <span>Not quite. "More than" does indicate addition.</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>3. Create a word problem matching: n - 3 = 7</Label>
                  <Input
                    placeholder="Write your word problem here"
                    value={wordProblem}
                    onChange={(e) => setWordProblem(e.target.value)}
                  />

                  {wordProblem.length > 20 && (
                    <div className="mt-2 rounded-lg bg-green-50 p-3 text-green-800">
                      <p>
                        Great job creating your own word problem! A correct problem might be: "When 3 is subtracted from
                        a number, the result is 7. What is the number?"
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-green-50 p-4 text-center text-green-800">
                <p className="text-lg font-bold">Congratulations! 🏆</p>
                <p>You've earned the "Mental Math Master" badge!</p>
              </div>
            </div>

            {showHint && (
              <div className="mt-4 rounded-lg bg-amber-50 p-4 text-amber-800">
                <p className="font-medium">Hint:</p>
                <p>
                  For the first question, remember that "less than" means subtraction. For the word problem, think about
                  how to represent "n - 3 = 7" in words.
                </p>
              </div>
            )}
          </div>
        )

      default:
        return <div>Loading lesson content...</div>
    }
  }

  return renderContent()
}
