import React from 'react';
import { Shield, Zap, Link, Globe } from 'lucide-react';

const CompanyOverviewSection: React.FC = () => {
  return (
    <section id="solutions" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Mission</h2>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
            Make insurance <span className="font-semibold">simple</span>, <span className="font-semibold">accessible</span>, and <span className="font-semibold">seamlessly embedded</span> in every loan and transaction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Shield className="h-8 w-8 text-primary" />,
              title: "Protection",
              description: "Comprehensive insurance solutions for borrowers and lenders"
            },
            {
              icon: <Zap className="h-8 w-8 text-primary" />,
              title: "Speed",
              description: "Instant insurance decisions at the point of transaction"
            },
            {
              icon: <Link className="h-8 w-8 text-primary" />,
              title: "Integration",
              description: "Seamless APIs that connect to your existing systems"
            },
            {
              icon: <Globe className="h-8 w-8 text-primary" />,
              title: "Accessibility",
              description: "Making insurance available to underserved markets"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-soft transition-all duration-300 hover:shadow-medium hover:translate-y-[-5px]"
            >
              <div className="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-3 text-center">{item.title}</h3>
              <p className="text-neutral-600 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyOverviewSection;