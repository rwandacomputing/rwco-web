"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Book, Code, FileText, Award, ChevronRight, Cpu, Brain } from 'lucide-react';

const Resources = () => {
  const [searchTerm] = useState('');

  type ResourceColor = 'blue' | 'emerald' | 'purple' | 'amber' | 'teal';

  const resourceCategories: {
    title: string;
    icon: JSX.Element;
    color: ResourceColor;
    resources: { title: string; description?: string; link: string; }[];
  }[] = [
    {
      title: "Web Platforms",
      icon: <Code className="h-6 w-6 text-emerald-600" />,
      color: "emerald",
      resources: [
        {
          title: "USACO",
          description: "Pre-college computer science contests.",
          link: "https://usaco.guide/",
        },
        {
          title: "Visualgo",
          description: "Visualize algorithms & data structures.",
          link: "https://visualgo.net/en",
        },
        {
          title: "USACO Training Program",
          description: "USACO's training envelope.",
          link: "https://train.usaco.org/usacogate",
        },
      ],
    },
    {
      title: "Books",
      icon: <Book className="h-6 w-6 text-blue-600" />,
      color: "blue",
      resources: [
        {
          title: "Competitive Programming Handbook",
          link: "https://cses.fi/book/book.pdf",
        },
        {
          title: "Introduction to Algorithms (CLRS)",
          link: "https://drive.google.com/file/d/1PwHRRkkjiE4tQJl5m1MOq6cNqAGSKPmV/view",
        },
        {
          title: "Algorithm Design",
          link: "https://drive.google.com/file/d/1wKy-wGuCYfRx1DH48vZHl5JA4nkhOmwC/view",
        },
        {
          title: "Algorithmics: The Spirit of Computing",
          link: "https://drive.google.com/file/d/1m9-9Kw8EM4sahuWgF8UONigmyXFad6Mz/view",
        },
        {
          title: "Practice Problems List",
          link: "https://docs.google.com/spreadsheets/d/1-499z-WtsthQPYU_rmJ3PNCGALA4NBaEodBYyPhmjx8/edit?gid=84654839#gid=84654839",
        },
      ],
    },
    {
      title: "Code Editors & Tools",
      icon: <FileText className="h-6 w-6 text-purple-600" />,
      color: "purple",
      resources: [
        {
          title: "Code::Blocks",
          description: "Free C/C++ IDE.",
          link: "https://www.codeblocks.org/#google_vignette",
        },
        {
          title: "Dev-C++",
          description: "Classic C/C++ IDE.",
          link: "https://www.bloodshed.net/",
        },
        {
          title: "Vim",
          description: "Powerful modal text editor.",
          link: "https://www.vim.org/",
        },
        {
          title: "Emacs",
          description: "Highly customizable editor.",
          link: "https://www.gnu.org/software/emacs/",
        },
      ],
    },
    {
      title: "Contest Platforms",
      icon: <Award className="h-6 w-6 text-amber-600" />,
      color: "amber",
      resources: [
        {
          title: "Codeforces",
          link: "https://codeforces.com/",
        },
        {
          title: "Online Judge",
          link: "https://onlinejudge.org/",
        },
        {
          title: "SPOJ",
          link: "https://www.spoj.com/",
        },
        {
          title: "LeetCode",
          link: "https://leetcode.com/",
        },
        {
          title: "Kattis",
          link: "https://open.kattis.com/",
        },
      ],
    },
    {
      title: "AI / ML Learning",
      icon: <Brain className="h-6 w-6 text-teal-600" />,
      color: "teal",
      resources: [
        {
          title: "Kaggle Learn: Intro to Machine Learning",
          description: "Beginner ML course on Kaggle.",
          link: "https://www.kaggle.com/learn/intro-to-machine-learning",
        },
        {
          title: "Kaggle Learn: Intro to AI Ethics",
          description: "Ethics & fairness in AI.",
          link: "https://www.kaggle.com/learn/intro-to-ai-ethics",
        },
        {
          title: "Elements of AI",
          description: "Free AI course for beginners.",
          link: "https://www.elementsofai.com/", // (you’ll need to check the correct URL)
        },
        {
          title: "Kaggle Datasets & Notebooks",
          description: "Explore real data and ML notebooks.",
          link: "https://www.kaggle.com/datasets",
        },
        {
          title: "Kaggle Competitions (Beginner)",
          description: "Entry-level ML competitions.",
          link: "https://www.kaggle.com/competitions",
        },
      ],
    },
  ];

  const filteredCategories = resourceCategories
    .map(cat => ({
      ...cat,
      resources: cat.resources.filter(r =>
        r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (r.description && r.description.toLowerCase().includes(searchTerm.toLowerCase()))
      ),
    }))
    .filter(cat => cat.resources.length > 0);

  const getColorClasses = (color: ResourceColor) => {
    const colorMap: Record<ResourceColor, {
      light: string;
      border: string;
      text: string;
      hover: string;
      iconBg: string;
    }> = {
      blue: {
        light: "bg-olympiad-blue/10",
        border: "border-olympiad-blue",
        text: "text-olympiad-blue",
        hover: "hover:border-olympiad-blue-300",
        iconBg: "bg-olympiad-blue/40",
      },
      emerald: {
        light: "bg-emerald-50",
        border: "border-emerald-100",
        text: "text-emerald-600",
        hover: "hover:border-emerald-300",
        iconBg: "bg-emerald-100",
      },
      purple: {
        light: "bg-purple-50",
        border: "border-purple-100",
        text: "text-purple-600",
        hover: "hover:border-purple-300",
        iconBg: "bg-purple-100",
      },
      amber: {
        light: "bg-amber-50",
        border: "border-amber-100",
        text: "text-amber-600",
        hover: "hover:border-amber-300",
        iconBg: "bg-amber-100",
      },
      teal: {
        light: "bg-teal-50",
        border: "border-teal-100",
        text: "text-teal-600",
        hover: "hover:border-teal-300",
        iconBg: "bg-teal-100",
      },
    };
    return colorMap[color];
  };

  return (
    <section className="py-16" id="resources">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-olympiad-navy mb-6">
            Learning & AI Resources
          </h2>
          <div className="h-1 w-20 bg-olympiad-blue mx-auto mb-6"></div>
          <p className="text-olympiad-gray max-w-md text-lg mx-auto">
            A curated collection of resources for programming, algorithms, and artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {filteredCategories.map((category, idx) => {
            const c = getColorClasses(category.color);
            return (
              <div key={idx} className="flex flex-col rounded-xl">
                <div className={`flex items-center gap-3 p-4 rounded-t-lg ${c.light} ${c.border} border-b-0`}>
                  <div className={`p-2 rounded-full ${c.iconBg} flex-shrink-0`}>
                    {category.icon}
                  </div>
                  <h3 className={`font-bold ${c.text} text-lg`}>
                    {category.title}
                  </h3>
                </div>
                <div className={`flex-1 rounded-b-lg ${c.light} ${c.border} border-t-0 p-4`}>
                  <div className="space-y-3">
                    {category.resources.map((res, ridx) => (
                      <Link
                        href={res.link}
                        key={ridx}
                        className={`block rounded-lg p-3 bg-white border border-gray-100 hover:shadow-md transition-all ${c.hover}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h4 className={`font-semibold ${c.text} flex items-center text-base`}>
                          {res.title}
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </h4>
                        {res.description && (
                          <p className="text-olympiad-gray text-sm mt-1">{res.description}</p>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Resources;
