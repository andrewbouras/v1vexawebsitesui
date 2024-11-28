'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"

interface TreeNodeProps {
  x: number;
  y: number;
  label: string;
  children?: TreeNodeProps[];
}

const TreeNode: React.FC<TreeNodeProps> = ({ x, y, label, children }) => (
  <g>
    <circle cx={x} cy={y} r="20" fill="#4A90E2" />
    <text x={x} y={y} textAnchor="middle" dy=".3em" fill="white">{label}</text>
    {children && children.map((child, index) => (
      <g key={index}>
        <line x1={x} y1={y} x2={child.x} y2={child.y} stroke="#4A90E2" strokeWidth="2" />
        <TreeNode {...child} />
      </g>
    ))}
  </g>
);

const DemoSection = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [progress, setProgress] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showDerivatives, setShowDerivatives] = useState(false);
  const uploadButtonRef = useRef<HTMLButtonElement>(null);

  const steps = [
    { id: 'overview', title: 'Overview' },
    { id: 'features', title: 'Key Features' },
    { id: 'implementation', title: 'Implementation & Impact' },
    { id: 'future', title: 'Future Directions' },
  ]

  useEffect(() => {
    if (activeTab === 'features') {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval)
            return 100
          }
          return prevProgress + 1
        })
      }, 20)
      return () => clearInterval(interval)
    }
  }, [activeTab])

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer)
  }

  const handleUpload = () => {
    // Simulate file upload
    setTimeout(() => {
      setActiveTab('features')
      // Start the progress animation
      setProgress(0)
    }, 500) // Add a small delay for a more natural transition
  }

  const handleGenerateDerivatives = () => {
    // Reset progress
    setProgress(0)
    // Switch to the "Generate Questions" tab
    setActiveTab('features')
  }

  const treeData = {
    x: 300, y: 50, label: "Aortic Dissection",
    children: [
      { x: 150, y: 150, label: "Symptoms", children: [
        { x: 100, y: 250, label: "Pain" },
        { x: 200, y: 250, label: "BP Diff" },
      ]},
      { x: 450, y: 150, label: "Diagnosis", children: [
        { x: 400, y: 250, label: "Imaging" },
        { x: 500, y: 250, label: "Labs" },
      ]},
    ]
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-foreground">Vexa's Open Approach to Clinical Study Recruitment Automation</h2>
          <p className="text-xl text-muted-foreground">Streamlining patient recruitment for clinical studies with innovative technology.</p>
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
                <TabsContent value="overview">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold mb-4">Introduction</h3>
                    <p className="mb-4">The landscape of clinical research is rapidly evolving, with digital technologies playing an increasingly crucial role in streamlining processes and improving outcomes. At the forefront of this evolution is the challenge of efficient and secure patient recruitment for clinical studies. Vexa Research has developed an innovative Patient Recruitment Automation System that not only addresses these challenges but also embodies the principles of openness in healthcare technology.</p>
                    <h3 className="text-xl font-semibold mb-4">Background</h3>
                    <p className="mb-4">Traditional patient recruitment methods for clinical studies are often plagued by inefficiencies, data security concerns, and compliance issues. These challenges can significantly delay research timelines, increase costs, and potentially impact the quality of healthcare advancements. The need for a solution that can navigate these complexities while adhering to the principles of open source, open standards, open learning, and open data has never been more pressing.</p>
                  </motion.div>
                </TabsContent>
                <TabsContent value="features">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                    <ul className="list-disc list-inside space-y-2 mb-4">
                      <li><strong>EHR Integration:</strong> Seamless integration with existing Electronic Health Record (EHR) systems, utilizing predefined criteria to identify potential study participants, ensuring data interoperability through open standards.</li>
                      <li><strong>Cloud-Based Infrastructure:</strong> Leverages robust cloud platforms for scalability and reliability, implements advanced data protection techniques, ensures HIPAA compliance and maintains the highest levels of data security.</li>
                      <li><strong>Automated Screening Process:</strong> Employs adaptive questionnaires to streamline participant screening, reduces manual effort and human error, standardizes eligibility assessments across studies.</li>
                      <li><strong>Intelligent Communication Module:</strong> Engages potential participants with customized messaging, clearly explains study purposes and gauges interest, enhances transparency and participant engagement in the research process.</li>
                      <li><strong>User-Friendly Dashboard:</strong> Provides researchers with a comprehensive overview of the recruitment process, automates eligibility determination and follow-up processes, improves workflow efficiency and study management.</li>
                      <li><strong>Customization and Flexibility:</strong> Adapts to various study requirements and protocols, maintains stringent security standards across all customizations, supports the diverse needs of different research teams and study types.</li>
                    </ul>
                  </motion.div>
                </TabsContent>
                <TabsContent value="implementation">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold mb-4">Implementation and Impact</h3>
                    <p className="mb-4">Our system has been successfully implemented in various clinical studies, demonstrating significant improvements in recruitment efficiency and data management:</p>
                    <ul className="list-disc list-inside space-y-2 mb-4">
                      <li><strong>Accelerated Participant Identification:</strong> Rapidly screens large patient databases against complex eligibility criteria, typically identifies eligible participants 60% faster than traditional methods.</li>
                      <li><strong>Enhanced Screening Accuracy:</strong> Automated screening has shown to reduce human error by up to 40%, consistently applies inclusion/exclusion criteria across all potential participants.</li>
                      <li><strong>Improved Participant Engagement:</strong> Personalized communication increases response rates by an average of 35%, clear, timely information provision has led to a 25% increase in study retention rates.</li>
                      <li><strong>Efficient Disqualification Process:</strong> Quickly identifies and filters out ineligible participants, saving valuable research time, in recent studies, over 80% of disqualifications occurred within the first two screening questions.</li>
                      <li><strong>Data Security and Compliance:</strong> Zero reported data breaches across all implementations, 100% compliance with HIPAA and other relevant regulations.</li>
                      <li><strong>Resource Optimization:</strong> Reduces administrative workload by up to 50%, allowing research staff to focus on qualified participants, cuts overall recruitment timelines by an average of 30%.</li>
                    </ul>
                  </motion.div>
                </TabsContent>
                <TabsContent value="future">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold mb-4">Future Directions</h3>
                    <ul className="list-disc list-inside space-y-2 mb-4">
                      <li><strong>AI-Driven Recruitment Optimization:</strong> Implementing machine learning algorithms to further refine the recruitment process and predict study suitability.</li>
                      <li><strong>Expanded Interoperability:</strong> Working towards seamless integration with a wider range of healthcare systems and databases globally.</li>
                      <li><strong>Patient-Centric Features:</strong> Developing tools that empower patients to take a more active role in finding and participating in relevant clinical studies.</li>
                      <li><strong>Global Collaboration Hub:</strong> Creating a platform for international multi-center studies to share recruitment strategies and best practices.</li>
                      <li><strong>Real-Time Analytics:</strong> Enhancing our dashboard with predictive analytics to forecast recruitment trends and bottlenecks.</li>
                      <li><strong>Blockchain Integration:</strong> Exploring blockchain technology for even more secure and transparent data management.</li>
                    </ul>
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
