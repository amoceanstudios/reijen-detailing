"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    telefoonnummer: "",
    postcode: "",
    bericht: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="py-20 relative"
      style={{
        backgroundImage: "url('https://ext.same-assets.com/2408478602/957759981.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Boek een service
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <p className="text-white/80 mb-8 max-w-2xl">
              Wil je jouw auto professioneel laten reinigen en beschermen? Kies de gewenste behandeling en laat je gegevens achter. Wij nemen zo snel mogelijk contact met je op om alles te regelen.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <div className="flex flex-col md:flex-row gap-6 mb-8 text-white">
              <a href="tel:+31621930687" className="flex items-center gap-3 hover:text-white/80 transition-colors group">
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="group-hover:translate-x-1 transition-transform duration-300">+31 6 21930687</span>
              </a>
              <a href="mailto:info@reijendetailing.nl" className="flex items-center gap-3 hover:text-white/80 transition-colors group">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="group-hover:translate-x-1 transition-transform duration-300">info@reijendetailing.nl</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>Ermelo</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Naam"
                  value={formData.naam}
                  onChange={(e) => setFormData({ ...formData, naam: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 focus:bg-white/20 focus:scale-[1.02] transition-all duration-300"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 focus:bg-white/20 focus:scale-[1.02] transition-all duration-300"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Telefoonnummer"
                  value={formData.telefoonnummer}
                  onChange={(e) => setFormData({ ...formData, telefoonnummer: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 focus:bg-white/20 focus:scale-[1.02] transition-all duration-300"
                />
                <Input
                  placeholder="Postcode"
                  value={formData.postcode}
                  onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 focus:bg-white/20 focus:scale-[1.02] transition-all duration-300"
                />
              </div>
              <Textarea
                placeholder="Heb je vragen, specifieke wensen of hulp nodig? We denken graag met je mee!"
                value={formData.bericht}
                onChange={(e) => setFormData({ ...formData, bericht: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[120px] focus:bg-white/20 focus:scale-[1.01] transition-all duration-300"
              />
              <div className="flex items-center gap-4">
                <input
                  type="file"
                  className="text-sm text-white/70 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-white/20 file:text-white hover:file:bg-white/30 file:transition-all file:duration-300 file:cursor-pointer"
                />
              </div>
              <Button type="submit" className="bg-black text-white hover:bg-gray-800 hover:scale-105 active:scale-95 h-12 px-8 btn-hover transition-all duration-300">
                VERSTUUR
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
