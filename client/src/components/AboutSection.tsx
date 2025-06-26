import { Card, CardContent } from "@/components/ui/card";
import { Code, Server, Cloud, Database } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: "Backend Development",
      description: "Expert in Python, Django, FastAPI, and PostgreSQL",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Server,
      title: "API Integration",
      description: "RESTful APIs, microservices, and secure authentication",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: Cloud,
      title: "Cloud Technologies",
      description: "AWS deployment and cloud-based solutions",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Database,
      title: "Database Design",
      description: "PostgreSQL optimization and schema design",
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="slide-in-left">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Passionate Backend Developer</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a results-driven Software Developer with over 3 years of experience specializing in Python, Django, and FastAPI development. 
              My expertise spans full-stack development, backend architecture, and API integration, with a focus on building scalable and innovative solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm passionate about optimizing workflows through scripting, implementing microservices architecture, and leveraging cloud technologies like AWS. 
              My goal is to contribute to dynamic teams by delivering high-performance applications and robust data-driven tools.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-4 card-3d glow-effect">
                <CardContent className="pt-4">
                  <div className="text-3xl font-bold text-primary mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">3+</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4 card-3d glow-effect">
                <CardContent className="pt-4">
                  <div className="text-3xl font-bold text-primary mb-2 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">100+</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">APIs Built</div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 slide-in-right">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 card-3d group relative overflow-hidden border-0">
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-[2px] bg-white dark:bg-gray-800 rounded-lg"></div>
                
                <CardContent className="pt-0 relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${highlight.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors duration-300">{highlight.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
