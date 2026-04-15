"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const projects = [
  "https://ext.same-assets.com/2408478602/3892456279.jpeg",
  "https://ext.same-assets.com/2408478602/4055868887.jpeg",
  "https://ext.same-assets.com/2408478602/1322247501.jpeg",
  "https://ext.same-assets.com/2408478602/3913741277.jpeg",
  "https://ext.same-assets.com/2408478602/3142230845.jpeg",
  "https://ext.same-assets.com/2408478602/3945492853.jpeg",
  "https://ext.same-assets.com/2408478602/180809329.jpeg",
  "https://ext.same-assets.com/2408478602/1567406085.jpeg",
  "https://ext.same-assets.com/2408478602/3695922500.jpeg",
];

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (projects.length - visibleCount + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length - visibleCount + 1) % (projects.length - visibleCount + 1));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Recente Projecten</h2>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex gap-4 transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={index} className="flex-shrink-0 w-full md:w-1/3">
                    <div className="aspect-[4/3] relative rounded-lg overflow-hidden img-hover-zoom group cursor-pointer">
                      <img
                        src={project}
                        alt={`Project ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                          <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-100 hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-100 hover:scale-110 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {projects.slice(0, projects.length - visibleCount + 1).map((_, index) => (
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
        </AnimatedSection>
      </div>
    </section>
  );
}
