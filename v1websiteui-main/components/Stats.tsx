'use client'

import { motion } from 'framer-motion'

const stats = [
  { id: 1, name: 'Accelerated Participant Identification', value: '60% faster' },
  { id: 2, name: 'Enhanced Screening Accuracy', value: '40% reduction in errors' },
  { id: 3, name: 'Improved Participant Engagement', value: '35% increase' },
  { id: 4, name: 'Efficient Disqualification Process', value: '80% within first two questions' },
]

const Stats = () => {
  return (
    <section className="bg-primary py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-primary-foreground sm:text-4xl lg:text-5xl">
            Vexa's Open Approach to Clinical Study Recruitment Automation
          </h2>
          <p className="mt-4 text-xl text-primary-foreground/80">
            Vexa Research is revolutionizing patient recruitment for clinical studies with our innovative automation system.
          </p>
        </div>
        <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 sm:gap-y-16 lg:gap-x-8">
          {stats.map((stat) => (
            <motion.div 
              key={stat.id} 
              className="border-t border-primary-foreground/10 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: stat.id * 0.1 }}
            >
              <dt className="text-base font-medium text-primary-foreground/80">
                {stat.name}
              </dt>
              <dd className="mt-2 text-5xl font-extrabold text-primary-foreground">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default Stats