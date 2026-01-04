"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Cpu, Globe, Smartphone, Cloud, Layers, Zap } from "lucide-react"

const techCategories = [
  {
    title: "Backend & Web",
    icon: Globe,
    description: "Robust and scalable server-side solutions and web architectures.",
    techs: [".NET", "Node.js", "Next.js", "TypeScript", "React"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    description: "High-performance native and cross-platform mobile experiences.",
    techs: ["React Native", ".NET MAUI", "iOS (Swift)", "Android (Kotlin)"],
    color: "from-purple-500 to-pink-400",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    description: "Seamless deployment and infrastructure management.",
    techs: ["AWS", "Azure", "Vercel", "Docker", "Kubernetes"],
    color: "from-emerald-500 to-teal-400",
  },
  {
    title: "Architecture Principles",
    icon: Layers,
    description: "Foundational patterns for scalable and maintainable software.",
    techs: ["Clean Architecture", "Modular Monolith", "Microservices", "Event-Driven"],
    color: "from-orange-500 to-amber-400",
  },
]

export default function TechnologyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header */}
      <section className="relative py-24 overflow-hidden bg-muted/20 border-b border-border">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
          >
            Our Arsenal
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Advanced <span className="text-primary">Technology Stack</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-muted-foreground"
          >
            We leverage industry-leading technologies and architectural patterns to build future-ready digital
            solutions.
          </motion.p>
        </div>
      </section>

      {/* Tech Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity`}
                />

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <category.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>

                <p className="text-muted-foreground mb-8">{category.description}</p>

                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-muted/50 border-border px-3 py-1 text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Excellence */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Architectural Excellence</h2>
              <div className="space-y-8">
                {[
                  {
                    title: "Clean Architecture",
                    text: "Separating business logic from external concerns for maximum testability and maintainability.",
                    icon: Cpu,
                  },
                  {
                    title: "Scalability First",
                    text: "Designing systems that grow seamlessly with your user base and data requirements.",
                    icon: Zap,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="relative aspect-video rounded-3xl bg-card border border-border overflow-hidden p-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
              <div className="text-center relative z-10">
                <p className="text-lg font-medium text-primary mb-4 uppercase tracking-widest">Innovation Lab</p>
                <h3 className="text-2xl font-bold mb-4 text-balance">Modern Software Principles Applied</h3>
                <div className="flex justify-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-secondary animate-pulse [animation-delay:0.2s]" />
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse [animation-delay:0.4s]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
