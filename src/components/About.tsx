import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="font-poppins text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">About Me</h2>
        <Card className="bg-white/10 backdrop-blur-md border-none">
          <CardContent className="p-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate Full Stack Developer with a Master's in Information Technology from the University of North Carolina at Charlotte. With a keen eye for detail and a love for solving complex problems, I strive to create efficient and user-friendly web solutions that make a difference.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              My journey in tech has equipped me with a diverse skill set, from front-end technologies like React and Next.js to back-end solutions using Node.js and ASP.NET. I'm always excited to take on new challenges and push the boundaries of what's possible in web development.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}