"use client";

import { Award, Clock, Heart, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

const features = [
  {
    icon: Award,
    title: "Ervaren specialisten",
    description: "Jarenlange ervaring in autoverzorging.",
  },
  {
    icon: Clock,
    title: "Snelle service",
    description: "Efficiënt zonder kwaliteitsverlies.",
  },
  {
    icon: Heart,
    title: "Persoonlijke service",
    description: "Wij behandelen elke auto alsof het onze eigen is.",
  },
  {
    icon: Leaf,
    title: "Duurzame oplossingen",
    description: "Milieuvriendelijke producten en methoden.",
  },
];

export default function AboutSection() {
  return (
    <section id="over-ons" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Over Ons</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Bij Reijen Detailing combineren we vakmanschap met liefde voor auto&apos;s. Vanuit Ermelo verzorgen wij hoogwaardige reiniging en detaildiensten voor iedere auto, van dagelijkse voertuigen tot exclusieve modellen. Ons doel is om de uitstraling, bescherming en levensduur van uw auto naar een hoger niveau te tillen.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} animation="fade-up" delay={index * 100}>
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 hover-lift transition-all duration-300 cursor-default group">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-black group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-black">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={400} className="text-center mb-12">
          <Button asChild className="bg-black text-white hover:bg-gray-800 hover:scale-105 active:scale-95 w-full md:w-auto h-12 px-12 btn-hover transition-all duration-300">
            <a href="#over-ons">MEER INFO</a>
          </Button>
        </AnimatedSection>

        <AnimatedSection animation="scale" delay={500}>
          <div className="relative max-w-4xl mx-auto group">
            <div className="rounded-2xl overflow-hidden shadow-lg img-hover-zoom">
              <img
                src="https://ext.same-assets.com/2408478602/1187712235.jpeg"
                alt="Reijen Detailing gebouw"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute bottom-6 right-6 bg-black/90 backdrop-blur-sm text-white px-6 py-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <div className="text-center">
                <span className="text-3xl font-bold">5+</span>
                <p className="text-sm text-white/80">Jaar Ervaring</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
