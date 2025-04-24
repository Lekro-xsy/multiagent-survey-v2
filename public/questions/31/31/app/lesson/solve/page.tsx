"use client"

import { useState } from "react"
import { PageContainer } from "@/components/page-container"
import { PageNavigation } from "@/components/page-navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SolvePage() {
  const [answers, setAnswers] = useState({
    farm2Pecks: "",
    totalPecks: "",
    totalBushels: "",
  })

  const [isCorrect, setIsCorrect] = useState({
    farm2Pecks: false,
    totalPecks: false,
    totalBushels: false,
  })

  const [hasChecked, setHasChecked] = useState(false)
  const [showHints, setShowHints] = useState(false)

  const handleChange = (field, value) => {
    setAnswers({
      ...answers,
      [field]: value,
    })
  }

  const checkAnswers = () => {
    setIsCorrect({
      farm2Pecks: answers.farm2Pecks.trim() === "34",
      totalPecks: answers.totalPecks.trim() === "51",
      totalBushels: answers.totalBushels.trim() === "12.75",
    })

    setHasChecked(true)
  }

  const allCorrect = Object.values(isCorrect).every((value) => value === true)

  return (
    <PageContainer title="✍️ Now You Solve It!" pageNumber={5} totalPages={9}>
      <div className="flex flex-col items-center">
        <div className="bg-amber-50 p-6 rounded-lg shadow-md max-w-2xl mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">Solve the Problem:</h2>

          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg">
              <p className="font-medium mb-2">How many pecks did Farm 2 sell?</p>
              <div className="flex items-center gap-2">
                <Input
                  value={answers.farm2Pecks}
                  onChange={(e) => handleChange("farm2Pecks", e.target.value)}
                  placeholder="Enter number"
                  className={`w-32 ${hasChecked && (isCorrect.farm2Pecks ? "border-green-500" : "border-red-500")}`}
                />
                <span>pecks</span>
              </div>
              {hasChecked && !isCorrect.farm2Pecks && (
                <p className="text-red-500 text-sm mt-1">Try again! (Hint: 2 × 17)</p>
              )}
            </div>

            <div className="bg-white p-4 rounded-lg">
              <p className="font-medium mb-2">How many pecks did both farms sell in total?</p>
              <div className="flex items-center gap-2">
                <Input
                  value={answers.totalPecks}
                  onChange={(e) => handleChange("totalPecks", e.target.value)}
                  placeholder="Enter number"
                  className={`w-32 ${hasChecked && (isCorrect.totalPecks ? "border-green-500" : "border-red-500")}`}
                />
                <span>pecks</span>
              </div>
              {hasChecked && !isCorrect.totalPecks && (
                <p className="text-red-500 text-sm mt-1">Try again! (Hint: 17 + 34)</p>
              )}
            </div>

            <div className="bg-white p-4 rounded-lg">
              <p className="font-medium mb-2">How many bushels did both farms sell in total?</p>
              <div className="flex items-center gap-2">
                <Input
                  value={answers.totalBushels}
                  onChange={(e) => handleChange("totalBushels", e.target.value)}
                  placeholder="Enter number"
                  className={`w-32 ${hasChecked && (isCorrect.totalBushels ? "border-green-500" : "border-red-500")}`}
                />
                <span>bushels</span>
              </div>
              {hasChecked && !isCorrect.totalBushels && (
                <p className="text-red-500 text-sm mt-1">Try again! (Hint: 51 ÷ 4)</p>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-4 mb-8">
          <Button onClick={checkAnswers} className="bg-blue-600 hover:bg-blue-700">
            Check My Answers
          </Button>

          <Button onClick={() => setShowHints(!showHints)} variant="outline">
            {showHints ? "Hide Hints" : "Show Hints"}
          </Button>
        </div>

        {showHints && (
          <div className="bg-yellow-50 p-4 rounded-lg mb-8 max-w-2xl">
            <h3 className="font-bold mb-2">Hints:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Farm 2 sells twice as many as Farm 1 (which is 17 pecks)</li>
              <li>Add the pecks from both farms to get the total</li>
              <li>To convert pecks to bushels, divide by 4</li>
              <li>Don't forget to include the decimal in your final answer</li>
            </ul>
          </div>
        )}

        {hasChecked && allCorrect && (
          <div className="bg-green-100 p-4 rounded-lg mb-8 max-w-2xl">
            <p className="text-lg font-medium text-green-700">Excellent work! You've solved the problem correctly.</p>
            <p className="text-green-600">Let's check the full solution on the next page.</p>
          </div>
        )}

        <PageNavigation prevHref="/lesson/setup" nextHref="/lesson/solution" nextDisabled={!allCorrect} />
      </div>
    </PageContainer>
  )
}
