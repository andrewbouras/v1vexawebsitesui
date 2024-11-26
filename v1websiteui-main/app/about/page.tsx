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
        About Smartify
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
              At Smartify, we're revolutionizing the way students learn and prepare for exams. 
              We believe everyone has the potential to excel, and we're here to provide the tools to make it happen.
            </p>
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6">Our Values</h3>
              <ul className="grid grid-cols-2 gap-6">
                {["Innovation in education", "Accessibility for all learners", "Continuous improvement", "Data-driven learning insights"].map((value, index) => (
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
                title="Personalized Learning"
                description="Tailored quizzes that adapt to your knowledge level and learning pace."
              />
              <FeatureCard 
                icon={BookOpen}
                title="Comprehensive Coverage"
                description="Generate questions from a wide range of subjects and topics."
              />
              <FeatureCard 
                icon={Users}
                title="Collaborative Learning"
                description="Share quizzes and compete with friends to make studying more engaging."
              />
              <FeatureCard 
                icon={Brain}
                title="Smart Insights"
                description="Get personalized study recommendations based on your performance."
              />
              <FeatureCard 
                icon={Zap}
                title="Rapid Quiz Generation"
                description="Create quizzes from your study materials in seconds."
              />
              <FeatureCard 
                icon={Trophy}
                title="Gamified Learning"
                description="Earn points, badges, and climb leaderboards as you study."
              />
            </div>
          </div>
        )}

        {activeTab === 'why' && (
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-8">Why Smartify?</h2>
            <p className="text-xl mb-12">
              Smartify bridges the gap between standardized question banks and user-created flashcards, 
              offering a unique, tailored learning experience that adapts to your needs.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 shadow-lg">
                <CardContent className="p-6">
                  <Target className="w-12 h-12 mb-4 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">Resource-Specific Questions</h3>
                  <p>Questions generated directly from your materials, ensuring relevance to your curriculum.</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 shadow-lg">
                <CardContent className="p-6">
                  <Brain className="w-12 h-12 mb-4 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">Intelligent Question Formulation</h3>
                  <p>Questions that promote deeper understanding and critical thinking, not just memorization.</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 shadow-lg">
                <CardContent className="p-6">
                  <RefreshCw className="w-12 h-12 mb-4 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">Adaptive Difficulty</h3>
                  <p>Questions adjust in difficulty based on your performance, providing a personalized experience.</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 shadow-lg">
                <CardContent className="p-6">
                  <ChartBar className="w-12 h-12 mb-4 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">Comprehensive Analysis</h3>
                  <p>In-depth analysis of your learning patterns with targeted improvement recommendations.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </motion.section>
    </div>
  )
}
