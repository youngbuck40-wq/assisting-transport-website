"use client";

import { Shield, Clock, Users, MapPin } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed and insured for your peace of mind and safety.",
  },
  {
    icon: Clock,
    title: "On-Time Pickup",
    description: "We value your time and ensure punctual pickups for every trip.",
  },
  {
    icon: Users,
    title: "Professional Drivers",
    description: "Our trained, courteous drivers are committed to your comfort and safety.",
  },
  {
    icon: MapPin,
    title: "Serving Clark, Floyd & Beyond",
    description: "Local experts serving Jeffersonville, Clarksville, New Albany, Sellersburg, and surrounding areas.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6 tracking-wide">
            WHY CHOOSE US
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6 tracking-tight text-balance">
            The Trusted Choice for Transportation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Serving Kentuckiana since 2012, Assisting Transport LLC combines professionalism
            with compassion to deliver exceptional transportation services.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 border border-border shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-accent/10 hover:border-accent/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mb-6 shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform duration-500">
                <feature.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
