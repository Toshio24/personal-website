import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import heroBackground from 'figma:asset/f4d81beec982002be7f5bd2d2970d80328563e60.png';

interface HeroProps {
  scrollToAbout: () => void;
  scrollToContact: () => void;
}

export function Hero({ scrollToAbout, scrollToContact }: HeroProps) {
  const { scrollY } = useScroll();
  
  // Hero fades out as user scrolls down
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0.5]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.95]);
  
  // Dynamic background movement
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const backgroundScale = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden" 
      style={{
        background: '#000000'
      }}
    >
      {/* Dynamic animated background image */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: backgroundY,
          scale: backgroundScale,
        }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.6, 0.05, 0.6],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Smooth gradient transition to next section */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #1C1917)'
        }}
      />

      {/* Content */}
      <motion.div 
        className="relative z-10 w-full px-6 lg:px-12 max-w-7xl mx-auto"
        style={{ 
          opacity: heroOpacity,
          scale: heroScale
        }}
      >
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6"
            style={{ 
              color: '#FFFFFF',
              lineHeight: '1.1',
              textShadow: '0 0 40px rgba(201, 169, 97, 0.6), 0 0 20px rgba(201, 169, 97, 0.4), 0 0 10px rgba(201, 169, 97, 0.3)',
              letterSpacing: '0.02em'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Toshio Nagai
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-10 font-medium"
            style={{ 
              color: '#C9A961',
              textShadow: '0 0 20px rgba(201, 169, 97, 0.6)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Medtech Innovator & Biomedical Engineer
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              onClick={scrollToAbout}
              className="px-10 py-4 rounded-lg text-lg font-semibold transition-all"
              style={{ 
                background: 'linear-gradient(135deg, #C9A961, #B8934A)',
                color: '#000000',
                boxShadow: '0 4px 20px rgba(201, 169, 97, 0.5), 0 0 40px rgba(201, 169, 97, 0.3)'
              }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 8px 30px rgba(201, 169, 97, 0.7), 0 0 60px rgba(201, 169, 97, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Work
            </motion.button>

            <motion.button
              onClick={scrollToContact}
              className="px-10 py-4 rounded-lg text-lg font-semibold transition-all"
              style={{ 
                border: '1px solid #C9A961',
                color: '#FFFFFF',
                background: 'rgba(0, 0, 0, 0.5)',
                boxShadow: '0 4px 20px rgba(201, 169, 97, 0.3), inset 0 0 20px rgba(201, 169, 97, 0.1)'
              }}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: 'rgba(201, 169, 97, 0.15)',
                boxShadow: '0 8px 30px rgba(201, 169, 97, 0.5), inset 0 0 30px rgba(201, 169, 97, 0.2)' 
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToAbout}
      >
        <ChevronDown size={32} style={{ color: 'rgba(201, 169, 97, 0.6)' }} />
      </motion.div>
    </section>
  );
}