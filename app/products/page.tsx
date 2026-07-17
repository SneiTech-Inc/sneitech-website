"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowUpRight, ExternalLink } from "lucide-react"

const liveProducts = [
  {
    id: "sporvex",
    name: "Sporvex",
    tagline: "Live Sports, Real-Time",
    description:
      "Sporvex is a consumer sports application that brings live scores, real-time match feeds, and personalized sports news into one seamless experience. Built for sports fans who want fast, reliable updates across football, basketball, NFL, baseball, and more — all delivered in real time.",
    features: [
      "Live scores across multiple sports",
      "Real-time match feeds and highlights",
      "Personalized sports news and alerts",
    ],
    tech: ["Web", "Mobile", "Real-Time"],
    logo: "/assets/images/products/sporvex-logo.png",
    mockup: "/assets/images/products/sporvex-mockup.svg",
    externalUrl: "https://sporvex.com",
    caseStudyUrl: "/case-studies/sporvex",
    color: "from-blue-600 to-cyan-500",
  },
  {
    id: "savevex",
    name: "SaveVex",
    tagline: "Compress. Convert. Edit. Optimize.",
    description:
      "SaveVex is a completely free, no-signup file and media toolkit that runs entirely in your browser. From PDF merging and image compression to video conversion and document editing — every tool processes files locally on your device, ensuring maximum privacy and zero wait times.",
    features: [
      "100% free — no account required",
      "Local in-browser processing for privacy",
      "Broad tool coverage: PDF, Image, Video, Audio, Document, Text, and Utility",
    ],
    tech: ["Web", "Tools", "Free"],
    logo: "/assets/images/products/savevex-logo.png",
    mockup: "/assets/images/products/savevex-mockup.svg",
    externalUrl: "https://savevex.com",
    caseStudyUrl: "/case-studies/savevex",
    color: "from-emerald-600 to-teal-500",
  },
]

const upcomingProducts = [
  {
    id: "church-management",
    name: "Church Management System",
    tagline: "Modern Ministry Operations Platform",
    description:
      "A comprehensive digital platform designed to help churches manage members, departments, events, finances, and communication efficiently.",
    features: [
      "Member & Family Management",
      "Attendance Tracking",
      "Donations & Finance Management",
      "Events & Programs",
      "Messaging & Announcements",
    ],
    tech: ["Web", "Mobile", "SaaS"],
    status: "Coming Soon",
    color: "from-emerald-600 to-teal-500",
  },
  {
    id: "inventory-management",
    name: "Inventory Management System",
    tagline: "Scalable Stock & Inventory Operations",
    description:
      "A powerful inventory and stock management platform for businesses to track, manage, and optimize inventory in real time across multiple locations.",
    features: [
      "Real-time Stock Tracking",
      "Multi-Warehouse Support",
      "Supplier & Purchase Management",
      "Sales & Inventory Analytics",
      "Low-Stock Alerts",
    ],
    tech: ["Enterprise", "SaaS", "Infrastructure"],
    status: "Coming Soon",
    color: "from-orange-600 to-amber-500",
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
            SneiTech births multiple software products designed to solve real-world problems through cutting-edge
            technology and intuitive design.
          </motion.p>
        </div>
      </section>

      {/* Live in Production */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-medium mb-4"
              >
                Shipped &amp; Scaling
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl font-bold mb-4"
              >
                Live in Production
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground"
              >
                Battle-tested platforms actively serving users worldwide.
              </motion.p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {liveProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-primary/5 flex flex-col"
              >
                <div
                  className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-300`}
                />

                {/* Badge + Tech tags row */}
                <div className="flex justify-between items-start mb-6">
                  <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20 px-3 py-1">
                    Live
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

                {/* Logo */}
                <div className="mb-6">
                  <img
                    src={product.logo}
                    alt={`${product.name} logo`}
                    className="h-10 w-auto"
                  />
                </div>

                {/* Name + Tagline + Description */}
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-primary/80 font-medium mb-4">{product.tagline}</p>
                <p className="text-muted-foreground mb-8 leading-relaxed">{product.description}</p>

                {/* Feature bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {product.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3 text-foreground/80"
                    >
                      <div className="w-2 h-2 rounded-full bg-green-500/60 shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Mockup image */}
                <div className="relative mb-8 rounded-xl overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 border border-border/50">
                  <img
                    src={product.mockup}
                    alt={`${product.name} application interface mockup`}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Dual CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 px-6 flex-1 gap-2" asChild>
                    <a
                      href={product.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit {product.name} <ExternalLink size={16} />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-full px-6 flex-1 gap-2" asChild>
                    <Link href={product.caseStudyUrl}>
                      View Case Study <ArrowUpRight size={16} />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Innovation */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Upcoming Innovation</h2>
              <p className="text-muted-foreground">
                Strategic, scalable products currently in development at our innovation labs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-primary/5"
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-300`}
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
                <p className="text-muted-foreground mb-8 leading-relaxed">{product.description}</p>

                <div className="space-y-3 mb-8">
                  {product.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary/60 transition-colors" />
                      <span>{feature}</span>
                    </motion.div>
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
