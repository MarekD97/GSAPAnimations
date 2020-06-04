import React, { useRef, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

function App() {
    const wrapper = useRef(null);


    useEffect(() => {
        const elements = wrapper.current.children;

        const tl = gsap.timeline({ defaults: { duration: 1, ease: 'elastic.out(0.7, 0.3)' } });
        gsap.set([elements], { autoAlpha: 0 });
        for (let element of elements) {
            tl.fromTo(element, { y: '-=100' }, { duration: .7, y: '+=100', autoAlpha: 1 }, '-=0.4');
        }
    }, []);

    return (
        <div ref={wrapper} className="App">
            <h1>GSAP Animations</h1>
            <Link to="/small-town">SVG image</Link>
            <Link to="/template-page">Template Page</Link>
            <Link to="/comparation">SVG vs CSS keyframes</Link>
        </div>
    );
};

export default App;