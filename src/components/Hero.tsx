
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Build the Future with
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Cutting-Edge Software
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
            We create innovative software solutions that transform businesses and drive growth. 
            From web applications to mobile apps, we bring your ideas to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center gap-2 text-lg font-semibold"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5" />
            </button>
            
            <button className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-200 text-lg">
              <div className="bg-white/20 p-3 rounded-full">
                <Play className="h-5 w-5" />
              </div>
              Watch Demo
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-white/80">Projects Completed</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl font-bold text-purple-400 mb-2">99%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-white/80">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
