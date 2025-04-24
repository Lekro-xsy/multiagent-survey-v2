"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import PageLayout from "@/components/page-layout"
import { FormulaTriangle } from "@/components/formula-triangle"

export default function Page3() {
  const [selectedFormula, setSelectedFormula] = useState<string | null>(null)

  return (
    <PageLayout title="📊 How Speed, Time, and Distance Connect" currentPage={3} totalPages={9}>
      <Card className="border-2 border-green-200 shadow-lg">
        <CardHeader className="bg-green-50">
          <CardTitle className="text-2xl text-green-800">📊 How Speed, Time, and Distance Connect</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="rounded-lg bg-blue-50 p-6">
            <h3 className="mb-4 text-center text-xl font-semibold text-blue-800">
              The Distance-Speed-Time Relationship
            </h3>

            <FormulaTriangle selectedFormula={selectedFormula} setSelectedFormula={setSelectedFormula} />

            <div className="mt-6 text-center">
              <p className="text-blue-800">
                Click on each part of the triangle to see the different forms of the formula.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-yellow-100 p-6">
            <h3 className="mb-2 text-center text-lg font-semibold text-yellow-800">Concept Tip:</h3>
            <div className="flex flex-col items-center justify-center">
              <p className="mb-3 text-yellow-800">To solve for time, we use:</p>
              <div className="rounded-lg bg-white p-4 text-center">
                <p className="text-xl font-medium text-gray-800">
                  Time = <span className="border-b-2 border-yellow-400">Distance</span> ÷{" "}
                  <span className="text-purple-700">Speed</span>
                </p>
              </div>
              <div className="mt-4 text-center">
                <p className="text-yellow-800">
                  This will tell us how long it will take to travel a certain distance at a given speed.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-green-100 p-4 text-center">
            <p className="text-green-800">
              For our jogging problem, we need to find out how long it will take to jog 3 miles at 5 miles per hour.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between pb-6">
          <Link href="/page2">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
          </Link>
          <Link href="/page4">
            <Button className="bg-green-600 hover:bg-green-700" disabled={!selectedFormula}>
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </PageLayout>
  )
}
