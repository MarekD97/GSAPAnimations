import React, { useRef, useEffect } from 'react';
import './App.css';
import { ReactComponent as SmallTown } from './small-town.svg';

import gsap from 'gsap';

function SmallTownPage() {
  //Tworzymy referencję do komponentu
  const wrapper = useRef(null);

  useEffect(() => {
    //Pobranie obrazka SmallTown
    const [elements] = wrapper.current.children;

    //Pobieranie poszczególnych elementów obrazka
    const frame = elements.getElementById('frame');
    const houseSmall = elements.getElementById('houseSmall');
    const houseMedium = elements.getElementById('houseMedium');
    const houseBig = elements.getElementById('houseBig');
    const treeSmall = elements.getElementById('treeSmall');
    const treeBig = elements.getElementById('treeBig');
    const chimneys = elements.getElementById('chimneys');
    const birds = elements.getElementById('birds');
    const moon = elements.getElementById('moon');
    const smoke = elements.getElementById('smoke');
    const flowers = elements.getElementById('flowers');

    //Nadanie elementom stanu początkowego
    gsap.set([frame, houseSmall, houseMedium, houseBig, moon], { autoAlpha: 0 });
    gsap.set([...flowers.children, birds.children], { autoAlpha: 0 });
    gsap.set([...smoke.children], { autoAlpha: 0, scale: .45, transformOrigin: '50% 100%' });
    gsap.set([...chimneys.children, treeSmall, treeBig], { autoAlpha: 0, transformOrigin: '50% 100%' });
    gsap.set(moon, { transformOrigin: '50% 50%' });

    //Stworzenie linii czasu, pozwala animować krok po kroku
    // const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, duration: .3 });
    // const tl = gsap.timeline({ defaults: { duration: 1.2, ease: 'elastic.out(2.4, 0.9)' } });
    const tl = gsap.timeline({ defaults: { duration: 2.5, ease: 'elastic.out(0.7, 0.3)' } });

    tl.fromTo(houseSmall, { y: '-=300' }, { duration: 1, y: '+=300', autoAlpha: 1 })
      .fromTo(houseMedium, { y: '-=300' }, { duration: 1, y: '+=300', autoAlpha: 1 }, '-=0.5')
      .fromTo(houseBig, { y: '-=300' }, { duration: 1, y: '+=300', autoAlpha: 1 }, '-=0.5')
      .to(frame, { duration: 1, autoAlpha: 1 })
      .fromTo(chimneys.children, { scaleY: 0 }, { duration: 1, scaleY: 1, autoAlpha: 1, stagger: .3 }, '-=1')
      .fromTo(flowers.children, { scale: .65 }, { duration: .4, scale: 1, autoAlpha: 1, stagger: .05 })
      .fromTo(treeSmall, { scaleY: 0 }, { duration: 1, scaleY: 1, autoAlpha: 1 })
      .fromTo(treeBig, { scaleY: 0 }, { duration: 1, scaleY: 1, autoAlpha: 1 }, '-=0.5')
      .to(smoke.children, { duration: 1, autoAlpha: 1, scale: 1, stagger: .3 })
      .fromTo(birds.children, { x: '+=200', y: '+=10' }, { duration: 4, x: '-=200', y: '-=10', autoAlpha: 1, ease: 'power1.out', stagger: 1.2 }, '-=3')
      .fromTo(moon, { rotate: '-=45deg' }, { duration: 1, rotate: '+=45deg', autoAlpha: 1 })
      .to(wrapper.current, { backgroundColor: '#222222' }, '-=1');

  }, []);
  return (
    <div ref={wrapper} className="App">
      <SmallTown />
    </div>
  );
}

export default SmallTownPage;
