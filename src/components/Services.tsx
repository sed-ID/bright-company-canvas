
import { Code, Smartphone, Cloud, Database, Shield, Zap, Sparkles, Bot, BarChart3 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Software Solutions",
      description: "Custom-built web and mobile apps that power your business with modern frameworks and cutting-edge technologies.",
      subservices: [
        "Web Application Development (React, Node.js, Django)",
        "Mobile App Development (iOS, Android, Flutter, React Native)",
        "API Design & Integration",
        "UI/UX Design & Prototyping",
        "Cloud Deployment & DevOps (AWS, GCP, Docker, CI/CD)"
      ]
    },
    {
      icon: Bot,
      title: "AI & Automation",
      description: "Infuse intelligence into your products and workflows with advanced AI solutions and automation systems.",
      subservices: [
        "AI Integration into Existing Applications",
        "Custom AI Model Development (NLP, CV, LLMs)",
        "Agentic AI Systems (RAG pipelines, autonomous agents)",
        "Chatbots & Virtual Assistants",
        "Automated Workflows for Support, Search, and Insights"
      ]
    },
    {
      icon: BarChart3,
      title: "Data & Insights",
      description: "Unlock the value of your data with engineering and analytics solutions that drive business decisions.",
      subservices: [
        "ETL Pipeline Development & Automation",
        "Data Engineering (Warehousing, Orchestration)",
        "Data Analytics & BI Dashboards",
        "Data Science & Predictive Modeling",
        "Data Strategy & Consultation"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-700">What We Do</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We offer comprehensive software development services to help your business thrive in the digital age
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white border border-slate-200 rounded-xl p-8 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform duration-200">
                <service.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                {service.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-emerald-600 mb-3">Key Services:</h4>
                <ul className="space-y-2">
                  {service.subservices.map((subservice, subIndex) => (
                    <li key={subIndex} className="text-sm text-slate-600 flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">•</span>
                      {subservice}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Subtle accent line */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-500 to-green-600 w-0 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
