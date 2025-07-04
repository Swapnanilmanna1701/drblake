
import { Award, MapPin, Clock, Phone, Mail } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Dr. Serena Blake
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-black to-prussian-blue mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Licensed Clinical Psychologist dedicated to your mental wellness journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo and Credentials */}
            <div className="animate-slide-in">
              <div className="relative">
                <div className="bg-gradient-to-br from-prussian-blue to-black p-1 rounded-3xl">
                  <img 
                    src="/lovable-uploads/210cf7e1-e828-4275-ad48-aac5ee70dfe3.png"
                    alt="Dr. Serena Blake, Clinical Psychologist"
                    className="w-full h-[500px] object-cover rounded-3xl"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
                  <div className="flex items-center space-x-3">
                    <Award className="h-8 w-8 text-prussian-blue" />
                    <div>
                      <div className="font-bold text-gray-900">Licensed</div>
                      <div className="text-sm text-gray-600">PsyD, CA</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Dr. Serena Blake, PsyD
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, 
                  with eight years of experience and over 500 client sessions. She blends evidence-based 
                  approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, 
                  personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Whether you meet in her Maplewood Drive office or connect virtually via Zoom, 
                  Dr. Blake is committed to creating a safe, supportive space for you to thrive.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <MapPin className="h-6 w-6 text-prussian-blue mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                  <p className="text-gray-600 text-sm">
                    1287 Maplewood Drive<br />
                    Los Angeles, CA 90026
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <Phone className="h-6 w-6 text-prussian-blue mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                  <p className="text-gray-600 text-sm">(323) 555-0192</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <Mail className="h-6 w-6 text-prussian-blue mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600 text-sm">serena@blakepsychology.com</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <Clock className="h-6 w-6 text-prussian-blue mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Office Hours</h4>
                  <div className="text-gray-600 text-sm space-y-1">
                    <p>In-person: Tue & Thu, 10 AM–6 PM</p>
                    <p>Virtual: Mon, Wed & Fri, 1 PM–5 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
