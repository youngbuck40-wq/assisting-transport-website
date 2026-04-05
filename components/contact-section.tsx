"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageCircle, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pickupVal, setPickupVal] = useState("");
  const [dropoffVal, setDropoffVal] = useState("");
  const pickupContainerRef = useRef<HTMLDivElement>(null);
  const dropoffContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const waitForGoogle = setInterval(() => {
      const g = (window as any).google;
      if (!g?.maps?.places) return;
      clearInterval(waitForGoogle);

      // Pickup
      if (pickupContainerRef.current && pickupContainerRef.current.childElementCount === 0) {
        const el = document.createElement("gmp-place-autocomplete") as any;
        el.setAttribute("placeholder", "Start typing an address...");
        el.setAttribute("country", "us");
        el.style.cssText = "display:block;width:100%;--gmpx-font-size-body:16px;";
        el.addEventListener("gmp-placeselect", async (e: any) => {
          const place = e.place;
          await place.fetchFields({ fields: ["formattedAddress"] });
          setPickupVal(place.formattedAddress || "");
        });
        pickupContainerRef.current.appendChild(el);
      }

      // Dropoff
      if (dropoffContainerRef.current && dropoffContainerRef.current.childElementCount === 0) {
        const el = document.createElement("gmp-place-autocomplete") as any;
        el.setAttribute("placeholder", "Start typing an address...");
        el.setAttribute("country", "us");
        el.style.cssText = "display:block;width:100%;--gmpx-font-size-body:16px;";
        el.addEventListener("gmp-placeselect", async (e: any) => {
          const place = e.place;
          await place.fetchFields({ fields: ["formattedAddress"] });
          setDropoffVal(place.formattedAddress || "");
        });
        dropoffContainerRef.current.appendChild(el);
      }
    }, 500);
    return () => clearInterval(waitForGoogle);
    /* eslint-enable @typescript-eslint/no-explicit-any */
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      // Send to Formspree (email backup)
      fetch("https://formspree.io/f/mreoovay", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      // Send to Supabase (admin dashboard)
      const supaRes = await fetch("https://vtmewnkdeqctjzqvyjpl.supabase.co/rest/v1/quote_requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0bWV3bmtkZXFjdGp6cXZ5anBsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNDI3MDIsImV4cCI6MjA4NzYxODcwMn0.qJFQTLXFbjeJtnMRrrWy76vvZBeI9zZY22FP8HZuxn4",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0bWV3bmtkZXFjdGp6cXZ5anBsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNDI3MDIsImV4cCI6MjA4NzYxODcwMn0.qJFQTLXFbjeJtnMRrrWy76vvZBeI9zZY22FP8HZuxn4",
          "Prefer": "return=minimal",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email") || null,
          pickup: formData.get("pickup"),
          dropoff: formData.get("dropoff"),
          trip_type: formData.get("tripType"),
          escort: formData.get("escort"),
          preferred_datetime: formData.get("datetime"),
          message: formData.get("message"),
        }),
      });
      if (!supaRes.ok) {
        console.error("Supabase error:", supaRes.status, await supaRes.text());
      }

      setIsSubmitted(true);
    } catch {
      // silently fail
    }
    setIsLoading(false);
  };

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden" id="contact">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-accent/5 blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-primary/5 blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6 tracking-wide">
                GET IN TOUCH
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-4 tracking-tight text-balance">
                Request a Quote Today
              </h2>
              <p className="text-accent font-bold text-2xl mb-6">
                Get a free quote in minutes
              </p>
              <p className="text-muted-foreground text-xl leading-relaxed mb-12">
                Fill out the form and our team will get back to you shortly to 
                discuss your transportation needs and provide a personalized quote.
              </p>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary">Call or Text Us</h3>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <a 
                    href="tel:8127489123"
                    className="group flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-accent/10 hover:border-accent/30 transition-all duration-500"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:from-accent group-hover:to-accent/80 transition-all duration-500">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium mb-0.5">Main Office Line</p>
                      <p className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                        (812) 748-9123
                      </p>
                    </div>
                  </a>
                  
                  <a 
                    href="sms:5026436005"
                    className="group flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-accent/10 hover:border-accent/30 transition-all duration-500"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:from-primary group-hover:to-primary/80 transition-all duration-500">
                      <MessageCircle className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium mb-0.5">Text Us Anytime</p>
                      <p className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                        (502) 643-6005
                      </p>
                    </div>
                  </a>
                </div>
                
                <div className="flex items-start gap-5 p-6 rounded-2xl bg-card border border-border shadow-lg shadow-primary/5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Clock className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">Hours of Operation</p>
                    <p className="text-lg font-bold text-primary">
                      Monday – Friday: 7:00 AM – 5:00 PM
                    </p>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      After-hours, Saturday & Sunday service available — rates vary. 
                      Call <a href="tel:8127489123" className="text-accent hover:underline font-medium">(812) 748-9123</a> or 
                      text <a href="sms:5026436005" className="text-accent hover:underline font-medium">(502) 643-6005</a> for availability.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-5 p-6 rounded-2xl bg-card border border-border shadow-lg shadow-primary/5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">Address</p>
                    <p className="text-lg font-bold text-primary">
                      480 N Indiana Ave, Sellersburg, IN 47172
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-2xl shadow-primary/10 border border-border relative overflow-hidden">
              {/* Card decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-[100px]" />
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full py-16 text-center relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-green-100 flex items-center justify-center mb-8 shadow-lg">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-primary mb-4">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {"We've received your request and will contact you shortly."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-primary mb-3">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="bg-background border-border focus:border-accent focus:ring-accent h-14 text-base rounded-xl shadow-sm"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-primary mb-3">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(812) 555-0123"
                        required
                        className="bg-background border-border focus:border-accent focus:ring-accent h-14 text-base rounded-xl shadow-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-primary mb-3">
                        Email (optional)
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@email.com"
                        className="bg-background border-border focus:border-accent focus:ring-accent h-14 text-base rounded-xl shadow-sm"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-primary mb-3">
                      Pickup Address
                    </label>
                    <div ref={pickupContainerRef} className="rounded-xl border border-border bg-background shadow-sm overflow-hidden min-h-[56px] [&_input]:h-14 [&_input]:px-3 [&_input]:text-base [&_input]:border-none [&_input]:outline-none [&_input]:w-full" />
                    <input type="hidden" name="pickup" value={pickupVal} />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-primary mb-3">
                      Drop-off Address
                    </label>
                    <div ref={dropoffContainerRef} className="rounded-xl border border-border bg-background shadow-sm overflow-hidden min-h-[56px] [&_input]:h-14 [&_input]:px-3 [&_input]:text-base [&_input]:border-none [&_input]:outline-none [&_input]:w-full" />
                    <input type="hidden" name="dropoff" value={dropoffVal} />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="tripType" className="block text-sm font-bold text-primary mb-3">
                        Trip Type
                      </label>
                      <select
                        id="tripType"
                        name="tripType"
                        required
                        className="flex h-14 w-full rounded-xl border border-border bg-background px-3 py-2 text-base shadow-sm focus:border-accent focus:ring-accent focus:outline-none"
                      >
                        <option value="">Select...</option>
                        <option value="Ambulatory">Ambulatory</option>
                        <option value="Wheelchair">Wheelchair</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="escort" className="block text-sm font-bold text-primary mb-3">
                        Escort Needed?
                      </label>
                      <select
                        id="escort"
                        name="escort"
                        required
                        className="flex h-14 w-full rounded-xl border border-border bg-background px-3 py-2 text-base shadow-sm focus:border-accent focus:ring-accent focus:outline-none"
                      >
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="datetime" className="block text-sm font-bold text-primary mb-3">
                      Preferred Date & Time
                    </label>
                    <Input
                      id="datetime"
                      name="datetime"
                      type="datetime-local"
                      required
                      className="bg-background border-border focus:border-accent focus:ring-accent h-14 text-base rounded-xl shadow-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-primary mb-3">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your transportation needs (wheelchair, round trip, etc.)..."
                      rows={4}
                      className="bg-background border-border focus:border-accent focus:ring-accent resize-none text-base rounded-xl shadow-sm"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 text-accent-foreground font-bold py-7 text-lg shadow-xl shadow-accent/25 hover:shadow-2xl hover:shadow-accent/35 transition-all duration-300 rounded-xl group"
                  >
                    {isLoading ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        Submit Request
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
