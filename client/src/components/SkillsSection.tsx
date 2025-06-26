import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Database, Palette, Wrench } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: Server,
      title: "Backend",
      skills: ["Python", "Django", "FastAPI", "Flask", "RESTful APIs"],
      colorClass: "bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300",
      gradient: "from-blue-500 to-indigo-600",
      bgPattern: "bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900"
    },
    {
      icon: Database,
      title: "Database",
      skills: ["PostgreSQL", "SQL", "NoSQL", "SQLAlchemy"],
      colorClass: "bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900 dark:text-green-300",
      gradient: "from-green-500 to-emerald-600",
      bgPattern: "bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900"
    },
    {
      icon: Palette,
      title: "Frontend",
      skills: ["React.js", "JavaScript", "HTML/CSS", "Tailwind CSS"],
      colorClass: "bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-300",
      gradient: "from-purple-500 to-pink-600",
      bgPattern: "bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-50 to-pink-100 dark:from-purple-950 dark:to-pink-900"
    },
    {
      icon: Wrench,
      title: "Tools & Cloud",
      skills: ["AWS", "Git", "Linux", "Docker", "Microservices"],
      colorClass: "bg-orange-100 text-orange-700 hover:bg-orange-200 dark:bg-orange-900 dark:text-orange-300",
      gradient: "from-orange-500 to-red-600",
      bgPattern: "bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-orange-50 to-red-100 dark:from-orange-950 dark:to-red-900"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-green-500 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Comprehensive expertise across the full technology stack, from backend architecture to modern frontend frameworks
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className={`group relative overflow-hidden border-0 card-3d ${category.bgPattern}`}>
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-lg blur-sm`}></div>
                <div className="absolute inset-[1px] bg-white dark:bg-gray-800 rounded-lg"></div>
              </div>
              
              <div className="relative z-10">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-lg">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {category.title}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className={`${category.colorClass} transition-all duration-300 hover:scale-105 cursor-default border border-transparent hover:border-current`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </div>
              
              {/* Floating particles on hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping animation-delay-500"></div>
                <div className="absolute top-1/2 left-4 w-1 h-1 bg-green-400 rounded-full animate-ping animation-delay-1000"></div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
