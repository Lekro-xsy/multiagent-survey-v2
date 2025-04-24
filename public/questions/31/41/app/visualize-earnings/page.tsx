"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"

export default function VisualizeEarningsPage() {
  const [cdsSold, setCdsSold] = useState(20)

  const basePayPerDay = 10
  const daysWorked = 5
  const commissionPerCD = 2
  const weeklyGoal = 150

  const fixedEarnings = basePayPerDay * daysWorked
  const variableEarnings = commissionPerCD * cdsSold
  const totalEarnings = fixedEarnings + variableEarnings

  const goalMet = totalEarnings >= weeklyGoal

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-gradient-to-r from-purple-700 to-purple-900 py-6 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Math in Action: Inequalities</h1>
          <p className="mt-2 text-lg">Learn how to use inequalities to solve real-world problems</p>
        </div>
      </header>

      <main className="container mx-auto flex-1 px-4 py-8">
        <Card className="mx-auto max-w-4xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">📈 Fixed Pay and Commissions</CardTitle>
            <CardDescription>See how Tony's earnings change based on CD sales</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="mx-auto max-w-2xl space-y-6">
              <div className="rounded-lg bg-blue-50 p-4">
                <h3 className="mb-2 text-center text-lg font-medium text-blue-700">Weekly Fixed Earnings</h3>
                <div className="flex items-center justify-center gap-4 text-2xl">
                  <div className="flex items-center">
                    <span className="font-medium">${basePayPerDay}</span>
                    <span className="mx-2">×</span>
                    <span className="font-medium">{daysWorked}</span>
                    <span className="mx-2">=</span>
                    <span className="font-bold text-blue-700">${fixedEarnings}</span>
                  </div>
                </div>
                <p className="mt-2 text-center text-sm text-blue-600">
                  Tony earns ${basePayPerDay} per day for {daysWorked} days
                </p>
              </div>

              <div className="rounded-lg bg-purple-50 p-4">
                <h3 className="mb-2 text-center text-lg font-medium text-purple-700">
                  Variable Earnings from CD Sales
                </h3>
                <div className="flex items-center justify-center gap-4 text-2xl">
                  <div className="flex items-center">
                    <span className="font-medium">${commissionPerCD}</span>
                    <span className="mx-2">×</span>
                    <span className="font-medium">{cdsSold}</span>
                    <span className="mx-2">=</span>
                    <span className="font-bold text-purple-700">${variableEarnings}</span>
                  </div>
                </div>
                <p className="mt-2 text-center text-sm text-purple-600">
                  Tony earns ${commissionPerCD} commission for each CD sold
                </p>

                <div className="mt-6 space-y-2">
                  <div className="flex justify-between">
                    <span>0 CDs</span>
                    <span>{cdsSold} CDs</span>
                    <span>100 CDs</span>
                  </div>
                  <Slider
                    value={[cdsSold]}
                    min={0}
                    max={100}
                    step={1}
                    onValueChange={(value) => setCdsSold(value[0])}
                    className="py-4"
                  />
                </div>
              </div>

              <div className="rounded-lg bg-green-50 p-4">
                <h3 className="mb-2 text-center text-lg font-medium text-green-700">Total Weekly Earnings</h3>
                <div className="flex items-center justify-center gap-4 text-2xl">
                  <div className="flex items-center">
                    <span className="font-medium">${fixedEarnings}</span>
                    <span className="mx-2">+</span>
                    <span className="font-medium">${variableEarnings}</span>
                    <span className="mx-2">=</span>
                    <span className="font-bold text-green-700">${totalEarnings}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="mb-1 flex justify-between text-sm">
                    <span>$0</span>
                    <span className="font-medium">Weekly Goal: ${weeklyGoal}</span>
                    <span>$300</span>
                  </div>
                  <div className="h-6 w-full overflow-hidden rounded-full bg-gray-200">
                    <div
                      className={`h-full ${goalMet ? "bg-green-500" : "bg-amber-500"}`}
                      style={{ width: `${Math.min((totalEarnings / 300) * 100, 100)}%` }}
                    ></div>
                  </div>
                  <p className={`mt-2 text-center ${goalMet ? "text-green-600" : "text-amber-600"}`}>
                    {goalMet
                      ? `Goal met! Tony is earning $${totalEarnings - weeklyGoal} above his goal.`
                      : `Tony needs $${weeklyGoal - totalEarnings} more to reach his goal.`}
                  </p>
                </div>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <h3 className="mb-2 text-center text-lg font-medium">Key Concept</h3>
                <p className="text-center">Total earnings = Base salary + Earnings from CD sales</p>
                <p className="mt-2 text-center font-medium">
                  ${fixedEarnings} + ${commissionPerCD} × (number of CDs sold)
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/problem-breakdown">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" /> Back
              </Button>
            </Link>
            <Link href="/setup-inequality">
              <Button className="gap-2">
                Continue <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </main>

      <footer className="bg-gray-100 py-4 text-center text-sm text-gray-600">
        <div className="container mx-auto">
          <p>Interactive Math Lesson: Inequalities Through Real-World Problems</p>
        </div>
      </footer>
    </div>
  )
}
