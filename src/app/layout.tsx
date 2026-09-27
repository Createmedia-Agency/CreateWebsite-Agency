import type { Metadata } from "next";
import { Manrope, Oswald } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import CustomCursor from "@/components/CustomCursor";

const sans = Manrope({ subsets: ["latin"], variable: "--font-sans", weight: "variable" });
const display = Oswald({ 
  subsets: ["latin"], 
  variable: "--font-display", 
  weight: "variable"
});

export const metadata: Metadata = {
  title: "CREATE | Creative Marketing Agency",
  description: "We create brands people remember.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="bg-brand-bg text-brand-ink min-h-screen flex flex-col relative antialiased selection:bg-brand-orange selection:text-black">
        <CustomCursor />
        <Navigation />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
