import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import CountersSection from "../components/CountersSection";
import EnhancedAboutSection from "../components/EnhancedAboutSection";
import EnhancedExpertiseSection from "../components/EnhancedExpertiseSection";
import EnhancedWhyChooseUsSection from "../components/EnhancedWhyChooseUsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fefee2' }}>
      <Header />
      <HeroSection />
      <CountersSection />
      <EnhancedAboutSection />
      <EnhancedExpertiseSection />
      <EnhancedWhyChooseUsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;