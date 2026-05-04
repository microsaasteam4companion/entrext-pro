import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Vision = () => {
    const sectionRef = useRef(null);
    const quoteRef = useRef(null);
    const bodyRef = useRef(null);
    const lineRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Animate Heading
            gsap.from(".vision-heading", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".vision-heading",
                    start: "top 85%",
                }
            });

            // Animate Quote
            gsap.from(quoteRef.current, {
                y: 100,
                opacity: 0,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: quoteRef.current,
                    start: "top 80%",
                }
            });

            // Animate the line
            gsap.from(lineRef.current, {
                scaleX: 0,
                duration: 1,
                ease: "power2.inOut",
                transformOrigin: "left center",
                scrollTrigger: {
                    trigger: lineRef.current,
                    start: "top 85%",
                }
            });

            // Animate Body Text
            gsap.from(bodyRef.current, {
                y: 30,
                opacity: 0,
                duration: 1.2,
                delay: 0.3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: bodyRef.current,
                    start: "top 85%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-40 bg-black relative overflow-hidden" id="vision">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4A749B]/5 blur-[120px] rounded-full pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <div className="flex flex-col items-center text-center mb-24 max-w-5xl mx-auto px-4">
                    <h2 className="vision-heading font-headline text-5xl md:text-8xl font-black leading-tight text-white mb-8">
                        The Vision <span className="font-accent text-tertiary italic">of Entrext</span>
                    </h2>
                </div>

                <div className="flex flex-col items-center">
                    <div className="max-w-6xl w-full">
                        <div className="relative p-10 md:p-24 rounded-[48px] bg-white/[0.01] border border-white/5 backdrop-blur-md overflow-hidden group">
                            {/* Decorative gradient glow */}
                            <div className="absolute -top-40 -left-40 w-96 h-96 bg-tertiary/10 blur-[120px] rounded-full group-hover:bg-tertiary/15 transition-all duration-1000"></div>
                            
                            <span className="absolute left-10 top-10 text-9xl font-serif text-tertiary opacity-10 select-none">“</span>
                            
                            <div className="relative z-10 flex flex-col gap-10">
                                <blockquote ref={quoteRef} className="font-headline text-3xl md:text-6xl text-white leading-[1.1] font-bold tracking-tight text-center md:text-left">
                                    Everyone pretends to have it figured out, but the truth is we're all learning as we build.
                                </blockquote>
                                
                                <div ref={lineRef} className="h-px w-20 bg-tertiary/30 self-center md:self-start"></div>

                                <p ref={bodyRef} className="font-body text-xl md:text-3xl text-on-surface-variant font-medium leading-relaxed text-center md:text-left">
                                    At Entrext, you don't follow playbooks or people; you build your own way with 
                                    <span className="text-white italic px-2">full ownership</span> and 
                                    <span className="text-white italic px-2">real discipline</span>.
                                </p>
                            </div>
                            
                            <span className="absolute right-10 bottom-10 text-9xl font-serif text-tertiary opacity-10 rotate-180 select-none">“</span>
                        </div>
                        
                        <div className="mt-16 flex flex-col items-center">
                            <div className="w-px h-24 bg-gradient-to-b from-tertiary to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vision;
