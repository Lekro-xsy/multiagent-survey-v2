"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function SimilarPage() {
  const [answer, setAnswer] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [showSolution, setShowSolution] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-100">
      <div className="container mx-auto px-4 py-12">
        <Card className="p-8 shadow-lg">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Try a Similar Problem!</h1>

            <div className="p-6 bg-blue-50 rounded-lg border border-blue-200 max-w-2xl mb-8">
              <p className="text-lg">
                Each level is 6 times brighter than the previous level. How many times brighter is Glimmering compared
                to Shiny?
              </p>
            </div>

            <CardContent className="w-full max-w-xl mb-8">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-center">Light Category</TableHead>
                    <TableHead className="text-center">Level</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { category: "Faint", level: 1 },
                    { category: "Shiny", level: 2 },
                    { category: "Gleaming", level: 3 },
                    { category: "Glimmering", level: 4 },
                  ].map((item) => (
                    <TableRow key={item.category}>
                      <TableCell className="text-center font-medium">{item.category}</TableCell>
                      <TableCell className="text-center">{item.level}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>

            <form onSubmit={handleSubmit} className="w-full max-w-md mb-8">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="answer">Your Answer:</Label>
                  <Input
                    id="answer"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Enter your answer"
                    className="text-lg"
                    disabled={submitted}
                  />
                </div>

                <Button type="submit" className="w-full" disabled={submitted || !answer}>
                  Submit Your Answer
                </Button>
              </div>
            </form>

            {submitted && (
              <div className="w-full max-w-xl">
                <Button
                  onClick={() => setShowSolution(true)}
                  variant="outline"
                  className="w-full mb-4"
                  disabled={showSolution}
                >
                  Show Solution
                </Button>

                {showSolution && (
                  <div className="p-6 bg-white rounded-lg shadow-md space-y-4">
                    <p className="text-lg">Gleaming is 6 times brighter than Shiny.</p>
                    <p className="text-lg">Glimmering is 6 times brighter than Gleaming.</p>
                    <p className="text-lg font-bold">So Glimmering is 6 × 6 = 36 times brighter than Shiny!</p>
                  </div>
                )}
              </div>
            )}

            <div className="mt-8 flex justify-between w-full max-w-xl">
              <Link href="/answer">
                <Button variant="outline">Previous</Button>
              </Link>
              <Link href="/transfer">
                <Button disabled={!submitted}>Next: Transfer Problem</Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
