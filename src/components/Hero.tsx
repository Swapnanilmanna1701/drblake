
import { Calendar, ArrowDown, Heart, Brain, Activity } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen bg-hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* 3D Floating Health Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main floating elements */}
        <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-prussian-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* 3D Health Icons */}
        <div className="absolute top-1/3 right-1/5 animate-float opacity-20" style={{ animationDelay: '0.5s' }}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 transform rotate-12 hover:rotate-0 transition-transform duration-500">
            <Heart className="h-8 w-8 sm:h-12 sm:w-12 text-white" />
          </div>
        </div>
        
        <div className="absolute bottom-1/3 left-1/6 animate-float opacity-20" style={{ animationDelay: '1.5s' }}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 transform -rotate-12 hover:rotate-0 transition-transform duration-500">
            <Brain className="h-8 w-8 sm:h-12 sm:w-12 text-white" />
          </div>
        </div>
        
        <div className="absolute top-1/2 left-1/12 animate-float opacity-20" style={{ animationDelay: '2s' }}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 transform rotate-45 hover:rotate-0 transition-transform duration-500">
            <Activity className="h-6 w-6 sm:h-10 sm:w-10 text-white" />
          </div>
        </div>
        
        {/* Animated DNA-like helix */}
        <div className="absolute top-1/4 right-1/3 opacity-10">
          <div className="w-2 h-32 sm:h-48 relative animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent rounded-full animate-float"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
            Your Journey to
            <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Mental Wellness
            </span> 
            Starts Here
          </h1>
          
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Dr. Serena Blake offers compassionate, evidence-based therapy to help you overcome anxiety, 
            strengthen relationships, and heal from trauma in Los Angeles, CA.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <Button 
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Book a Free Consultation
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-black text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center px-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">8+</div>
              <div className="text-gray-300 text-sm sm:text-base">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300 text-sm sm:text-base">Client Sessions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-300 text-sm sm:text-base">Confidential</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 sm:h-8 sm:w-8 text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
