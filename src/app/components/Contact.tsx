import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Linkedin, Award, MapPin } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'tnagai@usc.edu',
    link: 'mailto:tnagai@usc.edu'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'toshio-nagai2029',
    link: 'https://www.linkedin.com/in/toshio-nagai2029'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Los Angeles, CA',
    link: '#'
  },
  {
    icon: Award,
    label: 'Phone',
    value: '(808) 807-7249',
    link: 'tel:+18088077249'
  }
];

const awards = [
  'USC Presidential Scholarship (Half Tuition)',
  'USC Viterbi Scholar Award ($25k/year)',
  'Viterbi GCSP Make-a-thon 1st Place',
  'iGEM High School Division Gold Medal',
  "'Iolani School Valedictorian"
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #000000 0%, #0a0805 50%, #000000 100%)' }}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: '#EAB308' }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: '#D4AF37' }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold mb-4 tracking-wider" style={{ color: '#EAB308' }}>GET IN TOUCH</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
            Let's Connect
          </h3>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#D4D4D8' }}>
            Interested in collaborating on research, startups, or community impact projects? Let's chat.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto relative z-10">
          <motion.a
            href="mailto:tnagai@usc.edu"
            className="rounded-2xl p-8 block"
            style={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(234, 179, 8, 0.2)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.4)'
            }}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
              style={{ 
                backgroundColor: '#000000',
                boxShadow: '0 0 20px rgba(201, 169, 97, 0.6), 0 0 40px rgba(201, 169, 97, 0.3), inset 0 0 10px rgba(201, 169, 97, 0.2)'
              }}
            >
              <Mail size={24} style={{ color: '#C9A961', filter: 'drop-shadow(0 0 8px rgba(201, 169, 97, 0.8))' }} />
            </motion.div>
            <h4 className="text-lg font-semibold mb-2" style={{ color: '#FFFFFF' }}>Email</h4>
            <p className="text-sm break-all" style={{ color: '#D4D4D8' }}>tnagai@usc.edu</p>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/toshio-nagai2029"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl p-8 block"
            style={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(234, 179, 8, 0.2)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.4)'
            }}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
              style={{ 
                backgroundColor: '#000000',
                boxShadow: '0 0 20px rgba(201, 169, 97, 0.6), 0 0 40px rgba(201, 169, 97, 0.3), inset 0 0 10px rgba(201, 169, 97, 0.2)'
              }}
            >
              <Linkedin size={24} style={{ color: '#C9A961', filter: 'drop-shadow(0 0 8px rgba(201, 169, 97, 0.8))' }} />
            </motion.div>
            <h4 className="text-lg font-semibold mb-2" style={{ color: '#FFFFFF' }}>LinkedIn</h4>
            <p className="text-sm break-all" style={{ color: '#D4D4D8' }}>toshio-nagai2029</p>
          </motion.a>
          <motion.div
            className="rounded-2xl p-8"
            style={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(234, 179, 8, 0.2)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.4)'
            }}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
              style={{ 
                backgroundColor: '#000000',
                boxShadow: '0 0 20px rgba(201, 169, 97, 0.6), 0 0 40px rgba(201, 169, 97, 0.3), inset 0 0 10px rgba(201, 169, 97, 0.2)'
              }}
            >
              <MapPin size={24} style={{ color: '#C9A961', filter: 'drop-shadow(0 0 8px rgba(201, 169, 97, 0.8))' }} />
            </motion.div>
            <h4 className="text-lg font-semibold mb-2" style={{ color: '#FFFFFF' }}>Location</h4>
            <p className="text-sm break-all" style={{ color: '#D4D4D8' }}>Los Angeles, CA</p>
          </motion.div>
          <motion.div
            className="rounded-2xl p-8"
            style={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(234, 179, 8, 0.2)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.4)'
            }}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
              style={{ 
                backgroundColor: '#000000',
                boxShadow: '0 0 20px rgba(201, 169, 97, 0.6), 0 0 40px rgba(201, 169, 97, 0.3), inset 0 0 10px rgba(201, 169, 97, 0.2)'
              }}
            >
              <Award size={24} style={{ color: '#C9A961', filter: 'drop-shadow(0 0 8px rgba(201, 169, 97, 0.8))' }} />
            </motion.div>
            <h4 className="text-lg font-semibold mb-2" style={{ color: '#FFFFFF' }}>Phone</h4>
            <p className="text-sm break-all" style={{ color: '#D4D4D8' }}>(808) 807-7249</p>
          </motion.div>
        </div>

        {/* Awards Section - Gold accent */}
        <motion.div
          className="max-w-4xl mx-auto mt-32"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <motion.div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ 
                backgroundColor: '#000000',
                boxShadow: '0 0 20px rgba(201, 169, 97, 0.6), 0 0 40px rgba(201, 169, 97, 0.3), inset 0 0 10px rgba(201, 169, 97, 0.2)'
              }}
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Award size={24} style={{ color: '#C9A961', filter: 'drop-shadow(0 0 8px rgba(201, 169, 97, 0.8))' }} />
            </motion.div>
            <h4 className="text-2xl font-bold" style={{ color: '#FFFFFF' }}>Awards & Honors</h4>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                className="rounded-xl p-6"
                style={{ background: 'linear-gradient(135deg, #FFFBEB, #FEF3C7)', border: '2px solid #FDE68A' }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02, borderColor: '#EAB308' }}
              >
                <p className="flex items-start gap-3" style={{ color: '#78350F' }}>
                  <span style={{ color: '#EAB308' }}>★</span>
                  <span className="font-medium">{award}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-400">
            © 2026 Toshio Nagai. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}