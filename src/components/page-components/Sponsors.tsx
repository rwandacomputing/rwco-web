"use client"

import React, { useState } from 'react';

import { Book, Code, FileText, Award, ChevronRight, Cpu, Brain } from 'lucide-react';

const Resources = () => {
  const [searchTerm] = useState('');

  type ResourceColor = 'blue' | 'emerald' | 'purple' | 'amber';

  const resourceCategories: {
    title: string;
    icon: JSX.Element;
    color: ResourceColor;
    resources: { title: string; description?: string; link: string; type: 'programming' | 'AI' | 'both'; }[];
  }[] = [
    {
      title: "Web Platforms",
      icon: <Code className="h-6 w-6 text-emerald-600" />,
      color: "emerald",
      resources: [
        {
          title: "USACO Guide",
          description: "Comprehensive competitive programming guide & training.",
          link: "https://usaco.guide/",
          type: "programming"
        },
        {
          title: "Visualgo",
          description: "Interactive algorithm & data structure visualizations.",
          link: "https://visualgo.net/en",
          type: "both"
        },
        {
          title: "Kaggle Learn",
          description: "Free micro-courses on ML, data science & AI ethics.",
          link: "https://www.kaggle.com/learn",
          type: "AI"
        },
        {
          title: "CodinGame",
          description: "Coding games, AI bot programming & clash battles.",
          link: "https://www.codingame.com/",
          type: "both"
        },
        {
          title: "Elements of AI",
          description: "University of Helsinki's free AI fundamentals course.",
          link: "https://www.elementsofai.com/",
          type: "AI"
        },
      ],
    },
    {
      title: "Books & References",
      icon: <Book className="h-6 w-6 text-blue-600" />,
      color: "blue",
      resources: [
        {
          title: "Competitive Programming Handbook",
          description: "Essential CP techniques by Antti Laaksonen.",
          link: "https://cses.fi/book/book.pdf",
          type: "programming"
        },
        {
          title: "AI: A Modern Approach (Russell & Norvig)",
          description: "The quintessential AI textbook, 4th edition.",
          link: "https://aima.cs.berkeley.edu/",
          type: "AI"
        },
        {
          title: "Introduction to Algorithms (CLRS)",
          description: "Comprehensive algorithms & data structures reference.",
          link: "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/",
          type: "both"
        },
        {
          title: "Hands-On ML (Aurélien Géron)",
          description: "Practical ML with Scikit-Learn, Keras & TensorFlow.",
          link: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/",
          type: "AI"
        },
        {
          title: "Practice Problems Spreadsheet",
          description: "Curated competitive programming problems by topic.",
          link: "https://docs.google.com/spreadsheets/d/1-499z-WtsthQPYU_rmJ3PNCGALA4NBaEodBYyPhmjx8/edit?gid=84654839#gid=84654839",
          type: "programming"
        },
      ],
    },
    {
      title: "Code Editors & IDEs",
      icon: <FileText className="h-6 w-6 text-purple-600" />,
      color: "purple",
      resources: [
        {
          title: "VS Code",
          description: "Popular editor with CP & ML extensions.",
          link: "https://code.visualstudio.com/",
          type: "both"
        },
        {
          title: "PyCharm",
          description: "Python IDE ideal for data science & AI development.",
          link: "https://www.jetbrains.com/pycharm/",
          type: "AI"
        },
        {
          title: "Code::Blocks",
          description: "Lightweight C/C++ IDE for competitive programming.",
          link: "https://www.codeblocks.org/",
          type: "programming"
        },
        {
          title: "Jupyter Notebooks",
          description: "Interactive development environment for ML & data analysis.",
          link: "https://jupyter.org/",
          type: "AI"
        },
        {
          title: "Sublime Text",
          description: "Fast, customizable text editor with competitive programming shortcuts.",
          link: "https://www.sublimetext.com/",
          type: "programming"
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
          description: "Premier competitive programming platform with regular contests.",
          link: "https://codeforces.com/",
          type: "programming"
        },
        {
          title: "Kaggle Competitions",
          description: "ML competitions with real-world datasets & prizes.",
          link: "https://www.kaggle.com/competitions",
          type: "AI"
        },
        {
          title: "AtCoder",
          description: "High-quality algorithmic contests from Japan.",
          link: "https://atcoder.jp/",
          type: "programming"
        },
        {
          title: "DrivenData",
          description: "Data science competitions for social good.",
          link: "https://www.drivendata.org/competitions/",
          type: "AI"
        },
        {
          title: "TopCoder",
          description: "Algorithm, design & development competitions.",
          link: "https://www.topcoder.com/",
          type: "both"
        },
        {
          title: "LeetCode",
          description: "Technical interview prep with programming challenges.",
          link: "https://leetcode.com/",
          type: "programming"
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
        light: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-700",
        hover: "hover:border-blue-300",
        iconBg: "bg-blue-100",
      },
      emerald: {
        light: "bg-emerald-50",
        border: "border-emerald-200",
        text: "text-emerald-700",
        hover: "hover:border-emerald-300",
        iconBg: "bg-emerald-100",
      },
      purple: {
        light: "bg-purple-50",
        border: "border-purple-200",
        text: "text-purple-700",
        hover: "hover:border-purple-300",
        iconBg: "bg-purple-100",
      },
      amber: {
        light: "bg-amber-50",
        border: "border-amber-200",
        text: "text-amber-700",
        hover: "hover:border-amber-300",
        iconBg: "bg-amber-100",
      },
    };
    return colorMap[color];
  };

  const getTypeIcon = (type: 'programming' | 'AI' | 'both') => {
    if (type === 'AI') return <Brain className="h-3 w-3 text-teal-500" />;
    if (type === 'programming') return <Cpu className="h-3 w-3 text-indigo-500" />;
    return (
      <div className="flex space-x-1">
        <Cpu className="h-3 w-3 text-indigo-500" />
        <Brain className="h-3 w-3 text-teal-500" />
      </div>
    );
  };

  return (
    <section className="py-16 bg-gray-50" id="resources">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Learning & AI Resources
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl text-lg mx-auto">
            Comprehensive resources mixing competitive programming and artificial intelligence - 
            from algorithms to machine learning, contests to AI research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCategories.map((category, idx) => {
            const c = getColorClasses(category.color);
            return (
              <div key={idx} className="flex flex-col rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className={`flex items-center gap-3 p-5 rounded-t-xl ${c.light} ${c.border} border-b-0`}>
                  <div className={`p-2 rounded-full ${c.iconBg} flex-shrink-0`}>
                    {category.icon}
                  </div>
                  <h3 className={`font-bold ${c.text} text-lg`}>
                    {category.title}
                  </h3>
                </div>
                <div className={`flex-1 rounded-b-xl ${c.light} ${c.border} border-t-0 p-5`}>
                  <div className="space-y-3">
                    {category.resources.map((res, ridx) => (
                      <a
                        href={res.link}
                        key={ridx}
                        className={`block rounded-lg p-4 bg-white border border-gray-100 hover:shadow-md transition-all ${c.hover} group`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="flex items-start justify-between">
                          <h4 className={`font-semibold ${c.text} flex items-center text-sm mb-1`}>
                            {res.title}
                            <ChevronRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                          </h4>
                          {getTypeIcon(res.type)}
                        </div>
                        {res.description && (
                          <p className="text-gray-600 text-xs leading-relaxed">{res.description}</p>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Cpu className="h-4 w-4 text-indigo-500" />
              <span>Programming</span>
            </div>
            <div className="flex items-center space-x-2">
              <Brain className="h-4 w-4 text-teal-500" />
              <span>AI/ML</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <Cpu className="h-4 w-4 text-indigo-500" />
                <Brain className="h-4 w-4 text-teal-500" />
              </div>
              <span>Both</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
