import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Experience() {
  const experiences = [
    {
      title: "Node.js Developer",
      company: "Takeleap Tech Pvt Ltd",
      date: "February 2024 – July 2024",
      description: "Developed and optimized APIs using Node.js, integrated biometric MFA, and created front-end React screens.",
    },
    {
      title: "Associate Officer - Digital",
      company: "RPG Groups, KEC International",
      date: "June 2023 – February 2024",
      description: "Developed workforce management systems using ASP.NET and SQL Server, enhanced UI/UX using React.",
    },
    {
      title: "Junior Software Engineer",
      company: "RPG Groups, Zensar Technologies",
      date: "November 2022 – June 2023",
      description: "Built modular single-page applications using React and Redux, adopted TDD and Agile methodologies.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900">
      <div className="container mx-auto px-6">
        <h2 className="font-poppins text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Professional Journey</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-none hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
              <CardHeader>
                <h3 className="font-poppins text-2xl font-semibold text-purple-300">{exp.title}</h3>
                <p className="text-sm text-gray-400">{exp.company} | {exp.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}