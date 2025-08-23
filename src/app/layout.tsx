import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: "Hashboxed.com :: UI/UX Design - Frontend Development",
  description: "Hashboxed is a small UI/UX shop founded in 2008. At Hashboxed we love to build all sorts of things: websites, web apps, mobile apps—you name it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-copy`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
