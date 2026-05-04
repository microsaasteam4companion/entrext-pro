import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './SplitFlap.css';

gsap.defaults({
  duration: 1,
  ease: 'none',
});

const DEFAULT_CHARACTERS = ' abcdefghijklmnopqrstuvwxyz0123456789,!';

class FlipSlot {
  constructor(options = {}) {
    const {
      characters = DEFAULT_CHARACTERS,
      color = 'inherit',
      pad = 0,
    } = options;
    this.characters = Array.from(characters);
    this.colorSet = color;
    this.pad = pad;
    this.element = this.create();
    this.generateTimeline();
  }

  set chars(value) {
    this.characters = Array.from(value);
    this.generateTimeline();
  }

  set color(value) {
    this.element?.style.setProperty('--color', value);
  }

  create() {
    const element = Object.assign(document.createElement('div'), {
      className: 'flip',
      style: `--color: ${this.colorSet}`,
      innerHTML: `
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      `,
    });
    return element;
  }

  flip(character, delay = 0) {
    const { characters: chars, pad, timeline, scrubber } = this;
    
    // Kill any ongoing tweens on the scrubber to prevent overlapping glitches
    gsap.killTweensOf(scrubber);
    
    // Find current integer position
    const currentInt = Math.round(scrubber.totalTime());
    // Snap to the exact integer to fix any halfway folded state
    scrubber.totalTime(currentInt);

    const currentIndex = currentInt % chars.length;
    const desiredIndex = chars.indexOf(character) !== -1 ? chars.indexOf(character) : 0;
    
    let shift = desiredIndex - currentIndex;
    if (shift <= 0) {
      shift += chars.length; // Always spin forward
    }

    const padding = pad * chars.length; 
    const targetTime = currentInt + shift + padding;
    
    gsap.to(scrubber, {
      delay,
      totalTime: targetTime, // Exactly an integer!
      ease: 'power2.inOut',
      duration: (shift + padding) * gsap.utils.random(0.04, 0.08),
    });
  }

  generateTimeline() {
    const { timeline: currentTimeline, scrubber, element } = this;
    if (currentTimeline) currentTimeline.kill();
    if (scrubber) scrubber.kill();

    const [unfoldTop, unfoldBottom, foldTop, foldBottom] = Array.from(
      element.querySelectorAll(':scope > div')
    );
    const chars = this.characters;

    gsap.set([foldTop, unfoldBottom], { clearProps: 'all' });

    unfoldTop.innerText = unfoldBottom.innerText = chars[1] || ' ';
    foldTop.innerText = foldBottom.innerText = chars[0] || ' ';

    const timeline = gsap.timeline({
      paused: true,
      repeat: chars.length - 1, // Repeat enough times to loop through every character
      onRepeat: () => {
        const index = Math.round(timeline.totalTime() / timeline.duration());
        const next = chars[index % chars.length];
        const current = chars[(index + 1) % chars.length];
        unfoldTop.innerText = unfoldBottom.innerText = current;
        foldTop.innerText = foldBottom.innerText = next;
      },
    })
    .fromTo(unfoldBottom, { rotateX: 180 }, { rotateX: 0, duration: 1 }, 0)
    .fromTo(unfoldTop, { filter: 'brightness(0)' }, { filter: 'brightness(1)', duration: 1 }, 0)
    .fromTo(foldTop, { rotateX: 0 }, { duration: 1, rotateX: -180 }, 0)
    .fromTo(foldBottom, { filter: 'brightness(1)' }, { duration: 1, filter: 'brightness(0)' }, 0);

    const duration = timeline.totalDuration();
    this.scrubber = gsap.to(timeline, {
      totalTime: duration,
      repeat: -1,
      paused: true,
      duration: duration,
      ease: 'none',
    });
    this.scrubber.time(duration);
    this.timeline = timeline;
  }
}

class FlipLine {
  constructor(options = {}) {
    const { color, length = 10, pad = 0 } = options;
    this.colorSet = color;
    this.length = length;
    this.padding = pad;
    this.options = options;
    this.setup();
  }

  setup() {
    const { colorSet, length, padding } = this;
    if (this.element) {
      this.element.innerHTML = '';
    } else {
      this.element = Object.assign(document.createElement('div'), {
        className: 'flip-line',
      });
    }
    this.flips = [];
    for (let i = 0; i < length; i++) {
      const newSlot = new FlipSlot({
        pad: padding,
        characters: DEFAULT_CHARACTERS,
        color: colorSet,
      });
      this.element.appendChild(newSlot.element);
      this.flips.push(newSlot);
    }
  }

  run(update) {
    const letters = Array.from(update.padEnd(this.length, ' '));
    for (let i = 0; i < Math.min(letters.length, this.length); i++) {
      this.flips[i]?.flip(letters[i], i / 10);
    }
  }
}

export default function SplitFlap({ text, length = 6, pad = 1, alignment = 'left', color = 'inherit' }) {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Clear in case of re-mounts
    containerRef.current.innerHTML = '';

    const newLine = new FlipLine({
      length: length,
      color: color,
      pad: pad,
    });
    
    containerRef.current.appendChild(newLine.element);
    lineRef.current = newLine;

    // If text was already provided before this effect runs, we can run it immediately
    if (text !== undefined) {
      const formatted = alignment === 'right' 
        ? text.toString().toLowerCase().padStart(length, ' ')
        : text.toString().toLowerCase().padEnd(length, ' ');
      // run it with a slight delay to allow rendering
      setTimeout(() => newLine.run(formatted), 50);
    }

    return () => {
      if (lineRef.current) {
         lineRef.current.flips.forEach(f => {
           if(f.timeline) f.timeline.kill();
           if(f.scrubber) f.scrubber.kill();
         });
      }
    };
  }, [length, color, pad]);

  useEffect(() => {
    if (lineRef.current && text !== undefined) {
      const formatted = alignment === 'right' 
        ? text.toString().toLowerCase().padStart(length, ' ')
        : text.toString().toLowerCase().padEnd(length, ' ');
      lineRef.current.run(formatted);
    }
  }, [text, alignment, length]);

  return <div className="split-flap-board" ref={containerRef}></div>;
}
