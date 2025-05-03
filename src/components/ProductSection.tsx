import React, { useState } from 'react';
import { CreditCard, HeartPulse, Syringe, Guitar as Hospital, Users, Shield } from 'lucide-react';

const ProductSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const products = [
    {
      icon: <CreditCard className="h-8 w-8" />,
      name: "Credit Life Insurance",
      description: "Protects the loan amount in case of borrower's death or disability",
      features: [
        "Covers outstanding loan balance",
        "Options for additional family protection",
        "Various premium payment options",
        "Covers natural and accidental death"
      ]
    },
    {
      icon: <HeartPulse className="h-8 w-8" />,
      name: "Health Insurance",
      description: "Comprehensive health coverage for borrowers and their families",
      features: [
        "Cashless treatment at network hospitals",
        "Pre and post hospitalization coverage",
        "Day care procedures covered",
        "No medical check-up up to certain limits"
      ]
    },
    {
      icon: <Hospital className="h-8 w-8" />,
      name: "Hospicash",
      description: "Daily cash benefit during hospitalization to cover incidental expenses",
      features: [
        "Fixed daily benefit irrespective of actual expenses",
        "Coverage for ICU stays at higher rates",
        "Options for family floater policies",
        "Benefit paid in addition to any other health insurance"
      ]
    },
    {
      icon: <Syringe className="h-8 w-8" />,
      name: "Critical Illness",
      description: "Lump sum payout on diagnosis of specified critical illnesses",
      features: [
        "Covers up to 25 critical illnesses",
        "No bills or hospitalization required for claim",
        "Amount can be used for any purpose",
        "Helps manage both medical and lifestyle expenses"
      ]
    },
    {
      icon: <Users className="h-8 w-8" />,
      name: "Microinsurance",
      description: "Affordable insurance solutions for underserved borrowers",
      features: [
        "Low premium, high value protection",
        "Simple documentation requirements",
        "Coverage for life, health, and accident",
        "Designed for low-income segments"
      ]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      name: "Secured Loan Protection",
      description: "Insurance for asset-backed loans like home loans, auto loans",
      features: [
        "Covers the asset as well as loan repayment",
        "Combined property and life coverage",
        "Flexible tenure matching loan duration",
        "Decreasing term insurance structure"
      ]
    }
  ];

  return (
    <section id="products" className="bg-neutral-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Product Suite</h2>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
            Comprehensive insurance solutions for every financial product
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-medium overflow-hidden">
          <div className="flex overflow-x-auto scrollbar-hide">
            {products.map((product, index) => (
              <button
                key={index}
                className={`flex-none px-6 py-4 text-sm font-medium border-b-2 whitespace-nowrap ${
                  activeTab === index
                    ? 'border-primary text-primary'
                    : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
                }`}
                onClick={() => setActiveTab(index)}
              >
                <div className="flex items-center space-x-2">
                  <span className={activeTab === index ? 'text-primary' : 'text-neutral-400'}>
                    {product.icon}
                  </span>
                  <span>{product.name}</span>
                </div>
              </button>
            ))}
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-primary mb-2">{products[activeTab].icon}</div>
                <h3 className="text-2xl font-bold text-neutral-800 mb-4">{products[activeTab].name}</h3>
                <p className="text-neutral-600 mb-6">{products[activeTab].description}</p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-neutral-800">Key Features:</h4>
                  <ul className="space-y-2">
                    {products[activeTab].features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="btn-primary mt-8">Learn More</button>
              </div>
              
              <div className="bg-primary-light rounded-xl p-8 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-sm font-semibold text-primary mb-2">Integration Example</div>
                  <div className="bg-white rounded-lg p-4 shadow-sm font-mono text-sm">
                    {`const response = await uniqover.${
                      activeTab === 0 ? 'creditLife'
                      : activeTab === 1 ? 'healthInsurance'
                      : activeTab === 2 ? 'hospicash'
                      : activeTab === 3 ? 'criticalIllness'
                      : activeTab === 4 ? 'microInsurance'
                      : 'securedLoanProtection'
                    }.quote({
  customer_id: "C12345",
  loan_amount: 500000,
  tenure: 36,
  ...customerData
})`}
                  </div>
                  
                  <div className="mt-4 bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm font-medium text-neutral-800">Response (within milliseconds)</span>
                    </div>
                    <div className="font-mono text-xs overflow-auto max-h-40">
                      {`{
  "status": "success",
  "quote_id": "Q78901",
  "premium": ${activeTab === 0 ? '15750' 
    : activeTab === 1 ? '12800' 
    : activeTab === 2 ? '3600' 
    : activeTab === 3 ? '8900' 
    : activeTab === 4 ? '1200' 
    : '22500'},
  "coverage": ${activeTab === 0 ? '500000' 
    : activeTab === 1 ? '300000' 
    : activeTab === 2 ? '1000' 
    : activeTab === 3 ? '200000' 
    : activeTab === 4 ? '100000' 
    : '500000'},
  "product": "${products[activeTab].name}",
  "tenure": 36
}`}
                    </div>
                  </div>
                </div>
                
                <div className="absolute right-0 bottom-0 opacity-10">
                  <div className="text-[250px] text-primary">
                    {activeTab === 0 ? '💳' 
                      : activeTab === 1 ? '❤️' 
                      : activeTab === 2 ? '🏥' 
                      : activeTab === 3 ? '💉' 
                      : activeTab === 4 ? '👪' 
                      : '🛡️'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;