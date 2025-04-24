"use client"
import { PageLayout } from "@/components/page-layout"
import { TrackDiagram } from "@/components/track-diagram"
import { Card, CardContent } from "@/components/ui/card"

export default function Page3() {
  return (
    <PageLayout pageNumber={3} totalPages={9} title="📊 Connecting the Diagram to the Problem">
      <Card>
        <CardContent className="pt-6">
          <div className="mb-6">
            <h2 className="mb-4 text-xl font-semibold">Visualizing the Situation:</h2>
            <p className="mb-4 text-muted-foreground">
              Hover over or click on parts of the diagram to highlight important points.
            </p>
            <TrackDiagram interactive={true} />
          </div>

          <div className="mt-8 space-y-4">
            <div className="rounded-lg bg-blue-50 p-4">
              <h3 className="font-medium text-blue-800">Key Concept:</h3>
              <p className="mt-2 text-blue-800">
                Even though the car is not on the track, it travels the same distance horizontally.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-slate-50 p-4">
                <h3 className="mb-2 font-medium">What we know:</h3>
                <ul className="ml-6 list-disc space-y-1">
                  <li>The car travels at 25 miles per hour</li>
                  <li>The distance from start to finish is 50 yards</li>
                  <li>The car and runner start at the same time</li>
                </ul>
              </div>

              <div className="rounded-lg bg-slate-50 p-4">
                <h3 className="mb-2 font-medium">What we need to find:</h3>
                <ul className="ml-6 list-disc space-y-1">
                  <li>The time (in seconds) it takes the car to reach the finish line</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </PageLayout>
  )
}
