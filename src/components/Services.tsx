
import { Code, Smartphone, Cloud, Database, Shield, Zap, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks like React, Next.js, and Node.js for optimal performance and user experience.",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android that engage users and drive business growth.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions using AWS, Azure, and Google Cloud Platform.",
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Robust database architecture and optimization for handling large-scale data with maximum efficiency and security.",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security audits and implementation of best practices to protect your applications and data.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed optimization and performance tuning to ensure your applications run at peak efficiency.",
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-green-700">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-white" />
            <span className="text-sm font-medium text-white">What We Do</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We offer comprehensive software development services to help your business thrive in the digital age
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white/10 border border-white/20 rounded-xl p-8 hover:border-white/40 hover:shadow-lg transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
            >
              <div className="bg-white p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform duration-200">
                <service.icon className="h-6 w-6 text-green-700" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-white/80 leading-relaxed">
                {service.description}
              </p>
              
              {/* Subtle accent line */}
              <div className="absolute bottom-0 left-0 h-1 bg-lime-400 w-0 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
