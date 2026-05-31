import React, { useState } from 'react';

const ApplicationForm = ({ isOpen, onClose }) => {
    const [selected, setSelected] = useState(null); // null | 'tech' | 'growth'

    if (!isOpen) return null;

    const handleClose = () => {
        setSelected(null);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
                onClick={handleClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-2xl bg-[#0e0e0e] border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(74,116,155,0.15)] animate-in fade-in zoom-in-95 duration-300">

                {/* Decorative glow */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-tertiary/20 blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#EC4899]/10 blur-[100px] rounded-full pointer-events-none" />

                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all"
                >
                    <span className="material-symbols-outlined text-xl">close</span>
                </button>

                {!selected ? (
                    /* ── Step 1: Choose partner type ── */
                    <div className="relative z-10 p-8 md:p-12">
                        <div className="text-center mb-10">
                            <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-tertiary/30 bg-tertiary/10 text-[10px] font-black uppercase tracking-[0.35em] text-tertiary">
                                Apply Now
                            </div>
                            <h2 className="font-headline text-3xl md:text-5xl font-black text-white mb-3">
                                How do you want to<br />
                                <span className="font-accent text-tertiary italic">build with us?</span>
                            </h2>
                            <p className="text-on-surface-variant text-sm md:text-base">
                                Choose your role in the Entrext ecosystem.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* Tech Partner Card */}
                            <button
                                onClick={() => setSelected('tech')}
                                className="group relative text-left p-7 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-[#2563EB]/10 hover:border-[#2563EB]/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(37,99,235,0.15)]"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#2563EB]/20 flex items-center justify-center mb-5 group-hover:bg-[#2563EB]/30 transition-colors">
                                    <span className="material-symbols-outlined text-[#2563EB] text-2xl">code</span>
                                </div>
                                <div className="text-[9px] font-black uppercase tracking-[0.35em] text-[#2563EB]/70 mb-2">Role</div>
                                <h3 className="font-headline text-xl md:text-2xl font-black text-white mb-3">Tech Partner</h3>
                                <p className="text-on-surface-variant text-sm leading-relaxed">
                                    Builders, developers & engineers who want to co-create high-growth products from ground zero.
                                </p>
                                <div className="mt-5 flex items-center gap-2 text-[#2563EB] text-sm font-bold">
                                    Apply as Tech
                                    <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </div>
                            </button>

                            {/* Growth Partner Card */}
                            <button
                                onClick={() => setSelected('growth')}
                                className="group relative text-left p-7 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-[#EC4899]/10 hover:border-[#EC4899]/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(236,72,153,0.15)]"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#EC4899]/20 flex items-center justify-center mb-5 group-hover:bg-[#EC4899]/30 transition-colors">
                                    <span className="material-symbols-outlined text-[#EC4899] text-2xl">trending_up</span>
                                </div>
                                <div className="text-[9px] font-black uppercase tracking-[0.35em] text-[#EC4899]/70 mb-2">Role</div>
                                <h3 className="font-headline text-xl md:text-2xl font-black text-white mb-3">Growth Partner</h3>
                                <p className="text-on-surface-variant text-sm leading-relaxed">
                                    Marketers, operators & growth hackers who scale products and dominate distribution channels.
                                </p>
                                <div className="mt-5 flex items-center gap-2 text-[#EC4899] text-sm font-bold">
                                    Apply as Growth
                                    <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </div>
                            </button>
                        </div>
                    </div>
                ) : (
                    /* ── Step 2: Embedded Tally form ── */
                    <div className="relative z-10 flex flex-col" style={{ height: '85vh', maxHeight: '700px' }}>
                        {/* Form Header */}
                        <div className="flex items-center gap-4 px-6 py-4 border-b border-white/10 flex-shrink-0">
                            <button
                                onClick={() => setSelected(null)}
                                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all"
                            >
                                <span className="material-symbols-outlined text-base">arrow_back</span>
                            </button>
                            <div className="flex items-center gap-3">
                                <div className={`w-2.5 h-2.5 rounded-full ${selected === 'tech' ? 'bg-[#2563EB]' : 'bg-[#EC4899]'}`} />
                                <span className="font-headline font-black text-white text-sm uppercase tracking-widest">
                                    {selected === 'tech' ? 'Tech Partner Application' : 'Growth Partner Application'}
                                </span>
                            </div>
                        </div>

                        {/* Tally iframe */}
                        <iframe
                            src={selected === 'tech' ? 'https://tally.so/embed/A74gpl?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1' : 'https://tally.so/embed/dW6V0o?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1'}
                            title={selected === 'tech' ? 'Tech Partner Application' : 'Growth Partner Application'}
                            className="flex-1 w-full bg-transparent"
                            frameBorder="0"
                            marginHeight="0"
                            marginWidth="0"
                            style={{ background: 'transparent' }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ApplicationForm;
