import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"
import { HelpCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function ProblemPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-100">
      <div className="container mx-auto px-4 py-12">
        <Card className="p-8 shadow-lg">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Mike's Brightness Records</h1>

            <CardContent className="w-full max-w-xl">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-center">Sunlight Category</TableHead>
                    <TableHead className="text-center">Brightness Level</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { category: "Dim", level: 2, description: "The lowest brightness level" },
                    { category: "Illuminated", level: 3, description: "Medium-low brightness" },
                    { category: "Radiant", level: 4, description: "Medium-high brightness" },
                    { category: "Dazzling", level: 5, description: "The highest brightness level" },
                  ].map((item) => (
                    <TableRow key={item.category}>
                      <TableCell className="text-center font-medium">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="flex items-center justify-center gap-1">
                              {item.category} <HelpCircle className="h-4 w-4 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{item.description}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </TableCell>
                      <TableCell className="text-center">{item.level}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>

            <div className="mt-8 p-4 bg-yellow-100 rounded-lg border border-yellow-300 max-w-xl">
              <p className="text-lg font-medium text-yellow-800">
                Note: Each brightness level is 9 times brighter than the previous level!
              </p>
            </div>

            <div className="mt-12 flex justify-between w-full max-w-xl">
              <Link href="/">
                <Button variant="outline">Previous</Button>
              </Link>
              <Link href="/pattern">
                <Button>Next: Understand the Pattern</Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
