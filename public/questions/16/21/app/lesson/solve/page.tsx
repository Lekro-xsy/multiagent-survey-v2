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

export default function SolvePage() {
  const [expression, setExpression] = useState("")
  const [total, setTotal] = useState("")
  const [explanation, setExplanation] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const isExpressionCorrect =
    expression.replace(/\s+/g, "") === "2.75×17+2.75×12" || expression.replace(/\s+/g, "") === "(2.75×17)+(2.75×12)"

  const isTotalCorrect = Number.parseFloat(total) === 79.75

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-white py-4 shadow-sm">
        <div className="container flex items-center justify-between">
          <h1 className="text-xl font-bold">Math Learning Journey</h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Page 5 of 9</span>
          </div>
        </div>
      </header>
      <main className="container flex-1 py-12">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight">✍️ Now You Try!</h1>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="expression">Write the full expression:</Label>
                  <Input
                    id="expression"
                    value={expression}
                    onChange={(e) => setExpression(e.target.value)}
                    placeholder="2.75 × 17 + 2.75 × 12"
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
                          <span>Try again. Hint: 2.75 × 17 + 2.75 × 12</span>
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
                          <span>Try again. Calculate 2.75 × 17 and 2.75 × 12, then add them.</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="explanation">Explain your logic:</Label>
                  <Textarea
                    id="explanation"
                    value={explanation}
                    onChange={(e) => setExplanation(e.target.value)}
                    placeholder="Explain how you solved this problem..."
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
                <div className="pt-6">
                  <Link href="/lesson/solution">
                    <Button size="lg" className="w-full">
                      Continue to Solution Walkthrough
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
