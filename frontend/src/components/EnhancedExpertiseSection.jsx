import React from "react";
import { Snowflake, Package, ShieldCheck, Thermometer, Truck, Monitor, Pill, Heart, Stethoscope, Activity, Tablet, Capsule } from "lucide-react";

const EnhancedExpertiseSection = () => {
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
    {
      name: "Antibiotics and antivirals",
      icon: <Pill className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1584308878768-57d3387b1882?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxwaGFybWFjZXV0aWNhbCUyMGNvbGQlMjBjaGFpbnxlbnwwfHx8Ymx1ZXwxNzU4MzkwNjA0fDA&ixlib=rb-4.1.0&q=85",
      description: "Advanced antimicrobial and antiviral medications"
    },
    {
      name: "Cardiovascular medications",
      icon: <Heart className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1573883431205-98b5f10aaedb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHw0fHxwaGFybWFjZXV0aWNhbCUyMGNvbGQlMjBjaGFpbnxlbnwwfHx8Ymx1ZXwxNzU4MzkwNjA0fDA&ixlib=rb-4.1.0&q=85",
      description: "Heart health and circulatory system treatments"
    },
    {
      name: "Oncology drugs",
      icon: <Activity className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/7277960/pexels-photo-7277960.jpeg",
      description: "Cancer treatment and chemotherapy medications"
    },
    {
      name: "Diabetes and endocrine treatments",
      icon: <Stethoscope className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/6075005/pexels-photo-6075005.jpeg",
      description: "Diabetes management and hormonal treatments"
    },
    {
      name: "OTC (Over-The-Counter) products",
      icon: <Pill className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1610188660497-c925bf086373?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMGNvbGQlMjBjaGFpbnxlbnwwfHx8Ymx1ZXwxNzU4MzkwNjA0fDA&ixlib=rb-4.1.0&q=85",
      description: "Non-prescription healthcare products"
    },
    {
      name: "Vitamins and supplements",
      icon: <Tablet className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1703293024077-db8b6da5391c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHxwaGFybWFjZXV0aWNhbCUyMGNvbGQlMjBjaGFpbnxlbnwwfHx8Ymx1ZXwxNzU4MzkwNjA0fDA&ixlib=rb-4.1.0&q=85",
      description: "Nutritional supplements and vitamins"
    }
  ];

  const badges = [
    { name: "WHO GDP", color: '#f8d041' },
    { name: "GMP Certified", color: '#23ec6f' },
    { name: "ISO 9001", color: '#44ddf5' },
    { name: "FDA Approved", color: '#f8d041' },
    { name: "EU GMP", color: '#23ec6f' }
  ];

  return (
    <section id="expertise" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
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
            
            <p className="text-lg mb-12 leading-relaxed" style={{ color: '#2f3631', opacity: 0.8 }}>
              While our core expertise lies in cold chain injectables, we also offer a wide variety of 
              pharmaceutical products across therapeutic areas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {therapeuticAreas.map((area, index) => (
                <div key={index} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: '#fefee2' }}>
                  <img 
                    src={area.image}
                    alt={area.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#23ec6f' }}>
                        <div style={{ color: '#2f3631' }}>
                          {area.icon}
                        </div>
                      </div>
                      <h4 className="font-bold text-lg" style={{ color: '#2f3631' }}>
                        {area.name}
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: '#2f3631', opacity: 0.8 }}>
                      {area.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Regulatory Compliance with Badges */}
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
                  Maintaining the highest standards with trusted certifications
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg leading-relaxed mb-8" style={{ color: '#2f3631', opacity: 0.8 }}>
                  We maintain the highest standards of quality control and regulatory compliance. All our products and 
                  processes adhere to WHO-GDP, GMP, and relevant national drug authority guidelines to ensure product 
                  safety and efficacy.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  {badges.map((badge, index) => (
                    <div 
                      key={index} 
                      className="px-4 py-2 rounded-full font-semibold text-sm border-2"
                      style={{ 
                        backgroundColor: badge.color,
                        borderColor: badge.color,
                        color: '#2f3631'
                      }}
                    >
                      {badge.name}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1641748182997-f9745e9a0348?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMGNlcnRpZmljYXRpb258ZW58MHx8fHwxNzU4MzkwNjQ2fDA&ixlib=rb-4.1.0&q=85"
                  alt="Quality Certifications"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: '#fefee2' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1613825787302-22acac0de2fc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHx0cnVzdCUyMGJhZGdlcyUyMGNlcnRpZmljYXRpb258ZW58MHx8fHwxNzU4MzkwNjQwfDA&ixlib=rb-4.1.0&q=85"
                    alt="Compliance Badge"
                    className="w-20 h-20 object-contain mx-auto mb-3"
                  />
                  <p className="font-semibold" style={{ color: '#2f3631' }}>
                    Internationally Certified
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedExpertiseSection;