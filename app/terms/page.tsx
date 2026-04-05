import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Assisting Transport LLC",
  description: "Terms and Conditions for Assisting Transport LLC non-emergency medical transportation services.",
};

export default function TermsPage() {
  return (
    <>
      <nav className="bg-primary h-[68px] px-[5%] flex items-center justify-between">
        <Link href="/" className="text-xl font-extrabold text-primary-foreground">
          Assisting Transport <span className="text-accent">LLC</span>
        </Link>
        <Link href="/" className="text-primary-foreground/75 text-sm hover:text-primary-foreground transition-colors">
          &larr; Back to Home
        </Link>
      </nav>

      <div className="max-w-[800px] mx-auto px-[5%] py-16">
        <div className="bg-card rounded-2xl border border-border p-10">
          <h1 className="text-3xl font-extrabold text-primary mb-2">Terms &amp; Conditions</h1>
          <p className="text-muted-foreground text-sm mb-10">Last updated: April 4, 2026</p>

          <p className="text-foreground leading-relaxed mb-4">
            These Terms and Conditions govern your use of transportation services provided by Assisting Transport LLC (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By scheduling or using our services, you agree to these terms.
          </p>

          <h2 className="text-lg font-bold text-primary mt-8 mb-3">1. Services</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Assisting Transport LLC provides Non-Emergency Medical Transportation (NEMT) services in Clark, Floyd, and surrounding counties in Kentuckiana. Our services include wheelchair transport, ambulatory transport, and rides to medical appointments and special events.
          </p>

          <h2 className="text-lg font-bold text-primary mt-8 mb-3">2. Scheduling &amp; Cancellations</h2>
          <ul className="list-disc pl-6 mb-4 space-y-1 text-foreground">
            <li>Rides must be scheduled in advance. Same-day scheduling is subject to availability.</li>
            <li>Cancellations made same-day may be subject to a cancellation fee depending on your rate agreement.</li>
            <li>No-shows may be subject to a no-show fee depending on your rate agreement.</li>
            <li>We reserve the right to cancel or reschedule rides due to vehicle availability, weather, or safety concerns.</li>
          </ul>

          <h2 className="text-lg font-bold text-primary mt-8 mb-3">3. Passenger Responsibilities</h2>
          <p className="text-foreground leading-relaxed mb-2">Passengers agree to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1 text-foreground">
            <li>Be ready at the scheduled pickup time</li>
            <li>Provide accurate pickup and drop-off addresses</li>
            <li>Disclose any mobility equipment needs (wheelchair, etc.) at time of booking</li>
            <li>Treat drivers with respect — abusive behavior may result in refusal of service</li>
            <li>Comply with all vehicle safety requirements including seatbelt use</li>
          </ul>

          <h2 className="text-lg font-bold text-primary mt-8 mb-3">4. SMS Notifications</h2>
          <p className="text-foreground leading-relaxed mb-4">
            By providing your phone number to Assisting Transport LLC, you consent to receive SMS text messages related to your transportation services including ride confirmations, driver notifications, and service updates.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            Message frequency varies. Message and data rates may apply. Reply <strong>STOP</strong> to opt out at any time. Reply <strong>HELP</strong> for assistance.
          </p>

          <h2 className="text-lg font-bold text-primary mt-8 mb-3">5. Billing &amp; Payment</h2>
          <ul className="list-disc pl-6 mb-4 space-y-1 text-foreground">
            <li>We accept Medicaid, Medicare, private insurance, and private pay.</li>
            <li>Patients are responsible for any amounts not covered by their insurance or Medicaid.</li>
            <li>Invoices are due upon receipt unless otherwise agreed in writing.</li>
          </ul>

          <h2 className="text-lg font-bold text-primary mt-8 mb-3">6. Limitation of Liability</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Assisting Transport LLC shall not be liable for delays caused by traffic, weather, mechanical issues, or other circumstances beyond our reasonable control. Our liability for any claim arising from our services shall not exceed the cost of the transportation service provided.
          </p>

          <h2 className="text-lg font-bold text-primary mt-8 mb-3">7. Safety</h2>
          <p className="text-foreground leading-relaxed mb-4">
            The safety of our passengers is our top priority. We reserve the right to refuse service to any individual who poses a safety risk to our drivers or other passengers. All vehicles are regularly inspected and maintained.
          </p>

          <h2 className="text-lg font-bold text-primary mt-8 mb-3">8. Changes to Terms</h2>
          <p className="text-foreground leading-relaxed mb-4">
            We reserve the right to update these Terms and Conditions at any time. Changes will be posted on this page with an updated date.
          </p>

          <h2 className="text-lg font-bold text-primary mt-8 mb-3">9. Contact Us</h2>
          <p className="text-foreground leading-relaxed mb-2">For questions about these Terms and Conditions, please contact us:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1 text-foreground">
            <li><strong>Assisting Transport LLC</strong></li>
            <li>480 N Indiana Ave, Sellersburg, IN 47172</li>
            <li>Phone: (812) 748-9123</li>
            <li>Email: assistingtransportllc@gmail.com</li>
          </ul>
        </div>
      </div>

      <footer className="bg-primary text-primary-foreground/60 py-8 px-[5%] text-center text-sm">
        <p>&copy; 2026 Assisting Transport LLC &nbsp;|&nbsp; <Link href="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link> &nbsp;|&nbsp; <Link href="/terms" className="hover:text-primary-foreground transition-colors">Terms &amp; Conditions</Link></p>
      </footer>
    </>
  );
}
