
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-green-700">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Something Together
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge software solutions? Let's discuss your project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-lg">
                  <Mail className="h-5 w-5 text-green-700" />
                </div>
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-white/80">hello@benubina.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-lg">
                  <Phone className="h-5 w-5 text-green-700" />
                </div>
                <div>
                  <div className="text-white font-semibold">Phone</div>
                  <div className="text-white/80">+880 01811406470</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-lg">
                  <MapPin className="h-5 w-5 text-green-700" />
                </div>
                <div>
                  <div className="text-white font-semibold">Office</div>
                  <div className="text-white/80">Available for remote consultations worldwide</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="text-lg font-bold text-white mb-4">Why Choose Benubina?</h4>
              <ul className="space-y-2 text-white/80">
                <li>✓ Cutting-edge technology stack</li>
                <li>✓ AI and automation expertise</li>
                <li>✓ Custom software solutions</li>
                <li>✓ Data engineering capabilities</li>
                <li>✓ End-to-end project delivery</li>
              </ul>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="bg-white/10 border border-white/20 rounded-xl p-8 shadow-lg backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 bg-white/10 backdrop-blur-sm focus:outline-none focus:border-lime-400 transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 bg-white/10 backdrop-blur-sm focus:outline-none focus:border-lime-400 transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="company" className="block text-white font-semibold mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 bg-white/10 backdrop-blur-sm focus:outline-none focus:border-lime-400 transition-colors duration-200"
                  placeholder="Your company name"
                />
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 bg-white/10 backdrop-blur-sm focus:outline-none focus:border-lime-400 transition-colors duration-200 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-white text-green-800 px-8 py-4 rounded-lg hover:bg-lime-100 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2 text-lg font-semibold shadow-lg"
              >
                Send Message
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
