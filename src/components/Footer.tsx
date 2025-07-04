
import { Brain, MapPin, Phone, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-prussian-blue to-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-white/10 rounded-full">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Dr. Serena Blake</h3>
                <p className="text-gray-300">Clinical Psychologist</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Providing compassionate, evidence-based therapy to help you overcome anxiety, 
              strengthen relationships, and heal from trauma in Los Angeles, CA.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <Heart className="h-4 w-4 text-red-400" />
              <span className="text-sm">Licensed Clinical Psychologist • 8 Years Experience</span>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 text-gray-300" />
                <div className="text-gray-300 text-sm">
                  <p>1287 Maplewood Drive</p>
                  <p>Los Angeles, CA 90026</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-300" />
                <span className="text-gray-300 text-sm">(323) 555-0192</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-300" />
                <span className="text-gray-300 text-sm">serena@blakepsychology.com</span>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Office Hours</h4>
            <div className="space-y-3 text-gray-300 text-sm">
              <div>
                <p className="font-semibold text-white">In-Person Sessions</p>
                <p>Tuesday & Thursday</p>
                <p>10:00 AM - 6:00 PM</p>
              </div>
              <div>
                <p className="font-semibold text-white">Virtual Sessions</p>
                <p>Monday, Wednesday & Friday</p>
                <p>1:00 PM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Specialties Banner */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="text-center">
            <p className="text-gray-300 mb-4">Specializing in:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Anxiety & Stress Management',
                'Relationship Counseling', 
                'Trauma Recovery',
                'Evidence-Based Therapy',
                'Virtual & In-Person Sessions'
              ].map((specialty, index) => (
                <span key={index} className="bg-white/10 px-4 py-2 rounded-full text-sm text-gray-200 border border-white/20">
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © 2024 Dr. Serena Blake, PsyD. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-300">
              <button className="hover:text-white transition-colors duration-300">Privacy Policy</button>
              <button className="hover:text-white transition-colors duration-300">Terms of Service</button>
              <button className="hover:text-white transition-colors duration-300">Professional Licensing</button>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-white/5 rounded-xl max-w-2xl mx-auto">
            <p className="text-gray-300 text-sm">
              <strong className="text-white">Confidentiality Notice:</strong> This website and all communications are HIPAA compliant. 
              Your privacy and confidentiality are protected by law and professional ethics.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
