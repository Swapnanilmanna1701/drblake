
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
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Specialized Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-black to-prussian-blue mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Comprehensive mental health services tailored to your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-prussian-blue/20 overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-lg">
                  <service.icon className="h-6 w-6 text-prussian-blue" />
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <DollarSign className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-semibold text-gray-800">{service.price}</span>
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-prussian-blue transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Insurance & Payment</h3>
            <p className="text-gray-600 mb-4">
              While I don't accept insurance directly, I provide superbills for easy self-submission to your insurance provider.
            </p>
            <p className="text-gray-700 font-semibold">
              Both in-person and virtual sessions available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
