import React, { useState, useEffect, useRef } from "react";
import { Package, Users, Building2, Globe } from "lucide-react";

const CountersSection = () => {
  const [countersVisible, setCountersVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);

  const counters = [
    {
      icon: <Package className="w-8 h-8" />,
      number: 500,
      label: "Pharmaceutical Products",
      color: '#f8d041',
      suffix: '+'
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: 150,
      label: "Healthcare Professionals",
      color: '#23ec6f',
      suffix: '+'
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      number: 25,
      label: "Years of Excellence",
      color: '#44ddf5',
      suffix: '+'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: 15,
      label: "Countries Served",
      color: '#f8d041',
      suffix: '+'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !countersVisible) {
          setCountersVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [countersVisible]);

  useEffect(() => {
    if (countersVisible) {
      counters.forEach((counter, index) => {
        let start = 0;
        const end = counter.number;
        const duration = 2000; // 2 seconds
        const increment = end / (duration / 16); // ~60fps

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          
          setAnimatedNumbers(prev => {
            const newNumbers = [...prev];
            newNumbers[index] = Math.floor(start);
            return newNumbers;
          });
        }, 16);

        return () => clearInterval(timer);
      });
    }
  }, [countersVisible]);

  return (
    <section ref={sectionRef} className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {counters.map((counter, index) => (
            <div 
              key={index} 
              className={`text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${
                countersVisible ? 'animate-counter-card' : ''
              }`}
              style={{
                animation: countersVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s forwards` : 'none',
                opacity: countersVisible ? 1 : 0,
                transform: countersVisible ? 'translateY(0)' : 'translateY(30px)',
                border: `2px solid transparent`,
                backgroundImage: `linear-gradient(white, white), linear-gradient(45deg, ${counter.color}, ${counter.color}66)`,
                backgroundOrigin: 'border-box',
                backgroundClip: 'content-box, border-box'
              }}
            >
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-300 hover:scale-110" 
                style={{ backgroundColor: counter.color }}
              >
                <div style={{ color: '#2f3631' }}>
                  {counter.icon}
                </div>
              </div>
              <div 
                className="text-4xl font-bold mb-2 transition-all duration-300" 
                style={{ color: counter.color }}
              >
                {animatedNumbers[index]}{counter.suffix}
              </div>
              <div className="text-lg font-medium" style={{ color: '#2f3631' }}>
                {counter.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-border {
          0% {
            box-shadow: 0 0 0 0 rgba(248, 208, 65, 0.4);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(248, 208, 65, 0.1);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(248, 208, 65, 0);
          }
        }

        .animate-counter-card:hover {
          animation: pulse-border 1.5s infinite;
        }
      `}</style>
    </section>
  );
};

export default CountersSection;