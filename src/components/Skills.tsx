import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express",
    "ASP.NET", "SQL Server", "MongoDB", "AWS", "Git",
    "HTML5", "CSS3", "Sass", "Tailwind CSS", "Redux", "GraphQL",
    "Jest", "Cypress", "Webpack", "Babel", "RESTful APIs", "Agile Methodologies", "Docker","Kubernetes", "Linux", "Bootstrap", "Material UI", "C", "C++", "Python"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900">
      <div className="container mx-auto px-6">
        <h2 className="font-poppins text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Technical Expertise</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-md px-4 py-2 bg-white/20 hover:bg-white/30 transition-colors duration-300">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}