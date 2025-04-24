"use client"

import { LessonLayout } from "@/components/lesson-layout"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function LessonSixPage() {
  return (
    <LessonLayout currentPage={6} totalPages={9}>
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">🎯 Check Your Understanding</h1>
          <p className="text-muted-foreground">Let's review the correct answer and explanation</p>
        </div>

        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">True or False:</h2>
                <p className="text-lg">
                  "Problem situations involving words such as over, under, less than, and more than may be solved using
                  inequalities."
                </p>
              </div>

              <div className="flex items-center space-x-2 rounded-md bg-green-50 p-4 text-green-800 dark:bg-green-950 dark:text-green-300">
                <CheckCircle2 className="h-5 w-5" />
                <div className="font-semibold">Correct Answer: True</div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Full Reasoning:</h3>
                <p>
                  Words like "over," "under," "less than," and "more than" involve comparing values, not setting values
                  exactly equal to something. These comparisons lead to inequalities, not equalities.
                </p>
                <p>
                  When we use these words, we're describing a range of possible values that satisfy a condition, rather
                  than a single exact value.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="rounded-lg bg-muted p-6">
          <h2 className="mb-4 text-xl font-semibold">Visual Recap</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-4">
                <h3 className="mb-2 font-semibold">Height Requirement Example</h3>
                <p className="mb-4 text-sm">
                  "You must be <span className="font-bold text-primary">over 48 inches</span> tall to ride."
                </p>
                <div className="rounded-md bg-card p-3 text-center">
                  <p className="font-mono text-lg">h &gt; 48</p>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  This means your height must be greater than 48 inches. Any height from 48.1 inches and up would
                  satisfy this condition.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="mb-2 font-semibold">Price Limit Example</h3>
                <p className="mb-4 text-sm">
                  "The price must be <span className="font-bold text-primary">less than $50</span>."
                </p>
                <div className="rounded-md bg-card p-3 text-center">
                  <p className="font-mono text-lg">p &lt; 50</p>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  This means the price must be less than $50. Any price from $0 up to $49.99 would satisfy this
                  condition.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Key Takeaway</h2>
          <p>
            Whenever you see comparison words like "over," "under," "more than," or "less than" in a problem, they
            signal that you should use an inequality to represent the situation mathematically.
          </p>
          <div className="mt-4 rounded-md bg-amber-50 p-4 dark:bg-amber-950">
            <p className="text-sm">
              <span className="font-semibold">Remember:</span> Inequalities represent ranges of values, while equations
              represent exact values.
            </p>
          </div>
        </div>
      </div>
    </LessonLayout>
  )
}
