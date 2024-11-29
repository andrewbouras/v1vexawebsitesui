'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    content: "As a Clinical Research Director, I was impressed by how Vexa's automation reduced our pre-screening time by 60%. The EHR integration is HIPAA-compliant and the protocol-specific filtering has significantly improved the quality of our candidate pool.",
    author: {
      name: 'Dr. Sarah Mitchell',
      role: 'Clinical Research Director',
    },
    rating: 5,
  },
  {
    content: "From an executive perspective, the ROI is clear. We've seen a 40% reduction in recruitment costs and shortened our enrollment timelines. The analytics dashboard provides the metrics we need for strategic decision-making in our trials.",
    author: {
      name: 'James Cooper',
      role: 'Clinical Operations Director',
    },
    rating: 5,
  },
  {
    content: "As PI, data quality is my priority. Vexa's screening algorithms have drastically reduced protocol deviations at the screening stage. The automated eligibility verification ensures we only engage with genuinely qualified candidates.",
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
            Real Stories from Trial Sponsors
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
            See how Vexa is helping sites meet enrollment goals in days, not weeks.
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