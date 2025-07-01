import { Button } from "@/components/ui/button";
import { User, Code2, Database, Cloud } from "lucide-react";
import ParticleSystem from "./ParticleSystem";
import profilePic from "../assets/profile.jpeg";

export default function HeroSection() {
  const handleGetInTouch = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleViewProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="gradient-bg text-white min-h-screen flex items-center relative overflow-hidden">
      <ParticleSystem />
      
      {/* Floating 3D Elements */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        <div className="floating-animation absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center">
          <Code2 className="w-8 h-8 text-white/60" />
        </div>
        <div className="floating-animation absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center">
          <Database className="w-6 h-6 text-white/60" />
        </div>
        <div className="floating-animation absolute bottom-40 left-20 w-24 h-24 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
          <Cloud className="w-10 h-10 text-white/60" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative" style={{ zIndex: 3 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="slide-in-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Pankaj Kumar
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-200 mb-6 font-medium">
              Python Backend Developer
            </h2>
            {/* <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Results-driven Software Developer with 3+ years of experience in Python, Django and FastAPI development, 
              passionate about building scalable and innovative solutions through microservices and cloud technologies.
            </p> */}
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              As a Python developer with 3+ years of hands-on experience, I thrive at the intersection of creativity and problem-solving. My journey has taken me from building enterprise-grade APIs with FastAPI and Django to designing intuitive frontends with React—always with a focus on performance, security, and scalability. Whether it’s optimizing PostgreSQL queries for lightning-fast reporting or architecting microservices that handle real-world complexity, I love turning technical challenges into seamless user experiences. Cloud-native development (AWS) and clean, maintainable code are my trademarks, but what really drives me is collaborating with teams to build tools that make an impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleGetInTouch}
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Get In Touch
              </Button>
              <Button
                onClick={handleViewProjects}
                variant="outline"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 glow-effect"
              >
                View Projects
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end slide-in-right">
            <div className="relative">
              <div className="bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 tilt-3d group overflow-hidden">
      <div className="text-center relative">
        <img
          src={profilePic}
          alt="AI Professional Photo"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          style={{ minWidth: '256px', minHeight: '256px' }} // Adjust size as needed
        />
      </div>
    </div>
    
    {/* Glowing orbs */}
    <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400/50 rounded-full blur-sm animate-pulse"></div>
    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400/50 rounded-full blur-sm animate-pulse"></div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}
