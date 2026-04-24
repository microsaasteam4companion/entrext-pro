import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-20 md:pt-24 pb-10 md:pb-12 px-6 md:px-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 mb-16 md:mb-20">
                    {/* Company Column */}
                    <div className="lg:col-span-4 text-center md:text-left">
                        <div className="text-2xl font-black font-headline mb-6 md:mb-8">
                            Entrext Pro<span className="text-tertiary">.</span>
                        </div>
                        <p className="text-on-surface-variant font-body text-base md:text-lg mb-6 md:mb-8 max-w-sm mx-auto md:mx-0">
                            Curating the human element in technology.<br/>
                            We build the systems that build the future.
                        </p>
                        <div className="flex justify-center md:justify-start gap-4">
                            {['share', 'alternate_email', 'language'].map((icon) => (
                                <a key={icon} className="w-10 h-10 rounded bg-surface-container flex items-center justify-center hover:bg-tertiary hover:text-on-tertiary transition-colors" href="#">
                                    <span className="material-symbols-outlined text-xl">{icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* Explore Column */}
                    <div className="lg:col-span-2 text-center md:text-left">
                        <h4 className="font-headline font-bold uppercase tracking-widest text-xs md:text-sm mb-6 md:mb-8">Explore</h4>
                        <ul className="space-y-3 md:space-y-4 text-on-surface-variant text-sm md:text-base">
                            <li><a className="hover:text-tertiary transition-colors" href="#process">The Way</a></li>
                            <li><a className="hover:text-tertiary transition-colors" href="#products">Products</a></li>
                            <li><a className="hover:text-tertiary transition-colors" href="#founders">Founders</a></li>
                            <li><a className="hover:text-tertiary transition-colors" href="#">Apply</a></li>
                        </ul>
                    </div>
                    {/* Legal Column */}
                    <div className="lg:col-span-2 text-center md:text-left">
                        <h4 className="font-headline font-bold uppercase tracking-widest text-xs md:text-sm mb-6 md:mb-8">Legal</h4>
                        <ul className="space-y-3 md:space-y-4 text-on-surface-variant text-sm md:text-base">
                            <li><a className="hover:text-tertiary transition-colors" href="#">Privacy Policy</a></li>
                            <li><a className="hover:text-tertiary transition-colors" href="#">Terms of Service</a></li>
                            <li><a className="hover:text-tertiary transition-colors" href="#">Equity Structure</a></li>
                            <li><a className="hover:text-tertiary transition-colors" href="#">Cookie Policy</a></li>
                        </ul>
                    </div>
                    {/* Stay in the loop Column */}
                    <div className="lg:col-span-4 text-center md:text-left">
                        <h4 className="font-headline font-bold uppercase tracking-widest text-xs md:text-sm mb-6 md:mb-8">Stay in the loop</h4>
                        <div className="bg-surface-container border border-white/10 rounded p-1 flex mb-4 max-w-md mx-auto md:mx-0">
                            <input className="bg-transparent border-none focus:ring-0 flex-grow px-4 text-sm font-body" placeholder="your@email.com" type="email"/>
                            <button className="bg-white text-black px-4 md:px-6 py-2 rounded text-xs md:text-sm font-bold hover:bg-tertiary transition-colors">
                                Join
                            </button>
                        </div>
                        <p className="text-[10px] uppercase tracking-tighter text-on-surface-variant/60 font-bold">
                            No spam. Only high-impact updates.
                        </p>
                    </div>
                </div>
                {/* Bottom Line */}
                <div className="pt-8 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] md:text-xs text-on-surface-variant font-medium text-center md:text-left">
                        © 2026 Entrext Pro. Built for human evolution.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/40">
                        <span>Latency: 2ms</span>
                        <span>Encrypted: AES-256</span>
                        <span>Nodes: Verified</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
