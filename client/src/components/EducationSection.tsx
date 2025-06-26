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
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${edu.color} rounded-lg flex items-center justify-center mr-4`}>
                    <edu.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                    <p className={`font-semibold ${edu.color === 'bg-primary' ? 'text-primary' : 'text-secondary'}`}>
                      {edu.institution}
                    </p>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">{edu.location}</span>
                    <Badge 
                      variant="secondary" 
                      className={`${edu.color === 'bg-primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}
                    >
                      {edu.year}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
