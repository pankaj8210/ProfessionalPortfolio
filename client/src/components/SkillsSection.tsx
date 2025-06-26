import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Database, Palette, Wrench } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: Server,
      title: "Backend",
      skills: ["Python", "Django", "FastAPI", "Flask", "RESTful APIs"],
      colorClass: "bg-blue-100 text-blue-700"
    },
    {
      icon: Database,
      title: "Database",
      skills: ["PostgreSQL", "SQL", "NoSQL", "SQLAlchemy"],
      colorClass: "bg-green-100 text-green-700"
    },
    {
      icon: Palette,
      title: "Frontend",
      skills: ["React.js", "JavaScript", "HTML/CSS", "Tailwind CSS"],
      colorClass: "bg-purple-100 text-purple-700"
    },
    {
      icon: Wrench,
      title: "Tools & Cloud",
      skills: ["AWS", "Git", "Linux", "Docker", "Microservices"],
      colorClass: "bg-orange-100 text-orange-700"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <category.icon className="w-5 h-5 text-primary mr-2" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className={category.colorClass}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
