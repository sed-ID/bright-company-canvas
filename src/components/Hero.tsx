
import { ArrowRight, Play, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 px-6 relative bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Professional Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Software Solutions • AI & Automation • Data & Insights</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Building Smart Software
            <span className="block gradient-text">
              Solutions That Scale
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
            We specialize in custom software development, AI integration, and data engineering solutions. 
            Our team delivers modern applications that solve real business problems with cutting-edge technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-200 transform hover:scale-105 flex items-center gap-3 text-lg font-semibold shadow-lg"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5" />
            </button>
            
            <button className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-200 text-lg font-medium">
              <div className="bg-accent/10 backdrop-blur-sm p-3 rounded-lg border border-accent/20 hover:border-accent/40 transition-colors duration-200">
                <Play className="h-5 w-5 text-accent" />
              </div>
              View Our Work
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-200">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-muted-foreground font-medium">Core Services</div>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-200">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground font-medium">Client Satisfaction</div>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-200">
              <div className="text-3xl font-bold text-primary mb-2">Fast</div>
              <div className="text-muted-foreground font-medium">Development</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
