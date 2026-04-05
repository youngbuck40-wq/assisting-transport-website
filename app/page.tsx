import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { WhyChooseUsSection } from "@/components/why-choose-us-section";
import { StatsSection } from "@/components/stats-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ServiceAreaSection } from "@/components/service-area-section";
import { FaqSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { FloatingCallButton } from "@/components/floating-call-button";
import { AnimatedSection } from "@/hooks/use-scroll-animation";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AnimatedSection>
        <ServicesSection />
      </AnimatedSection>
      <AnimatedSection>
        <WhyChooseUsSection />
      </AnimatedSection>
      <AnimatedSection>
        <StatsSection />
      </AnimatedSection>
      <AnimatedSection>
        <TestimonialsSection />
      </AnimatedSection>
      <AnimatedSection>
        <ServiceAreaSection />
      </AnimatedSection>
      <AnimatedSection>
        <FaqSection />
      </AnimatedSection>
      <AnimatedSection>
        <ContactSection />
      </AnimatedSection>
      <Footer />
      <FloatingCallButton />
    </main>
  );
}
