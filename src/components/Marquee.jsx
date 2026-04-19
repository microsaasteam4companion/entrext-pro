import React from 'react';

const Marquee = () => {
    const text = "BUILDING FOR THE NEXT DECADE";
    const items = Array(8).fill(text);

    return (
        <section className="py-12 bg-black border-y border-outline-variant/10">
            <div className="marquee-container mb-4">
                <div className="marquee-content animate-marquee-right">
                    {items.map((t, i) => (
                        <span key={i} className={`marquee-text ${i % 4 === 1 || i % 4 === 3 ? 'text-outline' : i % 4 === 2 ? 'text-tertiary' : ''}`}>{t}</span>
                    ))}
                </div>
            </div>
            <div className="marquee-container">
                <div className="marquee-content animate-marquee-left">
                    {items.map((t, i) => (
                        <span key={i} className={`marquee-text ${i % 4 === 0 || i % 4 === 2 ? 'text-outline' : i % 4 === 3 ? 'text-tertiary' : ''}`}>{t}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Marquee;
