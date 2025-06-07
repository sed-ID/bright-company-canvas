
import { Code, Smartphone, Cloud, Database, Shield, Zap, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks like React, Next.js, and Node.js for optimal performance and user experience.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android that engage users and drive business growth.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions using AWS, Azure, and Google Cloud Platform.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Robust database architecture and optimization for handling large-scale data with maximum efficiency and security.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security audits and implementation of best practices to protect your applications and data.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed optimization and performance tuning to ensure your applications run at peak efficiency.",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="services" className="py-24 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-medium text-white/90">What We Do</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
            Our Services
          </h2>
          <p className="text-2xl text-white/90 max-w-4xl mx-auto font-light leading-relaxed">
            We offer comprehensive software development services to help your business thrive in the digital age
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/30 rounded-3xl p-8 hover:from-white/25 hover:to-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/10 relative overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-3xl`}></div>
              
              <div className={`bg-gradient-to-r ${service.gradient} p-4 rounded-2xl w-fit mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-white/80 transition-all duration-300 relative z-10">
                {service.title}
              </h3>
              
              <p className="text-white/80 leading-relaxed text-lg group-hover:text-white/90 transition-colors duration-300 relative z-10">
                {service.description}
              </p>
              
              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.gradient} w-0 group-hover:w-full transition-all duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
