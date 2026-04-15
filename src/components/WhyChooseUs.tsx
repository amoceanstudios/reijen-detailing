"use client";

import { Shield, ThumbsUp, Clock } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const reasons = [
  {
    icon: Shield,
    title: "Kwaliteitsgarantie",
    description: "Wij werken met de beste producten en technieken om een perfect resultaat te garanderen.",
  },
  {
    icon: ThumbsUp,
    title: "Kwaliteit en Duurzaamheid",
    description: "Gebruik van topkwaliteit materialen en vakmanschap voor duurzame resultaten.",
  },
  {
    icon: Clock,
    title: "Betrouwbare Service",
    description: "Elke auto krijgt een behandeling op maat, afgestemd op jouw wensen en behoeften.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Waarom Klanten Voor Ons</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            3 Redenen Waarom Klanten Voor Ons Kiezen
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <AnimatedSection key={reason.title} animation="fade-up" delay={index * 150}>
              <div className="text-center md:text-left p-6 rounded-2xl hover:bg-white hover-lift transition-all duration-300 cursor-default group">
                <div className="w-14 h-14 bg-gray-200 rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0 group-hover:bg-black group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <reason.icon className="w-7 h-7 text-gray-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg group-hover:text-black">{reason.title}</h3>
                <p className="text-gray-600 text-sm">{reason.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
