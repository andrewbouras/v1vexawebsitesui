'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What platforms does Smartify support?",
    answer: "Smartify is a desktop application available for both Mac and Windows operating systems. It's designed to provide a seamless study experience on your computer."
  },
  {
    question: "How does Smartify generate questions?",
    answer: "Smartify uses advanced algorithms to analyze your study materials and generate relevant multiple-choice questions. Our system understands context and key concepts to create questions that effectively test your knowledge and promote active recall."
  },
  {
    question: "Can I use Smartify for any subject?",
    answer: "Yes! Smartify is designed to work with a wide range of subjects, from sciences and humanities to professional certifications. Our system adapts to the content you provide, making it versatile for various fields of study."
  },
  {
    question: "How does Smartify differ from other study resources like UWorld or TrueLearn?",
    answer: "While UWorld and TrueLearn offer pre-made question banks, Smartify generates custom questions from your own study materials. This allows for more personalized and targeted practice, directly aligned with your specific course content or exam preparation needs."
  },
  {
    question: "Can Smartify be used alongside resources like Mehlman Medical?",
    answer: "Absolutely! Smartify complements resources like Mehlman Medical by allowing you to create practice questions from their study guides. This enhances your learning by providing active recall practice tailored to these high-yield materials."
  },
  {
    question: "How does Smartify compare to flashcard apps like Anki?",
    answer: "While Anki is great for flashcard-based memorization, Smartify focuses on generating multiple-choice questions that more closely mimic exam formats. Smartify also offers more advanced question types and analytics, making it ideal for comprehensive test preparation."
  },
  {
    question: "Can I customize the difficulty of the questions?",
    answer: "Absolutely! Smartify allows you to adjust the difficulty level of generated questions. You can set it to match your current knowledge level or challenge yourself with more advanced questions as you progress."
  },
  {
    question: "Is my study material kept confidential?",
    answer: "Yes, we take your privacy seriously. All uploaded study materials are encrypted and used solely for generating questions for your personal use. We never share your content with third parties or use it for any purposes other than providing our service to you."
  },
  {
    question: "How many questions can Smartify generate from my study material?",
    answer: "The number of questions Smartify can generate depends on the length and complexity of your study material. Generally, we can produce hundreds of unique questions from a typical textbook chapter or lecture notes. You can also set a preferred number of questions per study session."
  },
  {
    question: "Can I create my own questions in Smartify?",
    answer: "Yes, Smartify allows you to manually create and edit questions within the application. This feature enables you to combine generated questions with your own custom content, giving you full control over your study materials."
  },
  {
    question: "How does Smartify handle complex subjects with formulas or diagrams?",
    answer: "Smartify supports rich media content, including mathematical formulas, chemical equations, and images. Our system can generate questions that incorporate these elements, and you can also manually add or edit such content to ensure comprehensive coverage of your study material."
  },
  {
    question: "Can I collaborate with others or share my question sets?",
    answer: "Yes, Smartify includes collaboration features. You can create study groups, share question sets with classmates or colleagues, and even participate in collaborative question creation. This makes it great for group study sessions or team training scenarios."
  },
  {
    question: "How often is Smartify updated with new features?",
    answer: "We're constantly working to improve Smartify and add new features. We typically release updates on a monthly basis, incorporating user feedback and the latest advancements in learning science to enhance your study experience."
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
