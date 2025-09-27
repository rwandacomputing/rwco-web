import React from 'react';
import { 
  Target, 
  LightbulbIcon, 
  Award,
} from 'lucide-react';

const Mission = () => {
  const cards = [
    {
      title: "Our Mission",
      description: "We identify and nurture talented young programmers and AI enthusiasts across Rwanda, providing them with world-class training in algorithms, data structures, machine learning, and problem-solving. Through structured competitions, AI projects, and camps, we prepare students to excel in international informatics and artificial intelligence olympiads and beyond.",
      icon: <Target className="h-6 w-6 text-blue-600" />,
      color: "blue",
      highlights: [
        "Identify talent",
        "Provide world-class training",
        "Advance AI and informatics",
        "Compete internationally"
      ]
    },
    {
      title: "Our Vision",
      description: "We envision Rwanda as a recognized center of excellence in informatics and artificial intelligence education, where computational thinking and data-driven innovation are embedded in every school. Our students will not only represent Rwanda on the global stage but also become leaders in AI research, technological innovation, and digital transformation.",
      icon: <LightbulbIcon className="h-6 w-6 text-amber-600" />,
      color: "amber",
      highlights: [
        "National excellence",
        "Global representation",
        "Tech and AI leadership"
      ]
    },
    {
      title: "Core Values",
      description: "Excellence in all we do. Collaboration across institutions. Inclusivity for all talented students regardless of background. Innovation in our approaches, from algorithms to machine learning. Impact that extends beyond competitions to real-world applications of informatics and AI.",
      icon: <Award className="h-6 w-6 text-purple-600" />,
      color: "purple",
      highlights: [
        "Excellence",
        "Collaboration",
        "Inclusivity",
        "Innovation",
        "Real-world impact"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: {[key: string]: {bg: string, border: string, text: string, iconBg: string, lightBg: string}} = {
      emerald: {
        bg: "bg-emerald-600",
        border: "border-emerald-200",
        text: "text-emerald-700",
        iconBg: "bg-emerald-100",
        lightBg: "from-emerald-50 to-emerald-100/30"
      },
      blue: {
        bg: "bg-olympiad-blue",
        border: "border-olympiad-blue-200",
        text: "text-olympiad-blue-500",
        iconBg: "bg-olympiad-blue/30",
        lightBg: "bg-olympiad-blue/10"
      },
      amber: {
        bg: "bg-amber-600",
        border: "border-amber-200",
        text: "text-amber-700",
        iconBg: "bg-amber-100",
        lightBg: "from-amber-50 to-amber-100/30"
      },
      purple: {
        bg: "bg-purple-600",
        border: "border-purple-200",
        text: "text-purple-700",
        iconBg: "bg-purple-100",
        lightBg: "from-purple-50 to-purple-100/30"
      }
    };
    
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="py-16 relative overflow-hidden" id="mission">
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-50 rounded-full opacity-70 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-purple-50 rounded-full opacity-70 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-sm uppercase tracking-wider text-olympiad-blue font-semibold mb-3">Who We Are</h2>
          <h1 className="text-3xl md:text-4xl font-bold text-olympiad-navy mb-6">
            Rwanda&#39;s Future in Informatics &amp; Artificial Intelligence
          </h1>
          <div className="h-1 w-24 bg-olympiad-blue mx-auto mb-6"></div>
          <p className="text-olympiad-gray text-lg">
            The Rwanda Informatics &amp; Artificial Intelligence Olympiad is dedicated to discovering and nurturing 
            talented young programmers and AI innovators who will represent our nation on the global stage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4">
          {cards.map((card, index) => {
            const colorClasses = getColorClasses(card.color);
            
            return (
              <div 
                key={index} 
                className={`rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg h-full flex flex-col`}
              >
                <div className={`h-2 ${colorClasses.bg}`}></div>
                <div className={`p-4 sm:p-6 bg-gradient-to-br ${colorClasses.lightBg} flex-1 flex flex-col`}>
                  <div className="flex items-center mb-3">
                    <div className={`p-4 rounded-full ${colorClasses.iconBg} mr-3`}>
                      {card.icon}
                    </div>
                    <h3 className={`text-[22px] font-bold ${colorClasses.text}`}>
                      {card.title}
                    </h3>
                  </div>
                  
                  <p className="text-olympiad-gray mb-4 flex-1">
                    {card.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mt-auto">
                    {card.highlights.map((highlight, i) => (
                      <span 
                        key={i}
                        className={`text-[13px] font-medium px-2 py-0.5 rounded-full bg-white/60 ${colorClasses.text} border ${colorClasses.border}`}
                      >
                        {highlight}
                      </span>
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
}

export default Mission;
