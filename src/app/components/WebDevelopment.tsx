import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Code, Sparkles, Monitor, Coffee, ExternalLink, TrendingUp, Clock, ChevronDown } from 'lucide-react';
import bubbleIcon from 'figma:asset/b43dace7468fea7be2b740ee85ae5a40c10459dd.png';
import bubbleAiImage from 'figma:asset/8c6716568b1929c5d4246ac2b603d0c781f1bfa6.png';
import medesignIcon from 'figma:asset/f3fc9ffc7adf8f1a316ab69d8bdf52c04f46c72f.png';
import medesignImage from 'figma:asset/81419804a60801c6753e311d804769aeaabf788c.png';
import blendCafeLogo from 'figma:asset/175eb9099c26c6ee84e1d69cd41bfa00351e0c0d.png';
import blendCafeImage from 'figma:asset/51674a2fb9b330c3a7f964b5b5550c6360e2bfd5.png';
import pandoSurgicalImage from 'figma:asset/849036ca875498e9667862f69d78c9cf7c3f809c.png';
import pandoSurgicalLogo from 'figma:asset/0e9e809d2ff9459336deb4e92a3686fb5b2fd552.png';
import khmTutoringImage from 'figma:asset/a8ec3f90552fdd0b51724a1bc326975fa07b26a1.png';
import khmTutoringLogo from 'figma:asset/d1107b9cf075094f68ba70fb6bdb8b226bf6bab6.png';

const webProjects = [
  {
    title: 'Bubble AI',
    role: 'Developer & Prompt Engineer',
    summary: 'AI-powered English-learning app for non-native speakers with 20k+ users across international markets.',
    description: 'Developer & Prompt Engineer for an AI-powered English-learning app (Bubble AI) designed for learners in non-native English-speaking environments (such as China). Collaborated across product and research branches to iterate on features based on user testing and deployment feedback. Supported product growth to 20k+ Tests & Downloads.',
    image: bubbleAiImage,
    tags: ['AI/ML', 'EdTech', 'LLMs', 'Feature Ideation', 'User Research'],
    date: 'Jul 2024 - Jan 2025',
    metrics: ['20k+ Users', 'Cross-Team Collab', 'International Launch'],
    icon: bubbleIcon,
    iconType: 'image',
    link: 'https://apps.apple.com/ie/app/%E8%8B%B1%E8%AF%AD%E5%98%9F%E5%98%9F-ai%E8%8B%B1%E8%AF%AD%E5%A4%96%E6%95%99%E5%B8%AE%E4%BD%A0%E5%AD%A6%E4%B9%A0%E8%8B%B1%E8%AF%AD/id6476251759'
  },
  {
    title: 'MEDesign Website',
    role: 'Web Dev',
    summary: 'Complete redesign and development of USC\'s premier medical device design organization website.',
    description: 'Complete redesign and development of the MEDesign USC website, transforming the digital presence of USC\'s premier medical device design organization. Implemented modern UI/UX principles with responsive design, improved navigation architecture, and optimized performance. Created an engaging showcase platform for student projects, team profiles, and organization initiatives.',
    image: medesignImage,
    tags: ['UI/UX', 'Web Design', 'React', 'Responsive', 'Branding'],
    date: '2026',
    metrics: ['Full Redesign', 'Modern UI/UX', 'Responsive Layout'],
    icon: medesignIcon,
    iconType: 'image',
    link: 'https://www.medesignusc.com/'
  },
  {
    title: 'Blend Cafe Website',
    role: 'Web Dev',
    summary: 'Intelligent cafe discovery platform with advanced filtering for vibe, wifi quality, and study-friendliness.',
    description: 'Designed and developed a comprehensive cafe discovery platform that revolutionizes how users find their perfect coffee shop. Features intelligent filtering system allowing users to search by vibe, wifi quality, study-friendliness, coffee quality, and more. Built with intuitive UI/UX to streamline the cafe hopping experience and help users discover hidden gems tailored to their specific needs and preferences.',
    image: blendCafeImage,
    tags: ['Full-Stack', 'React', 'UI/UX', 'Filtering System', 'Mobile-First'],
    date: '2025',
    metrics: ['Smart Filtering', 'Multi-Category', 'Discovery Platform'],
    icon: blendCafeLogo,
    iconType: 'image',
    link: 'https://www.blendcafe.app/'
  },
  {
    title: 'Pando Surgical Website',
    role: 'Web Dev',
    summary: 'Enhanced digital presence through comprehensive SEO optimization and technical improvements.',
    description: 'Enhanced the digital presence of Pando Surgical through comprehensive SEO optimization and technical improvements. Implemented advanced indexing strategies, optimized meta data architecture, and improved search engine visibility for this innovative surgical technology company. Focused on technical SEO, structured data implementation, and performance optimization to increase organic reach and search rankings.',
    image: pandoSurgicalImage,
    tags: ['SEO', 'Meta Data', 'Indexing', 'Technical Optimization', 'Analytics'],
    date: '2026',
    metrics: ['Improved Indexing', 'Meta Optimization', 'Search Visibility'],
    icon: pandoSurgicalLogo,
    iconType: 'image',
    link: 'https://www.pandosurgical.com/'
  },
  {
    title: 'KHM Tutoring Website',
    role: 'Web Dev',
    summary: 'Performance and conversion optimization for Hawaii-based tutoring service with Core Web Vitals focus.',
    description: 'Transformed the digital performance of KHM Tutoring through comprehensive optimization strategies. Implemented advanced SEO techniques, enhanced page speed through technical improvements, and optimized conversion funnels to maximize student enrollment. Focused on Core Web Vitals optimization, meta data enhancement, and user experience improvements to boost organic traffic and conversion rates for this Hawaii-based tutoring service.',
    image: khmTutoringImage,
    tags: ['SEO', 'Performance', 'Conversion Optimization', 'Speed Boost', 'Core Web Vitals'],
    date: '2025',
    metrics: ['Speed Boost', 'SEO Enhanced', 'Conversion Optimized'],
    icon: khmTutoringLogo,
    iconType: 'image',
    link: 'https://www.khmtutoring.com/'
  }
];

