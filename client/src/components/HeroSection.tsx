import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

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
    <section id="home" className="gradient-bg text-white min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
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
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get In Touch
              </Button>
              <Button
                onClick={handleViewProjects}
                variant="outline"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                View Projects
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
              <div className="text-center">
                <User className="w-24 h-24 text-white/60 mx-auto mb-4" />
                <p className="text-white/80 text-sm">Professional Photo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
