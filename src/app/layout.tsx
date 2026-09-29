import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "SupportOS | AI Customer Support Operating System for E-commerce",
  description: "Resolve customer questions, understand orders, automate support, and hand off complex conversations to humans — built for Shopify & WooCommerce brands.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} dark h-full antialiased`}>
      <body className="min-h-full bg-[#080B14] text-slate-100 flex flex-col font-sans selection:bg-violet-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
