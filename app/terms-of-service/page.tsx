"use client"

export default function TermsOfService() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-12">Last Updated: January 4, 2026</p>

          <div className="prose prose-invert max-w-none space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using the services provided by Snei Tech INC, you agree to be bound by these Terms of
                Service. If you do not agree to these terms, please do not use our website or products.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">2. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, trademarks, and intellectual property on this website and within our software products
                (including XSporta) are the exclusive property of Snei Tech INC. You may not reproduce, distribute, or
                create derivative works without our explicit written permission.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">3. User Conduct</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to use our services only for lawful purposes. You are prohibited from attempting to interfere
                with the security of our website, harvesting data, or using our products in any way that could damage
                our reputation or operations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">4. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Snei Tech INC shall not be liable for any indirect, incidental, or consequential damages arising out of
                your use or inability to use our services. Our products are provided "as is" without any warranties of
                any kind.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">5. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms are governed by and construed in accordance with the laws of the jurisdiction in which Snei
                Tech INC is headquartered, without regard to its conflict of law principles.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
