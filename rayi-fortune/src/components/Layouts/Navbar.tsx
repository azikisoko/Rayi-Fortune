"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import ThemeToggle from "../../components/Theme/ThemeToggle";
import Icon from "../../components/UI/Icons";
import { CONTACT } from "../../lib/constants";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/About" },
  { label: "Projects", href: "/Projects" },
  { label: "Contact", href: "/Contact" },
];

const RESUME_URL = "/resume.pdf";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Rayi<span className="text-primary">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={RESUME_URL}
            download
            aria-label="Download resume"
            className="p-2 rounded-full hover:bg-muted transition-colors"
          >
            <Download className="w-4 h-4" />
          </a>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-full hover:bg-muted transition-colors"
          >
            <Icon icon={FaGithub} className="w-4 h-4" />
          </a>
          <a
            href={`https://wa.me/${CONTACT.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="p-2 rounded-full hover:bg-muted transition-colors"
          >
            <Icon icon={FaWhatsapp} className="w-4 h-4" />
          </a>
          <ThemeToggle />
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-border px-6 py-4 flex flex-col gap-4 bg-background">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <a href={RESUME_URL} download aria-label="Download resume">
              <Download className="w-4 h-4" />
            </a>
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Icon icon={FaGithub} className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <Icon icon={FaWhatsapp} className="w-4 h-4" />
            </a>
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}