import type { Metadata } from "next";
import "lenis/dist/lenis.css";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  applicationName: "Tatweer Limited",
  title: "Tatweer Limited — Real-Estate Development, Investment & PMO",
  description:
    "Tatweer Limited delivers integrated real-estate development, investment, engineering, and project management solutions across Oman and the GCC.",
  keywords: [
    "Tatweer Limited",
    "real-estate development",
    "property investment",
    "project management",
    "engineering",
    "Oman",
    "GCC",
  ],
  authors: [{ name: "Tatweer Limited" }],
  creator: "Tatweer Limited",
  publisher: "Tatweer Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_OM",
    siteName: "Tatweer Limited",
    title: "Tatweer Limited — Real-Estate Development, Investment & PMO",
    description:
      "Integrated real-estate development, investment, engineering, and project management solutions across Oman and the GCC.",
  },
  twitter: {
    card: "summary",
    title: "Tatweer Limited — Real-Estate Development, Investment & PMO",
    description:
      "Integrated real-estate development, investment, engineering, and project management solutions across Oman and the GCC.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
