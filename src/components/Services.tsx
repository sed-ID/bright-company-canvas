
import { Code, Smartphone, Database, Bot, BarChart3, Zap, Sparkles, Cloud, Palette, Cog } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Software Solutions",
      description: "Custom-built web and mobile apps that power your business.",
      subservices: [
        "Web Application Development (React, Node.js, Django, etc.)",
        "Mobile App Development (iOS, Android, Flutter, React Native)",
        "API Design & Integration",
        "UI/UX Design & Prototyping",
        "Cloud Deployment & DevOps (AWS, GCP, Docker, CI/CD)"
      ]
    },
    {
      icon: Bot,
      title: "AI & Automation",
      description: "Infuse intelligence into your products and workflows.",
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
      description: "Unlock the value of your data with engineering and analytics.",
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
    <section id="services" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">What We Do</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive software development services to help your business thrive in the digital age
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              <div className="bg-accent/10 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform duration-200">
                <service.icon className="h-6 w-6 text-accent" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-accent mb-3">Services Include:</h4>
                {service.subservices.map((subservice, subIndex) => (
                  <div key={subIndex} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm leading-relaxed">{subservice}</span>
                  </div>
                ))}
              </div>
              
              {/* Subtle accent line */}
              <div className="absolute bottom-0 left-0 h-1 bg-accent w-0 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
