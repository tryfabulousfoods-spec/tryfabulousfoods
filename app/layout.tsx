import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

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
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
