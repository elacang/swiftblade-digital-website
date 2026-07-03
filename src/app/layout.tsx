import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Swiftblade Digital — Software, sharpened.",
  description:
    "Swiftblade Digital ships precision software and consulting. We forge developer tools and engineer systems that cut through complexity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="grain min-h-full flex flex-col bg-background text-mist">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}[data-hero-line]{clip-path:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
