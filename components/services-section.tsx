import { Accessibility, User, Stethoscope, Heart, Plane, PartyPopper } from "lucide-react";

const medicalServices = [
  {
    icon: Accessibility,
    title: "Wheelchair Transport",
    description: "Safe and comfortable wheelchair-accessible vehicles with secure restraint systems for passengers who use wheelchairs."
  },
  {
    icon: User,
    title: "Ambulatory Transport",
    description: "Door-to-door service for passengers who can walk but need assistance getting to appointments safely."
  },
  {
    icon: Stethoscope,
    title: "Medical Appointments",
    description: "Reliable rides to doctor visits, dialysis treatments, therapy sessions, and other non-emergency medical appointments."
  }
];

const specialServices = [
  {
    icon: Heart,
    title: "Weddings & Funerals",
    description: "Compassionate, dignified transportation for life's most important moments, including weddings and memorial services."
  },
  {
    icon: Plane,
    title: "Airport Transportation",
    description: "Reliable airport pickup and drop-off services to Louisville International and other regional airports."
  },
  {
    icon: PartyPopper,
    title: "Special Events",
    description: "Transportation for family reunions, graduation ceremonies, church events, and other special occasions."
  }
];

function ServiceCard({ service }: { service: { icon: React.ElementType; title: string; description: string } }) {
  return (
    <div className="group relative bg-card rounded-2xl p-8 shadow-lg shadow-primary/5 border border-border hover:shadow-2xl hover:shadow-accent/15 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon container */}
      <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-7 shadow-lg shadow-primary/25 group-hover:shadow-accent/30 group-hover:from-accent group-hover:to-accent/80 transition-all duration-500 group-hover:scale-110">
        <service.icon className="w-8 h-8 text-primary-foreground" />
      </div>
      
      <h3 className="relative text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
        {service.title}
      </h3>
      <p className="relative text-muted-foreground leading-relaxed text-base">
        {service.description}
      </p>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  );
}

export function ServicesSection() {
  return (
    <section className="py-24 md:py-32 bg-background" id="services">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6 tracking-wide">
            OUR SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-8 tracking-tight text-balance">
            Transportation For Every Occasion
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed">
            Whether you need a ride to a medical appointment, the airport, or a special 
            celebration, we&apos;ll get you there safely and on time throughout Kentuckiana.
          </p>
        </div>
        
        {/* Medical Transportation */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">
            Medical Transportation
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {medicalServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
        
        {/* Special Events & Non-Medical */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">
            Special Events & Personal Transportation
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {specialServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
        
        {/* CTA Banner */}
        <div className="max-w-4xl mx-auto mt-16 text-center p-8 rounded-2xl bg-gradient-to-r from-primary to-primary/90 shadow-xl">
          <p className="text-primary-foreground text-xl font-semibold mb-2">
            Need a ride somewhere else?
          </p>
          <p className="text-primary-foreground/80">
            We transport people wherever they need to go. Just give us a call and we&apos;ll work out the details.
          </p>
        </div>
      </div>
    </section>
  );
}
