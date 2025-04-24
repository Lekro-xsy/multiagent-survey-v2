"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"

interface InequalityVisualizerProps {
  ticketPrice: number
  goal: number
}

export function InequalityVisualizer({ ticketPrice, goal }: InequalityVisualizerProps) {
  const [tickets, setTickets] = useState(100)
  const totalRaised = tickets * ticketPrice
  const percentageOfGoal = Math.min((totalRaised / goal) * 100, 100)
  const goalReached = totalRaised >= goal

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium">Tickets</p>
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
        <Slider value={[tickets]} min={0} max={200} step={1} onValueChange={(value) => setTickets(value[0])} />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>0 tickets</span>
          <span>200 tickets</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm">Progress toward goal</span>
          <span className="text-sm font-medium">{percentageOfGoal.toFixed(0)}%</span>
        </div>
        <Progress value={percentageOfGoal} className="h-4" />
      </div>

      <div className="rounded-md bg-muted p-4">
        <p className="font-medium">
          Inequality: 2.80<i>x</i> ≥ 395
        </p>
        <p className="mt-2">
          Substituting <i>x</i> = {tickets}: 2.80 × {tickets} = ${totalRaised.toFixed(2)}
        </p>
        <p className="mt-2">
          ${totalRaised.toFixed(2)} {goalReached ? "≥" : "<"} $395
        </p>
        <p className="mt-2 font-medium">
          {goalReached
            ? `This is a solution! ${tickets} tickets is enough to meet the goal.`
            : `This is not a solution. ${tickets} tickets is not enough to meet the goal.`}
        </p>
      </div>

      {goalReached && (
        <div className="rounded-md bg-green-100 p-4 text-green-800">
          <p className="font-medium">Goal reached! 🎉</p>
          <p>
            With {tickets} tickets, you'll raise ${totalRaised.toFixed(2)}, which is ${(totalRaised - goal).toFixed(2)}{" "}
            more than your goal!
          </p>
        </div>
      )}
    </div>
  )
}
