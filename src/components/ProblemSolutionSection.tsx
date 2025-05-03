import React from 'react';
import { AlertTriangle, Lightbulb, CheckCircle, XCircle } from 'lucide-react';

const ProblemSolutionSection: React.FC = () => {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Problem & Solution</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Problem Card */}
          <div className="relative bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            <div className="absolute -top-6 -right-6 bg-red-100 rounded-full p-4">
              <XCircle className="h-8 w-8 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Current Challenges</h3>
            <div className="space-y-4">
              {[
                "90% of Indian loans lack insurance protection",
                "Manual processes slow down lending",
                "Complex documentation & long wait times",
                "Limited access for underserved segments",
                "High NPAs due to inadequate protection"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 bg-white/50 p-4 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-neutral-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Card */}
          <div className="relative bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            <div className="absolute -top-6 -right-6 bg-green-100 rounded-full p-4">
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">UniQover Solution</h3>
            <div className="space-y-4">
              {[
                "Instant, automated insurance at loan disbursal",
                "AI-powered real-time underwriting",
                "Digital-first with minimal documentation",
                "Tailored products for all segments",
                "Automated claims for faster processing"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 bg-white/50 p-4 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-neutral-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;