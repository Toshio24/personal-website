import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { FlaskConical, ExternalLink, ChevronDown } from 'lucide-react';
import queensLogo from 'figma:asset/8103a344938c88f49651afea2858af268429ed0f.png';
import hccResearchImage from 'figma:asset/9463ab60b08feb426abf6b1d318440354efb5800.png';
import madLabImage from 'figma:asset/c27565fdfc63f962bf01a291c5f986b10ad57adc.png';

const researchProjects = [
  {
    title: 'Hepatocellular Carcinoma Modeling',
    organization: "Queen's Health Systems",
    role: 'Researcher',
    summary: 'Mathematically modeled liver cancer growth under immunotherapy clinical trial with oncologists in Honolulu.',
    description: 'Developed mathematical growth models for liver cancer under immunotherapy regimes (TSR-022 & TSR-042) at Queen\'s Health Systems in Honolulu, Hawaii. Collaborated directly with clinical oncologists to calibrate parameters and analyze tumor progression patterns from real patient data. Utilized computational modeling techniques to predict treatment outcomes and optimize therapeutic strategies.',
    image: hccResearchImage,
    tags: ['Cancer Research', 'Mathematical Modeling', 'Immunotherapy', 'Clinical Oncology', 'Data Analysis'],
    date: 'Jul 2023 - Jan 2025',
    metrics: ['Clinical Data Analysis', 'HCC Modeling', 'Oncologist Collaboration'],
    icon: queensLogo,
    link: 'https://jumpshare.com/share/wSd5y68ajyJ1eed13I8c'
  },
  {
    title: 'Medical and Analytical Device Laboratory ',
    organization: 'USC Viterbi School of Engineering',
    role: 'Undergraduate Research Assistant',
    summary: 'Contributing to wound healing sensor fabrication through laser cutting, electrode fabrication, and electrochemical analysis.',
    description: 'Working in Dr. Maral Mousavi\'s Medical and Analytical Device Laboratory under the mentorship of Dr. Victor Ong. Contributing to wound healing sensor fabrication through preparation of sensor components (electrodes, tegaderm, filters, etc.). Hands-on experience includes 3D printing, laser cutting, sensor and electrode fabrication, product photography, cyclic voltammetry testing, and solution preparation for electrochemical analysis.',
    image: madLabImage,
    tags: ['Medical Devices', 'Sensor Fabrication', 'Data Analysis', 'CAD Modeling'],
    date: 'Sep 2025 - Present',
    metrics: ['Device Development', 'Data Analysis', 'Sensor Fabrication'],
    icon: null,
    link: 'https://madlab.usc.edu/',
    linkText: 'Visit Lab Website'
  }
];

export function Research() {
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
    <section id="research" className="py-12 md:py-16 px-4 md:px-6 lg:pl-80" style={{ background: 'linear-gradient(135deg, #000000 0%, #0a0805 50%, #000000 100%)' }}>
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
              <FlaskConical size={20} className="md:hidden" style={{ color: '#C9A961', filter: 'drop-shadow(0 0 8px rgba(201, 169, 97, 0.8))' }} />
              <FlaskConical size={24} className="hidden md:block" style={{ color: '#C9A961', filter: 'drop-shadow(0 0 8px rgba(201, 169, 97, 0.8))' }} />
            </div>
            <h2 className="text-xs md:text-sm font-semibold tracking-wider" style={{ color: '#EAB308' }}>RESEARCH</h2>
          </motion.div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6" style={{ color: '#FFFFFF' }}>
            Scientific Investigation
          </h3>
          <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: '#D4D4D8' }}>
            Computational modeling and clinical research for cancer therapeutics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {researchProjects.map((project, index) => (
            <motion.div
              key={index}
              className="flex flex-col p-6 md:p-8 rounded-3xl h-full cursor-pointer"
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
              <div className="relative rounded-2xl overflow-hidden shadow-xl mb-6">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[240px] object-cover"
                />
              </div>

              {/* Icon + Date/Role */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden p-2" style={{ backgroundColor: '#FFFFFF' }}>
                  {project.icon ? (
                    <img src={project.icon} alt={project.organization} className="w-full h-full object-contain" />
                  ) : (
                    <span className="text-xs font-bold text-center" style={{ color: '#990000' }}>USC</span>
                  )}
                </div>
                <div className="flex flex-col justify-center min-h-[64px]">
                  <p className="text-xs font-medium leading-tight" style={{ color: '#A8A29E' }}>{project.date}</p>
                  <p className="text-base md:text-lg font-semibold leading-tight mt-1" style={{ color: '#EAB308' }}>{project.organization}</p>
                  <p className="text-xs font-medium leading-tight mt-1" style={{ color: '#D4D4D8' }}>{project.role}</p>
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
                {project.metrics.map((metric, metricIndex) => (
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

              {/* Visit Paper Button */}
              {project.link && (
                <button
                  className="flex items-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all"
                  style={{
                    backgroundColor: '#1C1917',
                    color: '#EAB308',
                    border: '1px solid #EAB308'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#EAB308';
                    e.currentTarget.style.color = '#000000';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#1C1917';
                    e.currentTarget.style.color = '#EAB308';
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.link, '_blank');
                  }}
                >
                  <ExternalLink size={18} />
                  <span>{project.linkText || 'Visit Paper'}</span>
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}