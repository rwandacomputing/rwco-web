"use client";
import React from "react";
import { Users, Calendar, School, Map, Building } from "lucide-react";

const Eligibility = () => {
  const selectionProcess = [
    {
      title: "School Registration",
      description: "Schools register to participate in Selection Tests",
      icon: <Building className="h-5 w-5 text-white" />,
    },
    {
      title: "School Tests",
      description:
        "Students take school selection tests and qualify for the National Selection Test",
      icon: <School className="h-5 w-5 text-white" />,
    },
    {
      title: "National Tests",
      description:
        "Qualified students advance to nationwide tests and get selected for training camps",
      icon: <Map className="h-5 w-5 text-white" />,
    },
    {
      title: "Training Camps",
      description:
        "Top performers join preparation camps and compete for the national team",
      icon: <Users className="h-5 w-5 text-white" />,
    },
  ];

  const eligibilityCriteria = [
    {
      title: "High School Students",
      description: "Enrolled in Rwandan high school",
      icon: <School className="h-6 w-6 text-white" />,
    },
    {
      title: "Age: 20 or Below",
      description: "As of Time of Registration",
      icon: <Calendar className="h-6 w-6 text-white" />,
    },
    {
      title: "Rwandan Schools Only",
      description: "Students studying in Rwanda",
      icon: <Map className="h-6 w-6 text-white" />,
    },
  ];

  return (
    <section className="py-16 bg-white" id="eligibility">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-olympiad-navy mb-6">
            Eligibility
          </h2>
          <div className="h-1 w-20 bg-olympiad-blue mx-auto mb-6"></div>
          <p className="text-olympiad-gray max-w-md mx-auto text-lg">
            Discover the selection process in detail and learn about the
            criterias to see who can take part.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {eligibilityCriteria.map((criteria, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center max-w-[180px] hover:scale-105 transition-transform"
            >
              <div className="w-16 h-16 rounded-full bg-olympiad-blue flex items-center justify-center mb-3 shadow-md">
                {criteria.icon}
              </div>
              <h4 className="font-semibold text-olympiad-navy text-base mb-1">
                {criteria.title}
              </h4>
              <p className="text-olympiad-gray">
                {criteria.description}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-28">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-olympiad-navy mb-6">
              Selection Criteria
            </h2>
            <div className="h-1 w-20 bg-olympiad-blue mx-auto mb-6"></div>
            <p className="text-olympiad-gray max-w-md mx-auto text-lg">
              Find out the stages we go through to select the best Rwanda&apos;s representatives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {selectionProcess.map((process, index) => (
              <div
                key={index}
                className="glass-card p-5 rounded-xl relative bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-olympiad-blue flex items-center justify-center mb-3 shadow-sm">
                  {process.icon}
                </div>

                <h4 className="font-semibold text-olympiad-navy text-base mb-1">
                  {process.title}
                </h4>
                <p className="text-olympiad-gray">
                  {process.description}
                </p>

                {index < selectionProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 w-16 h-1 bg-gray-200">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[6px] border-l-gray-300 border-b-[6px] border-b-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;
