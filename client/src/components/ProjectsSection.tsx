import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3, Linkedin, Settings, Database, ArrowRight } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Lee Reporting",
      description: "Comprehensive employee performance and reporting system for real-time field force management, monitoring, and analysis with full-stack functionality.",
      tech: ["Python", "FastAPI", "PostgreSQL", "React", "AWS"],
      type: "Enterprise Application",
      icon: BarChart3,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Dynamic Profile Integration",
      description: "Django-based system integrating Humantic AI APIs to fetch and store LinkedIn profile data with automated personality traits and demographic analysis.",
      tech: ["Python", "Django", "PostgreSQL", "REST API"],
      type: "AI Integration",
      icon: Linkedin,
      gradient: "from-blue-600 to-blue-800"
    },
    {
      title: "ETL Discovery AI Tool",
      description: "Open-source ETL tool designed as core engine for automating data pipelines, streamlining extraction, transformation, and loading processes.",
      tech: ["Python", "PostgreSQL", "OpenAI", "Streamlit", "Flask"],
      type: "Open Source",
      icon: Settings,
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Database ETL Discovery Tool",
      description: "Comprehensive solution for SQL and Oracle database discovery and exploration, facilitating efficient reading, extraction, and fine-tuning.",
      tech: ["Python", "Django", "SQL", "NoSQL", "Streamlit"],
      type: "Database Tool",
      icon: Database,
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  const techColors: { [key: string]: string } = {
    "Python": "bg-blue-100 text-blue-700",
    "Django": "bg-green-100 text-green-700",
    "FastAPI": "bg-green-100 text-green-700",
    "PostgreSQL": "bg-purple-100 text-purple-700",
    "React": "bg-orange-100 text-orange-700",
    "AWS": "bg-gray-100 text-gray-700",
    "REST API": "bg-orange-100 text-orange-700",
    "OpenAI": "bg-purple-100 text-purple-700",
    "Streamlit": "bg-orange-100 text-orange-700",
    "Flask": "bg-gray-100 text-gray-700",
    "SQL": "bg-purple-100 text-purple-700",
    "NoSQL": "bg-orange-100 text-orange-700"
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
              {/* Project Header with Gradient */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <project.icon className="w-8 h-8" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className={techColors[tech] || "bg-gray-100 text-gray-700"}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{project.type}</span>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-blue-700">
                    View Details <ArrowRight className="w-4 h-4 ml-1" />
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
