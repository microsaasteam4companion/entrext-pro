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
        const handleScroll = () => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const sectionHeight = containerRef.current.offsetHeight;
            const scrollDistance = -rect.top;
            
            const totalScrollable = sectionHeight - window.innerHeight;
            
            if (scrollDistance >= 0 && scrollDistance <= totalScrollable) {
                const progress = scrollDistance / totalScrollable;
                const newIndex = Math.min(
                    Math.floor(progress * displayItems.length),
                    displayItems.length - 1
                );
                if (newIndex >= 0 && newIndex !== activeIndex) {
                    setActiveIndex(newIndex);
                }
            } else if (scrollDistance < 0) {
                setActiveIndex(0);
            } else if (scrollDistance > totalScrollable) {
                setActiveIndex(displayItems.length - 1);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeIndex, displayItems.length]);

    return (
        <section 
            ref={containerRef} 
            className="relative" 
            style={{ height: `${Math.max(displayItems.length, 4) * 70}vh` }} 
            id="founders"
        >
            <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden bg-surface">
                <div 
                    className="absolute inset-0 opacity-15 blur-[120px] transition-all duration-1000"
                    style={{ background: `radial-gradient(circle at 50% 50%, #4A749B 0%, transparent 60%)` }}
                ></div>

                <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
                    <div className="mb-12 text-center reveal active">
                        <h2 className="font-headline text-4xl md:text-5xl font-black mb-4">
                            Core Strength of <span className="text-tertiary">Entrext</span>
                        </h2>
                        <p className="text-on-surface-variant max-w-2xl mx-auto font-body opacity-70">
                            {allImages.length} builders connected by purpose, driven by execution.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 md:gap-16 relative">
                        {/* Left Card */}
                        <div className="relative h-[250px] md:h-[450px] overflow-hidden rounded-2xl border border-outline-variant/20 shadow-2xl bg-black/20">
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
                        </div>

                        {/* Center Keywords */}
                        <div className="flex flex-col items-center justify-center space-y-4 py-8">
                            {displayItems.map((item, index) => (
                                <div 
                                    key={index} 
                                    className={`transition-all duration-500 transform text-center ${
                                        activeIndex === index 
                                        ? 'text-tertiary scale-110 opacity-100' 
                                        : 'text-white/10 scale-95 opacity-20'
                                    }`}
                                >
                                    <span className="font-headline text-2xl md:text-4xl font-black block">
                                        {item.text}
                                    </span>
                                    {activeIndex === index && (
                                        <div className="w-8 h-1 bg-tertiary mx-auto mt-2 rounded-full animate-pulse"></div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Right Card */}
                        <div className="relative h-[250px] md:h-[450px] overflow-hidden rounded-2xl border border-outline-variant/20 shadow-2xl bg-black/20">
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
                        </div>
                    </div>
                </div>

                <div className="absolute left-8 bottom-12 flex items-center gap-4 reveal active">
                    <div className="flex flex-col gap-1 items-center">
                        <span className="material-symbols-outlined text-tertiary text-sm animate-bounce">expand_more</span>
                        <div className="w-px h-12 bg-gradient-to-b from-tertiary to-transparent"></div>
                    </div>
                    <span className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant font-bold">Scroll to sync</span>
                </div>
            </div>
        </section>
    );
};

export default CoreStrength;
