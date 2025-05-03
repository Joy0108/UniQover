import React, { useEffect, useRef } from 'react';
import { TrendingUp, Users, DollarSign, PieChart } from 'lucide-react';

const MarketSection: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.counter');
            counters.forEach((counter) => {
              const target = parseInt(counter.getAttribute('data-target') || '0');
              let count = 0;
              const updateCount = () => {
                const increment = target / 50;
                if (count < target) {
                  count += increment;
                  (counter as HTMLElement).innerText = Math.floor(count).toString();
                  setTimeout(updateCount, 20);
                } else {
                  (counter as HTMLElement).innerText = target.toString();
                }
              };
              updateCount();
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Market Opportunity</h2>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
            India's embedded insurance market is poised for exponential growth
          </p>
        </div>
        
        <div 
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {[
            {
              icon: <TrendingUp className="h-8 w-8 text-primary" />,
              value: 4,
              label: "× Growth by 2030",
              description: "Embedded insurance market in India"
            },
            {
              icon: <Users className="h-8 w-8 text-primary" />,
              value: 800,
              label: "Million",
              description: "Digitally active users in India"
            },
            {
              icon: <DollarSign className="h-8 w-8 text-primary" />,
              value: 90,
              label: "%",
              description: "Loans without insurance protection"
            },
            {
              icon: <PieChart className="h-8 w-8 text-primary" />,
              value: 15,
              label: "B USD",
              description: "Potential market size by 2030"
            }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-soft transition-all duration-300 hover:shadow-medium hover:translate-y-[-5px] text-center"
            >
              <div className="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                {stat.icon}
              </div>
              <div className="flex items-center justify-center">
                <span className="counter text-4xl font-bold text-primary" data-target={stat.value}>
                  0
                </span>
                <span className="text-2xl font-semibold text-neutral-600 ml-1">{stat.label}</span>
              </div>
              <p className="text-neutral-600 mt-2">{stat.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-primary to-secondary rounded-xl overflow-hidden shadow-medium">
          <div className="p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Why Now?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Digital Transformation",
                  description: "Financial institutions are rapidly digitizing their services, creating opportunities for embedded solutions"
                },
                {
                  title: "Regulatory Support",
                  description: "IRDAI's push for innovation and increased insurance penetration creates a favorable environment"
                },
                {
                  title: "Consumer Demand",
                  description: "Growing awareness about financial protection, especially post-pandemic"
                }
              ].map((item, index) => (
                <div key={index}>
                  <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                  <p className="text-white/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;