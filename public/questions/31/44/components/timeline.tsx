"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface TimelineEvent {
  time: string
  label: string
  type: "start" | "stop" | "end"
  duration?: string
  icon: React.ReactNode
}

interface TimelineProps {
  events: TimelineEvent[]
  interactive?: boolean
}

export function Timeline({ events, interactive = false }: TimelineProps) {
  const [hiddenEvents, setHiddenEvents] = useState<number[]>([])

  const toggleEvent = (index: number) => {
    if (hiddenEvents.includes(index)) {
      setHiddenEvents(hiddenEvents.filter((i) => i !== index))
    } else {
      setHiddenEvents([...hiddenEvents, index])
    }
  }

  return (
    <div className="relative mt-6 mb-8">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

      {/* Events */}
      <div className="space-y-6">
        {events.map((event, index) => (
          <div key={index} className={`relative flex items-center ${hiddenEvents.includes(index) ? "opacity-50" : ""}`}>
            <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500"></div>
            <div className="flex items-center ml-12 gap-3">
              <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full">{event.icon}</div>
              <div>
                <div className="font-semibold">{event.time}</div>
                <div className="text-sm text-gray-600">{event.label}</div>
                {event.duration && <div className="text-xs text-blue-600">{event.duration}</div>}
              </div>
              {interactive && event.type === "stop" && (
                <Button
                  variant={hiddenEvents.includes(index) ? "outline" : "secondary"}
                  size="sm"
                  className="ml-4"
                  onClick={() => toggleEvent(index)}
                >
                  {hiddenEvents.includes(index) ? "Include" : "Subtract"} Stop
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
