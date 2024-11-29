'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is Vexa's Patient Recruitment Automation System?",
    answer: "Vexa's Patient Recruitment Automation System is a comprehensive platform designed to streamline and secure the recruitment process for clinical studies. It leverages enterprise-grade security standards and promotes secure data handling to enhance efficiency and compliance."
  },
  {
    question: "Is the system secure and compliant with regulations?",
    answer: "Yes, Vexa's system leverages robust cloud platforms for scalability and reliability, implements advanced data protection techniques, and ensures HIPAA compliance to maintain the highest levels of data security."
  },
  {
    question: "How does the automated screening process work?",
    answer: "The system employs adaptive questionnaires to streamline participant screening, reducing manual effort and human error, and standardizing eligibility assessments across studies."
  },
  {
    question: "Can the system customize communication with participants?",
    answer: "Absolutely! Our intelligent communication module engages potential participants with customized messaging, clearly explains study purposes, and gauges interest to enhance transparency and participant engagement."
  },
  {
    question: "What features does the user-friendly dashboard offer?",
    answer: "The dashboard provides researchers with a comprehensive overview of the recruitment process, automates eligibility determination and follow-up processes, and improves workflow efficiency and study management."
  },
  {
    question: "Is the system adaptable to different study requirements?",
    answer: "Yes, Vexa's system adapts to various study requirements and protocols, maintains stringent security standards across all customizations, and supports the diverse needs of different research teams and study types."
  },
  {
    question: "What real-world applications has the system been used in?",
    answer: "Our system has been successfully implemented in various clinical studies, demonstrating significant improvements in recruitment efficiency, screening accuracy, participant engagement, and resource optimization."
  },
  {
    question: "How does Vexa ensure data security and compliance?",
    answer: "We have zero reported data breaches across all implementations and maintain 100% compliance with HIPAA and other relevant regulations, ensuring the highest levels of data security and privacy."
  },
  {
    question: "What are the future directions for Vexa's system?",
    answer: "We are working on advanced recruitment optimization, expanded interoperability, patient-centric features, a global collaboration hub, real-time analytics, and exploring innovative technologies for secure data management."
  }
]

const FAQ = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">Find answers to common questions about Smartify</p>
        </motion.div>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default FAQ
