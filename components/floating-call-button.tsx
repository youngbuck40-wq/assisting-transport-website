"use client";

import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

export function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past the hero section (approximately 500px)
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="tel:8127489123"
      className={`
        fixed bottom-6 right-6 z-50
        md:hidden
        flex items-center gap-2
        bg-accent text-accent-foreground
        px-5 py-4 rounded-full
        shadow-2xl shadow-accent/30
        transition-all duration-500 ease-out
        hover:scale-105 hover:shadow-accent/50
        active:scale-95
        ${isVisible 
          ? "translate-y-0 opacity-100" 
          : "translate-y-20 opacity-0 pointer-events-none"
        }
      `}
      aria-label="Call us now"
    >
      <Phone className="w-5 h-5" />
      <span className="font-bold text-sm">Call Now</span>
    </a>
  );
}
