'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    content: "Vexa's Patient Recruitment Automation System has transformed our clinical trial recruitment process. The seamless EHR integration and automated screening have cut our recruitment time in half. It's like having an extra team member dedicated solely to finding the perfect study participants.",
    author: {
      name: 'Dr. Sarah Mitchell',
      role: 'Clinical Research Director',
    },
    rating: 5,
  },
  {
    content: "The dashboard is incredibly intuitive, and the automated eligibility determination has eliminated hours of manual screening. The system's ability to maintain HIPAA compliance while streamlining our workflow has made it an invaluable tool for our research team.",
    author: {
      name: 'James Cooper',
      role: 'Clinical Research Coordinator',
    },
    rating: 5,
  },
  {
    content: "What stands out about Vexa is how it's revolutionized our patient communication. The automated yet personalized messaging system has significantly improved our engagement rates. It's remarkable how much more efficient our recruitment process has become.",
    author: {
      name: 'Dr. Emily Watson',
      role: 'Principal Investigator',
    },
    rating: 5,
  },
]

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
            Real Stories from Medical Students
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
            See how Smartify is helping students conquer USMLE STEP 1 and in-house exams.
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.author.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="h-full flex flex-col">
                <CardContent className="flex-grow flex flex-col justify-between p-6">
                  <div>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-lg font-medium mb-6">{testimonial.content}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{testimonial.author.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.author.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials