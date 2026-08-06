// src/components/layout/Footer.tsx
"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Icon from "../../components/UI/Icons";
import LinkedInLink from "../../components/UI/LinkedInLink";
import { CONTACT } from "../../lib/constants";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/About" },
  { label: "Projects", href: "/Projects" },
  { label: "Contact", href: "/Contact" },
];

/*const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/your-username", icon: FaGithub },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-username", icon: FaLinkedin },
  { label: "WhatsApp", href: "https://wa.me/yourNumberWithCountryCode", icon: FaWhatsapp },
  { label: "Email", href: "mailto:youremail@example.com", icon: Mail },
]; */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="site-footer" className="relative z-10 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-3">Rayi Fortune</h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Full-Stack Developer & ML Engineer building intelligent, scalable software.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
            Navigate
          </h4>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

       <div>
          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
            Connect
          </h4>
          <div className="flex items-center gap-3">
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
            >
              <Icon icon={FaGithub} className="w-4 h-4 text-muted-foreground" />
            </a>

            <LinkedInLink className="p-2 rounded-full border border-border hover:bg-muted transition-colors">
              <FaLinkedin className="w-4 h-4 text-muted-foreground" />
            </LinkedInLink>

            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
            >
              <Icon icon={FaWhatsapp} className="w-4 h-4 text-muted-foreground" />
            </a>

            <a
              href={`mailto:${CONTACT.email}`}
              aria-label="Email"
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
            >
              <Mail className="w-4 h-4 text-muted-foreground" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="text-center text-muted-foreground text-xs py-6">
          © {currentYear} Rayi Fortune. All rights reserved.
        </p>
      </div>
    </footer>
  );
}