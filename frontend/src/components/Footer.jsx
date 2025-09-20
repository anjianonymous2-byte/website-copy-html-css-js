import React from "react";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6" style={{ backgroundColor: '#2f3631' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#f8d041' }}>
                <span className="text-xl font-bold" style={{ color: '#2f3631' }}>S</span>
              </div>
              <span className="text-xl font-bold text-white">SPIRO MULTI ACTIVITIES</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Leading pharmaceutical company committed to delivering high-quality, innovative, and affordable healthcare solutions. 
              Specializing in cold chain injectable products with stringent temperature control.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#f8d041' }}>
                <span className="text-sm font-bold" style={{ color: '#2f3631' }}>GDP</span>
              </div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#23ec6f' }}>
                <span className="text-sm font-bold" style={{ color: '#2f3631' }}>GMP</span>
              </div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#44ddf5' }}>
                <span className="text-sm font-bold" style={{ color: '#2f3631' }}>WHO</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <div className="space-y-3">
              <button className="block text-gray-300 hover:text-white transition-colors duration-200">
                About Us
              </button>
              <button className="block text-gray-300 hover:text-white transition-colors duration-200">
                Our Expertise
              </button>
              <button className="block text-gray-300 hover:text-white transition-colors duration-200">
                Cold Chain Solutions
              </button>
              <button className="block text-gray-300 hover:text-white transition-colors duration-200">
                Quality Assurance
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1" style={{ color: '#f8d041' }} />
                <span className="text-gray-300 text-sm">Sudan, Khartoum Al Souq Al Arabi</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-1" style={{ color: '#23ec6f' }} />
                <div className="text-gray-300 text-sm">
                  <div>+249912577478</div>
                  <div>+249100077079</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-1" style={{ color: '#44ddf5' }} />
                <span className="text-gray-300 text-sm">info@spiromultiactivities.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Globe className="w-5 h-5 mt-1" style={{ color: '#f8d041' }} />
                <span className="text-gray-300 text-sm">spiro.multiactivity.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 SPIRO MULTI ACTIVITIES CO. LTD. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>WHO GDP Compliant</span>
              <span>•</span>
              <span>GMP Standards</span>
              <span>•</span>
              <span>24/7 Cold Chain</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;