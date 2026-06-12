// app/layout.tsx
import type { Metadata } from "next";
// 1. Import your additional fonts from the Google module
import { Plus_Jakarta_Sans, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

// 2. Initialize the main font
const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans", 
  weight: ["400", "500", "600", "700", "800"], 
});

// 2b. Initialize a Serif font for titles/headings
const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "600", "700"],
});

// 2c. Initialize a Monospace font for code snippets (Variable font, no weights needed!)
const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Lokesh R | Portfolio",
  description: "MERN Stack & Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 3. Chain all your font variables together in the <html> class template string
    <html 
      lang="en" 
      className={`${sansFont.variable} ${serifFont.variable} ${monoFont.variable}`} 
      suppressHydrationWarning
    >
      <body className="bg-slate-50 text-slate-900 dark:bg-zinc-950 dark:text-zinc-50 font-sans antialiased transition-colors duration-300">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}