import React from "react";
import Logo from "../ui/Logo.jsx";
import { navLinksData } from "../../data/navigationData.js";

const Header = ({ activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#hero">
          <Logo />
        </a>
        <div className="hidden md:flex space-x-8">
          {navLinksData.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link text-gray-600 hover:text-[#0a9396] transition-colors ${
                activeSection === link.href.substring(1)
                  ? "active text-[#ee9b00] font-bold"
                  : ""
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`nav-link text-gray-600 hover:text-[#0a9396] transition-colors ${
              activeSection === "contact"
                ? "active text-[#ee9b00] font-bold"
                : ""
            }`}
          >
            Contact
          </a>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16m-7 6h7"
              }
            ></path>
          </svg>
        </button>
      </nav>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          {[...navLinksData, { href: "#contact", label: "Contact" }].map(
            (link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 px-6 text-sm hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
