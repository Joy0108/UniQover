import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CompanyOverviewSection from './components/CompanyOverviewSection';
import ProblemSolutionSection from './components/ProblemSolutionSection';
import HowItWorksSection from './components/HowItWorksSection';
import MarketSection from './components/MarketSection';
import ProductSection from './components/ProductSection';
import PartnersSection from './components/PartnersSection';
import TeamSection from './components/TeamSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'Uniqover | AI-Native Embedded Insurance';
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            
            if (entry.target.dataset.animation === 'slide-up') {
              entry.target.classList.add('animate-slide-up');
            } else if (entry.target.dataset.animation === 'slide-in-right') {
              entry.target.classList.add('animate-slide-in-right');
            } else if (entry.target.dataset.animation === 'slide-in-left') {
              entry.target.classList.add('animate-slide-in-left');
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <CompanyOverviewSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <MarketSection />
      <ProductSection />
      <PartnersSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;