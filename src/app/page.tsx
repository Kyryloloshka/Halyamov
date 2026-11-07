import "./page.scss";
import HomeSection from "@/components/Sections/HomeSection";
import AboutSection from "@/components/Sections/AboutSection";
import PortfolioSection from "@/components/Sections/PortfolioSection";
import ContactSection from "@/components/Sections/ContactSection";
import RevealObserver from "@/components/RevealObserver";
import { projects, skills, experiences } from "@/constants";

// Server component: all content is in the initial HTML. Only the navbar,
// contact form and the tiny reveal observer hydrate on the client.
export default function Home() {
  return (
    <div className="home-page__container">
      <HomeSection />
      <AboutSection skills={skills} experiences={experiences} />
      <PortfolioSection projects={projects} />
      <ContactSection />
      <RevealObserver />
    </div>
  );
}
