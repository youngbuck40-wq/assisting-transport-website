"use client";

import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div 
        className="absolute inset-0 animate-gradient"
        style={{
          background: `linear-gradient(135deg, 
            oklch(0.20 0.06 250) 0%, 
            oklch(0.28 0.07 250) 25%,
            oklch(0.22 0.06 250) 50%,
            oklch(0.30 0.08 245) 75%,
            oklch(0.20 0.06 250) 100%)`
        }}
      />
      
      {/* Animated Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-[10%] w-96 h-96 rounded-full bg-accent/20 blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-32 right-[5%] w-[500px] h-[500px] rounded-full bg-accent/15 blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary-foreground/5 blur-[80px] animate-float" />
      </div>
      
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-float-delayed inline-flex flex-wrap justify-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/20 backdrop-blur-sm text-accent rounded-full text-sm font-semibold tracking-wide border border-accent/30 shadow-lg shadow-accent/10">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              SERVING KENTUCKIANA SINCE 2012
            </span>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground rounded-full text-sm font-semibold tracking-wide border border-primary-foreground/20 shadow-lg">
              <span className="text-accent font-bold">14+</span>
              YEARS OF TRUSTED SERVICE
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-primary-foreground mb-8 leading-[1.1] tracking-tight">
            <span className="block text-balance">Your Ride to</span>
            <span className="relative inline-block">
              <span className="text-accent drop-shadow-[0_0_40px_rgba(251,146,60,0.4)]">Better Health</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 8C50 4 100 2 150 4C200 6 250 8 298 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-accent/60" />
              </svg>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/75 mb-12 max-w-3xl mx-auto leading-relaxed font-medium text-pretty">
            Professional, reliable non-emergency medical transportation serving 
            Clark, Floyd, and surrounding counties. We get you to your appointments safely and on time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-7 text-lg font-bold shadow-2xl shadow-accent/30 transition-all duration-300 hover:shadow-accent/50 hover:-translate-y-1 hover:scale-[1.02] rounded-xl group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary-foreground/40 bg-primary-foreground/5 backdrop-blur-sm text-primary-foreground hover:bg-primary-foreground/15 hover:border-primary-foreground/60 px-10 py-7 text-lg font-bold transition-all duration-300 hover:-translate-y-1 rounded-xl"
              asChild
            >
              <a href="tel:8127489123">
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </a>
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-primary-foreground/70 text-base font-medium">
            <div className="flex items-center gap-3 bg-primary-foreground/5 backdrop-blur-sm px-5 py-3 rounded-full border border-primary-foreground/10">
              <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-lg shadow-accent/50" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-3 bg-primary-foreground/5 backdrop-blur-sm px-5 py-3 rounded-full border border-primary-foreground/10">
              <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-lg shadow-accent/50" />
              <span>Professional Drivers</span>
            </div>
            <div className="flex items-center gap-3 bg-primary-foreground/5 backdrop-blur-sm px-5 py-3 rounded-full border border-primary-foreground/10">
              <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-lg shadow-accent/50" />
              <span>On-Time Service</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 80C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="var(--background)"
          />
        </svg>
      </div>
    </section>
  );
}
