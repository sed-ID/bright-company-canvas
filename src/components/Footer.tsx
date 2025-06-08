
import { Code, Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Code className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold text-foreground">Benubina</span>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Delivering innovative software solutions, AI integration, and data engineering services that transform businesses.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-card p-3 rounded-lg hover:bg-accent/10 transition-colors duration-200">
                <Github className="h-5 w-5 text-foreground" />
              </a>
              <a href="#" className="bg-card p-3 rounded-lg hover:bg-accent/10 transition-colors duration-200">
                <Twitter className="h-5 w-5 text-foreground" />
              </a>
              <a href="#" className="bg-card p-3 rounded-lg hover:bg-accent/10 transition-colors duration-200">
                <Linkedin className="h-5 w-5 text-foreground" />
              </a>
              <a href="#" className="bg-card p-3 rounded-lg hover:bg-accent/10 transition-colors duration-200">
                <Mail className="h-5 w-5 text-foreground" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Software Solutions</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">AI & Automation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Data & Insights</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Mobile Development</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Cloud Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  About Us
                </button>
              </li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Case Studies</a></li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">API Reference</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Support Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground mb-4 md:mb-0">
              © 2024 Benubina. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Privacy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Terms</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
