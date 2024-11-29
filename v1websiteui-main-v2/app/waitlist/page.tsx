'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function WaitlistPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [organization, setOrganization] = useState('')
  const [role, setRole] = useState('')
  const [notification, setNotification] = useState({ message: '', type: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, organization, role }),
      })

      if (response.ok) {
        setNotification({ message: "You've been added to our waitlist. We'll be in touch soon!", type: 'success' })
        setName('')
        setEmail('')
        setOrganization('')
        setRole('')
      } else {
        throw new Error('Failed to submit')
      }
    } catch (error) {
      setNotification({ message: "There was a problem submitting your information. Please try again.", type: 'error' })
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 pt-24">
      <h1 className="text-4xl font-bold mb-6 text-center">Transform Your Clinical Trial Recruitment</h1>
      <p className="text-lg text-center mb-8">
        Join the waitlist for Vexa's Patient Recruitment Automation System. 
        Our HIPAA-compliant platform integrates with your EHR system to streamline 
        participant identification and engagement.
      </p>
      
      {notification.message && (
        <div className={`mb-4 p-4 rounded ${notification.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {notification.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="email">Work Email</Label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="organization">Research Organization/Institution</Label>
          <Input 
            id="organization" 
            value={organization} 
            onChange={(e) => setOrganization(e.target.value)} 
            required 
          />
        </div>
        <div>
          <Label htmlFor="role">Your Role</Label>
          <Input 
            id="role" 
            value={role} 
            onChange={(e) => setRole(e.target.value)} 
            placeholder="e.g., Principal Investigator, Research Coordinator"
            required 
          />
        </div>
        <Button type="submit" className="w-full">Request Early Access</Button>
      </form>
    </div>
  )
}
