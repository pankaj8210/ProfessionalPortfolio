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
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Let's discuss how I can help bring your ideas to life with scalable backend solutions and innovative development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you need backend development, API integration, or full-stack solutions, let's talk!
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-12 h-12 ${info.color} rounded-lg flex items-center justify-center mr-4`}>
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href} 
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-gray-900 font-semibold hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-900 font-semibold">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    disabled={contactMutation.isPending}
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    disabled={contactMutation.isPending}
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Project Discussion"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    required
                    disabled={contactMutation.isPending}
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    required
                    disabled={contactMutation.isPending}
                    className="resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
