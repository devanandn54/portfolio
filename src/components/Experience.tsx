"use client"
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState } from 'react';
import Image from 'next/image';

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const experiences = [
    {
      title: "Node.js Developer",
      company: "Takeleap Tech Pvt Ltd",
      date: "February 2024 – July 2024",
      logoUrl: "/takeleap.jpeg",
      summary: "Led backend development and API optimization initiatives",
      details: [
        "Engineered high-performance RESTful APIs using Node.js and Express, achieving 40% faster response times",
        "Implemented secure biometric Multi-Factor Authentication system, enhancing platform security",
        "Developed responsive React components and screens with Tailwind CSS",
        "Optimized database queries resulting in 30% reduction in API latency"
      ]
    },
    {
      title: "Associate Officer - Digital",
      company: "RPG Groups, KEC International",
      date: "June 2023 – February 2024",
      logoUrl: "/kec.jpg",
      summary: "Spearheaded workforce management system development",
      details: [
        "Built robust workforce management system using ASP.NET Core and SQL Server",
        "Enhanced UI/UX with React, improving user engagement by 25%",
        "Implemented real-time dashboard analytics using SignalR",
        "Reduced system downtime by 45% through performance optimization"
      ]
    },
    {
      title: "Junior Software Engineer",
      company: "RPG Groups, Zensar Technologies",
      date: "November 2022 – June 2023",
      logoUrl: "/zensar.jpg",
      summary: "Focused on front-end development and Agile practices",
      details: [
        "Developed modular single-page applications using React and Redux",
        "Implemented Test-Driven Development reducing bugs by 35%",
        "Collaborated in Agile sprints with 98% on-time delivery rate",
        "Created reusable component library used across multiple projects"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-[#1F1544] to-[#2B2579]">
      <div className="container mx-auto px-6">
        <h2 className="font-poppins text-5xl font-bold mb-16 text-center text-[#C278F8]">
          Professional Journey
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="bg-[#3B3363]/40 backdrop-blur-sm border-none transition-all duration-500 hover:bg-[#3B3363]/60"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex justify-between">
                <div className="flex-grow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-poppins text-2xl font-semibold text-[#C278F8] mb-2">{exp.title}</h3>
                        <p className="text-sm text-gray-400">{exp.company} | {exp.date}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="transition-all duration-500">
                      {hoveredIndex === index ? (
                        <div className="space-y-3">
                          {exp.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className="w-2 h-2 rounded-full bg-[#C278F8] mt-2"></div>
                              <p className="text-white/90">{detail}</p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-white/80">{exp.summary}</p>
                      )}
                    </div>
                  </CardContent>
                </div>
                <div className="flex items-center pr-8">
                  <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-[#2B2579]/50 p-2 transition-transform duration-500 hover:scale-110">
                    <Image
                      src={exp.logoUrl}
                      alt={`${exp.company} logo`}
                      layout="fill"
                      objectFit="contain"
                      className="p-2"
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}