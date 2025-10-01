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
      description: "Combined algorithm + AI test to select Rwanda's IOI & IOAI teams.",
      track: "both",
    },
    {
      year: "Aug 2-8, 2026",
      title: "IOAI – International AI Olympiad",
      status: "upcoming",
      description: "Rwanda's AI team competes in Abu Dhabi, UAE.",
      track: "AI",
    },
    {
      year: "Aug 9-16, 2026",
      title: "IOI – International Informatics Olympiad",
      status: "upcoming",
      description: "Rwanda's programming team competes in Tashkent, Uzbekistan.",
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
    <div className="relative py-12" id="timeline">
      <div className="text-center mb-8 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Path to IOAI & IOI 2026
        </h2>
        <div className="h-1 w-20 bg-blue-600 mx-auto mb-3"></div>
        <p className="text-gray-600 max-w-md mx-auto text-base">
          Our path combining algorithmic & AI tracks to prepare for both 2026 Olympiads.
        </p>
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="relative">
          {/* Central vertical blue line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-blue-600 transform -translate-x-1/2"></div>
          
          <div className="space-y-8">
            {olympiadEvents.map((event, idx) => {
              const statusClasses = getStatusClasses(event.status);
              const isLeft = idx % 2 === 0;

              return (
                <div key={idx} className="relative">
                  {/* Central timeline dot */}
                  <div className="absolute left-1/2 top-4 transform -translate-x-1/2 z-10">
                    <div className={`rounded-full ${statusClasses.bg} w-6 h-6 flex items-center justify-center shadow-md`}>
                      <div className="scale-75">{statusClasses.icon}</div>
                    </div>
                  </div>

                  <div className="flex">
                    {/* Left side content */}
                    {isLeft ? (
                      <>
                        <div className="w-1/2 pr-4">
                          <div className="text-right">
                            <div className="text-xs font-medium text-gray-500 mb-1">
                              {event.year}
                            </div>
                            <div className={`${statusClasses.lightBg} ${statusClasses.border} rounded-lg shadow-sm p-4 border`}>
                              <div className="flex items-center justify-end mb-2 space-x-2">
                                <div className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${statusClasses.bg} text-white`}>
                                  {event.status === "completed" ? "Done" : event.status === "in-progress" ? "Active" : "Soon"}
                                </div>
                                {trackIcon(event.track)}
                              </div>
                              <h3 className={`font-semibold text-base mb-1 ${statusClasses.textColor}`}>
                                {event.title}
                              </h3>
                              <p className="text-gray-600 text-xs leading-relaxed">
                                {event.description}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="w-1/2"></div>
                      </>
                    ) : (
                      <>
                        <div className="w-1/2"></div>
                        <div className="w-1/2 pl-4">
                          <div className="text-left">
                            <div className="text-xs font-medium text-gray-500 mb-1">
                              {event.year}
                            </div>
                            <div className={`${statusClasses.lightBg} ${statusClasses.border} rounded-lg shadow-sm p-4 border`}>
                              <div className="flex items-center justify-start mb-2 space-x-2">
                                {trackIcon(event.track)}
                                <div className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${statusClasses.bg} text-white`}>
                                  {event.status === "completed" ? "Done" : event.status === "in-progress" ? "Active" : "Soon"}
                                </div>
                              </div>
                              <h3 className={`font-semibold text-base mb-1 ${statusClasses.textColor}`}>
                                {event.title}
                              </h3>
                              <p className="text-gray-600 text-xs leading-relaxed">
                                {event.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
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