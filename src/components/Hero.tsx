
import { Calendar, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen bg-hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-prussian-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Your Journey to
            <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Mental Wellness
            </span> 
            Starts Here
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Dr. Serena Blake offers compassionate, evidence-based therapy to help you overcome anxiety, 
            strengthen relationships, and heal from trauma in Los Angeles, CA.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToContact}
              className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book a Free Consultation
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl font-bold text-white mb-2">8+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300">Client Sessions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-300">Confidential</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-8 w-8 text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
