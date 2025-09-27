"use client";
import React from "react";
import { Check, Clock, Cpu, Brain } from "lucide-react";

interface Event {
  year: string;
  title: string;
  status: "completed" | "in-progress" | "upcoming";
  description: string;
  track?: "core" | "AI" | "both";
}

const RoadMap = () => {
  const olympiadEvents: Event[] = [
    {
      year: "Nov 2025",
      title: "School Selection Test",
      status: "upcoming",
      description: "Students take a school-supervised selection test via Rwanda Computing Olympiad.",
      track: "both",
    },
    {
      year: "Dec 2025",
      title: "Online Camps & Workshops",
      status: "upcoming",
      description: "Intro workshops covering algorithms, data structures, and AI foundations.",
      track: "both",
    },
    {
      year: "Feb 2026",
      title: "National Selection Test",
      status: "upcoming",
      description: "Test to decide candidates for algorithmic & AI deep training.",
      track: "both",
    },
    {
      year: "Apr 2026",
      title: "In-Person Training Camp",
      status: "upcoming",
      description: "Intensive bootcamp with algorithmic, data structures, and ML modules.",
      track: "both",
    },
    {
      year: "June 2026",
      title: "AI Project / Research Track Begins",
      status: "upcoming",
      description: "Students embark on AI projects (model building, ML pipelines) for IOAI prep.",
      track: "AI",
    },
    {
      year: "June 2026",
      title: "Final Test for National Teams",
      status: "upcoming",
      description: "Combined algorithm + AI test to select Rwanda’s IOI & IOAI teams.",
      track: "both",
    },
    {
      year: "Aug 2-8, 2026",
      title: "IOAI – International AI Olympiad",
      status: "upcoming",
      description: "Rwanda’s AI team competes in Abu Dhabi, UAE.",
      track: "AI",
    },
    {
      year: "Aug 9-16, 2026",
      title: "IOI – International Informatics Olympiad",
      status: "upcoming",
      description: "Rwanda’s programming team competes in Tashkent, Uzbekistan.",
      track: "core",
    },
  ];

  const getStatusClasses = (status: string) => {
    switch (status) {
      case "completed":
        return {
          bg: "bg-green-500",
          textColor: "text-green-700",
          lightBg: "bg-green-50",
          border: "border-green-200",
          icon: <Check className="h-5 w-5 text-white" />,
        };
      case "in-progress":
        return {
          bg: "bg-blue-500",
          textColor: "text-blue-700",
          lightBg: "bg-blue-50",
          border: "border-blue-200",
          icon: <Clock className="h-5 w-5 text-white animate-pulse" />,
        };
      default: // upcoming
        return {
          bg: "bg-amber-400",
          textColor: "text-amber-700",
          lightBg: "bg-amber-50",
          border: "border-amber-200",
          icon: <Clock className="h-5 w-5 text-white" />,
        };
    }
  };

  const trackIcon = (track: string | undefined) => {
    if (track === "AI") return <Brain className="h-4 w-4 text-gray-600" />;
    if (track === "core") return <Cpu className="h-4 w-4 text-gray-600" />;
    return null;
  };

  return (
    <div className="relative py-16" id="timeline">
      <div className="text-center mb-8 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-olympiad-navy mb-4">
          Path to IOAI & IOI 2026
        </h2>
        <div className="h-1 w-24 bg-olympiad-blue mx-auto mb-4"></div>
        <p className="text-olympiad-gray max-w-lg mx-auto text-lg">
          Our path combining algorithmic & AI tracks to prepare for both 2026 Olympiads.
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="relative">
          {/* central vertical blue line */}
          <div className="absolute left-1/2 top-0 h-full border-l-2 border-olympiad-blue -ml-1"></div>
          <div className="space-y-16">
            {olympiadEvents.map((event, idx) => {
              const statusClasses = getStatusClasses(event.status);
              const isLeft = idx % 2 === 0;

              return (
                <div key={idx} className="relative flex w-full">
                  {/* content on left or right */}
                  <div
                    className={`w-1/2 ${
                      isLeft ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    {isLeft && (
                      <div className="flex items-center justify-end mb-2">
                        <div className="text-xs font-medium text-gray-500 mr-2">
                          {event.year}
                        </div>
                        <div
                          className={`rounded-full ${statusClasses.bg} w-8 h-8 flex items-center justify-center shadow`}
                        >
                          {statusClasses.icon}
                        </div>
                      </div>
                    )}

                    <div
                      className={`${statusClasses.lightBg} ${statusClasses.border} rounded-lg shadow-sm px-6 py-4`}
                    >
                      <div className="flex items-center mb-2 space-x-2 justify-start">
                        {trackIcon(event.track)}
                        <div
                          className={`inline-block px-2 py-1 rounded-full text-[11px] font-semibold ${statusClasses.bg} text-white`}
                        >
                          {event.status === "completed"
                            ? "Completed"
                            : event.status === "in-progress"
                            ? "In Progress"
                            : "Upcoming"}
                        </div>
                      </div>
                      <h3
                        className={`font-semibold text-[16px] ${statusClasses.textColor}`}
                      >
                        {event.title}
                      </h3>
                      <p className="text-olympiad-gray py-1">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* icon on central line for right side entries */}
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2">
                    {!isLeft && (
                      <div
                        className={`rounded-full ${statusClasses.bg} w-8 h-8 flex items-center justify-center shadow`}
                      >
                        {statusClasses.icon}
                      </div>
                    )}
                  </div>

                  {/* placeholder half for right side */}
                  <div className="w-1/2">{/* blank or you could mirror on right side */}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
