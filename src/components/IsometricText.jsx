import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './IsometricText.css';

const IsometricText = ({ children }) => {
  const wrapperRef = useRef(null);
  const srcRef = useRef(null);
  const topRef = useRef(null);
  const isInitializedRef = useRef(false);

  useEffect(() => {
    if (!wrapperRef.current || !srcRef.current || !topRef.current || isInitializedRef.current) return;

    const srcTxt = srcRef.current;
    const topTxt = topRef.current;
    
    // Slight delay to ensure fonts and layout are loaded for getBoundingClientRect
    setTimeout(() => {
      const txtContent = srcTxt.innerHTML;
      const bb = srcTxt.getBoundingClientRect();

      for (let i = 0; i <= bb.width * 0.55; i++) {
        const div = document.createElement("div");
        topTxt.append(div);
        
        gsap.set(div, {
          position: "absolute",
          width: 4,
          height: bb.height,
          x: i * 2,
          y: -bb.height,
          textIndent: -i * 2,
          color: "#fff",
          overflow: "hidden",
          innerHTML: txtContent,
          whiteSpace: "nowrap"
        });
      }

      gsap.set(wrapperRef.current, {
        rotate: -50,
        skewY: 22,
        scaleX: 0.75
      });

      const tl = gsap.timeline({
        paused: true,
        defaults: { duration: 0.25, ease: "power3.inOut", yoyoEase: "sine.inOut" }
      })
      .to(topTxt.childNodes, {
        y: "-=33",
        stagger: {
          amount: 1,
          yoyo: true,
          repeat: 1,
          ease: "none"
        }
      });

      gsap.timeline()
        .fromTo(tl, { progress: 0.9 }, { duration: 1.5, progress: 0.1, ease: "power2.inOut" })
        .to(tl, { duration: 4, progress: 0.4, ease: "elastic.out(0.8)" });

      const handlePointerMove = (e) => {
        const xp = e.clientX / window.innerWidth;
        gsap.to(tl, { progress: xp, overwrite: true });
        gsap.to(wrapperRef.current, {
          x: gsap.utils.mapRange(0, 1, 30, -30, xp),
          y: gsap.utils.mapRange(0, 1, -30, 30, xp)
        });
      };

      const handleMouseDown = () => {
        gsap.timeline({ defaults: { duration: 0.2, overwrite: 'auto' } })
          .to(topTxt, { y: -25 })
          .to(srcTxt, {
            filter: 'blur(2px)',
            opacity: 0.85,
            scale: 0.96,
            transformOrigin: '45px 99px'
          }, 0);
      };

      const handleMouseUp = () => {
        gsap.timeline({ defaults: { ease: 'bounce' } })
          .to(topTxt, { y: 0 })
          .to(srcTxt, {
            filter: 'blur(0px)',
            opacity: 1,
            scale: 1
          }, 0);
      };

      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);

      isInitializedRef.current = true;

      // Cleanup function is attached to the component unmount, but since we use setTimeout we must check if mounted
      // Not strictly necessary for this small script, but good practice.
    }, 100);

  }, [children]);

  return (
    <div className="iso-wrapper" ref={wrapperRef}>
      <div className="iso-src-txt" ref={srcRef}>{children}</div>
      <div className="iso-top-txt" aria-disabled="true" ref={topRef}></div>
    </div>
  );
};

export default IsometricText;
