"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Axe } from "lucide-react"

interface PageOneProps {
  onNext: () => void
}

export default function PageOne({ onNext }: PageOneProps) {
  const [isSplit, setIsSplit] = useState(false)

  const handleSplit = () => {
    setIsSplit(true)
    // Auto-proceed after animation
    setTimeout(() => {
      onNext()
    }, 2000)
  }

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-green-800 mb-6">🪵 Let&apos;s Split Some Logs!</h1>

      <div className="mb-8 relative mx-auto w-full max-w-md h-64 flex justify-center items-center">
        {!isSplit ? (
          <div className="relative">
            <div className="w-64 h-32 bg-amber-800 rounded-lg transform rotate-0 transition-all duration-500 relative z-10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-4 bg-amber-900/30 rounded-full"></div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="w-32 h-32 bg-amber-800 rounded-lg transform -translate-x-16 transition-all duration-500 relative z-10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-4 bg-amber-900/30 rounded-full"></div>
              </div>
            </div>
            <div className="w-32 h-32 bg-amber-800 rounded-lg transform translate-x-16 transition-all duration-500 relative z-10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-4 bg-amber-900/30 rounded-full"></div>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="prose max-w-none mb-8">
        <p className="text-lg">
          Imagine you are out in the forest. You have a heavy log. Using a splitter, you chop it into two pieces. But
          you&apos;re not done! Each piece will go back through the splitter again... and again!
        </p>
      </div>

      {!isSplit ? (
        <Button size="lg" className="bg-green-700 hover:bg-green-800 gap-2" onClick={handleSplit}>
          <Axe className="h-5 w-5" />
          Split the Log!
        </Button>
      ) : (
        <p className="text-green-700 font-medium animate-pulse">Great! Moving to next page...</p>
      )}
    </div>
  )
}
