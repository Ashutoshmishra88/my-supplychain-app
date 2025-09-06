import React from "react";

// Layout Components
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";

// Section Components
import Hero from "./components/sections/Hero.jsx";
import Intro from "./components/sections/Intro.jsx";
import Services from "./components/sections/Services.jsx";
import Network from "./components/sections/Network.jsx";
import GlobalLogistics from "./components/sections/GlobalLogistics.jsx";
import Security from "./components/sections/Security.jsx";
import Testimonials from "./components/sections/Testimonials.jsx";
import Pricing from "./components/sections/Pricing.jsx";

// Modal Components
import ContactModal from "./components/modals/ContactModal.jsx";

export default function App() {
  const [activeSection, setActiveSection] = React.useState("hero");
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);
  const [preSelectedEnquiry, setPreSelectedEnquiry] = React.useState("");

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "hero";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 70) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactClick = (enquiryType = "") => {
    setPreSelectedEnquiry(enquiryType);
    setIsContactModalOpen(true);
  };

  const handleContactModalClose = () => {
    setIsContactModalOpen(false);
    setPreSelectedEnquiry("");
  };

  return (
    <div
      className="bg-gray-50 text-gray-700"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Network />
        <GlobalLogistics onContactClick={handleContactClick} />
        <Security />
        <Testimonials />
        <Pricing />
      </main>
      <Footer onContactClick={() => handleContactClick()} />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={handleContactModalClose}
        preSelectedEnquiry={preSelectedEnquiry}
      />
    </div>
  );
}
