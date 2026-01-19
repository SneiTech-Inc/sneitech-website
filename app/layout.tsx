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
  title: "SneiTech Inc | Innovative Software Solutions & Product Hub",
  description:
    "SneiTech Inc is a premium software development partner and innovation hub. We build scalable digital products like XSporta and provide high-end solutions for startups and enterprises worldwide.",
  keywords: [
    "SneiTech Inc",
    "software development",
    "Consulting",
    "XSporta",
    "web applications",
    "mobile apps",
    "custom software",
    "Silicon Valley tech",
    "enterprise software solutions",
    "product innovation hub",
    "Michael Schneider",
  ],
  authors: [{ name: "SneiTech Inc" }],
  creator: "SneiTech Inc",
  publisher: "SneiTech Inc",
  generator: "v0.app",
  openGraph: {
    title: "SneiTech Inc | Innovative Software Solutions & Product Hub",
    description: "SneiTech Inc is a premium software development partner and innovation hub.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SneiTech Inc | Innovative Software Solutions & Product Hub",
    description: "SneiTech Inc is a premium software development partner and innovation hub.",
  },
  icons: {
    icon: [
      {
        url: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1757561643/sneitechLogo_z3zgvx.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1757561643/sneitechLogo_z3zgvx.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1757561643/sneitechLogo_z3zgvx.png",
        type: "image/svg+xml",
      },
    ],
    apple: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1757561643/sneitechLogo_z3zgvx.png",
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
