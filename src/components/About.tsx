
import { Users, Award, Target, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to delivering exceptional software solutions that exceed expectations."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay ahead of technology trends to provide cutting-edge solutions for our clients."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our success. We work closely with you throughout the entire development process."
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "We maintain the highest standards of code quality and testing to ensure reliable software."
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
              Founded in 2020, TechFlow has been at the forefront of software innovation, 
              helping businesses transform their ideas into powerful digital solutions.
            </p>
            
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Our team of experienced developers, designers, and strategists work together 
              to create software that not only meets your current needs but scales with 
              your business growth. We believe in the power of technology to solve real-world 
              problems and drive meaningful change.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-blue-400 mb-1">50+</div>
                <div className="text-white/80">Team Members</div>
              </div>
              
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-purple-400 mb-1">4</div>
                <div className="text-white/80">Years of Excellence</div>
              </div>
              
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-green-400 mb-1">15+</div>
                <div className="text-white/80">Industries Served</div>
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
