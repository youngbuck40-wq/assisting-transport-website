import { MapPin, CheckCircle } from "lucide-react";

const cities = [
  "Jeffersonville",
  "Clarksville", 
  "New Albany",
  "Sellersburg"
];

export function ServiceAreaSection() {
  return (
    <section className="py-24 md:py-32 bg-background" id="service-area">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6 tracking-wide">
                SERVICE AREA
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-8 tracking-tight text-balance">
                Proudly Serving Kentuckiana
              </h2>
              <p className="text-muted-foreground text-xl leading-relaxed mb-10">
                Assisting Transport LLC provides reliable non-emergency medical 
                transportation throughout Clark, Floyd, and surrounding counties. We know our 
                communities and are committed to getting you where you need to go.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {cities.map((city, index) => (
                  <div 
                    key={index}
                    className="group flex items-center gap-4 p-5 rounded-xl bg-card border border-border shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-accent/10 hover:border-accent/30 transition-all duration-500 hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:from-accent group-hover:to-accent/80 transition-all duration-500">
                      <CheckCircle className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors duration-500" />
                    </div>
                    <span className="font-bold text-lg text-primary">{city}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              {/* Main card */}
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-primary/20">
                {/* Gradient background */}
                <div 
                  className="absolute inset-0 animate-gradient"
                  style={{
                    background: `linear-gradient(135deg, 
                      oklch(0.22 0.06 250) 0%, 
                      oklch(0.30 0.08 250) 50%,
                      oklch(0.24 0.06 250) 100%)`
                  }}
                />
                
                {/* Decorative circles */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-accent/20 animate-pulse-glow" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full border border-accent/30" style={{ animationDelay: '1s' }} />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] rounded-full border border-accent/40" />
                </div>
                
                {/* Grid overlay */}
                <div 
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                                     linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                  }}
                />
                
                {/* Center content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center relative z-10">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent to-accent/80 mx-auto mb-8 flex items-center justify-center shadow-2xl shadow-accent/40 animate-float">
                      <MapPin className="w-12 h-12 text-accent-foreground" />
                    </div>
                    <h3 className="text-3xl font-extrabold text-primary-foreground mb-3">
                      Kentuckiana Region
                    </h3>
                    <p className="text-primary-foreground/70 text-lg font-medium">
                      Based in Sellersburg, Indiana
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-accent to-accent/80 text-accent-foreground px-6 py-3 rounded-xl font-bold shadow-xl shadow-accent/30 animate-float">
                Local Service
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card text-primary px-6 py-3 rounded-xl font-bold shadow-xl border border-border animate-float" style={{ animationDelay: '1s' }}>
                Multiple Counties
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
