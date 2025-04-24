import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { NearTransfer } from "@/components/near-transfer"

export default function NearTransferPage() {
  return (
    <div className="container max-w-4xl py-12">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">🔄 Similar Ticket Challenge</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Page 7/9</span>
            <Progress value={77} className="w-24" />
          </div>
        </div>
      </div>

      <Card className="mb-8 p-6">
        <h2 className="mb-4 text-2xl font-semibold">New Scenario</h2>
        <div className="mb-6 rounded-md bg-muted p-4">
          <p className="font-medium">
            Another club sells tickets at <span className="text-primary font-bold">$3.50</span> each.
          </p>
          <p className="mt-2 font-medium">
            They want to raise <span className="text-primary font-bold">at least $560</span>.
          </p>
          <p className="mt-2 font-medium">
            Is selling <span className="text-primary font-bold">160</span> tickets enough?
          </p>
        </div>
      </Card>

      <Card className="mb-8 p-6">
        <h2 className="mb-4 text-2xl font-semibold">Your Task</h2>
        <div className="space-y-4">
          <div className="rounded-md bg-muted p-4">
            <h3 className="mb-2 font-semibold">1. Set up the inequality</h3>
            <p className="text-muted-foreground">Write an inequality that represents this situation.</p>
          </div>

          <div className="rounded-md bg-muted p-4">
            <h3 className="mb-2 font-semibold">2. Substitute 160</h3>
            <p className="text-muted-foreground">Replace the variable with 160 and calculate.</p>
          </div>

          <div className="rounded-md bg-muted p-4">
            <h3 className="mb-2 font-semibold">3. Decide if it's a solution</h3>
            <p className="text-muted-foreground">Is 160 tickets enough to meet their goal?</p>
          </div>
        </div>
      </Card>

      <Card className="mb-8 p-6">
        <h2 className="mb-4 text-2xl font-semibold">Solve the Problem</h2>
        <NearTransfer />
      </Card>

      <div className="flex justify-between">
        <Link href="/solution">
          <Button variant="outline">Previous: Solution</Button>
        </Link>
        <Link href="/far-transfer">
          <Button>Next: Different Situation, Same Math</Button>
        </Link>
      </div>
    </div>
  )
}
