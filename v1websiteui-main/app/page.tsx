import Hero from '@/components/Hero'
import FeaturesOverview from '@/components/FeaturesOverview'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import CallToAction from '@/components/CallToAction'
import DemoSection from '@/components/DemoSection'
import Stats from '@/components/Stats'
import FAQ from '@/components/FAQ'
import AppShowcase from '@/components/AppShowcase'

export default function Home() {
  return (
    <div>
      <Hero />
      <AppShowcase />
      <Stats />
      <FeaturesOverview />
      <DemoSection />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CallToAction />
    </div>
  )
}