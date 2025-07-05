
import { Calendar, ArrowDown, Heart, Brain, Activity } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen bg-hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Simplified floating health elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main floating elements with reduced effects */}
        <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-white/3 rounded-full blur-2xl animate-float-3d"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-prussian-blue/5 rounded-full blur-2xl animate-float-3d-reverse" style={{ animationDelay: '1s' }}></div>
        
        {/* Simplified health icons */}
        <div className="absolute top-1/3 right-1/5 animate-float-3d opacity-20 hover:opacity-40 transition-opacity duration-500" style={{ animationDelay: '0.5s' }}>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 transform rotate-12 hover:rotate-0 transition-all duration-500 border border-white/10">
            <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-white/80" />
          </div>
        </div>
        
        <div className="absolute bottom-1/3 left-1/6 animate-float-3d-reverse opacity-20 hover:opacity-40 transition-opacity duration-500" style={{ animationDelay: '1.5s' }}>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 transform -rotate-12 hover:rotate-0 transition-all duration-500 border border-white/10">
            <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-white/80" />
          </div>
        </div>

        {/* Additional floating particles */}
        <div className="absolute top-3/4 right-1/6 w-3 h-3 bg-blue-400/40 rounded-full animate-float-particle blur-sm"></div>
        <div className="absolute top-1/6 left-2/3 w-4 h-4 bg-purple-400/30 rounded-full animate-float-particle-reverse blur-sm" style={{ animationDelay: '0.8s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2 drop-shadow-2xl">
            Your Journey to
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-pulse bg-300% drop-shadow-lg">
              Mental Wellness
            </span> 
            Starts Here
          </h1>
          
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4 drop-shadow-lg">
            Dr. Serena Blake offers compassionate, evidence-based therapy to help you overcome anxiety, 
            strengthen relationships, and heal from trauma in Los Angeles, CA.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <Button 
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Book a Free Consultation
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto border-2 border-white/40 bg-white/5 backdrop-blur-md text-white hover:bg-white hover:text-black text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center px-4">
            <div className="hero-stat-card-minimal group">
              <div className="hero-stat-inner-minimal">
                <div className="hero-stat-front-minimal">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">8+</div>
                  <div className="text-gray-300 text-sm sm:text-base">Years Experience</div>
                </div>
                <div className="hero-stat-back-minimal">
                  <div className="text-white font-semibold mb-1">Professional Excellence</div>
                  <div className="text-gray-300 text-xs">Dedicated to mental health</div>
                </div>
              </div>
            </div>
            
            <div className="hero-stat-card-minimal group">
              <div className="hero-stat-inner-minimal">
                <div className="hero-stat-front-minimal">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">500+</div>
                  <div className="text-gray-300 text-sm sm:text-base">Client Sessions</div>
                </div>
                <div className="hero-stat-back-minimal">
                  <div className="text-white font-semibold mb-1">Proven Results</div>
                  <div className="text-gray-300 text-xs">Transforming lives daily</div>
                </div>
              </div>
            </div>
            
            <div className="hero-stat-card-minimal group">
              <div className="hero-stat-inner-minimal">
                <div className="hero-stat-front-minimal">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent mb-2">100%</div>
                  <div className="text-gray-300 text-sm sm:text-base">Confidential</div>
                </div>
                <div className="hero-stat-back-minimal">
                  <div className="text-white font-semibold mb-1">Complete Privacy</div>
                  <div className="text-gray-300 text-xs">Your trust is sacred</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-3d">
          <ArrowDown className="h-6 w-6 sm:h-8 sm:w-8 text-white/70 drop-shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
