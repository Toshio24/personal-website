import { lazy, Suspense } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProjectsNavigation } from './components/ProjectsNavigation';

const About = lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Startups = lazy(() => import('./components/Startups').then(m => ({ default: m.Startups })));
const Engineering = lazy(() => import('./components/Engineering').then(m => ({ default: m.Engineering })));
const Research = lazy(() => import('./components/Research').then(m => ({ default: m.Research })));
const WebDevelopment = lazy(() => import('./components/WebDevelopment').then(m => ({ default: m.WebDevelopment })));
const Expertise = lazy(() => import('./components/Expertise').then(m => ({ default: m.Expertise })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));

function SectionLoader() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center" style={{ background: '#000' }}>
      <div className="w-8 h-8 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

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
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Startups />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Engineering />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Research />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <WebDevelopment />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Expertise />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
    </div>
  );
}