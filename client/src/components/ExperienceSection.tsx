import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Backend Python Developer",
      company: "Leeford Healthcare LTD.",
      period: "Feb 2025 - Present",
      location: "Gurugram",
      current: true,
      achievements: [
        "Developed RESTful APIs using FastAPI for Lee Reporting system",
        "Optimized PostgreSQL schemas with complex joins and relationships", 
        "Built responsive React.js interfaces with custom components",
        "Implemented Agile methodology with regular code reviews"
      ]
    },
    {
      title: "Freelance Python Developer",
      company: "Self Employed",
      period: "Sep 2023 - Dec 2024",
      location: "Ranchi",
      current: false,
      achievements: [
        "Managed full project lifecycle increasing client satisfaction by 30%",
        "Built and maintained 100+ APIs with Django and Flask",
        "Implemented security features and user authentication",
        "Optimized application performance and code quality"
      ]
    },
    {
      title: "Software Engineer",
      company: "Orange Business Services",
      period: "Aug 2022 - Aug 2023",
      location: "Gurgaon",
      current: false,
      achievements: [
        "Automated network device monitoring processing 10,000+ data points weekly",
        "Transitioned Perl scripts to Python reducing manual work by 20 hours/week",
        "Developed Python plugins for enhanced data collection and analysis"
      ]
    },
    {
      title: "Software Developer",
      company: "Incite Gravity",
      period: "Jan 2022 - Jul 2022",
      location: "Gurgaon",
      current: false,
      achievements: [
        "Built dynamic web applications using HTML, CSS, JavaScript",
        "Developed backend solutions with Python and Django",
        "Enhanced skills in RESTful APIs and database integration"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gray-300"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-center">
                <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-white shadow ${
                  exp.current ? "bg-primary" : "bg-gray-400"
                }`}></div>
                
                <div className={`ml-12 md:ml-0 ${
                  index % 2 === 0 
                    ? "md:w-1/2 md:pr-8 md:text-right" 
                    : "md:w-1/2 md:pl-8 md:ml-auto"
                }`}>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className={`flex flex-col ${index % 2 === 0 ? "md:items-end" : ""}`}>
                        {exp.current && (
                          <Badge className="bg-primary text-white mb-2 inline-block w-fit">
                            Current
                          </Badge>
                        )}
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                        <p className="text-primary font-semibold mb-2">{exp.company}</p>
                        <p className="text-gray-600 text-sm mb-4">{exp.period} • {exp.location}</p>
                        <ul className="text-gray-600 text-sm space-y-2 list-disc list-inside">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
