import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Monitor, Apple, Cpu, HardDrive, Zap, Brain, BarChart, Layout, Download } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Download Smartify | Transform Your Study Materials',
  description: 'Download Smartify now and start transforming your study materials into interactive quizzes. Available for Windows and Mac.',
}

export default function DownloadPage() {
  return (
    <div className="container mx-auto px-4 py-12 pt-24">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-6 text-primary leading-tight py-2">
          Download Smartify
        </h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">Transform your study materials into interactive quizzes with smart learning technology</p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
          <Link href="/waitlist" passHref>
            <Button size="lg" className="group transition-all duration-300 ease-in-out transform hover:scale-105">
              <Monitor className="mr-2 h-5 w-5 group-hover:animate-pulse" /> Join Waitlist for Windows
            </Button>
          </Link>
          <Link href="/waitlist" passHref>
            <Button size="lg" className="group transition-all duration-300 ease-in-out transform hover:scale-105">
              <Apple className="mr-2 h-5 w-5 group-hover:animate-pulse" /> Join Waitlist for Mac
            </Button>
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: Zap, title: "Smart Analysis", description: "Instantly analyze and transform your study materials" },
            { icon: Brain, title: "Interactive Quizzes", description: "Generate engaging quizzes from your content" },
            { icon: Layout, title: "Customizable Learning Paths", description: "Create personalized study plans" },
            { icon: BarChart, title: "Progress Tracking", description: "Monitor your learning with detailed analytics" }
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
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Smartify</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Efficient Learning", description: "Optimize your study time with AI-powered content analysis" },
            { title: "Personalized Experience", description: "Tailor your learning journey to your unique needs" },
            { title: "Continuous Improvement", description: "Regular updates with new features and improvements" },
            { title: "Cross-Platform", description: "Seamlessly use Smartify on Windows and Mac devices" }
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
            { question: "How do I install Smartify?", answer: "Download the appropriate version for your operating system, run the installer, and follow the on-screen instructions." },
            { question: "Is Smartify free to use?", answer: "Smartify offers a free trial period. After that, a subscription is required to access all features." },
            { question: "Can I use Smartify offline?", answer: "Yes, most features of Smartify work offline. However, some advanced features may require an internet connection." },
            { question: "How often is Smartify updated?", answer: "We release updates monthly, including bug fixes and new features. Your app will notify you when updates are available." }
          ].map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="text-center bg-primary/5 p-10 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-primary">Need Help?</h2>
        <p className="mb-6 text-lg">Our support team is here to assist you with any questions or issues.</p>
        <Link href="mailto:support@studysmartify.onmicrosoft.com" passHref>
          <Button variant="outline" size="lg" className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-primary hover:text-primary-foreground">
            Contact Support
          </Button>
        </Link>
      </section>
    </div>
  )
}
