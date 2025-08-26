import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
});

export const metadata: Metadata = {
  title: "Jon Sandmann",
  description: "Data analyst, designer, and builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${publicSans.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
