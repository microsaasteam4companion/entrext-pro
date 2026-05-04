import React from 'react';
import LampAnimation from './LampAnimation';

const CTA = ({ onApply }) => {
    return (
        <section id="cta">
            <LampAnimation onApply={onApply} />
        </section>
    );
};

export default CTA;
