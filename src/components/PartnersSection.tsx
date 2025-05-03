import React, { useRef, useEffect } from 'react';
import { Star } from 'lucide-react';

const PartnersSection: React.FC = () => {
  const logosRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!logosRef.current) return;
    
    const animate = () => {
      if (!logosRef.current) return;
      const logos = logosRef.current;
      
      logos.scrollLeft += 1;
      if (logos.scrollLeft >= logos.scrollWidth / 2) {
        logos.scrollLeft = 0;
      }
      
      requestAnimationFrame(animate);
    };
    
    const animation = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animation);
  }, []);

  const testimonials = [
    {
      company: "Kaabil Finance",
      quote: "Kaabil Finance, with 7,500+ customers and ₹240+ Cr AUM, reduced NPAs using UniQover's automated insurance platform.",
      author: "Rajiv Kumar",
      title: "Kaabil Finance, CEO",
      stats: {
        customers: "7,500+",
        aum: "₹240+ Cr",
        npaReduction: "32%"
      }
    },
    {
      company: "Leading NBFC",
      quote: "UniQover's platform helped us streamline our entire insurance process, resulting in higher revenue and better customer satisfaction.",
      author: "Priya Sharma",
      title: "Leading NBFC, CTO",
      stats: {
        processTime: "-65%",
        satisfaction: "+42%",
        revenue: "+28%"
      }
    }
  ];

  // Insurance partner logos
  const insurancePartners = [
    "ICICI", "Bajaj", "LIC", "HDFC Life", "Star Health", 
    "SBI", "Max Life", "Aditya Birla", "Kotak", "Tata AIG"
  ];

  return (
    <section className="bg-neutral-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Partners Trust Us</h2>
          <p className="text-xl text-neutral-700">Join leading financial institutions already benefiting from our platform</p>
        </div>

        {/* Insurance Partners Logos */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8">Integrated with 60+ Leading Insurers</h3>
          <div className="relative py-6">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-neutral-50 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-neutral-50 to-transparent z-10"></div>
            
            <div 
              ref={logosRef}
              className="overflow-hidden whitespace-nowrap"
            >
              <div className="inline-block">
                {insurancePartners.map((logo, i) => (
                  <div key={i} className="inline-block mx-6">
                    <div className="bg-white rounded-lg shadow-soft w-48 h-24 flex items-center justify-center transform hover:scale-105 transition-all duration-300">
                      <div className="font-bold text-xl text-neutral-400">{logo}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="inline-block">
                {insurancePartners.map((logo, i) => (
                  <div key={i} className="inline-block mx-6">
                    <div className="bg-white rounded-lg shadow-soft w-48 h-24 flex items-center justify-center transform hover:scale-105 transition-all duration-300">
                      <div className="font-bold text-xl text-neutral-400">{logo}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <Star className="h-6 w-6 text-yellow-400" />
                <Star className="h-6 w-6 text-yellow-400" />
                <Star className="h-6 w-6 text-yellow-400" />
                <Star className="h-6 w-6 text-yellow-400" />
                <Star className="h-6 w-6 text-yellow-400" />
              </div>

              <blockquote className="text-lg text-neutral-700 mb-6">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-neutral-900">{testimonial.author}</p>
                  <p className="text-neutral-500">{testimonial.title}</p>
                </div>
                <div className="flex gap-4">
                  {Object.entries(testimonial.stats).map(([key, value], i) => (
                    <div key={i} className="text-center">
                      <p className="text-xl font-bold text-primary">{value}</p>
                      <p className="text-sm text-neutral-500">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;