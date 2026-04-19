import React from 'react';

const Mechanisms = () => {
    return (
        <section className="py-32 bg-surface-container-lowest" id="core-mechanisms">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="glass-card p-12 rounded-3xl flex flex-col justify-center reveal active hover:border-tertiary/30 transition-colors glow-hover">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
                                <span className="material-symbols-outlined text-tertiary text-xl">groups</span>
                            </div>
                            <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Selection Rate</span>
                            <span className="ml-auto text-white font-headline font-black">0.05%</span>
                        </div>
                        <h2 className="font-headline text-5xl lg:text-7xl font-black tracking-tight leading-tight">
                            10,000 Founders Screened, <br/>
                            <span className="text-tertiary">5 Passed</span>
                        </h2>
                        <p className="mt-8 text-on-surface-variant text-lg">Less than 1% Selection. We only build with the absolute best talent globally.</p>
                        <div className="mt-12 flex -space-x-4 overflow-hidden">
                            {[1, 2, 3].map((i) => (
                                <img key={i} alt={`Founder ${i}`} className="inline-block h-12 w-12 rounded-full ring-2 ring-black object-cover" src={`https://lh3.googleusercontent.com/aida/ADBb0uh${i === 1 ? 'vnOSanAgV1MLD3P0mJI1TorV3A20i3xCd62qExs7ZeIyDutx-nJVoJ5qQOX03OCna7gXlk8egTdO6wVZhnXpQdjUqMj3JYiGhwV2eReWd6Lkp3QBLJO45ghcs74Cm9d-bhyfphj1II7z3NOWwx7b5lMIWX_NHRwVvlp11KyhdNnr4gnKuXbdK8uhFhTXqfGsis6401u5HMxft33lZAAF48xlSqCm5hj55lC0bx8Yk7j3oL5B8IMxKH48Nq3Bh9lPRQp0QCdA9Hcc' : i === 2 ? 'hEirC10SbVZ4nCZNhKGF3rOlF8uJxuzkd6GN84xWKa-RoklcdYyRVPKGei3JXNtpg_0abiRIVeZLtnbOAEhFDAAhYhcQkCwYKMKeRMzie6MF-poyH5at8yElELo9WwT5HZoANVOocKJvjhDdFkf5c-UPW5Qnanm9hVAD0p9bvN1d4hN7ALuYEJKsoxzVc_Gbc16-trV17wPfIQcvhVE5KX7PHWE2HMMkilOxjjfVmwmttlAv3GzxMxgWrDaSD2ExUv0_48M_6tI8' : 'UAGDp3cZ3tpSleqJ9rmeIs0qERKlbQrARUW2WaaputZJWEFmQFIf3mV1JbRPVIGMw-1KH8_DXNwMLA_VLCZsxNqU7F6Eo22BTNftgYCEUl_PqlX-XkNvfeTRnsx6eI1U0IqMRUEMjyK-ZR7_sNeLk32JhyZuPuBxXyi_O_ZCjt9jcVv_7256YeieJ6EYnYal-diC6fxkNU-VejRSMzW0OlOagpjQrPfvY5dj-rQTiE6ottsgOnFEoqG8EZ8sX0g-wgDCLhtQvA0M'}`} />
                            ))}
                            <div className="flex items-center justify-center h-12 w-12 rounded-full ring-2 ring-black bg-surface-container text-[10px] font-bold text-tertiary uppercase tracking-tighter">
                                +12 joined
                            </div>
                        </div>
                    </div>
                    <div className="glass-card p-12 rounded-3xl reveal active hover:border-tertiary/30 transition-colors glow-hover">
                        <div className="inline-block px-4 py-1 rounded-full border border-outline-variant/30 text-on-surface-variant font-label text-[10px] uppercase tracking-widest font-bold mb-10">Phase: Validation</div>
                        <h2 className="font-headline text-5xl lg:text-7xl font-black mb-8 text-white">Validated <span className="text-outline">Ideas</span></h2>
                        <p className="text-on-surface-variant text-lg leading-relaxed mb-12">Every idea inside Entrext - Pro has gone through the fire before you touch it. No brainstorming in the dark.</p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-surface-container p-6 rounded-2xl border border-outline-variant/10">
                                <span className="material-symbols-outlined text-tertiary mb-4">verified</span>
                                <h4 className="font-headline font-bold text-lg mb-2 text-white">Market Fit</h4>
                                <p className="text-xs text-on-surface-variant">Verified via early adoption signals and waitlist velocity.</p>
                            </div>
                            <div className="bg-surface-container p-6 rounded-2xl border border-outline-variant/10">
                                <span className="material-symbols-outlined text-tertiary mb-4">radar</span>
                                <h4 className="font-headline font-bold text-lg mb-2 text-white">Real Demand</h4>
                                <p className="text-xs text-on-surface-variant">Problem-solution validated through 500+ user interviews.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-12 gap-8">
                    <div className="md:col-span-8 glass-card p-12 rounded-3xl relative overflow-hidden reveal active hover:border-tertiary/30 transition-colors glow-hover">
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                <span className="text-[10px] font-label font-bold uppercase tracking-widest text-emerald-500">Network Live</span>
                            </div>
                            <h2 className="font-headline text-5xl font-black mb-6 text-white">Global Reach<span className="text-tertiary">.</span></h2>
                            <p className="text-on-surface-variant text-lg max-w-lg mb-12">Async-first collaboration across 150+ countries. We build where the talent is, not where the office is.</p>
                            <div className="flex flex-wrap gap-3 mb-16">
                                {["India", "USA", "UK", "Singapore", "Germany", "UAE", "Japan", "+140 more"].map((c) => (
                                    <span key={c} className="px-4 py-2 bg-black/40 border border-outline-variant/10 rounded-lg text-sm font-medium text-white">{c}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-4 bg-white p-12 rounded-3xl flex flex-col items-center justify-center text-center reveal active card-float">

                        <div className="relative w-48 h-48 mb-12 flex items-center justify-center">
                            <svg className="w-full h-full">
                                <circle cx="96" cy="96" fill="transparent" r="88" stroke="#f1f1f1" strokeWidth="8"></circle>
                                <circle className="circle-progress" cx="96" cy="96" fill="transparent" r="88" stroke="#232323" strokeDasharray="552.92" strokeDashoffset="0" strokeWidth="8"></circle>
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <div className="px-2 py-0.5 bg-black text-white text-[8px] font-black rounded mb-1 uppercase tracking-tighter">Owned</div>
                                <span className="text-black font-headline text-5xl font-black">100%</span>
                            </div>
                        </div>
                        <h3 className="text-black font-headline text-4xl font-black mb-6">You-First</h3>
                        <p className="text-gray-500 font-medium leading-relaxed">Full ownership of your vision. No compromises on equity or creative control.</p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Mechanisms;
