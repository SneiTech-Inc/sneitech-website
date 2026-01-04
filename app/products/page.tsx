"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ShieldCheck, Zap, Globe, Cpu } from "lucide-react"

const products = [
  {
    id: "xsporta",
    name: "XSporta",
    tagline: "The Future of Sports Management",
    description:
      "Our flagship platform designed to revolutionize how sports organizations manage their operations, athletes, and fan engagement.",
    features: ["Real-time Analytics", "Athlete Performance Tracking", "Automated Scheduling", "Fan Interaction Hub"],
    tech: ["Web", "Mobile", "SaaS"],
    status: "Flagship",
    color: "from-blue-600 to-cyan-500",
  },
  {
    id: "techguard",
    name: "TechGuard",
    tagline: "Enterprise Security Reimagined",
    description:
      "An advanced cybersecurity suite providing real-time threat detection and automated response systems for modern digital infrastructures.",
    features: ["AI Threat Detection", "Automated Patching", "Vulnerability Scanning", "Zero Trust Architecture"],
    tech: ["Cloud", "Security", "AI"],
    status: "Coming Soon",
    color: "from-purple-600 to-pink-500",
  },
  {
    id: "nexus-flow",
    name: "Nexus Flow",
    tagline: "Seamless API Integration Hub",
    description:
      "A centralized platform for managing, monitoring, and scaling API ecosystems with built-in governance and developer portals.",
    features: ["API Gateway", "Real-time Monitoring", "Developer Portal", "Auto-scaling"],
    tech: ["Infrastructure", "SaaS"],
    status: "Coming Soon",
    color: "from-orange-500 to-amber-400",
  },
]

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header */}
      <section className="relative py-20 overflow-hidden bg-muted/20 border-b border-border">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
          >
            Our Portfolio
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Digital{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Innovation</span>{" "}
            at Scale
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-muted-foreground"
          >
            Snei Tech INC births multiple software products designed to solve real-world problems through cutting-edge
            technology and intuitive design.
          </motion.p>
        </div>
      </section>

      {/* Featured Product: XSporta */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-card/50 border border-border rounded-3xl p-8 md:p-12 overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] -z-10" />

            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 px-3 py-1">
                  FLAGSHIP PRODUCT
                </Badge>
                <div className="h-px flex-1 bg-border" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">XSporta</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The ultimate management ecosystem for the sports industry. XSporta combines high-performance analytics
                with seamless operational control.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                {[
                  { icon: Cpu, text: "High-Performance Analytics" },
                  { icon: Globe, text: "Global Athlete Database" },
                  { icon: Zap, text: "Real-time Operations" },
                  { icon: ShieldCheck, text: "Secure Data Integrity" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-foreground/80">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 px-8">
                  View Case Study
                </Button>
                <Button variant="ghost" size="lg" className="rounded-full gap-2">
                  Learn More <ArrowUpRight size={18} />
                </Button>
              </div>
            </div>

            <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group overflow-hidden">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, 0],
                }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="w-3/4 h-3/4 bg-card rounded-xl shadow-2xl border border-white/10 flex items-center justify-center p-8 text-center"
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto flex items-center justify-center">
                    <Zap className="text-primary w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold">XSporta Dashboard</h3>
                  <p className="text-sm text-muted-foreground">
                    Visualization of sports management metrics and athlete performance data.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Upcoming Innovation</h2>
              <p className="text-muted-foreground">
                Preview of products currently in development at our innovation labs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.slice(1).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity`}
                />

                <div className="flex justify-between items-start mb-6">
                  <Badge variant="secondary" className="bg-muted text-muted-foreground">
                    {product.status}
                  </Badge>
                  <div className="flex gap-2">
                    {product.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="text-primary/80 font-medium mb-4">{product.tagline}</p>
                <p className="text-muted-foreground mb-8 line-clamp-2">{product.description}</p>

                <div className="space-y-3 mb-8">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full rounded-xl group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all bg-transparent"
                >
                  Get Notified
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
