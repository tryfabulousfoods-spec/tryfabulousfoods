import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Try Fabulous Foods | Brick Oven Pizza & Seafood Food Truck | Virginia",
  description: "Virginia's premier high-volume brick oven pizza and fresh seafood food truck. Available for festivals, corporate events, and private bookings statewide.",
  keywords: "brick oven pizza, food truck, seafood, Virginia, festivals, events, catering",
  openGraph: {
    title: "Try Fabulous Foods | Brick Oven Pizza & Seafood",
    description: "Virginia's first gourmet brick oven pizza & seafood truck. Built for large festivals & events.",
    url: "https://www.tryfabulousfoods.com",
    siteName: "Try Fabulous Foods",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
