'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { GraduationCap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { FaApple, FaWindows } from 'react-icons/fa'
import Slider from 'react-slick'
import type { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Hero = () => {
  const { theme } = useTheme()
  const [questionsGenerated, setQuestionsGenerated] = useState(1000000)
  const [mounted, setMounted] = useState(false)
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(50); // Faster typing and deleting
  const [phraseIndex, setPhraseIndex] = useState(0);
  const rotatingPhrases = [
    "Question Bank Generation",
    "Anki-to-MCQs",
    "Sharing Lecture-based Questions",
    "Generating Endlessssssss MCQs"
  ]

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setQuestionsGenerated(prevCount => prevCount + Math.floor(Math.random() * 1000 + 500))
    }, 5000)

    let typingTimeout: NodeJS.Timeout;
    const handleTyping = () => {
      const currentPhrase = rotatingPhrases[phraseIndex];
      if (isDeleting) {
        if (displayText.length > 0) {
          // Deleting characters
          setDisplayText(prev => prev.slice(0, -1));
          typingTimeout = setTimeout(handleTyping, typingSpeed / 2); // Faster deleting
        } else {
          // Move to next phrase after deletion
          setIsDeleting(false);
          setPhraseIndex((phraseIndex + 1) % rotatingPhrases.length);
          typingTimeout = setTimeout(handleTyping, typingSpeed);
        }
      } else {
        if (displayText.length < currentPhrase.length) {
          // Typing characters
          setDisplayText(prev => currentPhrase.slice(0, prev.length + 1));
          typingTimeout = setTimeout(handleTyping, typingSpeed); // Faster typing
        } else {
          // Full text typed, wait 2 seconds before starting deletion
          typingTimeout = setTimeout(() => {
            setIsDeleting(true);
            handleTyping();
          }, 2000);
        }
      }
    };

    typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => {
      clearInterval(interval)
      clearTimeout(typingTimeout);
    }
  }, [displayText, isDeleting])

  if (!mounted) return null

  const isDarkMode = theme === 'dark'

  return (
    <section className={`relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background pointer-events-none" />
        <svg className="w-full h-full" viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="background-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={isDarkMode ? "#1a1a1a" : "#f0f0f0"} />
              <stop offset="100%" stopColor={isDarkMode ? "#2a2a2a" : "#fafafa"} />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#background-gradient)" />
        </svg>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={`text-5xl lg:text-7xl font-extrabold mb-6 leading-tight ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Revolutionize Your Learning Experience
            </h1>
            <p className={`text-xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Smartify uses advanced algorithms and data-driven insights to create a personalized learning journey tailored to your unique needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                variant="default" 
                size="lg" 
                className={`rainbow-hover ${isDarkMode ? 'bg-gray-100 text-gray-900 hover:bg-gray-200' : 'bg-gray-900 text-gray-100 hover:bg-gray-800'} transition-colors duration-300 transform hover:scale-105 text-lg py-6 px-8`}
                asChild
              >
                <Link href="/waitlist">
                  <FaApple className="mr-3 h-6 w-6" />
                  Join Waitlist for Mac
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className={`rainbow-hover ${isDarkMode ? 'border-gray-100 text-gray-100 hover:bg-gray-800' : 'border-gray-900 text-gray-900 hover:bg-gray-100'} transition-colors duration-300 transform hover:scale-105 text-lg py-6 px-8`}
                asChild
              >
                <Link href="/waitlist">
                  <FaWindows className="mr-3 h-6 w-6" />
                  Join Waitlist for Windows
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
        {/* <motion.div 
          className="mt-20 text-center relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Trusted by Top Institutions for{' '}
            <span className="inline-block text-primary">
              {displayText}
            </span>
          </p>
          <Slider
            dots={false}
            infinite={true}
            speed={5000}
            slidesToShow={5}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={0}
            cssEase="linear"
            pauseOnHover={false}
            arrows={false}
            className="university-logo-slider"
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 4,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 2,
                }
              }
            ]}
          >
            {[...Array(2)].flatMap(() => 
              Array.from({ length: 23 }, (_, i) => i + 1).map((index) => (
                <div key={`${index}-${Math.random()}`} className="px-4">
                  <Image
                    src={`/images/university-logo-${index}.png`}
                    alt={`University ${index}`}
                    width={120}
                    height={60}
                    className={`mx-auto filter ${isDarkMode ? 'brightness-90' : 'brightness-75'} hover:brightness-100 transition-all duration-300`}
                    style={{ objectFit: 'contain', height: '60px' }}
                  />
                </div>
              ))
            )}
          </Slider>
        </motion.div> */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className={`text-3xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
            Over <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{questionsGenerated.toLocaleString()}</span> questions generated with Smartify
          </p>
          <Button 
            variant="default" 
            size="lg" 
            className={`rainbow-hover mt-8 ${isDarkMode ? 'bg-gray-100 text-gray-900 hover:bg-gray-200' : 'bg-gray-900 text-gray-100 hover:bg-gray-800'} transition-colors duration-300 transform hover:scale-105 text-xl py-8 px-10`}
            asChild
          >
            <Link href="/download">
              <GraduationCap className="mr-2 h-5 w-5" />
              Start Generating Questions
            </Link>
          </Button>
        </motion.div>
      </div>
      <style jsx>{`
        .rainbow-border {
          position: relative;
        }
        .rainbow-border::after {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(60deg, #FF0080, #FF0000, #FF8000, #FFD500, #14F195, #00FFE0, #00B8FF);
          background-size: 200% 200%;
          animation: moveGradient 15s ease infinite;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.5;
        }
        @keyframes moveGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes diamondFade {
          from {
            fill: white;
          }
          to {
            fill: black;
          }
        }

        @keyframes whirl {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes snakeMove {
          0% {
            stroke-dashoffset: 2000;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        :global(.snake-line) {
          stroke-dasharray: 2000;
          stroke-dashoffset: 2000;
          animation: snakeMove 12s linear infinite;
        }

        .flow-line {
          fill: none;
          stroke: ${isDarkMode ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)"};
          stroke-width: 2;
          stroke-dasharray: 2000;
          stroke-dashoffset: 2000;
          transition: stroke 0.3s ease;
        }

        .flow-line-1 {
          animation: flowAnimation 35s linear infinite;
        }

        .flow-line-2 {
          animation: flowAnimation 40s linear infinite reverse;
        }

        @keyframes flowAnimation {
          from {
            stroke-dashoffset: 2000;
          }
          to {
            stroke-dashoffset: -2000;
          }
        }

        /* Example of making an element fit the screen width */
        .diamond-border {
          width: 100vw;
          height: auto;
          /* Adjust other properties as needed */
        }

        /* Example of making an element fit the screen height */
        .diamond-border-vertical {
          height: 100vh;
          width: auto;
          /* Adjust other properties as needed */
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .bg-gradient-to-b {
          background: linear-gradient(180deg, ${isDarkMode ? "#1a1a1a" : "#f0f0f0"}, ${isDarkMode ? "#2a2a2a" : "#fafafa"});
        }
      `}</style>
    </section>
  )
}

export default Hero
