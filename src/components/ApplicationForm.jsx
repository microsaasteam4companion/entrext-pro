import React, { useState } from 'react';

const ApplicationForm = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 modal-overlay" 
                onClick={onClose}
            ></div>
            
            {/* Modal */}
            <div className="relative w-full max-w-xl modal-content rounded-2xl md:rounded-3xl p-6 md:p-12 animate-reveal-up overflow-y-auto overflow-x-hidden max-h-[90vh]">
                {/* Background Glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-tertiary/20 blur-[80px] rounded-full"></div>
                
                <button 
                    onClick={onClose}
                    className="absolute top-6 right-6 text-on-surface/50 hover:text-white transition-colors"
                >
                    <span className="material-symbols-outlined">close</span>
                </button>

                <div className="relative z-10">
                    <h2 className="font-headline text-3xl md:text-4xl font-black mb-2 text-white">Apply to Build</h2>
                    <p className="text-on-surface-variant font-medium mb-8">Join the elite few building the next decade.</p>
                    
                    <form className="space-y-4 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <div className="space-y-1 md:space-y-2">
                                <label className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-tertiary">Full Name</label>
                                <input type="text" placeholder="Your Name" className="w-full bg-surface-container border border-outline-variant/20 rounded-xl px-4 py-3 outline-none focus:border-tertiary transition-colors text-white placeholder:text-white/20 text-sm md:text-base" />
                            </div>
                            <div className="space-y-1 md:space-y-2">
                                <label className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-tertiary">Email Address</label>
                                <input type="email" placeholder="you@domain.com" className="w-full bg-surface-container border border-outline-variant/20 rounded-xl px-4 py-3 outline-none focus:border-tertiary transition-colors text-white placeholder:text-white/20 text-sm md:text-base" />
                            </div>
                        </div>
                        
                        <div className="space-y-1 md:space-y-2">
                            <label className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-tertiary">LinkedIn / Portfolio</label>
                            <input type="text" placeholder="https://..." className="w-full bg-surface-container border border-outline-variant/20 rounded-xl px-4 py-3 outline-none focus:border-tertiary transition-colors text-white placeholder:text-white/20 text-sm md:text-base" />
                        </div>

                        <div className="space-y-1 md:space-y-2">
                            <label className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-tertiary">Why are you the top 1%?</label>
                            <textarea rows="3" placeholder="Tell us about your grit & vision..." className="w-full bg-surface-container border border-outline-variant/20 rounded-xl px-4 py-3 outline-none focus:border-tertiary transition-colors text-white placeholder:text-white/20 resize-none text-sm md:text-base"></textarea>
                        </div>

                        <button className="w-full bg-tertiary text-on-tertiary py-3.5 md:py-4 rounded-xl font-headline font-black uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-lg hover:shadow-tertiary/20 text-sm md:text-base">
                            Submit Application
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ApplicationForm;
