"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Send } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    naam: "",
    telefoonnummer: "",
    email: "",
    adres: "",
    bericht: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <AnimatedSection animation="fade-up">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover-glow transition-all duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Boek Een Service</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Naam"
                  value={formData.naam}
                  onChange={(e) => setFormData({ ...formData, naam: e.target.value })}
                  className="bg-gray-50 border-gray-200 h-12 focus:scale-[1.02] transition-transform duration-200"
                />
                <Input
                  placeholder="Telefoonnummer"
                  value={formData.telefoonnummer}
                  onChange={(e) => setFormData({ ...formData, telefoonnummer: e.target.value })}
                  className="bg-gray-50 border-gray-200 h-12 focus:scale-[1.02] transition-transform duration-200"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-gray-50 border-gray-200 h-12 focus:scale-[1.02] transition-transform duration-200"
                />
                <Input
                  placeholder="Adres"
                  value={formData.adres}
                  onChange={(e) => setFormData({ ...formData, adres: e.target.value })}
                  className="bg-gray-50 border-gray-200 h-12 focus:scale-[1.02] transition-transform duration-200"
                />
              </div>
              <Textarea
                placeholder="Bericht"
                value={formData.bericht}
                onChange={(e) => setFormData({ ...formData, bericht: e.target.value })}
                className="bg-gray-50 border-gray-200 min-h-[120px] focus:scale-[1.01] transition-transform duration-200"
              />
              <div className="flex items-center gap-4">
                <input
                  type="file"
                  className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 file:transition-all file:duration-300 file:cursor-pointer"
                />
              </div>
              <Button type="submit" className="w-full md:w-auto bg-black text-white hover:bg-gray-800 hover:scale-105 active:scale-95 h-12 px-8 btn-hover transition-all duration-300">
                <Send className="w-4 h-4 mr-2" />
                VERSTUUR
              </Button>
            </form>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover-lift">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Of bel ons</h3>
            <a href="tel:+31621930687" className="flex items-center gap-4 group">
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-black group-hover:scale-110 transition-all duration-300">
                <Phone className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 group-hover:text-black">Reijen Detailing</p>
                <p className="text-xl font-bold text-gray-900 group-hover:translate-x-1 transition-transform duration-300">Tel: +31 6 21930687</p>
              </div>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
