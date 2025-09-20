import React from "react";
import { CheckCircle, Building2, Users, Globe, Settings, Handshake } from "lucide-react";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Specialized in Cold Chain Injectables",
      color: '#44ddf5'
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Fully Compliant with Global Regulatory Standards",
      color: '#f8d041'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "End-to-End Supply Chain Integrity",
      color: '#23ec6f'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Wide Distribution Network",
      color: '#44ddf5'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Experienced Pharmaceutical Professionals",
      color: '#f8d041'
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Flexible B2B and B2C Solutions",
      color: '#23ec6f'
    }
  ];

  const capabilities = [
    {
      title: "Cold Chain Warehouses",
      description: "Equipped with refrigerated zones, backup power, and real-time tracking"
    },
    {
      title: "Distribution Fleet",
      description: "Temperature-controlled vehicles with validated transport routes"
    },
    {
      title: "Packaging Solutions",
      description: "GDP-compliant insulated packaging and passive cooling systems"
    },
    {
      title: "Monitoring",
      description: "IoT-enabled temperature loggers and audit trails"
    }
  ];

  const clients = [
    "Government health agencies",
    "Hospitals and clinics",
    "Pharmacies and wholesalers",
    "International NGOs",
    "Research and biotech firms"
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Why Choose Us */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#2f3631' }}>
            Why Choose SPIRO MULTI ACTIVITIES?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center" style={{ backgroundColor: reason.color }}>
                <div style={{ color: '#2f3631' }}>
                  {reason.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold" style={{ color: '#2f3631' }}>
                {reason.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Facilities and Capabilities */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12" style={{ color: '#2f3631' }}>
            Our Facilities and Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
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

        {/* Clients & Partnerships */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-center mb-8" style={{ color: '#2f3631' }}>
            Clients & Partnerships
          </h3>
          <p className="text-lg text-center mb-8 leading-relaxed" style={{ color: '#2f3631', opacity: 0.8 }}>
            We proudly serve:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 rounded-xl" style={{ backgroundColor: '#fefee2' }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#f8d041' }} />
                <span className="font-medium" style={{ color: '#2f3631' }}>
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;