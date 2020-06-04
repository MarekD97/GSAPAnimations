import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { ReactComponent as ProductImage } from './product.svg'

gsap.registerPlugin(ScrollTrigger);

const TemplatePage = () => {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const navRef = useRef(null);
    const productRef = useRef(null);
    const footerRef = useRef(null);

    useEffect(() => {
        const title = titleRef.current;
        const description = descriptionRef.current;
        const navigation = navRef.current.children;


        const tl = gsap.timeline({ defaults: { duration: 2, ease: 'power4.out' } })
        tl.fromTo(title, { autoAlpha: 0, x: '-=500' }, { duration: 2, autoAlpha: 1, x: '+=500' })
            .fromTo(description, { autoAlpha: 0, y: '-=20' }, { duration: 1, autoAlpha: 1, y: '+=20' }, 1)
            .fromTo([navigation], { autoAlpha: 0, rotateX: '-180deg' }, { duration: 2, autoAlpha: 1, rotateX: 0, stagger: .3 }, 0);

        const [product] = productRef.current.children;

        const item1 = product.getElementById('Item1');
        const item2 = product.getElementById('Item2');
        const item3 = product.getElementById('Item3');
        const item4 = product.getElementById('Item4');
        const item5 = product.getElementById('Item5');
        const circle = product.getElementById('Circle');

        gsap.set([item1, item2, item3, item4, item5], { transformOrigin: '50% 50%' });
        gsap.fromTo([item1, item2, item3, item4, item5], {
            scale: .7,
            rotate: '-270deg'
        },
            {
                scrollTrigger: {
                    trigger: [item1, item2, item3, item4, item5],
                    toggleActions: 'restart pause reverse pause'
                },
                scale: 1,
                rotate: '0deg',
                duration: 1.2,
            });
        gsap.fromTo(circle, {
            scale: 0,
            transformOrigin: '50% 50%'
        },
            {
                scrollTrigger: {
                    trigger: circle,
                    toggleActions: 'restart pause reverse pause'
                },
                scale: 1,
                duration: 2,
            });

        const footerContent = footerRef.current.children;

        const footerTimeline = gsap.timeline({
            defaults: {
                duration: 2,
                ease: 'power4.out',
            },
            scrollTrigger: {
                trigger: [footerContent]
            },
        });
        for (let item of footerContent) {
            footerTimeline.fromTo(item, {
                autoAlpha: 0, x: '-=100'
            },
                {
                    duration: .7,
                    autoAlpha: 1,
                    x: '+=100',
                })
        }

    })
    return (
        <div className="TextPage">
            <header className="header">
                <nav>
                    <ul ref={navRef} className="list">
                        <li className="list-item">About</li>
                        <li className="list-item">Information</li>
                        <li className="list-item">Contact</li>
                    </ul>
                </nav>
            </header>
            <main className="main">
                <div>
                    <h1 ref={titleRef}>GSAP Animations</h1>
                    <h2 ref={descriptionRef}>Description</h2>
                </div>
                <div ref={productRef}>
                    <ProductImage />
                </div>
            </main>
            <footer className="footer">
                <div ref={footerRef}>
                    <div>
                        <h2>Get started</h2>
                        <p>Home</p>
                        <p>Sign up</p>
                        <p>Downloads</p>
                    </div>
                    <div>
                        <h2>About us</h2>
                        <p>Company information</p>
                        <p>Contact us</p>
                        <p>Reviews</p>
                    </div>
                </div>
                <div>
                    <p>&copy; 2020 Copyright</p>
                </div>
            </footer>
        </div>
    );
};

export default TemplatePage;