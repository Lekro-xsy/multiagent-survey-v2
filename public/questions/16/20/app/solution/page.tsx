"use client"

import { useState } from "react"
import PageLayout from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

export default function SolutionPage() {
  const [step, setStep] = useState(1)
  const totalSteps = 3

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    }
  }

  const resetSteps = () => {
    setStep(1)
  }

  return (
    <PageLayout title="Let's Check It Together!" emoji="🎯">
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <p className="text-lg">
            Let's walk through the complete solution step by step to make sure we understand the process.
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Full Solution Walk-Through</h3>

            <div className="space-y-6">
              {/* Step 1: Setup */}
              <div className={`transition-opacity duration-300 ${step >= 1 ? "opacity-100" : "opacity-0"}`}>
                <h4 className="font-bold text-sky-700 mb-2">Step 1: Set up the division</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-center text-xl">
                    <span className="font-bold">523</span> ÷ <span className="font-bold">16.2</span>
                  </div>
                  <p className="mt-2 text-gray-700">
                    We divide the total miles (523) by the total gallons (16.2) to find miles per gallon.
                  </p>
                </div>
              </div>

              {/* Step 2: Calculate */}
              <div className={`transition-opacity duration-300 ${step >= 2 ? "opacity-100" : "opacity-0 hidden"}`}>
                <h4 className="font-bold text-sky-700 mb-2">Step 2: Calculate</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-center text-xl">
                    <span className="font-bold">523</span> ÷ <span className="font-bold">16.2</span> ={" "}
                    <span className="font-bold text-green-600">32.28...</span>
                  </div>
                  <p className="mt-2 text-gray-700">
                    Performing the division gives us approximately 32.28 miles per gallon.
                  </p>
                </div>
              </div>

              {/* Step 3: Round and Conclude */}
              <div className={`transition-opacity duration-300 ${step >= 3 ? "opacity-100" : "opacity-0 hidden"}`}>
                <h4 className="font-bold text-sky-700 mb-2">Step 3: Round and Conclude</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-center text-xl">
                    <span className="font-bold">32.28...</span> rounds to{" "}
                    <span className="font-bold text-green-600">32.3</span> miles per gallon
                  </div>
                  <p className="mt-2 text-gray-700">Rounding to one decimal place gives us 32.3 miles per gallon.</p>
                </div>

                <div className="mt-4 p-4 bg-green-100 rounded-lg border border-green-300">
                  <p className="font-bold text-green-800">Conclusion:</p>
                  <p className="text-green-800">
                    The motorist's gasoline consumption was <span className="font-bold">32.3 miles per gallon</span>.
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-6">
                {step < totalSteps ? (
                  <Button onClick={nextStep} className="bg-sky-600 hover:bg-sky-700 flex items-center gap-1">
                    Next Step <ChevronRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button onClick={resetSteps} variant="outline">
                    Review Again
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-sky-50 p-6 rounded-lg border border-sky-200">
          <h3 className="text-lg font-bold text-sky-800 mb-4">Visual Recap</h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-yellow-400 rounded-lg flex items-center justify-center text-3xl mx-auto">
                ⛽
              </div>
              <p className="mt-2 font-bold">1 gallon</p>
            </div>

            <div className="text-4xl">=</div>

            <div className="text-center">
              <div className="h-12 w-48 bg-sky-600 rounded-lg flex items-center justify-center text-white font-bold">
                32.3 miles
              </div>
              <p className="mt-2 font-bold">Distance traveled</p>
            </div>
          </div>

          <p className="text-center mt-6">For every gallon of gas, the motorist can travel approximately 32.3 miles.</p>
        </div>
      </div>
    </PageLayout>
  )
}
