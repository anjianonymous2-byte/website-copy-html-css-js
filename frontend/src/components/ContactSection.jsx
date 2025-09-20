import React, { useState } from "react";
import { MapPin, Phone, Mail, Globe, Send } from "lucide-react";
import { toast } from "../hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "We will get back to you within 24 hours. A confirmation email has been sent to your email address.",
          duration: 5000,
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Head Office",
      details: "Sudan, Khartoum Al Souq Al Arabi",
      color: '#f8d041'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+249912577478, +249100077079",
      color: '#23ec6f'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "info@spiromultiactivities.com",
      color: '#44ddf5'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Website",
      details: "spiro.multiactivity.com",
      color: '#f8d041'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#2f3631' }}>
            Let's Work Together
          </h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: '#2f3631', opacity: 0.8 }}>
            Whether you're seeking a reliable partner for high-value cold chain injectables or a full-spectrum 
            pharmaceutical supplier, SPIRO MULTI ACTIVITIES CO. LTD is your trusted partner in healthcare logistics and distribution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8" style={{ color: '#2f3631' }}>
              Get in Touch
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: info.color }}>
                    <div style={{ color: '#2f3631' }}>
                      {info.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#2f3631' }}>
                      {info.title}
                    </h4>
                    <p style={{ color: '#2f3631', opacity: 0.8 }}>
                      {info.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#2f3631' }}>
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#2f3631' }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 transition-all duration-200"
                    style={{ 
                      borderColor: '#f8d041',
                      backgroundColor: '#fefee2',
                      color: '#2f3631'
                    }}
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#2f3631' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 transition-all duration-200"
                    style={{ 
                      borderColor: '#f8d041',
                      backgroundColor: '#fefee2',
                      color: '#2f3631'
                    }}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#2f3631' }}>
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 transition-all duration-200"
                  style={{ 
                    borderColor: '#f8d041',
                    backgroundColor: '#fefee2',
                    color: '#2f3631'
                  }}
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#2f3631' }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 transition-all duration-200 resize-none"
                  style={{ 
                    borderColor: '#f8d041',
                    backgroundColor: '#fefee2',
                    color: '#2f3631'
                  }}
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                style={{ 
                  backgroundColor: '#f8d041', 
                  color: '#2f3631' 
                }}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;