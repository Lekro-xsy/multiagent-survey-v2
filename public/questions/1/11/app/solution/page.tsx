"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageLayout } from "@/components/page-layout"

export default function SolutionPage() {
  const [showAnimation, setShowAnimation] = useState(false)

  return (
    <PageLayout title="🎯 Check Your Solution!" pageNumber={6} totalPages={9}>
      <div className="space-y-8">
        <div className="bg-blue-50 p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-3">Complete Solution</h2>
          <p>Let's review the complete solution to the problem.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-bold mb-4">Step-by-Step Solution:</h3>

              <div className="space-y-4">
                <div>
                  <p className="font-medium">1. Set up the equation:</p>
                  <p className="font-mono ml-4">Building height + Flagpole height = Total height</p>
                  <p className="font-mono ml-4">7x + x = 208</p>
                </div>

                <div>
                  <p className="font-medium">2. Simplify the equation:</p>
                  <p className="font-mono ml-4">8x = 208</p>
                </div>

                <div>
                  <p className="font-medium">3. Solve for x (flagpole height):</p>
                  <p className="font-mono ml-4">x = 208 ÷ 8</p>
                  <p className="font-mono ml-4">x = 26 feet</p>
                </div>

                <div>
                  <p className="font-medium">4. Calculate building height:</p>
                  <p className="font-mono ml-4">Building height = 7x</p>
                  <p className="font-mono ml-4">Building height = 7 × 26</p>
                  <p className="font-mono ml-4">Building height = 182 feet</p>
                </div>
              </div>
            </div>

            <div className="bg-green-100 p-4 rounded-lg">
              <h3 className="font-bold text-green-800 mb-2">Final Answer:</h3>
              <p className="text-lg">
                The building is <span className="font-bold">182 feet</span> tall.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[400px]">
              <Button
                onClick={() => setShowAnimation(!showAnimation)}
                className="absolute top-0 right-0 z-10"
                variant="outline"
              >
                {showAnimation ? "Hide" : "Show"} Measurements
              </Button>

              <div className="w-full h-full relative">
                <img
                  src="/building-height-illustration.png"
                  alt="Building with flagpole and measurements"
                  className="w-full h-full object-contain"
                />

                {showAnimation && (
                  <>
                    <div className="absolute top-[15%] right-[30%] bg-red-100 px-2 py-1 rounded animate-bounce">
                      26 ft
                    </div>
                    <div className="absolute top-[50%] right-[30%] bg-blue-100 px-2 py-1 rounded animate-bounce">
                      182 ft
                    </div>
                    <div className="absolute top-[80%] right-[30%] bg-green-100 px-2 py-1 rounded animate-bounce">
                      208 ft total
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <Link href="/solve">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Previous
            </Button>
          </Link>

          <Link href="/transfer1">
            <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
              Next <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}
