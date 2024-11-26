'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function WaitlistPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [institution, setInstitution] = useState('')
  const [reason, setReason] = useState('')
  const [notification, setNotification] = useState({ message: '', type: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, institution, reason }),
      })

      if (response.ok) {
        setNotification({ message: "You've been added to our waitlist. We'll be in touch soon!", type: 'success' })
        setName('')
        setEmail('')
        setInstitution('')
        setReason('')
      } else {
        throw new Error('Failed to submit')
      }
    } catch (error) {
      setNotification({ message: "There was a problem submitting your information. Please try again.", type: 'error' })
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 pt-24">
      <h1 className="text-4xl font-bold mb-6 text-center">Join the Smartify Waitlist</h1>
      <p className="text-lg text-center mb-8">We're currently in beta with select institutions. Sign up to be notified when we open access!</p>
      
      {notification.message && (
        <div className={`mb-4 p-4 rounded ${notification.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {notification.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="institution">Institution (optional)</Label>
          <Input id="institution" value={institution} onChange={(e) => setInstitution(e.target.value)} />
        </div>
        <div>
          <Label htmlFor="reason">Why are you interested in Smartify? (optional)</Label>
          <Textarea id="reason" value={reason} onChange={(e) => setReason(e.target.value)} />
        </div>
        <Button type="submit" className="w-full">Join Waitlist</Button>
      </form>
    </div>
  )
}
