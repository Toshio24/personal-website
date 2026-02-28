import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Rocket, ExternalLink, ChevronDown } from 'lucide-react';
import poctIcon from 'figma:asset/f0f6c4a3de9b06cac9e8979330a7fc140779f095.png';
import pandoIcon from 'figma:asset/0e9e809d2ff9459336deb4e92a3686fb5b2fd552.png';
import sondrIcon from 'figma:asset/91798406a28189d33fecf0c75adfc2b2bb81ede5.png';
import poctDeviceImage from 'figma:asset/9b39c49a3efaa2ab2d1a1f1cd015228483a54dd5.png';
import sondrDesignsImage from 'figma:asset/059d7406bb40e65f3fa8b7a9aa96c9ceb7554318.png';
import pandoSurgicalImage from 'figma:asset/cc09bd80b4cf25c0257de54ba1612ca7f2cfbffb.png';

const startupProjects = [
  {
    icon: poctIcon,
    iconType: 'image',
    title: 'At-Home POCT Testing Platform',
    role: 'Hardware Lead & Co-Founder',
    summary: 'Developing a flexible, modular home diagnostic and monitoring hardware device for chronic disease management with biomarkers.',
    description: 'Leading a 4-member hardware team to develop a flexible, home-based diagnostic and monitoring system for managing chronic conditions. Starting with metabolic markers like glucose and uric acid, the platform supports simultaneous detection of multiple health indicators with scalability for additional tests. Built on an open-source framework to enable personalized medicine and encourage collaborative innovation in accessible healthcare technology.',
    image: poctDeviceImage,
    tags: ['Microfluidics', 'Genetic Engineering', 'Hardware', 'Diagnostics', 'Startup'],
    date: 'Apr 2024 - Present',
    metrics: ['iGEM Gold Medal', '4-Person Team', 'Hardware + Wetlab'],
    link: 'https://lcghardware.vercel.app/'
  },
  {
    icon: sondrIcon,
    iconType: 'image',
    title: 'Sondr Designs',
    role: 'Co-Founder',
    summary: 'Building scalable digital solutions, custom websites, and backend to help businesses find their identity through the online space.',
    description: 'Building digital solutions and custom backends for businesses across e-commerce, education, and therapy sectors. Achieved 30% conversion boost through SEO optimization and managed Meta & LinkedIn ad campaigns. Growing client base with focus on scalable, high-performance web infrastructure.',
    image: sondrDesignsImage,
    tags: ['Full-Stack', 'SEO', 'Digital Strategies', 'B2B'],
    date: 'Nov 2025 - Present',
    metrics: ['3+ Active Clients', '30% Conversion ↑', 'Multi-Sector'],
    link: 'https://www.sondrdesigns.com/'
  },
  {
    icon: pandoIcon,
    iconType: 'image',
    title: 'Pando Surgical',
    role: 'COO',
    summary: 'Contributing to innovative solutions, improving laparoscopic surgery ergonomics with an attachment that enables single-handed rotation of scopes.',
    description: 'Contributing to development of innovative surgical solutions and medical device technologies. Working on product development, market research, and technical validation for next-generation surgical tools aimed at improving clinical outcomes and operational efficiency.',
    image: pandoSurgicalImage,
    tags: ['Medical Devices', 'Surgical Tools', 'Product Development', 'Healthtech'],
    date: '2025 - Present',
    metrics: ['Surgical Innovation', 'Clinical Focus', 'Market Research'],
    link: 'https://www.pandosurgical.com/'
  }
];

export function Startups() {
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
    <section id="startups" className="py-12 md:py-16 px-4 md:px-6 lg:pl-80" style={{ background: 'linear-gradient(135deg, #000000 0%, #0a0805 50%, #000000 100%)' }}>
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
              <Rocket size={20} className="md:hidden" style={{ color: '#C9A961', filter: 'drop-shadow(0 0 8px rgba(201, 169, 97, 0.8))' }} />
              <Rocket size={24} className="hidden md:block" style={{ color: '#C9A961', filter: 'drop-shadow(0 0 8px rgba(201, 169, 97, 0.8))' }} />
            </div>
            <h2 className="text-xs md:text-sm font-semibold tracking-wider" style={{ color: '#EAB308' }}>STARTUPS</h2>
          </motion.div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6" style={{ color: '#FFFFFF' }}>
            Entrepreneurial Ventures
          </h3>
          <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: '#D4D4D8' }}>
            Building scalable solutions at the intersection of healthcare and technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {startupProjects.map((project, index) => (
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
                  className="w-full h-[240px] object-contain"
                  style={{ backgroundColor: '#FFFFFF' }}
                />
              </div>

              {/* Icon + Date/Role */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
                  {project.iconType === 'image' ? <img src={project.icon} alt={project.title} className="w-12 h-12 object-contain" /> : <project.icon size={22} className="text-white" />}
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

              {/* Visit Website Button */}
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
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <ExternalLink size={18} />
                  <span>Visit Website</span>
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}