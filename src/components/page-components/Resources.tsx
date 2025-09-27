"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Book, Code, FileText, Award, ChevronRight } from 'lucide-react';

const Resources = () => {
  const [searchTerm] = useState('');
  
  type ResourceColor = 'blue' | 'emerald' | 'purple' | 'amber';

  const resourceCategories: { title: string; icon: JSX.Element; color: ResourceColor; resources: { title: string; description?: string; link: string; }[]; }[] = [
    {
      title: "Web Platforms",
      icon: <Code className="h-6 w-6 text-emerald-600" />,
      color: "emerald",
      resources: [
        {
          title: "USACO",
          description: "Pre-college Computer Science contests in the U.S.",
          link: "https://usaco.guide/",
        },
        {
          title: "Visualgo",
          description: "Visualize algorithms and data structures.",
          link: "https://visualgo.net/en",
        },
        {
          title: "USACO Training Program Gateway",
          description: "USACO training resources.",
          link: "https://train.usaco.org/usacogate",
        }
      ]
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
          title: "Introduction to Algorithms",
          link: "https://drive.google.com/file/d/1PwHRRkkjiE4tQJl5m1MOq6cNqAGSKPmV/view",
        },
        {
          title: "Algortithm Design",
          link: "https://drive.google.com/file/d/1wKy-wGuCYfRx1DH48vZHl5JA4nkhOmwC/view",
        },
        {
          title: "Algorithmics: The Spirit of Computing",
          link: "https://drive.google.com/file/d/1m9-9Kw8EM4sahuWgF8UONigmyXFad6Mz/view",
        },
        {
          title: "Practice Problems",
          link: "https://docs.google.com/spreadsheets/d/1-499z-WtsthQPYU_rmJ3PNCGALA4NBaEodBYyPhmjx8/edit?gid=84654839#gid=84654839",
        }
      ]
    },
    {
      title: "Code editors",
      icon: <FileText className="h-6 w-6 text-purple-600" />,
      color: "purple",
      resources: [
        {
          title: "Codeblocks",
          description: "The free C/C++ IDE.",
          link: "https://www.codeblocks.org/#google_vignette",
        },
        {
          title: "dEV-C++",
          description: "A free C/C++ IDE.",
          link: "https://www.bloodshed.net/",
        },
        {
          title: "Vim",
          description: "A a powerful, free, and open-source, modal text editor.",
          link: "https://www.vim.org/",
        },
        {
          title: "Emacs",
          description: "A highly extensible and customizable text editor.",
          link: "https://www.gnu.org/software/emacs/",
        }
      ]
    },
    {
      title: "Contests Platforms",
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
          title: "Sphere Online Judge",
          link: "https://www.spoj.com/",
        },        {
          title: "Leetcode",
          link: "https://leetcode.com/",
        },
        {
          title: "Kattis",
          link: "https://open.kattis.com/",
        }
      ]
    }
  ];

  const filteredCategories = resourceCategories.map(category => {
    return {
      ...category,
      resources: category.resources.filter(resource => 
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    };
  }).filter(category => category.resources.length > 0);

  const getColorClasses = (color: 'blue' | 'emerald' | 'purple' | 'amber') => {
    const colorMap = {
      blue: {
        light: "bg-olympiad-blue/10",
        border: "border-olympiad-blue",
        text: "text-olympiad-blue",
        hover: "hover:border-olympiad-blue-300",
        iconBg: "bg-olympiad-blue/40"
      },
      emerald: {
        light: "bg-emerald-50",
        border: "border-emerald-100",
        text: "text-emerald-600",
        hover: "hover:border-emerald-300",
        iconBg: "bg-emerald-100"
      },
      purple: {
        light: "bg-purple-50",
        border: "border-purple-100",
        text: "text-purple-600",
        hover: "hover:border-purple-300",
        iconBg: "bg-purple-100"
      },
      amber: {
        light: "bg-amber-50",
        border: "border-amber-100",
        text: "text-amber-600",
        hover: "hover:border-amber-300",
        iconBg: "bg-amber-100"
      },
    };
    
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="py-16" id="resources">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-olympiad-navy mb-6">
            Learning Resources
          </h2>
          <div className="h-1 w-20 bg-olympiad-blue mx-auto mb-6"></div>
          <p className="text-olympiad-gray max-w-md text-lg mx-auto">
            Access a curated collection of materials to help you prepare for the Rwanda Informatics Olympiad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredCategories.map((category, categoryIndex) => {
            const colorClasses = getColorClasses(category.color);
            
            return (
              <div key={categoryIndex} className="flex flex-col h-full rounded-xl">
                <div className={`flex items-center gap-3 p-4 rounded-t-lg ${colorClasses.light} ${colorClasses.border} border-b-0`}>
                  <div className={`p-2 rounded-full ${colorClasses.iconBg} flex-shrink-0`}>
                    {category.icon}
                  </div>
                  <h3 className={`font-bold ${colorClasses.text} text-lg`}>
                    {category.title}
                  </h3>
                </div>
                
                <div className={`flex-1 rounded-b-lg ${colorClasses.light} ${colorClasses.border} border-t-0 p-4`}>
                  <div className="space-y-3">
                    {category.resources.map((resource, resourceIndex) => (
                      <Link 
                        href={resource.link} 
                        key={resourceIndex}
                        className={`block rounded-lg p-3 bg-white border border-gray-100 hover:shadow-md transition-all`}
                      >
                        <h4 className={`font-semibold  ${colorClasses.text} flex items-center text-base`}>
                          {resource.title}
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </h4>
                        <p className="text-olympiad-gray text-sm mt-1">
                          {resource.description}
                        </p>
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