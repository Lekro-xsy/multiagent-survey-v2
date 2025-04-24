import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-100">
      <div className="container mx-auto px-4 py-12">
        <Card className="p-8 shadow-lg">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">How Bright is a Sunny Day?</h1>

            <div className="relative w-full h-64 md:h-80 mb-8">
              <Image
                src="/sunlight-spectrum.png"
                alt="Sunlight intensity levels from dim to dazzling"
                fill
                className="object-contain rounded-lg"
              />
            </div>

            <p className="text-lg mb-8 max-w-2xl">
              Mike is traveling with his solar-powered car and recording the intensity of sunlight in different weather
              conditions. Can you help Mike analyze how the brightness changes between different levels?
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl mb-8">
              {["Dim", "Illuminated", "Radiant", "Dazzling"].map((level, index) => (
                <div
                  key={level}
                  className="relative p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className="absolute inset-0 bg-yellow-400 opacity-10 group-hover:opacity-30 rounded-lg transition-opacity"></div>
                  <div className={`h-12 bg-yellow-300 rounded opacity-${(index + 1) * 20}`}></div>
                  <p className="mt-2 font-medium text-center">{level}</p>
                </div>
              ))}
            </div>

            <Link href="/problem" className="w-full max-w-xs">
              <Button className="w-full" size="lg">
                Start Learning
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  )
}
