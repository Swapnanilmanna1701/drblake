
import { Award, MapPin, Clock, Phone, Mail } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-32 sm:w-64 h-32 sm:h-64 bg-prussian-blue/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-black/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Meet Dr. Serena Blake
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-prussian-blue to-black mx-auto mb-4 sm:mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Licensed Clinical Psychologist dedicated to your mental wellness journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Photo with modern style */}
            <div className="animate-slide-in group">
              <div className="relative transform-gpu perspective-1000">
                {/* Main image container with 3D effect */}
                <div className="relative bg-gradient-to-br from-blue-500/20 via-white/30 to-prussian-blue/20 p-1 rounded-3xl transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-y-12 group-hover:shadow-2xl group-hover:shadow-prussian-blue/30">
                  {/* Blue decorative background similar to uploaded image */}
                  <div className="absolute -top-4 -left-4 w-24 sm:w-32 h-16 sm:h-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl transform -rotate-12 group-hover:rotate-6 transition-transform duration-500"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 sm:w-40 h-20 sm:h-24 bg-gradient-to-r from-prussian-blue to-blue-500 rounded-2xl transform rotate-12 group-hover:-rotate-6 transition-transform duration-500"></div>
                  
                  {/* Image with hover animations */}
                  <img 
                    src="/lovable-uploads/210cf7e1-e828-4275-ad48-aac5ee70dfe3.png"
                    alt="Dr. Serena Blake, Clinical Psychologist"
                    className="relative w-full h-[400px] sm:h-[500px] object-cover rounded-3xl z-10 transition-all duration-700 group-hover:brightness-110 group-hover:contrast-105"
                  />
                  
                  {/* Overlay effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-prussian-blue/20 via-transparent to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
                </div>

                {/* Floating credential badge */}
                <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-gradient-to-br from-black via-prussian-blue/80 to-black backdrop-blur-lg rounded-2xl p-4 sm:p-6 shadow-2xl border border-white/20 transform transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 group-hover:rotate-3">
                  <div className="flex items-center space-x-3">
                    <Award className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400 group-hover:animate-bounce" />
                    <div>
                      <div className="font-bold text-white text-sm sm:text-base">Licensed</div>
                      <div className="text-xs sm:text-sm text-gray-300">PsyD, CA</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About Content with 3D cards */}
            <div className="space-y-6 sm:space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-gradient-to-br from-black via-prussian-blue/80 to-black backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-prussian-blue/30 hover:rotate-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 transition-colors duration-300 hover:text-blue-300">
                  Dr. Serena Blake, PsyD
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base transition-colors duration-300 hover:text-gray-100">
                  Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, 
                  with eight years of experience and over 500 client sessions. She blends evidence-based 
                  approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, 
                  personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
                </p>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base transition-colors duration-300 hover:text-gray-100">
                  Whether you meet in her Maplewood Drive office or connect virtually via Zoom, 
                  Dr. Blake is committed to creating a safe, supportive space for you to thrive.
                </p>
              </div>

              {/* Contact Info Cards with 3D effects */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-black via-prussian-blue/80 to-black backdrop-blur-lg p-4 sm:p-6 rounded-xl shadow-lg border border-white/20 transform transition-all duration-500 hover:scale-110 hover:-translate-y-4 hover:rotate-2 hover:shadow-2xl hover:shadow-prussian-blue/30 group">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 mb-3 group-hover:animate-bounce transition-colors duration-300 group-hover:text-white" />
                  <h4 className="font-semibold text-white mb-2 text-sm sm:text-base group-hover:text-blue-300 transition-colors duration-300">Location</h4>
                  <p className="text-gray-300 text-xs sm:text-sm group-hover:text-gray-100 transition-colors duration-300">
                    1287 Maplewood Drive<br />
                    Los Angeles, CA 90026
                  </p>
                </div>

                <div className="bg-gradient-to-br from-black via-prussian-blue/80 to-black backdrop-blur-lg p-4 sm:p-6 rounded-xl shadow-lg border border-white/20 transform transition-all duration-500 hover:scale-110 hover:-translate-y-4 hover:-rotate-2 hover:shadow-2xl hover:shadow-prussian-blue/30 group">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 mb-3 group-hover:animate-bounce transition-colors duration-300 group-hover:text-white" />
                  <h4 className="font-semibold text-white mb-2 text-sm sm:text-base group-hover:text-blue-300 transition-colors duration-300">Phone</h4>
                  <p className="text-gray-300 text-xs sm:text-sm group-hover:text-gray-100 transition-colors duration-300">(323) 555-0192</p>
                </div>

                <div className="bg-gradient-to-br from-black via-prussian-blue/80 to-black backdrop-blur-lg p-4 sm:p-6 rounded-xl shadow-lg border border-white/20 transform transition-all duration-500 hover:scale-110 hover:-translate-y-4 hover:rotate-1 hover:shadow-2xl hover:shadow-prussian-blue/30 group">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 mb-3 group-hover:animate-bounce transition-colors duration-300 group-hover:text-white" />
                  <h4 className="font-semibold text-white mb-2 text-sm sm:text-base group-hover:text-blue-300 transition-colors duration-300">Email</h4>
                  <p className="text-gray-300 text-xs sm:text-sm group-hover:text-gray-100 transition-colors duration-300">serena@blakepsychology.com</p>
                </div>

                <div className="bg-gradient-to-br from-black via-prussian-blue/80 to-black backdrop-blur-lg p-4 sm:p-6 rounded-xl shadow-lg border border-white/20 transform transition-all duration-500 hover:scale-110 hover:-translate-y-4 hover:-rotate-1 hover:shadow-2xl hover:shadow-prussian-blue/30 group">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 mb-3 group-hover:animate-bounce transition-colors duration-300 group-hover:text-white" />
                  <h4 className="font-semibold text-white mb-2 text-sm sm:text-base group-hover:text-blue-300 transition-colors duration-300">Office Hours</h4>
                  <div className="text-gray-300 text-xs sm:text-sm space-y-1 group-hover:text-gray-100 transition-colors duration-300">
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
