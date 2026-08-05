// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/Theme/ThemeProvider";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import ScrollProgressBar from "../components/UI/ScrollProgressBar";
import EmailBubble from "../components/UI/EmailBubble";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Rayi Fortune | Full-Stack Developer & ML Engineer",
  description:
    "Portfolio of Rayi Fortune — Full-Stack Developer and Machine Learning Engineer building fast, scalable web apps and intelligent AI solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ScrollProgressBar />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <EmailBubble />
        </ThemeProvider>
      </body>
    </html>
  );
}