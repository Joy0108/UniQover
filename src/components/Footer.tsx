import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">UQ</span>
              </div>
              <h2 className="text-2xl font-bold text-white">Uniqover</h2>
            </div>
            <p className="text-neutral-400 mb-6">
              AI-Native Embedded Insurance Platform. Enabling financial institutions to offer instant insurance at the point of transaction.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              {[
                "Credit Life Insurance",
                "Health Insurance",
                "Hospicash",
                "Critical Illness",
                "Microinsurance",
                "Secured Loan Protection"
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Team",
                "Careers",
                "Partners",
                "Blog",
                "Press"
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-neutral-400 mr-3 flex-shrink-0" />
                <span className="text-neutral-400">
                  3rd Floor, KRM Plaza, Koramangala<br />
                  Bangalore, Karnataka 560034
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-neutral-400 mr-3 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-neutral-400 hover:text-white transition-colors duration-200">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-neutral-400 mr-3 flex-shrink-0" />
                <a href="mailto:contact@uniqover.ai" className="text-neutral-400 hover:text-white transition-colors duration-200">
                  contact@uniqover.ai
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-neutral-800 text-center md:flex md:justify-between md:text-left">
          <p className="text-neutral-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Uniqover Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex justify-center md:justify-end space-x-6">
            <a href="#" className="text-neutral-500 hover:text-neutral-400 transition-colors duration-200 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-neutral-500 hover:text-neutral-400 transition-colors duration-200 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-neutral-500 hover:text-neutral-400 transition-colors duration-200 text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;