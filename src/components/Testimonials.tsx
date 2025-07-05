
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      condition: "Anxiety Recovery",
      text: "Dr. Blake helped me understand my anxiety patterns and gave me practical tools that actually work. I feel more confident and in control of my life now.",
      rating: 5,
      months: "After 6 months",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b820?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Michael & Jennifer R.",
      condition: "Couples Therapy",
      text: "We were on the verge of separation when we started seeing Dr. Blake. Her guidance helped us reconnect and communicate better than we have in years.",
      rating: 5,
      months: "After 8 months",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "David L.",
      condition: "Trauma Recovery",
      text: "Working through my past trauma seemed impossible until I met Dr. Blake. Her compassionate approach made me feel safe to heal at my own pace.",
      rating: 5,
      months: "After 1 year",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Lisa K.",
      condition: "Stress Management",
      text: "The mindfulness techniques Dr. Blake taught me have transformed how I handle work stress. I'm sleeping better and feel more balanced overall.",
      rating: 5,
      months: "After 4 months",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Robert T.",
      condition: "Relationship Issues",
      text: "Dr. Blake's insight into relationship dynamics opened my eyes to patterns I never noticed. I'm building healthier connections with everyone in my life.",
      rating: 5,
      months: "After 7 months",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Maria S.",
      condition: "Anxiety & Depression",
      text: "I was skeptical about therapy, but Dr. Blake's evidence-based approach and genuine care helped me overcome both anxiety and depression. Life feels hopeful again.",
      rating: 5,
      months: "After 10 months",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-gray-50 overflow-hidden relative">
      {/* Background elements for visual interest */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-32 sm:w-48 h-32 sm:h-48 bg-prussian-blue/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-black/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Client Success Stories
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-black to-prussian-blue mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Real experiences from individuals who have found healing and growth through our work together
          </p>
        </div>

        {/* Enhanced animated scrolling testimonials */}
        <div className="relative">
          <div className="flex space-x-4 sm:space-x-6 animate-scroll hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="testimonial-card-container flex-shrink-0 w-72 sm:w-80">
                <div className="testimonial-card-inner bg-white/80 backdrop-blur-lg border border-white/60 rounded-2xl overflow-hidden relative group">
                  {/* Animated background gradient */}
                  <div className="testimonial-gradient-bg absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Floating orbs */}
                  <div className="testimonial-orb testimonial-orb-1 absolute w-20 h-20 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-1000"></div>
                  <div className="testimonial-orb testimonial-orb-2 absolute w-16 h-16 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-1000 delay-200"></div>
                  
                  {/* Shimmer effect */}
                  <div className="testimonial-shimmer absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  
                  <CardContent className="p-4 sm:p-6 relative z-10">
                    {/* Profile section with enhanced image */}
                    <div className="flex items-center mb-4 sm:mb-6">
                      <div className="relative mr-4 testimonial-avatar-container">
                        <div className="testimonial-avatar-ring absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        <img 
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-white/50 group-hover:border-white/80 transition-all duration-500 relative z-10 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent opacity-50 group-hover:opacity-20 transition-opacity duration-300"></div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900 text-sm sm:text-base group-hover:text-white transition-colors duration-300">{testimonial.name}</h4>
                          <div className="flex space-x-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400 group-hover:fill-yellow-300 group-hover:text-yellow-300 transition-all duration-300 group-hover:scale-110" style={{ animationDelay: `${i * 100}ms` }} />
                            ))}
                          </div>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-200 transition-colors duration-300">{testimonial.condition}</p>
                      </div>
                    </div>
                    
                    {/* Enhanced Quote */}
                    <div className="relative mb-4 sm:mb-6">
                      <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-prussian-blue/30 group-hover:text-white/50 mb-2 transition-all duration-300 group-hover:scale-110" />
                      <p className="text-gray-700 group-hover:text-white leading-relaxed italic text-sm sm:text-base transition-all duration-300 group-hover:scale-[1.02]">
                        "{testimonial.text}"
                      </p>
                    </div>
                    
                    {/* Enhanced Timeline badge */}
                    <div className="flex justify-end">
                      <div className="testimonial-badge bg-gradient-to-r from-green-100 to-green-200 group-hover:from-emerald-400 group-hover:to-teal-400 text-green-800 group-hover:text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border border-green-300/30 group-hover:border-white/30 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg">
                        {testimonial.months}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto shadow-xl border border-white/50 hover:bg-white/90 transition-all duration-300 mx-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Join the many clients who have found hope, healing, and personal growth through compassionate, evidence-based therapy.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-black to-prussian-blue text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              Begin Your Healing Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
