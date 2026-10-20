import { useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import Lenis from 'lenis';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About, { Manifesto } from './components/About';
import Services from './components/Services';
import LegalDesignShowcase from './components/LegalDesignShowcase';
import Method, { Audience } from './components/Method';
import { Contact, Faq, Footer, Testimonials, WhatsAppFloat } from './components/Closing';
import { setLenis } from './utils/scroll';

export default function App() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    setLenis(lenis);
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <CustomCursor />
      <Loader />
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <About />
        <Services />
        <LegalDesignShowcase />
        <Method />
        <Audience />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <div className="grain" aria-hidden />
    </MotionConfig>
  );
}
