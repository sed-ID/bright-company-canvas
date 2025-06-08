
import { ArrowRight, Play, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 px-6 relative bg-gradient-to-br from-green-600 via-lime-500 to-green-700">
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Professional Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-white" />
            <span className="text-sm font-medium text-white">Growing Startup • Quality Focus • Modern Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Building Smart Software
            <span className="block text-lime-200">
              Solutions That Scale
            </span>
          </h1>
          
          <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
            We're a growing startup with a focused approach to building quality software products. 
            Our small but passionate team delivers modern solutions that solve real business problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-green-800 px-8 py-4 rounded-lg hover:bg-lime-100 transition-all duration-200 transform hover:scale-105 flex items-center gap-3 text-lg font-semibold shadow-lg"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5" />
            </button>
            
            <button className="flex items-center gap-3 text-white hover:text-lime-200 transition-colors duration-200 text-lg font-medium">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg border border-white/30 hover:border-white/50 transition-colors duration-200">
                <Play className="h-5 w-5" />
              </div>
              View Our Work
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-6 hover:shadow-lg transition-all duration-200">
              <div className="text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-white/80 font-medium">Products Built</div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-6 hover:shadow-lg transition-all duration-200">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-white/80 font-medium">Client Satisfaction</div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-6 hover:shadow-lg transition-all duration-200">
              <div className="text-3xl font-bold text-white mb-2">Fast</div>
              <div className="text-white/80 font-medium">Development</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
