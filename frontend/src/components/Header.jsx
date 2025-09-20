import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4" style={{ backgroundColor: 'rgba(254, 254, 226, 0.95)' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#f8d041' }}>
            <span className="text-xl font-bold" style={{ color: '#2f3631' }}>S</span>
          </div>
          <span className="text-xl font-bold" style={{ color: '#2f3631' }}>SPIRO</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="font-medium hover:opacity-70 transition-opacity duration-200"
            style={{ color: '#2f3631' }}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="font-medium hover:opacity-70 transition-opacity duration-200"
            style={{ color: '#2f3631' }}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('expertise')}
            className="font-medium hover:opacity-70 transition-opacity duration-200"
            style={{ color: '#2f3631' }}
          >
            Expertise
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="font-medium hover:opacity-70 transition-opacity duration-200"
            style={{ color: '#2f3631' }}
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ color: '#2f3631' }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 md:hidden p-6" style={{ backgroundColor: '#fefee2' }}>
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="font-medium text-left hover:opacity-70 transition-opacity duration-200"
                style={{ color: '#2f3631' }}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="font-medium text-left hover:opacity-70 transition-opacity duration-200"
                style={{ color: '#2f3631' }}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('expertise')}
                className="font-medium text-left hover:opacity-70 transition-opacity duration-200"
                style={{ color: '#2f3631' }}
              >
                Expertise
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="font-medium text-left hover:opacity-70 transition-opacity duration-200"
                style={{ color: '#2f3631' }}
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;