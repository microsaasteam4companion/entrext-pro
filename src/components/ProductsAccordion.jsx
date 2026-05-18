import React from 'react';

const products = [
    {
        name: "FRIENDSIN",
        founder: "Aryan Sagavekar",
        role: "Founder",
        description: "FriendsIn is a high-octane social catalyst that reimagines human interaction through gamified experiences. It's designed to break the digital ice, transforming awkward silences into authentic connections using a high-stakes 'Truth or Dare' engine that adapts to the group's energy.",
        features: ["Gamified Icebreakers", "Dynamic Social Engine", "Authentic Connectivity"],
        linkedin: "https://linkedin.com/in/#",
        date: "Updated May 2025",
        bgColor: "bg-[#2563EB]", 
        textColor: "text-white",
        badgeColor: "bg-white/10 border border-white/10 text-white",
        accentColor: "text-[#0A0054]",
        accentHex: "#0A0054"
    },
    {
        name: "NOA",
        founder: "Taha Sadikot",
        role: "Founder",
        description: "NOA is the ultimate sanctuary for AI-driven creativity. It functions as a high-performance prompt repository where visionary creators can store, curate, and optimize their complex AI workflows. It's the bridge between raw imagination and executed digital excellence.",
        features: ["Prompt Version Control", "Collaborative Repositories", "AI Workflow Optimization"],
        linkedin: "https://linkedin.com/in/#",
        date: "Launched Aug 2025",
        bgColor: "bg-[#059669]", 
        textColor: "text-white",
        badgeColor: "bg-white/10 border border-white/10 text-white",
        accentColor: "text-[#022C22]",
        accentHex: "#022C22"
    },
    {
        name: "COMPANION",
        founder: "Komal Siddharth",
        role: "Founder",
        description: "Companion is an oasis of anonymity in a world of digital overexposure. It provides a safe, identity-free space for deep human connection, allowing users to share thoughts and find empathy without the burden of social expectations or digital footprints.",
        features: ["Total Anonymity", "Empathy-First Matching", "Zero-Trace Conversations"],
        linkedin: "https://linkedin.com/in/#",
        date: "Updated Jan 2026",
        bgColor: "bg-[#EC4899]", 
        textColor: "text-white",
        badgeColor: "bg-white/10 border border-white/10 text-white",
        accentColor: "text-[#0A0944]",
        accentHex: "#0A0944"
    },
    {
        name: "KNOWX",
        founder: "Manthan Gupta",
        role: "Founder",
        description: "KnowX is the premier matchmaking engine for the next generation of unicorns. By utilizing proprietary compatibility algorithms, it connects visionary founders with the specific technical or operational talent they need to turn a disruptive idea into a global empire.",
        features: ["Co-founder Matchmaking", "Skill-Gap Analysis", "Visionary Alignment"],
        linkedin: "https://linkedin.com/in/#",
        date: "Released Mar 2025",
        bgColor: "bg-[#F97316]", 
        textColor: "text-white",
        badgeColor: "bg-white/10 border border-white/10 text-white",
        accentColor: "text-[#5C1A00]",
        accentHex: "#5C1A00"
    },
    {
        name: "HERTH",
        founder: "Garv Thakral",
        role: "Founder",
        description: "Herth is a revolutionary commerce ecosystem built specifically for women. It combines the operational scale of global marketplaces with a curated, empowerment-focused approach, ensuring that every transaction supports female-led businesses and women-centric products.",
        features: ["Curated Female Marketplace", "Empowerment-First Commerce", "Global Scaling for Women"],
        linkedin: "https://linkedin.com/in/#",
        date: "Launched Nov 2025",
        bgColor: "bg-[#818CF8]", 
        textColor: "text-white",
        badgeColor: "bg-white/10 border border-white/10 text-white",
        accentColor: "text-[#1E1B4B]",
        accentHex: "#1E1B4B"
    },
    {
        isCTA: true,
        name: "JOIN US",
        founder: "+",
        role: "Your Venture",
        description: "Do you have a vision that can redefine industries? We are looking for the next wave of high-growth founders to join our elite ecosystem. Apply now to leverage our infrastructure, mentorship, and capital.",
        linkedin: null,
        date: "Next Big Thing",
        bgColor: "bg-zinc-950 border border-white/10", 
        textColor: "text-white",
        badgeColor: "bg-white/5 border border-white/10 text-white/80",
        accentColor: "text-white/30",
        accentHex: "#FFFFFF"
    }
];

