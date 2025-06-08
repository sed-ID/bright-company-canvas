
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
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Let's Build Something Together
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to work with a dedicated team? Let's discuss your project and see how we can help.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-slate-800 mb-8">Get in Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-3 rounded-lg">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-slate-800 font-semibold">Email</div>
                  <div className="text-slate-600">hello@benubina.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-3 rounded-lg">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-slate-800 font-semibold">Phone</div>
                  <div className="text-slate-600">+880 01811406470</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-3 rounded-lg">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-slate-800 font-semibold">Office</div>
                  <div className="text-slate-600">Available for Remote & On-site Projects</div>
                </div>
              </div>
            </div>
            
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
              <h4 className="text-lg font-bold text-slate-800 mb-4">Why Work With Us?</h4>
              <ul className="space-y-2 text-slate-600">
                <li>✓ Direct access to our core team</li>
                <li>✓ Agile and flexible approach</li>
                <li>✓ Modern tech stack and best practices</li>
                <li>✓ AI-first development methodology</li>
                <li>✓ Genuine passion for great products</li>
              </ul>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-slate-700 font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-slate-700 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="company" className="block text-slate-700 font-semibold mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors duration-200"
                  placeholder="Your company name"
                />
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block text-slate-700 font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors duration-200 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-lg hover:from-emerald-600 hover:to-green-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2 text-lg font-semibold shadow-lg"
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
