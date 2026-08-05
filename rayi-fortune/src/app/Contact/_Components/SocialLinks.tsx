// src/app/contact/_components/SocialLinks.tsx
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Icon from "../../../components/UI/Icons";

const CONTACT_METHODS = [
  {
    label: "Email",
    value: "youremail@example.com",
    href: "mailto:youremail@example.com",
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: "Message me directly",
    href: "https://wa.me/yourNumberWithCountryCode",
    icon: FaWhatsapp,
  },
  {
    label: "GitHub",
    value: "@your-username",
    href: "https://github.com/your-username",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "Rayi Fortune",
    href: "https://linkedin.com/in/your-username",
    icon: FaLinkedin,
  },
];

export default function SocialLinks() {
  return (
    <div className="space-y-3">
      {CONTACT_METHODS.map(({ label, value, href, icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="flex items-center gap-4 rounded-xl border border-border p-4 hover:border-primary/40 hover:bg-muted/30 transition-colors group"
        >
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-muted text-muted-foreground group-hover:text-primary transition-colors shrink-0">
            {label === "Email" ? (
              <Mail className="w-4 h-4" />
            ) : (
              <Icon icon={icon as never} className="w-4 h-4" />
            )}
          </span>
          <div>
            <p className="text-sm font-medium text-foreground">{label}</p>
            <p className="text-xs text-muted-foreground">{value}</p>
          </div>
        </a>
      ))}
    </div>
  );
}