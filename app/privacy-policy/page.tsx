"use client"

export default function PrivacyPolicy() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-12">Last Updated: January 4, 2026</p>

          <div className="prose prose-invert max-w-none space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Snei Tech INC, we value your privacy and are committed to protecting your personal data. This Privacy
                Policy explains how we collect, use, and safeguard your information when you visit our website or use
                our software products, including XSporta, TechGuard, and Nexus Flow.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may collect personal information such as your name, email address, and professional details when you
                contact us, subscribe to our newsletter, or use our services. We also collect technical data, including
                IP addresses and browser information, to improve our website experience.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>To provide and maintain our software products and services.</li>
                <li>To notify you about changes to our products or company.</li>
                <li>To provide customer support and respond to inquiries.</li>
                <li>To monitor the usage of our website and detect technical issues.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures to protect your data. However, please be aware that no
                method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee
                absolute security.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">5. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact our data protection team at
                privacy@sneitech.com.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
