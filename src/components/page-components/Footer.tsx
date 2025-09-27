"use client";

import React from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, 
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-olympiad-navy pt-16 pb-8 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="rounded-full overflow-clip">
                <Image
                  src={"/assets/images/rio.webp"}
                  width={36}
                  height={36}
                  alt="logo"
                  className=""
                />
              </div>
              <span className="text-xl font-semibold">RwCO</span>
            </div>
            <p className="text-gray-300 mb-6">
              Promoting excellence in Algorithmic and AI competitions
              within Rwanda.{" "}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/rwanda_informartics_olympiad/"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Instagram"
                target="_blank"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://rw.linkedin.com/company/rwanda-informatics-olympiad?trk=public_post_feed-actor-name "
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="LinkedIn"
                target="_blank"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/rwanda-informatics-olympiad"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="GitHub"
                target="_blank"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("mission")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("timeline")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Timeline
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("team")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Team
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Other Resources</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("sponsors")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Sponsors
                </button>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/rwanda-computing-olympiad/posts/?feedView=all" target="_blank">
                  <button
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    News
                  </button>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-olympiad-blue mr-3" />
                <a
                  href="mailto:rwandainformaticsolympiad@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Drop Us an Email
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-olympiad-blue mr-3" />
                <a
                  href="tel:+250780395904"
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Leave Us a Call
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Rwanda Computing Olympiad. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
