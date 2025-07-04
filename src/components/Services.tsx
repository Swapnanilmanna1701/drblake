
import { Heart, Users, Shield, DollarSign } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Anxiety & Stress Management",
      description: "Learn effective coping strategies to manage anxiety and reduce stress through evidence-based cognitive-behavioral techniques. We'll work together to identify triggers and develop personalized tools for lasting relief.",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$200 / session"
    },
    {
      icon: Users,
      title: "Relationship Counseling",
      description: "Strengthen your relationships through improved communication, conflict resolution, and deeper emotional connection. Whether couples or family therapy, we focus on building healthier, more fulfilling relationships.",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$240 / session"
    },
    {
      icon: Shield,
      title: "Trauma Recovery",
      description: "Heal from past traumatic experiences using specialized therapeutic approaches including EMDR and trauma-focused CBT. Create a safe space to process difficult emotions and rebuild resilience.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "$200 / session"
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-gradient-to-br from-black via-gray-900 to-prussian-blue relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-32 sm:w-64 h-32 sm:h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-prussian-blue/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Specialized Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-300 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-300 px-4">
            Comprehensive mental health services tailored to your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group bg-white/10 backdrop-blur-lg border-2 border-white/20 hover:border-white/40 hover:shadow-2xl hover:shadow-prussian-blue/20 transition-all duration-500 overflow-hidden animate-fade-in transform hover:scale-105 hover:-translate-y-2" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/50 transition-all duration-300"></div>
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm p-3 rounded-full shadow-lg border border-white/30 group-hover:bg-white/30 transition-all duration-300">
                  <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="absolute bottom-4 right-4 bg-green-500/20 backdrop-blur-sm border border-green-400/30 px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <DollarSign className="h-3 w-3 sm:h-4 sm:w-4 text-green-400" />
                    <span className="text-xs sm:text-sm font-semibold text-green-300">{service.price}</span>
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-2 sm:pb-4">
                <CardTitle className="text-lg sm:text-xl font-bold text-white group-hover:text-gray-200 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-gray-300 leading-relaxed text-sm sm:text-base group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto border border-white/20 hover:border-white/30 transition-all duration-300 mx-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Insurance & Payment</h3>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              While I don't accept insurance directly, I provide superbills for easy self-submission to your insurance provider.
            </p>
            <p className="text-gray-200 font-semibold text-sm sm:text-base">
              Both in-person and virtual sessions available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
