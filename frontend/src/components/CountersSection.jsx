import React from "react";
import { Package, Users, Building2, Globe } from "lucide-react";

const CountersSection = () => {
  const counters = [
    {
      icon: <Package className="w-8 h-8" />,
      number: "500+",
      label: "Pharmaceutical Products",
      color: '#f8d041'
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "150+",
      label: "Healthcare Professionals",
      color: '#23ec6f'
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      number: "25+",
      label: "Years of Excellence",
      color: '#44ddf5'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: "15+",
      label: "Countries Served",
      color: '#f8d041'
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {counters.map((counter, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: counter.color }}>
                <div style={{ color: '#2f3631' }}>
                  {counter.icon}
                </div>
              </div>
              <div className="text-4xl font-bold mb-2" style={{ color: counter.color }}>
                {counter.number}
              </div>
              <div className="text-lg font-medium" style={{ color: '#2f3631' }}>
                {counter.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountersSection;