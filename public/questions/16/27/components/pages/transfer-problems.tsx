"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, XCircle } from "lucide-react"

export default function TransferProblems() {
  const [activeTab, setActiveTab] = useState("near")
  const [nearPecansExpression, setNearPecansExpression] = useState("")
  const [nearCostExpression, setNearCostExpression] = useState("")
  const [farDaisiesExpression, setFarDaisiesExpression] = useState("")
  const [farCostExpression, setFarCostExpression] = useState("")

  const [isPecansCorrect, setIsPecansCorrect] = useState<boolean | null>(null)
  const [isNearCostCorrect, setIsNearCostCorrect] = useState<boolean | null>(null)
  const [isDaisiesCorrect, setIsDaisiesCorrect] = useState<boolean | null>(null)
  const [isFarCostCorrect, setIsFarCostCorrect] = useState<boolean | null>(null)

  const checkNearPecans = () => {
    const normalized = nearPecansExpression.replace(/\s+/g, "").toLowerCase()
    setIsPecansCorrect(normalized === "8-c" || normalized === "(8-c)")
  }

  const checkNearCost = () => {
    const normalized = nearCostExpression.replace(/\s+/g, "").replace(/\$/g, "").toLowerCase()
    setIsNearCostCorrect(
      normalized === "3.10c+2.30(8-c)" || normalized === "3.10×c+2.30×(8-c)" || normalized === "3.10*c+2.30*(8-c)",
    )
  }

  const checkFarDaisies = () => {
    const normalized = farDaisiesExpression.replace(/\s+/g, "").toLowerCase()
    setIsDaisiesCorrect(normalized === "20-r" || normalized === "(20-r)")
  }

  const checkFarCost = () => {
    const normalized = farCostExpression.replace(/\s+/g, "").replace(/\$/g, "").toLowerCase()
    setIsFarCostCorrect(
      normalized === "4r+2.50(20-r)" || normalized === "4×r+2.50×(20-r)" || normalized === "4*r+2.50*(20-r)",
    )
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">🔄 Apply What You've Learned!</h1>
        <p className="text-lg">Try these new problems using the same concepts</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-2 mb-4">
          <TabsTrigger value="near">Near Transfer</TabsTrigger>
          <TabsTrigger value="far">Far Transfer</TabsTrigger>
        </TabsList>

        <TabsContent value="near" className="space-y-6">
          <Card className="p-6 bg-amber-50 border-amber-200">
            <h3 className="text-xl font-bold mb-4">🔄 New Mix, Same Structure!</h3>
            <p className="mb-4">
              Don also wants to prepare 8 pounds of snack mix using caramel-coated cashews at $3.10/lb and
              caramel-coated pecans at $2.30/lb.
            </p>
            <p className="mb-4">Let c represent the pounds of cashews. Write the expressions.</p>

            <div className="space-y-6 mt-6">
              <div>
                <Label htmlFor="pecans-expression" className="text-lg font-medium">
                  Write the expression for pounds of pecans:
                </Label>
                <div className="flex items-center mt-2">
                  <p className="font-mono mr-2">Pecans weight = </p>
                  <div className="flex-1 relative">
                    <Input
                      id="pecans-expression"
                      value={nearPecansExpression}
                      onChange={(e) => setNearPecansExpression(e.target.value)}
                      placeholder="Enter your expression"
                      className="pr-10"
                    />
                    {isPecansCorrect !== null && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        {isPecansCorrect ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500" />
                        )}
                      </div>
                    )}
                  </div>
                  <Button onClick={checkNearPecans} className="ml-2" variant="outline">
                    Check
                  </Button>
                </div>

                {isPecansCorrect === false && (
                  <p className="text-red-500 mt-2">Try again! Remember the total weight is 8 pounds.</p>
                )}

                {isPecansCorrect === true && (
                  <p className="text-green-500 mt-2">Correct! The pecans' weight is 8 - c pounds.</p>
                )}
              </div>

              <div className="mt-6">
                <Label htmlFor="near-cost-expression" className="text-lg font-medium">
                  Write the expression for total cost:
                </Label>
                <div className="flex items-center mt-2">
                  <p className="font-mono mr-2">Total Cost = </p>
                  <div className="flex-1 relative">
                    <Input
                      id="near-cost-expression"
                      value={nearCostExpression}
                      onChange={(e) => setNearCostExpression(e.target.value)}
                      placeholder="Enter your expression"
                      className="pr-10"
                    />
                    {isNearCostCorrect !== null && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        {isNearCostCorrect ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500" />
                        )}
                      </div>
                    )}
                  </div>
                  <Button onClick={checkNearCost} className="ml-2" variant="outline">
                    Check
                  </Button>
                </div>

                {isNearCostCorrect === false && (
                  <p className="text-red-500 mt-2">
                    Try again! Remember to multiply each price by its corresponding weight.
                  </p>
                )}

                {isNearCostCorrect === true && (
                  <p className="text-green-500 mt-2">Correct! The total cost is $3.10 × c + $2.30 × (8 - c).</p>
                )}
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="far" className="space-y-6">
          <Card className="p-6 bg-green-50 border-green-200">
            <h3 className="text-xl font-bold mb-4">🚀 Different Setting, Same Math!</h3>
            <p className="mb-4">
              A florist is preparing 20 bouquets. Each bouquet contains roses and daisies. Roses cost $4 per stem,
              daisies cost $2.50 per stem.
            </p>
            <p className="mb-4">
              Let r represent the number of roses. Write expressions for the number of daisies and total flower cost.
            </p>

            <div className="space-y-6 mt-6">
              <div>
                <Label htmlFor="daisies-expression" className="text-lg font-medium">
                  Write the expression for number of daisies:
                </Label>
                <div className="flex items-center mt-2">
                  <p className="font-mono mr-2">Number of daisies = </p>
                  <div className="flex-1 relative">
                    <Input
                      id="daisies-expression"
                      value={farDaisiesExpression}
                      onChange={(e) => setFarDaisiesExpression(e.target.value)}
                      placeholder="Enter your expression"
                      className="pr-10"
                    />
                    {isDaisiesCorrect !== null && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        {isDaisiesCorrect ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500" />
                        )}
                      </div>
                    )}
                  </div>
                  <Button onClick={checkFarDaisies} className="ml-2" variant="outline">
                    Check
                  </Button>
                </div>

                {isDaisiesCorrect === false && (
                  <p className="text-red-500 mt-2">Try again! Remember the total is 20 bouquets.</p>
                )}

                {isDaisiesCorrect === true && (
                  <p className="text-green-500 mt-2">Correct! The number of daisies is 20 - r.</p>
                )}
              </div>

              <div className="mt-6">
                <Label htmlFor="far-cost-expression" className="text-lg font-medium">
                  Write the expression for total cost:
                </Label>
                <div className="flex items-center mt-2">
                  <p className="font-mono mr-2">Total Cost = </p>
                  <div className="flex-1 relative">
                    <Input
                      id="far-cost-expression"
                      value={farCostExpression}
                      onChange={(e) => setFarCostExpression(e.target.value)}
                      placeholder="Enter your expression"
                      className="pr-10"
                    />
                    {isFarCostCorrect !== null && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        {isFarCostCorrect ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500" />
                        )}
                      </div>
                    )}
                  </div>
                  <Button onClick={checkFarCost} className="ml-2" variant="outline">
                    Check
                  </Button>
                </div>

                {isFarCostCorrect === false && (
                  <p className="text-red-500 mt-2">
                    Try again! Remember to multiply each price by its corresponding quantity.
                  </p>
                )}

                {isFarCostCorrect === true && (
                  <p className="text-green-500 mt-2">Correct! The total cost is $4 × r + $2.50 × (20 - r).</p>
                )}
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-blue-50 border-blue-200">
            <h3 className="text-lg font-bold mb-2">Transferring Knowledge</h3>
            <p>Notice how we used the same mathematical structure in a completely different context:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Instead of pounds of nuts, we have numbers of flowers</li>
              <li>Instead of a weight total, we have a quantity total</li>
              <li>The mathematical relationship is exactly the same!</li>
            </ul>
            <p className="mt-4">
              This is the power of algebra - the same patterns work across many different situations.
            </p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
