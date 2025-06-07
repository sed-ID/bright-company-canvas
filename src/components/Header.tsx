
import { useState } from "react";
import { Menu, X, Code, Sparkles } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <Code className="h-8 w-8 text-white" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-black text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">TechFlow</span>
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 px-2 py-1 rounded-full">
                <span className="text-xs font-bold text-black">STARTUP</span>
              </div>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white/80 hover:text-white hover:scale-105 transition-all duration-200 font-medium text-lg relative group"
            >
              Home
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white/80 hover:text-white hover:scale-105 transition-all duration-200 font-medium text-lg relative group"
            >
              Services
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white/80 hover:text-white hover:scale-105 transition-all duration-200 font-medium text-lg relative group"
            >
              About
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white/80 hover:text-white hover:scale-105 transition-all duration-200 font-medium text-lg relative group"
            >
              Contact
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25 font-bold text-lg relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <Sparkles className="h-4 w-4" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </nav>

          <button 
            className="md:hidden text-white hover:scale-110 transition-all duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden mt-6 pb-6 animate-fade-in">
            <div className="flex flex-col space-y-6 bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white/80 hover:text-white transition-colors duration-200 text-left font-medium text-lg"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white/80 hover:text-white transition-colors duration-200 text-left font-medium text-lg"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white/80 hover:text-white transition-colors duration-200 text-left font-medium text-lg"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white/80 hover:text-white transition-colors duration-200 text-left font-medium text-lg"
              >
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 w-fit font-bold flex items-center gap-2"
              >
                Get Started
                <Sparkles className="h-4 w-4" />
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
