import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { GuidedSteps } from "@/components/guided-steps"

export default function GuidedStepsPage() {
  return (
    <div className="container max-w-4xl py-12">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">🧠 How to Check if 147 is a Solution</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Page 4/9</span>
            <Progress value={44} className="w-24" />
          </div>
        </div>
      </div>

      <Card className="mb-8 p-6">
        <h2 className="mb-4 text-2xl font-semibold">Testing a Possible Solution</h2>
        <p className="mb-6 text-muted-foreground">
          Let's check if selling 147 tickets is enough to meet the fundraising goal.
        </p>

        <div className="space-y-6">
          <div className="rounded-md bg-muted p-4">
            <h3 className="mb-2 font-semibold">Step 1: Substitute 147 for x in the inequality</h3>
            <div className="flex items-center justify-center p-2">
              <div className="text-xl font-medium">2.80 × 147 ≥ 395</div>
            </div>
          </div>

          <div className="rounded-md bg-muted p-4">
            <h3 className="mb-2 font-semibold">Step 2: Calculate the left side</h3>
            <div className="flex items-center justify-center p-2">
              <div className="text-xl font-medium">2.80 × 147 = ?</div>
            </div>
          </div>

          <div className="rounded-md bg-muted p-4">
            <h3 className="mb-2 font-semibold">Step 3: Compare the result to 395</h3>
            <div className="flex items-center justify-center p-2">
              <div className="text-xl font-medium">? ≥ 395</div>
            </div>
          </div>

          <div className="rounded-md bg-muted p-4">
            <h3 className="mb-2 font-semibold">Step 4: Decide if the inequality is true or false</h3>
            <div className="flex items-center justify-center p-2">
              <div className="text-xl font-medium">
                If the left side is greater than or equal to 395, then 147 is a solution.
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="mb-8 p-6">
        <h2 className="mb-4 text-2xl font-semibold">Practice the Steps</h2>
        <p className="mb-6 text-muted-foreground">Fill in the blanks to complete the calculation.</p>
        <GuidedSteps />
      </Card>

      <div className="flex justify-between">
        <Link href="/visualize">
          <Button variant="outline">Previous: Visualizing the Inequality</Button>
        </Link>
        <Link href="/try-yourself">
          <Button>Next: Try It Yourself</Button>
        </Link>
      </div>
    </div>
  )
}
