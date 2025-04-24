"use client"

import { useState } from "react"
import Link from "next/link"
import { PageContainer } from "@/components/page-container"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function SummaryPage() {
  const [quizAnswers, setQuizAnswers] = useState({
    question1: "",
    question2: false,
  })

  const [isCorrect, setIsCorrect] = useState({
    question1: false,
    question2: false,
  })

  const [hasChecked, setHasChecked] = useState(false)
  const [showBadge, setShowBadge] = useState(false)

  const handleRadioChange = (value) => {
    setQuizAnswers({
      ...quizAnswers,
      question1: value,
    })
  }

  const handleCheckboxChange = (checked) => {
    setQuizAnswers({
      ...quizAnswers,
      question2: checked,
    })
  }

  const checkAnswers = () => {
    setIsCorrect({
      question1: quizAnswers.question1 === "8",
      question2: quizAnswers.question2 === false,
    })

    setHasChecked(true)

    if (quizAnswers.question1 === "8" && quizAnswers.question2 === false) {
      setShowBadge(true)
    }
  }

  return (
    <PageContainer title="📚 Wrap-Up and Reflect!" pageNumber={9} totalPages={9}>
      <div className="flex flex-col items-center">
        <div className="bg-amber-50 p-6 rounded-lg shadow-md max-w-2xl mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">Key Learning Points:</h2>

          <ul className="list-disc pl-6 space-y-3">
            <li className="text-lg">
              <span className="font-medium">Multiply to find comparative quantities</span> - When one quantity is a
              multiple of another, use multiplication.
            </li>
            <li className="text-lg">
              <span className="font-medium">Add totals before converting</span> - Combine like units first, then convert
              to the desired unit.
            </li>
            <li className="text-lg">
              <span className="font-medium">Pay attention to unit conversion factors</span> - Know the relationship
              between different units (e.g., 4 pecks = 1 bushel).
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mb-8 border-2 border-blue-200">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Mini-Quiz:</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-3">1. How many pecks are in 2 bushels?</h3>
              <RadioGroup value={quizAnswers.question1} onValueChange={handleRadioChange}>
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="2" id="r1" />
                  <Label htmlFor="r1">2 pecks</Label>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="4" id="r2" />
                  <Label htmlFor="r2">4 pecks</Label>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="8" id="r3" />
                  <Label htmlFor="r3">8 pecks</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="16" id="r4" />
                  <Label htmlFor="r4">16 pecks</Label>
                </div>
              </RadioGroup>

              {hasChecked && (
                <p className={`mt-2 ${isCorrect.question1 ? "text-green-600" : "text-red-600"}`}>
                  {isCorrect.question1
                    ? "Correct! 2 bushels × 4 pecks/bushel = 8 pecks"
                    : "Try again! Remember that 1 bushel = 4 pecks"}
                </p>
              )}
            </div>

            <div>
              <h3 className="font-medium mb-3">2. True or False: "You multiply pecks by 4 to get bushels."</h3>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" checked={quizAnswers.question2} onCheckedChange={handleCheckboxChange} />
                <Label htmlFor="terms">True</Label>
              </div>

              {hasChecked && (
                <p className={`mt-2 ${isCorrect.question2 ? "text-green-600" : "text-red-600"}`}>
                  {isCorrect.question2
                    ? "Correct! This statement is false. You divide pecks by 4 to get bushels."
                    : "Try again! Think about the conversion: 4 pecks = 1 bushel. To convert from pecks to bushels, what operation do you use?"}
                </p>
              )}
            </div>
          </div>

          <div className="mt-6">
            <Button onClick={checkAnswers} className="bg-blue-600 hover:bg-blue-700">
              Check My Answers
            </Button>
          </div>
        </div>

        {showBadge && (
          <div className="bg-gradient-to-r from-amber-100 to-red-100 p-6 rounded-lg shadow-md max-w-2xl mb-8 text-center border-2 border-amber-300">
            <h2 className="text-2xl font-bold text-red-700 mb-4">Congratulations!</h2>

            <div className="mb-4">
              <img src="/golden-achievement-fruit.png" alt="Market Math Pro Badge" className="mx-auto" />
            </div>

            <p className="text-lg font-medium mb-4">You've earned the "Market Math Pro" badge! 🍎🏆</p>

            <p className="text-gray-700">You've mastered unit conversion and can apply it to real-world problems.</p>
          </div>
        )}

        <div className="flex gap-4">
          <Link href="/lesson/context">
            <Button variant="outline">Restart Lesson</Button>
          </Link>

          <Link href="/">
            <Button className="bg-red-600 hover:bg-red-700">Back to Home</Button>
          </Link>
        </div>
      </div>
    </PageContainer>
  )
}
