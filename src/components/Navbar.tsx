import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">UQ</span>
                </div>
                <h1 
                  className={`text-2xl font-extrabold tracking-tight ${
                    scrolled ? 'text-primary' : 'text-primary'
                  }`}
                >
                  Uniqover
                </h1>
              </div>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {['Solutions', 'Products', 'Partners', 'Company', 'Pricing'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors ${
                  scrolled 
                    ? 'text-neutral-700 hover:text-primary' 
                    : 'text-neutral-700 hover:text-primary'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:flex">
            <button className="btn-outline mr-4">Login</button>
            <button className="btn-primary">Book a Demo</button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md ${
                scrolled 
                  ? 'text-neutral-700 hover:bg-neutral-100' 
                  : 'text-neutral-700 hover:bg-white/20'
              }`}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Solutions', 'Products', 'Partners', 'Company', 'Pricing'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 text-base font-medium text-neutral-700 hover:bg-neutral-100 hover:text-primary rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-6 border-t border-neutral-200">
            <div className="px-5 flex flex-col space-y-3">
              <button className="btn-outline w-full">Login</button>
              <button className="btn-primary w-full">Book a Demo</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;