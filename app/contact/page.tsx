"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MessageSquare, Send, CheckCircle2 } from "lucide-react"

export default function ContactPage() {
  const [formStatus, setFormStatus] = React.useState<"idle" | "submitting" | "success">("idle")
  
  const whatsappNumber = "2330500770227"
  const message = "Hello! I’m reaching out to learn more about SneiTech Inc’s services and how we can work together."
  const encodedMessage = encodeURIComponent(message)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")
    // Simulate API call
    setTimeout(() => {
      setFormStatus("success")
    }, 1500)
  }

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
            Connect With Us
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Start Your <span className="text-primary">Innovation Journey</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-muted-foreground"
          >
            Have a great idea? Let's turn it into technology that makes an impact. Reach out today for a consultation.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  At SneiTech., we empower businesses with innovative technology solutions. Reach out to discuss
                  how we can bring your ideas to life.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: "Email Us",
                    value: "schneiderm312@gmail.com",
                    href: "mailto:schneiderm312@gmail.com",
                  },
                  {
                    icon: Phone,
                    label: "Call Us",
                    value: "+233 050 077 0227",
                    href: "tel:+2330500770227",
                  },
                  {
                    icon: MessageSquare,
                    label: "WhatsApp Us",
                    value: "Connect on WhatsApp",
                    href: `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                      <p className="text-lg font-bold">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                <h3 className="text-xl font-bold mb-2">Office Hours</h3>
                <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM (GMT)</p>
                <p className="text-muted-foreground">Available for global consultations</p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="border-border bg-card/50 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  {formStatus === "success" ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-20 space-y-6"
                    >
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                        <CheckCircle2 size={48} className="text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold">Message Sent!</h2>
                      <p className="text-muted-foreground text-lg">
                        Thank you for reaching out. Our team will get back to you within 24 hours.
                      </p>
                      <Button variant="outline" onClick={() => setFormStatus("idle")} className="rounded-full">
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <Input
                            id="first-name"
                            placeholder="Michael"
                            required
                            className="bg-background/50 border-border"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input
                            id="last-name"
                            placeholder="Schneider"
                            required
                            className="bg-background/50 border-border"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="michael@sneitech.com"
                          required
                          className="bg-background/50 border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          placeholder="Project Inquiry"
                          required
                          className="bg-background/50 border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Your Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your project or idea..."
                          className="min-h-[150px] bg-background/50 border-border"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full h-12 rounded-xl text-lg font-bold shadow-lg shadow-primary/20"
                        disabled
                      >
                        {formStatus === "submitting" ? (
                          "Sending..."
                        ) : (
                          <span className="flex items-center gap-2">
                            Send Message <Send size={18} />
                          </span>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>

              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-primary/5 blur-3xl pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
