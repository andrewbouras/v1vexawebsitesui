'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    name: 'Secure Data Upload',
    description: 'Upload your patient data through our secure, HIPAA-compliant platform with enterprise-grade encryption.',
  },
  {
    name: 'Smart Processing',
    description: 'Our system automatically processes and organizes your data, making it ready for efficient patient outreach.',
  },
  {
    name: 'Automated Communication',
    description: 'Engage patients through our intelligent messaging system with customized, compliant text messages.',
  },
  {
    name: 'Real-time Dashboard',
    description: 'Track recruitment progress, patient responses, and study metrics through our comprehensive analytics dashboard.',
  },
]

const HowItWorks = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-base font-semibold tracking-wide uppercase text-primary">How It Works</h2>
          <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Vexa's Reliable Approach to Clinical Study Recruitment Automation
          </p>
          <p className="mt-4 max-w-2xl text-xl text-muted-foreground mx-auto">
            Streamlining the clinical study recruitment process with innovative technology and open principles.
          </p>
        </motion.div>

        <div className="mt-20">
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-muted"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 bg-background text-lg font-medium">
                The Process
              </span>
            </div>
          </div>

          <div className="mt-12 max-w-lg mx-auto grid gap-10 lg:grid-cols-4 lg:max-w-none">
            {steps.map((step, index) => (
              <motion.div 
                key={step.name}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground">
                  <span className="text-xl font-bold">{index + 1}</span>
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-medium">{step.name}</h3>
                  <p className="mt-2 text-base text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks