import React from 'react';

const CTA = ({ onApply }) => {
    return (
        <section className="py-32 bg-surface-container-low relative overflow-hidden" id="cta">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-tertiary/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
                <div className="glass-card p-8 md:p-24 rounded-[32px] md:rounded-[40px] text-center reveal active">
                    <h2 className="font-headline text-4xl md:text-8xl font-black tracking-tighter leading-[1.1] mb-6 md:mb-8 text-white reveal active">
                        You have the <span className="font-accent text-tertiary">hunger</span>.<br/>
                        <span className="relative inline-block mt-2 md:mt-0">
                            <span className="relative z-10">We have the <span className="font-accent text-tertiary">match</span>.</span>
                            <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-[30%] md:h-[35%] bg-tertiary/20 -z-0"></span>
                        </span>
                    </h2>
                    <p className="font-body text-lg md:text-2xl text-on-surface-variant max-w-2xl mx-auto mb-10 md:mb-16 leading-relaxed">
                        Apply in 5 minutes. Build for the next decade.
                    </p>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 md:gap-6">
                        <button 
                            onClick={onApply}
                            className="w-full sm:w-auto bg-tertiary text-on-tertiary px-10 md:px-12 py-5 md:py-6 rounded-xl md:rounded-2xl font-headline text-lg md:text-xl font-black uppercase tracking-tight hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(74,116,155,0.4)]"
                        >
                            Apply to the Studio
                        </button>
                        <button className="w-full sm:w-auto border border-outline-variant/30 text-on-surface px-10 md:px-12 py-5 md:py-6 rounded-xl md:rounded-2xl font-headline text-lg md:text-xl font-black uppercase tracking-tight hover:bg-surface-container-high transition-colors">
                            The Portfolio
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CTA;
