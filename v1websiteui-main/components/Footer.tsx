'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Footer = () => {
  const [email, setEmail] = useState('')
  const [notification, setNotification] = useState({ message: '', type: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setNotification({ message: "You've been subscribed to our newsletter!", type: 'success' })
        setEmail('')
      } else {
        throw new Error('Failed to subscribe')
      }
    } catch (error) {
      setNotification({ message: "There was a problem subscribing. Please try again.", type: 'error' })
    }
  }

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Smartify</h3>
            <p className="text-sm text-muted-foreground">Transform your study materials into interactive exams</p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><FaTwitter size={20} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><FaFacebook size={20} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><FaLinkedin size={20} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><FaGithub size={20} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/download" className="hover:text-primary transition-colors">Download</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm mb-4">Subscribe to our newsletter for the latest updates and features.</p>
            {notification.message && (
              <div className={`mb-4 p-2 rounded text-sm ${notification.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {notification.message}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Smartify. All rights reserved.</p>
            <div className="mt-4 md:mt-0 space-x-4">
              <Link href="/terms" className="text-sm hover:text-primary transition-colors">Terms of Service</Link>
              <Link href="/privacy" className="text-sm hover:text-primary transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
