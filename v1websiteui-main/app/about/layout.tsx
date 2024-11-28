import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Vexa Research | Patient Recruitment Automation',
  description: 'Learn about Vexa Research, our innovative Patient Recruitment Automation System, and how we\'re transforming clinical trial recruitment through digital innovation.',
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="about-section">
      {children}
    </section>
  )
}