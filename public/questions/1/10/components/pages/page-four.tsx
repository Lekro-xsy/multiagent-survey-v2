"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HelpCircle } from "lucide-react"

export function PageFour() {
  const [showHint, setShowHint] = useState(false)

  return (
    <div className="space-y-6">
      <h1 className="text-center text-3xl font-bold text-sky-700">🧐 What Could 2x + 99 Represent?</h1>

      <div className="rounded-lg bg-sky-50 p-6">
        <h2 className="mb-4 text-xl font-semibold text-sky-700">Breaking down parts of 2x + 99:</h2>
        <div className="space-y-4">
          <div className="rounded-lg bg-blue-100 p-3">
            <p className="text-lg">
              <span className="font-bold">🔹 2x:</span> Something that changes (depends on x)
            </p>
          </div>
          <div className="rounded-lg bg-amber-100 p-3">
            <p className="text-lg">
              <span className="font-bold">🔸 +99:</span> Something that is fixed (constant base price?)
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-sky-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold text-sky-700">Guiding Questions:</h2>
        <div className="space-y-3">
          <Card>
            <CardContent className="p-4">
              <p className="text-lg">What does x represent?</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-lg">Why multiply it by 2?</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-lg">Why add 99?</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-4 flex justify-center">
          <Button variant="outline" className="flex items-center gap-2" onClick={() => setShowHint(!showHint)}>
            <HelpCircle size={16} />
            {showHint ? "Hide Hint" : "Need a Hint?"}
          </Button>
        </div>

        {showHint && (
          <div className="mt-4 rounded-lg bg-yellow-50 p-4">
            <p className="text-center text-lg">Maybe x is distance...?</p>
          </div>
        )}
      </div>

      <div className="rounded-lg border border-sky-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold text-sky-700">Visual Tool:</h2>
        <div className="aspect-video w-full overflow-hidden rounded-lg bg-white p-4">
          <div className="h-full w-full">
            <div className="relative h-full w-full">
              {/* Y-axis */}
              <div className="absolute bottom-0 left-10 h-[90%] w-[1px] bg-gray-400"></div>
              <div className="absolute bottom-0 left-0 w-full text-center text-sm text-gray-500">Distance (miles)</div>

              {/* X-axis */}
              <div className="absolute bottom-10 left-10 h-[1px] w-[90%] bg-gray-400"></div>
              <div className="absolute left-0 top-0 h-full -rotate-90 transform text-center text-sm text-gray-500">
                Ticket Price ($)
              </div>

              {/* Line representing 2x + 99 */}
              <div className="absolute bottom-10 left-10 h-[70%] w-[70%] overflow-hidden">
                <div className="absolute bottom-0 left-0 h-[1px] w-full bg-sky-500 transform rotate-[30deg] origin-bottom-left"></div>

                {/* Base fee annotation */}
                <div className="absolute bottom-0 left-0 h-[99px] w-[1px] bg-amber-500"></div>
                <div className="absolute bottom-[50px] left-[5px] -rotate-90 transform text-xs text-amber-600">
                  Base fee ($99)
                </div>

                {/* Per mile cost annotation */}
                <div className="absolute bottom-[99px] left-[100px] h-[1px] w-[50px] bg-blue-500"></div>
                <div className="absolute bottom-[110px] left-[120px] text-xs text-blue-600">$2 per mile</div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4 text-center text-sm text-gray-500">
          Graph showing ticket price vs. distance — with a base fee and a growing cost per mile.
        </p>
      </div>
    </div>
  )
}
