import Link from "next/link";

export const metadata = {
  title: "Payment Cancelled | Assisting Transport LLC",
};

export default function PaymentCancelled() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h1 className="text-3xl font-extrabold text-primary mb-3">Payment Cancelled</h1>
        <p className="text-muted-foreground text-lg mb-8">
          Your payment was not completed. If you need assistance, please give us a call.
        </p>
        <p className="text-muted-foreground mb-6">
          Call us at{" "}
          <a href="tel:8127489123" className="text-accent font-semibold hover:underline">
            (812) 748-9123
          </a>
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
