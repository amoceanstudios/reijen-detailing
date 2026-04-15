"use client";

import { Smile, Sparkles, Clock, Car } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { icon: Smile, value: "98%", label: "Tevreden Klanten" },
  { icon: Sparkles, value: "250+", label: "Uitgevoerde Interieurreinigingen" },
  { icon: Clock, value: "200+", label: "Totaal Aantal Polijsturen" },
  { icon: Car, value: "500+", label: "Auto's Behandeld" },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} animation="fade-up" delay={index * 100}>
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 card-hover cursor-default group">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-black group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
