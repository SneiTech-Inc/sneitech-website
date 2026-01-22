"use client"

const logos = [
  { name: "CDT", src: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1769124828/WhatsApp_Image_2026-01-08_at_09.08.51_chemwi.jpg" },
  { name: "Africa Techcity", src: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1769123251/logo-3_w2eibb.jpg" },
  { name: "Trust Work", src: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1769123619/logo_odt9xa.png" },
  { name: "Prime Solutions", src: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1769124493/aura-digital-logo_m9svpy.jpg" },
  { name: "Quantum Labs", src: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1769124492/quantum-labs-logo_hr865k.jpg" },
  { name: "Vertex Corp", src: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1769124492/vertex-corp-logo_rdeke2.jpg" },
  { name: "Summit Analytics", src: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1769124492/summit-analytics-logo_ob50q9.jpg" },
  { name: "Flow Media", src: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1769124492/flow-media-logo_jjt59g.jpg" },
]

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
            <div
              key={i}
              className="mx-12 w-24 h-24 md:w-28 md:h-28 flex-shrink-0 flex items-center justify-center cursor-default group/logo"
            >
              <img
                src={logo.src || "/placeholder.svg"}
                alt={logo.name}
                className="w-full h-full object-contain grayscale opacity-50 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 transition-all duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Repeating for seamless loop */}
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="mx-12 w-24 h-24 md:w-28 md:h-28 flex-shrink-0 flex items-center justify-center cursor-default group/logo"
            >
              <img
                src={logo.src || "/placeholder.svg"}
                alt={logo.name}
                className="w-full h-full object-contain grayscale opacity-50 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 transition-all duration-300 hover:scale-110"
              />
            </div>
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
