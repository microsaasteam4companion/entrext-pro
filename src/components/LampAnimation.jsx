import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LampAnimation = ({ onApply }) => {
    const svgRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(['#lamp', '#lampMaskPath', '#lampExtend'], {
                rotation: -26,
                svgOrigin: '400 130'
            }, {
                duration: 1.4,
                rotation: 26,
                svgOrigin: '400 130',
                ease: 'power1.inOut',
                repeat: -1,
                yoyo: true
            });
        }, svgRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative bg-black py-24 overflow-hidden flex flex-col items-center justify-center min-h-[70vh]">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4A749B]/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div ref={svgRef} className="w-full max-w-3xl mx-auto px-6" style={{ height: '50vh', minHeight: '320px' }}>
                <svg
                    id="mainSVG"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 800 600"
                    style={{ width: '100%', height: '100%' }}
                >
                    <defs>
                        {/* Clip path using SVG text shape for "ENTREXT LABS" */}
                        <clipPath id="lightTextMask">
                            <text
                                x="400"
                                y="370"
                                textAnchor="middle"
                                fontFamily="'Outfit', 'Arial Black', sans-serif"
                                fontWeight="900"
                                fontSize="72"
                                letterSpacing="4"
                                fill="white"
                            >
                                ENTREXT LABS
                            </text>
                        </clipPath>

                        {/* Glow filter */}
                        <filter id="glow" x="-100%" y="-100%" width="550%" height="550%">
                            <feGaussianBlur stdDeviation="0 19" result="coloredBlur" />
                            <feOffset dx="0" dy="0" result="offsetblur" />
                            <feFlood id="glowAlpha" floodColor="#FEFFD9" floodOpacity="0.5" />
                            <feComposite in2="offsetblur" operator="in" />
                            <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>

                        {/* Light cone mask — swing origin at lamp pivot */}
                        <mask id="lightMask">
                            <path
                                id="lampMaskPath"
                                d="m383,275.25l-29.1,37.09c-1.06,1.34-.1,3.31,1.61,3.31h88.99c1.71,0,2.67-1.97,1.61-3.31l-29.1-37.09c-8.65-11.03-25.35-11.03-34,0Z"
                                fill="#FFF"
                            />
                            {/* Extended light cone to cover text area */}
                            <path
                                id="lampExtend"
                                d="m354,315 l-130,200 h352 l-130,-200 Z"
                                fill="#FFF"
                                opacity="0.9"
                            />
                        </mask>
                    </defs>

                    {/* Dark base text (always visible, subtle grey) */}
                    <text
                        x="400"
                        y="370"
                        textAnchor="middle"
                        fontFamily="'Outfit', sans-serif"
                        fontWeight="900"
                        fontSize="72"
                        letterSpacing="4"
                        fill="#2a2a2a"
                    >
                        ENTREXT LABS
                    </text>

                    {/* Lit text layer — clipped to text shape, masked by swinging light */}
                    <g clipPath="url(#lightTextMask)">
                        <g filter="url(#glow)">
                            <g mask="url(#lightMask)">
                                <text
                                    x="400"
                                    y="370"
                                    textAnchor="middle"
                                    fontFamily="'Outfit', sans-serif"
                                    fontWeight="900"
                                    fontSize="72"
                                    letterSpacing="4"
                                    fill="#F5F5DC"
                                >
                                    ENTREXT LABS
                                </text>
                            </g>
                        </g>
                    </g>

                    {/* Lamp cord */}
                    <line
                        id="cord"
                        x1="400" y1="0"
                        x2="400" y2="275"
                        stroke="#555"
                        strokeWidth="1.5"
                    />

                    {/* Lamp bulb housing */}
                    <g id="lamp" style={{ transformOrigin: '400px 130px' }}>
                        {/* Cord lower part attached to lamp */}
                        <line x1="400" y1="130" x2="400" y2="240" stroke="#555" strokeWidth="1.5" />
                        {/* Lamp shade */}
                        <path
                            d="m383,240 l-29.1,37.09c-1.06,1.34-.1,3.31,1.61,3.31h88.99c1.71,0,2.67-1.97,1.61-3.31l-29.1-37.09c-8.65-11.03-25.35-11.03-34,0Z"
                            fill="#333"
                            stroke="#555"
                            strokeWidth="0.5"
                        />
                        {/* Bulb glow */}
                        <circle cx="400" cy="240" r="8" fill="#FEFFD9" opacity="0.9" />
                        <circle cx="400" cy="240" r="14" fill="#FEFFD9" opacity="0.15" />
                    </g>

                    {/* Light cone overlay */}
                    <g mask="url(#lightMask)">
                         <rect x="0" y="0" width="800" height="600" fill="#F5F5DC" opacity="0.1" />
                    </g>
                </svg>
            </div>

            {/* CTA button below */}
            <div className="relative z-10 text-center mt-4">
                <button
                    onClick={onApply}
                    className="bg-tertiary text-white px-12 py-5 rounded-2xl font-headline text-xl font-black uppercase tracking-tight hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(74,116,155,0.4)]"
                >
                    Apply Now
                </button>
            </div>
        </section>
    );
};

export default LampAnimation;
