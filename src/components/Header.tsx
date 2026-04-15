"use client";

import { useState } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { name: "Exterieurreiniging", href: "#diensten" },
  { name: "Interieurreiniging", href: "#diensten" },
  { name: "Reiniging van stoffen en leer", href: "#diensten" },
  { name: "Bekleding shampoon", href: "#diensten" },
  { name: "Waxen & lakbescherming", href: "#diensten" },
  { name: "Motorruimte reiniging", href: "#diensten" },
  { name: "Polijsten", href: "#diensten" },
  { name: "Glasreiniging & coating", href: "#diensten" },
  { name: "Lak correctie", href: "#diensten" },
  { name: "Lakbehandeling", href: "#diensten" },
];

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Diensten", href: "#diensten", hasDropdown: true },
  { name: "Over Ons", href: "#over-ons" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="flex flex-col">
            <span className="text-white font-bold text-2xl tracking-[0.2em]">REIJEN</span>
            <span className="text-white/60 text-[8px] tracking-[0.3em] -mt-1">DETAILING</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className="text-white/90 hover:text-white text-sm font-medium transition-colors flex items-center gap-1"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </Link>
              {link.hasDropdown && (
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-lg shadow-xl py-2 min-w-[220px]">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link
            href="tel:+31621930687"
            className="bg-white text-black px-4 py-2 rounded text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Contact
          </Link>
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <button
              type="button"
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black border-gray-800 p-0">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b border-gray-800">
                <span className="text-white font-bold text-xl tracking-wider">REIJEN</span>
              </div>
              <nav className="flex flex-col p-4">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.hasDropdown ? (
                      <>
                        <button
                          type="button"
                          onClick={() => setShowServices(!showServices)}
                          className="w-full text-left text-white/90 hover:text-white py-3 text-lg font-medium flex items-center justify-between"
                        >
                          {link.name}
                          <ChevronDown className={`w-5 h-5 transition-transform ${showServices ? "rotate-180" : ""}`} />
                        </button>
                        {showServices && (
                          <div className="pl-4 pb-2">
                            {services.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-white/70 hover:text-white py-2 text-sm"
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-white/90 hover:text-white py-3 text-lg font-medium"
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
