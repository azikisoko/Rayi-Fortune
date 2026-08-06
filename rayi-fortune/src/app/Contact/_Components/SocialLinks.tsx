// src/app/contact/_components/SocialLinks.tsx
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Icon from "../../../components/UI/Icons";
import LinkedInLink from "../../../components/UI/LinkedInLink";
import { CONTACT } from "../../../lib/constants";

export default function SocialLinks() {
  return (
    <div className="space-y-3">
      <a
        href={`mailto:${CONTACT.email}`}
        className="flex items-center gap-4 rounded-xl border border-border p-4 hover:border-primary/40 hover:bg-muted/30 transition-colors group"
      >
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-muted text-muted-foreground group-hover:text-primary transition-colors shrink-0">
          <Mail className="w-4 h-4" />
        </span>
        <div>
          <p className="text-sm font-medium text-foreground">Email</p>
          <p className="text-xs text-muted-foreground">{CONTACT.email}</p>
        </div>
      </a>

      <a
        href={`https://wa.me/${CONTACT.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 rounded-xl border border-border p-4 hover:border-primary/40 hover:bg-muted/30 transition-colors group"
      >
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-muted text-muted-foreground group-hover:text-primary transition-colors shrink-0">
          <Icon icon={FaWhatsapp} className="w-4 h-4" />
        </span>
        <div>
          <p className="text-sm font-medium text-foreground">WhatsApp</p>
          <p className="text-xs text-muted-foreground">{CONTACT.whatsappDisplay}</p>
        </div>
      </a>

      <a
        href={CONTACT.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 rounded-xl border border-border p-4 hover:border-primary/40 hover:bg-muted/30 transition-colors group"
      >
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-muted text-muted-foreground group-hover:text-primary transition-colors shrink-0">
          <Icon icon={FaGithub} className="w-4 h-4" />
        </span>
        <div>
          <p className="text-sm font-medium text-foreground">GitHub</p>
          <p className="text-xs text-muted-foreground">@{CONTACT.githubUsername}</p>
        </div>
      </a>

      {/* <LinkedInLink className="w-full flex items-center gap-4 rounded-xl border border-border p-4 hover:border-primary/40 hover:bg-muted/30 transition-colors group text-left">
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-muted text-muted-foreground group-hover:text-primary transition-colors shrink-0">
          <FaLinkedin className="w-4 h-4" />
        </span>
        <div>
          <p className="text-sm font-medium text-foreground">LinkedIn</p>
          <p className="text-xs text-muted-foreground">Temporarily unavailable</p>
        </div>
      </LinkedInLink> */}
    </div>
  );
}