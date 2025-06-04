
import { Users, Award, Target, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Focus-Driven",
      description: "We focus on building a few great products rather than many average ones."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "As a startup, we're agile and quick to adopt new technologies and approaches."
    },
    {
      icon: Users,
      title: "Personal Touch",
      description: "Our small team means you get direct access to the people building your product."
    },
    {
      icon: Award,
      title: "Quality Focus",
      description: "We may be small, but we don't compromise on code quality and user experience."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-black/20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About TechFlow
            </h2>
            
            <p className="text-xl text-white/80 mb-6 leading-relaxed">
              We're a young startup founded in 2023, passionate about creating software 
              products that solve real problems for real people.
            </p>
            
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Our small but dedicated team believes in quality over quantity. We've built 
              several successful products and are constantly learning and growing. We may not 
              have decades of experience, but we bring fresh perspectives, modern technologies, 
              and genuine enthusiasm to every project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-blue-400 mb-1">8</div>
                <div className="text-white/80">Team Members</div>
              </div>
              
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-purple-400 mb-1">2</div>
                <div className="text-white/80">Years Growing</div>
              </div>
              
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-green-400 mb-1">5+</div>
                <div className="text-white/80">Products Launched</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl w-fit mb-4">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">
                  {value.title}
                </h3>
                
                <p className="text-white/70 text-sm leading-relaxed">
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
