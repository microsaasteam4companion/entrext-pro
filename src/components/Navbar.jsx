import React, { useState } from 'react';

const Navbar = ({ onApply }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-[100] bg-[#0e0e0e]/80 backdrop-blur-xl border-b border-outline-variant/10">
            <div className="flex justify-between items-center px-6 md:px-8 py-5 md:py-6 max-w-7xl mx-auto font-headline tracking-tight">
                <div className="text-xl md:text-2xl font-bold tracking-tighter text-[#f9f9f9]">
                    Entrext Pro<span className="text-tertiary">.</span>
                </div>
                
                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-10">
                    <a className="text-[#f9f9f9]/60 hover:text-[#4A749B] transition-colors duration-300 text-sm font-medium uppercase tracking-widest" href="#process">The Way</a>
                    <a className="text-[#f9f9f9]/60 hover:text-[#4A749B] transition-colors duration-300 text-sm font-medium uppercase tracking-widest" href="#products">Products</a>
                    <a className="text-[#f9f9f9]/60 hover:text-[#4A749B] transition-colors duration-300 text-sm font-medium uppercase tracking-widest" href="#founders">Founders</a>
                    <a className="text-[#f9f9f9]/60 hover:text-[#4A749B] transition-colors duration-300 text-sm font-medium uppercase tracking-widest" href="#faq">FAQ</a>
                </div>

                <div className="flex items-center gap-4 md:gap-6">
                    <button 
                        onClick={onApply}
                        className="bg-[#f9f9f9] text-[#0e0e0e] px-5 md:px-6 py-2 md:py-2.5 rounded-md font-label font-bold text-xs md:text-sm scale-95 active:scale-90 transition-all hover:bg-tertiary hover:text-white"
                    >
                        Get Started
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button 
                        className="md:hidden text-white p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className="material-symbols-outlined text-2xl">
                            {isMenuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 top-[70px] bg-black/95 backdrop-blur-2xl z-[90] md:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col items-center justify-center h-full gap-8 p-8">
                    <a 
                        className="text-2xl font-headline font-bold text-white/80 hover:text-tertiary transition-colors" 
                        href="#process"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        The Way
                    </a>
                    <a 
                        className="text-2xl font-headline font-bold text-white/80 hover:text-tertiary transition-colors" 
                        href="#products"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Products
                    </a>
                    <a 
                        className="text-2xl font-headline font-bold text-white/80 hover:text-tertiary transition-colors" 
                        href="#founders"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Founders
                    </a>
                    <a 
                        className="text-2xl font-headline font-bold text-white/80 hover:text-tertiary transition-colors" 
                        href="#faq"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        FAQ
                    </a>
                    <div className="w-12 h-0.5 bg-tertiary/30"></div>
                    <p className="text-on-surface-variant text-center text-sm italic opacity-50">
                        "Curating the human element <br/> in technology."
                    </p>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
