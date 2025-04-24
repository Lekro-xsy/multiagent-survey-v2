"use client"

import { useState } from "react"
import { LessonLayout } from "@/components/lesson-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"

export default function LessonThreePage() {
  const [overValue, setOverValue] = useState([10])
  const [underValue, setUnderValue] = useState([5])

  return (
    <LessonLayout currentPage={3} totalPages={9}>
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">📊 What the Words Look Like Mathematically</h1>
          <p className="text-muted-foreground">Visualizing inequality relationships on a number line</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-xl font-semibold">Greater Than (&gt;)</h2>
              <p className="mb-6">
                <span className="font-bold text-primary">Over</span> and{" "}
                <span className="font-bold text-primary">More than</span> indicate values greater than a specific
                number.
              </p>

              <div className="mb-4">
                <p className="mb-2 text-sm font-medium">Example: "Over {overValue[0]}"</p>
                <div className="relative mb-8 mt-6 h-8">
                  {/* Number line */}
                  <div className="absolute left-0 right-0 top-4 h-0.5 bg-gray-300"></div>

                  {/* Tick marks */}
                  {Array.from({ length: 21 }, (_, i) => (
                    <div
                      key={i}
                      className="absolute top-2 h-4 w-0.5 bg-gray-300"
                      style={{ left: `${(i / 20) * 100}%` }}
                    >
                      {i % 5 === 0 && <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs">{i}</div>}
                    </div>
                  ))}

                  {/* Highlighted area */}
                  <div
                    className="absolute top-4 h-0.5 bg-primary"
                    style={{
                      left: `${(overValue[0] / 20) * 100}%`,
                      right: "0",
                    }}
                  ></div>

                  {/* Marker */}
                  <div
                    className="absolute top-2 h-4 w-0.5 bg-primary"
                    style={{ left: `${(overValue[0] / 20) * 100}%` }}
                  >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 rounded-full bg-primary px-2 py-1 text-xs text-white">
                      {overValue[0]}
                    </div>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-primary">
                      x &gt; {overValue[0]}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="mb-2 text-sm">Move the slider to see different values:</p>
                <Slider value={overValue} min={0} max={20} step={1} onValueChange={setOverValue} className="py-4" />
              </div>

              <div className="mt-6 rounded-md bg-muted p-4">
                <p className="text-sm">
                  <span className="font-semibold">Mathematical expression:</span> x &gt; {overValue[0]}
                </p>
                <p className="mt-2 text-sm">
                  <span className="font-semibold">In words:</span> "x is greater than {overValue[0]}"
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-xl font-semibold">Less Than (&lt;)</h2>
              <p className="mb-6">
                <span className="font-bold text-primary">Under</span> and{" "}
                <span className="font-bold text-primary">Less than</span> indicate values less than a specific number.
              </p>

              <div className="mb-4">
                <p className="mb-2 text-sm font-medium">Example: "Under {underValue[0]}"</p>
                <div className="relative mb-8 mt-6 h-8">
                  {/* Number line */}
                  <div className="absolute left-0 right-0 top-4 h-0.5 bg-gray-300"></div>

                  {/* Tick marks */}
                  {Array.from({ length: 21 }, (_, i) => (
                    <div
                      key={i}
                      className="absolute top-2 h-4 w-0.5 bg-gray-300"
                      style={{ left: `${(i / 20) * 100}%` }}
                    >
                      {i % 5 === 0 && <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs">{i}</div>}
                    </div>
                  ))}

                  {/* Highlighted area */}
                  <div
                    className="absolute top-4 h-0.5 bg-primary"
                    style={{
                      left: "0",
                      right: `${100 - (underValue[0] / 20) * 100}%`,
                    }}
                  ></div>

                  {/* Marker */}
                  <div
                    className="absolute top-2 h-4 w-0.5 bg-primary"
                    style={{ left: `${(underValue[0] / 20) * 100}%` }}
                  >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 rounded-full bg-primary px-2 py-1 text-xs text-white">
                      {underValue[0]}
                    </div>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-primary">
                      x &lt; {underValue[0]}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="mb-2 text-sm">Move the slider to see different values:</p>
                <Slider value={underValue} min={0} max={20} step={1} onValueChange={setUnderValue} className="py-4" />
              </div>

              <div className="mt-6 rounded-md bg-muted p-4">
                <p className="text-sm">
                  <span className="font-semibold">Mathematical expression:</span> x &lt; {underValue[0]}
                </p>
                <p className="mt-2 text-sm">
                  <span className="font-semibold">In words:</span> "x is less than {underValue[0]}"
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Other Inequality Relationships</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="mb-2 font-medium">Greater than or equal to (≥)</h3>
              <p className="text-sm text-muted-foreground">
                "At least" means the value can be equal to or greater than the specified number.
              </p>
              <div className="mt-2 text-sm">
                <span className="font-semibold">Example:</span> "At least 18 years old" means x ≥ 18
              </div>
            </div>
            <div>
              <h3 className="mb-2 font-medium">Less than or equal to (≤)</h3>
              <p className="text-sm text-muted-foreground">
                "At most" means the value can be equal to or less than the specified number.
              </p>
              <div className="mt-2 text-sm">
                <span className="font-semibold">Example:</span> "At most 30 students" means x ≤ 30
              </div>
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  )
}
