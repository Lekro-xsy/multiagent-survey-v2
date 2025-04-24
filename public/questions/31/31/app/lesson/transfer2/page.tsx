"use client"

import { useState } from "react"
import { PageContainer } from "@/components/page-container"
import { PageNavigation } from "@/components/page-navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Transfer2Page() {
  const [answers, setAnswers] = useState({
    worker2Boxes: "",
    totalBoxes: "",
    totalPallets: "",
  })

  const [isCorrect, setIsCorrect] = useState({
    worker2Boxes: false,
    totalBoxes: false,
    totalPallets: false,
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
      worker2Boxes: answers.worker2Boxes.trim() === "34",
      totalBoxes: answers.totalBoxes.trim() === "51",
      totalPallets: answers.totalPallets.trim() === "12.75",
    })

    setHasChecked(true)
  }

  const allCorrect = Object.values(isCorrect).every((value) => value === true)

  return (
    <PageContainer title="🚀 Same Math, Different Story!" pageNumber={8} totalPages={9}>
      <div className="flex flex-col items-center">
        <div className="bg-amber-50 p-6 rounded-lg shadow-md max-w-2xl mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">New Context:</h2>

          <div className="bg-white p-4 rounded-lg mb-6">
            <p className="text-lg mb-4">
              At a warehouse, one worker stacks <span className="font-bold text-blue-600">17 boxes</span>.
            </p>
            <p className="text-lg mb-4">
              Another worker stacks <span className="font-bold text-blue-600">twice as many</span> boxes.
            </p>
            <p className="text-lg mb-4">
              Each pallet holds <span className="font-bold text-blue-600">4 boxes</span>.
            </p>
            <p className="text-lg">How many pallets did they fill together?</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg">
              <p className="font-medium mb-2">How many boxes did Worker 2 stack?</p>
              <div className="flex items-center gap-2">
                <Input
                  value={answers.worker2Boxes}
                  onChange={(e) => handleChange("worker2Boxes", e.target.value)}
                  placeholder="Enter number"
                  className={`w-32 ${hasChecked && (isCorrect.worker2Boxes ? "border-green-500" : "border-red-500")}`}
                />
                <span>boxes</span>
              </div>
              {hasChecked && !isCorrect.worker2Boxes && (
                <p className="text-red-500 text-sm mt-1">Try again! (Hint: 2 × 17)</p>
              )}
            </div>

            <div className="bg-white p-4 rounded-lg">
              <p className="font-medium mb-2">How many boxes did both workers stack in total?</p>
              <div className="flex items-center gap-2">
                <Input
                  value={answers.totalBoxes}
                  onChange={(e) => handleChange("totalBoxes", e.target.value)}
                  placeholder="Enter number"
                  className={`w-32 ${hasChecked && (isCorrect.totalBoxes ? "border-green-500" : "border-red-500")}`}
                />
                <span>boxes</span>
              </div>
              {hasChecked && !isCorrect.totalBoxes && (
                <p className="text-red-500 text-sm mt-1">Try again! (Hint: 17 + 34)</p>
              )}
            </div>

            <div className="bg-white p-4 rounded-lg">
              <p className="font-medium mb-2">How many pallets did they fill in total?</p>
              <div className="flex items-center gap-2">
                <Input
                  value={answers.totalPallets}
                  onChange={(e) => handleChange("totalPallets", e.target.value)}
                  placeholder="Enter number"
                  className={`w-32 ${hasChecked && (isCorrect.totalPallets ? "border-green-500" : "border-red-500")}`}
                />
                <span>pallets</span>
              </div>
              {hasChecked && !isCorrect.totalPallets && (
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
              <li>This problem has the same mathematical structure as the apple problem</li>
              <li>Boxes are like pecks, pallets are like bushels</li>
              <li>The conversion rate is the same: 4 boxes = 1 pallet</li>
              <li>Follow the same steps: multiply, add, then divide</li>
            </ul>
          </div>
        )}

        {hasChecked && allCorrect && (
          <div className="bg-green-100 p-4 rounded-lg mb-8 max-w-2xl">
            <p className="text-lg font-medium text-green-700">
              Excellent! You've recognized the same mathematical pattern in a different context.
            </p>
            <p className="text-green-600">
              This shows you can apply the same math skills to different real-world situations.
            </p>
          </div>
        )}

        <PageNavigation prevHref="/lesson/transfer1" nextHref="/lesson/summary" nextDisabled={!allCorrect} />
      </div>
    </PageContainer>
  )
}
