import React from 'react';
import { Code2, Settings, Zap } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: 1,
      icon: <Code2 className="h-8 w-8" />,
      title: "API Integration",
      description: "Simple REST API connection to your existing systems with comprehensive documentation and support."
    },
    {
      number: 2,
      icon: <Settings className="h-8 w-8" />,
      title: "Customization",
      description: "Configure insurance offerings based on your customer profiles and business requirements."
    },
    {
      number: 3,
      icon: <Zap className="h-8 w-8" />,
      title: "Instant Issuance",
      description: "Automatic policy issuance, customer notifications, and documentation in seconds."
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">How It Works</h2>
          <p className="text-xl text-neutral-700">Simple, fast, and efficient integration in just three steps</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block" />

          <div className="space-y-20 md:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`md:grid md:grid-cols-2 md:gap-8 items-center ${index % 2 === 0 ? '' : 'md:grid-flow-dense'}`}>
                  {/* Content */}
                  <div className={`text-center md:text-left ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:col-start-2'}`}>
                    <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto md:mx-0 mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3">{step.title}</h3>
                    <p className="text-neutral-700">{step.description}</p>
                  </div>

                  {/* Icon Box */}
                  <div className={`mt-8 md:mt-0 ${index % 2 === 0 ? 'md:col-start-2' : ''}`}>
                    <div className="bg-primary-light rounded-2xl p-8 transform hover:-translate-y-2 transition-all duration-300">
                      <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg text-primary">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Go Live Button */}
          <div className="text-center mt-16">
            <button className="bg-secondary hover:bg-secondary-dark text-white font-semibold py-3 px-8 rounded-full transform hover:scale-105 transition-all duration-300">
              Go Live in 2 Weeks
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;