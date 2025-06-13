"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
