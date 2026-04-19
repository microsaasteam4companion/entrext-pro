import React from 'react';

const CTA = ({ onApply }) => {
    return (
        <section className="py-32 bg-black text-center relative overflow-hidden mt-20">
            <div className="max-w-7xl mx-auto px-8 flex flex-col items-center">
                <h2 className="font-headline text-5xl md:text-8xl font-black tracking-tighter leading-[1.1] mb-8 text-white reveal active">
                    You have the <span className="text-tertiary">hunger</span>.<br/>
                    <span className="relative inline-block">
                        <span className="relative z-10">We have the <span className="text-tertiary">match</span>.</span>
                        <span className="absolute bottom-2 left-0 w-full h-[35%] bg-tertiary/20 -z-0"></span>
                    </span>
                </h2>
                <p className="font-body text-xl md:text-2xl text-on-surface-variant mb-12 max-w-2xl">
                    Apply in 5 minutes. Build for the next decade.
                </p>
                <div className="relative group reveal active" style={{ animationDelay: '0.2s' }}>
                    <div className="absolute -inset-1 bg-tertiary blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                    <button 
                        onClick={onApply}
                        className="relative bg-tertiary text-on-tertiary px-12 py-5 rounded-lg font-headline text-xl font-black uppercase tracking-tight hover:scale-105 active:scale-95 transition-all shadow-xl"
                    >
                        Apply to Build
                    </button>
                </div>
                <p className="mt-10 font-label text-[10px] uppercase tracking-[0.3em] text-on-surface-variant font-bold">
                    <span className="text-tertiary">•</span> Next cohort starts in 14 days
                </p>
            </div>
        </section>
    );
};

export default CTA;
