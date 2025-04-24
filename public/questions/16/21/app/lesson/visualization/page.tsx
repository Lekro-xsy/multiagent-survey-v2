"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, DollarSign } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function VisualizationPage() {
  const [showCalculators, setShowCalculators] = useState(false)
  const [showRadios, setShowRadios] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-white py-4 shadow-sm">
        <div className="container flex items-center justify-between">
          <h1 className="text-xl font-bold">Math Learning Journey</h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Page 3 of 9</span>
          </div>
        </div>
      </header>
      <main className="container flex-1 py-12">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight">💸 How Does He Earn Commission?</h1>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="space-y-8">
                <div className="text-center">
                  <p className="text-lg">
                    The salesman earns <strong>$2.75</strong> for <em>each item</em> he sells.
                  </p>
                  <p className="text-muted-foreground mt-2">Click on each product to see how the commission adds up.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">Calculators (17 sold)</h3>
                      {!showCalculators && <Button onClick={() => setShowCalculators(true)}>Show Earnings</Button>}
                    </div>

                    {showCalculators && (
                      <div className="space-y-4 animate-in fade-in duration-300">
                        <div className="flex items-center justify-center text-lg font-medium">
                          <span className="mr-2">$2.75</span>
                          <span className="mx-2">×</span>
                          <span className="ml-2">17 calculators</span>
                        </div>

                        <div className="grid grid-cols-5 gap-2">
                          {Array.from({ length: 17 }).map((_, i) => (
                            <div
                              key={`calc-${i}`}
                              className="aspect-square bg-blue-100 rounded flex items-center justify-center text-blue-600"
                              style={{
                                animationName: "fadeIn",
                                animationDuration: "0.5s",
                                animationDelay: `${i * 0.05}s`,
                                animationFillMode: "both",
                              }}
                            >
                              <DollarSign className="h-4 w-4" />
                            </div>
                          ))}
                        </div>

                        <div className="text-center font-medium">
                          <span className="text-muted-foreground">Each calculator = $2.75 commission</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">Pocket Radios (12 sold)</h3>
                      {!showRadios && <Button onClick={() => setShowRadios(true)}>Show Earnings</Button>}
                    </div>

                    {showRadios && (
                      <div className="space-y-4 animate-in fade-in duration-300">
                        <div className="flex items-center justify-center text-lg font-medium">
                          <span className="mr-2">$2.75</span>
                          <span className="mx-2">×</span>
                          <span className="ml-2">12 pocket radios</span>
                        </div>

                        <div className="grid grid-cols-4 gap-2">
                          {Array.from({ length: 12 }).map((_, i) => (
                            <div
                              key={`radio-${i}`}
                              className="aspect-square bg-green-100 rounded flex items-center justify-center text-green-600"
                              style={{
                                animationName: "fadeIn",
                                animationDuration: "0.5s",
                                animationDelay: `${i * 0.05}s`,
                                animationFillMode: "both",
                              }}
                            >
                              <DollarSign className="h-4 w-4" />
                            </div>
                          ))}
                        </div>

                        <div className="text-center font-medium">
                          <span className="text-muted-foreground">Each radio = $2.75 commission</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Key Concept:</h3>
                  <p>
                    <strong>Same rate × number of items = subtotal</strong>
                  </p>
                  <p className="text-muted-foreground mt-2">
                    When we have multiple items with the same commission rate, we can multiply the rate by the number of
                    items to find the subtotal for each type.
                  </p>
                </div>

                {showCalculators && showRadios && (
                  <div className="pt-4">
                    <Link href="/lesson/expression">
                      <Button size="lg" className="w-full">
                        Continue to Expression Building
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
