"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ModelPage() {
  const [mpgValue, setMpgValue] = useState("")
  const [generalExpression, setGeneralExpression] = useState("")
  const [isCorrect, setIsCorrect] = useState(false)

  const checkAnswers = () => {
    const mpgCorrect = Number.parseFloat(mpgValue) === 19 || Number.parseFloat(mpgValue) === 19.0
    const expressionCorrect =
      generalExpression.replace(/\s+/g, "").toLowerCase() === "distance=19.0×g" ||
      generalExpression.replace(/\s+/g, "").toLowerCase() === "distance=19×g"

    setIsCorrect(mpgCorrect && expressionCorrect)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex items-center justify-between">
            <Link href="/visualize">
              <Button variant="ghost" className="flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" /> Back
              </Button>
            </Link>
            <div className="text-sm text-slate-500">Page 4 of 9</div>
          </div>

          <div className="mb-4 rounded-xl bg-amber-50 p-6 shadow-lg">
            <h1 className="mb-6 flex items-center gap-2 text-3xl font-bold text-slate-800">
              <Calculator className="h-8 w-8 text-amber-600" /> Build the Mathematical Expression
            </h1>

            <div className="mb-6 rounded-xl bg-white p-4 shadow-md">
              <h2 className="mb-4 text-xl font-semibold text-slate-700">Guided Mathematical Model Setup</h2>

              <div className="mb-6 space-y-6">
                <div className="rounded-lg bg-slate-50 p-4">
                  <h3 className="mb-3 text-lg font-medium text-slate-700">Step 1: Find miles per gallon</h3>
                  <div className="flex flex-col items-center gap-2 md:flex-row md:justify-center">
                    <div className="flex items-center">
                      <span className="text-lg">200</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mx-2 text-lg">÷</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-lg">10.5</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mx-2 text-lg">=</span>
                    </div>
                    <div className="flex items-center">
                      <Input
                        type="text"
                        value={mpgValue}
                        onChange={(e) => setMpgValue(e.target.value)}
                        className="w-24 text-center"
                        placeholder="?"
                      />
                    </div>
                  </div>
                  <p className="mt-2 text-center text-sm text-slate-500">(Round to the nearest tenth)</p>
                </div>

                <div className="rounded-lg bg-blue-50 p-4">
                  <h3 className="mb-3 text-lg font-medium text-blue-700">Step 2: Build the general expression</h3>
                  <p className="mb-4 text-blue-600">
                    Now that we know the miles per gallon, we can create a formula to calculate the total distance for
                    any amount of fuel.
                  </p>

                  <div className="mb-4">
                    <div className="mb-2 flex flex-wrap items-center justify-center gap-2">
                      <span className="text-lg font-medium">Distance</span>
                      <span className="text-lg">=</span>
                      <span className="text-lg">(</span>
                      <span className="text-lg font-medium">Miles per gallon</span>
                      <span className="text-lg">)</span>
                      <span className="text-lg">×</span>
                      <span className="text-lg italic">g</span>
                    </div>
                    <p className="text-center text-sm text-blue-600">
                      where <span className="italic">g</span> = gallons used
                    </p>
                  </div>

                  <div className="mt-4">
                    <label className="mb-2 block text-center text-blue-700">
                      Write the general expression using the value we calculated:
                    </label>
                    <div className="flex justify-center">
                      <Input
                        type="text"
                        value={generalExpression}
                        onChange={(e) => setGeneralExpression(e.target.value)}
                        className="max-w-xs text-center"
                        placeholder="Distance = ? × g"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <Button onClick={checkAnswers} className="bg-amber-600 hover:bg-amber-700">
                  Check My Work
                </Button>
              </div>

              {isCorrect && (
                <div className="mt-4 rounded-lg bg-emerald-100 p-4 text-center">
                  <h3 className="text-lg font-medium text-emerald-700">Correct!</h3>
                  <p className="text-emerald-600">
                    You've successfully built the mathematical model. Now we can use this to solve our problem.
                  </p>
                </div>
              )}
            </div>

            <div className="flex justify-between">
              <Link href="/visualize">
                <Button variant="outline">
                  <ArrowLeft className="mr-1 h-4 w-4" /> Previous
                </Button>
              </Link>
              <Link href="/solve">
                <Button className="bg-emerald-600 hover:bg-emerald-700" disabled={!isCorrect}>
                  Continue <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
