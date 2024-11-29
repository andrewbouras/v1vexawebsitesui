'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Zap, BarChart, Users } from 'lucide-react'

const features = [
  {
    name: 'EHR Integration',
    description: 'Seamless integration with existing Electronic Health Record (EHR) systems to identify potential study participants.',
    icon: Brain,
  },
  {
    name: 'Cloud-Based Infrastructure',
    description: 'Leverages robust cloud platforms for scalability and reliability, ensuring HIPAA compliance and data security.',
    icon: Zap,
  },
  {
    name: 'Automated Screening Process',
    description: 'Employs adaptive questionnaires to streamline participant screening, reducing manual effort and human error.',
    icon: BarChart,
  },
  {
    name: 'Intelligent Communication Module',
    description: 'Engages potential participants with customized messaging, enhancing transparency and participant engagement.',
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
            Vexa's Secure Approach to Clinical Study Recruitment Automation
          </p>
          <p className="mt-4 max-w-2xl text-xl text-muted-foreground mx-auto">
            Vexa Research combines cutting-edge technology with enterprise-grade security to revolutionize patient recruitment for clinical studies.
          </p>
        </motion.div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
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