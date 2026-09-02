import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const body = document.body;

const paths = [...document.querySelectorAll('path.path-anim')];

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

// Lenis adds inertia/smoothing on top of native scroll, which is the
// continuous-motion-regardless-of-input part prefers-reduced-motion asks
// to remove. The scroll-linked path morph below stays: it is driven 1:1
// by scroll position each frame, not an independent animation.
if (!prefersReducedMotion) {
  const lenis = new Lenis({
    lerp: 0.1,
    smooth: true,
  });

  const scrollFn = (time) => {
    lenis.raf(time);
    requestAnimationFrame(scrollFn);
  };
  requestAnimationFrame(scrollFn);
}

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
