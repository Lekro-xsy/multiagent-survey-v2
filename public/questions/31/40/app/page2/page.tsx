"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import PageLayout from "@/components/page-layout"
import { DragDropFacts } from "@/components/drag-drop-facts"

export default function Page2() {
  const [completed, setCompleted] = useState(false)

  return (
    <PageLayout title="🧩 Let's Organize the Details" currentPage={2} totalPages={9}>
      <Card className="border-2 border-green-200 shadow-lg">
        <CardHeader className="bg-green-50">
          <CardTitle className="text-2xl text-green-800">🧩 Let's Organize the Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="rounded-lg bg-blue-50 p-6">
            <h3 className="mb-4 text-xl font-semibold text-blue-800">Important Facts:</h3>

            <div className="space-y-4">
              <div className="rounded-lg bg-white p-3 shadow-sm">
                <p className="font-medium text-gray-800">
                  <span className="mr-2 inline-block rounded-full bg-blue-200 px-2 py-1 text-xs font-bold text-blue-800">
                    Distance
                  </span>
                  <span>
                    to jog = <strong className="text-blue-700">3 miles</strong>
                  </span>
                </p>
              </div>

              <div className="rounded-lg bg-white p-3 shadow-sm">
                <p className="font-medium text-gray-800">
                  <span className="mr-2 inline-block rounded-full bg-green-200 px-2 py-1 text-xs font-bold text-green-800">
                    Time goal
                  </span>
                  <span>
                    = <strong className="text-green-700">30 minutes</strong>
                  </span>
                </p>
              </div>

              <div className="rounded-lg bg-white p-3 shadow-sm">
                <p className="font-medium text-gray-800">
                  <span className="mr-2 inline-block rounded-full bg-purple-200 px-2 py-1 text-xs font-bold text-purple-800">
                    Jogging speed
                  </span>
                  <span>
                    = <strong className="text-purple-700">5 miles per hour</strong>
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-yellow-100 p-4">
            <h3 className="mb-2 font-semibold text-yellow-800">⚠️ Key Reminder:</h3>
            <p className="text-yellow-800">
              Speeds are given in <strong>miles per hour (hours)</strong> — but your time goal is in{" "}
              <strong>minutes</strong>.
            </p>
          </div>

          <div className="rounded-lg bg-gray-100 p-6">
            <h3 className="mb-4 text-center text-lg font-semibold text-gray-800">Organize the Facts</h3>

            <DragDropFacts onComplete={() => setCompleted(true)} />

            {completed && (
              <div className="mt-4 flex items-center justify-center rounded-lg bg-green-100 p-3 text-green-800">
                <CheckCircle className="mr-2 h-5 w-5" />
                <span>Great job organizing the facts!</span>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between pb-6">
          <Link href="/page1">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
          </Link>
          <Link href="/page3">
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
