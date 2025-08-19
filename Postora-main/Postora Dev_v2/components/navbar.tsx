"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "About Us", href: "#about" },
    { name: "Support", href: "#support" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white py-4 shadow-sm">
      <div className="container flex h-14 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <Image src="/images/postora-logo.png" alt="Postora Logo" width={120} height={30} className="h-auto w-auto" />
          <span className="sr-only">Postora</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-black hover:underline"
              prefetch={false}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <Button variant="ghost" className="text-black hover:bg-gray-100">
            Log In
          </Button>
          <Button className="bg-turquoise text-turquoise-foreground hover:bg-turquoise/90">Sign Up</Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden bg-transparent">
              <Menu className="h-6 w-6 text-black" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-white">
            <Link href="#" className="flex items-center gap-2 py-4" prefetch={false}>
              <Image
                src="/images/postora-logo.png"
                alt="Postora Logo"
                width={120}
                height={30}
                className="h-auto w-auto"
              />
              <span className="sr-only">Postora</span>
            </Link>
            <nav className="grid gap-4 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-black hover:underline"
                  prefetch={false}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="ghost" className="justify-start text-lg text-black hover:bg-gray-100">
                Log In
              </Button>
              <Button className="bg-turquoise text-turquoise-foreground hover:bg-turquoise/90">Sign Up</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
