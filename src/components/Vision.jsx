import React from 'react';

const Vision = () => {
    return (
        <section className="py-40 bg-black relative overflow-hidden" id="vision">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4A749B]/5 blur-[120px] rounded-full pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <div className="reveal active mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#4A749B]/30 mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#4A749B]"></span>
                            <span className="text-[10px] uppercase tracking-widest font-label font-bold text-[#4A749B]">Our Manifesto</span>
                        </div>
                        <h2 className="font-headline text-5xl md:text-7xl font-medium text-white leading-tight">
                            The <span className="font-accent">Vision</span> of Entrext
                        </h2>
                    </div>

                    <div className="max-w-4xl reveal active px-4 md:px-0">
                        <div className="relative pt-12 md:pt-16 px-6 md:px-4">
                            <span className="absolute left-0 -top-4 md:top-0 text-[8rem] md:text-[12rem] font-serif text-[#4A749B]/10 leading-none select-none">“</span>
                            <blockquote className="font-body text-xl md:text-5xl text-on-surface leading-snug md:leading-[1.1] font-medium italic tracking-tight mb-12 md:mb-16 relative z-10">
                                Everyone pretends to have it figured out, but the truth is we're all learning as we build. At Entrext, you don't follow playbooks or people; you build your own way with <span className="text-white border-b-2 border-[#4A749B]/40">full ownership</span> and <span className="text-white border-b-2 border-[#4A749B]/40">real discipline</span>.
                            </blockquote>
                            <span className="absolute right-0 bottom-0 text-[8rem] md:text-[12rem] font-serif text-[#4A749B]/10 leading-none select-none translate-y-12 md:translate-y-20">”</span>
                        </div>
                        
                        <div className="mt-20 flex flex-col items-center">
                            <div className="w-px h-16 bg-gradient-to-b from-[#4A749B] to-transparent mb-8"></div>
                            {/* Name removed as requested */}
                            <p className="text-xs uppercase tracking-[0.4em] text-[#4A749B] font-black">Founding Principal</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vision;
