"use client"

const logos = ["Christ Dominion Temple", "Africa Techcity", "Trust Work", "Prime", "Quantum", "Vertex", "Summit", "Flow"]

export function ClientLogos() {
  return (
    <section className="py-20 border-y border-border bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-10 text-center">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Trusted by forward-thinking companies
        </h2>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...logos, ...logos].map((logo, i) => (
            <span
              key={i}
              className="mx-12 text-2xl md:text-4xl font-bold text-muted-foreground/30 hover:text-primary transition-colors cursor-default"
            >
              {logo}
            </span>
          ))}
        </div>

        {/* Repeating for seamless loop */}
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center">
          {[...logos, ...logos].map((logo, i) => (
            <span
              key={i}
              className="mx-12 text-2xl md:text-4xl font-bold text-muted-foreground/30 hover:text-primary transition-colors cursor-default"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </section>
  )
}
