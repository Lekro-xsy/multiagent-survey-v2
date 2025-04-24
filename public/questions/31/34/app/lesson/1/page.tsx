"use client"

import Image from "next/image"
import { LessonLayout } from "@/components/lesson-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export default function LessonOnePage() {
  const [showExamples, setShowExamples] = useState(false)

  return (
    <LessonLayout currentPage={1} totalPages={9}>
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">🏡 Comparing in Everyday Life</h1>
          <p className="text-muted-foreground">Let's explore how we use comparisons in our daily activities</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="mb-4 flex justify-center">
                <div className="relative h-40 w-40">
                  <Image
                    src="/coaster-height-check.png"
                    alt="Height requirement"
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
              </div>
              <h3 className="font-semibold">Height Requirements</h3>
              <p className="text-sm text-muted-foreground">
                You must be <span className="font-bold text-primary">over 48 inches</span> to ride a roller coaster.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="mb-4 flex justify-center">
                <div className="relative h-40 w-40">
                  <Image src="/budget-conscious-shopping.png" alt="Budget limit" fill className="rounded-md object-cover" />
                </div>
              </div>
              <h3 className="font-semibold">Budget Limits</h3>
              <p className="text-sm text-muted-foreground">
                You can't spend <span className="font-bold text-primary">more than $50</span> on a gift.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="mb-4 flex justify-center">
                <div className="relative h-40 w-40">
                  <Image src="/placeholder.svg?key=jqhm0" alt="Time limit" fill className="rounded-md object-cover" />
                </div>
              </div>
              <h3 className="font-semibold">Time Limits</h3>
              <p className="text-sm text-muted-foreground">
                The movie must be <span className="font-bold text-primary">less than 2 hours</span> long.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="rounded-lg bg-muted p-6">
          <p className="mb-4 text-lg">
            These comparisons create <span className="font-bold">inequality relationships</span> — mathematical ways to
            express ranges of values rather than exact amounts.
          </p>
          <p className="mb-6">
            In our daily lives, we often need to express that something is greater than, less than, at least, or at most
            some value.
          </p>
          <div className="flex justify-center">
            <Button onClick={() => setShowExamples(!showExamples)}>
              {showExamples ? "Hide Examples" : "See Examples"}
            </Button>
          </div>

          {showExamples && (
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Card>
                <CardContent className="p-4">
                  <h3 className="mb-2 font-semibold">Speed Limits</h3>
                  <p className="text-sm">
                    Drive <span className="font-bold text-primary">under 65 mph</span> on this highway.
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    This means any speed from 0 up to (but not including) 65 mph is acceptable.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h3 className="mb-2 font-semibold">Age Requirements</h3>
                  <p className="text-sm">
                    You must be <span className="font-bold text-primary">at least 13 years old</span> to create an
                    account.
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    This means 13 years old or any age greater than 13 is acceptable.
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </LessonLayout>
  )
}
