"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageCircle, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const form = e.currentTarget;
      const response = await fetch("https://formspree.io/f/mreoovay", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setIsSubmitted(true);
      }
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
                    <label htmlFor="pickup" className="block text-sm font-bold text-primary mb-3">
                      Pickup Address
                    </label>
                    <Input
                      id="pickup"
                      name="pickup"
                      placeholder="123 Main St, Jeffersonville, IN"
                      required
                      className="bg-background border-border focus:border-accent focus:ring-accent h-14 text-base rounded-xl shadow-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="dropoff" className="block text-sm font-bold text-primary mb-3">
                      Drop-off Address
                    </label>
                    <Input
                      id="dropoff"
                      name="dropoff"
                      placeholder="456 Oak Ave, Louisville, KY"
                      required
                      className="bg-background border-border focus:border-accent focus:ring-accent h-14 text-base rounded-xl shadow-sm"
                    />
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
