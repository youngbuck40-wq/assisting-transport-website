import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Assisting Transport LLC | Non-Emergency Medical Transportation',
  description: 'Professional transportation serving Clark, Floyd, and surrounding counties in Kentuckiana. Medical appointments, wheelchair transport, airport rides, weddings, and special events. Licensed and insured since 2012.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDrYhrJll1Z3uoGr4MlHYV0vj2uy5iDqC8&libraries=places"
          async
        />
      </head>
      <body className="font-sans antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
        {children}
      </body>
    </html>
  )
}
