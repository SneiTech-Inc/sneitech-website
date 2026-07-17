import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function SaveVexCaseStudy() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            Case Study
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            SaveVex
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            Compress. Convert. Edit. Optimize.
          </p>
          <div className="w-16 h-1 bg-primary/30 mx-auto rounded-full mb-8" />

          <div className="max-w-2xl mx-auto space-y-6 text-left">
            <p className="text-muted-foreground text-lg leading-relaxed">
              SaveVex is a completely free, no-signup file and media toolkit that runs entirely in the browser. With over
              60 tools across 7 categories — including PDF, Image, Video, Audio, Document, Text, and Utility — all
              processing happens locally on the user&apos;s device for maximum privacy and zero wait times.
            </p>
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-xl font-bold mb-4">Full Case Study in Progress</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our team is currently preparing an in-depth case study covering the architecture, design, and development
                of SaveVex — including its client-side processing pipeline, browser-based tooling architecture, and
                privacy-first design philosophy. Check back soon for the complete story.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Button variant="outline" className="rounded-full gap-2" asChild>
              <Link href="/products">
                <ArrowLeft size={18} /> Back to Products
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
