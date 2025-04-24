import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function FullSolutionPage() {
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
            <CardTitle className="text-2xl">🎯 Check Your Reasoning!</CardTitle>
            <CardDescription>Full solution and explanation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="mx-auto max-w-2xl space-y-6">
              <div className="rounded-lg bg-blue-50 p-4">
                <h3 className="mb-2 text-center text-lg font-medium text-blue-700">Setting Up the Inequality</h3>
                <div className="space-y-4">
                  <p>
                    <strong>Step 1:</strong> Identify the fixed and variable parts of Tony's earnings.
                  </p>
                  <ul className="list-inside list-disc space-y-2">
                    <li>Fixed earnings: $10 per day × 5 days = $50 per week</li>
                    <li>Variable earnings: $2 per CD × number of CDs sold</li>
                  </ul>
                  <p>
                    <strong>Step 2:</strong> Write an expression for Tony's total weekly earnings.
                  </p>
                  <p className="text-center">Total earnings = $50 + $2 × (number of CDs sold)</p>
                  <p>
                    <strong>Step 3:</strong> Set up the inequality using Tony's goal.
                  </p>
                  <p className="text-center">$50 + $2x ≥ $150</p>
                  <p className="text-sm text-blue-600">(where x is the number of CDs sold)</p>
                </div>
              </div>

              <div className="rounded-lg bg-purple-50 p-4">
                <h3 className="mb-2 text-center text-lg font-medium text-purple-700">Solving the Inequality</h3>
                <div className="space-y-4">
                  <p>
                    <strong>Step 1:</strong> Isolate the variable term by subtracting 50 from both sides.
                  </p>
                  <p className="text-center">$50 + $2x ≥ $150</p>
                  <p className="text-center">$2x ≥ $150 - $50</p>
                  <p className="text-center">$2x ≥ $100</p>
                  <p>
                    <strong>Step 2:</strong> Divide both sides by 2 to solve for x.
                  </p>
                  <p className="text-center">$2x ≥ $100</p>
                  <p className="text-center">x ≥ $100 ÷ $2</p>
                  <p className="text-center font-bold">x ≥ 50</p>
                </div>
              </div>

              <div className="rounded-lg bg-green-50 p-4">
                <h3 className="mb-2 text-center text-lg font-medium text-green-700">Testing with 30 CDs</h3>
                <div className="space-y-4">
                  <p>
                    <strong>Substituting x = 30:</strong>
                  </p>
                  <p className="text-center">$50 + $2(30) = $50 + $60 = $110</p>
                  <p>
                    <strong>Conclusion:</strong>
                  </p>
                  <p className="text-center">$110 is less than $150, so selling 30 CDs is not enough.</p>
                  <div className="mt-4">
                    <div className="mb-1 flex justify-between text-sm">
                      <span>$0</span>
                      <span className="font-medium">Weekly Goal: $150</span>
                      <span>$200</span>
                    </div>
                    <div className="h-6 w-full overflow-hidden rounded-full bg-gray-200">
                      <div className="h-full bg-amber-500" style={{ width: `${(110 / 200) * 100}%` }}></div>
                    </div>
                    <p className="mt-2 text-center text-amber-600">
                      Tony would earn $110, which is $40 short of his goal.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-amber-50 p-4">
                <h3 className="mb-2 text-center text-lg font-medium text-amber-700">Final Answer</h3>
                <p className="text-center text-lg">
                  Tony needs to sell <strong>at least 50 CDs per week</strong> to earn at least $150.
                </p>
                <div className="mt-4">
                  <div className="mb-1 flex justify-between text-sm">
                    <span>$0</span>
                    <span className="font-medium">Weekly Goal: $150</span>
                    <span>$200</span>
                  </div>
                  <div className="h-6 w-full overflow-hidden rounded-full bg-gray-200">
                    <div className="h-full bg-green-500" style={{ width: `${(150 / 200) * 100}%` }}></div>
                  </div>
                  <p className="mt-2 text-center text-green-600">
                    With 50 CDs, Tony would earn exactly $150, meeting his goal.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/test-solution">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" /> Back
              </Button>
            </Link>
            <Link href="/transfer-similar">
              <Button className="gap-2">
                Try Another Example <ArrowRight className="h-4 w-4" />
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
