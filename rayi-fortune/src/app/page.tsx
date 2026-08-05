// src/app/page.tsx
import Hero from "../components/Home/Hero";
import FeaturedProjects from "../components/Home/FeaturedProjects";
import TechStack from "../components/Home/TechStack";
import CTA from "../components/Home/CTA";
import EngagementPopup from "../components/UI/EngagementPopup";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <TechStack />
      <CTA />
      <EngagementPopup />
    </>
  );
}