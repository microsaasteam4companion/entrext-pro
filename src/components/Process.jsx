import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Process.css';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        number: "01",
        title: "The Quality Gate",
        description: "Filtering for the top 1% of talent.",
        detail: "Our first filter is purely objective. We analyze past execution, problem-solving speed, and first principles thinking."
    },
    {
        number: "02",
        title: "Ecosystem Alignment",
        description: "Culture Fit & Core Values.",
        detail: "Skill is common; alignment is rare. We ensure your personal mission syncs with the Entrext ecosystem."
    },
    {
        number: "03",
        title: "Deep Dive",
        description: "Technical Round & Genius Match.",
        detail: "A deep dive into your vertical. We test how you apply expertise to high-stakes, real-world constraints."
    },
    {
        number: "04",
        title: "The Reality Check",
        description: "Market Validation & Pain Points.",
        detail: "Can you build what people want? We test your ability to read market signals and identify friction."
    },
    {
        number: "05",
        title: "Collaborative Sprint",
        description: "Task Assignment & Impact.",
        detail: "A high-pressure challenge. See how you translate strategy into tangible results under fire."
    },
    {
        number: "06",
        title: "The Grit Test",
        description: "The Final Stand & Resilience.",
        detail: "The final barrier. Proving you have the fire, consistency, and resilience to see things through."
    }
];

const SplitText = ({ text }) => {
    return text.split(" ").map((word, i) => (
        <span key={i} className="word" data-word={word}>
            {word}&nbsp;
        </span>
    ));
};

const Process = () => {
    const wrapRef = useRef(null);

    useEffect(() => {
        if (!wrapRef.current) return;

        const panels = gsap.utils.toArray(".process-panel");
        
        panels.forEach((section) => {
            const thumb = section.querySelector(".process-thumb");
            
            // Flip animation for the box
            gsap.fromTo(thumb, 
                { 
                    rotateX: -45, 
                    rotateY: 20, 
                    opacity: 0, 
                    scale: 0.8,
                    z: -500
                },
                {
                    rotateX: 0,
                    rotateY: 0,
                    opacity: 1,
                    scale: 1,
                    z: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            gsap.to(section, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 100%",
                    end: "bottom 25%",
                    scrub: 0,
                    onUpdate: (self) => {
                        section.style.setProperty("--progress", self.progress);
                    }
                }
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section className="py-20 bg-surface-container-lowest overflow-hidden relative" id="process">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-1/4 left-10 w-64 h-64 bg-tertiary/20 blur-[100px] rounded-full"></div>
                <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent-blue/10 blur-[120px] rounded-full"></div>
            </div>

            <div className="process-wrap" ref={wrapRef}>
                <div className="flex flex-col items-center text-center mb-24 max-w-5xl mx-auto px-4">
                    <h2 className="font-headline text-5xl md:text-7xl font-black leading-tight reveal active text-white mb-8 whitespace-nowrap">
                        The <span className="font-accent text-tertiary">Entrext Way</span>
                    </h2>
                    <p className="text-xl text-on-surface-variant reveal active">
                        Our battle-tested protocol for identifying and scaling elite talent.
                    </p>
                </div>

                {steps.map((step, index) => (
                    <div className="process-panel" data-number={step.number} key={index}>
                        <h2>
                            <SplitText text={step.title} />
                        </h2>
                        <div className="process-thumb">
                            <p className="process-step-desc">{step.description}</p>
                            <div className="process-thumb-inner">
                                <div className="process-thumb-text">
                                    "{step.detail}"
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Process;
