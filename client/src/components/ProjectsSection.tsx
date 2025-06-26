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
      gradient: "from-blue-500 to-purple-600",
      features: ["Real-time Analytics", "RESTful APIs", "Cloud Deployment"]
    },
    {
      title: "Dynamic Profile Integration",
      description: "Django-based system integrating Humantic AI APIs to fetch and store LinkedIn profile data with automated personality traits and demographic analysis.",
      tech: ["Python", "Django", "PostgreSQL", "REST API"],
      type: "AI Integration",
      icon: Linkedin,
      gradient: "from-blue-600 to-blue-800",
      features: ["AI Integration", "Data Extraction", "Profile Analytics"]
    },
    {
      title: "ETL Discovery AI Tool",
      description: "Open-source ETL tool designed as core engine for automating data pipelines, streamlining extraction, transformation, and loading processes.",
      tech: ["Python", "PostgreSQL", "OpenAI", "Streamlit", "Flask"],
      type: "Open Source",
      icon: Settings,
      gradient: "from-green-500 to-teal-600",
      features: ["Data Pipelines", "OpenAI Agent", "Automation"]
    },
    {
      title: "Database ETL Discovery Tool",
      description: "Comprehensive solution for SQL and Oracle database discovery and exploration, facilitating efficient reading, extraction, and fine-tuning.",
      tech: ["Python", "Django", "SQL", "NoSQL", "Streamlit"],
      type: "Database Tool",
      icon: Database,
      gradient: "from-indigo-500 to-purple-600",
      features: ["Database Discovery", "SQL Agent", "Data Exploration"]
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
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Explore my portfolio of innovative solutions spanning enterprise applications, AI integration, and open-source tools
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-0 card-3d group relative">
              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-lg blur-sm`}></div>
                <div className="absolute inset-[2px] bg-white dark:bg-gray-800 rounded-lg"></div>
              </div>

              <div className="relative z-10">
                {/* Enhanced Project Header */}
                <div className={`h-56 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  {/* Floating particles */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-white/60 rounded-full animate-ping"></div>
                  <div className="absolute top-8 right-12 w-1.5 h-1.5 bg-white/40 rounded-full animate-ping animation-delay-1000"></div>
                  <div className="absolute top-12 right-8 w-1 h-1 bg-white/60 rounded-full animate-ping animation-delay-2000"></div>
                  
                  {/* Project icon with animation */}
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/20 rounded-xl blur-md group-hover:bg-white/30 transition-colors duration-300"></div>
                      <div className="relative w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                        <project.icon className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Project type badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white border border-white/30">
                      {project.type}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  {/* Key features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-600"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className={`${techColors[tech] || "bg-gray-100 text-gray-700"} transition-all duration-300 hover:scale-105`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Production Ready</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-blue-700 group-hover:scale-105 transition-transform duration-300">
                      View Details <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
