"use client"

import { useState } from "react"
import { Check, X, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FinalQuiz() {
  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: { n: "", product: "" },
  })

  const [results, setResults] = useState({
    q1: null as boolean | null,
    q2: null as boolean | null,
    q3: null as boolean | null,
    q4: null as boolean | null,
  })

  const [showBadge, setShowBadge] = useState(false)

  const checkAnswers = () => {
    const newResults = {
      q1: answers.q1 === "consecutive",
      q2: answers.q2 === "false",
      q3: answers.q3.toLowerCase().includes("product") && answers.q3.toLowerCase().includes("consecutive"),
      q4: Number.parseInt(answers.q4.n) * (Number.parseInt(answers.q4.n) + 1) === Number.parseInt(answers.q4.product),
    }

    setResults(newResults as any)

    if (Object.values(newResults).every((result) => result === true)) {
      setShowBadge(true)
    }
  }

  return (
    <div className="space-y-6">
      <div className="rounded-lg bg-blue-50 p-4 text-blue-800">
        <h3 className="text-lg font-medium">Key Learning Points:</h3>
        <ul className="mt-2 ml-5 list-disc space-y-1">
          <li>Set up equations based on relationships (consecutive numbers).</li>
          <li>Recognize and solve quadratic-like problems by factoring or logical guessing.</li>
          <li>Apply the same mathematical model to different real-world scenarios.</li>
        </ul>
      </div>

      <div className="space-y-6">
        <Card className="p-4">
          <h3 className="text-lg font-medium text-slate-800">Question 1:</h3>
          <p className="mt-1 text-slate-700">What does n(n+1) represent in our problems?</p>

          <RadioGroup
            value={answers.q1}
            onValueChange={(value) => setAnswers({ ...answers, q1: value })}
            className="mt-3"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sum" id="q1-sum" />
              <Label htmlFor="q1-sum">The sum of two numbers</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="consecutive" id="q1-consecutive" />
              <Label htmlFor="q1-consecutive">The product of consecutive integers</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="square" id="q1-square" />
              <Label htmlFor="q1-square">The square of a number plus itself</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="difference" id="q1-difference" />
              <Label htmlFor="q1-difference">The difference between two numbers</Label>
            </div>
          </RadioGroup>

          {results.q1 !== null && (
            <div
              className={`mt-3 rounded-md p-2 ${results.q1 ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
            >
              {results.q1 ? (
                <div className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <p>Correct! n(n+1) represents the product of consecutive integers.</p>
                </div>
              ) : (
                <div className="flex items-center">
                  <X className="mr-2 h-4 w-4 text-red-600" />
                  <p>Not quite. n(n+1) represents the product of consecutive integers.</p>
                </div>
              )}
            </div>
          )}
        </Card>

        <Card className="p-4">
          <h3 className="text-lg font-medium text-slate-800">Question 2:</h3>
          <p className="mt-1 text-slate-700">True or False: "Consecutive numbers differ by 2."</p>

          <RadioGroup
            value={answers.q2}
            onValueChange={(value) => setAnswers({ ...answers, q2: value })}
            className="mt-3"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="true" id="q2-true" />
              <Label htmlFor="q2-true">True</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="false" id="q2-false" />
              <Label htmlFor="q2-false">False</Label>
            </div>
          </RadioGroup>

          {results.q2 !== null && (
            <div
              className={`mt-3 rounded-md p-2 ${results.q2 ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
            >
              {results.q2 ? (
                <div className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <p>Correct! Consecutive numbers differ by 1, not 2.</p>
                </div>
              ) : (
                <div className="flex items-center">
                  <X className="mr-2 h-4 w-4 text-red-600" />
                  <p>Not correct. Consecutive numbers differ by 1, not 2.</p>
                </div>
              )}
            </div>
          )}
        </Card>

        <Card className="p-4">
          <h3 className="text-lg font-medium text-slate-800">Question 3:</h3>
          <p className="mt-1 text-slate-700">
            In your own words, explain what makes a "facing pages" problem and how you would approach solving it.
          </p>

          <Textarea
            value={answers.q3}
            onChange={(e) => setAnswers({ ...answers, q3: e.target.value })}
            placeholder="Type your answer here..."
            className="mt-3 min-h-24"
          />

          {results.q3 !== null && (
            <div
              className={`mt-3 rounded-md p-2 ${results.q3 ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
            >
              {results.q3 ? (
                <div className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <p>Good explanation! You've identified the key aspects of the problem.</p>
                </div>
              ) : (
                <div className="flex items-center">
                  <X className="mr-2 h-4 w-4 text-red-600" />
                  <p>
                    Your explanation should mention that facing pages are consecutive numbers and that we're given their
                    product.
                  </p>
                </div>
              )}
            </div>
          )}
        </Card>

        <Card className="p-4">
          <h3 className="text-lg font-medium text-slate-800">Question 4:</h3>
          <p className="mt-1 text-slate-700">
            Create your own facing pages problem! Choose a value for n and calculate the product.
          </p>

          <div className="mt-3 grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="page-number">Page number (n):</Label>
              <Input
                id="page-number"
                type="number"
                value={answers.q4.n}
                onChange={(e) =>
                  setAnswers({
                    ...answers,
                    q4: { ...answers.q4, n: e.target.value },
                  })
                }
                placeholder="e.g., 25"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="product">Product (n × (n+1)):</Label>
              <Input
                id="product"
                type="number"
                value={answers.q4.product}
                onChange={(e) =>
                  setAnswers({
                    ...answers,
                    q4: { ...answers.q4, product: e.target.value },
                  })
                }
                placeholder="e.g., 650"
                className="mt-1"
              />
            </div>
          </div>

          {results.q4 !== null && (
            <div
              className={`mt-3 rounded-md p-2 ${results.q4 ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
            >
              {results.q4 ? (
                <div className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <p>
                    Correct! {answers.q4.n} × {Number.parseInt(answers.q4.n) + 1} = {answers.q4.product}
                  </p>
                </div>
              ) : (
                <div className="flex items-center">
                  <X className="mr-2 h-4 w-4 text-red-600" />
                  <p>
                    The product is not correct. {answers.q4.n} × {Number.parseInt(answers.q4.n) + 1} ={" "}
                    {Number.parseInt(answers.q4.n) * (Number.parseInt(answers.q4.n) + 1)}
                  </p>
                </div>
              )}
            </div>
          )}
        </Card>
      </div>

      <div className="flex justify-center">
        <Button onClick={checkAnswers} className="bg-blue-600 hover:bg-blue-700">
          Check All Answers
        </Button>
      </div>

      {showBadge && (
        <div className="rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 p-6 text-center text-white shadow-lg">
          <div className="flex flex-col items-center">
            <Trophy className="h-16 w-16 text-yellow-300" />
            <h3 className="mt-4 text-2xl font-bold">Congratulations!</h3>
            <p className="mt-2 text-lg">You've earned the "Book Puzzle Solver" badge! 📖🏆</p>
            <p className="mt-4">You've mastered the skill of solving consecutive number problems.</p>
          </div>
        </div>
      )}

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="further">
          <AccordionTrigger>Further Learning</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 rounded-md bg-slate-50 p-3">
              <p className="font-medium">Want to explore more?</p>
              <ul className="ml-5 list-disc space-y-1">
                <li>Try solving problems with consecutive even or odd numbers</li>
                <li>Explore problems where the sum of consecutive numbers equals a given value</li>
                <li>Learn about arithmetic sequences and their applications</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
