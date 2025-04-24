import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import PageLayout from "@/components/page-layout"

export default function Page1() {
  return (
    <PageLayout title="🏃‍♂️ Ready to Jog 3 Miles!" currentPage={1} totalPages={9}>
      <Card className="border-2 border-green-200 shadow-lg">
        <CardHeader className="bg-green-50">
          <CardTitle className="text-2xl text-green-800">🏃‍♂️ Ready to Jog 3 Miles!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="relative mx-auto h-64 overflow-hidden rounded-lg">
            <img
              src="/urban-run-prep.png"
              alt="Runner preparing for a jog"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="rounded-lg bg-blue-50 p-6">
            <h3 className="mb-4 text-xl font-semibold text-blue-800">Today's Jogging Plan:</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-center">
                <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-200 text-blue-800">
                  1
                </span>
                <span>
                  You want to jog <strong className="text-blue-700">3 miles</strong>.
                </span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-200 text-blue-800">
                  2
                </span>
                <span>
                  You hope to finish within <strong className="text-blue-700">30 minutes</strong>.
                </span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-200 text-blue-800">
                  3
                </span>
                <span>
                  You plan to jog at <strong className="text-blue-700">5 miles per hour</strong>.
                </span>
              </li>
            </ul>

            <div className="mt-6 rounded-lg bg-yellow-100 p-4 text-center">
              <p className="text-lg font-medium text-yellow-800">Is that fast enough to meet your goal?</p>
            </div>
          </div>

          <div className="mx-auto max-w-md rounded-lg bg-green-100 p-4 text-center">
            <p className="text-green-800">
              Let's use math to find out if your planned jogging speed will help you reach your goal!
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between pb-6">
          <Link href="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
          <Link href="/page2">
            <Button className="bg-green-600 hover:bg-green-700">
              Start Jogging!
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </PageLayout>
  )
}
