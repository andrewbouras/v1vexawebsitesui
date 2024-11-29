'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const CallToAction = () => {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-extrabold sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="block">Vexa's Open Approach to Clinical Study Recruitment Automation</span>
          <span className="block mt-2">Streamline your clinical trials today.</span>
        </motion.h2>
        <motion.p 
          className="mt-4 text-lg leading-6 text-primary-foreground/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Join the forefront of clinical research with Vexa's innovative Patient Recruitment Automation System.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Button 
            variant="secondary" 
            size="lg" 
            className="mt-8 w-full sm:w-auto transition-transform duration-300 hover:scale-105" 
            asChild
          >
            <Link href="/about">
              Learn more
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

export default CallToAction
