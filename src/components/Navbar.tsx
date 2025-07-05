
import { useState, useEffect } from 'react';
import { Brain, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Check which section is currently in view
      const sections = ['hero', 'about', 'services', 'testimonials', 'faq', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
      isScrolled ? 'backdrop-blur-xl bg-black/30' : 'backdrop-blur-lg bg-black/20'
    } rounded-3xl border-2 border-gradient-to-r from-white/30 via-blue-400/40 to-purple-400/30 px-4 sm:px-6 py-2 sm:py-3 max-w-6xl w-[95%] sm:w-[90%] shadow-2xl shadow-black/20 navbar-glass`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="p-1.5 sm:p-2 bg-gradient-to-br from-prussian-blue via-blue-600 to-black rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Brain className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
          </div>
          <div>
            <h1 className="text-white font-bold text-sm sm:text-lg drop-shadow-lg">Dr. Serena Blake</h1>
            <p className="text-gray-300 text-xs hidden sm:block drop-shadow-md">Clinical Psychologist</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative text-white font-semibold px-4 xl:px-6 py-2.5 rounded-2xl text-sm xl:text-base transition-all duration-500 transform hover:scale-105 ${
                activeSection === item.id 
                  ? 'bg-gradient-to-r from-blue-500/80 via-purple-500/60 to-blue-600/80 backdrop-blur-xl shadow-2xl shadow-blue-500/30 border border-white/30 text-blue-100 scale-105 glossy-active' 
                  : 'hover:bg-white/10 hover:backdrop-blur-lg hover:shadow-lg hover:shadow-white/20 glossy-button'
              }`}
            >
              <span className="relative z-10">{item.label}</span>
              {activeSection === item.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 rounded-2xl animate-shimmer"></div>
              )}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white p-2 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 pt-4 border-t border-white/30 animate-fade-in">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-white font-semibold text-left px-4 py-3 rounded-xl text-sm transition-all duration-500 ${
                  activeSection === item.id 
                    ? 'bg-gradient-to-r from-blue-500/80 via-purple-500/60 to-blue-600/80 backdrop-blur-xl shadow-xl shadow-blue-500/20 border border-white/30 text-blue-100 glossy-active' 
                    : 'hover:bg-white/10 hover:backdrop-blur-lg hover:shadow-md glossy-button'
                }`}
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
