import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Microscope, Beaker, Code, Lightbulb, Users, Languages } from 'lucide-react';

const expertiseAreas = [
  {
    icon: Microscope,
    title: 'Wet Lab & Research',
    description: 'PCR, gel electrophoresis, bacterial culturing, micro-pipetting, plasmid prep, and Goldengate cloning for genetic engineering projects.'
  },
  {
    icon: Beaker,
    title: 'Medical Devices',
    description: 'Microfluidic diagnostic platforms, ultrasound AI overlays for kidney stone detection, and anti-tremor assistive devices.'
  },
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'Building web applications, SEO optimization, backend systems, and AI-powered educational platforms with 20k+ users.'
  },
  {
    icon: Lightbulb,
    title: 'Mathematical Modeling',
    description: 'Computational models for hepatocellular carcinoma progression under immunotherapy regimes and clinical trial analysis.'
  },
  {
    icon: Users,
    title: 'Community Impact',
    description: 'Leading design initiatives for economically challenged communities, creating assistive tools and accessible medical devices.'
  },
  {
    icon: Languages,
    title: 'Global Perspective',
    description: 'Multilingual communicator (English, Japanese, Chinese, Shanghainese, Korean) with international research experience.'
  }
];

export function Expertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="expertise" className="py-32 px-6" style={{ background: 'linear-gradient(135deg, #000000 0%, #0a0805 50%, #000000 100%)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold mb-4 tracking-wider" style={{ color: '#EAB308' }}>EXPERTISE</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
            Skills & Specializations
          </h3>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#D4D4D8' }}>
            From wet lab techniques to full-stack development, bridging multiple disciplines
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              className="rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              style={{ 
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(234, 179, 8, 0.2)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.4)'
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                style={{ 
                  backgroundColor: '#000000',
                  boxShadow: '0 0 20px rgba(201, 169, 97, 0.6), 0 0 40px rgba(201, 169, 97, 0.3), inset 0 0 10px rgba(201, 169, 97, 0.2)'
                }}
              >
                <area.icon size={32} style={{ color: '#C9A961', filter: 'drop-shadow(0 0 8px rgba(201, 169, 97, 0.8))' }} />
              </motion.div>
              <h4 className="text-2xl font-bold mb-4" style={{ color: '#FFFFFF' }}>{area.title}</h4>
              <p className="leading-relaxed" style={{ color: '#D4D4D8' }}>{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}