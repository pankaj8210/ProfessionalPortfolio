import { Card, CardContent } from "@/components/ui/card";
import { Code, Server, Cloud, Database } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: "Backend Development",
      description: "Expert in Python, Django, FastAPI, and PostgreSQL"
    },
    {
      icon: Server,
      title: "API Integration",
      description: "RESTful APIs, microservices, and secure authentication"
    },
    {
      icon: Cloud,
      title: "Cloud Technologies",
      description: "AWS deployment and cloud-based solutions"
    },
    {
      icon: Database,
      title: "Database Design",
      description: "PostgreSQL optimization and schema design"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Passionate Backend Developer</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a results-driven Software Developer with over 3 years of experience specializing in Python, Django, and FastAPI development. 
              My expertise spans full-stack development, backend architecture, and API integration, with a focus on building scalable and innovative solutions.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm passionate about optimizing workflows through scripting, implementing microservices architecture, and leveraging cloud technologies like AWS. 
              My goal is to contribute to dynamic teams by delivering high-performance applications and robust data-driven tools.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-4">
                <CardContent className="pt-4">
                  <div className="text-2xl font-bold text-primary mb-2">3+</div>
                  <div className="text-gray-600 text-sm">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardContent className="pt-4">
                  <div className="text-2xl font-bold text-primary mb-2">100+</div>
                  <div className="text-gray-600 text-sm">APIs Built</div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                <CardContent className="pt-0">
                  <highlight.icon className="w-8 h-8 text-primary mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                  <p className="text-gray-600 text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
