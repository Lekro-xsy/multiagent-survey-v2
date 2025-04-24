"use client"

import { useState } from "react"
import { BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import BookVisualization from "./book-visualization"

interface SolutionExplanationProps {
  problem: string
  equation: string
  solution: string
}

export default function SolutionExplanation({ problem, equation, solution }: SolutionExplanationProps) {
  const [showAnimation, setShowAnimation] = useState(false)

  return (
    <div className="space-y-6">
      <div className="rounded-lg bg-slate-100 p-4">
        <h3 className="text-lg font-medium text-slate-800">Solution Walkthrough:</h3>
        <div className="mt-4 space-y-4">
          <div className="rounded-md bg-white p-3 shadow-sm">
            <p className="font-medium text-slate-800">Starting with our equation:</p>
            <p className="mt-1 text-slate-700">{equation}</p>
            <p className="mt-1 text-slate-700">n² + n - 306 = 0</p>
          </div>

          <div className="rounded-md bg-white p-3 shadow-sm">
            <p className="font-medium text-slate-800">Factoring approach:</p>
            <p className="mt-1 text-slate-700">We need to find two numbers that multiply to -306 and add to 1.</p>
            <p className="mt-1 text-slate-700">Let's try factors of 306 that are close to √306 ≈ 17.5</p>
            <div className="mt-2 overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-slate-700">Factors</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-slate-700">Product</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-slate-700">Sum</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-4 py-2 text-sm text-slate-700">17, 18</td>
                    <td className="px-4 py-2 text-sm text-slate-700">306</td>
                    <td className="px-4 py-2 text-sm text-slate-700">35</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-slate-700">-17, -18</td>
                    <td className="px-4 py-2 text-sm text-slate-700">306</td>
                    <td className="px-4 py-2 text-sm text-slate-700">-35</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="px-4 py-2 text-sm font-medium text-green-800">-18, 17</td>
                    <td className="px-4 py-2 text-sm font-medium text-green-800">-306</td>
                    <td className="px-4 py-2 text-sm font-medium text-green-800">-1</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-slate-700">
              We need the sum to be 1, not -1. Let's try again with different factors.
            </p>
          </div>

          <div className="rounded-md bg-white p-3 shadow-sm">
            <p className="font-medium text-slate-800">Correct factorization:</p>
            <p className="mt-1 text-slate-700">We need (n - a)(n - b) = n² - (a+b)n + ab = n² + n - 306</p>
            <p className="mt-1 text-slate-700">Comparing coefficients: -(a+b) = 1 and ab = -306</p>
            <p className="mt-1 text-slate-700">So a+b = -1 and ab = -306</p>
            <p className="mt-2 text-slate-700">The factors of -306 that sum to -1 are -18 and 17</p>
            <p className="mt-1 text-slate-700">So (n + 18)(n - 17) = 0</p>
            <p className="mt-1 text-slate-700">Therefore n = -18 or n = 17</p>
            <p className="mt-2 text-slate-700">Since we're looking for page numbers, which must be positive, n = 17</p>
          </div>

          <div className="rounded-md bg-green-50 p-3 text-green-800">
            <p className="font-medium">Final Answer:</p>
            <p className="mt-1">The left page is n = 17</p>
            <p className="mt-1">The right page is n + 1 = 18</p>
            <p className="mt-2 font-medium">The page numbers are 17 and 18.</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Button onClick={() => setShowAnimation(true)} className="flex items-center bg-blue-600 hover:bg-blue-700">
          <BookOpen className="mr-2 h-5 w-5" />
          Show Book with Solution
        </Button>
      </div>

      {showAnimation && (
        <div className="rounded-lg border bg-white p-4 shadow-sm">
          <BookVisualization showNumbers={true} leftPage="17" rightPage="18" showLabels={true} />
          <div className="mt-4 text-center">
            <p className="text-lg font-medium text-green-600">17 × 18 = 306 ✓</p>
          </div>
        </div>
      )}
    </div>
  )
}
