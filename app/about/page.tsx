"use client"

import { motion } from "framer-motion"
import { Target, Eye, Users, History, Quote } from "lucide-react"

const storyPoints = [
  {
    year: "Our Vision",
    title: "The Genesis",
    description:
      "Founded with the vision of driving innovation and empowering people, Sneitech builds modern digital products that solve real problems.",
    icon: History,
  },
  {
    year: "Mission",
    title: "Empowering Businesses",
    description:
      "To build innovative digital products that connect people, empower businesses, and shape the future of technology.",
    icon: Target,
  },
  {
    year: "Core Goal",
    title: "Global Leadership",
    description:
      "To become a global leader in technology innovation — creating solutions that inspire trust and transform industries.",
    icon: Eye,
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background z-10" />
          <img src="/placeholder.svg?key=h09z6" alt="About background" className="w-full h-full object-cover" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6"
          >
            Our Story & Vision
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-balance leading-tight"
          >
            About <span className="text-primary">Snei Tech INC</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl mx-auto text-xl text-muted-foreground text-balance leading-relaxed"
          >
            We are a product-driven innovation hub and a mother company that births multiple software solutions,
            passionate about turning ideas into impactful technology that scales globally.
          </motion.p>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {storyPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-bold text-primary uppercase tracking-wider">{point.year}</span>
                <h3 className="text-2xl font-bold mt-2 mb-4">{point.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-muted/30 border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background z-10" />
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-medium mb-4">
                Our Philosophy
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Driven by Purpose & Creativity</h2>
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Honesty & Hard Work</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      We believe in transparency, technical excellence, and hard work — values that guide every digital
                      solution we architect and every partnership we build.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/20">
                    <Target className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Impactful Innovation</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Innovation is not just about new tech; it's about solving real problems. Every line of code is
                      aimed at creating meaningful experiences that transform industries.
                    </p>
                  </div>
                </div>
              </div>

              {/* CEO Quote highlight */}
              <div className="mt-12 p-8 rounded-2xl bg-card border border-border shadow-sm">
                <Quote className="text-primary/20 mb-4" size={32} />
                <p className="text-xl font-medium italic mb-6 leading-relaxed">
                  "Our goal is to lead with creativity, innovation, and purpose."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-muted lg:hidden">
                    <img src="/diverse-ceo-group.png" alt="Michael Schneider" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Michael Schneider</p>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">
                      Founder & CEO
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 border border-border group hidden lg:block"
            >
              {/* Overlay with noise */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent z-10" />
              <div className="absolute inset-0 noise-overlay opacity-10 z-[5]" />

              <img
                src="/diverse-ceo-group.png"
                alt="Michael Schneider - Founder & CEO"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute bottom-8 left-8 right-8 z-20">
                <div className="p-6 rounded-xl bg-background/60 backdrop-blur-md border border-white/10">
                  <p className="text-white font-bold text-xl mb-1">Michael Schneider</p>
                  <p className="text-white/70 text-sm uppercase tracking-widest font-medium">Founder & CEO</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
