import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Vision from './components/Vision';
import EntrextFlip from './components/EntrextFlip';
import Process from './components/Process';
import HungerAnimation from './components/HungerAnimation';
import ProductsAccordion from './components/ProductsAccordion';
import Manifesto from './components/Manifesto';
import Faq from './components/Faq';
import Footer from './components/Footer';
import ApplicationForm from './components/ApplicationForm';

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
    <div className="bg-surface-container-lowest min-h-screen text-on-surface selection:bg-tertiary selection:text-on-tertiary overflow-x-hidden animate-in fade-in duration-1000">
      <Navbar onApply={() => setIsFormOpen(true)} />
      <main className="pt-20">
        <Hero onApply={() => setIsFormOpen(true)} />
        <Marquee />
        <Vision />
        <EntrextFlip />
        <Process />
        <ProductsAccordion />
        <Manifesto />
        <Faq />
        <HungerAnimation onApply={() => setIsFormOpen(true)} />
      </main>
      <Footer />
      
      <ApplicationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}

export default App;
