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
    { name: "SoloPilot", image: solopilot },
    { name: "InviteFlow", image: inviteflow },
    { name: "SubSafe", image: subsafe },
    { name: "LifePath", image: lifepath },
    { name: "AutoMailor", image: automailor },
    { name: "IntervAI", image: intervai },
    { name: "OpinVox", image: opinvox },
    { name: "CtrlSense", image: ctrlsense },
    { name: "Funvitation", image: funvitation }
];

const RADIUS = 480;
const CARD_ANGLE = 360 / orbitItems.length;

const EcosystemOrbit = () => {
    const [rotation, setRotation] = useState(0);
    const animRef = useRef(null);

    useEffect(() => {
        let lastTime = performance.now();

        const animate = (now) => {
            const delta = now - lastTime;
            lastTime = now;
            setRotation(prev => (prev - (delta * 0.018)) % 360);
            animRef.current = requestAnimationFrame(animate);
        };

        animRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animRef.current);
    }, []);

    return (
        <section className="py-32 bg-surface overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-8 mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-headline font-black text-white mb-4">The Ecosystem Orbit</h2>
                <p className="text-on-surface-variant text-lg font-body">16 autonomous products rotating in a concave synchronicity.</p>
                <div className="w-10 h-0.5 bg-tertiary mx-auto mt-4 rounded-full"></div>
            </div>

            {/* 3D Concave (Inner) Carousel */}
            <div className="relative w-full flex items-center justify-center" style={{ perspective: '1200px', height: '460px' }}>
                <div 
                    className="relative"
                    style={{ 
                        width: '220px', 
                        height: '320px',
                        transformStyle: 'preserve-3d',
                        transform: `rotateY(${rotation}deg)`
                    }}
                >
                    {orbitItems.map((item, index) => {
                        const angle = index * CARD_ANGLE;
                        
                        return (
                            <div
                                key={index}
                                className="absolute inset-0 rounded-xl overflow-hidden border border-white/10 shadow-2xl"
                                style={{ 
                                    transform: `rotateY(${angle}deg) translateZ(-${RADIUS}px) rotateY(180deg)`,
                                    transformStyle: 'preserve-3d',
                                }}
                            >
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="w-full h-full object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                                <div className="absolute bottom-4 left-0 right-0 text-center">
                                    <h4 className="text-xs font-headline font-bold text-white uppercase tracking-wider drop-shadow-lg">
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
