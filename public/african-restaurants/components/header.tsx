"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">🌍</span>
          </div>
          <span className="font-bold text-xl text-foreground hidden sm:inline">Afro Taste</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/restaurants" className="text-foreground hover:text-primary transition">
            Restaurants
          </Link>
          <Link href="/countries" className="text-foreground hover:text-primary transition">
            By Country
          </Link>
          <Link href="/search" className="text-foreground hover:text-primary transition">
            Search Foods
          </Link>
          <Link href="/booking" className="text-foreground hover:text-primary transition font-medium">
            Book a Table
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-3">
            <Link href="/restaurants" className="block text-foreground hover:text-primary transition py-2">
              Restaurants
            </Link>
            <Link href="/countries" className="block text-foreground hover:text-primary transition py-2">
              By Country
            </Link>
            <Link href="/search" className="block text-foreground hover:text-primary transition py-2">
              Search Foods
            </Link>
            <Link href="/booking" className="block text-foreground hover:text-primary transition py-2 font-medium">
              Book a Table
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
