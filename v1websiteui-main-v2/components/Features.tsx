'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Brain, Target, ChartBar } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'EHR Integration',
    description: 'Seamless integration with existing Electronic Health Record (EHR) systems, utilizing predefined criteria to identify potential study participants.'
  },
  {
    icon: Target,
    title: 'Cloud-Based Infrastructure',
    description: 'Leverages robust cloud platforms for scalability and reliability, implementing advanced data protection techniques and ensuring HIPAA compliance.'
  },
  {
    icon: ChartBar,
    title: 'Automated Screening Process',
    description: 'Employs adaptive questionnaires to streamline participant screening, reducing manual effort and human error, and standardizing eligibility assessments across studies.'
  },
  {
    icon: Brain,
    title: 'Intelligent Communication Module',
    description: 'Engages potential participants with customized messaging, clearly explaining study purposes and gauging interest, enhancing transparency and participant engagement.'
  },
  {
    icon: Target,
    title: 'User-Friendly Dashboard',
    description: 'Provides researchers with a comprehensive overview of the recruitment process, automating eligibility determination and follow-up processes, improving workflow efficiency and study management.'
  },
  {
    icon: ChartBar,
    title: 'Customization and Flexibility',
    description: 'Adapts to various study requirements and protocols, maintaining stringent security standards across all customizations, and supporting the diverse needs of different research teams and study types.'
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