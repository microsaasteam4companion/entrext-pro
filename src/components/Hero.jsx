import React from 'react';

const Hero = ({ onApply }) => {
    return (
        <section className="relative w-full overflow-hidden py-24 lg:py-40 min-h-[90vh] flex flex-col justify-center">
            {/* Animated Background Ambience */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-10 left-10 md:left-1/4 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-tertiary/30 md:bg-tertiary/40 blur-[100px] md:blur-[150px] rounded-full mix-blend-screen float-slow"></div>
                <div className="absolute bottom-10 right-10 md:right-1/4 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-blue-500/20 md:bg-blue-500/30 blur-[100px] md:blur-[150px] rounded-full mix-blend-screen float-delayed"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 flex flex-col items-center text-center gap-10 md:gap-12">
                <div>
                    <h1 className="font-headline text-5xl md:text-8xl font-black tracking-tight leading-[1] md:leading-[0.95] mb-6 md:mb-8 text-white float-slow">
                        The <span className="font-accent">Bootstrapped</span><br className="hidden md:block"/>
                        First Studio<span className="text-tertiary">.</span>
                    </h1>
                    <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-xl mb-10 md:mb-12 leading-relaxed mx-auto text-center px-4 md:px-0">
                        Elite Tech & Growth teams building validated startups with full ownership and zero outside control.
                        <span className="text-white/80 block mt-2">Pure partnership to build, pivot, and scale.</span>
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row justify-center items-stretch sm:items-center reveal active" style={{ animationDelay: '0.4s' }}>
                        <button 
                            onClick={onApply}
                            className="bg-tertiary text-on-tertiary px-10 py-5 rounded-lg font-headline text-lg md:text-xl font-black uppercase tracking-tight hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(74,116,155,0.3)] hover:shadow-[0_0_30px_rgba(74,116,155,0.5)]"
                        >
                            Apply Now
                        </button>
                        <button className="border border-outline-variant/30 text-on-surface px-10 py-5 rounded-lg font-headline text-lg md:text-xl font-black uppercase tracking-tight hover:bg-surface-container-low transition-colors">
                            Our Vision
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
