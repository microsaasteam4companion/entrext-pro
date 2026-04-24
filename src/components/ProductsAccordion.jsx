import React from 'react';

import accordion1 from '../assets/products/accordion_1.jpg';
import accordion2 from '../assets/products/accordion_2.jpg';
import accordion3 from '../assets/products/accordion_3.jpg';
import accordion4 from '../assets/products/accordion_4.jpg';

const products = [
    {
        name: "Garv Thakral",
        role: "Founder",
        brand: "HERTH",
        image: accordion1,
        color: "text-tertiary",
        linkedin: "https://linkedin.com/in/#"
    },
    {
        name: "Komal Siddharth",
        role: "Founder",
        brand: "COMPANION",
        image: accordion2,
        color: "text-primary",
        linkedin: "https://linkedin.com/in/#"
    },
    {
        name: "Manthan Gupta",
        role: "Founder",
        brand: "KNOWX",
        image: accordion3,
        color: "text-primary",
        linkedin: "https://linkedin.com/in/#"
    },
    {
        name: "Aryan Sagavekar",
        role: "Founder",
        brand: "FRIENDSIN",
        image: accordion4,
        color: "text-primary",
        linkedin: "https://linkedin.com/in/#"
    },
    {
        name: "Taha Sadikot",
        role: "Founder",
        brand: "NOA",
        image: "https://lh3.googleusercontent.com/aida/ADBb0uiWKTWmIEGtgZZrXDo3OENuxULfCMEamUHQ3pppCFvA74TA6y-jRlx50i_XTSmmIGahk94ZT-ODqBw3IeRPuffJZErba4bej4UCfjStJTgXj9qMrRtSZIrGpvsRn33ODSkE9eHoQx-BbO69XMZMVu6D9ULX-UzViOI9b1OR5EltOJW3D0EiiIAKyG-wfrK-crk1UL06DCuQPDmcuqhbYM9ve-3YOpJjPFSJL9I4LoPkmgA3lYp9wKTo17Azcnbl7iOxzDDfUu775-0",
        color: "text-tertiary",
        linkedin: "https://linkedin.com/in/#"
    }
];

const ProductsAccordion = () => {
    return (
        <section className="py-32 px-8" id="products">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-20 items-end mb-24">
                    <h2 className="font-headline text-5xl md:text-7xl font-black leading-tight reveal active">
                        Our Core <br/><span className="font-accent text-tertiary">Products</span>
                    </h2>
                    <p className="text-xl text-on-surface-variant border-l-2 border-tertiary pl-8 reveal active">
                        Bespoke tools built for the modern creator economy.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row h-auto md:h-[600px] w-full gap-4 items-stretch reveal active">
                    {products.map((product, index) => (
                        <div key={index} className="accordion-item group border border-outline-variant/20 rounded-2xl cursor-pointer relative h-[300px] md:h-full overflow-hidden">
                            <div className="absolute inset-0 z-0">
                                <img alt={product.name} className="accordion-image w-full h-full object-cover" src={product.image} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 md:opacity-0 md:group-hover:opacity-80 transition-opacity"></div>
                            </div>
                            <div className="accordion-content absolute bottom-0 right-0 p-6 md:p-8 z-10 text-right w-full opacity-100 md:opacity-60 md:group-hover:opacity-100 transition-opacity">
                                <div className="flex justify-end items-center gap-3 mb-1">
                                    <div className="text-[10px] md:text-xs font-label uppercase tracking-widest opacity-60">{product.role}</div>
                                    <a href={product.linkedin || "#"} target="_blank" rel="noopener noreferrer" className="z-20 pointer-events-auto" aria-label="LinkedIn Profile">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white/50 hover:text-[#0A66C2] transition-colors cursor-pointer">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                        </svg>
                                    </a>
                                </div>
                                <h4 className="font-headline text-xl md:text-2xl font-bold mb-1 text-white">{product.name}</h4>
                                <div className={`${product.color} font-black text-3xl md:text-4xl tracking-tighter`}>{product.brand}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsAccordion;
