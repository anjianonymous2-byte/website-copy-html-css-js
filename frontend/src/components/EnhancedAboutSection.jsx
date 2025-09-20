import React from "react";
import { Target, Eye, Heart, Award, Users2, Lightbulb } from "lucide-react";

const EnhancedAboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#2f3631' }}>
            About SPIRO MULTI ACTIVITIES
          </h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: '#2f3631', opacity: 0.8 }}>
            A leading pharmaceutical company committed to delivering high-quality, innovative, and affordable healthcare solutions. 
            With a broad portfolio encompassing all therapeutic categories, we specialize in cold chain injectable products.
          </p>
        </div>

        {/* CEO Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxDRU8lMjBwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzU4MzgzODY5fDA&ixlib=rb-4.1.0&q=85"
                alt="CEO of SPIRO MULTI ACTIVITIES"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full mr-4 flex items-center justify-center" style={{ backgroundColor: '#f8d041' }}>
                  <Award className="w-6 h-6" style={{ color: '#2f3631' }} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: '#2f3631' }}>Dr. Sarah Ahmed</h3>
                  <p className="text-lg" style={{ color: '#2f3631', opacity: 0.7 }}>CEO & Founder</p>
                </div>
              </div>
              
              <p className="text-lg mb-6 leading-relaxed" style={{ color: '#2f3631', opacity: 0.8 }}>
                With over 20 years of experience in pharmaceutical excellence, Dr. Sarah Ahmed has led SPIRO MULTI ACTIVITIES 
                to become a trusted name in cold chain logistics and pharmaceutical distribution across the region.
              </p>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border-l-4" style={{ borderColor: '#23ec6f' }}>
                <div className="flex items-start space-x-4">
                  <Lightbulb className="w-6 h-6 mt-1" style={{ color: '#f8d041' }} />
                  <div>
                    <p className="text-lg font-medium italic mb-2" style={{ color: '#2f3631' }}>
                      "Excellence in pharmaceutical care is not just about delivering products – it's about preserving life through precision, integrity, and unwavering commitment to quality."
                    </p>
                    <p className="text-sm font-medium" style={{ color: '#2f3631', opacity: 0.7 }}>
                      - Dr. Sarah Ahmed, CEO
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-xl" style={{ backgroundColor: '#fefee2' }}>
                  <div className="text-2xl font-bold" style={{ color: '#f8d041' }}>PhD</div>
                  <div className="text-sm font-medium" style={{ color: '#2f3631', opacity: 0.7 }}>Pharmaceutical Sciences</div>
                </div>
                <div className="text-center p-4 rounded-xl" style={{ backgroundColor: '#fefee2' }}>
                  <div className="text-2xl font-bold" style={{ color: '#23ec6f' }}>20+</div>
                  <div className="text-sm font-medium" style={{ color: '#2f3631', opacity: 0.7 }}>Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Mission */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-8">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#f8d041' }}>
                <Target className="w-10 h-10" style={{ color: '#2f3631' }} />
              </div>
              <h3 className="text-3xl font-bold mb-4" style={{ color: '#2f3631' }}>Our Mission</h3>
            </div>
            
            <img 
              src="https://images.pexels.com/photos/8942118/pexels-photo-8942118.jpeg"
              alt="Healthcare Mission"
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            
            <p className="leading-relaxed mb-6" style={{ color: '#2f3631', opacity: 0.8 }}>
              To enhance global health by providing top-tier pharmaceutical products, with an emphasis on cold chain logistics and life-saving injectables.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#f8d041' }} />
                <span className="text-sm font-medium" style={{ color: '#2f3631' }}>Global Health Enhancement</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#f8d041' }} />
                <span className="text-sm font-medium" style={{ color: '#2f3631' }}>Life-Saving Injectable Focus</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#f8d041' }} />
                <span className="text-sm font-medium" style={{ color: '#2f3631' }}>Cold Chain Excellence</span>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-8">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#23ec6f' }}>
                <Eye className="w-10 h-10" style={{ color: '#2f3631' }} />
              </div>
              <h3 className="text-3xl font-bold mb-4" style={{ color: '#2f3631' }}>Our Vision</h3>
            </div>
            
            <img 
              src="https://images.pexels.com/photos/8942119/pexels-photo-8942119.jpeg"
              alt="Healthcare Vision"
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            
            <p className="leading-relaxed mb-6" style={{ color: '#2f3631', opacity: 0.8 }}>
              To be recognized as a global leader in pharmaceutical distribution, known for our excellence in cold chain management, compliance, and customer-centric approach.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#23ec6f' }} />
                <span className="text-sm font-medium" style={{ color: '#2f3631' }}>Global Leadership</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#23ec6f' }} />
                <span className="text-sm font-medium" style={{ color: '#2f3631' }}>Customer-Centric Excellence</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#23ec6f' }} />
                <span className="text-sm font-medium" style={{ color: '#2f3631' }}>Regulatory Compliance</span>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-8">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#44ddf5' }}>
                <Heart className="w-10 h-10" style={{ color: '#2f3631' }} />
              </div>
              <h3 className="text-3xl font-bold mb-4" style={{ color: '#2f3631' }}>Our Values</h3>
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1618479955358-5f8e5ab7d630?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMHByb2R1Y3RzfGVufDB8fHx8MTc1ODM4Mzg4MHww&ixlib=rb-4.1.0&q=85"
              alt="Healthcare Values"
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            
            <p className="leading-relaxed mb-6" style={{ color: '#2f3631', opacity: 0.8 }}>
              Ensuring safe, effective, and timely access to critical medications through stringent quality control and temperature management.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#44ddf5' }} />
                <span className="text-sm font-medium" style={{ color: '#2f3631' }}>Patient Safety First</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#44ddf5' }} />
                <span className="text-sm font-medium" style={{ color: '#2f3631' }}>Quality Excellence</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#44ddf5' }} />
                <span className="text-sm font-medium" style={{ color: '#2f3631' }}>Integrity & Trust</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedAboutSection;