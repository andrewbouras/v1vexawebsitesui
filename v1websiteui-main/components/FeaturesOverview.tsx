'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Zap, BarChart, Users } from 'lucide-react'

const features = [
  {
    name: 'Question Generation',
    description: 'Our advanced algorithms create tailored multiple-choice questions from your study materials.',
    icon: Brain,
  },
  {
    name: 'Instant Feedback',
    description: 'Get immediate results and explanations to reinforce your learning.',
    icon: Zap,
  },
  {
    name: 'Progress Tracking',
    description: 'Monitor your improvement over time with detailed analytics and insights.',
    icon: BarChart,
  },
  {
    name: 'Collaborative Learning',
    description: 'Share quizzes and compete with friends to make studying more engaging.',
    icon: Users,
  },
]

const FeaturesOverview = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-base font-semibold tracking-wide uppercase text-primary">Features</h2>
          <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
            A better way to learn
          </p>
          <p className="mt-4 max-w-2xl text-xl text-muted-foreground mx-auto">
            Smartify combines cutting-edge technology with proven learning techniques to supercharge your study sessions.
          </p>
        </motion.div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="p-3 rounded-full inline-block bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <CardTitle className="mt-4 text-xl font-semibold">{feature.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesOverview