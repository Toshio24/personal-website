import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Rocket, Wrench, Microscope, Code } from 'lucide-react';

const sections = [
  { id: 'startups', label: 'Startups', icon: Rocket },
  { id: 'engineering', label: 'Engineering', icon: Wrench },
  { id: 'research', label: 'Research', icon: Microscope },
  { id: 'webdev', label: 'Web Dev', icon: Code },
];

export function ProjectsNavigation() {
  const [activeSection, setActiveSection] = useState('startups');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const startupsSection = document.getElementById('startups');
      const webdevSection = document.getElementById('webdev');
      
      if (!startupsSection || !webdevSection) return;

      const startupsTop = startupsSection.offsetTop;
      const webdevBottom = webdevSection.offsetTop + webdevSection.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Only show if user has scrolled past hero (at least 100px) and is in projects sections
      const hasScrolled = window.scrollY > 100;
      const shouldShow = hasScrolled && scrollPosition >= startupsTop && scrollPosition <= webdevBottom;
      setIsVisible(shouldShow);

      // Update active section
      if (shouldShow) {
        for (const section of sections) {
          const element = document.getElementById(section.id);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section.id);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Don't check initial position - wait for user to scroll
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.6 }}
    >
      <div
        className="rounded-2xl p-6 w-52"
        style={{
          backgroundColor: 'rgba(28, 25, 23, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(234, 179, 8, 0.2)',
        }}
      >
        <h3 className="text-xs font-semibold mb-6 tracking-wider" style={{ color: '#A8A29E' }}>
          PROJECTS
        </h3>
        <div className="space-y-4">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            const Icon = section.icon;
            
            return (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="flex items-center gap-3 w-full text-left transition-all duration-300 group"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0"
                  style={{
                    backgroundColor: isActive ? '#000000' : 'rgba(0, 0, 0, 0.3)',
                    border: isActive ? '1px solid #C9A961' : '1px solid transparent',
                    boxShadow: isActive 
                      ? '0 0 20px rgba(201, 169, 97, 0.6), 0 0 40px rgba(201, 169, 97, 0.3), inset 0 0 10px rgba(201, 169, 97, 0.2)' 
                      : 'none',
                  }}
                >
                  <Icon
                    size={18}
                    style={{
                      color: isActive ? '#C9A961' : '#A8A29E',
                      filter: isActive ? 'drop-shadow(0 0 8px rgba(201, 169, 97, 0.8))' : 'none',
                    }}
                  />
                </div>
                <div className="flex-1">
                  <span
                    className="text-sm font-medium transition-colors duration-300 block"
                    style={{
                      color: isActive ? '#EAB308' : '#D4D4D8',
                    }}
                  >
                    {section.label}
                  </span>
                  {isActive && (
                    <motion.div
                      className="h-0.5 rounded-full mt-1"
                      style={{ backgroundColor: '#EAB308' }}
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}