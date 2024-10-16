import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "FlashType",
      tech: "React, Redux, Jest",
      description: "A typing speed test web app with dynamic UI updates and comprehensive testing.",
      github: "https://github.com/yourusername/flashtype",
      live: "https://flashtype-demo.vercel.app",
    },
    {
      title: "Ticket Harbor",
      tech: "React, Express, Node.js, Next.js",
      description: "Full-stack ticketing platform with server-side rendering and RESTful APIs for booking management.",
      github: "https://github.com/yourusername/ticket-harbor",
      live: "https://ticket-harbor-demo.vercel.app",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="font-poppins text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-none hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
              <CardHeader>
                <h3 className="font-poppins text-2xl font-semibold text-purple-300">{project.title}</h3>
                <p className="text-sm text-gray-400">{project.tech}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}