'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { Search, Download, MessageSquare, ChevronDown, CheckCircle, HelpCircle, Star } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

// Remove TreeNodeProps interface and TreeNode component - no longer needed

// Remove emrFilters and CriteriaFlowProps - no longer needed

interface Message {
  id: number;
  content: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

interface ConversationStep {
  content: string;
  response: string;
}

interface Participant {
  id: string;
  name: string;
  number: string;
  status: string;
  site: string;
  criteria: ('complete' | 'incomplete')[];
}

const mockParticipants: Participant[] = [
  {
    id: '1',
    name: 'John Jones',
    number: '(703) 555-0123',
    status: 'Active',
    site: 'Gastroenterology Associates',
    criteria: ['complete', 'complete', 'incomplete', 'complete'],
  },
  {
    id: '2',
    name: 'Carol Cushing',
    number: '(571) 555-0456',
    status: 'Pending',
    site: 'Dermatology Center',
    criteria: ['incomplete', 'incomplete', 'incomplete', 'incomplete'],
  },
];

const fullStudyCriteria = [
  { type: 'inclusion', criteria: [
    'Age 18-65 years',
    'Diagnosed with Type 2 Diabetes for ≥6 months',
    'HbA1c levels between 7.0% and 10.0%',
    'Currently on stable dose of Metformin (≥1500 mg/day) for ≥3 months',
    'BMI between 25-40 kg/m²',
    'Willing to maintain current diet and exercise habits',
    'Able to provide written informed consent'
  ]},
  { type: 'exclusion', criteria: [
    'History of severe hypoglycemia within past 12 months',
    'Significant cardiovascular disease',
    'Hepatic dysfunction (ALT/AST >2.5x ULN)',
    'Renal impairment (eGFR <60 mL/min/1.73m²)',
    'Pregnant or planning pregnancy',
    'Participation in another clinical trial within 30 days',
    'Any condition that investigator deems unsuitable'
  ]}
];

const DemoSection = () => {
  const [activeTab, setActiveTab] = useState('criteria')
  const [progress, setProgress] = useState(0)
  const [selectedCriteria, setSelectedCriteria] = useState<string[]>([])
  const [patientMatches, setPatientMatches] = useState(0)
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState(0); // Add this new state
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [siteFilter, setSiteFilter] = useState('')

  const steps = [
    { id: 'criteria', title: 'EMR Criteria' },
    { id: 'import', title: 'Patient Import' },
    { id: 'engagement', title: 'Auto-Engagement' },
    { id: 'dashboard', title: 'Dashboard Tracking' },
  ]

  const eligibilityCriteria = [
    { id: 'emr-age', label: 'EMR Filter: Age 18-65', value: '547 matches' },
    { id: 'emr-diagnosis', label: 'EMR Filter: Type 2 Diabetes', value: '892 matches' },
    { id: 'emr-medication', label: 'EMR Filter: On Metformin', value: '723 matches' },
  ]

  const initialMessage = {
    id: 1,
    content: "Hello, this is Dr. Smith's office staff from the Gastroenterology Associates. I was reviewing your chart and think you may qualify for a research study we're conducting. The study's aim is to better detect liver cancer. Are you interested in learning more? If so, I just have a couple questions to ask. If not, you can let me know and I won't reach out again in the future.",
    sender: 'bot',
    timestamp: new Date()
  } as Message;

  const conversationScript = [
    {
      id: 1,
      content: "Hi there, I'm Sarah from Dr. Smith's office at the Gastroenterology Associates. I noticed from your recent blood work that you might be a good candidate for our liver enzyme study. Would you like to learn more?",
      sender: 'bot',
      delay: 0,
      typingDuration: 2000,
    },
    {
      id: 2,
      content: "Hi Sarah, yes I would like to learn more about it.",
      sender: 'user',
      delay: 3000,
      typingDuration: 1000,
    },
    {
      id: 3,
      content: "Great! We're studying a new treatment for elevated liver enzymes. Before I share more details, I need to verify a few things. Have you been diagnosed with any liver conditions?",
      sender: 'bot',
      delay: 4000,
      typingDuration: 2000,
    },
    {
      id: 4,
      content: "Yes, I was diagnosed with fatty liver disease about 6 months ago.",
      sender: 'user',
      delay: 4000,
      typingDuration: 1500,
    },
    {
      id: 5,
      content: "Thank you for sharing that. Are you currently taking any medications for your liver, or participating in other clinical trials?",
      sender: 'bot',
      delay: 4500,
      typingDuration: 2000,
    },
    {
      id: 6,
      content: "No, I'm not taking any liver medications or participating in other trials.",
      sender: 'user',
      delay: 4000,
      typingDuration: 1500,
    },
    {
      id: 7,
      content: "Based on what you've shared, you seem like a good candidate for our study. Would you like to schedule a consultation with Dr. Kataria to discuss the details?",
      sender: 'bot',
      delay: 5000,
      typingDuration: 2000,
    },
    {
      id: 8,
      content: "Yes, I'd like that. When could we schedule it?",
      sender: 'user',
      delay: 4000,
      typingDuration: 1000,
    }
  ];

  const handleCriteriaToggle = (criteriaId: string) => {
    setSelectedCriteria(prev => 
      prev.includes(criteriaId) 
        ? prev.filter(id => id !== criteriaId)
        : [...prev, criteriaId]
    )
  }

  const simulatePatientMatching = () => {
    setProgress(0)
    setActiveTab('matching')
  }

  const simulatePatientImport = () => {
    setProgress(0)
    setActiveTab('import')
  }

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (activeTab === 'matching') {
      setProgress(0)
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval)
            setPatientMatches(Math.floor(Math.random() * 50) + 20)
            return 100
          }
          return prev + 1
        })
      }, 30)
    }

    return () => clearInterval(interval)
  }, [activeTab])

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (activeTab === 'import') {
      setProgress(0)
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval)
            setPatientMatches(Math.floor(Math.random() * (50000 - 10000) + 10000)) // Random number between 1000-5000
            return 100
          }
          return prev + 1
        })
      }, 30)
    }

    return () => clearInterval(interval)
  }, [activeTab])

  useEffect(() => {
    if (activeTab === 'engagement') {
      // Immediately show the first message
      setMessages([{
        id: conversationScript[0].id,
        content: conversationScript[0].content,
        sender: conversationScript[0].sender,
        timestamp: new Date()
      }]);
      
      let totalDelay = 0;
      
      // Start from the second message (index 1)
      conversationScript.slice(1).forEach((message) => {
        setTimeout(() => {
          if (message.sender === 'bot') {
            setIsTyping(true);
            setTimeout(() => {
              setIsTyping(false);
              setMessages(prev => [...prev, {
                id: message.id,
                content: message.content,
                sender: message.sender,
                timestamp: new Date()
              }]);
            }, message.typingDuration / 2);
          } else {
            setMessages(prev => [...prev, {
              id: message.id,
              content: message.content,
              sender: message.sender,
              timestamp: new Date()
            }]);
          }
        }, totalDelay);
        
        totalDelay += message.sender === 'bot' ? message.delay / 1.5 : message.delay / 2;
      });
    }
  }, [activeTab]);

  const filteredParticipants = mockParticipants.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-foreground">Automate Patient Recruitment from EMR</h2>
          <p className="text-xl text-muted-foreground">
            Export eligible patients from your EMR and let us handle the outreach
          </p>
        </motion.div>

        <Card className="max-w-4xl mx-auto bg-card">
          <CardContent className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                {steps.map((step) => (
                  <TabsTrigger key={step.id} value={step.id}>{step.title}</TabsTrigger>
                ))}
              </TabsList>
              <div className="mt-8">
                <TabsContent value="criteria">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="space-y-8">
                      <div className="text-center">
                        <h3 className="text-2xl font-semibold mb-3">Simple 3-Step EMR Export</h3>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                          Stop spending hours manually reviewing patient records. Export a basic patient list and let our AI handle the complex screening.
                        </p>
                      </div>

                      <div className="grid md:grid-cols-3 gap-6">
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                          className="bg-primary/5 p-6 rounded-lg text-center"
                        >
                          <div className="mb-4">
                            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                              <Download className="h-6 w-6 text-primary" />
                            </div>
                            <h4 className="font-semibold">1. Export Basic List</h4>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Simple export of patients matching basic age and diagnosis criteria
                          </p>
                        </motion.div>

                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="bg-primary/5 p-6 rounded-lg text-center"
                        >
                          <div className="mb-4">
                            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                              <MessageSquare className="h-6 w-6 text-primary" />
                            </div>
                            <h4 className="font-semibold">2. We Handle Screening</h4>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Automated conversations qualify patients against all criteria
                          </p>
                        </motion.div>

                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="bg-primary/5 p-6 rounded-lg text-center"
                        >
                          <div className="mb-4">
                            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                              <CheckCircle className="h-6 w-6 text-primary" />
                            </div>
                            <h4 className="font-semibold">3. You Get Matches</h4>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Receive fully qualified, ready-to-enroll patient matches
                          </p>
                        </motion.div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-primary/5 p-6 rounded-lg">
                          <h4 className="font-semibold mb-4 text-lg">Proven Results</h4>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                              <span>Time Saved per Patient</span>
                              <span className="font-bold text-primary">45 minutes</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                              <span>Average Screening Completion</span>
                              <span className="font-bold text-primary">24 hours</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                              <span>Patient Response Rate</span>
                              <span className="font-bold text-primary">68%</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-primary/5 p-6 rounded-lg">
                          <h4 className="font-semibold mb-4 text-lg">Get Started Now</h4>
                          <p className="text-sm text-muted-foreground mb-6">
                            Start with a simple EMR export of your patient population. Our platform handles the complex screening process automatically.
                          </p>
                          <Button 
                            className="w-full"
                            onClick={simulatePatientImport}
                          >
                            Begin Patient Import
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="import">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold mb-4">Importing Patient List</h3>
                    <div className="bg-muted p-4 rounded-md">
                      <div className="mb-4">
                        <p className="font-mono">Processing EMR export... {progress}%</p>
                        <div className="w-full bg-secondary h-2 rounded-full mt-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>
                      {progress === 100 && (
                        <div className="text-center">
                          <p className="text-2xl font-bold">{patientMatches.toLocaleString()} Patients Imported</p>
                          <p className="text-muted-foreground mt-2">
                            Capable of working with as many patients as you upload
                          </p>
                          <Button className="mt-4" onClick={() => setActiveTab('engagement')}>
                            Begin Patient Outreach
                          </Button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="matching">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold mb-4">Matching Patients</h3>
                    <div className="bg-muted p-4 rounded-md">
                      <div className="mb-4">
                        <p className="font-mono">Scanning patient records... {progress}%</p>
                        <div className="w-full bg-secondary h-2 rounded-full mt-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>
                      {progress === 100 && (
                        <div className="text-center">
                          <p className="text-2xl font-bold">{patientMatches} Potential Matches Found</p>
                          <Button className="mt-4" onClick={() => setActiveTab('engagement')}>
                            Begin Patient Outreach
                          </Button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </TabsContent>
                
                <TabsContent value="engagement">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Patient Engagement Example</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Through automated text conversations, we gather specific inclusion/exclusion criteria information from each patient, 
                          ensuring thorough pre-screening without burdening your staff.
                        </p>
                      </div>
                      <ScrollArea className="h-[500px] w-full rounded-lg bg-slate-100 p-4">
                        <div className="space-y-4">
                          {messages.map((message) => (
                            <div
                              key={message.id}
                              className={cn(
                                "flex",
                                message.sender === 'user' ? "justify-end" : "justify-start"
                              )}
                            >
                              <div
                                className={cn(
                                  "rounded-lg px-4 py-2 max-w-[80%]",
                                  message.sender === 'user' 
                                    ? "bg-blue-500 text-white rounded-br-none"
                                    : "bg-gray-200 text-gray-900 rounded-bl-none"
                                )}
                              >
                                {message.content}
                              </div>
                            </div>
                          ))}
                          {isTyping && (
                            <div className="flex justify-start">
                              <div className="bg-gray-200 text-gray-900 rounded-lg px-4 py-2 rounded-bl-none">
                                Typing...
                              </div>
                            </div>
                          )}
                        </div>
                      </ScrollArea>
                    </div>
                  </motion.div>
                </TabsContent>
                
                <TabsContent value="dashboard">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Recruitment Progress Dashboard</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Your central hub for monitoring recruitment progress. Track patient responses, 
                          view screening completion rates, and manage participant statuses—all in one place. 
                          Real-time updates keep your entire research team aligned.
                        </p>
                        <div className="flex items-center gap-3 bg-card border p-3 rounded-md">
                          <Star className="h-4 w-4 text-primary shrink-0" />
                          <span className="text-sm">Receive instant notifications for fully qualified patient matches</span>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="relative flex-1 max-w-sm">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                              placeholder="Search participants..."
                              className="pl-8"
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="rounded-md border">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b bg-muted/50">
                                <th className="p-3 text-left">Name</th>
                                <th className="p-3 text-left">Number</th>
                                <th className="p-3 text-left">Status</th>
                                <th className="p-3 text-left">Site</th>
                                <th className="p-3 text-left">Criteria</th>
                                <th className="p-3 text-left">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {filteredParticipants.map((participant) => (
                                <tr key={participant.id} className="border-b">
                                  <td className="p-3">{participant.name}</td>
                                  <td className="p-3">{participant.number}</td>
                                  <td className="p-3">
                                    <span className={cn(
                                      "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium",
                                      participant.status === 'Active' 
                                        ? "bg-green-100 text-green-700"
                                        : "bg-yellow-100 text-yellow-700"
                                    )}>
                                      {participant.status}
                                    </span>
                                  </td>
                                  <td className="p-3">{participant.site}</td>
                                  <td className="p-3">
                                    <div className="flex gap-1">
                                      {participant.criteria.map((status, i) => (
                                        status === 'complete' 
                                          ? <CheckCircle key={i} className="h-5 w-5 text-green-500" />
                                          : <HelpCircle key={i} className="h-5 w-5 text-yellow-500" />
                                      ))}
                                    </div>
                                  </td>
                                  <td className="p-3">
                                    <Button variant="ghost" size="sm" className="flex items-center gap-2">
                                      <MessageSquare className="h-4 w-4" /> Chat
                                    </Button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              </div>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default DemoSection
