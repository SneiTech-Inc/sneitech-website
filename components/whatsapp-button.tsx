"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
    const whatsappNumber = "2330500770227"
    const message = "Hello! I’m reaching out to learn more about SneiTech Inc’s services and how we can work together."

    const handleWhatsAppClick = () => {
        const encodedMessage = encodeURIComponent(message)
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
        window.open(whatsappUrl, "_blank")
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="fixed bottom-24 right-8 z-50"
        >
            <Button
                size="icon"
                onClick={handleWhatsAppClick}
                className="rounded-full cursor-pointer shadow-lg h-12 w-12 bg-green-600 hover:bg-green-700 transition-all duration-300 group"
                aria-label="Contact us on WhatsApp"
                title="Contact us on WhatsApp"
            >
                <MessageCircle className="group-hover:scale-110 transition-transform duration-300" />
            </Button>
        </motion.div>
    )
}