export function WebDevelopment() {
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
    <section id="webdev" className="py-12 md:py-16 px-4 md:px-6 lg:pl-80" style={{ background: 'linear-gradient(135deg, #000000 0%, #0a0805 50%, #000000 100%)' }}>
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
              <Code size={20} className="md:hidden" style={{ color: '#C9A961', filter: 'drop-shadow(0 0 8px rgba(201, 169, 97, 0.8))' }} />
              <Code size={24} className="hidden md:block" style={{ color: '#C9A961', filter: 'drop-shadow(0 0 8px rgba(201, 169, 97, 0.8))' }} />
            </div>
            <h2 className="text-xs md:text-sm font-semibold tracking-wider" style={{ color: '#EAB308' }}>WEB DEVELOPMENT</h2>
          </motion.div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6" style={{ color: '#FFFFFF' }}>
            Digital Solutions
          </h3>
          <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: '#D4D4D8' }}>
            Full-stack development and AI-powered web applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {webProjects.map((project, index) => (
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
                  className={`w-full h-[240px] ${project.title === 'Bubble AI' ? 'object-cover object-[15%_center]' : 'object-cover'}`}
                />
              </div>

              {/* Icon + Date/Role */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden ${project.title === 'Bubble AI' ? 'p-0' : project.title === 'MEDesign Website Redesign' || project.title === 'Pando Surgical' ? 'p-1.5' : ''}`} style={{ backgroundColor: '#FFFFFF' }}>
                  {project.iconType === 'image' ? (
                    <img src={project.icon} alt={`${project.title} Icon`} className={`${project.title === 'Bubble AI' ? 'w-full h-full object-cover' : 'w-full h-full object-contain'}`} loading="lazy" decoding="async" />
                  ) : (
                    <project.icon size={22} className="text-white" />
                  )}
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

              {/* Tags and Link */}
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
                <motion.a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all"
                  style={{ 
                    backgroundColor: 'rgba(234, 179, 8, 0)',
                    color: '#EAB308',
                    border: '2px solid #EAB308',
                  }}
                  whileHover={{ 
                    backgroundColor: 'rgba(234, 179, 8, 0.1)',
                    scale: 1.01,
                    boxShadow: '0 4px 20px rgba(234, 179, 8, 0.3)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink size={16} />
                  <span>Visit Website</span>
                </motion.a>
              )}
            </motion.div>
          ))}

          {/* Coming Soon Card */}
          <motion.div
            className="flex flex-col items-center justify-center p-6 md:p-8 rounded-3xl h-full min-h-[400px]"
            style={{
              backgroundColor: 'rgba(28, 25, 23, 0.5)',
              backdropFilter: 'blur(20px)',
              border: '2px dashed rgba(234, 179, 8, 0.3)',
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
              delay: 0.1 + webProjects.length * 0.05, 
              duration: 0.25,
            }}
            whileHover={{ 
              y: -8, 
              borderColor: 'rgba(234, 179, 8, 0.5)',
              transition: { duration: 0.2 }
            }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mb-6"
            >
              <Clock size={64} style={{ color: '#EAB308' }} />
            </motion.div>
            
            <h4 className="text-2xl md:text-3xl font-bold mb-3 text-center" style={{ color: '#FFFFFF' }}>
              More Coming Soon
            </h4>
            
            <p className="text-base md:text-lg text-center max-w-md" style={{ color: '#D4D4D8' }}>
              More web dev projects in collection. Displays of new projects are delayed!
            </p>

            <div className="flex gap-2 mt-6">
              <motion.div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: '#EAB308' }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0 }}
              />
              <motion.div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: '#EAB308' }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
              />
              <motion.div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: '#EAB308' }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}