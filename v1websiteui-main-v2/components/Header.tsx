'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Menu, Moon, Sun } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const Header = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold tracking-tight">
            Vexa Research
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/about" className="hover:text-primary transition-colors">Contact Sales</Link>
            <Link href="/download" className="hover:text-primary transition-colors">Platform</Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
            </Button>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="md:hidden p-2">
                <Menu className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4">
                <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                <Link href="/download" className="hover:text-primary transition-colors">Platform</Link>
                <Link href="/about#features" className="hover:text-primary transition-colors">Features</Link>
                <Link href="/about#why" className="hover:text-primary transition-colors">Why Vexa</Link>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="justify-start"
                >
                  {theme === 'dark' ? <Sun className="h-[1.2rem] w-[1.2rem] mr-2" /> : <Moon className="h-[1.2rem] w-[1.2rem] mr-2" />}
                  Toggle theme
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header