const renderProductArt = (name) => {
    switch (name.toUpperCase()) {
        case 'FRIENDSIN':
            return (
                <svg viewBox="0 0 400 400" className="w-full h-full rounded-3xl shadow-2xl object-cover bg-[#2563EB]">
                    {/* Row 0 */}
                    <g transform="translate(0, 0)">
                        <rect width="100" height="100" fill="#2563EB" />
                        <circle cx="25" cy="25" r="10" fill="#0A0054" />
                        <circle cx="75" cy="25" r="10" fill="#0A0054" />
                        <circle cx="25" cy="75" r="10" fill="#0A0054" />
                        <circle cx="75" cy="75" r="10" fill="#0A0054" />
                    </g>
                    <rect x="100" y="0" width="100" height="100" fill="#0A0054" />
                    <path d="M 200 100 A 100 100 0 0 1 300 0 L 200 0 Z" fill="#A5B4FC" />
                    <g transform="translate(300, 0)">
                        <rect width="100" height="100" fill="#2563EB" />
                        <path d="M 0 100 A 100 100 0 0 1 100 0 L 100 100 Z" fill="#FFFFFF" />
                        <circle cx="70" cy="70" r="12" fill="#2563EB" />
                    </g>
                    {/* Row 1 */}
                    <g transform="translate(0, 100)">
                        <rect width="100" height="100" fill="#2563EB" />
                        <circle cx="50" cy="50" r="25" fill="#0A0054" />
                        <circle cx="50" cy="50" r="10" fill="#A5B4FC" />
                    </g>
                    <path d="M 100 200 A 50 50 0 0 1 200 200 Z" fill="#0A0054" />
                    <polygon points="200,200 300,200 200,100" fill="#FFFFFF" />
                    <path d="M 300 100 A 50 50 0 0 1 400 200 Z" fill="#A5B4FC" />
                    {/* Row 2 */}
                    <g transform="translate(0, 200)">
                        <polygon points="0,0 50,50 0,50" fill="#FFFFFF" />
                        <polygon points="50,50 100,100 50,100" fill="#FFFFFF" />
                        <polygon points="100,0 50,50 100,50" fill="#A5B4FC" />
                        <polygon points="50,50 0,100 0,50" fill="#A5B4FC" />
                    </g>
                    <g transform="translate(100, 200)">
                        <rect width="100" height="100" fill="#A5B4FC" />
                        <circle cx="50" cy="50" r="30" fill="#FFFFFF" />
                        <circle cx="50" cy="50" r="15" fill="#A5B4FC" />
                    </g>
                    <polygon points="200,300 300,200 300,300" fill="#0A0054" />
                    <path d="M 300 200 A 100 100 0 0 1 400 300 L 300 300 Z" fill="#FFFFFF" />
                    {/* Row 3 */}
                    <g transform="translate(0, 300)">
                        <rect width="100" height="100" fill="#0A0054" />
                        <circle cx="50" cy="50" r="20" fill="#2563EB" />
                    </g>
                    <rect x="100" y="300" width="100" height="100" fill="#FFFFFF" />
                    <g transform="translate(200, 300)">
                        <polygon points="0,50 50,0 50,100" fill="#0A0054" />
                        <polygon points="50,50 100,0 100,100" fill="#0A0054" />
                    </g>
                    <g transform="translate(300, 300)">
                        <circle cx="25" cy="25" r="10" fill="#0A0054" />
                        <circle cx="75" cy="25" r="10" fill="#0A0054" />
                        <circle cx="25" cy="50" r="10" fill="#0A0054" />
                        <circle cx="75" cy="50" r="10" fill="#0A0054" />
                        <circle cx="25" cy="75" r="10" fill="#0A0054" />
                        <circle cx="75" cy="75" r="10" fill="#0A0054" />
                    </g>
                </svg>
            );
        case 'NOA':
            return (
                <svg viewBox="0 0 400 400" className="w-full h-full rounded-3xl shadow-2xl object-cover bg-[#059669]">
                    {/* Row 0 */}
                    <path d="M 0 0 A 100 100 0 0 1 100 100 L 0 100 Z" fill="#0A0054" />
                    <path d="M 100 100 A 100 100 0 0 1 200 0 L 100 0 Z" fill="#FFFFFF" />
                    <path d="M 200 0 A 100 100 0 0 1 300 100 L 200 100 Z" fill="#0A0054" />
                    <path d="M 300 0 A 100 100 0 0 1 400 100 L 300 100 Z" fill="#0A0054" />
                    {/* Row 1 */}
                    <path d="M 0 200 A 50 50 0 0 1 100 200 Z" fill="#FFFFFF" />
                    <circle cx="150" cy="150" r="50" fill="#0A0054" />
                    <rect x="200" y="100" width="100" height="100" fill="#FFFFFF" />
                    <path d="M 300 100 A 50 50 0 0 1 300 200 Z" fill="#FFFFFF" />
                    {/* Row 2 */}
                    <path d="M 0 200 A 50 50 0 0 1 100 200 Z" fill="#FFFFFF" />
                    <circle cx="200" cy="300" r="100" fill="#0A0054" />
                    <path d="M 300 200 A 50 50 0 0 1 400 200 Z" fill="#FFFFFF" />
                    {/* Row 3 */}
                    <path d="M 0 400 A 100 100 0 0 1 100 300 L 0 300 Z" fill="#FFFFFF" />
                    <path d="M 100 300 A 100 100 0 0 1 200 400 L 100 400 Z" fill="#FFFFFF" />
                    <path d="M 200 400 A 100 100 0 0 1 300 300 L 200 300 Z" fill="#FFFFFF" />
                    <path d="M 300 300 A 100 100 0 0 1 400 400 L 300 400 Z" fill="#FFFFFF" />
                </svg>
            );
        case 'COMPANION':
            return (
                <svg viewBox="0 0 400 400" className="w-full h-full rounded-3xl shadow-2xl object-cover bg-[#0A0944]">
                    {Array.from({ length: 5 }).map((_, row) => 
                        Array.from({ length: 5 }).map((_, col) => {
                            const x = col * 80 + 40;
                            const y = row * 80 + 40;
                            const shapeType = (row + col) % 4;
                            let color = '#EC4899';
                            if ((row + col) % 3 === 0) color = '#D946EF';
                            else if ((row + col) % 3 === 1) color = '#F472B6';
                            else color = '#818CF8';

                            if (shapeType === 0) {
                                return (
                                    <path key={`${row}-${col}`} d={`M ${x-20} ${y+20} A 30 30 0 0 1 ${x+20} ${y-20} A 30 30 0 0 1 ${x-20} ${y+20}`} fill={color} />
                                );
                            } else if (shapeType === 1) {
                                return (
                                    <g key={`${row}-${col}`}>
                                        <path d={`M ${x-25} ${y} A 15 15 0 0 1 ${x} ${y-25} A 15 15 0 0 1 ${x-25} ${y}`} fill={color} opacity="0.8" />
                                        <path d={`M ${x} ${y+25} A 15 15 0 0 1 ${x+25} ${y} A 15 15 0 0 1 ${x} ${y+25}`} fill={color} />
                                    </g>
                                );
                            } else if (shapeType === 2) {
                                return (
                                    <path key={`${row}-${col}`} d={`M ${x-25} ${y-25} A 25 25 0 0 1 ${x+25} ${y-25} L ${x+25} ${y+25} Z`} fill={color} />
                                );
                            } else {
                                return (
                                    <g key={`${row}-${col}`}>
                                        <circle cx={x} cy={y} r="25" fill={color} />
                                        <circle cx={x} cy={y} r="12" fill="#0A0944" />
                                    </g>
                                );
                            }
                        })
                    )}
                </svg>
            );
        case 'KNOWX':
            return (
                <svg viewBox="0 0 400 400" className="w-full h-full rounded-3xl shadow-2xl object-cover bg-[#EA580C]">
                    <rect width="400" height="400" fill="#EA580C" />
                    <path d="M 50 350 C 50 150, 150 50, 350 50 L 350 350 Z" fill="#FFE4E6" />
                    <path d="M 90 350 C 90 190, 190 90, 350 90 L 350 350 Z" fill="#EA580C" />
                    <path d="M 130 350 C 130 230, 230 130, 350 130 L 350 350 Z" fill="#FBBF24" />
                    <path d="M 170 350 C 170 270, 270 170, 350 170 L 350 350 Z" fill="#EA580C" />
                    <path d="M 210 350 C 210 310, 310 210, 350 210 L 350 350 Z" fill="#FEF08A" />
                    <circle cx="300" cy="300" r="40" fill="#FFE4E6" />
                    <circle cx="300" cy="300" r="20" fill="#EA580C" />
                </svg>
            );
        case 'HERTH':
            return (
                <svg viewBox="0 0 400 400" className="w-full h-full rounded-3xl shadow-2xl object-cover bg-[#818CF8]">
                    {/* Row 0 */}
                    <g transform="translate(0, 0)">
                        <polygon points="10,50 50,10 50,90" fill="#1E1B4B" />
                        <polygon points="50,50 90,10 90,90" fill="#1E1B4B" />
                    </g>
                    <g transform="translate(100, 0)">
                        <rect width="100" height="100" fill="#818CF8" />
                        <line x1="50" y1="10" x2="50" y2="90" stroke="#1E1B4B" strokeWidth="12" strokeLinecap="round" />
                        <line x1="10" y1="50" x2="90" y2="50" stroke="#1E1B4B" strokeWidth="12" strokeLinecap="round" />
                        <line x1="20" y1="20" x2="80" y2="80" stroke="#1E1B4B" strokeWidth="12" strokeLinecap="round" />
                        <line x1="80" y1="20" x2="20" y2="80" stroke="#1E1B4B" strokeWidth="12" strokeLinecap="round" />
                    </g>
                    <g transform="translate(200, 0)">
                        <path d="M 10 50 Q 50 10 90 50 Q 50 90 10 50 Z" fill="#1E1B4B" />
                        <circle cx="50" cy="50" r="15" fill="#818CF8" />
                    </g>
                    <g transform="translate(300, 0)">
                        <line x1="50" y1="10" x2="50" y2="90" stroke="#1E1B4B" strokeWidth="10" strokeLinecap="round" />
                        <line x1="10" y1="50" x2="90" y2="50" stroke="#1E1B4B" strokeWidth="10" strokeLinecap="round" />
                        <line x1="20" y1="20" x2="80" y2="80" stroke="#1E1B4B" strokeWidth="10" strokeLinecap="round" />
                        <line x1="80" y1="20" x2="20" y2="80" stroke="#1E1B4B" strokeWidth="10" strokeLinecap="round" />
                    </g>
                    {/* Row 1 */}
                    <g transform="translate(0, 100)">
                        <path d="M 0 50 A 50 50 0 0 1 100 50 Z" fill="#C7D2FE" />
                        <path d="M 0 100 A 50 50 0 0 1 100 100 Z" fill="#1E1B4B" />
                    </g>
                    <path d="M 100 200 A 50 50 0 0 1 200 200 Z" fill="#C7D2FE" />
                    <g transform="translate(200, 100)">
                        <path d="M 10 50 Q 50 10 90 50 Q 50 90 10 50 Z" fill="#C7D2FE" />
                        <circle cx="50" cy="50" r="18" fill="#1E1B4B" />
                    </g>
                    <circle cx="350" cy="150" r="35" fill="#1E1B4B" />
                    {/* Row 2 */}
                    <path d="M 0 200 A 50 50 0 0 0 100 200 Z" fill="#C7D2FE" />
                    <path d="M 120 220 L 180 220 L 180 280 L 150 280 L 150 250 L 120 250 Z" fill="#C7D2FE" />
                    <path d="M 200 300 A 100 100 0 0 1 300 200 L 200 200 Z" fill="#1E1B4B" />
                    <g transform="translate(300, 200)">
                        <polygon points="0,50 50,0 50,100" fill="#C7D2FE" />
                        <polygon points="50,50 100,0 100,100" fill="#C7D2FE" />
                    </g>
                    {/* Row 3 */}
                    <g transform="translate(0, 300)">
                        <circle cx="30" cy="50" r="20" fill="#C7D2FE" />
                        <circle cx="75" cy="50" r="15" fill="#C7D2FE" />
                    </g>
                    <g transform="translate(100, 300)">
                        <line x1="50" y1="20" x2="50" y2="80" stroke="#C7D2FE" strokeWidth="12" strokeLinecap="round" />
                        <line x1="20" y1="50" x2="80" y2="50" stroke="#C7D2FE" strokeWidth="12" strokeLinecap="round" />
                        <line x1="28" y1="28" x2="72" y2="72" stroke="#C7D2FE" strokeWidth="12" strokeLinecap="round" />
                        <line x1="72" y1="28" x2="28" y2="72" stroke="#C7D2FE" strokeWidth="12" strokeLinecap="round" />
                    </g>
                    <g transform="translate(200, 300)">
                        <rect x="10" y="20" width="80" height="12" rx="6" fill="#1E1B4B" />
                        <rect x="10" y="44" width="80" height="12" rx="6" fill="#1E1B4B" />
                        <rect x="10" y="68" width="80" height="12" rx="6" fill="#1E1B4B" />
                    </g>
                    <g transform="translate(300, 300)">
                        <rect x="10" y="20" width="80" height="12" rx="6" fill="#C7D2FE" />
                        <rect x="10" y="44" width="80" height="12" rx="6" fill="#C7D2FE" />
                        <rect x="10" y="68" width="80" height="12" rx="6" fill="#C7D2FE" />
                    </g>
                </svg>
            );
        case 'JOIN US':
            return (
                <svg viewBox="0 0 400 400" className="w-full h-full rounded-3xl shadow-2xl object-cover bg-black border border-white/10">
                    <rect width="400" height="400" fill="black" />
                    <circle cx="200" cy="200" r="160" fill="none" stroke="#4A749B" strokeWidth="2" strokeDasharray="10 10" opacity="0.3" />
                    <circle cx="200" cy="200" r="120" fill="none" stroke="#4A749B" strokeWidth="4" strokeDasharray="5 5" opacity="0.5" />
                    <circle cx="200" cy="200" r="80" fill="none" stroke="#93C5FD" strokeWidth="1" strokeDasharray="20 5" />
                    <path d="M 200 120 L 200 280 M 120 200 L 280 200" stroke="white" strokeWidth="16" strokeLinecap="round" />
                    <circle cx="200" cy="200" r="30" fill="black" stroke="white" strokeWidth="6" />
                    <path d="M 200 185 L 200 215 M 185 200 L 215 200" stroke="#4A749B" strokeWidth="6" strokeLinecap="round" />
                </svg>
            );
        default:
            return null;
    }
};

