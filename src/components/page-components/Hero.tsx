"use client";

import React, { useEffect } from "react";
import { Brain, Trophy, Code } from "lucide-react";
import Link from "next/link";
import Prism from "prismjs";

const Hero = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[url('/assets/images/coaches.webp')] bg-cover bg-center" id="hero">
      <div className="absolute inset-0 bg-gradient-to-r from-white to-blue-50/80"></div>
      <div className="container mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <div className="max-w-xl">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-olympiad-navy lg:leading-tight">
                Rwanda
                <span className="text-olympiad-blue bg-gradient-to-r from-olympiad-blue to-olympiad-blue/60 bg-clip-text text-transparent block">
                  {" "}
                  Computing
                </span>
                Olympiad
              </h1>

              <p className="mt-8 text-lg text-olympiad-gray">
                Join Rwanda Computing Olympiad, a national Informatics and AI competition for high
                schoolers, encouraging problem-solving skills and innovation in Artificial intelligence, 
                programming, designed for young enthusiasts aged 20 and below.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="https://forms.gle/9r9tNce7VKcdtPxJ7" 
                  target="_blank" className="btn-primary rounded-full">
                  Register Your School
                </Link>
                {/* <Link href="mailto:rwandainformaticsolympiad@gmail.com" className="btn-outline rounded-full" target="_blank">
                  Support by Donating
                </Link> */}
              </div>

              <div className="mt-10 md:grid grid-cols-3 gap-4 hidden">
                <div className="flex items-center space-x-2 text-olympiad-gray">
                <div className="rounded-full p-3 bg-olympiad-blue/40">
                    <Brain className="h-6 w-6 text-olympiad-blue" />
                  </div>
                  <span>Strategic Thinking</span>
                </div>
                <div className="flex items-center space-x-2 text-olympiad-gray">
                  <div className="rounded-full p-3 bg-olympiad-blue/40">
                    <Code className="h-6 w-6 text-olympiad-blue" />
                  </div>
                  <span>Coding Excellence</span>
                </div>
                <div className="flex items-center space-x-2 text-olympiad-gray">
                <div className="rounded-full p-3 bg-olympiad-blue/40">
                    <Trophy className="h-6 w-6 text-olympiad-blue" />
                  </div>
                  <span>Global Recognition</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="separator absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
