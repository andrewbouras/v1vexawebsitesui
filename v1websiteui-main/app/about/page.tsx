'use client'

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, BookOpen, Users, Brain, Zap, Trophy, Sparkles, Target, RefreshCw, ChartBar } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Card className="h-full bg-gradient-to-br from-primary/10 to-secondary/10 shadow-lg">
      <CardContent className="pt-6 h-full flex flex-col items-center text-center">
        <Icon className="w-12 h-12 mb-4 text-primary" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p>{description}</p>
      </CardContent>
    </Card>
  </motion.div>
)

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('mission')

  const tabs = [
    { id: 'mission', label: 'Our Mission' },
    { id: 'features', label: 'Features' },
    { id: 'why', label: 'Why Smartify' },
  ]

  return (
    <div className="container mx-auto px-4 py-16 pt-24 bg-gradient-to-b from-background to-background/50">
      <motion.h1 
        className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary leading-relaxed py-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Vexa Research
      </motion.h1>
      
      <div className="mb-12 flex justify-center space-x-4">
        {tabs.map(tab => (
          <button 
            key={tab.id}
            className={`px-6 py-3 rounded-full transition-all transform hover:scale-105 ${
              activeTab === tab.id 
                ? 'bg-primary text-primary-foreground shadow-lg' 
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <motion.section 
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {activeTab === 'mission' && (
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
            <p className="text-xl mb-8">
              At Vexa Research, we're revolutionizing patient recruitment in clinical trials through automation. 
              Our innovative platform streamlines the process while maintaining the highest standards of security and compliance.
            </p>
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6">Our Values</h3>
              <ul className="grid grid-cols-2 gap-6">
                {["Data Security & Compliance", "Innovation in Healthcare", "Open Standards", "Research Excellence"].map((value, index) => (
                  <li key={index} className="flex items-center justify-center p-4 bg-secondary/20 rounded-lg">
                    <Sparkles className="w-6 h-6 mr-2 text-primary" />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'features' && (
          <div>
            <h2 className="text-3xl font-semibold mb-8 text-center">What We Offer</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={GraduationCap}
                title="EHR Integration"
                description="Seamless integration with existing Electronic Health Record systems for efficient patient identification."
              />
              <FeatureCard 
                icon={BookOpen}
                title="Automated Screening"
                description="Advanced screening processes with adaptive questionnaires reducing manual effort."
              />
              <FeatureCard 
                icon={Users}
                title="Patient Communication"
                description="Automated, personalized engagement with potential participants throughout the recruitment process."
              />
              <FeatureCard 
                icon={Brain}
                title="Smart Analytics"
                description="Real-time insights and analytics for tracking recruitment progress and optimization."
              />
              <FeatureCard 
                icon={Zap}
                title="Rapid Implementation"
                description="Quick setup and integration with existing clinical workflows and systems."
              />
              <FeatureCard 
                icon={Trophy}
                title="Compliance Ready"
                description="Built-in HIPAA compliance and advanced data protection measures."
              />
            </div>
          </div>
        )}

        {activeTab === 'why' && (
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-8">Why Vexa Research?</h2>
            <p className="text-xl mb-12">
              Vexa Research bridges the gap between traditional recruitment methods and modern healthcare technology,
              offering a secure, efficient, and compliant solution for clinical trial recruitment.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 shadow-lg">
                <CardContent className="p-6">
                  <Target className="w-12 h-12 mb-4 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">Azure-Based Infrastructure</h3>
                  <p>Enterprise-grade security and reliability powered by Microsoft Azure.</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 shadow-lg">
                <CardContent className="p-6">
                  <Brain className="w-12 h-12 mb-4 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">Intelligent Matching</h3>
                  <p>Advanced algorithms for precise patient-trial matching using predefined criteria.</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 shadow-lg">
                <CardContent className="p-6">
                  <RefreshCw className="w-12 h-12 mb-4 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">Streamlined Workflow</h3>
                  <p>Automated processes that reduce manual effort and standardize recruitment procedures.</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 shadow-lg">
                <CardContent className="p-6">
                  <ChartBar className="w-12 h-12 mb-4 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">Research Dashboard</h3>
                  <p>Comprehensive analytics and reporting for tracking recruitment progress and outcomes.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </motion.section>
    </div>
  )
}
