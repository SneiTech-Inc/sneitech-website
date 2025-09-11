'use client'
import React from 'react'
import Link from 'next/link'
import { Phone, Mail, MessageCircle } from 'lucide-react'

const Join = () => {
  return (
    <section id='ContactUs' className="overflow-hidden bg-joinus py-16">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        <p className="text-primary text-lg font-normal tracking-widest uppercase">
          Get in Touch
        </p>
        <h2 className="my-6 text-3xl sm:text-4xl font-bold">
          Take your business to the next level.
        </h2>
        <p className="text-black/60 text-base max-w-2xl mx-auto">
          At <span className="font-semibold">SneiTech Inc.</span>, we empower businesses
          with innovative technology solutions. Call, WhatsApp, or email us today
          to discuss how we can bring your ideas to life.
        </p>

        {/* Contact Options */}
        <div className="mt-10 grid gap-6 sm:flex sm:justify-center">
          {/* Phone */}
          <a
            href="tel:+233XXXXXXXXX"
            className="flex items-center gap-3 rounded-xl bg-primary text-white px-6 py-4 hover:bg-darkmode duration-300 shadow-md"
          >
            <Phone size={20} /> +233 0500770227
          </a>
          {/* WhatsApp */}
          <a
            href="https://wa.me/233545716970"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl bg-green-500 text-white px-6 py-4 hover:bg-green-600 duration-300 shadow-md"
          >
            <MessageCircle size={20} /> WhatsApp Us
          </a>
          {/* Email */}
          <a
            href="mailto:schneiderm312@gmail.com"
            className="flex items-center gap-3 rounded-xl bg-blue-600 text-white px-6 py-4 hover:bg-blue-700 duration-300 shadow-md"
          >
            <Mail size={20} /> schneiderm312@gmail.com
          </a>
        </div>

        {/* Future Contact Form Placeholder */}
        <div className="mt-12">
          <p className="text-sm text-black/50 italic">
            (Soon you’ll be able to reach us directly through a contact form here.)
          </p>
        </div>
      </div>
    </section>
  )
}

export default Join
