import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import headshotImg from "figma:asset/27bc2f71d3258489976d02225ee535b830fc269d.png";

export function About() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  
  // Text fades in from left as user scrolls
  const textX = useTransform(scrollY, [200, 600], [-100, 0]);
  const textOpacity = useTransform(scrollY, [200, 600], [0, 1]);
  
  // Image slides in from right but is always visible (no opacity change)
  const imageX = useTransform(scrollY, [200, 600], [100, 0]);

  return (
    <section id="about" className="py-32 px-6" style={{ background: 'linear-gradient(135deg, #000000 0%, #0a0805 50%, #000000 100%)' }}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Mobile: Image on top, smaller */}
        <motion.div
          className="relative md:hidden"
          style={{
            x: imageX,
            opacity: 1
          }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={headshotImg}
              alt="Toshio Nagai"
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top right, rgba(234, 179, 8, 0.08), transparent)' }}></div>
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          ref={ref}
          style={{
            x: textX,
            opacity: textOpacity
          }}
        >
          <motion.h2
            className="text-sm font-semibold mb-4 tracking-wider"
            style={{ color: '#EAB308' }}
          >
            ABOUT ME
          </motion.h2>
          <motion.h3
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: '#FFFFFF' }}
          >
            What I Do
          </motion.h3>
          <motion.p
            className="text-base md:text-lg mb-4 md:mb-6 leading-relaxed"
            style={{ color: '#D4D4D8' }}
          >
            I'm Toshi Nagai, a University of Southern California (USC) Biomedical Engineering student (Business Finance minor) focused on building practical, user-centered tools in healthcare. I've worked on an at-home multi-chronic disease monitoring device, done cancer imaging modeling using CT data to better understand tumor progression and treatment response, and been involved in various startup work. 
          </motion.p>
          <motion.p
            className="text-base md:text-lg mb-4 md:mb-6 leading-relaxed"
            style={{ color: '#D4D4D8' }}
          >
            Alongside that, I co-founded Sondr Designs, where I build premium websites to help clients sharpen their idenity in the online space and improve conversion—experience that's made me stronger at turning complex ideas into clear, deliverable products.
          </motion.p>
          <motion.p
            className="text-base md:text-lg mb-4 md:mb-6 leading-relaxed"
            style={{ color: '#D4D4D8' }}
          >
            My main goal is to reduce clinician stress and improve patient outcomes. I value a straightforward and practical workflow: start with the user needs and the constraints, move quickly, validate early, and iterate with intent. Outside of work, I'm into volleyball, violin, guitar, and making hip-hop/classical music—and growing up across Shanghai, Tokyo, and Hawai'i shaped how I collaborate across different perspectives.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-2 md:gap-3"
          >
            <div className="px-3 md:px-5 py-2 rounded-full" style={{ 
              backgroundColor: 'rgba(28, 25, 23, 0.6)', 
              backdropFilter: 'blur(20px)',
              border: '2px solid rgba(234, 179, 8, 0.3)',
              boxShadow: '0 8px 32px 0 rgba(234, 179, 8, 0.15)'
            }}>
              <p className="text-xs md:text-sm font-medium" style={{ color: '#EAB308' }}>USC Class of 2029</p>
            </div>
            <div className="px-3 md:px-5 py-2 rounded-full" style={{ 
              backgroundColor: 'rgba(28, 25, 23, 0.6)', 
              backdropFilter: 'blur(20px)',
              border: '2px solid rgba(234, 179, 8, 0.3)',
              boxShadow: '0 8px 32px 0 rgba(234, 179, 8, 0.15)'
            }}>
              <p className="text-xs md:text-sm font-medium" style={{ color: '#EAB308' }}>Los Angeles, CA</p>
            </div>
            <div className="px-3 md:px-5 py-2 rounded-full" style={{ 
              backgroundColor: 'rgba(28, 25, 23, 0.6)', 
              backdropFilter: 'blur(20px)',
              border: '2px solid rgba(234, 179, 8, 0.3)',
              boxShadow: '0 8px 32px 0 rgba(234, 179, 8, 0.15)'
            }}>
              <p className="text-xs md:text-sm font-medium" style={{ color: '#EAB308' }}>Viterbi</p>
            </div>
            <div className="px-3 md:px-5 py-2 rounded-full" style={{ 
              backgroundColor: 'rgba(28, 25, 23, 0.6)', 
              backdropFilter: 'blur(20px)',
              border: '2px solid rgba(234, 179, 8, 0.3)',
              boxShadow: '0 8px 32px 0 rgba(234, 179, 8, 0.15)'
            }}>
              <p className="text-xs md:text-sm font-medium" style={{ color: '#EAB308' }}>Marshall</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Desktop: Image on right, original size */}
        <motion.div
          className="relative hidden md:block"
          style={{
            x: imageX,
            opacity: 1
          }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={headshotImg}
              alt="Toshio Nagai"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top right, rgba(234, 179, 8, 0.08), transparent)' }}></div>
          </div>
          <motion.div
            className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl -z-10"
            style={{ backgroundColor: '#EAB308', opacity: 0.2 }}
            animate={{
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}