
import { ArrowRight, Play, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-24 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8 hover:bg-white/15 transition-all duration-300">
            <Sparkles className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-medium text-white/90">Growing Startup • Fresh Ideas • Quality Focus</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tight">
            Building the Future with
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              {" "}Smart Software Solutions
            </span>
          </h1>
          
          <p className="text-xl md:text-3xl text-white/90 mb-12 leading-relaxed font-light max-w-4xl mx-auto">
            We're a growing startup creating innovative software products that solve real problems. 
            Our small but passionate team builds quality solutions that make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              onClick={() => scrollToSection('contact')}
              className="group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-10 py-5 rounded-2xl hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center gap-3 text-xl font-bold relative overflow-hidden"
            >
              <span className="relative z-10">Start Your Project</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
            
            <button className="group flex items-center gap-3 text-white/90 hover:text-white transition-all duration-300 text-xl font-semibold">
              <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                <Play className="h-6 w-6" />
              </div>
              <span className="group-hover:translate-x-1 transition-transform duration-300">See Our Work</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="group bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/30 rounded-3xl p-8 hover:from-white/25 hover:to-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="text-5xl font-black text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">5+</div>
              <div className="text-white/90 text-lg font-medium">Products Built</div>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mt-4 group-hover:w-16 transition-all duration-300"></div>
            </div>
            
            <div className="group bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/30 rounded-3xl p-8 hover:from-white/25 hover:to-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="text-5xl font-black text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-white/90 text-lg font-medium">Client Satisfaction</div>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mt-4 group-hover:w-16 transition-all duration-300"></div>
            </div>
            
            <div className="group bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/30 rounded-3xl p-8 hover:from-white/25 hover:to-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="text-5xl font-black text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300">Fast</div>
              <div className="text-white/90 text-lg font-medium">Development</div>
              <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mt-4 group-hover:w-16 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
