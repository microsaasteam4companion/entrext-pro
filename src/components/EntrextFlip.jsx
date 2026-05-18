import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import './EntrextFlip.css';

gsap.registerPlugin(Flip);

const EntrextFlip = () => {
    const containerRef = useRef(null);
    const [curLayout, setCurLayout] = useState(0);
    const layouts = ["final", "plain", "columns", "grid"];
    
    // Letters for ENTREXT
    const letters = ["E", "N", "T", "R", "E", "X", "T"];
    const subtexts = ["PRO"];

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        let index = 0;

        const nextState = () => {
            const state = Flip.getState(".flip-letter, .flip-subtext, .flip-separator", {
                props: "color,backgroundColor",
                simple: true
            });

            container.classList.remove(layouts[index]);
            index = (index + 1) % layouts.length;
            container.classList.add(layouts[index]);
            setCurLayout(index);

            Flip.from(state, {
                absolute: true,
                stagger: 0.07,
                duration: 0.8,
                ease: "power2.inOut",
                spin: index === 0,
                simple: true,
                onEnter: (elements, animation) => 
                    gsap.fromTo(elements, { opacity: 0 }, { opacity: 1, delay: animation.duration() - 0.1 }),
                onLeave: elements => gsap.to(elements, { opacity: 0 })
            });

            gsap.delayedCall(index === 0 ? 4 : 2, nextState);
        };

        const timer = gsap.delayedCall(1, nextState);

        return () => {
            timer.kill();
            gsap.killTweensOf(nextState);
        };
    }, []);

    return (
        <section className="flip-section">
            <div className={`flip-container ${layouts[0]}`} ref={containerRef}>
                {letters.map((letter, i) => (
                    <div key={i} className={`flip-letter ${letter}`}>{letter}</div>
                ))}
                
                {/* The sub-card tag */}
                <div className="flip-subtext">PRO</div>
            </div>
        </section>
    );
};

export default EntrextFlip;
