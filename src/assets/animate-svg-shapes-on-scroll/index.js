import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const body = document.body;

const paths = [...document.querySelectorAll('path.path-anim')];
const lenis = new Lenis({
  lerp: 0.1,
  smooth: true,
});

const scrollFn = (time) => {
  lenis.raf(time);
  requestAnimationFrame(scrollFn);
};
requestAnimationFrame(scrollFn);

paths.forEach((el) => {
  const svgEl = el.closest('svg');
  const pathTo = el.dataset.pathTo;

  gsap
    .timeline({
      scrollTrigger: {
        trigger: svgEl,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
    .to(el, {
      ease: 'none',
      attr: { d: pathTo },
    });
});
