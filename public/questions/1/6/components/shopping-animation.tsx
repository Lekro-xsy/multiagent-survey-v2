"use client"

import { useEffect, useState } from "react"
import { ShoppingCart } from "lucide-react"

export default function ShoppingAnimation() {
  const [position, setPosition] = useState(0)
  const [showCart, setShowCart] = useState(false)
  const [packs, setPacks] = useState<number[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        if (prev >= 100) {
          setShowCart(true)
          clearInterval(interval)
          return 100
        }
        return prev + 5
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (position >= 30 && packs.length < 1) {
      setPacks([...packs, 1])
    }
    if (position >= 50 && packs.length < 3) {
      setPacks([...packs, 2, 3])
    }
    if (position >= 70 && packs.length < 7) {
      setPacks([...packs, 4, 5, 6, 7])
    }
  }, [position, packs])

  return (
    <div className="relative h-full w-full">
      {/* Store shelf */}
      <div className="absolute bottom-0 h-1/2 w-full bg-indigo-200">
        <div className="absolute left-0 top-0 h-4 w-full bg-indigo-300"></div>

        {/* Pen packs on shelf */}
        <div className="absolute left-4 top-8 flex flex-wrap gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <div
              key={i}
              className={`h-8 w-6 rounded bg-blue-400 ${packs.includes(i) ? "opacity-30" : "opacity-100"}`}
            ></div>
          ))}
        </div>
      </div>

      {/* Customer */}
      <div
        className="absolute bottom-8 left-0 flex flex-col items-center transition-all duration-300"
        style={{ left: `${position}%` }}
      >
        <div className="h-12 w-8 rounded-full bg-indigo-600"></div>
        <div className="h-16 w-12 rounded-b-lg bg-indigo-500"></div>
      </div>

      {/* Shopping cart */}
      {showCart && (
        <div className="absolute bottom-10 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
          <ShoppingCart className="h-6 w-6 text-indigo-600" />
          <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
            7
          </div>
        </div>
      )}
    </div>
  )
}
