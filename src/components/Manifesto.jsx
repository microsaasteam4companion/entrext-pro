import React from 'react';

const Manifesto = () => {
    return (
        <section className="py-40 bg-surface-container-lowest" id="manifesto">
            <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-24 items-start">
                <div className="reveal active">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-error/30 text-error font-label text-[10px] uppercase tracking-widest font-bold mb-10">Exclusive Access</div>
                    <h2 className="font-headline text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8">
                        Not for <br/>
                        <span className="text-outline">Everyone.</span>
                    </h2>
                    <p className="font-body text-2xl text-on-surface-variant leading-relaxed max-w-lg">
                        We are a selective tribe. We don't look for resumes; we look for the hunger that keeps you awake at 3 AM. If you seek comfort, you're in the wrong place.
                    </p>
                    <div className="mt-12 doodle-arrow relative -rotate-[15deg] opacity-50"></div>
                </div>
                <div className="reveal border-l border-outline-variant/20 pl-12 lg:pl-20 py-4 active">
                    <h3 className="font-headline text-4xl font-black mb-12 doodle-underline inline-block">The Entrext Manifesto</h3>
                    <div className="space-y-8 font-body text-xl text-on-surface leading-relaxed italic">
                        <p>"In a world obsessed with mindless scaling, we choose intentional depth. We believe the intersection of human intuition and algorithmic precision is where the next century is built."</p>
                        <p>"We don't build features; we build leverage. We don't hire employees; we empower architects. Our mission is to curate the 1% who will define the human-centric tech revolution."</p>
                        <p>"Excellence is not an act, but a relentless habit. We are the architects of the unseen, the builders of the bold."</p>
                    </div>
                    <div className="mt-16">
                        <div className="h-px w-20 bg-tertiary mb-6"></div>
                        <p className="font-headline text-2xl font-bold tracking-tight text-[#f9f9f9]">
                            — Manthan Gupta, <span className="text-tertiary">Founder</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Manifesto;
