"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar, Car, Users } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: 14,
    suffix: "+",
    label: "Years in Business",
    description: "Serving Kentuckiana since 2012"
  },
  {
    icon: Car,
    value: 50000,
    suffix: "+",
    label: "Rides Completed",
    description: "Safe trips and counting"
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Happy Clients",
    description: "Families trust us"
  }
];

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!start) return;
    
    let startTime: number | null = null;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);
  
  return count;
}

function StatCard({ stat, index, isVisible }: { 
  stat: typeof stats[0]; 
  index: number;
  isVisible: boolean;
}) {
  const count = useCountUp(stat.value, 2000, isVisible);
  
  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };
  
  return (
    <div 
      className="group relative text-center p-8 md:p-10"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Icon */}
      <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-300">
        <stat.icon className="w-8 h-8 text-accent" />
      </div>
      
      {/* Counter */}
      <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary mb-3 tracking-tight">
        {formatNumber(count)}{stat.suffix}
      </div>
      
      {/* Label */}
      <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">
        {stat.label}
      </h3>
      
      {/* Description */}
      <p className="text-muted-foreground">
        {stat.description}
      </p>
      
      {/* Divider line (except last item) */}
      {index < stats.length - 1 && (
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-24 bg-border" />
      )}
    </div>
  );
}

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-28 bg-background relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6 tracking-wide">
            BY THE NUMBERS
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight text-balance">
            Trusted Transportation Since 2012
          </h2>
        </div>
        
        {/* Stats grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-0 bg-card rounded-3xl border border-border shadow-xl shadow-primary/5 overflow-hidden">
            {stats.map((stat, index) => (
              <StatCard 
                key={index} 
                stat={stat} 
                index={index} 
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
