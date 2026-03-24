import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Providers } from "./providers";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// 🔥 Centralized Domain for SEO consistency
const SITE_URL = "https://toolking.online";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ToolKing | Free Private Online PDF & Utility Tools",
    template: "%s | ToolKing",
  },
  description:
    "Free, high-quality online tools for PDF conversion, protection, and image processing. Fast, private, and secure browser-based tools with no server uploads.",
  keywords: [
    "PDF converter",
    "word counter",
    "protect pdf online",
    "image to pdf",
    "free online tools",
    "ToolKing",
  ],
  authors: [{ name: "ToolKing Team" }],
  creator: "ToolKing",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "ToolKing",
    title: "ToolKing | Professional Web Utilities",
    description:
      "The ultimate suite of free online tools. No signup, no tracking.",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "ToolKing" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ToolKing | Premium Online Tools",
    description:
      "Convert, edit, and analyze files instantly with zero data retention.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#4f46e5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col transition-colors duration-300">
        {/* Google Tag Manager / Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VJNH65YGLH"
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VJNH65YGLH');
          `}
        </Script>

        <Providers>
          <Navbar />

          <main className="flex-grow pt-20 md:pt-24 relative overflow-x-hidden">
            {/* Background Glow - Maintains your current design */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[400px] bg-indigo-500/10 dark:bg-indigo-600/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

            {children}
          </main>

          <footer className="border-t border-slate-200 dark:border-slate-900 py-12 transition-colors">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4">
              <div className="font-black text-xl tracking-tighter italic uppercase text-slate-900 dark:text-white">
                ToolKing<span className="text-indigo-600">.online</span>
              </div>
              <p className="text-slate-500 text-[10px] uppercase font-black tracking-[0.4em]">
                © {new Date().getFullYear()} Build with Privacy First.
              </p>
            </div>
          </footer>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
