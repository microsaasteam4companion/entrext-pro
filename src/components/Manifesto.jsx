import React from 'react';

const Manifesto = () => {
    return (
        <section className="py-40 bg-surface-container-lowest" id="manifesto">
            <div className="max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                <div className="reveal active">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-error/30 text-error font-label text-[10px] uppercase tracking-widest font-bold mb-8 md:mb-10">Exclusive Access</div>
                    <h2 className="font-headline text-5xl md:text-8xl font-black md:font-medium tracking-tighter leading-[0.95] md:leading-[0.85] mb-6 md:mb-8 text-white">
                        Not <span className="font-accent">for</span> <br/>
                        Everyone.
                    </h2>
                    <p className="font-body text-xl md:text-2xl text-on-surface-variant leading-relaxed max-w-lg mb-8 md:mb-0">
                        We are a selective tribe. We don't look for resumes; we look for the hunger that keeps you awake at 3 AM. If you seek comfort, you're in the wrong place.
                    </p>
                    <div className="mt-8 md:mt-12 doodle-arrow relative -rotate-[15deg] opacity-50 hidden md:block"></div>
                </div>
                <div className="reveal border-l-0 lg:border-l border-outline-variant/20 pl-0 lg:pl-20 py-4 active">
                    <h3 className="font-headline text-3xl md:text-4xl font-medium mb-8 md:mb-12 doodle-underline inline-block">The Entrext <span className="font-accent">Manifesto</span></h3>
                    <div className="space-y-6 md:space-y-8 font-body text-lg md:text-xl text-on-surface leading-relaxed italic">
                        <p>"In a world obsessed with mindless scaling, we choose intentional depth. We believe the intersection of human intuition and algorithmic precision is where the next century is built."</p>
                        <p>"We don't build features; we build leverage. We don't hire employees; we empower architects. Our mission is to curate the 1% who will define the human-centric tech revolution."</p>
                        <p>"Excellence is not an act, but a relentless habit. We are the architects of the unseen, the builders of the bold."</p>
                    </div>
                    <div className="mt-12 md:mt-16">
                        <div className="h-px w-20 bg-tertiary mb-6"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Manifesto;
