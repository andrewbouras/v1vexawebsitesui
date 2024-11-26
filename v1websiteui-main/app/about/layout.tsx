import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Smartify | Transform Your Study Materials',
  description: 'Learn about Smartify, our mission, and the team behind the revolutionary study tool.',
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="about-section">
      {children}
    </section>
  )
}