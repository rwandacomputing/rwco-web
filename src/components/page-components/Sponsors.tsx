"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Book, Code, FileText, Award, ChevronRight, Cpu, Brain } from 'lucide-react';

const Resources = () => {
  const [searchTerm] = useState('');

  type ResourceColor = 'blue' | 'emerald' | 'purple' | 'amber';

  const resourceCategories: {
    title: string;
    icon: JSX.Element;
    color: ResourceColor;
    resources: { title: string; description?: string; link: string; }[];
  }[] = [
    {
      title: "Web & Learning Platforms",
      icon: <Code className="h-6 w-6 text-emerald-600" />,
      color: "emerald",
      resources: [
        {
          title: "DeepLearning.AI",
          description: "AI / ML courses & specialization programs",
          link: "https://learn.deeplearning.ai/",
        },
        {
          title: "Microsoft AI Learning Hub",
          description: "Curated modules for Azure / AI skills",
          link: "https://learn.microsoft.com/en-us/ai/",
        },
        {
          title: "USACO Guide",
          description: "Competitive programming training portal",
          link: "https://usaco.guide/",
        },
        {
          title: "GeeksforGeeks",
          description: "Algorithms, data structures, tutorials",
          link: "https://www.geeksforgeeks.org/",
        },
      ],
    },
    {
      title: "Books & References",
      icon: <Book className="h-6 w-6 text-blue-600" />,
      color: "blue",
      resources: [
        {
          title: "Competitive Programmer’s Handbook",
          description: "Classic CP reference book (CSES edition)",
          link: "https://cses.fi/book.pdf",
        },
        {
          title: "Introduction to Algorithms (CLRS)",
          description: "Widely used algorithms textbook",
          link: "https://drive.google.com/file/d/1PwHRRkkjiE4tQJl5m1MOq6cNqAGSKPmV/view",
        },
        {
          title: "Algorithm Design",
          description: "Design patterns, techniques in algorithms",
          link: "https://drive.google.com/file/d/1wKy-wGuCYfRx1DH48vZHl5JA4nkhOmwC/view",
        },
        {
          title: "Hands-On Machine Learning (e.g. with Scikit-Learn & TensorFlow)",
          description: "Practical ML+AI coding book",
          link: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/",  // you may replace with a freely accessible version if you have one
        },
      ],
    },
    {
      title: "Tools, Libraries & Editors",
      icon: <FileText className="h-6 w-6 text-purple-600" />,
      color: "purple",
      resources: [
        {
          title: "TensorFlow",
          description: "Open-source ML / deep learning library",
          link: "https://www.tensorflow.org/",
        },
        {
          title: "PyTorch",
          description: "Deep learning framework by Meta",
          link: "https://pytorch.org/",
        },
        {
          title: "VS Code",
          description: "Popular code editor with AI / extension support",
          link: "https://code.visualstudio.com/",
        },
        {
          title: "Jupyter / Colab",
          description: "Notebook environment for ML & experimentation",
          link: "https://jupyter.org/",
        },
      ],
    },
    {
      title: "Contests & Practice Platforms",
      icon: <Award className="h-6 w-6 text-amber-600" />,
      color: "amber",
      resources: [
        {
          title: "Codeforces",
          link: "https://codeforces.com/",
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
          title: "CSES Problem Set",
          description: "Algorithmic problemset repository",
          link: "https://cses.fi/problemset/",
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
    };
    return colorMap[color];
  };

  return (
    <section className="py-16" id="resources">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-olympiad-navy mb-6">
            Mixed Resources for Informatics & AI
          </h2>
          <div className="h-1 w-20 bg-olympiad-blue mx-auto mb-6"></div>
          <p className="text-olympiad-gray max-w-md text-lg mx-auto">
            A curated mix of platforms, books, tools, and contest sites to advance both algorithmic and AI knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
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
