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
  const [activeTab, setActiveTab] = useState('upload')
  const [progress, setProgress] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showDerivatives, setShowDerivatives] = useState(false);
  const uploadButtonRef = useRef<HTMLButtonElement>(null);

  const steps = [
    { id: 'upload', title: 'Upload Materials' },
    { id: 'generate', title: 'Generate Questions' },
    { id: 'quiz', title: 'Take Quiz' },
    { id: 'results', title: 'Receive Derivatives' },
  ]

  useEffect(() => {
    if (activeTab === 'generate') {
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
      setActiveTab('generate')
      // Start the progress animation
      setProgress(0)
    }, 500) // Add a small delay for a more natural transition
  }

  const handleGenerateDerivatives = () => {
    // Reset progress
    setProgress(0)
    // Switch to the "Generate Questions" tab
    setActiveTab('generate')
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
          <h2 className="text-3xl font-bold mb-4 text-foreground">See Smartify in Action</h2>
          <p className="text-xl text-muted-foreground">Experience how easy it is to transform your study materials into interactive quizzes.</p>
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
                <TabsContent value="upload">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold mb-4">Upload Your Study Materials</h3>
                    <p className="mb-4">Simply drag and drop your PDF, Word documents, or text files to get started.</p>
                    <div className="relative inline-block">
                      <Button ref={uploadButtonRef} onClick={handleUpload}>Upload Files</Button>
                    </div>
                  </motion.div>
                </TabsContent>
                <TabsContent value="generate">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold mb-4">Advanced Question Generation</h3>
                    <p className="mb-4">Our sophisticated algorithms analyze your content and create relevant multiple-choice questions.</p>
                    <div className="bg-muted p-4 rounded-md">
                      <p className="font-mono">Generating questions... {progress}% complete</p>
                    </div>
                  </motion.div>
                </TabsContent>
                <TabsContent value="quiz">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Take Your Personalized Quiz</h3>
                    <p className="mb-4 text-foreground">Answer the generated questions to test your knowledge.</p>
                    <div className="bg-muted p-4 rounded-md">
                      <p className="font-semibold text-foreground">Question 1 of 10:</p>
                      <p className="mt-2 text-foreground">A 45-year-old man presents with sudden onset of severe chest pain radiating to his back. He describes the pain as tearing in nature. Physical examination reveals a difference in blood pressure between his right and left arms. Which of the following is the most likely diagnosis?</p>
                      <div className="mt-4 space-y-2">
                        {['A. Acute myocardial infarction', 'B. Aortic dissection', 'C. Pulmonary embolism', 'D. Pericarditis', 'E. Pneumothorax'].map((answer) => (
                          <Button 
                            key={answer}
                            variant="outline" 
                            className={`w-full justify-start transition-colors ${
                              selectedAnswer === answer 
                                ? answer === 'B. Aortic dissection'
                                  ? 'bg-green-700 hover:bg-green-600 text-white'
                                  : 'bg-red-700 hover:bg-red-600 text-white'
                                : 'hover:bg-accent'
                            }`}
                            onClick={() => handleAnswerClick(answer)}
                          >
                            {answer}
                          </Button>
                        ))}
                      </div>
                      {selectedAnswer && (
                        <p className="mt-4 font-semibold text-foreground">
                          {selectedAnswer === 'B. Aortic dissection' ? 'Correct!' : 'Incorrect. Try again.'}
                        </p>
                      )}
                      {selectedAnswer === 'B. Aortic dissection' && (
                        <ScrollArea className="h-[300px] mt-4 bg-muted p-4 rounded-md">
                          <p className="font-semibold mb-2 text-foreground">Explanation:</p>
                          <p>
                            Aortic dissection is the most likely diagnosis here, characterized by sudden, severe, tearing chest pain that radiates to the back. The key differentiator is the blood pressure discrepancy between the arms, which points to the involvement of the aortic arch. The dissection creates a false lumen, disrupting blood flow to branches of the aorta. This combination of tearing pain and BP asymmetry is classic and should immediately raise suspicion for aortic dissection.
                          </p>
                          <p className="mt-4 font-semibold">Differentiating the other options:</p>
                          <ul className="list-disc list-inside mt-2 space-y-2">
                            <li><strong>Acute MI:</strong> Crushing, squeezing pain, typically radiating to the left arm or jaw, without the tearing quality or BP difference seen in aortic dissection.</li>
                            <li><strong>PE:</strong> Presents with pleuritic chest pain and dyspnea, often with hypoxia, but lacks the tearing pain and BP discrepancy.</li>
                            <li><strong>Pericarditis:</strong> Sharp, pleuritic pain relieved by leaning forward, no BP difference or tearing pain.</li>
                            <li><strong>Pneumothorax:</strong> Sudden pleuritic pain with dyspnea and hyperresonance on percussion; BP difference is not a feature.</li>
                          </ul>
                          <p className="mt-4">
                            In short, the tearing nature of the pain and BP asymmetry should direct you immediately towards aortic dissection.
                          </p>
                        </ScrollArea>
                      )}
                    </div>
                  </motion.div>
                </TabsContent>
                <TabsContent value="results">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Receive Derivatives</h3>
                    <p className="mb-4 text-foreground">Based on your quiz performance, we generate <strong>derivative questions</strong> to reinforce your understanding.</p>
                    <div className="bg-card p-6 rounded-md shadow-md relative">
                      <div className="absolute top-2 right-2 flex items-center text-yellow-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-1">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-semibold">Students love this!</span>
                      </div>
                      <h4 className="text-lg font-semibold mb-3 text-foreground">How Derivative Questions Work:</h4>
                      <ul className="list-disc list-inside space-y-2 mb-4 text-foreground">
                        <li>We identify <em>key concepts</em> from the questions you answered incorrectly.</li>
                        <li>New questions are generated that approach these concepts from <em>different angles</em>.</li>
                        <li>This helps you gain a <strong>deeper, more comprehensive understanding</strong> of the topic.</li>
                      </ul>
                      <p className="mb-4 text-foreground">For example, based on the aortic dissection question, we might generate questions about:</p>
                      <ul className="list-disc list-inside space-y-2 mb-4 text-foreground">
                        <li>Differential diagnosis of chest pain</li>
                        <li>Risk factors for aortic dissection</li>
                        <li>Imaging techniques used to diagnose aortic dissection</li>
                        <li>Management and treatment of aortic dissection</li>
                      </ul>
                      <p className="mb-4 text-foreground">This approach ensures you thoroughly understand the topic from <strong>multiple perspectives</strong>.</p>
                      <Button 
                        onClick={handleGenerateDerivatives}
                        className="w-full"
                      >
                        Generate Derivative Questions
                      </Button>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">
                      <strong>Pro tip:</strong> Use derivative questions to focus your study on areas that need improvement, making your learning more efficient and effective.
                    </p>
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
