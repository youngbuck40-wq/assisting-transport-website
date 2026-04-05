import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Great service and prompt communication",
    author: "George Stevens",
    stars: 5
  },
  {
    quote: "Their wonderful dispatcher and the friendly drivers have been a Godsend",
    author: "Mike Spaulding",
    stars: 5
  },
  {
    quote: "They do a terrific job getting my husband safely to his appointments",
    author: "Brenda Jones",
    stars: 5
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-muted relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-primary/5 blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6 tracking-wide">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-8 tracking-tight text-balance">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed">
            {"Don't just take our word for it. Here's what real clients have to say about our service."}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative bg-card rounded-2xl p-8 shadow-xl shadow-primary/5 border border-border hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Quote icon background */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <Quote className="w-16 h-16 text-accent" />
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-xl md:text-2xl font-semibold text-primary mb-8 leading-relaxed relative z-10">
                {`"${testimonial.quote}"`}
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-bold text-primary">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">Verified Client</p>
                </div>
              </div>
              
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent/80 to-accent/50 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
