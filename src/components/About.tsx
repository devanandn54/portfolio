"use client"
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#1F1544] to-[#2B2579]">
      <div className="container mx-auto px-6">
        <h2 className="font-poppins text-5xl font-bold mb-16 text-center text-[#C278F8]">About Me</h2>
        <Card className="bg-[#3B3363]/40 backdrop-blur-sm border-none">
          <CardContent className="p-8">
            <div className="space-y-6">
              <p className="text-white/90 text-lg leading-relaxed">
                I'm a passionate Full Stack Developer currently pursuing my Master's in Information Technology at the University of North Carolina at Charlotte. With a keen eye for detail and a love for solving complex problems, I strive to create efficient and user-friendly web solutions that make a difference.
              </p>
              
              <p className="text-white/90 text-lg leading-relaxed">
                Throughout my journey in tech, I've built a strong foundation in both front-end technologies like React and Next.js, and back-end solutions using Node.js and ASP.NET. I'm constantly expanding my expertise and am currently focusing on cloud technologies, including Docker, Kubernetes, and modern DevOps practices.
              </p>

              <div className="bg-[#2B2579]/30 rounded-xl p-6 mt-8">
                <h3 className="text-[#C278F8] font-semibold text-xl mb-4">Current Status & Goals</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#C278F8] mt-2"></div>
                    <p className="text-white/90">Actively seeking Summer 2025 internship opportunities in software development</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#C278F8] mt-2"></div>
                    <p className="text-white/90">Open to full-time software engineering roles starting December 2025</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#C278F8] mt-2"></div>
                    <p className="text-white/90">Currently upskilling in cloud technologies, containerization (Docker), and orchestration (Kubernetes)</p>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}