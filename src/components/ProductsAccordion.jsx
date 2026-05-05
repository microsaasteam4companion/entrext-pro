import React from 'react';

const products = [
    {
        name: "FRIENDSIN",
        founder: "Aryan Sagavekar",
        role: "Founder",
        description: "A dynamic truth and dare experience designed to break the ice and build real connections through gamified interaction.",
        linkedin: "https://linkedin.com/in/#",
        date: "Updated May 2025",
        bgColor: "bg-[#FFEDD5]", // Pastel Orange
        textColor: "text-slate-950",
        badgeColor: "bg-black/5",
        image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=2574&auto=format&fit=crop"
    },
    {
        name: "NOA",
        founder: "Taha Sadikot",
        role: "Founder",
        description: "The ultimate prompt repository platform, empowering creators with a massive library of AI-driven creative starters.",
        linkedin: "https://linkedin.com/in/#",
        date: "Launched Aug 2025",
        bgColor: "bg-[#FCE7F3]", // Pastel Pink
        textColor: "text-slate-950",
        badgeColor: "bg-black/5",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
    },
    {
        name: "COMPANION",
        founder: "Komal Siddharth",
        role: "Founder",
        description: "An anonymous human connection app where you can talk to anyone, anywhere, featuring identity-free meaningful conversations.",
        linkedin: "https://linkedin.com/in/#",
        date: "Updated Jan 2026",
        bgColor: "bg-[#DCFCE7]", // Pastel Green
        textColor: "text-slate-950",
        badgeColor: "bg-black/5",
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop"
    },
    {
        name: "KNOWX",
        founder: "Manthan Gupta",
        role: "Founder",
        description: "The 'Tinder for Founders'—a high-stakes matchmaking platform connecting visionary entrepreneurs with their perfect co-founders.",
        linkedin: "https://linkedin.com/in/#",
        date: "Released Mar 2025",
        bgColor: "bg-[#F3E8FF]", // Pastel Purple
        textColor: "text-slate-950",
        badgeColor: "bg-black/5",
        image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2670&auto=format&fit=crop"
    },
    {
        name: "HERTH",
        founder: "Garv Thakral",
        role: "Founder",
        description: "A revolutionary women-focused marketplace, blending the scale of Amazon with a curated focus on female empowerment.",
        linkedin: "https://linkedin.com/in/#",
        date: "Launched Nov 2025",
        bgColor: "bg-[#BAE6FD]", // Slightly more saturated Pastel Blue for better visibility
        textColor: "text-slate-950",
        badgeColor: "bg-black/5",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
    },
    {
        isCTA: true,
        name: "JOIN US",
        founder: "+",
        role: "Your Venture",
        description: "Do you have a vision that can change the world? Apply now to join our elite ecosystem of high-growth founders.",
        linkedin: "#",
        date: "Next Big Thing",
        bgColor: "bg-[#FDE68A]", // Pastel Yellow
        textColor: "text-slate-950",
        badgeColor: "bg-black/5",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop"
    }
];

const ProductsAccordion = () => {
    return (
        <section className="py-32 px-6 md:px-12 bg-black overflow-hidden" id="products">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center text-center mb-24 reveal active">
                    <h2 className="font-headline text-5xl md:text-7xl font-black text-white mb-8">
                        Our Core <span className="font-accent text-tertiary">Products</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
                        A curated ecosystem of high-performance tools designed to scale your creative output and operational efficiency.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 reveal active">
                    {products.map((product, index) => (
                        <div 
                            key={index} 
                            className={`group relative flex flex-col rounded-[3rem] overflow-hidden h-[650px] transition-all duration-700 hover:scale-[1.01] hover:shadow-[0_0_50px_rgba(255,255,255,0.05)] ${product.bgColor} ${product.textColor}`}
                        >
                            {/* Card Content Top */}
                            <div className="p-12 pb-0 flex flex-col h-full relative z-10">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="flex flex-col">
                                        <div className="text-[10px] font-black uppercase tracking-[0.25em] opacity-40 mb-2">{product.role}</div>
                                        <h3 className="text-3xl font-black tracking-tighter uppercase leading-none">{product.name}</h3>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <a 
                                            href={product.linkedin} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className={`p-2.5 rounded-full transition-all duration-300 hover:bg-black hover:text-white ${product.badgeColor}`}
                                        >
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                <p className="text-sm font-semibold leading-relaxed opacity-70 max-w-[90%] mb-10">
                                    {product.description}
                                </p>

                                <div className="mt-auto mb-12">
                                    <div className="flex flex-col gap-2">
                                        <div className="text-[11px] font-black opacity-30 uppercase tracking-[0.2em]">Visionary</div>
                                        <div className={`leading-none !text-black ${product.isCTA ? 'text-9xl font-black opacity-10' : 'text-5xl font-accent italic font-medium'}`}>
                                            {product.founder}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card Visual Bottom */}
                            <div className="relative w-full h-[320px] overflow-hidden">
                                <div className="absolute inset-0 px-12 pb-12">
                                    <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl relative transition-all duration-700 group-hover:scale-[1.03] group-hover:rotate-1 group-hover:shadow-black/20">
                                        <img 
                                            src={product.image} 
                                            alt={product.name} 
                                            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                                        
                                        {product.isCTA && (
                                            <div className="absolute inset-0 flex items-center justify-center backdrop-blur-[1px]">
                                                <button className="bg-slate-950 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm shadow-2xl transform transition-all hover:scale-110 hover:bg-black active:scale-95">
                                                    Apply Now →
                                                </button>
                                            </div>
                                        )}
                                    </div>
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

