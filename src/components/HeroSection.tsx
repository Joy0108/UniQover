import React, { useEffect, useRef } from 'react';
import { ArrowRight, ShieldCheck, Zap, Code } from 'lucide-react';

const HeroSection: React.FC = () => {
  const animationRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="relative overflow-hidden pt-20 bg-gradient-to-b from-primary-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll opacity-0">
            <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 leading-tight">
              AI-Native <span className="gradient-text">Embedded Insurance</span>
              <br />
              <span className="text-primary">Instantly.</span>
            </h1>
            
            <p className="mt-6 text-lg text-neutral-700 max-w-xl">
              Empower banks, NBFCs, and fintechs with our API-driven platform for seamless, 
              instant life, health, and property insurance at the point of transaction.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="btn-primary flex items-center">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="btn-outline flex items-center">
                View API Docs
                <Code className="ml-2 h-5 w-5" />
              </button>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <ShieldCheck className="h-6 w-6 text-secondary" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-semibold text-neutral-900">Fully Compliant</h3>
                  <p className="mt-1 text-sm text-neutral-500">IRDAI approved with secure data handling</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Zap className="h-6 w-6 text-secondary" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-semibold text-neutral-900">Instant Deployment</h3>
                  <p className="mt-1 text-sm text-neutral-500">Go live in days, not months</p>
                </div>
              </div>
            </div>
          </div>
          
          <div ref={animationRef} className="relative animate-on-scroll opacity-0">
            <div className="w-full h-[400px] bg-white rounded-2xl shadow-medium overflow-hidden p-6">
              <div className="absolute top-0 left-0 right-0 h-12 bg-neutral-100 rounded-t-2xl flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="mx-auto bg-white rounded-full px-4 py-1 text-xs text-neutral-500">
                  uniqover.ai/api/v1/insurance
                </div>
              </div>
              
              <div className="mt-12 space-y-4">
                <div className="bg-neutral-100 rounded-lg p-4 animate-pulse-soft">
                  <div className="font-mono text-sm text-neutral-700">
                    <span className="text-primary">POST</span> /api/v1/insurance/quote
                  </div>
                </div>
                
                <div className="bg-neutral-100 rounded-lg p-4">
                  <div className="font-mono text-xs text-neutral-600">
                    {`{
  "loan_id": "L12345",
  "borrower": {
    "name": "Raj Kumar",
    "age": 34,
    "income": 750000
  },
  "loan_amount": 2500000,
  "tenure": 60
}`}
                  </div>
                </div>
                
                <div className="bg-secondary-light rounded-lg p-4 border border-secondary">
                  <div className="font-mono text-xs text-neutral-700">
                    {`{
  "status": "success",
  "quote_id": "Q78901",
  "premium": 15750,
  "coverage": 2500000,
  "products": [
    {
      "type": "credit_life",
      "premium": 12500,
      "coverage": 2500000
    },
    {
      "type": "critical_illness",
      "premium": 3250,
      "coverage": 500000
    }
  ]
}`}
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-6 right-6 animate-float">
                <div className="bg-primary text-white rounded-full p-3">
                  <Zap className="h-6 w-6" />
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-secondary text-white rounded-full py-2 px-4 shadow-medium">
              <span className="text-sm font-semibold">Response in 0.8s</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-24 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-white"></div>
    </section>
  );
};

export default HeroSection;