// src/components/layout/NavQuickLinks.tsx
"use client";

import { MessageCircle, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Icon from "../../components/UI/Icons";

const RESUME_URL = "/resume.pdf";
const GITHUB_URL = "https://github.com/Azikisoko";
const WHATSAPP_URL = "https://wa.me/2349139932456";

export default function NavQuickLinks() {
  return (
    <div className="flex items-center gap-3">
      <a
        href={RESUME_URL}
        download
        aria-label="Download resume"
        className="p-2 rounded-full hover:bg-white/10 transition-colors"
      >
        <Download className="w-5 h-5" />
      </a>
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit GitHub profile"
        className="p-2 rounded-full hover:bg-white/10 transition-colors"
      >
        <Icon icon={FaGithub} className="w-4 h-4" />
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message me on WhatsApp"
        className="p-2 rounded-full hover:bg-white/10 transition-colors"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
    </div>
  );
}