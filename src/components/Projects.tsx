"use client"
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from 'lucide-react';
import { useState } from 'react';

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Qurify QR Code Based Attendance System",
      tech: "React, Node.js, Express, MongoDB",
      summary: "A modern attendance tracking system leveraging QR code technology for efficient student management",
      details: [
        "Developed a real-time attendance tracking system using QR code scanning for instant validation",
        "Implemented secure user authentication and role-based access control for administrators and faculty",
        "Created dynamic QR code generation system with time-based validation to prevent attendance spoofing",
        "Achieved 40% reduction in attendance marking time compared to traditional methods"
      ],
      github: "https://github.com/devanandn54/qr-based-attendance"
    },
    {
      title: "Ticket Harbor",
      tech: "React, Express, Node.js, Next.js, MongoDB",
      summary: "An IT service desk solution for streamlined incident management and efficient ticket resolution within organizations",
      details: [
        "Built a comprehensive IT ticketing system with automated ticket routing and priority assignment",
        "Implemented role-based access control for IT staff, managers, and end-users",
        "Created interactive dashboards for ticket analytics and performance metrics",
      ],
      github: "https://github.com/devanandn54/TicketHarbor"
    },
    {
      title: "Origin Predictor",
      tech: "React, Nationalize.io API, TailwindCSS",
      summary: "An entertaining web app that predicts a person's likely country of origin based on their name using probability analysis",
      details: [
        "Integrated with Nationalize.io API to analyze name origins across multiple countries",
        "Created engaging UI animations for loading and result states",
        "Added country flag displays using country-flags API",
        "Built error handling for API rate limits and network issues",
        "Included name history feature to track previous searches"
      ],
      github: "https://github.com/devanandn54/Prediction"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#1F1544] to-[#2B2579]">
      <div className="container mx-auto px-6">
        <h2 className="font-poppins text-5xl font-bold mb-16 text-center text-[#C278F8]">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-[#3B3363]/40 backdrop-blur-sm border-none transition-all duration-500 hover:bg-[#3B3363]/60"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardHeader>
                <h3 className="font-poppins text-2xl font-semibold text-[#C278F8] mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400">{project.tech}</p>
              </CardHeader>
              <CardContent>
                <div className="transition-all duration-500 min-h-[200px]">
                  {hoveredIndex === index ? (
                    <div className="space-y-3">
                      {project.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#C278F8] mt-2"></div>
                          <p className="text-white/90">{detail}</p>
                        </div>
                      ))}
                      <div className="pt-4">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="bg-[#2B2579]/50 border-[#C278F8] text-[#C278F8] hover:bg-[#2B2579]/70"
                        >
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center"
                          >
                            <Github className="mr-2 h-4 w-4" /> View Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p className="text-white/80 mb-6">{project.summary}</p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="bg-[#2B2579]/50 border-[#C278F8] text-[#C278F8] hover:bg-[#2B2579]/70"
                      >
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <Github className="mr-2 h-4 w-4" /> View Code
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}