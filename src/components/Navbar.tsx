
import { useState, useEffect } from 'react';
import { Brain, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-md bg-black/20' : 'backdrop-blur-sm bg-black/10'
    } rounded-2xl border border-white/20 px-6 py-3 max-w-4xl w-[90%]`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-br from-prussian-blue to-black rounded-full">
            <Brain className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-white font-bold text-lg">Dr. Serena Blake</h1>
            <p className="text-gray-300 text-xs">Clinical Psychologist</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {[
            { label: 'Home', id: 'hero' },
            { label: 'About', id: 'about' },
            { label: 'Services', id: 'services' },
            { label: 'Testimonials', id: 'testimonials' },
            { label: 'FAQ', id: 'faq' },
            { label: 'Contact', id: 'contact' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-white hover:text-prussian-blue hover:scale-105 transition-all duration-300 font-semibold hover:bg-white/10 px-3 py-2 rounded-lg"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-white/20">
          <div className="flex flex-col space-y-3">
            {[
              { label: 'Home', id: 'hero' },
              { label: 'About', id: 'about' },
              { label: 'Services', id: 'services' },
              { label: 'Testimonials', id: 'testimonials' },
              { label: 'FAQ', id: 'faq' },
              { label: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-prussian-blue transition-all duration-300 font-semibold text-left px-3 py-2 rounded-lg hover:bg-white/10"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
