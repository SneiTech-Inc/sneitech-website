"use client"

import { motion } from "framer-motion"
import { Code, Globe, Smartphone, Layout } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Custom Software Development",
    description: "Tailored solutions built with precision and modern architectural standards.",
    icon: Code,
    color: "text-blue-500",
  },
  {
    title: "Web Applications",
    description: "Scalable, high-performance web apps built with Next.js and React.",
    icon: Globe,
    color: "text-cyan-500",
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile experiences for iOS and Android.",
    icon: Smartphone,
    color: "text-purple-500",
  },
  {
    title: "UI/UX Design",
    description: "User-centric interfaces that blend aesthetic beauty with seamless functionality.",
    icon: Layout,
    color: "text-pink-500",
  },
]

export function FeaturedServices() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            How We Can Help You
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            We focus on creating digital solutions that combine creativity, precision, and impact.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/40 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 group cursor-default overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardHeader className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-xl bg-muted/50 border border-border flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300`}
                  >
                    <service.icon className={`w-6 h-6 ${service.color} group-hover:text-primary transition-colors`} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors tracking-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
