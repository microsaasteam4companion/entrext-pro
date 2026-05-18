import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

const SplashScreen = ({ onComplete }) => {
    const canvasRef = useRef(null);
    const widgetRef = useRef(null);
    const loaderRef = useRef(null);
    const titleRef = useRef(null);
    const headerRef = useRef(null);
    
    const [progress, setProgress] = useState(0);
    const totalFrames = 260;
    const images = useRef([]);
    const currentFrame = useRef(0);
    const isDragActive = useRef(false);
    const startDragFrame = useRef(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 5000); // 5 seconds

        return () => clearTimeout(timer);
    }, [onComplete]);

    useEffect(() => {
        const preloadImages = () => {
            let loadedCount = 0;
            for (let i = 0; i <= totalFrames; i++) {
                const img = new Image();
                img.src = `https://cerpow.github.io/cerpow-img/coin/${i.toString().padStart(4, '0')}.png`;
                img.onload = () => {
                    loadedCount++;
                    const p = Math.round((loadedCount / totalFrames) * 100);
                    setProgress(p);
                    if (loadedCount === totalFrames + 1) {
                        startAnimation();
                    }
                };
                images.current[i] = img;
            }
        };

        const startAnimation = () => {
            if (loaderRef.current) loaderRef.current.classList.add('hide');
            
            setTimeout(() => {
                if (widgetRef.current) widgetRef.current.classList.add('fadeIn');
                if (headerRef.current) headerRef.current.classList.add('fadeIn');
                if (titleRef.current) titleRef.current.classList.add('fadeIn');
                
                animate();
                autoPlay();
                initDraggable();
            }, 350);
        };

        const animate = () => {
            const ctx = canvasRef.current?.getContext('2d');
            if (!ctx || !canvasRef.current) return;

            const draw = () => {
                ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                const img = images.current[currentFrame.current];
                if (img) {
                    ctx.drawImage(
                        img,
                        canvasRef.current.width * 0.5 - 210,
                        0,
                        canvasRef.current.width - 200,
                        canvasRef.current.height - 200
                    );

                    // Draw "E" Symbol with designed metallic styling
                    ctx.save();
                    
                    const centerX = canvasRef.current.width * 0.5 - 10;
                    const centerY = canvasRef.current.height * 0.5 - 100;

                    // Simulate rotation by scaling width based on frame
                    const scaleX = Math.cos((currentFrame.current / totalFrames) * Math.PI * 4);
                    
                    // Only draw if the coin face is visible (scaleX > 0)
                    if (scaleX > 0) {
                        ctx.translate(centerX, centerY);
                        ctx.scale(scaleX, 1);

                        // 1. Draw a base disc to cover anything on the original coin
                        ctx.beginPath();
                        ctx.arc(0, 0, 180, 0, Math.PI * 2);
                        const discGrad = ctx.createRadialGradient(0, 0, 50, 0, 0, 180);
                        discGrad.addColorStop(0, '#1a1a1a');
                        discGrad.addColorStop(0.8, '#0a0a0a');
                        discGrad.addColorStop(1, '#000000');
                        ctx.fillStyle = discGrad;
                        ctx.fill();
                        ctx.strokeStyle = 'rgba(74, 116, 155, 0.3)'; // Tertiary color border
                        ctx.lineWidth = 4;
                        ctx.stroke();

                        // 2. Draw designed "E" Logo
                        const drawE = (color, offset = 0) => {
                            ctx.fillStyle = color;
                            ctx.beginPath();
                            // Top bar
                            ctx.roundRect(-50 + offset, -70 + offset, 100, 20, 4);
                            // Middle bar
                            ctx.roundRect(-50 + offset, -10 + offset, 80, 20, 4);
                            // Bottom bar
                            ctx.roundRect(-50 + offset, 50 + offset, 100, 20, 4);
                            // Vertical bar
                            ctx.roundRect(-50 + offset, -70 + offset, 20, 140, 4);
                            ctx.fill();
                        };

                        // Shadow for depth
                        drawE('rgba(0, 0, 0, 0.5)', 4);
                        
                        // Metallic Chrome Gradient for the E
                        const grad = ctx.createLinearGradient(-60, -60, 60, 60);
                        grad.addColorStop(0, '#ffffff');
                        grad.addColorStop(0.3, '#4A749B'); // Tertiary blue
                        grad.addColorStop(0.5, '#f0f0f0');
                        grad.addColorStop(0.7, '#4A749B');
                        grad.addColorStop(1, '#ffffff');
                        
                        ctx.shadowColor = 'rgba(74, 116, 155, 0.5)';
                        ctx.shadowBlur = 20;
                        drawE(grad);
                        ctx.shadowBlur = 0;
                    }
                    
                    ctx.restore();
                }
                requestAnimationFrame(draw);
            };
            draw();
        };

        const resetWithinBounds = (frame) => {
            const value = frame % totalFrames;
            return value < 0 ? Math.floor(totalFrames + value) : Math.floor(value);
        };

        const autoPlay = () => {
            isDragActive.current = false;
            if (intervalRef.current) clearInterval(intervalRef.current);
            intervalRef.current = setInterval(() => {
                currentFrame.current = resetWithinBounds(currentFrame.current + 1);
            }, 20);
        };

        const initDraggable = () => {
            Draggable.create(widgetRef.current, {
                type: "x",
                inertia: true,
                onPress: function () {
                    isDragActive.current = true;
                    clearInterval(intervalRef.current);
                    startDragFrame.current = currentFrame.current;
                },
                onDrag: function () {
                    currentFrame.current = resetWithinBounds(startDragFrame.current + this.x);
                },
                onThrowUpdate: function () {
                    currentFrame.current = resetWithinBounds(startDragFrame.current + this.x);
                },
                onThrowComplete: function () {
                    setTimeout(autoPlay, 50);
                },
                onRelease: function () {
                    if (!this.isThrowing) autoPlay();
                }
            });
        };

        preloadImages();

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div className="splash-container">
            <main className="splash-main">
                <section id="widget" ref={widgetRef}>
                    <header ref={headerRef}>
                        <canvas id="coin" width="600" height="600" ref={canvasRef}></canvas>
                        <h1 className="title" title="Entrext" ref={titleRef}>Entrext</h1>
                        <h2 className="subtitle"><span>·</span>Pro<span>·</span></h2>
                    </header>
                </section>

                <div className="loader" ref={loaderRef}>
                    <span style={{ width: `${progress}%` }}></span>
                </div>
            </main>
            <style>{`
                .splash-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: #000000;
                    z-index: 9999;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                    color: white;
                }
                .splash-main {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    max-width: 1024px;
                    margin: 0 auto;
                    font-size: clamp(5.4375rem, 1.2946rem + 20.7143vw, 9.0625rem);
                }
                #widget {
                    width: 2.5em;
                    height: 2.3em;
                    transition: opacity 1.1s ease, transform 1.1s ease;
                    opacity: 0;
                    margin-top: 0.3em;
                    flex-shrink: 0;
                    transform: translate3d(0px, 0px, 0px) scale3d(1.04, 1.04, 1);
                    border-radius: 0.44em;
                    margin-bottom: 0.4em;
                    padding: 0.12em;
                    background: #21232a;
                    box-shadow: 2px 2px 1px -1px rgba(114, 130, 134, 0.35) inset;
                }
                header {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    border-radius: 0.35em;
                    background: linear-gradient(180deg, #585c65 0%, #555961 100%);
                    box-shadow: 2px 2px 0px -1px rgba(255, 255, 255, 0.3) inset,
                        0px -0.06em 1px 2px #3d3d47 inset,
                        0 -0.1em 0.2em 0.1em rgba(255, 255, 255, 0.15) inset,
                        0px 0.4em 0.2em -0.1em rgba(19, 23, 24, 0.45);
                    transition: transform 1.3s ease;
                    transform: translate3d(0px, 0px, 0px) scale3d(0.85, 0.85, 1) !important;
                }
                #coin {
                    width: 100%;
                    height: auto;
                    aspect-ratio: 1;
                    user-select: none;
                    margin-top: -1.05em;
                    margin-bottom: -50%;
                    filter: drop-shadow(25px 70px 20px rgba(34, 38, 48, 0.5));
                    z-index: 100;
                }
                .title {
                    font-size: 1em;
                    z-index: 1;
                    line-height: 1;
                    font-family: sans-serif;
                    margin: 0;
                    margin-right: 0.06em;
                    text-align: center;
                    text-shadow: -1px -1px 0px rgba(255,255,255, 0.6), 0px -1px 0px rgba(255,255,255, 0.6),
                        -1px 0px 0px rgba(255,255,255, 0.6), 0em 0.25em 0.2em rgba(9, 12, 15, 0.2);
                    font-weight: 800;
                    color: #b1b6c3;
                    margin-bottom: 0.05em;
                    transform: translate3d(0px, 0px, 0px) scale3d(0.8, 0.8, 1) !important;
                    transition: letter-spacing 2s ease, opacity 2s ease, transform 2s ease;
                    letter-spacing: 0.2em;
                    opacity: 0;
                }
                .subtitle {
                    display: flex;
                    color: #a9aab5;
                    text-align: center;
                    font-size: 0.125em;
                    font-style: normal;
                    font-weight: 600;
                    line-height: 1;
                    letter-spacing: 0.32em;
                    justify-content: center;
                    align-items: center;
                    gap: 0.2em;
                }
                .subtitle span {
                    font-size: 140%;
                }
                .loader {
                    position: absolute;
                    background-color: rgba(255, 255, 255, 0.2);
                    width: 90%;
                    max-width: 150px;
                    height: 2px;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    transition: opacity 500ms ease, visibility 500ms ease;
                }
                .loader.hide {
                    opacity: 0;
                    visibility: hidden;
                }
                .loader span {
                    display: flex;
                    background-color: white;
                    height: 100%;
                    width: 0%;
                    transition: width 0.1s ease;
                }
                .fadeIn {
                    opacity: 1 !important;
                    transform: scale3d(1, 1, 1) !important;
                }
                .title.fadeIn {
                    letter-spacing: 0.03em;
                }
            `}</style>
        </div>
    );
};

export default SplashScreen;
