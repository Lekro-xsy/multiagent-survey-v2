"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Check } from "lucide-react"

interface TransferProblemProps {
  title: string
  description: string
  image: string
  straightLength: number
  diameter: number
  unit: string
}

export function TransferProblem({ title, description, image, straightLength, diameter, unit }: TransferProblemProps) {
  const [radiusAnswer, setRadiusAnswer] = useState("")
  const [perimeterAnswer, setPerimeterAnswer] = useState("")
  const [areaAnswer, setAreaAnswer] = useState("")
  const [showSolution, setShowSolution] = useState(false)

  // Calculate correct answers
  const radius = diameter / 2
  const perimeter = 2 * straightLength + 2 * Math.PI * radius
  const area = straightLength * diameter + Math.PI * radius * radius

  const checkAnswers = () => {
    setShowSolution(true)
  }

  return (
    <div className="space-y-6">
      <div className="aspect-video bg-blue-50 rounded-lg overflow-hidden flex items-center justify-center">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="max-w-full max-h-full object-contain"
          crossOrigin="anonymous"
        />
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="mb-4">{description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-white p-3 rounded-lg">
            <p className="font-medium">Given Information:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                Straight sides: {straightLength} {unit}
              </li>
              <li>
                Semicircle diameter: {diameter} {unit}
              </li>
              <li>Use π ≈ 3.14</li>
            </ul>
          </div>

          <div className="bg-white p-3 rounded-lg">
            <p className="font-medium">What to Find:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Radius of the semicircles</li>
              <li>Perimeter of the entire shape</li>
              <li>Area of the entire shape</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="transfer-radius">Radius ({unit})</Label>
            <Input
              id="transfer-radius"
              value={radiusAnswer}
              onChange={(e) => setRadiusAnswer(e.target.value)}
              placeholder="Enter radius"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="transfer-perimeter">Perimeter ({unit})</Label>
            <Input
              id="transfer-perimeter"
              value={perimeterAnswer}
              onChange={(e) => setPerimeterAnswer(e.target.value)}
              placeholder="Enter perimeter"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="transfer-area">Area (square {unit})</Label>
            <Input
              id="transfer-area"
              value={areaAnswer}
              onChange={(e) => setAreaAnswer(e.target.value)}
              placeholder="Enter area"
              className="mt-1"
            />
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <Button onClick={checkAnswers}>Check Answers</Button>
        </div>

        {showSolution && (
          <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-600" />
              <h4 className="font-medium">Solution:</h4>
            </div>

            <div className="mt-3 space-y-3">
              <div>
                <p className="font-medium">Step 1: Find the radius</p>
                <p>
                  Radius = Diameter ÷ 2 = {diameter} ÷ 2 = {radius} {unit}
                </p>
              </div>

              <div>
                <p className="font-medium">Step 2: Find the perimeter</p>
                <p>Perimeter = (2 × Straight Length) + (2 × π × Radius)</p>
                <p>
                  Perimeter = (2 × {straightLength}) + (2 × 3.14 × {radius})
                </p>
                <p>
                  Perimeter = {2 * straightLength} + {(2 * Math.PI * radius).toFixed(2)}
                </p>
                <p>
                  Perimeter ≈ {perimeter.toFixed(2)} {unit}
                </p>
              </div>

              <div>
                <p className="font-medium">Step 3: Find the area</p>
                <p>Area = (Straight Length × Diameter) + (π × Radius²)</p>
                <p>
                  Area = ({straightLength} × {diameter}) + (3.14 × {radius}²)
                </p>
                <p>
                  Area = {straightLength * diameter} + {(Math.PI * radius * radius).toFixed(2)}
                </p>
                <p>
                  Area ≈ {area.toFixed(2)} square {unit}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
