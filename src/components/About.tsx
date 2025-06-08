
import { Users, Award, Target, Lightbulb, Sparkles } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Focus-Driven",
      description: "We focus on delivering high-quality solutions that solve real business problems.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We're quick to adopt new technologies and cutting-edge approaches to development.",
    },
    {
      icon: Users,
      title: "Personal Touch",
      description: "Our dedicated team provides direct access and personalized service for every project.",
    },
    {
      icon: Award,
      title: "Quality Focus",
      description: "We never compromise on code quality, user experience, and project delivery standards.",
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Our Story</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About 
              <span className="gradient-text"> Benubina</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              We're a focused software development company passionate about creating 
              innovative solutions that transform businesses and drive growth.
            </p>
            
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Our team specializes in modern software development, AI integration, and data 
              engineering. We bring fresh perspectives, cutting-edge technologies, and genuine 
              enthusiasm to every project we undertake.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <div className="text-muted-foreground font-medium">Core Services</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground font-medium">Technologies</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-accent/10 p-3 rounded-lg w-fit mb-4">
                  <value.icon className="h-5 w-5 text-accent" />
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
