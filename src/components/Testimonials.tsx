
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      condition: "Anxiety Recovery",
      text: "Dr. Blake helped me understand my anxiety patterns and gave me practical tools that actually work. I feel more confident and in control of my life now.",
      rating: 5,
      months: "After 6 months"
    },
    {
      name: "Michael & Jennifer R.",
      condition: "Couples Therapy",
      text: "We were on the verge of separation when we started seeing Dr. Blake. Her guidance helped us reconnect and communicate better than we have in years.",
      rating: 5,
      months: "After 8 months"
    },
    {
      name: "David L.",
      condition: "Trauma Recovery",
      text: "Working through my past trauma seemed impossible until I met Dr. Blake. Her compassionate approach made me feel safe to heal at my own pace.",
      rating: 5,
      months: "After 1 year"
    },
    {
      name: "Lisa K.",
      condition: "Stress Management",
      text: "The mindfulness techniques Dr. Blake taught me have transformed how I handle work stress. I'm sleeping better and feel more balanced overall.",
      rating: 5,
      months: "After 4 months"
    },
    {
      name: "Robert T.",
      condition: "Relationship Issues",
      text: "Dr. Blake's insight into relationship dynamics opened my eyes to patterns I never noticed. I'm building healthier connections with everyone in my life.",
      rating: 5,
      months: "After 7 months"
    },
    {
      name: "Maria S.",
      condition: "Anxiety & Depression",
      text: "I was skeptical about therapy, but Dr. Blake's evidence-based approach and genuine care helped me overcome both anxiety and depression. Life feels hopeful again.",
      rating: 5,
      months: "After 10 months"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Client Success Stories
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-black to-prussian-blue mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from individuals who have found healing and growth through our work together
          </p>
        </div>

        {/* Animated scrolling testimonials */}
        <div className="relative">
          <div className="flex space-x-6 animate-scroll hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-80 bg-white hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-prussian-blue/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-prussian-blue mr-3" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.condition}</p>
                      </div>
                      <div className="text-right">
                        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                          {testimonial.months}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h3>
            <p className="text-gray-600 mb-6">
              Join the many clients who have found hope, healing, and personal growth through compassionate, evidence-based therapy.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-black to-prussian-blue text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
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
