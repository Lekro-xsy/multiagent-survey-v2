"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ContextPage() {
  const [showItems, setShowItems] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-white py-4 shadow-sm">
        <div className="container flex items-center justify-between">
          <h1 className="text-xl font-bold">Math Learning Journey</h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Page 1 of 9</span>
          </div>
        </div>
      </header>
      <main className="container flex-1 py-12">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight">💼 A Busy Morning for the Salesman!</h1>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="mb-6 aspect-video relative rounded-lg overflow-hidden bg-muted">
                <Image
                  src="/electronics-vendor.png"
                  alt="Salesman at a booth with calculators and pocket radios"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4">
                <p className="text-lg">
                  This morning, a salesman earned a <strong>$2.75 commission</strong> for every item he sold. He sold{" "}
                  <strong>17 calculators</strong> and <strong>12 pocket radios</strong>. How much money did he earn in
                  total?
                </p>

                {!showItems ? (
                  <Button size="lg" className="w-full" onClick={() => setShowItems(true)}>
                    Count the Sales
                  </Button>
                ) : (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <h3 className="font-medium">Calculators Sold:</h3>
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
                              <span className="text-xs">🧮</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-medium">Pocket Radios Sold:</h3>
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
                              <span className="text-xs">📻</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Link href="/lesson/breakdown">
                      <Button size="lg" className="w-full">
                        Continue to Problem Breakdown
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
