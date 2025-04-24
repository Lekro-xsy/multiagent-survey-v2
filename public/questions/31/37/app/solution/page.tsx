import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { SolutionAnimation } from "@/components/solution-animation"

export default function SolutionPage() {
  return (
    <div className="container max-w-4xl py-12">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">🎯 Let's Check!</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Page 6/9</span>
            <Progress value={66} className="w-24" />
          </div>
        </div>
      </div>

      <Card className="mb-8 p-6">
        <h2 className="mb-4 text-2xl font-semibold">Solution Walkthrough</h2>

        <div className="space-y-6">
          <div className="rounded-md bg-muted p-4">
            <h3 className="mb-2 font-semibold">Step 1: Substitute and Calculate</h3>
            <div className="flex items-center justify-center p-2">
              <div className="text-xl font-medium">2.80 × 147 = 411.60</div>
            </div>
          </div>

          <div className="rounded-md bg-muted p-4">
            <h3 className="mb-2 font-semibold">Step 2: Compare to the Goal</h3>
            <div className="flex items-center justify-center p-2">
              <div className="text-xl font-medium">411.60 ≥ 395</div>
            </div>
          </div>

          <div className="rounded-md bg-primary/10 p-4">
            <h3 className="mb-2 font-semibold">Conclusion</h3>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✅</span>
              <p className="font-medium">Yes, 147 is a solution because $411.60 is greater than $395.</p>
            </div>
            <p className="mt-2">The drama club will meet their fundraising goal if they sell 147 tickets.</p>
          </div>
        </div>
      </Card>

      <Card className="mb-8 p-6">
        <h2 className="mb-4 text-2xl font-semibold">Visual Recap</h2>
        <p className="mb-6 text-muted-foreground">Watch as the ticket sales meter crosses the $395 goal line.</p>
        <SolutionAnimation ticketPrice={2.8} goal={395} solution={147} />
      </Card>

      <div className="flex justify-between">
        <Link href="/try-yourself">
          <Button variant="outline">Previous: Try It Yourself</Button>
        </Link>
        <Link href="/near-transfer">
          <Button>Next: Similar Ticket Challenge</Button>
        </Link>
      </div>
    </div>
  )
}
