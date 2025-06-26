import { Mail, Linkedin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Pankaj Kumar</h3>
          <p className="text-gray-400 mb-6">Python Backend Developer • Building Scalable Solutions</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="mailto:Pankajkrdev04@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/pankajkr-dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="tel:+918210394962" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              © 2025 Pankaj Kumar. Built with passion for clean code and scalable solutions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
