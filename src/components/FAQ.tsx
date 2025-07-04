
import { Plus, Minus } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "No, I don't accept insurance directly. However, I provide superbills that you can submit to your insurance provider for potential reimbursement. Many clients find this process straightforward, and I'm happy to help you understand how to submit these forms."
    },
    {
      question: "Are online sessions available?",
      answer: "Yes! I offer virtual sessions via Zoom on Mondays, Wednesdays, and Fridays from 1 PM to 5 PM. Online therapy can be just as effective as in-person sessions and offers the convenience of participating from your own safe space."
    },
    {
      question: "What is your cancellation policy?",
      answer: "I require 24-hour notice for cancellations. This allows me to offer your appointment time to other clients who may be waiting. Cancellations made with less than 24-hour notice will be charged the full session fee."
    },
    {
      question: "How long are therapy sessions?",
      answer: "Individual therapy sessions are 50 minutes long, while couples sessions are typically 75 minutes. This gives us adequate time to explore issues thoroughly while maintaining a structured therapeutic framework."
    },
    {
      question: "What should I expect in my first session?",
      answer: "Your first session will focus on getting to know you and understanding what brings you to therapy. We'll discuss your goals, history, and what you hope to achieve. This helps me create a personalized treatment plan that addresses your specific needs."
    },
    {
      question: "How often should I attend therapy sessions?",
      answer: "Most clients benefit from weekly sessions initially. As you progress, we may adjust the frequency based on your needs and goals. The length of treatment varies depending on individual circumstances and therapeutic objectives."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-black to-prussian-blue mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Everything you need to know about starting your therapy journey
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-gray-50 rounded-2xl border border-gray-200 px-6 hover:shadow-lg transition-all duration-300"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-semibold text-gray-900 hover:text-prussian-blue transition-colors duration-300">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-gradient-to-br from-prussian-blue to-black rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="mb-6 text-gray-200">
                I'm here to help. Feel free to reach out with any additional questions about therapy or getting started.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-prussian-blue px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
