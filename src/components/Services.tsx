
import { Code, Smartphone, Cloud, Database, Shield, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks like React, Next.js, and Node.js for optimal performance and user experience."
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android that engage users and drive business growth."
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions using AWS, Azure, and Google Cloud Platform."
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Robust database architecture and optimization for handling large-scale data with maximum efficiency and security."
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security audits and implementation of best practices to protect your applications and data."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed optimization and performance tuning to ensure your applications run at peak efficiency."
    }
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We offer comprehensive software development services to help your business thrive in the digital age
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-2xl w-fit mb-6 group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-white/80 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
