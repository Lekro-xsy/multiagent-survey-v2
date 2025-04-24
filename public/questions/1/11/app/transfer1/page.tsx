"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageLayout } from "@/components/page-layout"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Transfer1Page() {
  const [statueHeight, setStatueHeight] = useState("")
  const [pedestalHeight, setPedestalHeight] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const isStatueCorrect = statueHeight === "12"
  const isPedestalCorrect = pedestalHeight === "60"
  const isAllCorrect = isStatueCorrect && isPedestalCorrect

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <PageLayout title="🔄 Another Height Challenge!" pageNumber={7} totalPages={9}>
      <div className="space-y-8">
        <div className="bg-blue-50 p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-3">Similar Problem: Statue and Pedestal</h2>
          <div className="space-y-3">
            <p>
              A statue and its pedestal together are <span className="font-bold">72 feet</span> tall.
            </p>
            <p>
              The pedestal is <span className="font-bold">5 times</span> as tall as the statue.
            </p>
            <p className="font-bold">How tall is the pedestal?</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src="/classical-figure-study.png" alt="Statue on pedestal" className="w-full h-auto object-contain" />
          </div>

          <div className="space-y-6">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Hint:</h3>
              <p>Use the same approach as the building problem. Let x = statue height.</p>
              <p className="mt-2">Total parts: 1 part (statue) + 5 parts (pedestal) = 6 parts</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-3">
                <Label htmlFor="statue" className="text-lg">
                  Statue Height:
                </Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="statue"
                    type="text"
                    value={statueHeight}
                    onChange={(e) => setStatueHeight(e.target.value)}
                    className="text-lg"
                    placeholder="Enter value"
                  />
                  <span className="text-lg">feet</span>
                  {submitted &&
                    (isStatueCorrect ? (
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    ) : (
                      <XCircle className="h-6 w-6 text-red-600" />
                    ))}
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="pedestal" className="text-lg">
                  Pedestal Height:
                </Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="pedestal"
                    type="text"
                    value={pedestalHeight}
                    onChange={(e) => setPedestalHeight(e.target.value)}
                    className="text-lg"
                    placeholder="Enter value"
                  />
                  <span className="text-lg">feet</span>
                  {submitted &&
                    (isPedestalCorrect ? (
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    ) : (
                      <XCircle className="h-6 w-6 text-red-600" />
                    ))}
                </div>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Check My Answer
              </Button>
            </form>
          </div>
        </div>

        {submitted && isAllCorrect && (
          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="font-bold text-green-800 mb-2">Correct!</h3>
            <div className="space-y-2">
              <p>The statue is 12 feet tall, and the pedestal is 60 feet tall.</p>
              <p>Let's verify: 12 + 60 = 72 feet (total height) ✓</p>
              <p>And: 60 ÷ 12 = 5 (pedestal is 5 times as tall as statue) ✓</p>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-6">
          <Link href="/solution">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Previous
            </Button>
          </Link>

          <Link href="/transfer2">
            <Button
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
              disabled={!isAllCorrect && !submitted}
            >
              Next <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}
