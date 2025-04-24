"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LightbulbIcon } from "lucide-react"

export default function CalculatePage() {
  const [formula, setFormula] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-100">
      <div className="container mx-auto px-4 py-12">
        <Card className="p-8 shadow-lg">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Build Your Own Model!</h1>

            <div className="p-6 bg-blue-50 rounded-lg border border-blue-200 max-w-2xl mb-8">
              <p className="text-lg">
                Write a formula to calculate how many times brighter Dazzling is compared to Illuminated.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="w-full max-w-md mb-8">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="formula">Your Calculation:</Label>
                  <Input
                    id="formula"
                    value={formula}
                    onChange={(e) => setFormula(e.target.value)}
                    placeholder="e.g., 9 × 9 = 81"
                    className="text-lg font-mono"
                  />
                </div>

                <Button type="submit" className="w-full" disabled={submitted || !formula}>
                  Submit Your Answer
                </Button>
              </div>
            </form>

            {submitted && (
              <div className="p-4 bg-green-100 rounded-lg border border-green-300 max-w-xl mb-8 flex items-center">
                <LightbulbIcon className="h-6 w-6 text-green-600 mr-2" />
                <p className="text-lg font-medium text-green-800">
                  Great job! Let's see the correct answer on the next page.
                </p>
              </div>
            )}

            <div className="mt-8 flex justify-between w-full max-w-xl">
              <Link href="/model">
                <Button variant="outline">Previous</Button>
              </Link>
              <Link href="/answer">
                <Button disabled={!submitted}>Next: See the Answer</Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
