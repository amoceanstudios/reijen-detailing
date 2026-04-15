"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    question: "Wat is het verschil tussen autowassen en detailen?",
    answer: "Een gewone autowasbeurt verwijdert oppervlakkig vuil en geeft de auto tijdelijk een schone uitstraling. Auto detailing gaat veel verder. Bij Reijen Detailing in Ermelo reinigen we niet alleen de buitenkant, maar ook het interieur, de bekleding, de motorruimte en zelfs de kleinste details.",
  },
  {
    question: "Hoe verwijder je vlekken uit autobekleding?",
    answer: "Vlekken uit autobekleding zijn vaak hardnekkig en met alleen stofzuigen krijgt u ze niet weg. Bij Reijen Detailing gebruiken wij speciale technieken zoals bekleding shampooën en dieptereiniging om vuil, vet en vochtplekken effectief te verwijderen.",
  },
  {
    question: "Wat is een lakcorrectie en wanneer is het nodig?",
    answer: "Lakcorrectie is een professionele behandeling waarbij krassen, swirls en doffe plekken uit de lak worden verwijderd. Dit gebeurt door middel van gecontroleerd polijsten en speciale compounds.",
  },
  {
    question: "Is waxen goed voor de lak van mijn auto?",
    answer: "Ja, waxen is zeer goed voor de lak van uw auto. Het biedt een beschermende laag tegen UV-straling, vuil, regen en andere omgevingsfactoren. Daarnaast geeft wax een diepe glans aan uw auto.",
  },
  {
    question: "Hoe bescherm ik de lak van mijn auto het beste?",
    answer: "De beste manier om uw lak te beschermen is door regelmatig te waxen of een coating aan te laten brengen. Ook regelmatige reiniging en het vermijden van automatische wasstraten helpt de lak in topconditie te houden.",
  },
  {
    question: "Hoe vaak moet je je auto laten polijsten?",
    answer: "Over het algemeen is één keer per jaar polijsten voldoende voor de meeste auto's. Als uw auto veel buitenstaat of intensief wordt gebruikt, kan vaker polijsten nodig zijn.",
  },
  {
    question: "Wat is het verschil tussen lakbehandeling en waxen?",
    answer: "Waxen biedt tijdelijke bescherming en glans, terwijl een lakbehandeling (zoals een coating) langdurigere bescherming biedt. Een lakbehandeling gaat dieper en kan tot enkele jaren meegaan.",
  },
  {
    question: "Hoe lang blijft een lakbescherming zitten?",
    answer: "Dit hangt af van het type bescherming. Een goede waxlaag houdt 2-3 maanden, terwijl een professionele coating tot 2-5 jaar kan meegaan, afhankelijk van het gebruik en onderhoud.",
  },
  {
    question: "Wat is het verschil tussen lakcorrectie en polijsten?",
    answer: "Polijsten is een lichtere behandeling om de glans te herstellen, terwijl lakcorrectie een intensievere behandeling is om diepere krassen en beschadigingen te verwijderen.",
  },
  {
    question: "Hoe vaak moet je een glascoating vernieuwen?",
    answer: "Een glascoating gaat gemiddeld 1-2 jaar mee, afhankelijk van het gebruik van de auto en de weersomstandigheden. Regelmatige reiniging helpt de coating langer effectief te houden.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Top 10 Veelgestelde Vragen aan Onze Experts
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border border-gray-200 rounded-lg px-4 data-[state=open]:bg-gray-50 accordion-hover hover:border-gray-300 transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline py-4 hover:text-black">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
}
