"use client";

import { useState } from "react";
import { CONTACT } from "../../lib/constants";
import LinkedInUnavailableModal from "./LinkedInUnavailableModal";

interface LinkedInLinkProps {
  children: React.ReactNode;
  className?: string;
}

export default function LinkedInLink({ children, className }: LinkedInLinkProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (CONTACT.linkedinAvailable) {
    return (
      <a
        href={CONTACT.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        aria-label="LinkedIn (temporarily unavailable)"
        className={className}
      >
        {children}
      </button>
      <LinkedInUnavailableModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}