"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Check, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function FarTransferPage() {
  const [expression, setExpression] = useState("")
  const [total, setTotal] = useState("")
  const [explanation, setExplanation] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const isExpressionCorrect =
    expression.replace(/\s+/g, "") === "4.50×20+4.50×15" || expression.replace(/\s+/g, "") === "(4.50×20)+(4.50×15)"

  const isTotalCorrect = Number.parseFloat(total) === 157.5

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-white py-4 shadow-sm">
        <div className="container flex items-center justify-between">
          <h1 className="text-xl font-bold">Math Learning Journey</h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Page 8 of 9</span>
          </div>
        </div>
      </header>
      <main className="container flex-1 py-12">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight">🚚 New Job, Same Thinking!</h1>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="text-lg">
                    <strong>New Scenario:</strong> A delivery worker earns $4.50 for each box delivered. In one day,
                    they delivered 20 boxes in the morning and 15 boxes in the afternoon. How much did they earn that
                    day?
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="expression">Write the expression:</Label>
                    <Input
                      id="expression"
                      value={expression}
                      onChange={(e) => setExpression(e.target.value)}
                      placeholder="4.50 × 20 + 4.50 × 15"
                    />
                    {submitted && (
                      <div className="flex items-center mt-1">
                        {isExpressionCorrect ? (
                          <div className="flex items-center text-green-600 text-sm">
                            <Check className="h-4 w-4 mr-1" />
                            <span>Correct!</span>
                          </div>
                        ) : (
                          <div className="flex items-center text-red-600 text-sm">
                            <X className="h-4 w-4 mr-1" />
                            <span>Try again. Apply the same pattern as the previous problems.</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="total">What is the total earnings?</Label>
                    <div className="flex items-center">
                      <span className="mr-2">$</span>
                      <Input
                        id="total"
                        value={total}
                        onChange={(e) => setTotal(e.target.value)}
                        placeholder="Enter the total amount"
                        className="flex-1"
                      />
                    </div>
                    {submitted && (
                      <div className="flex items-center mt-1">
                        {isTotalCorrect ? (
                          <div className="flex items-center text-green-600 text-sm">
                            <Check className="h-4 w-4 mr-1" />
                            <span>Correct!</span>
                          </div>
                        ) : (
                          <div className="flex items-center text-red-600 text-sm">
                            <X className="h-4 w-4 mr-1" />
                            <span>Try again. Calculate 4.50 × 20 and 4.50 × 15, then add them.</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="explanation">Explain how this problem is similar to the salesman problems:</Label>
                    <Textarea
                      id="explanation"
                      value={explanation}
                      onChange={(e) => setExplanation(e.target.value)}
                      placeholder="Explain the similarities in structure..."
                      rows={4}
                    />
                  </div>

                  {!submitted && (
                    <Button type="submit" className="w-full">
                      Check My Work
                    </Button>
                  )}
                </form>

                {submitted && isExpressionCorrect && isTotalCorrect && (
                  <div className="pt-4">
                    <Link href="/lesson/summary">
                      <Button size="lg" className="w-full">
                        Continue to Summary
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
