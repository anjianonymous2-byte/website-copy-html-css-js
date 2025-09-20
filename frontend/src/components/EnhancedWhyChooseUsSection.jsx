import React, { useState, useEffect, useRef } from "react";
import { CheckCircle, Building2, Users, Globe, Settings, Handshake, ChevronLeft, ChevronRight, Award, Clock, Shield } from "lucide-react";

const EnhancedWhyChooseUsSection = () => {
  const [currentSlide, setCurrentSlide] = useState({});
  const [isHovered, setIsHovered] = useState({});
  const intervalRefs = useRef({});

  const reasons = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Specialized in Cold Chain Injectables",
      description: "Industry-leading expertise in temperature-sensitive pharmaceutical storage and distribution",
      color: '#44ddf5'
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Fully Compliant with Global Regulatory Standards",
      description: "WHO GDP, GMP, and FDA compliance ensuring highest quality and safety standards",
      color: '#f8d041'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "End-to-End Supply Chain Integrity",
      description: "Complete supply chain management from manufacturer to end-user with full traceability",
      color: '#23ec6f'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Wide Distribution Network",
      description: "Extensive network covering 15+ countries with reliable delivery infrastructure",
      color: '#44ddf5'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Experienced Pharmaceutical Professionals",
      description: "150+ qualified healthcare professionals with decades of combined industry experience",
      color: '#f8d041'
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Flexible B2B and B2C Solutions",
      description: "Customized solutions for hospitals, clinics, pharmacies, and individual healthcare needs",
      color: '#23ec6f'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Industry Recognition & Awards",
      description: "Multiple awards for excellence in pharmaceutical distribution and cold chain management",
      color: '#44ddf5'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Emergency Support",
      description: "Round-the-clock support for critical pharmaceutical needs and emergency deliveries",
      color: '#f8d041'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Advanced Security & Tracking",
      description: "State-of-the-art security systems and real-time tracking for all pharmaceutical shipments",
      color: '#23ec6f'
    }
  ];

  const capabilities = [
    {
      title: "Cold Chain Warehouses",
      description: "Equipped with refrigerated zones, backup power, and real-time tracking",
      images: [
        "https://images.unsplash.com/photo-1584308878768-57d3387b1882?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxwaGFybWFjZXV0aWNhbCUyMGNvbGQlMjBjaGFpbnxlbnwwfHx8Ymx1ZXwxNzU4MzkwNjA0fDA&ixlib=rb-4.1.0&q=85",
        "https://images.unsplash.com/photo-1601912552080-0fb89fd08042?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2V8ZW58MHx8fGJsdWV8MTc1ODM5MDYwOXww&ixlib=rb-4.1.0&q=85",
        "https://images.pexels.com/photos/7277960/pexels-photo-7277960.jpeg",
        "https://images.pexels.com/photos/1624694/pexels-photo-1624694.jpeg",
        "https://images.unsplash.com/photo-1573883431205-98b5f10aaedb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHw0fHxwaGFybWFjZXV0aWNhbCUyMGNvbGQlMjBjaGFpbnxlbnwwfHx8Ymx1ZXwxNzU4MzkwNjA0fDA&ixlib=rb-4.1.0&q=85"
      ]
    },
    {
      title: "Distribution Fleet",
      description: "Temperature-controlled vehicles with validated transport routes",
      images: [
        "https://images.unsplash.com/photo-1610289472743-de6966e12a3e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxsb2dpc3RpY3MlMjB3YXJlaG91c2V8ZW58MHx8fGJsdWV8MTc1ODM5MDYwOXww&ixlib=rb-4.1.0&q=85",
        "https://images.pexels.com/photos/615670/pexels-photo-615670.jpeg",
        "https://images.unsplash.com/photo-1703293024077-db8b6da5391c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHxwaGFybWFjZXV0aWNhbCUyMGNvbGQlMjBjaGFpbnxlbnwwfHx8Ymx1ZXwxNzU4MzkwNjA0fDA&ixlib=rb-4.1.0&q=85",
        "https://images.pexels.com/photos/6075005/pexels-photo-6075005.jpeg",
        "https://images.unsplash.com/photo-1610188660497-c925bf086373?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMGNvbGQlMjBjaGFpbnxlbnwwfHx8Ymx1ZXwxNzU4MzkwNjA0fDA&ixlib=rb-4.1.0&q=85"
      ]
    },
    {
      title: "Packaging Solutions",
      description: "GDP-compliant insulated packaging and passive cooling systems",
      images: [
        "https://images.pexels.com/photos/7277960/pexels-photo-7277960.jpeg",
        "https://images.unsplash.com/photo-1584308878768-57d3387b1882?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxwaGFybWFjZXV0aWNhbCUyMGNvbGQlMjBjaGFpbnxlbnwwfHx8Ymx1ZXwxNzU4MzkwNjA0fDA&ixlib=rb-4.1.0&q=85",
        "https://images.pexels.com/photos/1624694/pexels-photo-1624694.jpeg",
        "https://images.unsplash.com/photo-1573883431205-98b5f10aaedb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHw0fHxwaGFybWFjZXV0aWNhbCUyMGNvbGQlMjBjaGFpbnxlbnwwfHx8Ymx1ZXwxNzU4MzkwNjA0fDA&ixlib=rb-4.1.0&q=85",
        "https://images.pexels.com/photos/615670/pexels-photo-615670.jpeg"
      ]
    },
    {
      title: "Monitoring Systems",
      description: "IoT-enabled temperature loggers and comprehensive audit trails",
      images: [
        "https://images.unsplash.com/photo-1601912552080-0fb89fd08042?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2V8ZW58MHx8fGJsdWV8MTc1ODM5MDYwOXww&ixlib=rb-4.1.0&q=85",
        "https://images.pexels.com/photos/6075005/pexels-photo-6075005.jpeg",
        "https://images.unsplash.com/photo-1610289472743-de6966e12a3e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxsb2dpc3RpY3MlMjB3YXJlaG91c2V8ZW58MHx8fGJsdWV8MTc1ODM5MDYwOXww&ixlib=rb-4.1.0&q=85",
        "https://images.pexels.com/photos/7277960/pexels-photo-7277960.jpeg",
        "https://images.unsplash.com/photo-1703293024077-db8b6da5391c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHxwaGFybWFjZXV0aWNhbCUyMGNvbGQlMjBjaGFpbnxlbnwwfHx8Ymx1ZXwxNzU4MzkwNjA0fDA&ixlib=rb-4.1.0&q=85"
      ]
    }
  ];

  const clientLogos = [
    "MediCorp", "HealthPlus", "PharmaCare", "VitalMed", "CurePharma", 
    "LifeScience", "BioHealth", "MedSupply", "HealthTech", "PharmaLink"
  ];

  // Auto-sliding functionality for image carousels
  useEffect(() => {
    capabilities.forEach((_, capabilityIndex) => {
      if (!isHovered[capabilityIndex]) {
        intervalRefs.current[capabilityIndex] = setInterval(() => {
          setCurrentSlide(prev => ({
            ...prev,
            [capabilityIndex]: ((prev[capabilityIndex] || 0) + 1) % capabilities[capabilityIndex].images.length
          }));
        }, 5000); // 5 seconds interval
      }
    });

    return () => {
      Object.values(intervalRefs.current).forEach(interval => {
        if (interval) clearInterval(interval);
      });
    };
  }, [isHovered, capabilities]);

  const handleMouseEnter = (capabilityIndex) => {
    setIsHovered(prev => ({ ...prev, [capabilityIndex]: true }));
    if (intervalRefs.current[capabilityIndex]) {
      clearInterval(intervalRefs.current[capabilityIndex]);
    }
  };

  const handleMouseLeave = (capabilityIndex) => {
    setIsHovered(prev => ({ ...prev, [capabilityIndex]: false }));
  };

  const nextSlide = (capabilityIndex) => {
    setCurrentSlide(prev => ({
      ...prev,
      [capabilityIndex]: ((prev[capabilityIndex] || 0) + 1) % capabilities[capabilityIndex].images.length
    }));
  };

  const prevSlide = (capabilityIndex) => {
    setCurrentSlide(prev => ({
      ...prev,
      [capabilityIndex]: (prev[capabilityIndex] || 0) <= 0 
        ? capabilities[capabilityIndex].images.length - 1 
        : (prev[capabilityIndex] || 0) - 1
    }));
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Why Choose Us - Enhanced */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#2f3631' }}>
            Why Choose SPIRO MULTI ACTIVITIES?
          </h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: '#2f3631', opacity: 0.8 }}>
            Nine compelling reasons that make us the preferred pharmaceutical partner worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center" style={{ backgroundColor: reason.color }}>
                <div style={{ color: '#2f3631' }}>
                  {reason.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#2f3631' }}>
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#2f3631', opacity: 0.8 }}>
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Facilities and Capabilities with Image Sliders */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12" style={{ color: '#2f3631' }}>
            Our Facilities and Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div 
                  className="relative mb-6"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <img 
                    src={capability.images[currentSlide[index] || 0]}
                    alt={`${capability.title} ${(currentSlide[index] || 0) + 1}`}
                    className="w-full h-48 object-cover rounded-xl transition-all duration-500"
                  />
                  <button 
                    onClick={() => prevSlide(index)}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-all duration-200"
                    style={{ backgroundColor: 'rgba(47, 54, 49, 0.7)' }}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => nextSlide(index)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-all duration-200"
                    style={{ backgroundColor: 'rgba(47, 54, 49, 0.7)' }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {capability.images.map((_, imgIndex) => (
                      <div 
                        key={imgIndex}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          (currentSlide[index] || 0) === imgIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                        }`}
                      />
                    ))}
                  </div>
                  {isHovered[index] && (
                    <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                      Paused
                    </div>
                  )}
                </div>
                <h4 className="text-xl font-bold mb-4" style={{ color: '#2f3631' }}>
                  {capability.title}
                </h4>
                <p className="leading-relaxed" style={{ color: '#2f3631', opacity: 0.8 }}>
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Clients & Partnerships with Infinite Scroll */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-center mb-8" style={{ color: '#2f3631' }}>
            Clients & Partnerships
          </h3>
          <p className="text-lg text-center mb-8 leading-relaxed" style={{ color: '#2f3631', opacity: 0.8 }}>
            Trusted by leading healthcare organizations worldwide
          </p>
          
          {/* Infinite Scrolling Client Logos */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll-slow hover:animate-scroll-pause">
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 mx-8 px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
                  style={{ 
                    backgroundColor: '#fefee2',
                    color: '#2f3631',
                    minWidth: '150px',
                    textAlign: 'center'
                  }}
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
          width: calc(150px * 20 + 64px * 20); /* Approximate width calculation */
        }

        .animate-scroll-slow {
          animation: scroll 40s linear infinite;
          width: calc(150px * 20 + 64px * 20); /* Approximate width calculation */
        }

        .animate-scroll-pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default EnhancedWhyChooseUsSection;