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
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            A journey through innovative projects and impactful contributions across diverse technology landscapes
          </p>
        </div>
        <div className="relative">
          {/* Enhanced Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full shadow-lg"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-center">
                {/* Enhanced timeline dot */}
                <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10 ${
                  exp.current 
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse" 
                    : "bg-gradient-to-r from-gray-400 to-gray-500"
                }`}>
                  <div className={`absolute inset-2 rounded-full ${
                    exp.current ? "bg-white animate-ping" : "bg-white/50"
                  }`}></div>
                </div>
                
                <div className={`ml-16 md:ml-0 ${
                  index % 2 === 0 
                    ? "md:w-1/2 md:pr-8 md:text-right" 
                    : "md:w-1/2 md:pl-8 md:ml-auto"
                }`}>
                  <Card className={`border-0 card-3d group relative overflow-hidden ${
                    index % 2 === 0 ? "slide-in-left" : "slide-in-right"
                  }`}>
                    {/* Animated border effect */}
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className={`absolute inset-0 bg-gradient-to-r ${
                        exp.current ? "from-blue-500 to-purple-600" : "from-gray-400 to-gray-600"
                      } rounded-lg blur-sm`}></div>
                      <div className="absolute inset-[2px] bg-white dark:bg-gray-800 rounded-lg"></div>
                    </div>

                    <CardContent className="p-6 relative z-10">
                      <div className={`flex flex-col ${index % 2 === 0 ? "md:items-end" : ""}`}>
                        {exp.current && (
                          <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-3 inline-block w-fit shadow-lg animate-pulse">
                            Current Position
                          </Badge>
                        )}
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-semibold mb-2 text-lg">{exp.company}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 font-medium">{exp.period} • {exp.location}</p>
                        <ul className={`text-gray-600 dark:text-gray-300 text-sm space-y-3 ${
                          index % 2 === 0 ? "md:text-right" : ""
                        }`}>
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start space-x-2 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>

                    {/* Floating particles on hover */}
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                      <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping animation-delay-500"></div>
                      <div className="absolute top-1/2 left-4 w-1 h-1 bg-green-400 rounded-full animate-ping animation-delay-1000"></div>
                    </div>
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
