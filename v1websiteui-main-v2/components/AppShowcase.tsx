'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

export default function AppShowcase() {
  return (
    <section className="py-12 bg-background w-full overflow-hidden">
      <div className="container w-full mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden shadow-2xl mx-auto w-full aspect-[16/9]">
              <div className="relative w-full h-full">
                <Image
                  src="/participant-screening.png"
                  alt="Patient Screening Interface"
                  width={1600}
                  height={900}
                  className="w-full h-full object-cover rounded-lg theme-dependent-image"
                  quality={100}
                  priority
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">
                  First, upload patients
                </div>
              </div>
            </Card>
            <Card className="overflow-hidden shadow-2xl mx-auto w-full aspect-[16/9]">
              <div className="relative w-full h-full">
                <Image
                  src="/clinical-dashboard.png"
                  alt="Clinical Trial Recruitment Dashboard"
                  width={1600}
                  height={900}
                  className="w-full h-full object-cover rounded-lg theme-dependent-image"
                  quality={100}
                  priority
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">
                  Second, track progress
                </div>
              </div>
            </Card>
          </div>
          <div className="absolute -z-10 inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 blur-3xl" />
        </motion.div>
      </div>
    </section>
  )
}