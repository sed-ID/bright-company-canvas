
import { useState } from "react";
import { Menu, X, Code } from "lucide-react";

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
    <header className="fixed w-full top-0 z-50 bg-green-800/90 backdrop-blur-lg border-b border-lime-400/30 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="bg-gradient-to-r from-lime-400 to-green-400 p-2.5 rounded-xl group-hover:scale-105 transition-transform duration-200">
              <Code className="h-7 w-7 text-green-900" />
            </div>
            <span className="text-2xl font-bold text-white">Benubina</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-lime-300 transition-colors duration-200 font-medium relative group"
            >
              Home
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-400 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-lime-300 transition-colors duration-200 font-medium relative group"
            >
              Services
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-400 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-lime-300 transition-colors duration-200 font-medium relative group"
            >
              About
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-400 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-lime-300 transition-colors duration-200 font-medium relative group"
            >
              Contact
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-400 group-hover:w-full transition-all duration-300"></div>
            </button>
          </nav>

          <button 
            className="md:hidden text-white hover:scale-105 transition-transform duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4 bg-green-800/95 backdrop-blur-lg rounded-xl p-6 border border-lime-400/30 shadow-lg">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-lime-300 transition-colors duration-200 text-left font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-lime-300 transition-colors duration-200 text-left font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-lime-300 transition-colors duration-200 text-left font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-lime-300 transition-colors duration-200 text-left font-medium"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
