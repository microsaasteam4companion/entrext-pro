import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 bg-[#0e0e0e]/80 backdrop-blur-xl border-b border-outline-variant/10">
            <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto font-['Epilogue'] tracking-tight">
                <div className="text-xl font-bold tracking-tighter text-[#f9f9f9]">
                    Entrext Pro<span className="text-tertiary">.</span>
                </div>
                <div className="hidden md:flex items-center gap-10">
                    <a className="text-[#f9f9f9]/60 hover:text-[#4A749B] transition-colors duration-300" href="#process">The Way</a>
                    <a className="text-[#f9f9f9]/60 hover:text-[#4A749B] transition-colors duration-300" href="#products">Products</a>
                    <a className="text-[#f9f9f9]/60 hover:text-[#4A749B] transition-colors duration-300" href="#founders">Founders</a>
                    <a className="text-[#f9f9f9]/60 hover:text-[#4A749B] transition-colors duration-300" href="#faq">FAQ</a>
                </div>
                <div className="flex items-center gap-6">
                    <button className="bg-[#f9f9f9] text-[#5f5f5f] px-6 py-2.5 rounded-md font-label font-semibold text-sm scale-95 active:scale-90 transition-transform">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
