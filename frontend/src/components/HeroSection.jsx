import React from "react";
import { ArrowRight, Shield, Thermometer } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Green Triangle */}
        <div 
          className="absolute top-32 left-20 w-64 h-64 opacity-80"
          style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            backgroundColor: '#23ec6f',
            transform: 'rotate(-15deg)'
          }}
        />
        
        {/* Yellow Rectangle */}
        <div 
          className="absolute bottom-32 right-20 w-80 h-48 rounded-3xl opacity-80"
          style={{
            backgroundColor: '#f8d041',
            transform: 'rotate(12deg)'
          }}
        />
        
        {/* Blue Circle */}
        <div 
          className="absolute bottom-20 left-32 w-56 h-56 rounded-full opacity-80"
          style={{ backgroundColor: '#44ddf5' }}
        />
        
        {/* Small accent shapes */}
        <div 
          className="absolute top-64 right-64 w-20 h-20 rounded-full opacity-60"
          style={{ backgroundColor: '#23ec6f' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="mb-8 flex items-center justify-center space-x-4">
          <Shield className="w-8 h-8" style={{ color: '#23ec6f' }} />
          <Thermometer className="w-8 h-8" style={{ color: '#44ddf5' }} />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ color: '#2f3631' }}>
          Pharmaceutical Excellence
          <br />
          <span className="text-4xl md:text-6xl">with Cold Chain Precision</span>
        </h1>
        
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: '#2f3631', opacity: 0.8 }}>
          Leading pharmaceutical company delivering high-quality, innovative healthcare solutions.
          Specializing in cold chain injectable products with stringent temperature control.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button 
            onClick={() => scrollToSection('expertise')}
            className="px-8 py-4 rounded-xl font-semibold text-lg flex items-center space-x-2 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            style={{ 
              backgroundColor: '#f8d041', 
              color: '#2f3631' 
            }}
          >
            <span>Explore Our Expertise</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 rounded-xl font-semibold text-lg border-2 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            style={{ 
              borderColor: '#23ec6f',
              color: '#2f3631',
              backgroundColor: 'transparent'
            }}
          >
            Contact Us
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2" style={{ color: '#f8d041' }}>24/7</div>
            <div className="text-sm font-medium" style={{ color: '#2f3631', opacity: 0.7 }}>Temperature Monitoring</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2" style={{ color: '#23ec6f' }}>WHO GDP</div>
            <div className="text-sm font-medium" style={{ color: '#2f3631', opacity: 0.7 }}>Compliant Standards</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2" style={{ color: '#44ddf5' }}>2°C to 8°C</div>
            <div className="text-sm font-medium" style={{ color: '#2f3631', opacity: 0.7 }}>Storage Capabilities</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;