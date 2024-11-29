'use client'

import { motion } from 'framer-motion'

const stats = [
  { id: 1, name: 'Patient Recruitment', value: 'Leading cause of trial delays' },
  { id: 2, name: 'Protocol Complexity', value: 'Rising study requirements' },
  { id: 3, name: 'Patient Retention', value: 'Critical success factor' },
  { id: 4, name: 'Global Impact', value: 'Affecting millions worldwide' },
]

const Stats = () => {
  return (
    <section className="bg-primary py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-primary-foreground sm:text-5xl lg:text-6xl">
            Clinical Research Challenges
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Understanding the key barriers in modern clinical trials
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
              <dt className="text-lg font-semibold text-primary-foreground">
                {stat.name}
              </dt>
              <dd className="mt-2 text-3xl font-bold text-primary-foreground">
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