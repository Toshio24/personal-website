import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Startups } from './components/Startups';
import { Engineering } from './components/Engineering';
import { Research } from './components/Research';
import { WebDevelopment } from './components/WebDevelopment';
import { Expertise } from './components/Expertise';
import { Contact } from './components/Contact';
import { ProjectsNavigation } from './components/ProjectsNavigation';

export default function App() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <ProjectsNavigation />
      <Hero scrollToAbout={scrollToAbout} scrollToContact={scrollToContact} />
      <About />
      <Startups />
      <Engineering />
      <Research />
      <WebDevelopment />
      <Expertise />
      <Contact />
    </div>
  );
}