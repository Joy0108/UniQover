import React from 'react';
import { ArrowRight, Calendar, PhoneCall, FileText } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your insurance offerings?</h2>
            <p className="text-xl text-white/90 mb-8">
              Partner with Uniqover to provide seamless, AI-native embedded insurance to your customers at the point of transaction.
            </p>
            
            <div className="space-y-4">
              {[
                {
                  icon: <Calendar className="h-5 w-5" />,
                  title: "Book a Demo",
                  description: "See our platform in action with a personalized demo"
                },
                {
                  icon: <PhoneCall className="h-5 w-5" />,
                  title: "Talk to Sales",
                  description: "Discuss how we can help your specific business needs"
                },
                {
                  icon: <FileText className="h-5 w-5" />,
                  title: "View Documentation",
                  description: "Explore our API docs and integration guides"
                }
              ].map((item, index) => (
                <div key={index} className="flex bg-white/10 hover:bg-white/20 transition-colors duration-200 rounded-lg p-4 cursor-pointer">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-white/20">
                    {item.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-white/70">{item.description}</p>
                  </div>
                  <div className="ml-auto flex items-center">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-hard p-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Get in Touch</h3>
            <form>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Company</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
                  <textarea 
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    rows={3}
                    placeholder="Tell us about your requirements"
                  ></textarea>
                </div>
                <button type="submit" className="w-full btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;