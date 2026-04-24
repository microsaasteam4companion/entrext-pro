import React from 'react';

const Mechanisms = () => {
    return (
        <section className="py-32 bg-surface-container-lowest" id="core-mechanisms">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
                    <div className="glass-card p-8 md:p-12 rounded-3xl flex flex-col justify-center reveal active hover:border-tertiary/30 transition-colors glow-hover">
                        <div className="flex items-center gap-3 mb-8 md:mb-10">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-surface-container flex items-center justify-center">
                                <span className="material-symbols-outlined text-tertiary text-lg md:text-xl">groups</span>
                            </div>
                            <span className="text-[10px] md:text-xs font-label uppercase tracking-widest text-on-surface-variant">Selection Rate</span>
                            <span className="ml-auto text-white font-headline font-black text-sm md:text-base">0.05%</span>
                        </div>
                        <h2 className="font-headline text-4xl lg:text-7xl font-medium tracking-tight leading-tight text-white">
                            10,000 Founders Screened, <br/>
                            <span className="font-accent">5 Passed</span>
                        </h2>
                        <p className="mt-6 md:mt-8 text-on-surface-variant text-base md:text-lg">Less than 1% Selection. We only build with the absolute best talent globally.</p>

                    </div>
                    <div className="glass-card p-8 md:p-12 rounded-3xl reveal active hover:border-tertiary/30 transition-colors glow-hover">
                        <div className="inline-block px-3 py-1 rounded-full border border-outline-variant/30 text-on-surface-variant font-label text-[9px] md:text-[10px] uppercase tracking-widest font-bold mb-8 md:mb-10">Phase: Validation</div>
                        <h2 className="font-headline text-4xl lg:text-7xl font-medium mb-6 md:mb-8 text-white">Validated <span className="font-accent">Ideas</span></h2>
                        <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-8 md:mb-12">Every idea inside Entrext - Pro has gone through the fire before you touch it. No brainstorming in the dark.</p>
                        <div className="grid grid-cols-2 gap-3 md:gap-4">
                            <div className="bg-surface-container p-4 md:p-6 rounded-2xl border border-outline-variant/10">
                                <span className="material-symbols-outlined text-tertiary mb-3 md:mb-4 text-xl">verified</span>
                                <h4 className="font-headline font-bold text-base md:text-lg mb-1 md:text-white">Market Fit</h4>
                                <p className="text-[10px] md:text-xs text-on-surface-variant">Verified via early adoption signals and waitlist velocity.</p>
                            </div>
                            <div className="bg-surface-container p-4 md:p-6 rounded-2xl border border-outline-variant/10">
                                <span className="material-symbols-outlined text-tertiary mb-3 md:mb-4 text-xl">radar</span>
                                <h4 className="font-headline font-bold text-base md:text-lg mb-1 md:text-white">Real Demand</h4>
                                <p className="text-[10px] md:text-xs text-on-surface-variant">Problem-solution validated through 500+ user interviews.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-12 gap-6 md:gap-8">
                    <div className="md:col-span-8 glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden reveal active hover:border-tertiary/30 transition-colors glow-hover">
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                                <span className="text-[10px] font-label font-bold uppercase tracking-widest text-blue-500">Network Live</span>
                            </div>
                            <h2 className="font-headline text-4xl md:text-5xl font-medium mb-6 text-white">Global <span className="font-accent">Reach</span>.</h2>
                            <p className="text-on-surface-variant text-base md:text-lg max-w-lg mb-8 md:mb-12">Async-first collaboration across 150+ countries. We build where the talent is, not where the office is.</p>
                            <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-16">
                                {["India", "USA", "UK", "Singapore", "Germany", "UAE", "Japan", "+140 more"].map((c) => (
                                    <span key={c} className="px-3 py-1.5 md:px-4 md:py-2 bg-black/40 border border-outline-variant/10 rounded-lg text-xs md:text-sm font-medium text-white">{c}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-4 bg-white p-8 md:p-12 rounded-3xl flex flex-col items-center justify-center text-center reveal active card-float hover:scale-105 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">

                        <div className="relative w-32 h-32 md:w-48 md:h-48 mb-8 md:mb-12 flex items-center justify-center">
                            <svg className="w-full h-full" viewBox="0 0 192 192">
                                <circle cx="96" cy="96" fill="transparent" r="88" stroke="#f1f1f1" strokeWidth="8"></circle>
                                <circle className="circle-progress" cx="96" cy="96" fill="transparent" r="88" stroke="#232323" strokeDasharray="552.92" strokeDashoffset="0" strokeWidth="8"></circle>
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <div className="px-1.5 py-0.5 bg-black text-white text-[7px] md:text-[8px] font-black rounded mb-1 uppercase tracking-tighter">Owned</div>
                                <span className="text-black font-headline text-3xl md:text-5xl font-black">100%</span>
                            </div>
                        </div>
                        <h3 className="text-black font-headline text-3xl md:text-4xl font-medium mb-4 md:mb-6">You-<span className="font-accent text-tertiary">First</span></h3>
                        <p className="text-gray-500 font-medium leading-relaxed text-sm md:text-base">Full ownership of your vision. No compromises on equity or creative control.</p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Mechanisms;
