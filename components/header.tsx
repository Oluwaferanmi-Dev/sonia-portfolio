"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Instagram, Twitter } from "lucide-react"
import { Playfair_Display } from "next/font/google"
import { cn } from "@/lib/utils"

const playfair = Playfair_Display({ subsets: ["latin"] })

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4",
        isScrolled ? "bg-white shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto max-w-6xl flex items-center justify-between">
        <Link href="/" className={cn("text-xl font-bold text-[#333333]", playfair.className)}>
          Sonia U.
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium text-[#555555] hover:text-[#D8A1A1]">
            About
          </Link>
          <Link href="/" className="text-sm font-medium text-[#555555] hover:text-[#D8A1A1]">
            Services
          </Link>
          <Link href="/" className="text-sm font-medium text-[#555555] hover:text-[#D8A1A1]">
            Portfolio
          </Link>
          <Link href="/" className="text-sm font-medium text-[#555555] hover:text-[#D8A1A1]">
            Testimonials
          </Link>
          <Link href="/" className="text-sm font-medium text-[#555555] hover:text-[#D8A1A1]">
            Blog
          </Link>
          <Link href="/" className="text-sm font-medium text-[#555555] hover:text-[#D8A1A1]">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/" aria-label="Instagram">
            <Instagram className="w-5 h-5 text-[#555555] hover:text-[#D8A1A1]" />
          </Link>
          <Link href="/" aria-label="Twitter">
            <Twitter className="w-5 h-5 text-[#555555] hover:text-[#D8A1A1]" />
          </Link>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4 mt-8">
              <Link href="/" className="text-lg font-medium text-[#555555] hover:text-[#D8A1A1]">
                About
              </Link>
              <Link href="/" className="text-lg font-medium text-[#555555] hover:text-[#D8A1A1]">
                Services
              </Link>
              <Link href="/" className="text-lg font-medium text-[#555555] hover:text-[#D8A1A1]">
                Portfolio
              </Link>
              <Link href="/" className="text-lg font-medium text-[#555555] hover:text-[#D8A1A1]">
                Testimonials
              </Link>
              <Link href="/" className="text-lg font-medium text-[#555555] hover:text-[#D8A1A1]">
                Blog
              </Link>
              <Link href="/" className="text-lg font-medium text-[#555555] hover:text-[#D8A1A1]">
                Contact
              </Link>
              <div className="flex items-center space-x-4 pt-4">
                <Link href="/" aria-label="Instagram">
                  <Instagram className="w-5 h-5 text-[#555555] hover:text-[#D8A1A1]" />
                </Link>
                <Link href="/" aria-label="Twitter">
                  <Twitter className="w-5 h-5 text-[#555555] hover:text-[#D8A1A1]" />
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
