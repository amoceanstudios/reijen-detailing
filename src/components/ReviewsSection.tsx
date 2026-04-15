"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const reviews = [
  {
    name: "Klaas-Jan van Loo",
    date: "25/09/2025",
    text: "Goede communicatie en advies over de werkzaamheden en prijzen. Auto is zeer grondig gewassen en netjes gepoetst. Heel tevreden over!",
    rating: 5,
  },
  {
    name: "Poeliersbedrijf Verhoef",
    date: "24/09/2025",
    text: "Bmw super netjes gepoetst!",
    rating: 5,
  },
  {
    name: "Dennis Kraaij",
    date: "24/09/2025",
    text: "Youri heeft onze werkbussen netjes gepoetst. We zijn erg tevreden met zijn werkzaamheden.",
    rating: 5,
  },
  {
    name: "Maurice van Reijen",
    date: "24/09/2025",
    text: "Zoek je iemand die jouw auto met passie en perfectie onder handen neemt? Dan kan je jouw auto met een gerust hart achterlaten bij Reijen Detailing. Alles wordt tot in de kleinste details aangepakt. Geen half werk. Het resultaat mag er zijn. Echt een vakman.",
    rating: 5,
  },
  {
    name: "Julius Strijbis",
    date: "24/09/2025",
    text: "Goed en grondig! Topper",
    rating: 5,
  },
];

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up" className="mb-8">
          <p className="text-sm text-gray-500 mb-2">Google Reviews</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Waarom Klanten Van Ons Houden
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <div className="max-w-2xl">
            <div className="bg-gray-900 rounded-2xl p-6 md:p-8 relative hover-glow transition-all duration-300">
              <div className="mb-4">
                <h4 className="text-white font-semibold">{reviews[currentIndex].name}</h4>
                <p className="text-gray-400 text-sm">{reviews[currentIndex].date}</p>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 hover:scale-125 transition-transform duration-200" style={{ transitionDelay: `${i * 50}ms` }} />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed">{reviews[currentIndex].text}</p>

              <button
                type="button"
                onClick={prevReview}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/30 hover:scale-110 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                type="button"
                onClick={nextReview}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/30 hover:scale-110 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-150 ${
                    index === currentIndex ? "bg-gray-900 w-6" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
