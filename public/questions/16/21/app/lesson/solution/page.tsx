"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SolutionPage() {
  const [step, setStep] = useState(1)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-white py-4 shadow-sm">
        <div className="container flex items-center justify-between">
          <h1 className="text-xl font-bold">Math Learning Journey</h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Page 6 of 9</span>
          </div>
        </div>
      </header>
      <main className="container flex-1 py-12">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight">✅ Let's Check Your Work!</h1>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Solution Walkthrough</h2>

                  <div className="space-y-6">
                    <div className={`transition-opacity duration-300 ${step >= 1 ? "opacity-100" : "opacity-0"}`}>
                      <h3 className="font-medium mb-2">Step 1: Calculate earnings from calculators</h3>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="flex items-center justify-center text-lg">
                          <div className="grid grid-cols-3 gap-4 text-center">
                            <div className="font-medium">2.75</div>
                            <div>×</div>
                            <div className="font-medium">17</div>
                            <div className="col-span-2"></div>
                            <div className="font-medium">=</div>
                            <div className="col-span-2"></div>
                            <div className="font-medium text-blue-700">46.75</div>
                          </div>
                        </div>
                        <p className="text-center mt-2 text-blue-700 font-medium">2.75 × 17 = 46.75</p>
                      </div>
                    </div>

                    <div className={`transition-opacity duration-300 ${step >= 2 ? "opacity-100" : "opacity-0"}`}>
                      <h3 className="font-medium mb-2">Step 2: Calculate earnings from pocket radios</h3>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="flex items-center justify-center text-lg">
                          <div className="grid grid-cols-3 gap-4 text-center">
                            <div className="font-medium">2.75</div>
                            <div>×</div>
                            <div className="font-medium">12</div>
                            <div className="col-span-2"></div>
                            <div className="font-medium">=</div>
                            <div className="col-span-2"></div>
                            <div className="font-medium text-green-700">33.00</div>
                          </div>
                        </div>
                        <p className="text-center mt-2 text-green-700 font-medium">2.75 × 12 = 33.00</p>
                      </div>
                    </div>

                    <div className={`transition-opacity duration-300 ${step >= 3 ? "opacity-100" : "opacity-0"}`}>
                      <h3 className="font-medium mb-2">Step 3: Add the subtotals to find total earnings</h3>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <div className="flex items-center justify-center text-lg">
                          <div className="grid grid-cols-3 gap-4 text-center">
                            <div className="font-medium text-blue-700">46.75</div>
                            <div>+</div>
                            <div className="font-medium text-green-700">33.00</div>
                            <div className="col-span-2"></div>
                            <div className="font-medium">=</div>
                            <div className="col-span-2"></div>
                            <div className="font-medium text-purple-700">$79.75</div>
                          </div>
                        </div>
                        <p className="text-center mt-2 text-purple-700 font-medium">46.75 + 33.00 = $79.75</p>
                      </div>
                    </div>
                  </div>

                  {step < 3 && (
                    <Button onClick={() => setStep(step + 1)} className="w-full mt-4">
                      Next Step
                    </Button>
                  )}

                  {step === 3 && (
                    <div className="space-y-4 mt-6">
                      <div className="bg-muted/30 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">Conclusion:</h3>
                        <p className="text-lg font-medium">The salesman earned $79.75 in commission this morning.</p>
                      </div>

                      <Link href="/lesson/transfer">
                        <Button size="lg" className="w-full">
                          Continue to Next Problem
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
