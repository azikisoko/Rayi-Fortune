// src/app/layout.tsx
import "./globals.css";
import CursorEffects from "../components/UI/CursorEffects";
import ScrollProgressBar from "../components/UI/ScrollProgressBar";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import EmailBubble from "../components/UI/EmailBubble";
import { ThemeProvider } from "../components/Theme/ThemeProvider";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
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