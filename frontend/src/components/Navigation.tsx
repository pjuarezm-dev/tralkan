import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; 
import Logo from "/src/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio"); 

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Relatos", href: "#relatos" },
    { name: "Material Extra", href: "#galeria" },
    { name: "Equipo de Trabajo", href: "#equipo" },
    { name: "Contáctanos", href: "#contacto" },
  ];

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
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

  // Smooth scroll function
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    
    setIsOpen(false); // Close mobile menu
  };

  const isHome = activeSection === "inicio";
  
  return (
    <nav  className={`fixed w-full z-50 transition-all duration-300 ${
        isHome
          ? "bg-transparent text-gray-900"  
          : "bg-black text-white shadow-md"  
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 transition-transform duration-200 hover:scale-105">
            <img
              src={Logo}
              alt="Tralkán Logo"
              className="h-10 w-auto bg-white"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2 text-md transition-all duration-300 relative group ${
                    activeSection === item.href.substring(1)
                      ? 'text-yellow-600'
                      : isHome
                        ? 'text-gray-700 hover:text-yellow-600'
                        : 'text-white hover:text-yellow-600'
                        
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-600 transition-all duration-300 ${
                    activeSection === item.href.substring(1) 
                      ? 'scale-x-100' 
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </a>
              ))}
              <a
                href="https://instagram.com/tralkan.comic/"
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-pink-600 transition-all duration-300 hover:scale-110 ${
                  isHome
                        ? 'text-gray-700 hover:text-yellow-600'
                        : 'text-white hover:text-yellow-600'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 p-2 transition-all duration-300 hover:scale-110"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  size={24} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                  }`} 
                />
                <X 
                  size={24} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white border-t border-gray-100 transition-all duration-300 ease-in-out ${
        isOpen 
          ? 'max-h-80 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`block px-3 py-2 text-base font-medium transition-all duration-300 rounded-md ${
                activeSection === item.href.substring(1)
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
              style={{
                animationDelay: `${index * 50}ms`
              }}
            >
              {item.name}
            </a>
          ))}
          <div className="px-3 py-2">
            <a
              href="https://instagram.com/tralkan.comic/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-gray-700 hover:text-pink-600 transition-all duration-300 hover:scale-110"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
