import React, { useState, useEffect, useRef } from 'react';

// Importing product screenshots from assets
import secretroom from '../assets/products/Screenshot 2026-04-19 161901.png';
import editflow from '../assets/products/Screenshot 2026-04-19 162828.png';
import sohospace from '../assets/products/Screenshot 2026-04-19 162856.png';
import pickspy from '../assets/products/Screenshot 2026-04-19 162932.png';
import vouched from '../assets/products/Screenshot 2026-04-19 163014.png';
import solopilot from '../assets/products/Screenshot 2026-04-19 163041.png';
import inviteflow from '../assets/products/Screenshot 2026-04-19 163108.png';
import subsafe from '../assets/products/Screenshot 2026-04-19 163210.png';
import lifepath from '../assets/products/Screenshot 2026-04-19 163245.png';
import automailor from '../assets/products/Screenshot 2026-04-19 163311.png';
import intervai from '../assets/products/Screenshot 2026-04-19 163344.png';
import opinvox from '../assets/products/Screenshot 2026-04-19 163428.png';
import ctrlsense from '../assets/products/Screenshot 2026-04-19 163524.png';
import funvitation from '../assets/products/Screenshot 2026-04-19 163603.png';

const orbitItems = [
    { name: "SecretRoom", image: secretroom },
    { name: "EditFlow", image: editflow },
    { name: "Soho Space", image: sohospace },
    { name: "PickSpy", image: pickspy },
    { name: "Vouched", image: vouched },
    { name: "Funvitation", image: funvitation },
    { name: "SoloPilot", image: solopilot },
    { name: "InviteFlow", image: inviteflow },
    { name: "SubSafe", image: subsafe },
    { name: "LifePath", image: lifepath },
    { name: "AutoMailor", image: automailor },
    { name: "IntervAI", image: intervai },
    { name: "OpinVox", image: opinvox },
    { name: "CtrlSense", image: ctrlsense }
];

const duplicatedItems = [...orbitItems, ...orbitItems];
const CARD_ANGLE = 360 / duplicatedItems.length;

const EcosystemOrbit = () => {
    const [rotation, setRotation] = useState(0);
    const [dimensions, setDimensions] = useState({ 
        radius: 1400, 
        perspective: '800px',
        cardWidth: '280px',
        cardHeight: '380px'
    });
    const animRef = useRef(null);
    const isHoveredRef = useRef(false);

    useEffect(() => {
        const updateDimensions = () => {
            if (window.innerWidth < 768) {
                setDimensions({
                    radius: 400,
                    perspective: '600px',
                    cardWidth: '180px',
                    cardHeight: '260px'
                });
            } else {
                setDimensions({
                    radius: 1400,
                    perspective: '800px',
                    cardWidth: '280px',
                    cardHeight: '380px'
                });
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        
        let lastTime = performance.now();
        const animate = (now) => {
            const delta = now - lastTime;
            lastTime = now;
            if (!isHoveredRef.current) {
                setRotation(prev => (prev - (delta * 0.008)) % 360);
            }
            animRef.current = requestAnimationFrame(animate);
        };

        animRef.current = requestAnimationFrame(animate);
        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);

    return (
        <section className="py-20 md:py-32 bg-surface overflow-hidden relative">
            <div className="max-w-[1440px] mx-auto px-6 md:px-8 mb-12 md:mb-16 text-center relative z-20">
                <h2 className="text-3xl md:text-5xl font-headline font-medium text-white mb-2 md:mb-4">The <span className="font-accent">Ecosystem</span> Orbit</h2>
                <div className="w-8 md:w-10 h-0.5 bg-tertiary mx-auto mt-2 md:mt-4 rounded-full"></div>
            </div>

            {/* 3D Panoramic Curve */}
            <div 
                className="relative w-full flex items-center justify-center overflow-hidden" 
                style={{ perspective: dimensions.perspective, height: window.innerWidth < 768 ? '400px' : '500px' }}
                onMouseEnter={() => isHoveredRef.current = true}
                onMouseLeave={() => isHoveredRef.current = false}
            >
                
                {/* Edge fade gradients */}
                <div className="absolute inset-y-0 left-0 w-[10%] md:w-[25%] bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-[10%] md:w-[25%] bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none"></div>

                <div 
                    className="relative"
                    style={{ 
                        width: dimensions.cardWidth, 
                        height: dimensions.cardHeight,
                        transformStyle: 'preserve-3d',
                        /* Pulling the container forward by RADIUS brings the back wall right to our screen depth */
                        transform: `translateZ(${dimensions.radius}px) rotateY(${rotation}deg)`
                    }}
                >
                    {duplicatedItems.map((item, index) => {
                        const angle = index * CARD_ANGLE;
                        
                        return (
                            <div
                                key={index}
                                className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] group"
                                style={{ 
                                    // Pushing cards away places them on the cylinder wall
                                    transform: `rotateY(${angle}deg) translateZ(-${dimensions.radius}px)`,
                                    transformStyle: 'preserve-3d',
                                    // This prevents the browser from rendering items that rotate too far around to the back (which is physically behind our camera now!)
                                    backfaceVisibility: 'hidden',
                                }}
                            >
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="w-full h-full object-cover object-top filter brightness-75 group-hover:brightness-110 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 md:opacity-90 md:group-hover:opacity-60 transition-opacity duration-500" />
                                <div className="absolute bottom-4 md:bottom-6 left-0 right-0 text-center transform translate-y-1 md:translate-y-2 md:group-hover:-translate-y-2 transition-transform duration-500">
                                    <h4 className="text-lg md:text-2xl font-headline font-black text-white uppercase tracking-tighter drop-shadow-2xl">
                                        {item.name}
                                    </h4>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default EcosystemOrbit;
