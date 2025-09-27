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
      year: "Nov 2024",
      title: "School Selection Test",
      status: "completed",
      description: "Students take a school-supervised selection test from their RwIO.",
      track: "core",
    },
    {
      year: "Dec 2024",
      title: "Online Camps & Workshops",
      status: "completed",
      description: "After passing, students attend algorithm & AI intro workshops.",
      track: "both",
    },
    {
      year: "Feb 2025",
      title: "National Selection Test",
      status: "completed",
      description: "Determines who moves forward into advanced algorithm / AI training.",
      track: "both",
    },
    {
      year: "Apr 2025",
      title: "In-Person Camps & Workshops",
      status: "completed",
      description: "Intensive training in algorithms, data structures, plus ML foundations.",
      track: "both",
    },
    {
      year: "May 2025",
      title: "AI Research / Project Track Begins",
      status: "completed",
      description: "Students start AI project work (ML, data, model design) for IOAI prep.",
      track: "AI",
    },
    {
      year: "June 2025",
      title: "Final Test to Form National Teams",
      status: "completed",
      description: "Tests include algorithmic and AI components to pick IOI & IOAI teams.",
      track: "both",
    },
    {
      year: "Aug 2025",
      title: "International Olympiad in AI (IOAI)",
      status: "upcoming",
      description: "Selected team represents Rwanda at IOAI in Beijing, China.",
      track: "AI",
    },
    {
      year: "July 2025",
      title: "International Olympiad in Informatics (IOI)",
      status: "upcoming",
      description: "Selected team represents Rwanda at IOI (Bolivia or other host).",
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
      default:
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
      <div className="text-center max-w-3xl mx-auto mb-8 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-olympiad-navy mb-4">
          Path to IOI & IOAI
        </h2>
        <div className="h-1 w-20 bg-olympiad-blue mx-auto mb-4"></div>
        <p className="text-olympiad-gray max-w-lg mx-auto text-lg">
          Our journey toward representing Rwanda in both the International Olympiad in Informatics and the International Olympiad in AI.
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="relative">
          {/* center line */}
          <div className="absolute left-1/2 top-0 h-full border-l-2 border-olympiad-blue -ml-1" />
          
          <div className="space-y-12">
            {olympiadEvents.map((event, idx) => {
              const statusClasses = getStatusClasses(event.status);
              const isLeft = idx % 2 === 0;

              return (
                <div key={idx} className="relative flex w-full">
                  <div className={`w-1/2 ${isLeft ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    {/* For left side entries, icon and date on left; for right side, we skip this */}
                    {isLeft && (
                      <div className="flex items-center justify-end mb-2">
                        <div className="text-xs font-medium text-gray-500 mr-2">
                          {event.year}
                        </div>
                        <div className={`rounded-full ${statusClasses.bg} w-8 h-8 flex items-center justify-center shadow`}>
                          {statusClasses.icon}
                        </div>
                      </div>
                    )}
                    <div className={`${statusClasses.lightBg} ${statusClasses.border} rounded-lg shadow-sm px-6 py-4`}>
                      <div className="flex items-center mb-2 space-x-2 justify-start">
                        {trackIcon(event.track)}
                        <div className={`inline-block px-2 py-1 rounded-full text-[11px] font-semibold ${statusClasses.bg} text-white`}>
                          {event.status === "completed"
                            ? "Completed"
                            : event.status === "in-progress"
                            ? "In Progress"
                            : "Upcoming"}
                        </div>
                      </div>
                      <h3 className={`font-semibold text-[16px] ${statusClasses.textColor}`}>
                        {event.title}
                      </h3>
                      <p className="text-olympiad-gray py-1">{event.description}</p>
                    </div>
                  </div>

                  {/* middle vertical and icon for right side entries */}
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2">
                    {!isLeft && (
                      <div className={`rounded-full ${statusClasses.bg} w-8 h-8 flex items-center justify-center shadow`}>
                        {statusClasses.icon}
                      </div>
                    )}
                  </div>

                  {/* right empty placeholder or content */}
                  <div className="w-1/2">{/* blank or you could mirror content for right side */}</div>
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
