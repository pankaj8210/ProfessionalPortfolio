import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, University } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      degree: "Master of Computer Application",
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      year: "2021",
      icon: GraduationCap,
      color: "bg-primary"
    },
    {
      degree: "Bachelor of Computer Application",
      institution: "Ranchi University",
      location: "Ranchi, Jharkhand",
      year: "2021",
      icon: University,
      color: "bg-secondary"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 w-56 h-56 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse animation-delay-1500"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Academic foundation in computer science and application development
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <Card key={index} className="border-0 card-3d group relative overflow-hidden">
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-0 ${
                  edu.color === 'bg-primary' ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gradient-to-r from-indigo-500 to-blue-600'
                } rounded-lg blur-sm`}></div>
                <div className="absolute inset-[2px] bg-white dark:bg-gray-800 rounded-lg"></div>
              </div>

              <CardContent className="p-8 relative z-10">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 ${
                    edu.color === 'bg-primary' ? 'bg-gradient-to-br from-blue-500 to-purple-600' : 'bg-gradient-to-br from-indigo-500 to-blue-600'
                  } rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 relative`}>
                    <div className="absolute inset-0 bg-white/20 rounded-xl blur-md group-hover:bg-white/30 transition-colors duration-300"></div>
                    <edu.icon className="w-8 h-8 text-white relative z-10" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {edu.degree}
                    </h3>
                    <p className={`font-semibold text-lg ${
                      edu.color === 'bg-primary' ? 'text-primary' : 'text-indigo-600 dark:text-indigo-400'
                    }`}>
                      {edu.institution}
                    </p>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 dark:border-gray-600 pt-6">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-600 dark:text-gray-300 font-medium">{edu.location}</span>
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={`${
                        edu.color === 'bg-primary' 
                          ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-primary border-primary/20' 
                          : 'bg-gradient-to-r from-indigo-500/10 to-blue-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20'
                      } px-4 py-2 font-semibold shadow-lg group-hover:scale-105 transition-transform duration-300`}
                    >
                      {edu.year}
                    </Badge>
                  </div>
                </div>

                {/* Floating particles on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping animation-delay-500"></div>
                  <div className="absolute top-1/2 right-6 w-1 h-1 bg-green-400 rounded-full animate-ping animation-delay-1000"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
