"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import PageLayout from "@/components/page-layout"
import { EquationBuilder } from "@/components/equation-builder"

export default function Page4() {
  const [completed, setCompleted] = useState(false)

  return (
    <PageLayout title="🧮 Building the Equation!" currentPage={4} totalPages={9}>
      <Card className="border-2 border-green-200 shadow-lg">
        <CardHeader className="bg-green-50">
          <CardTitle className="text-2xl text-green-800">🧮 Building the Equation!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="rounded-lg bg-blue-50 p-6">
            <h3 className="mb-4 text-xl font-semibold text-blue-800">Steps to Solve the Problem:</h3>

            <div className="space-y-4">
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <p className="font-medium text-gray-800">
                  <span className="mr-2 inline-block rounded-full bg-blue-200 px-2 py-1 text-xs font-bold text-blue-800">
                    Step 1
                  </span>
                  <span>
                    Identify what we're solving for: <strong className="text-blue-700">Time</strong>
                  </span>
                </p>
              </div>

              <div className="rounded-lg bg-white p-4 shadow-sm">
                <p className="font-medium text-gray-800">
                  <span className="mr-2 inline-block rounded-full bg-blue-200 px-2 py-1 text-xs font-bold text-blue-800">
                    Step 2
                  </span>
                  <span>
                    Use the formula: <strong className="text-blue-700">Time = Distance ÷ Speed</strong>
                  </span>
                </p>
              </div>

              <div className="rounded-lg bg-white p-4 shadow-sm">
                <p className="font-medium text-gray-800">
                  <span className="mr-2 inline-block rounded-full bg-blue-200 px-2 py-1 text-xs font-bold text-blue-800">
                    Step 3
                  </span>
                  <span>
                    Substitute the values: <strong className="text-blue-700">Time = 3 miles ÷ 5 miles/hour</strong>
                  </span>
                </p>
              </div>

              <div className="rounded-lg bg-white p-4 shadow-sm">
                <p className="font-medium text-gray-800">
                  <span className="mr-2 inline-block rounded-full bg-blue-200 px-2 py-1 text-xs font-bold text-blue-800">
                    Step 4
                  </span>
                  <span>
                    Notice the units: <strong className="text-blue-700">Time will be in hours</strong>
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-gray-100 p-6">
            <h3 className="mb-4 text-center text-lg font-semibold text-gray-800">Build the Equation</h3>

            <EquationBuilder onComplete={() => setCompleted(true)} />

            {completed && (
              <div className="mt-4 flex items-center justify-center rounded-lg bg-green-100 p-3 text-green-800">
                <CheckCircle className="mr-2 h-5 w-5" />
                <span>Great job building the equation!</span>
              </div>
            )}
          </div>

          <div className="rounded-lg bg-yellow-100 p-4">
            <h3 className="mb-2 font-semibold text-yellow-800">⚠️ Remember:</h3>
            <p className="text-yellow-800">
              When dividing with units, make sure to track how the units change.
              <br />
              <span className="mt-1 block">
                <strong>miles</strong> ÷ <strong>miles/hour</strong> = <strong>hours</strong>
              </span>
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between pb-6">
          <Link href="/page3">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
          </Link>
          <Link href="/page5">
            <Button className="bg-green-600 hover:bg-green-700" disabled={!completed}>
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </PageLayout>
  )
}
