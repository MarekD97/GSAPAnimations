import React, { useRef, useEffect } from 'react';
import { ReactComponent as Star } from './star.svg';
import gsap from 'gsap';

import './animation.css';

const ComparationPage = () => {
    const wrapper = useRef(null);

    useEffect(() => {
        const [star] = wrapper.current.children;
        gsap.fromTo(star,
            {
                y: '-=200',
                autoAlpha: 0
            },
            {
                duration: 2,
                y: '+=200',
                rotate: '360deg',
                autoAlpha: 6,
                ease: "elastic"
            });
    }, []);
    return (
        <div>
            <div ref={wrapper} className="App">
                <Star />
            </div>
            <div className="App">
                <Star class="star" />
            </div>
        </div>
    );
};

export default ComparationPage;