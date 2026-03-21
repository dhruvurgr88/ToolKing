import { Analytics } from "@vercel/analytics/react"; // 1. Import the component
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

export const metadata: Metadata = {
  title: {
    default: "ToolKing | Premium PDF & Online Utility Tools",
    template: "%s | ToolKing",
  },
  description:
    "Free, high-quality online tools for PDF conversion, word counting, and image processing. Fast, private, and secure browser-based tools.",
  keywords: [
    "PDF converter",
    "word counter",
    "image to pdf",
    "free online tools",
    "ToolKing",
  ],
  authors: [{ name: "ToolKing Team" }],
  creator: "ToolKing",
  metadataBase: new URL("https://vidyaos.online"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vidyaos.online",
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
    description: "Convert, edit, and analyze files instantly.",
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
      {/* IMPORTANT: We removed the 'bg-white dark:bg-[#020617]' classes here 
          because they are now handled automatically by the CSS variables 
          in your globals.css. This prevents "specificity wars".
      */}
      <body className="min-h-full flex flex-col transition-colors duration-300">
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
            {/* Dynamic background glow - opacity changes via CSS variables */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[400px] bg-indigo-500/10 dark:bg-indigo-600/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

            {children}
          </main>

          <footer className="border-t border-slate-200 dark:border-slate-900 py-8 text-center text-slate-500 text-sm transition-colors">
            <p>
              © {new Date().getFullYear()} ToolKing. Built for privacy and
              speed.
            </p>
          </footer>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
