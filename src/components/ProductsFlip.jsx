import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import './ProductsFlip.css';

gsap.registerPlugin(Flip);

const ProductsFlip = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let layouts = ["final", "plain", "columns", "grid"];
    let curLayout = 0;
    let timerId;

    const nextState = () => {
      // Capture current state of all moving elements
      const state = Flip.getState(".flip-card, .flip-for, .flip-gsap", {
        props: "color,backgroundColor", 
        simple: true
      });
      
      container.classList.remove(layouts[curLayout]);
      curLayout = (curLayout + 1) % layouts.length;
      container.classList.add(layouts[curLayout]);

      Flip.from(state, {
        absolute: true,
        stagger: 0.07,
        duration: 0.7,
        ease: "power2.inOut",
        spin: curLayout === 0, // only spin when going to "final" layout
        simple: true,
        onEnter: (elements, animation) => gsap.fromTo(elements, {opacity: 0}, {opacity: 1, delay: animation.duration() - 0.1}),
        onLeave: elements => gsap.to(elements, {opacity: 0})
      });

      // Set the next call
      timerId = gsap.delayedCall(curLayout === 0 ? 3.5 : 1.5, nextState);
    };

    // Start the loop
    timerId = gsap.delayedCall(1, nextState);

    return () => {
      if (timerId) timerId.kill();
      // clean up any ongoing Flips to prevent errors on unmount
      gsap.killTweensOf(".flip-card, .flip-for, .flip-gsap");
    };
  }, []);

  return (
    <div className="flip-container final" ref={containerRef}>
      <div className="flip-card card-companion">Companion</div>
      <div className="flip-card card-noa">Noa</div>
      <div className="flip-card card-herth">Herth</div>
      <div className="flip-card card-friendsin">Friendsin</div>
      <div className="flip-for">for</div>
      <div className="flip-gsap">Entrext</div>
    </div>
  );
};

export default ProductsFlip;
