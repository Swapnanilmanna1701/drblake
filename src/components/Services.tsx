
import { Heart, Users, Shield, DollarSign, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Anxiety & Stress Management",
      description: "Learn effective coping strategies to manage anxiety and reduce stress through evidence-based cognitive-behavioral techniques. We'll work together to identify triggers and develop personalized tools for lasting relief.",
      image: "/lovable-uploads/148e681a-d303-450d-8549-56d371062942.png",
      price: "$200 / session"
    },
    {
      icon: Users,
      title: "Relationship Counseling",
      description: "Strengthen your relationships through improved communication, conflict resolution, and deeper emotional connection. Whether couples or family therapy, we focus on building healthier, more fulfilling relationships.",
      image: "/lovable-uploads/a46182f3-7057-4345-a743-89aaf1c8688a.png",
      price: "$240 / session"
    },
    {
      icon: Shield,
      title: "Trauma Recovery",
      description: "Heal from past traumatic experiences using specialized therapeutic approaches including EMDR and trauma-focused CBT. Create a safe space to process difficult emotions and rebuild resilience.",
      image: "/lovable-uploads/217ef4fb-a008-441e-8cb5-21a896db7ed4.png",
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
            <div key={index} className="group relative animate-fade-in modern-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-glow"></div>
              <Card className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden h-full hover:border-transparent transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-500/25">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative h-48 sm:h-56 overflow-hidden rounded-t-2xl">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                  
                  {/* Floating icon */}
                  <div className="absolute top-4 left-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm p-3 rounded-full border border-white/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 modern-icon-glow">
                    <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-300 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  {/* Price badge */}
                  <div className="absolute bottom-4 right-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 px-3 py-1 rounded-full group-hover:scale-105 transition-all duration-300">
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-3 w-3 sm:h-4 sm:w-4 text-green-400" />
                      <span className="text-xs sm:text-sm font-semibold text-green-300">{service.price}</span>
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <CardHeader className="relative z-10 pb-2 sm:pb-4">
                  <CardTitle className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10 pt-0">
                  <CardDescription className="text-gray-300 leading-relaxed text-sm sm:text-base group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </CardDescription>
                </CardContent>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-in-out"></div>
              </Card>
            </div>
          ))}
        </div>

        {/* Enhanced Insurance & Payment Card */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="relative max-w-4xl mx-auto mx-4">
            {/* Prominent card with enhanced styling */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-700/50 backdrop-blur-xl insurance-card-hover">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent rounded-3xl"></div>
                
                {/* Decorative elements */}
                <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                  <Sparkles className="h-8 w-8 text-blue-400 animate-pulse" />
                </div>
                <div className="absolute bottom-6 left-6 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                  <DollarSign className="h-12 w-12 text-green-400 animate-bounce-slow" />
                </div>
                
                <div className="relative z-10 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <DollarSign className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                    Insurance & Payment Options
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                      While I don't accept insurance directly, I provide detailed superbills for easy self-submission to your insurance provider for potential reimbursement.
                    </p>
                    <p className="text-blue-200 font-semibold text-base sm:text-lg">
                      ✨ Both in-person and virtual sessions available
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-4 mt-8">
                    <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 px-4 py-2 rounded-full">
                      <span className="text-green-300 font-medium">Flexible Payment Plans</span>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-400/30 px-4 py-2 rounded-full">
                      <span className="text-blue-300 font-medium">HSA/FSA Accepted</span>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 px-4 py-2 rounded-full">
                      <span className="text-purple-300 font-medium">Superbill Provided</span>
                    </div>
                  </div>
                </div>
                
                {/* Subtle floating particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-float-particle"></div>
                  <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-purple-400/30 rounded-full animate-float-particle-reverse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute bottom-1/4 left-2/3 w-2 h-2 bg-indigo-400/30 rounded-full animate-float-particle" style={{ animationDelay: '2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
