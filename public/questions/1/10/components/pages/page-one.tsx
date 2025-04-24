"use client"

import { useState } from "react"
import { Plane } from "lucide-react"
import { motion } from "framer-motion"

export function PageOne() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null)

  const cities = [
    { name: "New York", distance: 215, icon: "🗽" },
    { name: "Chicago", distance: 713, icon: "🌆" },
    { name: "Los Angeles", distance: 2451, icon: "🌴" },
    { name: "Miami", distance: 1089, icon: "🏖️" },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-center text-3xl font-bold text-sky-700">✈️ Flying to Different Destinations!</h1>

      <div className="relative h-48 overflow-hidden rounded-lg bg-gradient-to-b from-sky-200 to-sky-50 p-4">
        {cities.map((city, index) => (
          <motion.div
            key={city.name}
            className="absolute"
            initial={{ left: "10%", top: "50%" }}
            animate={{
              left: `${10 + city.distance / 30}%`,
              top: `${30 + index * 15}%`,
            }}
            transition={{ duration: 2, delay: index * 0.5 }}
          >
            <div
              className={`flex items-center gap-2 rounded-full ${
                selectedCity === city.name ? "bg-sky-200 shadow-md" : "bg-white"
              } px-3 py-1 cursor-pointer transition-all`}
              onClick={() => setSelectedCity(city.name)}
            >
              <span className="text-xl">{city.icon}</span>
              <span className="font-medium">{city.name}</span>
            </div>
            <motion.div
              className="absolute left-0 text-sky-600"
              initial={{ left: "-20px" }}
              animate={{ left: "-40px" }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                repeatType: "reverse",
              }}
            >
              <Plane size={24} />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="rounded-lg bg-sky-50 p-6">
        <h2 className="mb-4 text-xl font-semibold text-sky-700">Short Story:</h2>
        <p className="text-lg leading-relaxed">
          "You're booking tickets on different flights. Some trips are short, others long. Prices vary — but is distance
          the biggest factor?"
        </p>
      </div>

      {selectedCity && (
        <div className="rounded-lg bg-yellow-50 p-4 shadow-sm">
          <p className="text-center text-lg">
            <span className="font-semibold">Distance to {selectedCity}:</span>{" "}
            {cities.find((city) => city.name === selectedCity)?.distance} miles
          </p>
        </div>
      )}

      <div className="mt-4 text-center text-sm text-gray-500">
        Click on the city icons to see their distance from the starting point.
      </div>
    </div>
  )
}
