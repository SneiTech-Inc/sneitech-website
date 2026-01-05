"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { useRef } from "react"

export function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  // <CHANGE> Added parallax effect for background
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3])

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* <CHANGE> Added background image with dark overlay */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background z-10" />
        <img
          src="https://res.cloudinary.com/schneider-tech-inc/image/upload/v1767567640/futuristic-technology-circuit-board-pattern_naz8wn.jpg?key=mjsww"
          alt="Tech background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Animated Gradients */}
      <div className="absolute inset-0 z-[5]">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[120px] gradient-blur"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-secondary/20 rounded-full blur-[120px] gradient-blur"
        />
      </div>

      <motion.div style={{ opacity }} className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6"
        >
          <Sparkles size={14} />
          <span>Building the Future of Digital Innovation</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-balance"
        >
          Empowering the Future with{" "}
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Innovative
          </span>{" "}
          Software Solutions
        </motion.h1>

        {/* <CHANGE> Enhanced supporting paragraph with stronger value proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-4 text-balance leading-relaxed"
        >
          Snei Tech INC is a product-driven innovation hub that builds scalable software products and provides
          enterprise-grade solutions. We transform ambitious ideas into market-ready technology that drives real business impact.
        </motion.p>

        {/* <CHANGE> Added secondary supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground/80 mb-10 text-balance leading-relaxed"
        >
          From custom software development to cloud architecture and AI integration, we partner with startups and enterprises to build the future of technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-base font-semibold transition-all hover:scale-105 active:scale-95"
          >
            <Link href="/contact" className="flex items-center gap-2">
              Get Started <ArrowRight size={18} />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-12 px-8 border-primary/20 hover:bg-primary/5 rounded-full text-base font-semibold transition-all hover:scale-105 active:scale-95 bg-transparent backdrop-blur-sm"
          >
            <Link href="/products">Our Products</Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Decorative noise/grain overlay */}
      <div className="absolute inset-0 pointer-events-none noise-overlay opacity-20 z-[6]" />
    </section>
  )
}
