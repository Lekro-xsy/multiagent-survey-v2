"use client"

import { useState } from "react"
import { PageContainer } from "@/components/page-container"
import { PageNavigation } from "@/components/page-navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SetupPage() {
  const [answers, setAnswers] = useState({
    farm1: "",
    farm2: "",
    totalPecks: "",
    bushelsFormula: "",
  })

  const [isCorrect, setIsCorrect] = useState({
    farm1: false,
    farm2: false,
    totalPecks: false,
    bushelsFormula: false,
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
      farm1: answers.farm1.trim() === "17",
      farm2: answers.farm2.trim() === "34" || answers.farm2.trim() === "2 × 17" || answers.farm2.trim() === "2*17",
      totalPecks: answers.totalPecks.trim() === "51" || answers.totalPecks.trim() === "17 + 34",
      bushelsFormula: answers.bushelsFormula.trim() === "51/4" || answers.bushelsFormula.trim() === "51 ÷ 4",
    })

    setHasChecked(true)
  }

  const allCorrect = Object.values(isCorrect).every((value) => value === true)

  return (
    <PageContainer title="🧮 Setting Up the Calculation" pageNumber={4} totalPages={9}>
      <div className="flex flex-col items-center">
        <div className="bg-amber-50 p-6 rounded-lg shadow-md max-w-2xl mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">Step-by-Step Setup:</h2>

          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg">
              <p className="font-medium mb-2">Farm 1 pecks:</p>
              <div className="flex items-center">
                <Input
                  value={answers.farm1}
                  onChange={(e) => handleChange("farm1", e.target.value)}
                  placeholder="Enter number"
                  className={`w-24 text-center ${hasChecked && (isCorrect.farm1 ? "border-green-500" : "border-red-500")}`}
                />
              </div>
              {hasChecked && !isCorrect.farm1 && <p className="text-red-500 text-sm mt-1">Try again!</p>}
            </div>

            <div className="bg-white p-4 rounded-lg">
              <p className="font-medium mb-2">Farm 2 pecks:</p>
              <div className="flex items-center gap-2">
                <span>2 ×</span>
                <Input
                  value={answers.farm2}
                  onChange={(e) => handleChange("farm2", e.target.value)}
                  placeholder="Enter formula or result"
                  className={`w-32 ${hasChecked && (isCorrect.farm2 ? "border-green-500" : "border-red-500")}`}
                />
              </div>
              {hasChecked && !isCorrect.farm2 && (
                <p className="text-red-500 text-sm mt-1">Try again! (Hint: 2 × 17 or just 34)</p>
              )}
            </div>

            <div className="bg-white p-4 rounded-lg">
              <p className="font-medium mb-2">Total pecks:</p>
              <div className="flex items-center gap-2">
                <Input
                  value={answers.totalPecks}
                  onChange={(e) => handleChange("totalPecks", e.target.value)}
                  placeholder="Enter formula or result"
                  className={`w-32 ${hasChecked && (isCorrect.totalPecks ? "border-green-500" : "border-red-500")}`}
                />
              </div>
              {hasChecked && !isCorrect.totalPecks && (
                <p className="text-red-500 text-sm mt-1">Try again! (Hint: 17 + 34 or just 51)</p>
              )}
            </div>

            <div className="bg-white p-4 rounded-lg">
              <p className="font-medium mb-2">Convert to bushels:</p>
              <div className="flex items-center gap-2">
                <span>Bushels =</span>
                <Input
                  value={answers.bushelsFormula}
                  onChange={(e) => handleChange("bushelsFormula", e.target.value)}
                  placeholder="Enter formula"
                  className={`w-32 ${hasChecked && (isCorrect.bushelsFormula ? "border-green-500" : "border-red-500")}`}
                />
              </div>
              {hasChecked && !isCorrect.bushelsFormula && (
                <p className="text-red-500 text-sm mt-1">Try again! (Hint: total pecks ÷ 4)</p>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-4 mb-8">
          <Button onClick={checkAnswers} className="bg-blue-600 hover:bg-blue-700">
            Check My Setup
          </Button>

          <Button onClick={() => setShowHints(!showHints)} variant="outline">
            {showHints ? "Hide Hints" : "Show Hints"}
          </Button>
        </div>

        {showHints && (
          <div className="bg-yellow-50 p-4 rounded-lg mb-8 max-w-2xl">
            <h3 className="font-bold mb-2">Hints:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Farm 1 sells 17 pecks</li>
              <li>Farm 2 sells twice as many as Farm 1</li>
              <li>Add the pecks from both farms to get the total</li>
              <li>To convert pecks to bushels, divide by 4</li>
            </ul>
          </div>
        )}

        {hasChecked && allCorrect && (
          <div className="bg-green-100 p-4 rounded-lg mb-8 max-w-2xl">
            <p className="text-lg font-medium text-green-700">Great job! You've correctly set up all the steps.</p>
            <p className="text-green-600">Now let's solve the problem completely!</p>
          </div>
        )}

        <PageNavigation prevHref="/lesson/visualization" nextHref="/lesson/solve" nextDisabled={!allCorrect} />
      </div>
    </PageContainer>
  )
}
