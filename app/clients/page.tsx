"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Michael Schneider",
    role: "Founder & CEO, SneiTech Inc.",
    content:
      "Turning ideas into technology that matters. We focus on creating digital solutions that combine creativity, precision, and impact for global growth.",
    avatar: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1622000412/samples/people/boy-snow-hoodie.jpg",
  },
  {
    name: "Sarah Chen",
    role: "Chief Innovation Officer, Nexus Systems",
    content:
      "Snei Tech INC transformed our legacy systems into a modern, scalable architecture that has significantly improved our efficiency and speed-to-market.",
    avatar: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1622000412/samples/people/boy-snow-hoodie.jpg",
  },
  {
    name: "David Miller",
    role: "SaaS Founder, Prime Solutions",
    content:
      "The precision and attention to detail in their custom software development process is unmatched. They are a true innovation partner from start to finish.",
    avatar: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1622000412/samples/people/boy-snow-hoodie.jpg",
  },
  {
    name: "Elena Rodriguez",
    role: "Director of Technology, Aura Digital",
    content:
      "Working with Snei Tech INC felt like having an internal R&D team. Their ability to translate complex business needs into elegant code is exceptional.",
    avatar: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1622000412/samples/people/boy-snow-hoodie.jpg",
  },
]

const partners = [
  "GlobalTech",
  "Nexus Systems",
  "Aura Digital",
  "Prime Solutions",
  "Quantum Labs",
  "Vertex Corp",
  "Summit Analytics",
  "Flow Media",
  "Horizon Tech",
  "Star Innovate",
]

export default function ClientsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      paginate(1)
    }, 5000)
    return () => clearInterval(timer)
  }, [paginate, isPaused])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative py-24 overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0 opacity-10">
          <img src="/placeholder.svg?key=p3l9t" alt="Network" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/80" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
          >
            Our Ecosystem
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight"
          >
            Trusted by <span className="text-primary">Forward-Thinking</span> Companies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed"
          >
            We collaborate with ambitious organizations to build technology that scales, transforms industries, and
            delivers real-world impact.
          </motion.p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="h-32 flex items-center justify-center p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors group cursor-default shadow-sm"
              >
                <span className="text-xl font-bold text-muted-foreground/40 group-hover:text-primary transition-colors text-center">
                  {partner}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-muted/30 border-y border-border relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Success stories from global organizations that have scaled their digital ambitions with Snei Tech INC.
            </p>
          </div>

          <div
            className="relative max-w-5xl mx-auto h-[450px] md:h-[350px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.4 },
                }}
                className="absolute w-full h-full"
              >
                <div className="bg-card border border-border rounded-[2.5rem] p-8 md:p-12 h-full flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-2xl shadow-primary/5">
                  <div className="w-24 h-24 md:w-48 md:h-48 rounded-2xl overflow-hidden bg-muted flex-shrink-0 border border-primary/20 shadow-lg">
                    <img
                      src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow space-y-6">
                    <Quote className="text-primary/20" size={48} />
                    <p className="text-xl md:text-2xl leading-relaxed font-medium italic">
                      "{testimonials[currentIndex].content}"
                    </p>
                    <div className="pt-4 border-t border-border">
                      <h4 className="text-xl font-bold text-foreground">{testimonials[currentIndex].name}</h4>
                      <p className="text-primary font-medium">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Controls */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-12 h-12 border-primary/20 hover:bg-primary/10 bg-transparent"
                onClick={() => paginate(-1)}
              >
                <ChevronLeft size={24} />
              </Button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1)
                      setCurrentIndex(index)
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex ? "bg-primary w-8" : "bg-primary/20 hover:bg-primary/40"
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-12 h-12 border-primary/20 hover:bg-primary/10 bg-transparent"
                onClick={() => paginate(1)}
              >
                <ChevronRight size={24} />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
