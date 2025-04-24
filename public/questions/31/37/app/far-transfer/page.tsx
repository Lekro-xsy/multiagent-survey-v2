import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { FarTransfer } from "@/components/far-transfer"

export default function FarTransferPage() {
  return (
    <div className="container max-w-4xl py-12">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">🚀 Different Situation, Same Math!</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Page 8/9</span>
            <Progress value={88} className="w-24" />
          </div>
        </div>
      </div>

      <Card className="mb-8 p-6">
        <h2 className="mb-4 text-2xl font-semibold">New Scenario</h2>
        <div className="mb-6 rounded-md bg-muted p-4">
          <p className="font-medium">
            A factory needs to produce <span className="text-primary font-bold">at least 1,200 parts</span>.
          </p>
          <p className="mt-2 font-medium">
            Each machine produces <span className="text-primary font-bold">8 parts per hour</span>.
          </p>
          <p className="mt-2 font-medium">
            Would running a machine for <span className="text-primary font-bold">145 hours</span> meet the goal?
          </p>
        </div>
      </Card>

      <Card className="mb-8 p-6">
        <h2 className="mb-4 text-2xl font-semibold">Your Task</h2>
        <div className="space-y-4">
          <div className="rounded-md bg-muted p-4">
            <h3 className="mb-2 font-semibold">1. Build the inequality</h3>
            <p className="text-muted-foreground">Create an inequality that represents this factory situation.</p>
          </div>

          <div className="rounded-md bg-muted p-4">
            <h3 className="mb-2 font-semibold">2. Substitute and calculate</h3>
            <p className="text-muted-foreground">Replace the variable with 145 and solve.</p>
          </div>

          <div className="rounded-md bg-muted p-4">
            <h3 className="mb-2 font-semibold">3. Explain your answer</h3>
            <p className="text-muted-foreground">Is 145 hours enough? Why or why not?</p>
          </div>
        </div>
      </Card>

      <Card className="mb-8 p-6">
        <h2 className="mb-4 text-2xl font-semibold">Solve the Problem</h2>
        <FarTransfer />
      </Card>

      <div className="flex justify-between">
        <Link href="/near-transfer">
          <Button variant="outline">Previous: Similar Ticket Challenge</Button>
        </Link>
        <Link href="/summary">
          <Button>Next: Wrap Up and Reflect</Button>
        </Link>
      </div>
    </div>
  )
}
