import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Love Journey | Every moment of us, in one beautiful journey.",
  description: "Love Journey is an all-in-one premium relationship app for couples with live counter, memory vault, timeline, games, and secure cloud backup.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased selection:bg-rose-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
