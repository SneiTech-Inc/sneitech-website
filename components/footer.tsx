import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react"

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Technology", href: "/technology" },
    { name: "Clients", href: "/clients" },
  ],
  services: [
    { name: "Software Development", href: "/services" },
    { name: "IT Consulting", href: "/services" },
    { name: "Cloud Solutions", href: "/services" },
    { name: "UI/UX Design", href: "/services" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Cookie Policy", href: "/privacy-policy" }, // Points to privacy for now
  ],
}

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">S</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-foreground">
                SNEI TECH <span className="text-primary">INC</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Pioneering the future of digital innovation. We build scalable products and provide high-end software
              solutions for global enterprises.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </Link>
            </div>
          </div>

          {/* Links Groups */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-6">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-muted-foreground">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>Tech Plaza, innovation Drive, Silicon Valley, CA</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail size={18} className="text-primary shrink-0" />
                <span>contact@sneitech.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Snei Tech INC. All rights reserved.</p>
          <div className="flex space-x-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-primary transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
