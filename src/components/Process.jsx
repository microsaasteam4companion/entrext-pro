import React from 'react';

const steps = [
    {
        number: "01",
        title: "The Quality Gate",
        description: "Filtering for the top 1% of talent. A rigorous entry point where only pure capability survives.",
        icon: "filter_list",
        align: "right"
    },
    {
        number: "02",
        title: "Ecosystem Alignment",
        description: "Culture Fit: We dive deep into your core values to ensure they resonate with the heart of our startup culture.",
        icon: "diversity_3",
        align: "left"
    },
    {
        number: "03",
        title: "Deep Dive",
        description: "(Technical Round) – Beyond skills, we ensure your expertise is matched with the exact problem that needs your genius.",
        icon: "biotech",
        align: "right"
    },
    {
        number: "04",
        title: "The Reality Check",
        description: "Market Validation: You’ll be tested on your ability to align product ideas with real-world market demand and user pain points.",
        icon: "check_circle",
        align: "left"
    },
    {
        number: "05",
        title: "Collaborative Sprint",
        description: "(Task/Assignment) – An unannounced challenge designed to test how you translate strategy into high-impact action.",
        icon: "bolt",
        align: "right"
    },
    {
        number: "06",
        title: "The Grit Test",
        description: "(Surprise 2) - The Final Stand: A test of pure relentlessness and resilience—proving you have the fire to see things through.",
        icon: "local_fire_department",
        align: "left"
    }
];

const Process = () => {
    return (
        <section className="py-32 bg-surface-container-lowest relative overflow-hidden" id="process">
            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <div className="mb-32 text-center reveal active">
                    <h2 className="font-headline text-5xl md:text-6xl font-medium mb-6 text-white">The <span className="font-accent">Entrext</span> Way</h2>
                    <p className="font-body text-xl text-tertiary font-medium">6 Steps to joining our elite core</p>
                </div>
                <div className="relative">
                    <div className="step-path"></div>
                    <div className="space-y-32">
                        {steps.map((step, index) => (
                            <div 
                                key={index} 
                                className={`relative flex flex-col md:flex-row items-center reveal active ${step.align === 'left' ? '' : 'md:gap-0'}`}
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                {step.align === 'right' ? (
                                    <>
                                        <div className="md:w-1/2 md:pr-16 text-left md:text-right order-2 md:order-1 pl-16 md:pl-0 mt-2 md:mt-0">
                                            <h3 className="font-headline text-xl md:text-3xl font-bold mb-2 md:mb-4">Step {step.number}: {step.title}</h3>
                                            <p className="text-on-surface-variant max-w-md ml-auto leading-relaxed text-sm md:text-base">{step.description}</p>
                                        </div>
                                        <div className="absolute left-4 md:static md:translate-x-0 z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-surface-container-highest border-2 border-tertiary flex items-center justify-center order-1 md:order-2 step-node">
                                            <span className="material-symbols-outlined text-tertiary text-xl md:text-2xl">{step.icon}</span>
                                        </div>
                                        <div className="md:w-1/2 hidden md:block order-3"></div>
                                    </>
                                ) : (
                                    <>
                                        <div className="md:w-1/2 hidden md:block"></div>
                                        <div className="absolute left-4 md:static md:translate-x-0 z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-surface-container-highest border-2 border-tertiary flex items-center justify-center step-node">
                                            <span className="material-symbols-outlined text-tertiary text-xl md:text-2xl">{step.icon}</span>
                                        </div>
                                        <div className="md:w-1/2 md:pl-16 text-left md:text-left mt-2 md:mt-0 pl-16 md:pl-16">
                                            <h3 className="font-headline text-xl md:text-3xl font-bold mb-2 md:mb-4">Step {step.number}: {step.title}</h3>
                                            <p className="text-on-surface-variant max-w-md leading-relaxed text-sm md:text-base">{step.description}</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
