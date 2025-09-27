"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState, useEffect, useMemo } from "react"; // make sure useMemo is imported

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = useMemo(
    () => [
      { name: "Home", id: "hero" },
      { name: "About", id: "mission" },
      { name: "Eligibility", id: "eligibility" },
      { name: "Roadmap", id: "timeline" },
      { name: "Team", id: "team" },
      { name: "Resources", id: "resources" },
      { name: "Sponsors", id: "sponsors" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sectionIds = navItems.map((item) => item.id);
      let currentSection = sectionIds[0];

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = id;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      setActiveSection(id);
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-white/80 backdrop-blur shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center space-x-2 font-semibold text-xl"
          >
            <div className="rounded-full overflow-clip">
              <Image
                src={"/assets/images/rio.webp"}
                width={50}
                height={50}
                alt="logo"
              />
            </div>
            <span className="hidden sm:inline text-olympiad-navy">RwIO</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={cn("relative transition-colors cursor-pointer",
                  activeSection === item.id
                    ? "text-olympiad-blue"
                    : "text-olympiad-gray"
            )}
              >
                {item.name}
                {activeSection === item.id && (
                  <div className="absolute bottom-[-8px] left-0 right-0 h-[3px] bg-olympiad-blue rounded-full"></div>
                )}
              </button>
            ))}

            <Link
              href="mailto:info@informatics-olympiad.org"
              className="ml-2 px-4 py-2 bg-olympiad-blue text-white rounded-full shadow-sm hover:bg-olympiad-blue/90 transition-all"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden absolute left-0 right-0 px-6 py-4 bg-white/95 backdrop-blur shadow-lg transition-all duration-300 ease-in-out overflow-hidden",
            isOpen
              ? "max-h-screen opacity-100 top-full"
              : "max-h-0 opacity-0 top-[110%]"
          )}
        >
          <div className="flex flex-col space-y-3 pt-2 pb-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "px-2 py-2 transition-colors text-left rounded-md",
                  activeSection === item.id
                    ? "text-olympiad-blue"
                    : "text-olympiad-gray"
                )}
              >
                {item.name}
              </button>
            ))}

            <Link
              href="mailto:rwandainformaticsolympiad@gmail.com"
              className="mt-4 px-6
               py-3 bg-olympiad-blue text-white rounded-full text-center "
              onClick={() => setIsOpen(false)}
            >
              Donate
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;