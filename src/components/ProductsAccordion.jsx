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
        color: "text-tertiary"
    },
    {
        name: "Komal Siddharth",
        role: "Founder",
        brand: "COMPANION",
        image: accordion2,
        color: "text-primary"
    },
    {
        name: "Manthan Gupta",
        role: "Founder",
        brand: "KNOWX",
        image: accordion3,
        color: "text-primary"
    },
    {
        name: "Aryan Sagavekar",
        role: "Founder",
        brand: "FRIENDSIN",
        image: accordion4,
        color: "text-primary"
    },
    {
        name: "Taha Sadikot",
        role: "Founder",
        brand: "NOA",
        image: "https://lh3.googleusercontent.com/aida/ADBb0uiWKTWmIEGtgZZrXDo3OENuxULfCMEamUHQ3pppCFvA74TA6y-jRlx50i_XTSmmIGahk94ZT-ODqBw3IeRPuffJZErba4bej4UCfjStJTgXj9qMrRtSZIrGpvsRn33ODSkE9eHoQx-BbO69XMZMVu6D9ULX-UzViOI9b1OR5EltOJW3D0EiiIAKyG-wfrK-crk1UL06DCuQPDmcuqhbYM9ve-3YOpJjPFSJL9I4LoPkmgA3lYp9wKTo17Azcnbl7iOxzDDfUu775-0",
        color: "text-tertiary"
    }
];

const ProductsAccordion = () => {
    return (
        <section className="py-32 px-8" id="products">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-20 items-end mb-24">
                    <h2 className="font-headline text-5xl md:text-7xl font-black leading-tight reveal active">
                        Our Core <br/><span className="text-tertiary">Products</span>
                    </h2>
                    <p className="text-xl text-on-surface-variant border-l-2 border-tertiary pl-8 reveal active">
                        Bespoke tools built for the modern creator economy.
                    </p>
                </div>
                <div className="flex h-[600px] w-full gap-4 items-stretch reveal active">
                    {products.map((product, index) => (
                        <div key={index} className="accordion-item group border border-outline-variant/20 rounded-2xl cursor-pointer">
                            <div className="absolute inset-0 z-0">
                                <img alt={product.name} className="accordion-image w-full h-full object-cover" src={product.image} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                            </div>
                            <div className="accordion-content absolute bottom-0 right-0 p-8 z-10 text-right w-full">
                                <div className="mb-1 text-xs font-label uppercase tracking-widest opacity-60">{product.role}</div>
                                <h4 className="font-headline text-2xl font-bold mb-1 text-white">{product.name}</h4>
                                <div className={`${product.color} font-black text-4xl tracking-tighter`}>{product.brand}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsAccordion;
