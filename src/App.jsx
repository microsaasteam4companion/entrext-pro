import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Vision from './components/Vision';
import Process from './components/Process';

import ProductsAccordion from './components/ProductsAccordion';
import Mechanisms from './components/Mechanisms';
import CoreStrength from './components/CoreStrength';
import Manifesto from './components/Manifesto';
import EcosystemOrbit from './components/EcosystemOrbit';
import Faq from './components/Faq';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ApplicationForm from './components/ApplicationForm';
import { useState } from 'react';



function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
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
  }, []);

  return (
    <div className="bg-surface-container-lowest min-h-screen text-on-surface selection:bg-tertiary selection:text-on-tertiary">
      <Navbar onApply={() => setIsFormOpen(true)} />
      <main className="pt-32">
        <Hero onApply={() => setIsFormOpen(true)} />
        <Marquee />
        <Vision />
        <Process />

        <ProductsAccordion />
        <Mechanisms />
        <CoreStrength />
        <Manifesto />
        <EcosystemOrbit />
        <Faq />
        <CTA onApply={() => setIsFormOpen(true)} />
      </main>
      <Footer />
      
      <ApplicationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}

export default App;
