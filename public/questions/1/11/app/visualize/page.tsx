"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageLayout } from "@/components/page-layout"

export default function VisualizePage() {
  const [hoveredPart, setHoveredPart] = useState<number | null>(null)

  const buildingBlocks = Array(7)
    .fill(0)
    .map((_, i) => i)

  return (
    <PageLayout title="📊 How are the Heights Related?" pageNumber={3} totalPages={9}>
      <div className="space-y-8">
        <div className="bg-blue-50 p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-3">Visualizing the Relationship</h2>
          <p>
            The building is 7 times as tall as the flagpole. Let's visualize this relationship using blocks to represent
            the heights.
          </p>
          <p className="mt-2 font-medium">Hover over each block to see how it relates to the total height.</p>
        </div>

        <div className="flex justify-center">
          <div className="relative flex flex-col items-center">
            {/* Flagpole block */}
            <div
              className={`w-16 h-16 bg-red-500 rounded-t-md flex items-center justify-center text-white font-bold mb-1 transition-all ${
                hoveredPart === 7 ? "scale-110 shadow-lg z-10" : ""
              }`}
              onMouseEnter={() => setHoveredPart(7)}
              onMouseLeave={() => setHoveredPart(null)}
            >
              1 part
            </div>

            {/* Building blocks */}
            {buildingBlocks.map((blockIndex) => (
              <div
                key={blockIndex}
                className={`w-32 h-16 bg-blue-600 flex items-center justify-center text-white font-bold mb-1 transition-all ${
                  blockIndex === 0 ? "rounded-b-md" : ""
                } ${hoveredPart === blockIndex ? "scale-110 shadow-lg z-10" : ""}`}
                onMouseEnter={() => setHoveredPart(blockIndex)}
                onMouseLeave={() => setHoveredPart(null)}
              >
                Part {blockIndex + 1}
              </div>
            ))}

            {/* Height labels */}
            <div className="absolute -left-24 top-0 bottom-0 flex flex-col justify-between">
              <div className="text-right">
                <div className="font-bold">208 ft</div>
                <div className="text-sm">Total Height</div>
              </div>
              <div className="text-right">
                <div className="font-bold">?</div>
                <div className="text-sm">Building Height</div>
              </div>
              <div className="text-right">
                <div className="font-bold">0 ft</div>
              </div>
            </div>

            {/* Right side labels */}
            <div className="absolute -right-36 top-8">
              <div className="bg-red-100 p-2 rounded">
                <div className="font-bold">Flagpole = 1 part</div>
              </div>
            </div>
            <div className="absolute -right-36 top-1/2 -translate-y-1/2">
              <div className="bg-blue-100 p-2 rounded">
                <div className="font-bold">Building = 7 parts</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Key Insight:</h3>
          <p>
            The total height (208 feet) consists of <span className="font-bold">8 equal parts</span>:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>7 parts for the building</li>
            <li>1 part for the flagpole</li>
          </ul>
          <p className="mt-2">This means each part represents the same height as the flagpole.</p>
        </div>

        <div className="flex justify-between mt-6">
          <Link href="/breakdown">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Previous
            </Button>
          </Link>

          <Link href="/equation">
            <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
              Next <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}
