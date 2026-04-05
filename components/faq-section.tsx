"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How far in advance do I need to book?",
    answer:
      "We recommend booking at least 24 hours in advance, but we do our best to accommodate same-day requests. Call us at (812) 748-9123 to check availability.",
  },
  {
    question: "Do you accept Medicaid?",
    answer:
      "Yes, we accept Medicaid, Medicare, and most insurance plans. We also accept private pay. Contact us for details about your specific plan.",
  },
  {
    question: "Can a family member ride along?",
    answer:
      "Yes! A family member or caregiver is welcome to ride along at no extra charge.",
  },
  {
    question: "Do you go to Kentucky?",
    answer:
      "Absolutely. We serve the entire Kentuckiana region including Louisville and surrounding areas in Kentucky.",
  },
  {
    question: "What are your after-hours rates?",
    answer:
      "After-hours, weekend, and holiday rates vary depending on the trip. Call (812) 748-9123 or text (502) 643-6005 for a quote.",
  },
  {
    question: "What types of vehicles do you have?",
    answer:
      "We have wheelchair-accessible vans with secure restraint systems and standard vehicles for ambulatory passengers.",
  },
];

export function FaqSection() {
  return (
    <section className="py-24 md:py-32 bg-background" id="faq">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6 tracking-wide">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-8 tracking-tight text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed">
            Have questions? We have answers. If you don&apos;t see what you&apos;re looking 
            for, give us a call at{" "}
            <a
              href="tel:8127489123"
              className="text-accent hover:underline font-medium"
            >
              (812) 748-9123
            </a>
            .
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl mb-4 px-6 bg-card shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300 last:mb-0"
              >
                <AccordionTrigger className="text-lg font-semibold text-primary hover:text-accent hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a
              href="#contact"
              className="text-accent font-semibold hover:underline"
            >
              Contact us
            </a>{" "}
            and we&apos;ll be happy to help.
          </p>
        </div>
      </div>
    </section>
  );
}
