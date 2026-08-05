// src/app/about/page.tsx
import type { Metadata } from "next";
import WhoIAm from "./_components/WhoIAm";
import Philosophy from "./_components/Philosophy";
import MyJourney from "./_components/MyJourney";
import ScrollProgressBar from "../../components/UI/ScrollProgressBar";
import EmailBubble from "../../components/UI/EmailBubble";
import EngagementPopup from "../../components/UI/EngagementPopup";

// src/app/about/page.tsx
export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Rayi Fortune — Full-Stack Developer & ML Engineer.",
};

export default function AboutPage() {
  return (
    <>
      <WhoIAm />
      <Philosophy />
      <MyJourney />
      <ScrollProgressBar />
      <EmailBubble />
      <EngagementPopup />
    </>
  );
}