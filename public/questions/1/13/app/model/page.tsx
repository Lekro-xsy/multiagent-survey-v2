"use client"

import { useState } from "react"
import { Check, X } from "lucide-react"

import { PageLayout } from "@/components/page-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ModelPage() {
  const [xValue, setXValue] = useState("")
  const [yValue, setYValue] = useState("")
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [showFormula, setShowFormula] = useState(false)

  const handleCheck = () => {
    const isXCorrect = xValue === "6"
    const isYCorrect = yValue === "8"

    setIsCorrect(isXCorrect && isYCorrect)

    if (isXCorrect && isYCorrect) {
      setShowFormula(true)
    }
  }

  return (
    <PageLayout>
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-3xl font-bold text-center">🏗️ Setting Up the Expression</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>The Working Together Formula</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-6 bg-yellow-50 rounded-lg mb-6">
              <h3 className="font-bold text-xl mb-4">When two people work together:</h3>
              <div className="flex justify-center">
                <div className="text-center">
                  <div className="text-2xl font-mono p-4 bg-white rounded-lg shadow-sm">
                    Time = <span className="text-red-600">(x × y)</span> ÷{" "}
                    <span className="text-blue-600">(x + y)</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Where x and y are the individual times to complete the task
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-lg mb-4">Identify the values in our problem:</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="x-value">Your time (x) =</Label>
                    <div className="flex items-center mt-1">
                      <Input
                        id="x-value"
                        value={xValue}
                        onChange={(e) => setXValue(e.target.value)}
                        className="text-center"
                      />
                      <span className="ml-2">minutes</span>
                      {isCorrect !== null && (
                        <span className="ml-2">
                          {xValue === "6" ? (
                            <Check className="h-5 w-5 text-green-500" />
                          ) : (
                            <X className="h-5 w-5 text-red-500" />
                          )}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="y-value">Brother's time (y) =</Label>
                    <div className="flex items-center mt-1">
                      <Input
                        id="y-value"
                        value={yValue}
                        onChange={(e) => setYValue(e.target.value)}
                        className="text-center"
                      />
                      <span className="ml-2">minutes</span>
                      {isCorrect !== null && (
                        <span className="ml-2">
                          {yValue === "8" ? (
                            <Check className="h-5 w-5 text-green-500" />
                          ) : (
                            <X className="h-5 w-5 text-red-500" />
                          )}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button onClick={handleCheck} size="lg">
                  Check Values
                </Button>
              </div>

              {showFormula && (
                <div className="mt-6 p-6 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="font-bold text-lg mb-4">Great! Now we can set up our formula:</h3>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-xl font-mono p-3 bg-white rounded-lg inline-block">
                        Time = (6 × 8) ÷ (6 + 8)
                      </div>
                    </div>
                    <p>
                      This formula works because when people work together, their <strong>work rates</strong> add up.
                      The work rate is the fraction of the job completed per unit time, which is 1/x for you and 1/y for
                      your brother.
                    </p>
                    <p>
                      Combined rate = 1/x + 1/y = (y + x)/(xy)
                      <br />
                      Time = 1/(Combined rate) = xy/(x + y)
                    </p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  )
}
