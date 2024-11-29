'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Building2, Mail, Phone, Shield, Users, Zap, PartyPopper } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { toast } from "sonner"

interface BenefitCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon: Icon, title, description }) => (
  <motion.div whileHover={{ scale: 1.02 }}>
    <Card className="h-full bg-gradient-to-br from-primary/10 to-secondary/10">
      <CardContent className="pt-6 flex flex-col items-center text-center">
        <Icon className="w-8 h-8 mb-4 text-primary" />
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
)

export default function ContactSalesPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      toast.success("Thanks for reaching out! 🎉", {
        description: "We'll get back to you soon.",
        duration: 4000
      })

      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      })
    } catch (error) {
      toast.error("Failed to submit form. Please try again.")
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-16 pt-24">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Contact Our Sales Team
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Ready to transform your clinical trial recruitment? Our team is here to help you get started.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <Input
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <Input
                type="email"
                placeholder="Work Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <Input
                placeholder="Company Name"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
              <Textarea
                placeholder="How can we help you?"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Contact Sales'}
            </Button>
          </form>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <span>dhruv@vexaresearch.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <span>+1 (703) 915-4673</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold mb-6">Enterprise Benefits</h2>
          <div className="grid gap-6">
            <BenefitCard
              icon={Shield}
              title="Enterprise Security"
              description="HIPAA-compliant infrastructure with end-to-end encryption and advanced security measures."
            />
            <BenefitCard
              icon={Users}
              title="Dedicated Support"
              description="24/7 priority support with a dedicated customer success manager."
            />
            <BenefitCard
              icon={Building2}
              title="Custom Integration"
              description="Tailored solutions to match your organization's specific needs and workflows."
            />
            <BenefitCard
              icon={Zap}
              title="Priority Features"
              description="Early access to new features and custom development opportunities."
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
