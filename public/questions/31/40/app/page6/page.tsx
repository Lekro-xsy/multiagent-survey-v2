"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Play, Pause, RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import PageLayout from "@/components/page-layout"
import { Stopwatch } from "@/components/stopwatch"

export default function Page6() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <PageLayout title="🎯 Check Your Work!" currentPage={6} totalPages={9}>
      <Card className="border-2 border-green-200 shadow-lg">
        <CardHeader className="bg-green-50">
          <CardTitle className="text-2xl text-green-800">🎯 Check Your Work!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="rounded-lg bg-blue-50 p-6">
            <h3 className="mb-4 text-xl font-semibold text-blue-800">Complete Solution:</h3>

            <div className="space-y-4">
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <h4 className="mb-2 font-medium text-gray-800">Step 1: Set up the equation</h4>
                <div className="rounded-lg bg-gray-100 p-3 text-center">
                  <p className="text-lg font-medium">Time = Distance ÷ Speed</p>
                  <p className="mt-2">Time = 3 miles ÷ 5 miles/hour</p>
                </div>
              </div>

              <div className="rounded-lg bg-white p-4 shadow-sm">
                <h4 className="mb-2 font-medium text-gray-800">Step 2: Solve for time</h4>
                <div className="rounded-lg bg-gray-100 p-3 text-center">
                  <p className="text-lg font-medium">Time = 3 ÷ 5 = 0.6 hours</p>
                </div>
              </div>

              <div className="rounded-lg bg-white p-4 shadow-sm">
                <h4 className="mb-2 font-medium text-gray-800">Step 3: Convert hours to minutes</h4>
                <div className="rounded-lg bg-gray-100 p-3 text-center">
                  <p className="text-lg font-medium">0.6 hours × 60 minutes/hour = 36 minutes</p>
                </div>
              </div>

              <div className="rounded-lg bg-green-100 p-4">
                <h4 className="mb-2 font-medium text-green-800">Conclusion:</h4>
                <p className="text-green-800">
                  Jogging at 5 mph, you would take <strong>36 minutes</strong> — longer than 30 minutes! So 5 mph is{" "}
                  <strong>not fast enough</strong> to meet your goal.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-yellow-100 p-6">
            <h3 className="mb-4 text-center text-lg font-semibold text-yellow-800">Visual Recap:</h3>
            <div className="flex flex-col items-center">
              <p className="mb-3 text-yellow-800">Watch how long it takes to jog 3 miles at 5 mph:</p>

              <Stopwatch isPlaying={isPlaying} goalTime={30} actualTime={36} />

              <div className="mt-4 flex gap-2">
                <Button variant="outline" size="sm" onClick={() => setIsPlaying(!isPlaying)}>
                  {isPlaying ? (
                    <>
                      <Pause className="mr-1 h-4 w-4" />
                      Pause
                    </>
                  ) : (
                    <>
                      <Play className="mr-1 h-4 w-4" />
                      Play
                    </>
                  )}
                </Button>
                <Button variant="outline" size="sm" onClick={() => setIsPlaying(false)}>
                  <RefreshCw className="mr-1 h-4 w-4" />
                  Reset
                </Button>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-red-100 p-4 text-center">
            <p className="text-red-800">
              <strong>Key Finding:</strong> To meet your 30-minute goal, you need to jog faster than 5 miles per hour!
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between pb-6">
          <Link href="/page5">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
          </Link>
          <Link href="/page7">
            <Button className="bg-green-600 hover:bg-green-700">
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </PageLayout>
  )
}
