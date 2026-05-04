import React, { useState, useEffect, useRef } from 'react';

/**
 * DYNAMIC CORE STRENGTH
 * This component automatically scans the assets/founders folder for images.
 * It also dynamically picks keywords based on the number of images found.
 */

// Vite-specific way to glob all matching images in a directory
const imagesGlob = import.meta.glob('../assets/founders/*.{jpg,JPG,jpeg,png,PNG}', { eager: true });

// Extract the URL paths from the imported modules
const allImages = Object.values(imagesGlob).map(mod => mod.default);

// High-impact keyword pool
const keywordPool = [
    "Discipline", "Consistency", "Hardwork", "Resilience", "Vision", "Ownership", "Hunger", "Execution",
    "Grit", "Impact", "Focus", "Momentum", "Dedication", "Precision"
];

const CoreStrength = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);

    // Build the dynamic keywords list based on images found
    const itemsPerKeyword = 2;
    const dynamicKeywords = [];
    
    for (let i = 0; i < allImages.length; i += itemsPerKeyword) {
        const keywordIdx = Math.floor(i / itemsPerKeyword);
        const word = keywordPool[keywordIdx % keywordPool.length];
        
        dynamicKeywords.push({
            text: word,
            left: allImages[i],
            right: allImages[i + 1] || allImages[0] 
        });
    }

    const displayItems = dynamicKeywords.length > 0 ? dynamicKeywords : [{ text: "Grit", left: null, right: null }];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % displayItems.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [displayItems.length]);

    return (
        <section 
            ref={containerRef} 
            className="relative py-20 bg-surface overflow-hidden" 
            id="founders"
        >
            <div className="w-full flex flex-col justify-center">
                <div 
                    className="absolute inset-0 opacity-15 blur-[120px]"
                    style={{ background: `radial-gradient(circle at 50% 50%, #4A749B 0%, transparent 60%)` }}
                ></div>

                <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
                    <div className="mb-12 text-center reveal active">
                        <h2 className="font-headline text-4xl md:text-5xl font-black mb-4">
                            <span className="font-accent">Core Strength</span> of <span className="text-tertiary">Entrext</span>
                        </h2>
                        <p className="text-on-surface-variant max-w-2xl mx-auto font-body opacity-70">
                            Builders connected by purpose, driven by execution.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 md:gap-16 relative">
                        {/* Left Card */}
                        <div className="relative h-[200px] md:h-[450px] overflow-hidden rounded-2xl border border-outline-variant/20 shadow-2xl bg-black/20 group">
                            {displayItems.map((item, index) => (
                                <img 
                                    key={index}
                                    src={item.left} 
                                    alt="Founder" 
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                                        activeIndex === index ? 'opacity-100' : 'opacity-0'
                                    }`}
                                />
                            ))}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <a href="#" className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-20 cursor-pointer pointer-events-auto" aria-label="LinkedIn Profile">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5 text-white/50 hover:text-[#0A66C2] transition-colors">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </a>
                        </div>

                        {/* Center Keywords */}
                        <div className="flex flex-wrap md:flex-col items-center justify-center gap-x-6 gap-y-2 md:space-y-4 py-6 md:py-8 overflow-hidden">
                            {displayItems.map((item, index) => (
                                <div 
                                    key={index} 
                                    className={`transition-all duration-500 transform text-center whitespace-nowrap ${
                                        activeIndex === index 
                                        ? 'text-tertiary scale-110 opacity-100' 
                                        : 'text-white/10 scale-95 opacity-20'
                                    }`}
                                >
                                    <span className="font-headline text-lg md:text-4xl font-black block">
                                        {item.text}
                                    </span>
                                    {activeIndex === index && (
                                        <div className="w-6 md:w-8 h-1 bg-tertiary mx-auto mt-1 md:mt-2 rounded-full animate-pulse"></div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Right Card */}
                        <div className="relative h-[200px] md:h-[450px] overflow-hidden rounded-2xl border border-outline-variant/20 shadow-2xl bg-black/20 group">
                            {displayItems.map((item, index) => (
                                <img 
                                    key={index}
                                    src={item.right} 
                                    alt="Founder" 
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                                        activeIndex === index ? 'opacity-100' : 'opacity-0'
                                    }`}
                                />
                            ))}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <a href="#" className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-20 cursor-pointer pointer-events-auto" aria-label="LinkedIn Profile">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5 text-white/50 hover:text-[#0A66C2] transition-colors">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CoreStrength;
