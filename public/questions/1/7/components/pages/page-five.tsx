"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, XCircle } from "lucide-react"

export default function PageFive() {
  const [layerCount, setLayerCount] = useState("")
  const [formula, setFormula] = useState("")
  const [total, setTotal] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const isLayerCountCorrect = layerCount === "25"
  const isFormulaCorrect =
    formula === "25(25+1)/2" || formula === "25(26)/2" || formula === "25×26/2" || formula === "650/2"
  const isTotalCorrect = total === "325"

  const handleSubmit = () => {
    setSubmitted(true)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-center text-2xl font-bold text-blue-800">✍️ You Try It!</h2>

      <Card className="p-6">
        <div className="space-y-6">
          <div>
            <h3 className="mb-4 text-xl font-semibold text-blue-700">Your Turn to Solve</h3>
            <p className="mb-4">
              Now it's your turn to set up and solve the cola pyramid problem. Fill in each field with your answers.
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="layer-count">How many layers does the pyramid have?</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="layer-count"
                  value={layerCount}
                  onChange={(e) => setLayerCount(e.target.value)}
                  className="max-w-[100px]"
                  placeholder="?"
                />
                {submitted &&
                  (isLayerCountCorrect ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500" />
                  ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="formula">Write the sum formula with the values substituted:</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="formula"
                  value={formula}
                  onChange={(e) => setFormula(e.target.value)}
                  placeholder="n(n+1)/2 with values"
                />
                {submitted &&
                  (isFormulaCorrect ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500" />
                  ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="total">What is the total number of cartons needed?</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="total"
                  value={total}
                  onChange={(e) => setTotal(e.target.value)}
                  className="max-w-[100px]"
                  placeholder="?"
                />
                {submitted &&
                  (isTotalCorrect ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500" />
                  ))}
              </div>
            </div>
          </div>

          <Button onClick={handleSubmit} className="w-full bg-blue-600 hover:bg-blue-700">
            Check My Work
          </Button>

          {submitted && (
            <div
              className={`rounded-lg p-4 ${
                isLayerCountCorrect && isFormulaCorrect && isTotalCorrect
                  ? "bg-green-100 text-green-800"
                  : "bg-yellow-100 text-yellow-800"
              }`}
            >
              <h4 className="mb-2 font-medium">
                {isLayerCountCorrect && isFormulaCorrect && isTotalCorrect
                  ? "Great job! All answers are correct!"
                  : "Keep trying! Check your work and try again."}
              </h4>
              <ul className="ml-5 list-disc">
                {!isLayerCountCorrect && (
                  <li>The pyramid has 25 layers (from 25 cartons at the bottom to 1 at the top).</li>
                )}
                {!isFormulaCorrect && <li>The formula should be 25(25+1)/2 or 25(26)/2 or 650/2.</li>}
                {!isTotalCorrect && <li>The total number of cartons is 325.</li>}
              </ul>
            </div>
          )}
        </div>
      </Card>

      <div className="rounded-lg bg-blue-50 p-4">
        <h4 className="mb-2 font-semibold text-blue-700">Hint:</h4>
        <p>Remember to first identify how many terms (n) we're adding, then apply the formula n(n+1)/2.</p>
      </div>
    </div>
  )
}
