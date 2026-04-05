import { Phone, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Assisting Transport <span className="text-accent">LLC</span>
            </h3>
            <p className="text-primary-foreground/70 leading-relaxed mb-6 max-w-md">
              Professional non-emergency medical transportation serving Clark, 
              Floyd, and surrounding counties in Kentuckiana. Your trusted partner for safe, 
              reliable medical transport.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-primary-foreground/10 rounded-full text-sm">
                Wheelchair Transport
              </span>
              <span className="px-3 py-1 bg-primary-foreground/10 rounded-full text-sm">
                Ambulatory
              </span>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-1" />
                <div>
                  <p className="text-sm text-primary-foreground/60 mb-1">Phone</p>
                  <a 
                    href="tel:8127489123" 
                    className="font-medium hover:text-accent transition-colors"
                  >
                    (812) 748-9123
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <div>
                  <p className="text-sm text-primary-foreground/60 mb-1">Address</p>
                  <p className="font-medium">
                    480 N Indiana Ave<br />
                    Sellersburg, IN 47172
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent mt-1" />
                <div>
                  <p className="text-sm text-primary-foreground/60 mb-1">Hours</p>
                  <p className="font-medium">
                    Mon–Fri: 7:00 AM – 5:00 PM
                  </p>
                  <p className="text-sm text-primary-foreground/60 mt-1">
                    After-hours & weekend service available
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Service Area */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Service Area</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                Jeffersonville
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                Clarksville
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                New Albany
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                Sellersburg
              </li>
            </ul>
            
            <div className="mt-6 flex items-center gap-2 text-primary-foreground/60 text-sm">
              <Clock className="w-4 h-4" />
              Clark, Floyd & Surrounding Counties
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Assisting Transport LLC. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
              <span>Licensed & Insured</span>
              <span className="w-1 h-1 rounded-full bg-accent" />
              <span>Serving Kentuckiana Since 2012</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
