import React, { useState } from 'react';

const ApplicationForm = ({ isOpen, onClose }) => {
    const [selected, setSelected] = useState(null); // null | 'tech' | 'growth'

    if (!isOpen) return null;

    const handleClose = () => {
        setSelected(null);
        onClose();
    };

    const tallyUrls = {
        tech: 'https://tally.so/r/A74gpl',
        growth: 'https://tally.so/r/dW6V0o',
    };

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
                onClick={handleClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-2xl bg-[#0e0e0e] border border-white/10 rounded-3xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.8)] animate-in fade-in zoom-in-95 duration-300">
                {/* Top glow */}
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-40 bg-[#4A749B]/20 blur-[80px] rounded-full pointer-events-none" />

                {/* Close button */}
                <button
                    onClick={handleClose}
                    className="absolute top-5 right-5 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/15 text-white/60 hover:text-white transition-all"
                >
                    <span className="material-symbols-outlined text-xl">close</span>
                </button>

                {!selected ? (
                    /* ── Step 1: Pick a role ── */
                    <div className="p-8 md:p-12 relative z-10">
                        <div className="text-center mb-10">
                            <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-[0.35em] text-[#4A749B]">
                                Apply to Entrext
                            </div>
                            <h2 className="font-headline text-3xl md:text-4xl font-black text-white mb-3">
                                Choose Your <span className="text-[#4A749B] font-accent italic">Path</span>
                            </h2>
                            <p className="text-white/50 text-sm md:text-base max-w-md mx-auto leading-relaxed">
                                Select the role that best describes how you want to build with Entrext.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Tech Partner Card */}
                            <button
                                onClick={() => setSelected('tech')}
                                className="group relative flex flex-col items-start text-left p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#4A749B]/60 hover:bg-white/[0.06] transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,116,155,0.15)]"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#4A749B]/15 border border-[#4A749B]/30 flex items-center justify-center mb-5 group-hover:bg-[#4A749B]/25 transition-colors">
                                    <span className="material-symbols-outlined text-[#4A749B] text-2xl">code</span>
                                </div>
                                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#4A749B] mb-2">Builder</div>
                                <h3 className="font-headline text-xl font-black text-white mb-3">Tech Partner</h3>
                                <p className="text-white/50 text-sm leading-relaxed">
                                    Engineers, designers & product builders who want to co-found and ship fast.
                                </p>
                                <div className="mt-5 flex items-center gap-2 text-[#4A749B] text-xs font-bold uppercase tracking-wider">
                                    Apply <span className="material-symbols-outlined text-base">arrow_forward</span>
                                </div>
                            </button>

                            {/* Growth Partner Card */}
                            <button
                                onClick={() => setSelected('growth')}
                                className="group relative flex flex-col items-start text-left p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#EC4899]/60 hover:bg-white/[0.06] transition-all duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.12)]"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#EC4899]/10 border border-[#EC4899]/20 flex items-center justify-center mb-5 group-hover:bg-[#EC4899]/20 transition-colors">
                                    <span className="material-symbols-outlined text-[#EC4899] text-2xl">trending_up</span>
                                </div>
                                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#EC4899] mb-2">Scaler</div>
                                <h3 className="font-headline text-xl font-black text-white mb-3">Growth Partner</h3>
                                <p className="text-white/50 text-sm leading-relaxed">
                                    Marketers, sales & growth hackers who want to scale ventures from zero.
                                </p>
                                <div className="mt-5 flex items-center gap-2 text-[#EC4899] text-xs font-bold uppercase tracking-wider">
                                    Apply <span className="material-symbols-outlined text-base">arrow_forward</span>
                                </div>
                            </button>
                        </div>
                    </div>
                ) : (
                    /* ── Step 2: Embedded Tally Form ── */
                    <div className="flex flex-col" style={{ height: '85vh', maxHeight: '700px' }}>
                        {/* Header bar */}
                        <div className="flex items-center gap-3 px-6 py-4 border-b border-white/10 flex-shrink-0">
                            <button
                                onClick={() => setSelected(null)}
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/15 text-white/60 hover:text-white transition-all"
                            >
                                <span className="material-symbols-outlined text-lg">arrow_back</span>
                            </button>
                            <div>
                                <div className="text-[10px] uppercase tracking-[0.3em] font-black text-white/40">Application</div>
                                <div className="text-sm font-bold text-white">
                                    {selected === 'tech' ? '⚙️ Tech Partner' : '📈 Growth Partner'}
                                </div>
                            </div>
                        </div>

                        {/* Tally iframe */}
                        <iframe
                            src={tallyUrls[selected]}
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            marginHeight="0"
                            marginWidth="0"
                            title={selected === 'tech' ? 'Tech Partner Application' : 'Growth Partner Application'}
                            className="flex-1 bg-transparent"
                            style={{ border: 'none' }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ApplicationForm;
