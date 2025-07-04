
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  phone: string;
  email: string;
  reason: string;
  preferredTime: string;
  agreeToContact: boolean;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  reason?: string;
  preferredTime?: string;
  agreeToContact?: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    reason: '',
    preferredTime: '',
    agreeToContact: false
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.reason.trim()) newErrors.reason = 'Please tell us what brings you here';
    if (!formData.preferredTime.trim()) newErrors.preferredTime = 'Preferred contact time is required';
    if (!formData.agreeToContact) newErrors.agreeToContact = 'You must agree to be contacted';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. Dr. Blake will respond within 24 hours.",
      });
      
      setFormData({
        name: '',
        phone: '',
        email: '',
        reason: '',
        preferredTime: '',
        agreeToContact: false
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-black to-prussian-blue mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to begin your journey to mental wellness? Reach out today for a free consultation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="animate-slide-in">
              <div className="bg-gradient-to-br from-prussian-blue to-black rounded-3xl p-6 sm:p-8 text-white h-full">
                <h3 className="text-xl sm:text-2xl font-bold mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 mt-1 text-gray-300 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Office Location</h4>
                      <p className="text-gray-300 text-sm sm:text-base">
                        1287 Maplewood Drive<br />
                        Los Angeles, CA 90026
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 mt-1 text-gray-300 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-gray-300 text-sm sm:text-base">(323) 555-0192</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 mt-1 text-gray-300 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-gray-300 text-sm sm:text-base">serena@blakepsychology.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 mt-1 text-gray-300 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Office Hours</h4>
                      <div className="text-gray-300 space-y-1 text-sm sm:text-base">
                        <p>In-person: Tue & Thu, 10 AM–6 PM</p>
                        <p>Virtual: Mon, Wed & Fri, 1 PM–5 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 sm:p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span className="font-semibold text-sm sm:text-base">Free Consultation Available</span>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    Schedule a complimentary 15-minute consultation to see if we're a good fit for your therapeutic journey.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-200">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Name *
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className={`${errors.name ? 'border-red-500' : ''}`}
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone *
                    </label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className={`${errors.phone ? 'border-red-500' : ''}`}
                      placeholder="(323) 555-0123"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className={`${errors.email ? 'border-red-500' : ''}`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      What brings you here? *
                    </label>
                    <Textarea
                      value={formData.reason}
                      onChange={(e) => handleChange('reason', e.target.value)}
                      className={`${errors.reason ? 'border-red-500' : ''} min-h-[100px]`}
                      placeholder="Tell me a bit about what you'd like to work on..."
                    />
                    {errors.reason && <p className="text-red-500 text-sm mt-1">{errors.reason}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred time to reach you *
                    </label>
                    <Input
                      value={formData.preferredTime}
                      onChange={(e) => handleChange('preferredTime', e.target.value)}
                      className={`${errors.preferredTime ? 'border-red-500' : ''}`}
                      placeholder="e.g., weekday mornings, evenings after 6pm"
                    />
                    {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>}
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      checked={formData.agreeToContact}
                      onCheckedChange={(checked) => handleChange('agreeToContact', checked as boolean)}
                      className={`${errors.agreeToContact ? 'border-red-500' : ''} mt-1 flex-shrink-0`}
                    />
                    <div>
                      <label className="text-sm text-gray-700 leading-relaxed">
                        I agree to be contacted by Dr. Serena Blake regarding my inquiry. I understand that this form is secure and my information will be kept confidential. *
                      </label>
                      {errors.agreeToContact && <p className="text-red-500 text-sm mt-1">{errors.agreeToContact}</p>}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-black to-prussian-blue hover:from-gray-800 hover:to-prussian-blue/90 text-white py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-600 text-center">
                    🔒 Your information is secure and confidential. 
                    Dr. Blake will respond within 24 hours during business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
