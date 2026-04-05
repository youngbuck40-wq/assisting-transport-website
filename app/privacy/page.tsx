import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Assisting Transport LLC",
  description: "Privacy Policy for Assisting Transport LLC non-emergency medical transportation services.",
};

export default function PrivacyPage() {
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
          <h1 className="text-3xl font-extrabold text-primary mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm mb-10">Last updated: April 4, 2026</p>

          <p className="text-foreground leading-relaxed mb-4">
            Assisting Transport LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting the privacy of our patients, drivers, and business contacts. This Privacy Policy explains how we collect, use, and protect information.
          </p>

          <h2 className="text-lg font-bold text-primary mt-8 mb-3">1. Information We Collect</h2>
          <p className="text-foreground leading-relaxed mb-2">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1 text-foreground">
            <li>Name, phone number, and email address</li>
            <li>Pickup and drop-off addresses for transportation services</li>
            <li>Medical transportation needs (mobility type, equipment needs)</li>
            <li>Insurance or Medicaid information for billing purposes</li>
            <li>Driver employment information including mobile phone numbers</li>
          </ul>

          <h2 className="text-lg font-bold text-primary mt-8 mb-3">2. How We Use Your Information</h2>
          <p className="text-foreground leading-relaxed mb-2">We use collected information to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1 text-foreground">
            <li>Schedule and coordinate non-emergency medical transportation</li>
            <li>Send SMS notifications to drivers regarding trip assignments and updates</li>
            <li>Communicate with patients regarding scheduled rides</li>
            <li>Process billing and insurance claims</li>
            <li>Comply with regulatory and legal requirements</li>
          </ul>

          <h2 className="text-lg font-bold text-primary mt-8 mb-3">3. SMS Communications &amp; Consent</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Assisting Transport LLC sends SMS text messages to drivers and patients for operational purposes including trip assignments, pickup reminders, and service updates.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            <strong>Driver Consent:</strong> Drivers employed by Assisting Transport LLC provide consent to receive SMS notifications during the employee onboarding process. Each driver provides their mobile phone number and agrees to receive work-related text notifications as a condition of employment. Consent is documented internally.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            <strong>Patient Consent:</strong> Patients provide their phone number when scheduling transportation and consent to receive SMS notifications related to their rides including confirmations, reminders, and follow-up messages.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            <strong>Opt-Out:</strong> You may opt out of SMS communications at any time by replying <strong>STOP</strong> to any message. After opting out, you will receive one final confirmation message and no further messages will be sent. To opt back in, reply <strong>START</strong>.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            <strong>Help:</strong> Reply <strong>HELP</strong> for assistance. Message and data rates may apply.
          </p>

          <h2 className="text-lg font-bold text-primary mt-8 mb-3">4. Information Sharing</h2>
          <p className="text-foreground leading-relaxed mb-2">We do not sell, trade, or rent your personal information to third parties. We may share information with:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1 text-foreground">
            <li>Healthcare facilities and providers as needed to coordinate transportation</li>
            <li>Insurance companies and Medicaid for billing and reimbursement</li>
            <li>Service providers who assist in our operations (under confidentiality agreements)</li>
            <li>Law enforcement or regulatory agencies when required by law</li>
          </ul>

          <h2 className="text-lg font-bold text-primary mt-8 mb-3">5. Data Security</h2>
          <p className="text-foreground leading-relaxed mb-4">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-lg font-bold text-primary mt-8 mb-3">6. Your Rights</h2>
          <p className="text-foreground leading-relaxed mb-4">
            You have the right to request access to, correction of, or deletion of your personal information. To make a request, contact us at the information below.
          </p>

          <h2 className="text-lg font-bold text-primary mt-8 mb-3">7. Contact Us</h2>
          <p className="text-foreground leading-relaxed mb-2">If you have questions about this Privacy Policy or our data practices, please contact us:</p>
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
