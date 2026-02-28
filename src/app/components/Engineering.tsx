import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Zap, ChevronDown } from 'lucide-react';
import designAidIcon from 'figma:asset/99b672b33aed399fc720beeaf9285e0f181771d9.png';
import medesignIcon from 'figma:asset/f3fc9ffc7adf8f1a316ab69d8bdf52c04f46c72f.png';
import designAidImage from 'figma:asset/54888bea997fab9f027afce9da732848ec86da32.png';
import medesignImage from 'figma:asset/23dce8158683f9888a00ea96cff41cc9c66f1a1a.png';

const engineeringProjects = [
  {
    title: 'Design-Aid',
    role: 'Organizer & Lead Designer',
    summary: 'Led 10+ students creating affordable assistive tools for economically and physically challenged communities and individuals.',
    description: 'Created affordable assistive tools for economically challenged communities. Led 10+ students in designing custom little free libraries for Hawaiian families and anti-tremor spoons for Parkinson\'s patients. Focused on accessible, low-cost engineering solutions with direct community impact and user-centered design methodology.',
    image: designAidImage,
    tags: ['Social Impact', 'Gadgets', 'Community Design', 'Leadership'],
    date: 'Oct 2023 - Jun 2025',
    impact: ['10+ Student Team', 'Hawaiian Partnership', 'Parkinson\'s Patients'],
    icon: designAidIcon,
    iconType: 'image'
  },
  {
    title: 'USC MEDesign - HCC Tumor Detection',
    role: 'Design Team Engineer',
    summary: 'Developing AI-powered algorithmic framework for assistive Hepatocellular Carcinoma detection in ultrasound imaging.',
    description: 'Developing an algorithmic framework for Hepatocellular Carcinoma detection in ultrasound imaging with AI overlay for at-home usage. Collaborating with clinical partners to create accessible and accurate diagnostic tools. Integrating computer vision and signal processing for real-time detection.',
    image: medesignImage,
    tags: ['Medical Imaging', 'AI/ML', 'Ultrasound', 'Computer Vision'],
    date: 'Sep 2025 - Present',
    impact: ['AI Detection', 'Diagnostics', 'Clinical Collaboration'],
    icon: medesignIcon,
    iconType: 'image'
  }
];

export function Engineering() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleExpand = (index: number) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section id="engineering" className="py-12 md:py-16 px-4 md:px-6 lg:pl-80" style={{ background: 'linear-gradient(135deg, #000000 0%, #0a0805 50%, #000000 100%)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-8 md:mb-10"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.05, duration: 0.2 }}
          >
            <div 
              className="w-10 md:w-12 h-10 md:h-12 rounded-full flex items-center justify-center" 
              style={{ 
                backgroundColor: '#000000',
                boxShadow: '0 0 20px rgba(201, 169, 97, 0.6), 0 0 40px rgba(201, 169, 97, 0.3), inset 0 0 10px rgba(201, 169, 97, 0.2)'
              }}
            >
              <Zap size={20} className="md:hidden" style={{ color: '#C9A961', filter: 'drop-shadow(0 0 8px rgba(201, 169, 97, 0.8))' }} />
              <Zap size={24} className="hidden md:block" style={{ color: '#C9A961', filter: 'drop-shadow(0 0 8px rgba(201, 169, 97, 0.8))' }} />
            </div>
            <h2 className="text-xs md:text-sm font-semibold tracking-wider" style={{ color: '#EAB308' }}>ENGINEERING</h2>
          </motion.div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6" style={{ color: '#FFFFFF' }}>
            Technical Projects
          </h3>
          <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: '#D4D4D8' }}>
            User-centered design and engineering solutions for real-world challenges
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {engineeringProjects.map((project, index) => (
            <motion.div
              key={index}
              className={`flex flex-col p-6 md:p-8 rounded-3xl h-full ${project.link ? 'cursor-pointer' : 'cursor-default'}`}
              style={{
                backgroundColor: 'rgba(28, 25, 23, 0.95)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(234, 179, 8, 0.2)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.4)'
              }}
              initial={{ 
                opacity: 0,
                y: 20,
              }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0,
              } : {
                opacity: 0,
                y: 20,
              }} 
              transition={{ 
                delay: 0.1 + index * 0.05, 
                duration: 0.25,
              }}
              whileHover={{ 
                y: -8, 
                boxShadow: '0 12px 48px 0 rgba(234, 179, 8, 0.25)',
                transition: { duration: 0.2 }
              }}
              onClick={() => project.link && window.open(project.link, '_blank')}
            >
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl mb-6" style={{ backgroundColor: '#000000' }}>
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[240px] object-contain"
                  style={project.title === 'Design-Aid' ? {} : undefined}
                />
              </div>

              {/* Icon + Date/Role */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden ${project.title === 'USC MEDesign - HCC Tumor Detection' ? 'p-1.5' : ''}`} style={{ backgroundColor: '#FFFFFF' }}>
                  {project.iconType === 'image' ? <img src={project.icon} alt={project.title} className="w-full h-full object-contain" /> : <project.icon size={22} className="text-white" />}
                </div>
                <div className="flex flex-col justify-center min-h-[48px]">
                  <p className="text-xs font-medium leading-tight" style={{ color: '#A8A29E' }}>{project.date}</p>
                  <p className="text-lg md:text-xl font-semibold leading-tight" style={{ color: '#EAB308' }}>{project.role}</p>
                </div>
              </div>
              
              {/* Title */}
              <h4 className="text-xl md:text-2xl font-bold mb-3" style={{ color: '#FFFFFF' }}>
                {project.title}
              </h4>
              
              {/* Description with expand/collapse */}
              <div className="mb-6 flex-grow">
                <p className="text-sm md:text-base leading-relaxed" style={{ color: '#D4D4D8' }}>
                  {expandedCards.has(index) ? project.description : project.summary}
                </p>
                
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleExpand(index);
                  }}
                  className="flex items-center gap-2 mt-4 text-sm font-semibold group"
                  style={{ color: '#EAB308' }}
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{expandedCards.has(index) ? 'Show Less' : 'View Details'}</span>
                  <motion.div
                    animate={{ rotate: expandedCards.has(index) ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
                  </motion.div>
                </motion.button>
              </div>
              
              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-xl" style={{ backgroundColor: '#000000' }}>
                {project.impact.map((metric, metricIndex) => (
                  <div key={metricIndex} className="text-center">
                    <p className="text-xs md:text-sm font-medium" style={{ color: '#FFFFFF' }}>{metric}</p>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{ background: 'linear-gradient(135deg, #FFFBEB, #FEF3C7)', color: '#78350F' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link Coming Soon Button */}
              <button
                className="flex items-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all cursor-default"
                style={{
                  backgroundColor: 'rgba(28, 25, 23, 0.5)',
                  color: '#A8A29E',
                  border: '1px solid rgba(168, 162, 158, 0.3)'
                }}
              >
                <span>Link Coming Soon</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}