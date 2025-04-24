"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface TicketCounterProps {
  ticketPrice: number
  goal: number
}

export function TicketCounter({ ticketPrice, goal }: TicketCounterProps) {
  const [tickets, setTickets] = useState(0)
  const totalRaised = tickets * ticketPrice
  const percentageOfGoal = Math.min((totalRaised / goal) * 100, 100)
  const goalReached = totalRaised >= goal

  return (
    <div className="space-y-4">
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
        <Progress value={percentageOfGoal} className="h-4" />
      </div>

      <div className="flex items-center gap-4">
        <Button onClick={() => setTickets(tickets + 1)} className="flex-1">
          Sell Ticket
        </Button>
        <Button onClick={() => setTickets(tickets + 10)} variant="outline" className="flex-1">
          Sell 10 Tickets
        </Button>
        <Button onClick={() => setTickets(0)} variant="outline" className="flex-1">
          Reset
        </Button>
      </div>

      {goalReached && (
        <div className="rounded-md bg-green-100 p-4 text-green-800">
          <p className="font-medium">Goal reached! 🎉</p>
          <p className="text-sm">
            You've raised ${totalRaised.toFixed(2)}, which is ${(totalRaised - goal).toFixed(2)} more than your goal!
          </p>
        </div>
      )}
    </div>
  )
}
