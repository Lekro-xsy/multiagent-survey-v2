"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ModelPage() {
  const [connections, setConnections] = useState<{ [key: string]: boolean }>({
    "dim-illuminated": false,
    "illuminated-radiant": false,
    "radiant-dazzling": false,
  })

  const handleConnect = (connection: string) => {
    setConnections((prev) => ({
      ...prev,
      [connection]: true,
    }))
  }

  const allConnected = Object.values(connections).every((v) => v)

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-100">
      <div className="container mx-auto px-4 py-12">
        <Card className="p-8 shadow-lg">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">How Can We Express the Brightness Relationship?</h1>

            <div className="p-6 bg-blue-50 rounded-lg border border-blue-200 max-w-2xl mb-8">
              <p className="text-lg">
                If Dazzling is 9 times brighter than Radiant, how many times brighter is Dazzling compared to
                Illuminated?
              </p>
            </div>

            <div className="w-full max-w-2xl mb-12">
              <div className="flex justify-between items-center">
                {["Dim", "Illuminated", "Radiant", "Dazzling"].map((level, index) => (
                  <div key={level} className="flex flex-col items-center">
                    <div
                      className={`h-16 w-16 rounded-full flex items-center justify-center font-bold text-white ${
                        index === 0
                          ? "bg-yellow-300"
                          : index === 1
                            ? "bg-yellow-400"
                            : index === 2
                              ? "bg-yellow-500"
                              : "bg-yellow-600"
                      }`}
                    >
                      {level}
                    </div>

                    {index < 3 && (
                      <div className="mt-4">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            handleConnect(
                              `${level.toLowerCase()}-${["illuminated", "radiant", "dazzling"][index].toLowerCase()}`,
                            )
                          }
                          disabled={
                            connections[
                              `${level.toLowerCase()}-${["illuminated", "radiant", "dazzling"][index].toLowerCase()}`
                            ]
                          }
                        >
                          Connect <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 relative h-8">
                {connections["dim-illuminated"] && (
                  <div className="absolute left-[8%] right-[67%] top-1/2 h-0.5 bg-blue-500 flex items-center justify-center">
                    <span className="bg-blue-100 px-2 py-1 rounded text-blue-800 text-sm font-medium">×9</span>
                  </div>
                )}
                {connections["illuminated-radiant"] && (
                  <div className="absolute left-[33%] right-[42%] top-1/2 h-0.5 bg-blue-500 flex items-center justify-center">
                    <span className="bg-blue-100 px-2 py-1 rounded text-blue-800 text-sm font-medium">×9</span>
                  </div>
                )}
                {connections["radiant-dazzling"] && (
                  <div className="absolute left-[58%] right-[17%] top-1/2 h-0.5 bg-blue-500 flex items-center justify-center">
                    <span className="bg-blue-100 px-2 py-1 rounded text-blue-800 text-sm font-medium">×9</span>
                  </div>
                )}
              </div>
            </div>

            {allConnected && (
              <div className="p-4 bg-green-100 rounded-lg border border-green-300 max-w-xl mb-8">
                <p className="text-lg font-medium text-green-800">
                  Great! Now think about how many times we multiply by 9 to get from Illuminated to Dazzling.
                </p>
              </div>
            )}

            <div className="mt-8 flex justify-between w-full max-w-xl">
              <Link href="/pattern">
                <Button variant="outline">Previous</Button>
              </Link>
              <Link href="/calculate">
                <Button disabled={!allConnected}>Next: Calculate</Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
