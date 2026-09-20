import type { Metadata } from "next";
import { Berkshire_Swash, Raleway } from "next/font/google";
import "./globals.css";

const displayFont = Berkshire_Swash({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const bodyFont = Raleway({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Maison.",
    template: "%s | Maison.",
  },
  description: "Italian Specialities — Good Food | Good Wine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
