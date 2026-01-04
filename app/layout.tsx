import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Snei Tech INC | Innovative Software Solutions & Product Hub",
  description:
    "Snei Tech INC is a premium software development partner and innovation hub. We build scalable digital products like XSporta and provide high-end solutions for startups and enterprises worldwide.",
  keywords: [
    "Snei Tech INC",
    "software development",
    "XSporta",
    "web applications",
    "mobile apps",
    "custom software",
    "Silicon Valley tech",
    "enterprise software solutions",
    "product innovation hub",
    "Michael Schneider",
  ],
  authors: [{ name: "Snei Tech INC" }],
  creator: "Snei Tech INC",
  publisher: "Snei Tech INC",
  generator: "v0.app",
  openGraph: {
    title: "Snei Tech INC | Innovative Software Solutions & Product Hub",
    description: "Snei Tech INC is a premium software development partner and innovation hub.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Snei Tech INC | Innovative Software Solutions & Product Hub",
    description: "Snei Tech INC is a premium software development partner and innovation hub.",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
          <ScrollToTop />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
