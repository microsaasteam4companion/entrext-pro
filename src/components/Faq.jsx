import React, { useState } from 'react';

const faqData = [
    {
        question: "Who should join Entrext Pro?",
        answer: "Entrext is for founders who show up every day and take ownership. If you’re driven, disciplined, hungry, and willing to figure things out without excuses, you’ll fit right in."
    },
    {
        question: "Who is NOT a fit for Entrext?",
        answer: "If you know what needs to be done and still don’t do it, this is not for you. Entrext is for people who act, not overthink."
    },
    {
        question: "What kind of time commitment is expected?",
        answer: "25 hours per week is the bare minimum. If you’re serious about building something real, it naturally becomes more than that."
    },
    {
        question: "Who owns the idea and the company?",
        answer: "The product is owned by the founders building it, along with Entrext. We build together, so ownership is shared from day one."
    },
    {
        question: "How does equity work?",
        answer: "Founders receive equity in the product with a 6-month cliff and 4-year vesting. We’re built to stay bootstrapped, so dilution is minimal and only happens beyond the first raise if it ever happens."
    },
    {
        question: "What does Entrext actually provide?",
        answer: "We provide founder matching, basic tech support, tools, and a focused environment to build. No fluff, just what’s needed to execute."
    },
    {
        question: "What does a typical week look like?",
        answer: "Execution focused. Regular syncs, weekly or daily sprints, and occasional sessions when needed, nothing unnecessary."
    },
    {
        question: "What happens if the startup fails or pivots?",
        answer: "You can pivot if the team aligns. If you stay committed to the product, your equity stays, failure is part of the process."
    },
    {
        question: "Do I need to go full-time or can I do this part-time?",
        answer: "You can start part-time. But building something meaningful eventually demands your full focus."
    },
    {
        question: "Does Entrext control decisions?",
        answer: "No. Founders have full freedom to build and make decisions. We only step in during critical moments like legal, fundraising, or acquisition."
    }
];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-32 bg-surface-container-lowest" id="faq">
            <div className="max-w-4xl mx-auto px-8">
                <div className="mb-20 text-center reveal active">
                    <h2 className="font-headline text-5xl md:text-7xl font-black mb-6">FAQ<span className="text-tertiary">'s</span></h2>
                    <p className="text-on-surface-variant text-xl">Everything you need to know about building with Entrext.</p>
                </div>
                
                <div className="space-y-4">
                    {faqData.map((item, index) => {
                        const isOpen = activeIndex === index;
                        return (
                            <div 
                                key={index} 
                                className={`reveal active border border-outline-variant/10 rounded-2xl overflow-hidden transition-all duration-500 ${isOpen ? 'bg-surface-container/50 border-tertiary/20' : 'bg-transparent'}`}
                            >
                                <button 
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex items-center justify-between p-8 text-left hover:bg-surface-container/30 transition-colors"
                                >
                                    <span className={`font-headline text-xl md:text-2xl font-bold transition-colors ${isOpen ? 'text-tertiary' : 'text-on-surface'}`}>
                                        {item.question}
                                    </span>
                                    <span className={`material-symbols-outlined transition-transform duration-500 ${isOpen ? 'rotate-180 text-tertiary' : 'text-on-surface-variant'}`}>
                                        expand_more
                                    </span>
                                </button>
                                
                                <div 
                                    className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="px-8 pb-8 pt-0 text-on-surface-variant text-lg leading-relaxed">
                                        <div className="h-px w-10 bg-tertiary/30 mb-6"></div>
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Faq;
