'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Brain, Target, ChartBar } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI-Powered MCQ Generation',
    description: 'Our advanced AI algorithms create high-quality, relevant multiple-choice questions from your study materials.'
  },
  {
    icon: Target,
    title: 'Personalized Learning',
    description: 'Adaptive quizzes that adjust to your knowledge level, focusing on areas where you need improvement.'
  },
  {
    icon: ChartBar,
    title: 'Progress Tracking',
    description: 'Detailed analytics and insights to help you monitor your learning progress and identify weak areas.'
  }
]

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <feature.icon className="w-12 h-12 mb-4 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features