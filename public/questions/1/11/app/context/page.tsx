"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageLayout } from "@/components/page-layout"

export default function ContextPage() {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleViewBuilding = () => {
    setIsAnimating(true)
    // Reset animation after it completes
    setTimeout(() => setIsAnimating(false), 3000)
  }

  return (
    <PageLayout title="🏢🚩 How Tall is the Building?" pageNumber={1} totalPages={9}>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div
          className={`relative w-full md:w-1/2 h-[400px] transition-all duration-3000 ${isAnimating ? "scale-150" : ""}`}
        >
          <div className="absolute inset-0">
            <img
              src="/skyscraper-flag.png"
              alt="Building with flagpole"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          <div className="bg-blue-50 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">The Problem:</h2>
            <p className="text-lg mb-3">
              The total height of a building and the flagpole on its roof is{" "}
              <span className="font-bold text-blue-700">208 feet</span>.
            </p>
            <p className="text-lg mb-3">
              The building is <span className="font-bold text-blue-700">7 times</span> as tall as the flagpole.
            </p>
            <p className="text-lg font-bold">How tall is the building?</p>
          </div>

          <Button onClick={handleViewBuilding} className="w-full bg-blue-600 hover:bg-blue-700" disabled={isAnimating}>
            View the Building! {isAnimating ? "🔍" : "👀"}
          </Button>

          <div className="flex justify-end mt-4">
            <Link href="/breakdown">
              <Button variant="outline" className="flex items-center gap-2">
                Next <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
