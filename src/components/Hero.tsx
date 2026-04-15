"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://ext.same-assets.com/2408478602/3681981013.jpeg"
          alt="Car detailing background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white pt-20">
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Laat je auto weer stralen{" "}
          <span className="relative inline-block">
            <svg
              className={`absolute -top-2 -right-6 w-6 h-6 text-white transition-all duration-700 delay-500 ${
                isLoaded ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0 rotate-180"
              }`}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            als nieuw!
          </span>
        </h1>
        <p
          className={`text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Bij Reijen Detailing zorgen wij ervoor dat uw voertuig er weer als nieuw uitziet, zowel van binnen als van buiten. Kwaliteit, precisie en oog voor detail staan bij ons centraal.
        </p>
        <div
          className={`transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-gray-100 hover:scale-105 active:scale-95 rounded-full px-8 py-6 text-base font-medium transition-all duration-300 btn-hover hover-shine"
          >
            <a href="tel:+31621930687" className="flex items-center gap-2">
              <Phone className="w-5 h-5 icon-hover-rotate" />
              CONTACT
            </a>
          </Button>
        </div>
      </div>

      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce transition-all duration-1000 delay-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
