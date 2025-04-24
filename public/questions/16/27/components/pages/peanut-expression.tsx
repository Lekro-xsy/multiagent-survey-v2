import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function PeanutExpression() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">🧮 How to Express the Peanuts' Weight?</h1>
        <p className="text-lg">Let's build the expression step by step</p>
      </div>

      <Card className="p-6 bg-blue-50 border-blue-200">
        <h3 className="text-xl font-bold mb-4">The Weight Relationship</h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <p className="text-xl font-mono">Almond weight + Peanut weight = 10 pounds</p>
          </div>

          <div className="mt-6">
            <h4 className="font-bold mb-2">Solve for Peanut weight:</h4>
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <p className="text-xl font-mono">Peanut weight = 10 - a</p>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 bg-yellow-100 border-yellow-200">
          <h3 className="text-lg font-bold mb-2">Concept Tip</h3>
          <p>
            If <strong>a</strong> is the weight of almonds, and the total weight is 10 pounds, then what's left must be
            peanuts!
          </p>
          <div className="mt-4">
            <p className="font-medium">Think of it like:</p>
            <p className="mt-2">Total (10 pounds) - What we used for almonds (a) = What's left for peanuts</p>
          </div>
        </Card>

        <Card className="p-6 bg-green-50 border-green-200">
          <h3 className="text-lg font-bold mb-2">Fill in the Blanks</h3>
          <p className="mb-4">Complete the expression for peanuts' weight:</p>

          <div className="flex items-center space-x-2 mb-4">
            <p className="font-mono">Peanuts weight = </p>
            <Input defaultValue="10" className="w-16 text-center" readOnly />
            <p className="font-mono"> - </p>
            <Input defaultValue="a" className="w-16 text-center" readOnly />
          </div>

          <p className="text-sm text-gray-600 mt-4">
            This expression tells us how many pounds of peanuts we need based on how many pounds of almonds (a) we use.
          </p>
        </Card>
      </div>
    </div>
  )
}
