"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";

const services = [
  { title: "Exterieurreiniging", description: "Met onze exterieurreiniging krijgt uw auto een complete wasbeurt waarbij vuil, aanslag en insecten zorgvuldig worden verwijderd. Uw auto krijgt weer een frisse, glanzende uitstraling." },
  { title: "Interieurreiniging", description: "Wij reinigen het volledige interieur van uw auto. Van dashboard tot vloermatten, alles wordt grondig gereinigd zodat u weer kunt genieten van een fris en schoon interieur." },
  { title: "Reiniging van stoffen en leer", description: "Stoffen bekleding en leren interieurs vragen om een andere aanpak. Wij behandelen beide materialen op een professionele manier zodat ze langer mooi en goed verzorgd blijven." },
  { title: "Bekleding shampooën", description: "Met een dieptereiniging via shampoo halen wij hardnekkige vlekken en nare geuren uit de bekleding. Uw stoelen en banken zien er weer fris en verzorgd uit." },
  { title: "Waxen & lakbescherming", description: "Met een hoogwaardige waxlaag beschermen wij de lak tegen vuil, regen en zon. Dit zorgt niet alleen voor een diepe glans, maar ook voor extra bescherming tegen invloeden van buitenaf." },
  { title: "Motorruimte reiniging", description: "Een schone motorruimte is niet alleen mooi, maar draagt ook bij aan beter onderhoud. Wij reinigen de motorruimte zorgvuldig en veilig, zonder risico voor onderdelen." },
  { title: "Polijsten", description: "Met professioneel polijsten verwijderen wij doffe plekken, lichte krassen en oneffenheden in de lak. Het resultaat is een diepe glans alsof uw auto nieuw uit de showroom komt." },
  { title: "Glasreiniging & coating", description: "Wij reinigen de ruiten streeploos en brengen desgewenst een glascoating aan. Dit zorgt voor helder zicht én waterafstotende werking tijdens regen." },
  { title: "Lakcorrectie", description: "Lak met krassen of doffe plekken wordt zorgvuldig hersteld door middel van lakcorrectie. Zo brengen wij de originele glans en diepte van de kleur weer terug." },
  { title: "Lakbehandeling", description: "Voor optimale bescherming en uitstraling van uw lak bieden wij complete lakbehandelingen. Hiermee blijft uw auto langer mooi en beter beschermd tegen invloeden van buitenaf." },
];

export default function ServicesSection() {
  return (
    <section id="diensten" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Diensten</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Perfecte Verzorging Voor Het Interieur En Exterieur Van Jouw Auto.
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-x-8">
          <AnimatedSection animation="fade-left" delay={100}>
            <Accordion type="single" collapsible className="space-y-2">
              {services.slice(0, 5).map((service, index) => (
                <AccordionItem
                  key={service.title}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg px-4 data-[state=open]:bg-gray-50 accordion-hover hover:border-gray-300"
                >
                  <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline py-4 hover:text-black">
                    {service.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    {service.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>

          <AnimatedSection animation="fade-right" delay={200}>
            <Accordion type="single" collapsible className="space-y-2">
              {services.slice(5).map((service, index) => (
                <AccordionItem
                  key={service.title}
                  value={`item-${index + 5}`}
                  className="border border-gray-200 rounded-lg px-4 data-[state=open]:bg-gray-50 accordion-hover hover:border-gray-300"
                >
                  <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline py-4 hover:text-black">
                    {service.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    {service.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
