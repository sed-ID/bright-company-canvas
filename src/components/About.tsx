
import { Users, Award, Target, Lightbulb, Sparkles } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Focus-Driven",
      description: "We focus on building a few great products rather than many average ones.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "As a startup, we're agile and quick to adopt new technologies and approaches.",
    },
    {
      icon: Users,
      title: "Personal Touch",
      description: "Our small team means you get direct access to the people building your product.",
    },
    {
      icon: Award,
      title: "Quality Focus",
      description: "We may be small, but we don't compromise on code quality and user experience.",
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-emerald-50 to-slate-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white border border-emerald-200 rounded-full px-4 py-2 mb-8">
              <Sparkles className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">Our Story</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              About 
              <span className="text-emerald-600"> TechFlow</span>
            </h2>
            
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">
              We're a young startup founded in 2023, passionate about creating software 
              products that solve real problems for real people.
            </p>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Our small but dedicated team believes in quality over quantity. We've built 
              several successful products and are constantly learning and growing. We may not 
              have decades of experience, but we bring fresh perspectives, modern technologies, 
              and genuine enthusiasm to every project.
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">8</div>
                <div className="text-slate-600 font-medium">Team Members</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">2</div>
                <div className="text-slate-600 font-medium">Years Growing</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">5+</div>
                <div className="text-slate-600 font-medium">Products Launched</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:border-emerald-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-3 rounded-lg w-fit mb-4">
                  <value.icon className="h-5 w-5 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-slate-800 mb-3">
                  {value.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed">
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
