"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials: {
    linkedin: string;
    email: string;
  };
}

const Team = () => {
  const teamMembers = [
    {
      name: "Jose Esperazano",
      role: "Coach",
      image: "/assets/images/jose_1.webp",
      socials: {
        linkedin: "/",
        email: "josealanesparza@gmail.com",
      },
    },
    {
      name: "Arun shanmuganathan",
      role: "Coach",
      image: "/assets/images/arun.webp",
      socials: {
        linkedin: "https://www.linkedin.com/in/arun-shanmuganathan-6ba86062/",
        email: "shan.arun@gmail.com",
      },
    },
    {
      name: "Joel Lee",
      role: "Coach",
      image: "/assets/images/joel.webp",
      socials: {
        linkedin:
          "https://www.linkedin.com/in/j0el/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=sg",
        email: "kosbekokos@gmail.com",
      },
    },
    {
      name: "Obed Nsanzimfura",
      role: "Coach",
      image: "/assets/images/obed.webp",
      socials: {
        linkedin: "https://www.linkedin.com/in/obed-nsanzimfura/",
        email: "senga.obed@gmail.com",
      },
    },
    {
      name: "Hirwa Arnold",
      role: "Coach",
      image: "/assets/images/hirwa.jpeg",
      socials: {
        linkedin: "https://www.linkedin.com/in/hirwa-arnold-7464bb229/",
        email: "arnold.hirw@gmail.com",
      },
    },

    {
      name: "Kagaba Etienne",
      role: "Coach",
      image: "/assets/images/kagaba.webp",
      socials: {
        linkedin: "https://linkedin.com/in/kagabaetienne",
        email: "kagabaetienne04@gmail.com",
      },
    },
    {
      name: "Afsa Umutoniwase",
      role: "Coach",
      image: "/assets/images/Afsa.webp",
      socials: {
        linkedin: "https://linkedin.com/in/afsa-umutoniwase-720952278/",
        email: "a.umutoniwa@alustudent.com",
      },
    },
    {
      name: "Niyogisubizo Jehovanis",
      role: "Coach",
      image: "/assets/images/jehovanis.webp",
      socials: {
        linkedin: "https://www.linkedin.com/in/johovanis/",
        email: "gisubizo.jovan@gmail.com",
      },
    },
    {
      name: "Hakim Nshimiyimana",
      role: "Coach",
      image: "/assets/images/hakim.webp",
      socials: {
        linkedin: "https://www.linkedin.com/in/hakim-nshimiyimana-b767412ba/",
        email: "nshimiyimanahakim7@gmail.com",
      },
    },
    {
      name: "Norbert Ndayisenga",
      role: "Coach",
      image: "/assets/images/norbert.webp",
      socials: {
        linkedin: "https://www.linkedin.com/in/ndayisenganorbert/",
        email: "norbertndayisenga@gmail.com",
      },
    },
    {
      name: "Ishimwe Frank",
      role: "Coach",
      image: "/assets/images/frank.webp",
      socials: {
        linkedin: "https://www.linkedin.com/in/frank-ishimwe-2634ba284/",
        email: "ishimwefrank147@gmail.com",
      },
    },
    {
      name: "Sezikeye Jado Fils",
      role: "Coach",
      image: "/assets/images/jado.webp",
      socials: {
        linkedin: "#",
        email: "jasezikeye50@gmail.com",
      },
    },
    {
      name: "Niyokwizera Jean D'Amour",
      role: "Coach",
      image: "/assets/images/brojeid.webp",
      socials: {
        linkedin: "#",
        email: "niyokwizerajd123@gmail.com",
      },
    },

    {
      name: "Cynthia Umwali",
      role: "Coach",
      image: "/assets/images/cynthia.webp",
      socials: {
        linkedin: "https://linkedin.com/in/cynthiaumwalii",
        email: "cynthiaaa877@gmail.com",
      },
    },
    {
      name: "Kelly Irakoze Ntawigenga",
      role: "Coach",
      image: "/assets/images/kelly.webp",
      socials: {
        linkedin:
          "https://www.linkedin.com/in/irakoze-ntawigenga-kelly-bb194a287/",
        email: "irakozekelly41@gmail.com",
      },
    },
    {
      name: "Jean Paul Elisa NIYOKWIZERWA",
      role: "Coach",
      image: "/assets/images/ndevu.jpeg",
      socials: {
        linkedin:
          "https://www.linkedin.com/in/jean-paul-elisa/",
        email: "niyokwizerwajeanpaulelisa@gmail.com",
      },
    },
  ];

  const [shuffledMembers, setShuffledMembers] = useState(teamMembers);

  useEffect(() => {
    // Only shuffle on the client side after initial render
    const shuffled = [...teamMembers].sort(() => Math.random() - 0.5);
    setShuffledMembers(shuffled);
  }, []); // Empty dependency array means this only runs once after initial mount

  return (
    <section className="py-16" id="team">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-olympiad-navy mb-6">
            Our Team
          </h2>
          <div className="h-1 w-20 bg-olympiad-blue mx-auto mb-6"></div>
          <p className="text-olympiad-gray max-w-md mx-auto text-lg">
            Meet the team leading Rwanda&apos;s international informatics
            competitions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {shuffledMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col"
            >
              <div className="aspect-square relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 
           (max-width: 1200px) 50vw, 
           20vw"
                  priority={index < 5}
                  placeholder="blur"
                  blurDataURL={member.image}
                />
              </div>
              <div className="p-3 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-base font-bold text-olympiad-navy">
                    {member.name}
                  </h3>
                  <p className="text-olympiad-blue font-medium text-xs">
                    {member.role}
                  </p>
                </div>

                <div className="flex items-center space-x-3 mt-2">
                  {member.socials.linkedin && (
                    <Link
                      href={member.socials.linkedin}
                      className="text-gray-500 hover:text-olympiad-blue transition-colors"
                    >
                      <Linkedin size={16} />
                    </Link>
                  )}
                  {member.socials.email && (
                    <Link
                      href={`mailto:${member.socials.email}`}
                      className="text-gray-500 hover:text-olympiad-blue transition-colors"
                    >
                      <Mail size={16} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
