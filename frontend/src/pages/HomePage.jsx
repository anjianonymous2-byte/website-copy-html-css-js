import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ExpertiseSection from "../components/ExpertiseSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fefee2' }}>
      <Header />
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;