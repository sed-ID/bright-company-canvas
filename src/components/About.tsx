
import { Users, Award, Target, Lightbulb, Sparkles, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Focus-Driven",
      description: "We focus on building a few great products rather than many average ones.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "As a startup, we're agile and quick to adopt new technologies and approaches.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Personal Touch",
      description: "Our small team means you get direct access to the people building your product.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      title: "Quality Focus",
      description: "We may be small, but we don't compromise on code quality and user experience.",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-br from-black/30 to-black/10 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
              <Sparkles className="h-4 w-4 text-yellow-400" />
              <span className="text-sm font-medium text-white/90">Our Story</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
              About 
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">TechFlow</span>
            </h2>
            
            <p className="text-2xl text-white/90 mb-8 leading-relaxed font-light">
              We're a young startup founded in 2023, passionate about creating software 
              products that solve real problems for real people.
            </p>
            
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              Our small but dedicated team believes in quality over quantity. We've built 
              several successful products and are constantly learning and growing. We may not 
              have decades of experience, but we bring fresh perspectives, modern technologies, 
              and genuine enthusiasm to every project.
            </p>
            
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="text-4xl font-black text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">8</div>
                <div className="text-white/80 font-medium">Team Members</div>
                <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mt-2 group-hover:from-blue-300 group-hover:to-blue-500 transition-all duration-300"></div>
              </div>
              
              <div className="text-center group">
                <div className="text-4xl font-black text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">2</div>
                <div className="text-white/80 font-medium">Years Growing</div>
                <div className="w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mt-2 group-hover:from-purple-300 group-hover:to-purple-500 transition-all duration-300"></div>
              </div>
              
              <div className="text-center group">
                <div className="text-4xl font-black text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
                <div className="text-white/80 font-medium">Products Launched</div>
                <div className="w-full h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mt-2 group-hover:from-green-300 group-hover:to-green-500 transition-all duration-300"></div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/30 rounded-3xl p-8 hover:from-white/25 hover:to-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/10 relative overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-3xl`}></div>
                
                <div className={`bg-gradient-to-r ${value.gradient} p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10`}>
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 relative z-10 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-white/80 transition-all duration-300">
                  {value.title}
                </h3>
                
                <p className="text-white/80 text-sm leading-relaxed relative z-10 group-hover:text-white/90 transition-colors duration-300">
                  {value.description}
                </p>
                
                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${value.gradient} w-0 group-hover:w-full transition-all duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
