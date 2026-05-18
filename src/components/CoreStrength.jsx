import React, { useState, useEffect, useRef } from 'react';

/**
 * DYNAMIC CORE STRENGTH
 * This component automatically scans the assets/founders folder for images.
 * It also dynamically picks keywords based on the number of images found.
 */

// Vite-specific way to glob all matching images in a directory
const imagesGlob = import.meta.glob('../assets/founders/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP}', { eager: true });

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
    // To satisfy specific pairings (e.g., Komal with Taha), you can manually reorder allImages
    // or use the mapping below once you identify which image is who.
    const itemsPerKeyword = 2;
    const dynamicKeywords = [];
    
    // FOR USER: If you want to manually pair images, you can reorder allImages array here:
    // const sortedImages = [imgForKomal, imgForTaha, imgForManthan, imgForGarv, ...];
    const sortedImages = [...allImages]; 

    for (let i = 0; i < sortedImages.length; i += itemsPerKeyword) {
        const keywordIdx = Math.floor(i / itemsPerKeyword);
        const word = keywordPool[keywordIdx % keywordPool.length];
        
        dynamicKeywords.push({
            text: word,
            left: sortedImages[i],
            right: sortedImages[i + 1] || sortedImages[0] 
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

                <div className="max-w-[1920px] mx-auto px-4 md:px-12 w-full relative z-10">
                    <div className="mb-16 text-center reveal active">
                        <h2 className="font-headline text-5xl md:text-7xl font-black mb-6">
                            <span className="font-accent">Core Strength</span> of <span className="text-tertiary">Entrext</span>
                        </h2>
                        <p className="text-on-surface-variant max-w-3xl mx-auto font-body text-lg opacity-80">
                            Builders connected by purpose, driven by execution.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1.5fr] items-center gap-4 md:gap-12 relative">
                        {/* Left Card */}
                        <div className="relative h-[400px] md:h-[750px] overflow-hidden rounded-3xl border border-outline-variant/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-black/40 group">
                            {displayItems.map((item, index) => (
                                <img 
                                    key={index}
                                    src={item.left} 
                                    alt="Founder" 
                                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out scale-100 group-hover:scale-105 transition-transform duration-[2000ms] ${
                                        activeIndex === index ? 'opacity-100' : 'opacity-0'
                                    }`}
                                />
                            ))}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                            <a href="#" className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-20 cursor-pointer pointer-events-auto" aria-label="LinkedIn Profile">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8 text-white/40 hover:text-[#0A66C2] transition-all hover:scale-110">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </a>
                        </div>

                        {/* Center Keywords */}
                        <div className="flex flex-wrap md:flex-col items-center justify-center gap-x-6 gap-y-4 md:space-y-4 py-10 md:py-12 overflow-hidden z-20">
                            {displayItems.map((item, index) => (
                                <div 
                                    key={index} 
                                    className={`transition-all duration-700 transform text-center whitespace-nowrap ${
                                        activeIndex === index 
                                        ? 'text-tertiary scale-110 opacity-100' 
                                        : 'text-white scale-90 opacity-10'
                                    }`}
                                >
                                    <span className="font-headline text-lg md:text-3xl font-black block tracking-tight uppercase">
                                        {item.text}
                                    </span>
                                    {activeIndex === index && (
                                        <div className="w-8 md:w-12 h-1 bg-tertiary mx-auto mt-2 md:mt-3 rounded-full animate-pulse shadow-[0_0_15px_rgba(var(--tertiary-rgb),0.5)]"></div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Right Card */}
                        <div className="relative h-[400px] md:h-[750px] overflow-hidden rounded-3xl border border-outline-variant/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-black/40 group">
                            {displayItems.map((item, index) => (
                                <img 
                                    key={index}
                                    src={item.right} 
                                    alt="Founder" 
                                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out scale-100 group-hover:scale-105 transition-transform duration-[2000ms] ${
                                        activeIndex === index ? 'opacity-100' : 'opacity-0'
                                    }`}
                                />
                            ))}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                            <a href="#" className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-20 cursor-pointer pointer-events-auto" aria-label="LinkedIn Profile">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8 text-white/40 hover:text-[#0A66C2] transition-all hover:scale-110">
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
