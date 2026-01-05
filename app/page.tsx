"use client"

import { HeroSection } from "@/components/hero-section"
import { ClientLogos } from "@/components/client-logos"
import { FeaturedServices } from "@/components/featured-services"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Code, Zap, Shield } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />

      <ClientLogos />

      {/* <CHANGE> Enhanced About preview section with background image and richer content */}
      <section className="relative py-32 bg-background overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-10" />
          <img
            src="/placeholder.svg?key=g3815"
            alt="Workspace background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="container relative z-20 mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-2">
                Who We Are
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Turning ideas into technology that matters.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Snei Tech INC was founded with a clear vision — to transform ambitious ideas into impactful digital
                products. We are more than a software company; we are a mother company that births multiple innovative
                products and empowers businesses worldwide.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Our philosophy is simple: lead with creativity, innovation, and purpose. Every line of code we write,
                every system we architect, and every product we launch is designed to solve real problems and create
                lasting value for our clients and users.
              </p>

              {/* Value props */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Code className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Clean Code</h4>
                    <p className="text-xs text-muted-foreground">Scalable architecture</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Fast Delivery</h4>
                    <p className="text-xs text-muted-foreground">Agile methodology</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Secure</h4>
                    <p className="text-xs text-muted-foreground">Enterprise-grade</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-video bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 rounded-3xl overflow-hidden group border border-border"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <blockquote className="text-2xl md:text-3xl font-medium text-center italic text-balance leading-relaxed">
                  "Turning ideas into technology that matters."
                  <footer className="text-base not-italic mt-6 text-muted-foreground font-normal">
                    — Michael Schneider, Founder & CEO
                  </footer>
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FeaturedServices />

      {/* <CHANGE> Enhanced CTA Section with background image and overlay */}
      <section className="relative py-32 overflow-hidden border-y border-border">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95 z-10" />
          <img
            src="https://res.cloudinary.com/schneider-tech-inc/image/upload/v1767567647/abstract-digital-network-connection-technology_ivrj8o.jpg?key=rm2mh"
            alt="Network background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 blur-[100px] pointer-events-none z-[5]" />
        
        <div className="container relative z-20 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-2">
              Let's Build Together
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              Ready to build that great idea?
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
              Have a great idea? Let's turn it into technology that makes an impact. Partner with a team that
              understands innovation, scale, and execution.
            </p>
            <p className="text-base text-muted-foreground/80 max-w-2xl mx-auto">
              Whether you're a startup looking to launch your first product or an enterprise scaling your digital
              infrastructure, we're here to help you succeed.
            </p>
            <Button asChild size="lg" className="h-14 px-10 rounded-full text-lg shadow-xl shadow-primary/20">
              <Link href="/contact" className="flex items-center gap-2">
                Get Started Now <ArrowRight size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
