import React from 'react';

const Hero = ({ onApply }) => {
    return (
        <section className="relative w-full overflow-hidden py-24 lg:py-40 min-h-screen flex flex-col justify-center" id="hero">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[#0a0a0a]"></div>
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-tertiary/10 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <div className="reveal active">
                    <h1 className="font-headline text-5xl md:text-8xl font-black tracking-tight leading-[1] md:leading-[0.95] mb-6 md:mb-8 text-white">
                        The <span className="text-tertiary">Bootstrapped</span><br />
                        First Studio<span className="text-tertiary">.</span>
                    </h1>
                    <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-xl mb-10 md:mb-12 leading-relaxed">
                        Elite Tech & Growth teams building validated startups with full ownership and zero outside control.
                        <span className="text-white/80 block mt-2">Pure partnership to build, pivot, and scale.</span>
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row justify-start items-stretch sm:items-center">
                        <button 
                            onClick={onApply}
                            className="bg-tertiary text-on-tertiary px-10 py-5 rounded-lg font-headline text-lg md:text-xl font-black uppercase tracking-tight hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(74,116,155,0.3)]"
                        >
                            Apply Now
                        </button>
                        <button className="border border-outline-variant/30 text-on-surface px-10 py-5 rounded-lg font-headline text-lg md:text-xl font-black uppercase tracking-tight hover:bg-surface-container-low transition-colors">
                            Our Vision
                        </button>
                    </div>
                </div>

                {/* Cool Right Side Animation */}
                <div className="relative hidden lg:block h-[500px] reveal active" style={{ animationDelay: '0.3s' }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-80 h-80">
                            {/* Animated Rings */}
                            <div className="absolute inset-0 border-2 border-tertiary/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                            <div className="absolute inset-4 border-2 border-accent-blue/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                            <div className="absolute inset-10 border-2 border-white/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
                            
                            {/* Floating Particles/Dots */}
                            {[...Array(12)].map((_, i) => (
                                <div 
                                    key={i}
                                    className="absolute w-2 h-2 bg-tertiary rounded-full animate-pulse"
                                    style={{
                                        top: `${50 + 40 * Math.sin(i * (Math.PI / 6))}%`,
                                        left: `${50 + 40 * Math.cos(i * (Math.PI / 6))}%`,
                                        animationDelay: `${i * 0.2}s`
                                    }}
                                ></div>
                            ))}

                            {/* Center Core */}
                            <div className="absolute inset-24 bg-gradient-to-br from-tertiary to-accent-blue rounded-2xl rotate-45 animate-[bounce_4s_ease-in-out_infinite] shadow-[0_0_50px_rgba(74,116,155,0.4)]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
