import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FullSolution() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">🎯 Check and Understand!</h1>
        <p className="text-lg">Let's review the complete solution</p>
      </div>

      <Card className="p-6 bg-blue-50 border-blue-200">
        <h3 className="text-xl font-bold mb-4">Solution Recap</h3>

        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <h4 className="font-bold mb-2">Part A: Peanuts Weight</h4>
            <p className="text-xl font-mono">Peanuts weight = 10 - a</p>
            <p className="mt-2 text-gray-600">Where a is the weight of almonds in pounds</p>
          </div>

          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <h4 className="font-bold mb-2">Part B: Total Cost</h4>
            <p className="text-xl font-mono">Total cost = $2.59 × a + $1.69 × (10 - a)</p>
            <p className="mt-2 text-gray-600">This adds the cost of almonds and the cost of peanuts</p>
          </div>
        </div>
      </Card>

      <Tabs defaultValue="explanation">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="explanation">Explanation</TabsTrigger>
          <TabsTrigger value="expand">Expand Expression</TabsTrigger>
          <TabsTrigger value="simplify">Simplify Expression</TabsTrigger>
        </TabsList>

        <TabsContent value="explanation" className="p-4 bg-white rounded-lg border">
          <h4 className="font-bold mb-2">Detailed Explanation</h4>
          <p className="mb-4">
            We're modeling a real-world situation where Don is making a snack mix with two ingredients:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Almonds at $2.59 per pound</li>
            <li>Peanuts at $1.69 per pound</li>
          </ul>
          <p className="mb-4">The total weight must be 10 pounds. If we call the weight of almonds "a", then:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>The weight of peanuts must be (10 - a) pounds</li>
            <li>The cost of almonds is $2.59 × a</li>
            <li>The cost of peanuts is $1.69 × (10 - a)</li>
          </ul>
          <p>The total cost is the sum of these two costs.</p>
        </TabsContent>

        <TabsContent value="expand" className="p-4 bg-white rounded-lg border">
          <h4 className="font-bold mb-2">Expanding the Expression</h4>
          <div className="space-y-4">
            <p className="text-xl font-mono">Total cost = $2.59 × a + $1.69 × (10 - a)</p>
            <p className="text-xl font-mono">Total cost = $2.59 × a + $1.69 × 10 - $1.69 × a</p>
            <p className="text-xl font-mono">Total cost = $2.59 × a + $16.90 - $1.69 × a</p>
          </div>
          <p className="mt-4 text-gray-600">
            We used the distributive property to expand $1.69 × (10 - a) into $1.69 × 10 - $1.69 × a
          </p>
        </TabsContent>

        <TabsContent value="simplify" className="p-4 bg-white rounded-lg border">
          <h4 className="font-bold mb-2">Simplifying the Expression</h4>
          <div className="space-y-4">
            <p className="text-xl font-mono">Total cost = $2.59 × a + $16.90 - $1.69 × a</p>
            <p className="text-xl font-mono">Total cost = ($2.59 - $1.69) × a + $16.90</p>
            <p className="text-xl font-mono">Total cost = $0.90 × a + $16.90</p>
          </div>
          <p className="mt-4 text-gray-600">
            We combined like terms by adding the coefficients of a: $2.59 - $1.69 = $0.90
          </p>
          <p className="mt-2 text-gray-600">
            This simplified form shows that each additional pound of almonds (and one less pound of peanuts) increases
            the total cost by $0.90.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  )
}
