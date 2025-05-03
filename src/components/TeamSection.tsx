import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const TeamSection: React.FC = () => {
  const team = [
    {
      name: "Rahul Sharma",
      title: "Co-Founder & CEO",
      bio: "IIT Delhi, IIM Ahmedabad, 12+ years in insurtech with successful product launches",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Priya Mehta",
      title: "Co-Founder & COO",
      bio: "10+ years in fintech, led operations at leading NBFCs with deep domain expertise",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Arjun Verma",
      title: "CTO",
      bio: "Ex-Google, 8+ years in insurance tech, deep expertise in compliance and systems",
      image: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section id="company" className="bg-neutral-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Team</h2>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
            Experienced leaders from insurtech, fintech, and technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-medium transition-all duration-300 hover:shadow-hard group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full flex justify-center space-x-4">
                    <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors duration-200">
                      <Linkedin className="h-5 w-5 text-white" />
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors duration-200">
                      <Twitter className="h-5 w-5 text-white" />
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors duration-200">
                      <Mail className="h-5 w-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.title}</p>
                <p className="text-neutral-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-primary rounded-xl overflow-hidden shadow-medium">
          <div className="p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Team</h3>
                <p className="text-white/80 mb-6">
                  We're growing fast and looking for talented individuals to join our mission of making insurance accessible to all.
                </p>
                <button className="bg-white text-primary hover:bg-neutral-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                  View Open Positions
                </button>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-xl font-semibold mb-4">We're Hiring:</h4>
                <ul className="space-y-3">
                  {[
                    "Full Stack Engineers", 
                    "Machine Learning Specialists", 
                    "Insurance Domain Experts",
                    "Sales & Partnership Managers"
                  ].map((position, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-secondary mr-2">•</span>
                      <span>{position}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;