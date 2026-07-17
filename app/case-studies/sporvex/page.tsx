import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function SporvexCaseStudy() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            Case Study
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sporvex
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            Live Sports, Real-Time
          </p>
          <div className="w-16 h-1 bg-primary/30 mx-auto rounded-full mb-8" />

          <div className="max-w-2xl mx-auto space-y-6 text-left">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Sporvex is a consumer sports application delivering live scores, real-time match feeds, and personalized
              sports news across football, basketball, NFL, baseball, and more. Built by SneiTech Inc., Sporvex brings
              the excitement of live sports into one seamless, real-time experience.
            </p>
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-xl font-bold mb-4">Full Case Study in Progress</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our team is currently preparing an in-depth case study covering the architecture, design, and development
                of Sporvex — including its real-time SignalR infrastructure, cross-platform strategy, and
                personalization engine. Check back soon for the complete story.
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
