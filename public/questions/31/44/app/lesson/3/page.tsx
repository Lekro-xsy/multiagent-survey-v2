import { LessonLayout } from "@/components/lesson-layout"
import { Timeline } from "@/components/timeline"
import { Car, Coffee, Fuel } from "lucide-react"

export default function LessonThree() {
  const timelineEvents = [
    {
      time: "6:30 A.M.",
      label: "Departure from Miami",
      type: "start",
      icon: <Car className="h-4 w-4" />,
    },
    {
      time: "8:00 A.M. - 8:45 A.M.",
      label: "Breakfast in West Palm Beach",
      type: "stop",
      duration: "45 minutes (0.75 hour)",
      icon: <Coffee className="h-4 w-4" />,
    },
    {
      time: "Unknown time",
      label: "Gas and stretching stop",
      type: "stop",
      duration: "30 minutes (0.5 hour)",
      icon: <Fuel className="h-4 w-4" />,
    },
    {
      time: "2:30 P.M.",
      label: "Arrival in Jacksonville",
      type: "end",
      icon: <Car className="h-4 w-4" />,
    },
  ]

  return (
    <LessonLayout title="📊 How Much Time Did Roberto Drive?" pageNumber={3} totalPages={9}>
      <div className="space-y-6">
        <p className="text-lg">
          Let's visualize Roberto's trip timeline. We need to figure out how much time he actually spent driving.
        </p>

        <div className="p-4 bg-blue-50 rounded-lg">
          <p className="font-semibold">Total trip time:</p>
          <p>From 6:30 A.M. to 2:30 P.M. = 8 hours</p>
        </div>

        <p className="text-lg">
          Now, let's subtract the time Roberto spent not driving. Click the "Subtract Stop" button for each stop.
        </p>

        <Timeline events={timelineEvents} interactive={true} />

        <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <p className="font-semibold">Key Concept:</p>
          <p className="font-mono text-lg">Driving Time = Total Trip Time – Total Stop Time</p>
        </div>
      </div>
    </LessonLayout>
  )
}
