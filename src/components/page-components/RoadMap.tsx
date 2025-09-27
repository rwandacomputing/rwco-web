"use client";
import React from "react";
import { Check, Clock } from "lucide-react";

const RoadMap = () => {
  const olympiadEvents = [
    {
      year: "Nov 2024",
      title: "School Selection Test",
      status: "completed",
      description: "Students take a school-supervised selection test from their RwIO."
    },
    {
      year: "Dec 2024",
      title: "Online Camps & Workshops",
      status: "completed",
      description: "After successful completion of the test, students undergo an educational workshop."
    },
    {
      year: "Feb 2025",
      title: "National Selection Test",
      status: "completed",
      description: "Students take a second test, this time to determine who will attend the April Camp."
    },
    {
      year: "Apr 2025",
      title: " In-Person Camps & Workshops",
      status: "completed",
      description: "Students undergo a second intense in-person camp with our coaches at AIMS."
    },
    {
      year: "Apr 2025",
      title: "Final Test to Form National Team",
      status: "completed",
      description: "Students take a final test to determine the representatives to represent Rwanda at IOI."
    },
    {
      year: "July 2025",
      title: "International Olympiad in Bolivia",
      status: "completed",
      description: "Selected Students will represent Rwanda in IOI 2025 in Bolivia."
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
          icon: <Check className="h-4 w-4 text-white" />,
        };
      case "in-progress":
        return {
          bg: "bg-blue-500",
          textColor: "text-blue-700",
          lightBg: "bg-blue-50",
          border: "border-blue-200",
          icon: <Clock className="h-4 w-4 text-white animate-pulse" />,
        };
      case "upcoming":
      default:
        return {
          bg: "bg-amber-400",
          textColor: "text-amber-700",
          lightBg: "bg-amber-50",
          border: "border-amber-200",
          icon: <Clock className="h-4 w-4 text-white" />,
        };
    }
  };

  return (
    <div className="relative py-16" id="timeline">
      <div className="flex flex-col justify-center text-center max-w-3xl mx-auto mb-8 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-olympiad-navy mb-6">
          Path to IOI 2025
        </h2>
        <div className="h-1 w-20 bg-olympiad-blue mx-auto mb-6"></div>
        <p className="text-olympiad-gray max-w-md mx-auto text-lg">
          Key milestones in our journey to represent Rwanda at the International
          Olympiad in Informatics
        </p>
      </div>

      <div className="relative">
        <div id="timeline-container" className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6 px-4 ">
            {olympiadEvents.map((event, index) => {
              const statusClasses = getStatusClasses(event.status);
              return (
                <div
                  key={index}
                  className="relative pt-16 flex-shrink-0"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 py-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`text-xs font-medium ${statusClasses.textColor} mb-1`}
                      >
                        {event.year}
                      </div>
                      <div
                        className={`${statusClasses.bg} rounded-full w-10 h-10 flex items-center justify-center shadow-sm border-2 border-white`}
                      >
                        {statusClasses.icon}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${statusClasses.lightBg} ${statusClasses.border} rounded-lg shadow-sm px-6 py-4 `}
                  >
                    <div className="mb-2">
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
                    <h3 className={`font-semibold text-[14px]${statusClasses.textColor}`}>
                      {event.title}
                    </h3>
                    <p className="text-olympiad-gray text-[15px] py-2">{event.description}</p>
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
