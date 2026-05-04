import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Vision from './components/Vision';
import EntrextFlip from './components/EntrextFlip';
import Process from './components/Process';
import HungerAnimation from './components/HungerAnimation';

import ProductsAccordion from './components/ProductsAccordion';
import Mechanisms from './components/Mechanisms';
import CoreStrength from './components/CoreStrength';
import Manifesto from './components/Manifesto';
import EcosystemOrbit from './components/EcosystemOrbit';
import Faq from './components/Faq';
import Footer from './components/Footer';
import ApplicationForm from './components/ApplicationForm';
import SplashScreen from './components/SplashScreen';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (showSplash) return;

    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => observer.observe(el));

    return () => {
      reveals.forEach(el => observer.unobserve(el));
    };
  }, [showSplash]);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="bg-surface-container-lowest min-h-screen text-on-surface selection:bg-tertiary selection:text-on-tertiary overflow-x-hidden animate-in fade-in duration-1000">
      <Navbar onApply={() => setIsFormOpen(true)} />
      <main className="pt-32">
        <Hero onApply={() => setIsFormOpen(true)} />
        <Marquee />
        <Vision />
        <EntrextFlip />
        <Process />
        <ProductsAccordion />
        <Mechanisms />
        <CoreStrength />
        <Manifesto />
        <EcosystemOrbit />
        <Faq />
        <HungerAnimation onApply={() => setIsFormOpen(true)} />
      </main>
      <Footer />
      
      <ApplicationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}

export default App;
