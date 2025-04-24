import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { TicketCounter } from "@/components/ticket-counter"

export default function ContextPage() {
  return (
    <div className="container max-w-4xl py-12">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">🎭 The Drama Club's Fundraising Challenge!</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Page 1/9</span>
            <Progress value={11} className="w-24" />
          </div>
        </div>
      </div>

      <Card className="mb-8 overflow-hidden">
        <div className="aspect-video bg-muted flex items-center justify-center p-6">
          <div className="relative w-full max-w-2xl">
            <div className="rounded-lg border bg-card p-6 shadow-lg">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-3xl">🎭</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Drama Club Fundraiser</h3>
                    <p className="text-muted-foreground">Help the drama club reach their goal!</p>
                  </div>
                </div>
                <div className="space-y-2 rounded-md bg-muted p-4">
                  <p className="font-medium">The drama club is raising money for their new production.</p>
                  <p className="font-medium">
                    Tickets sell for <span className="text-primary font-bold">$2.80</span> each.
                  </p>
                  <p className="font-medium">
                    Their goal is to raise <span className="text-primary font-bold">at least $395</span>.
                  </p>
                  <p className="font-medium">How many tickets must they sell?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Try selling some tickets!</h2>
        <p className="mb-6 text-muted-foreground">
          Click the "Sell Ticket" button to see how many tickets you need to sell to reach the goal.
        </p>
        <TicketCounter ticketPrice={2.8} goal={395} />
      </div>

      <div className="flex justify-between">
        <Link href="/">
          <Button variant="outline">Back to Home</Button>
        </Link>
        <Link href="/breakdown">
          <Button>Next: Breaking Down the Problem</Button>
        </Link>
      </div>
    </div>
  )
}
