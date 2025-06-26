import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Phone, MapPin, Send } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: (data: typeof formData) =>
      apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please check your form data and try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Pankajkrdev04@gmail.com",
      href: "mailto:Pankajkrdev04@gmail.com",
      color: "bg-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/pankajkr-dev",
      href: "https://linkedin.com/in/pankajkr-dev",
      color: "bg-blue-600"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8210394962",
      href: "tel:+918210394962",
      color: "bg-green-600"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gurugram, India",
      href: null,
      color: "bg-red-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-green-500 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Let's discuss how I can help bring your ideas to life with scalable backend solutions and innovative development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 slide-in-left">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you need backend development, API integration, or full-stack solutions, let's talk!
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center group">
                  <div className={`w-14 h-14 ${info.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-300 relative`}>
                    <div className="absolute inset-0 bg-white/20 rounded-xl blur-md group-hover:bg-white/30 transition-colors duration-300"></div>
                    <info.icon className="w-6 h-6 text-white relative z-10" />
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href} 
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-gray-900 dark:text-white font-semibold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-900 dark:text-white font-semibold">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="slide-in-right">
            <Card className="border-0 card-3d group relative overflow-hidden">
              {/* Animated border */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-lg blur-sm"></div>
                <div className="absolute inset-[2px] bg-white dark:bg-gray-800 rounded-lg"></div>
              </div>
              
              <CardContent className="p-8 relative z-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      disabled={contactMutation.isPending}
                      className="mt-2 border-2 border-gray-200 dark:border-gray-600 focus:border-primary dark:focus:border-primary transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-500"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      disabled={contactMutation.isPending}
                      className="mt-2 border-2 border-gray-200 dark:border-gray-600 focus:border-primary dark:focus:border-primary transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-500"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-gray-700 dark:text-gray-300">Subject</Label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Project Discussion"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      required
                      disabled={contactMutation.isPending}
                      className="mt-2 border-2 border-gray-200 dark:border-gray-600 focus:border-primary dark:focus:border-primary transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-500"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">Message</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      disabled={contactMutation.isPending}
                      className="resize-none mt-2 border-2 border-gray-200 dark:border-gray-600 focus:border-primary dark:focus:border-primary transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-500"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
