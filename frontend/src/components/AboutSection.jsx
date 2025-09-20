import React from "react";
import { Target, Eye, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#2f3631' }}>
            About SPIRO MULTI ACTIVITIES
          </h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: '#2f3631', opacity: 0.8 }}>
            A leading pharmaceutical company committed to delivering high-quality, innovative, and affordable healthcare solutions. 
            With a broad portfolio encompassing all therapeutic categories, we specialize in cold chain injectable products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Mission */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#f8d041' }}>
              <Target className="w-8 h-8" style={{ color: '#2f3631' }} />
            </div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#2f3631' }}>Our Mission</h3>
            <p className="leading-relaxed" style={{ color: '#2f3631', opacity: 0.8 }}>
              To enhance global health by providing top-tier pharmaceutical products, with an emphasis on cold chain logistics and life-saving injectables.
            </p>
          </div>

          {/* Vision */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#23ec6f' }}>
              <Eye className="w-8 h-8" style={{ color: '#2f3631' }} />
            </div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#2f3631' }}>Our Vision</h3>
            <p className="leading-relaxed" style={{ color: '#2f3631', opacity: 0.8 }}>
              To be recognized as a global leader in pharmaceutical distribution, known for our excellence in cold chain management, compliance, and customer-centric approach.
            </p>
          </div>

          {/* Values */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#44ddf5' }}>
              <Heart className="w-8 h-8" style={{ color: '#2f3631' }} />
            </div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#2f3631' }}>Our Values</h3>
            <p className="leading-relaxed" style={{ color: '#2f3631', opacity: 0.8 }}>
              Ensuring safe, effective, and timely access to critical medications through stringent quality control and temperature management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;