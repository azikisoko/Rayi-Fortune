// src/app/layout.tsx
import "./globals.css";
import CursorEffects from "../components/UI/CursorEffects";
import ScrollProgressBar from "../components/UI/ScrollProgressBar";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import EmailBubble from "../components/UI/EmailBubble";
import { ThemeProvider } from "../components/Theme/ThemeProvider";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "../lib/constants";
import PersonSchema from "../components/seo/PersonSchema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// src/app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Rayi Fortune | Full-Stack Developer & Machine Learning Engineer",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Rayi Fortune is a Full-Stack Developer and Machine Learning Engineer specializing in React, Next.js, Python, and TensorFlow. Explore projects in web development and AI, including a brain tumor classification system built with deep learning.",
  keywords: [
    "Rayi Fortune",
    "Full-Stack Developer",
    "Machine Learning Engineer",
    "AI Engineer",
    "React Developer",
    "Next.js Developer",
    "Python Developer",
    "TensorFlow",
    "Deep Learning Portfolio",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Rayi Fortune | Full-Stack Developer & Machine Learning Engineer",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Rayi Fortune | Full-Stack Developer & Machine Learning Engineer",
    description: SITE_DESCRIPTION,
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <PersonSchema />
          <CursorEffects />
          <ScrollProgressBar />
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
          <EmailBubble />
        </ThemeProvider>
      </body>
    </html>
  );
}