const ProductsAccordion = () => {
    return (
        <section className="py-32 px-6 md:px-12 bg-black overflow-hidden" id="products">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center text-center mb-24 reveal active">
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-[0.4em] text-tertiary/80">
                        Ecosystem
                    </div>
                    <h2 className="font-headline text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter">
                        Core <span className="font-accent text-tertiary">Products</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-3xl leading-relaxed font-light">
                        A curated portfolio of high-performance ventures designed to redefine market boundaries.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 reveal active">
                    {products.map((product, index) => (
                        <div 
                            key={index} 
                            className={`group relative flex flex-col justify-between rounded-[3rem] overflow-hidden h-[740px] transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_30px_70px_rgba(0,0,0,0.45)] ${product.bgColor} ${product.textColor}`}
                        >
                            {/* Aesthetic Grid Background */}
                            <div className="absolute inset-0 opacity-[0.06] pointer-events-none" 
                                style={{ 
                                    backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`, 
                                    backgroundSize: '30px 30px' 
                                }}>
                            </div>

                            {/* Card Content Top */}
                            <div className="p-10 pb-0 flex flex-col relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-2 mb-1.5 opacity-60">
                                            <div className="w-4 h-[1px] bg-current"></div>
                                            <div className="text-[9px] font-mono font-black uppercase tracking-[0.3em]">{product.role}</div>
                                        </div>
                                        <h3 className="text-3xl md:text-5xl font-mono font-bold tracking-tight uppercase leading-none border-b-2 border-white pb-1 inline-block">
                                            {product.name}
                                        </h3>
                                    </div>
                                    {product.linkedin && (
                                        <a 
                                            href={product.linkedin} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="p-1.5 rounded-md bg-white transition-all duration-300 hover:scale-110 flex items-center justify-center w-7 h-7 shadow-sm"
                                            style={{ color: product.accentHex }}
                                        >
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                            </svg>
                                        </a>
                                    )}
                                </div>

                                <p className="font-mono text-xs leading-relaxed tracking-tight text-white/90 mb-4 line-clamp-4">
                                    {product.description}
                                </p>

                                {product.features && (
                                    <div className="flex flex-wrap gap-1 mb-4">
                                        {product.features.map((feature, fIdx) => (
                                            <span key={fIdx} className={`text-[8px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${product.badgeColor}`}>
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Card Visual Middle */}
                            <div className="relative w-full h-[200px] overflow-hidden flex-shrink-0 flex items-center justify-center px-24 relative z-10 mb-4">
                                <div className="w-full h-full rounded-[1.5rem] overflow-hidden shadow-2xl relative transition-all duration-700 group-hover:scale-[1.03] group-hover:rotate-1">
                                    {renderProductArt(product.name)}
                                </div>
                            </div>

                            {/* Join Us CTA Action */}
                            {product.isCTA && (
                                <div className="absolute inset-x-0 bottom-[140px] flex items-center justify-center z-20">
                                    <button className="relative group/btn bg-white text-black px-10 py-4 rounded-xl font-mono font-bold uppercase tracking-[0.15em] text-xs shadow-lg transition-all hover:scale-105 active:scale-95 overflow-hidden">
                                        <span className="relative z-10 animate-pulse">Initialize Partnership →</span>
                                        <div className="absolute inset-0 bg-blue-100 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                                    </button>
                                </div>
                            )}

                            {/* Footer details: Visionary & Date */}
                            <div className="p-10 pt-6 mt-auto border-t border-white/10 flex justify-between items-end relative z-10">
                                <div className="flex flex-col gap-1">
                                    <div className="text-[10px] md:text-xs font-mono font-black uppercase tracking-[0.25em] text-white/50">Visionary</div>
                                    <div className={`leading-none text-4xl md:text-5xl font-accent italic font-bold ${product.accentColor}`}>
                                        {product.founder}
                                    </div>
                                </div>
                                <div className="text-[10px] md:text-xs font-mono opacity-50 uppercase tracking-[0.15em]">
                                    {product.date}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsAccordion;

