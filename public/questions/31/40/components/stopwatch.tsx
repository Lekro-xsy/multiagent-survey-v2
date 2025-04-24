"use client"

import { useEffect, useState } from "react"
import { Clock } from "lucide-react"

import { Progress } from "@/components/ui/progress"

interface StopwatchProps {
  isPlaying: boolean
  goalTime: number
  actualTime: number
}

export function Stopwatch({ isPlaying, goalTime, actualTime }: StopwatchProps) {
  const [time, setTime] = useState(0)
  const [reachedGoal, setReachedGoal] = useState(false)
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isPlaying && time < actualTime) {
      interval = setInterval(() => {
        const newTime = time + 0.1
        setTime(newTime)

        if (newTime >= goalTime && !reachedGoal) {
          setReachedGoal(true)
        }

        if (newTime >= actualTime) {
          setCompleted(true)
          if (interval) clearInterval(interval)
        }
      }, 50) // Speed up animation for better UX
    } else if (!isPlaying && interval) {
      clearInterval(interval)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isPlaying, time, goalTime, actualTime, reachedGoal])

  useEffect(() => {
    if (!isPlaying) {
      setTime(0)
      setReachedGoal(false)
      setCompleted(false)
    }
  }, [isPlaying])

  const progressPercent = (time / actualTime) * 100

  return (
    <div className="w-full max-w-md rounded-lg border bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center">
          <Clock className="mr-2 h-5 w-5 text-blue-600" />
          <span className="font-medium">Jogging Time</span>
        </div>
        <div className="text-xl font-bold">
          {time.toFixed(1)} <span className="text-sm font-normal">min</span>
        </div>
      </div>

      <div className="mb-2">
        <Progress value={progressPercent} className="h-3" />
      </div>

      <div className="flex justify-between text-sm">
        <span>Start</span>
        <span className={`font-medium ${reachedGoal ? "text-yellow-600" : ""}`}>
          Goal: {goalTime} min
          {reachedGoal && !completed && " (Passed!)"}
        </span>
        <span className={`${completed ? "font-medium text-red-600" : ""}`}>
          {actualTime} min
          {completed && " (Finished!)"}
        </span>
      </div>

      {reachedGoal && !completed && (
        <div className="mt-3 rounded-lg bg-yellow-100 p-2 text-center text-sm text-yellow-800">
          You've passed your goal time but haven't finished yet!
        </div>
      )}

      {completed && (
        <div className="mt-3 rounded-lg bg-red-100 p-2 text-center text-sm text-red-800">
          It took {actualTime} minutes to finish the jog at 5 mph!
        </div>
      )}
    </div>
  )
}
