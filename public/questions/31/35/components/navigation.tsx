"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, ChevronRight, Home, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const pages = [
  { name: "Home", href: "/", icon: Home },
  { name: "1. Context Story", href: "/context", icon: BookOpen },
  { name: "2. Breaking Down the Problem", href: "/breakdown", icon: ChevronRight },
  { name: "3. Visualizing the Pyramid", href: "/visualize", icon: ChevronRight },
  { name: "4. Setting Up the Math", href: "/setup", icon: ChevronRight },
  { name: "5. Solve It Yourself", href: "/solve", icon: ChevronRight },
  { name: "6. Solution Explanation", href: "/solution", icon: ChevronRight },
  { name: "7. Similar Problem", href: "/similar", icon: ChevronRight },
  { name: "8. Different Context", href: "/different", icon: ChevronRight },
  { name: "9. Summary and Quiz", href: "/summary", icon: ChevronRight },
]

export function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {pages.map((page) => {
                  const Icon = page.icon
                  const isActive = pathname === page.href

                  return (
                    <Link
                      key={page.href}
                      href={page.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-2 text-lg font-medium ${
                        isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      {page.name}
                    </Link>
                  )
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <Link href="/" className="flex items-center gap-2 font-bold">
          <span className="hidden sm:inline-block">Brick Pyramid Math Problem</span>
        </Link>
        <nav className="hidden flex-1 items-center justify-center md:flex">
          <ul className="flex gap-6">
            {pages.map((page) => {
              const isActive = pathname === page.href

              return (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className={`text-sm font-medium ${
                      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {page.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
