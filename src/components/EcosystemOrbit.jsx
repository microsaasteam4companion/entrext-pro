import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

import './EcosystemOrbit.css';

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

gsap.registerPlugin(Draggable);

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

const EcosystemOrbit = () => {
    const listRef = useRef(null);

    useEffect(() => {
        if (!listRef.current) return;
        const list = listRef.current;
        const proxy = document.createElement('div');

        const updateScroll = function () {
            list.scroll({
                left: this.scrollLeft + -this.x,
                behavior: 'instant',
            });
        };

        const draggable = Draggable.create(proxy, {
            type: 'x',
            trigger: list,
            allowContextMenu: true,
            onPressInit: function () {
                this.scrollLeft = list.scrollLeft;
                gsap.set(proxy, { clearProps: 'all' });
            },
            onDragStart: () => {
                list.dataset.dragging = true;
            },
            onDragEnd: () => {
                list.dataset.dragging = false;
            },
            onDrag: updateScroll,
        });

        return () => {
            if (draggable && draggable[0]) {
                draggable[0].kill();
            }
        };
    }, []);

    return (
        <section className="py-20 md:py-32 bg-surface overflow-hidden relative" id="ecosystem">
            <div className="eco-container">
                <header className="eco-header">
                    <h2>The <span className="font-accent text-tertiary">Ecosystem</span> Orbit</h2>
                </header>
                
                <main className="eco-main">
                    <ul className="eco-ul" ref={listRef}>
                        {orbitItems.map((item, index) => (
                            <li className="eco-li" key={index}>
                                <article className="eco-article">
                                    <div className="eco-article-content">
                                        <img className="eco-img" src={item.image} alt={item.name} />
                                    </div>
                                </article>
                            </li>
                        ))}
                    </ul>
                </main>
            </div>
        </section>
    );
};

export default EcosystemOrbit;
