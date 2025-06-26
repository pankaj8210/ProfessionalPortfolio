import { Button } from "@/components/ui/button";
import { User, Code2, Database, Cloud } from "lucide-react";
import ParticleSystem from "./ParticleSystem";

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
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Results-driven Software Developer with 3+ years of experience in Python, Django and FastAPI development, 
              passionate about building scalable and innovative solutions through microservices and cloud technologies.
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
              {/* 3D Profile Container */}
              <div className="w-80 h-80 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 tilt-3d group">
                <div className="text-center relative">
                  {/* Animated rings around profile */}
                  <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-pulse"></div>
                  <div className="absolute inset-4 rounded-full border border-blue-300/40 animate-ping"></div>
                  
                  <User className="w-24 h-24 text-white/60 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
                  <p className="text-white/80 text-sm">Professional Photo</p>
                  
                  {/* Tech stack badges floating around */}
                  <div className="absolute -top-6 -left-6 bg-blue-500/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs border border-blue-300/30 floating-animation">
                    Python
                  </div>
                  <div className="absolute -top-4 -right-8 bg-purple-500/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs border border-purple-300/30 floating-animation">
                    Django
                  </div>
                  <div className="absolute -bottom-6 -left-4 bg-green-500/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs border border-green-300/30 floating-animation">
                    FastAPI
                  </div>
                  <div className="absolute -bottom-4 -right-6 bg-orange-500/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs border border-orange-300/30 floating-animation">
                    AWS
                  </div>
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
