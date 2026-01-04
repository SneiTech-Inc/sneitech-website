"use client"

import { motion } from "framer-motion"
import { Code2, ShieldCheck, Globe2, Smartphone, Palette, Settings2, CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    title: "Custom Software Development",
    description:
      "Tailored solutions built with precision and modern architectural standards to solve complex business challenges.",
    icon: Code2,
    subServices: [
      "Software Architecture Design",
      "System Integration Services",
      "Data Migration Services",
      "Legacy App Modernization",
    ],
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Audit & IT Consulting",
    description:
      "Expert guidance and comprehensive audits to ensure your technology infrastructure is secure, efficient, and scalable.",
    icon: ShieldCheck,
    subServices: ["TechGuard Audit", "CyberSafe IT Consulting", "AssuranceEdge Audits", "IT Sentry Monitoring"],
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    title: "Web App Development",
    description:
      "High-performance web applications and portals designed for scalability, speed, and exceptional user experiences.",
    icon: Globe2,
    subServices: [
      "Web Portal Development",
      "SaaS Application Design",
      "E-commerce Solutions",
      "Offshore Web Development",
    ],
    color: "bg-cyan-500/10 text-cyan-500",
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile experiences that engage users and deliver value on every device.",
    icon: Smartphone,
    subServices: ["Android Development", "iOS App Development", "Mobile UX/UI Design", "Enterprise Mobility"],
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    title: "UI/UX Design Services",
    description:
      "Pixel-perfect designs that combine aesthetic beauty with intuitive functionality for digital products that users love.",
    icon: Palette,
    subServices: ["InterfaceGenius Design", "PixelPerfection UI", "DesignCraft UX", "CreativeWave Concepts"],
    color: "bg-pink-500/10 text-pink-500",
  },
  {
    title: "Maintenance & Support",
    description:
      "Reliable post-launch support and continuous maintenance to keep your digital assets running smoothly and securely.",
    icon: Settings2,
    subServices: ["CareCraft Maintenance", "FixItPro Support", "TechCare Monitoring", "AssistEdge Services"],
    color: "bg-orange-500/10 text-orange-500",
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden border-b border-border bg-muted/20">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6"
          >
            Our Expertise
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Professional <span className="text-primary">Software Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-muted-foreground"
          >
            We provide comprehensive technology services for startups and enterprises, turning ambitious ideas into
            robust digital products.
          </motion.p>
        </div>

        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 blur-[120px]" />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.color}`}>
                  <service.icon size={28} />
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">{service.description}</p>

                <div className="space-y-3">
                  {service.subServices.map((sub, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                      <CheckCircle2 size={16} className="text-primary/60" />
                      {sub}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted/30 border-y border-border overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Development Process</h2>
            <p className="text-lg text-muted-foreground">
              We believe you deserve only the best technology. That's why we focus on precision and impact at every
              stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                text: "We analyze your business goals and user needs to define the project scope.",
              },
              {
                step: "02",
                title: "Design",
                text: "Creating intuitive user interfaces and robust technical architectures.",
              },
              {
                step: "03",
                title: "Development",
                text: "Building with clean code principles and modern technology stacks.",
              },
              {
                step: "04",
                title: "Launch & Support",
                text: "Ensuring smooth deployment and providing continuous maintenance.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-black text-primary/5 absolute -top-10 -left-4 pointer-events-none">
                  {step.step}
                </div>
                <h4 className="text-xl font-bold mb-3 relative z-10">{step.title}</h4>
                <p className="text-muted-foreground relative z-10">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-card to-muted rounded-[2rem] p-12 md:p-20 text-center border border-border relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[100px] -z-10" />
            <h2 className="text-3xl md:text-5xl font-bold mb-8 max-w-2xl mx-auto">
              Ready to bring your digital vision to life?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
              Our team is ready to discuss how our software solutions can help your business grow and innovate.
            </p>
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg shadow-xl shadow-primary/20">
              <Link href="/contact" className="flex items-center gap-2">
                Start Your Project <ArrowRight size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
