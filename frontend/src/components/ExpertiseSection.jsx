import React from "react";
import { Snowflake, Package, ShieldCheck, Thermometer, Truck, Monitor } from "lucide-react";

const ExpertiseSection = () => {
  const coldChainFeatures = [
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "2°C to 8°C and -20°C storage capabilities",
      color: '#44ddf5'
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "24/7 temperature monitoring and alerts",
      color: '#f8d041'
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Validated cold chain logistics",
      color: '#23ec6f'
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "WHO GDP & GMP compliant handling",
      color: '#44ddf5'
    }
  ];

  const therapeuticAreas = [
    "Antibiotics and antivirals",
    "Cardiovascular medications",
    "Oncology drugs",
    "Diabetes and endocrine treatments",
    "OTC (Over-The-Counter) products",
    "Vitamins and supplements"
  ];

  return (
    <section id="expertise" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#2f3631' }}>
            Our Core Expertise
          </h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: '#2f3631', opacity: 0.8 }}>
            Three pillars of excellence that define our pharmaceutical leadership
          </p>
        </div>

        <div className="space-y-16">
          {/* Cold Chain Injectable Products */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 rounded-full mr-6 flex items-center justify-center" style={{ backgroundColor: '#44ddf5' }}>
                <Snowflake className="w-8 h-8" style={{ color: '#2f3631' }} />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2" style={{ color: '#2f3631' }}>
                  Cold Chain Injectable Products
                </h3>
                <p className="text-lg" style={{ color: '#2f3631', opacity: 0.7 }}>
                  Specialized handling of temperature-sensitive medications
                </p>
              </div>
            </div>
            
            <p className="text-lg mb-8 leading-relaxed" style={{ color: '#2f3631', opacity: 0.8 }}>
              We specialize in handling, storing, and distributing temperature-sensitive injectable medications. 
              Our facilities are equipped with state-of-the-art cold storage systems, and our logistics partners 
              follow strict protocols to maintain product integrity from manufacturer to end-user.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coldChainFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-xl" style={{ backgroundColor: '#fefee2' }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: feature.color }}>
                    <div style={{ color: '#2f3631' }}>
                      {feature.icon}
                    </div>
                  </div>
                  <span className="font-medium" style={{ color: '#2f3631' }}>
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Comprehensive Pharmaceutical Range */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 rounded-full mr-6 flex items-center justify-center" style={{ backgroundColor: '#f8d041' }}>
                <Package className="w-8 h-8" style={{ color: '#2f3631' }} />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2" style={{ color: '#2f3631' }}>
                  Comprehensive Pharmaceutical Range
                </h3>
                <p className="text-lg" style={{ color: '#2f3631', opacity: 0.7 }}>
                  Wide variety across all therapeutic areas
                </p>
              </div>
            </div>
            
            <p className="text-lg mb-8 leading-relaxed" style={{ color: '#2f3631', opacity: 0.8 }}>
              While our core expertise lies in cold chain injectables, we also offer a wide variety of 
              pharmaceutical products across therapeutic areas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {therapeuticAreas.map((area, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 rounded-xl" style={{ backgroundColor: '#fefee2' }}>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#23ec6f' }} />
                  <span className="font-medium" style={{ color: '#2f3631' }}>
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Regulatory Compliance */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 rounded-full mr-6 flex items-center justify-center" style={{ backgroundColor: '#23ec6f' }}>
                <ShieldCheck className="w-8 h-8" style={{ color: '#2f3631' }} />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2" style={{ color: '#2f3631' }}>
                  Regulatory Compliance & Quality Assurance
                </h3>
                <p className="text-lg" style={{ color: '#2f3631', opacity: 0.7 }}>
                  Maintaining the highest standards
                </p>
              </div>
            </div>
            
            <p className="text-lg leading-relaxed" style={{ color: '#2f3631', opacity: 0.8 }}>
              We maintain the highest standards of quality control and regulatory compliance. All our products and 
              processes adhere to WHO-GDP, GMP, and relevant national drug authority guidelines to ensure product 
              safety and efficacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;