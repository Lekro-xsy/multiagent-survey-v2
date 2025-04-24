"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface SolutionAnimationProps {
  ticketPrice: number
  goal: number
  solution: number
}

export function SolutionAnimation({ ticketPrice, goal, solution }: SolutionAnimationProps) {
  const [tickets, setTickets] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const totalRaised = tickets * ticketPrice
  const percentageOfGoal = Math.min((totalRaised / goal) * 100, 100)
  const goalReached = totalRaised >= goal

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAnimating && tickets < solution) {
      interval = setInterval(() => {
        setTickets((prev) => {
          const increment = Math.max(1, Math.floor((solution - prev) / 10))
          return Math.min(prev + increment, solution)
        })
      }, 100)
    }

    return () => clearInterval(interval)
  }, [isAnimating, tickets, solution])

  const startAnimation = () => {
    setTickets(0)
    setIsAnimating(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium">Tickets Sold</p>
          <p className="text-2xl font-bold">{tickets}</p>
        </div>
        <div>
          <p className="text-sm font-medium">Money Raised</p>
          <p className="text-2xl font-bold">${totalRaised.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-sm font-medium">Goal</p>
          <p className="text-2xl font-bold">${goal.toFixed(2)}</p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm">Progress</span>
          <span className="text-sm font-medium">{percentageOfGoal.toFixed(0)}%</span>
        </div>
        <div className="relative h-4">
          <Progress value={percentageOfGoal} className="h-4" />
          <div
            className="absolute top-0 h-full w-0.5 bg-red-500"
            style={{ left: `${(goal / (solution * ticketPrice)) * 100}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>$0</span>
          <span className="text-red-500 font-medium">${goal}</span>
          <span>${(solution * ticketPrice).toFixed(2)}</span>
        </div>
      </div>

      <div className="rounded-md bg-muted p-4">
        <p className="font-medium">
          Inequality: 2.80<i>x</i> ≥ 395
        </p>
        <p className="mt-2">
          Substituting <i>x</i> = {solution}: 2.80 × {solution} = ${(solution * ticketPrice).toFixed(2)}
        </p>
        <p className="mt-2">${(solution * ticketPrice).toFixed(2)} ≥ $395 ✓</p>
        <p className="mt-2 font-medium">
          {solution} tickets is a solution because ${(solution * ticketPrice).toFixed(2)} is greater than $395.
        </p>
      </div>

      {tickets === solution && (
        <div className="rounded-md bg-green-100 p-4 text-green-800">
          <p className="font-medium">Goal reached! 🎉</p>
          <p>
            With {solution} tickets, you'll raise ${totalRaised.toFixed(2)}, which is ${(totalRaised - goal).toFixed(2)}{" "}
            more than your goal!
          </p>
        </div>
      )}

      <Button onClick={startAnimation} disabled={isAnimating && tickets < solution}>
        {tickets === 0 ? "Start Animation" : tickets === solution ? "Replay Animation" : "Animating..."}
      </Button>
    </div>
  )
}
