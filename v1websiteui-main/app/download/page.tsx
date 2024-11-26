import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Monitor, Apple, Cpu, HardDrive, Zap, Brain, BarChart, Layout, Download } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Vexa Research | Patient Recruitment Automation System',
  description: 'Transform your clinical trial recruitment with our innovative automation system. Seamlessly integrate with EHR systems and accelerate your research timeline.',
}

export default function DownloadPage() {
  return (
    <div className="container mx-auto px-4 py-12 pt-24">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-6 text-primary leading-tight py-2">
          Vexa Research Platform
        </h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">Accelerate your clinical trial recruitment with our innovative Patient Recruitment Automation System</p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
          <Link href="/demo" passHref>
            <Button size="lg" className="group transition-all duration-300 ease-in-out transform hover:scale-105">
              <Monitor className="mr-2 h-5 w-5 group-hover:animate-pulse" /> Request Demo
            </Button>
          </Link>
          <Link href="/contact" passHref>
            <Button size="lg" className="group transition-all duration-300 ease-in-out transform hover:scale-105">
              <Download className="mr-2 h-5 w-5 group-hover:animate-pulse" /> Contact Sales
            </Button>
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: Zap, title: "EHR Integration", description: "Seamless integration with existing Electronic Health Record systems" },
            { icon: Brain, title: "Automated Screening", description: "Smart questionnaires for efficient participant screening" },
            { icon: Layout, title: "Secure Communication", description: "HIPAA-compliant participant engagement system" },
            { icon: BarChart, title: "Analytics Dashboard", description: "Real-time recruitment progress tracking" }
          ].map((feature, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
              <CardContent className="flex items-center p-6 bg-primary/5">
                <feature.icon className="h-12 w-12 mr-6 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">System Requirements</h2>
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <Cpu className="h-5 w-5 mr-2 text-primary" />
                <span>2 GHz dual-core processor or better</span>
              </div>
              <div className="flex items-center">
                <HardDrive className="h-5 w-5 mr-2 text-primary" />
                <span>4 GB RAM (8 GB recommended)</span>
              </div>
              <div className="flex items-center">
                <Monitor className="h-5 w-5 mr-2 text-primary" />
                <span>1280x720 display resolution</span>
              </div>
              <div className="flex items-center">
                <HardDrive className="h-5 w-5 mr-2 text-primary" />
                <span>500 MB available space</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Vexa</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Azure Infrastructure", description: "Enterprise-grade security and reliability" },
            { title: "HIPAA Compliant", description: "Advanced data protection and privacy measures" },
            { title: "Rapid Implementation", description: "Quick setup and integration with existing systems" },
            { title: "Customizable Workflow", description: "Adaptable to various study requirements" }
          ].map((reason, index) => (
            <Card key={index} className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-3">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {[
            { question: "How does the EHR integration work?", answer: "Our system seamlessly connects with existing EHR systems using predefined criteria to identify potential study participants." },
            { question: "Is the platform HIPAA compliant?", answer: "Yes, our platform is fully HIPAA compliant and uses advanced data protection techniques to ensure security." },
            { question: "Can we customize the screening process?", answer: "Yes, the platform's flexibility allows customization of screening criteria and workflows while maintaining security standards." },
            { question: "What kind of support do you provide?", answer: "We offer comprehensive technical support and training to ensure smooth implementation and operation." }
          ].map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="text-center bg-primary/5 p-10 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-primary">Ready to Transform Your Clinical Trial Recruitment?</h2>
        <p className="mb-6 text-lg">Our team is here to help you streamline your recruitment process.</p>
        <Link href="mailto:sales@vexa.com" passHref>
          <Button variant="outline" size="lg" className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-primary hover:text-primary-foreground">
            Contact Sales Team
          </Button>
        </Link>
      </section>
    </div>
  )
}
