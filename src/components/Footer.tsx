"use client";

import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const menuLinks = [
  { name: "Home", href: "#" },
  { name: "Diensten", href: "#diensten" },
  { name: "Over ons", href: "#over-ons" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="mb-4 group cursor-default">
              <span className="text-3xl font-bold tracking-[0.2em] group-hover:tracking-[0.3em] transition-all duration-300">REIJEN</span>
              <p className="text-white/60 text-xs tracking-[0.3em] -mt-1">DETAILING</p>
            </div>
            <p className="text-white/70 max-w-md">
              Met jarenlange ervaring in de branche staan wij garant voor betrouwbaarheid en kwaliteit.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 max-w-2xl mx-auto">
          <AnimatedSection animation="fade-left" delay={100}>
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/70 group cursor-default">
                  <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:text-white group-hover:translate-x-1 transition-all duration-300">Ermelo</span>
                </div>
                <a href="mailto:info@reijendetailing.nl" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">info@reijendetailing.nl</span>
                </a>
                <a href="tel:+31621930687" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">+31 6 21930687</span>
                </a>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-right" delay={200}>
            <div>
              <h4 className="font-semibold text-lg mb-4">Menu</h4>
              <nav className="space-y-2">
                {menuLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-white/70 hover:text-white transition-all duration-300 hover:translate-x-2 link-underline"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fade-up" delay={300}>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50 text-sm">
            <p>&copy; {new Date().getFullYear()} Reijen Detailing. Alle rechten voorbehouden.</p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
}
