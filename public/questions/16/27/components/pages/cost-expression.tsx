import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function CostExpression() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">💵 How Can We Write the Cost Expression?</h1>
        <p className="text-lg">Let's build the total cost expression step by step</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 bg-amber-50 border-amber-200">
          <h3 className="text-xl font-bold mb-4">Almonds Cost</h3>
          <div className="flex items-center space-x-4">
            <Image src="/pile-of-almonds.png" alt="Almonds" width={80} height={80} className="rounded-full" />
            <div>
              <p className="text-lg">
                Price per pound: <strong>$2.59</strong>
              </p>
              <p className="text-lg">
                Pounds of almonds: <strong>a</strong>
              </p>
              <div className="mt-4 p-3 bg-white rounded-lg border border-amber-200">
                <p className="text-xl font-mono">Almonds cost = $2.59 × a</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-amber-50 border-amber-200">
          <h3 className="text-xl font-bold mb-4">Peanuts Cost</h3>
          <div className="flex items-center space-x-4">
            <Image src="/shelled-peanuts-pile.png" alt="Peanuts" width={80} height={80} className="rounded-full" />
            <div>
              <p className="text-lg">
                Price per pound: <strong>$1.69</strong>
              </p>
              <p className="text-lg">
                Pounds of peanuts: <strong>(10 - a)</strong>
              </p>
              <div className="mt-4 p-3 bg-white rounded-lg border border-amber-200">
                <p className="text-xl font-mono">Peanuts cost = $1.69 × (10 - a)</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6 bg-blue-50 border-blue-200">
        <h3 className="text-xl font-bold mb-4">Total Cost Expression</h3>
        <p className="mb-4">To find the total cost, we add the cost of almonds and the cost of peanuts:</p>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <p className="text-xl font-mono">Total Cost = Almonds cost + Peanuts cost</p>
          </div>

          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <p className="text-xl font-mono">Total Cost = $2.59 × a + $1.69 × (10 - a)</p>
          </div>
        </div>

        <div className="mt-6 bg-yellow-100 p-4 rounded-lg">
          <p className="font-medium">
            <strong>Key Idea:</strong> We multiply each ingredient's price per pound by how many pounds we use, then add
            these costs together to get the total cost.
          </p>
        </div>
      </Card>
    </div>
  )
}
