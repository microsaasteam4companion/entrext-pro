import React from 'react';

const Hero = ({ onApply }) => {
    return (
        <section className="relative max-w-7xl mx-auto px-8 py-20 lg:py-40">
            <div className="flex flex-col items-center text-center gap-12">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-outline-variant/20 mb-8">
                        <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                        <span className="text-[10px] uppercase tracking-widest font-label font-medium opacity-60">Human-Centric Tech</span>
                    </div>
                    <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tight leading-[0.95] mb-8 bg-gradient-to-r from-white via-primary-dim to-white bg-[length:200%_auto] bg-clip-text text-transparent float-slow">
                        The Bootstrapped<br className="hidden md:block"/>
                        <span className="text-tertiary" style={{ textShadow: "rgba(74, 116, 155, 0.45) 0px 0px 20px" }}>First Studio.</span>
                    </h1>
                    <p className="font-body text-xl text-on-surface-variant max-w-xl mb-12 leading-relaxed mx-auto text-center">
                        Elite Tech & Growth teams building validated startups with full ownership and zero outside control.
                        <span className="text-white/80 block mt-2">Pure partnership to build, pivot, and scale.</span>
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row justify-center reveal active" style={{ animationDelay: '0.4s' }}>
                        <button 
                            onClick={onApply}
                            className="bg-tertiary text-on-tertiary px-10 py-5 rounded-lg font-headline text-xl font-black uppercase tracking-tight hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(74,116,155,0.3)] hover:shadow-[0_0_30px_rgba(74,116,155,0.5)]"
                        >
                            Apply Now
                        </button>
                        <button className="border border-outline-variant/30 text-on-surface px-10 py-5 rounded-lg font-headline text-xl font-black uppercase tracking-tight hover:bg-surface-container-low transition-colors">
                            Our Vision
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
