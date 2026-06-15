import { useEffect, useRef } from 'react';

/**
 * Custom hook that applies an IntersectionObserver to trigger
 * scroll-reveal animations. Adds the 'active' class when the
 * element scrolls into view.
 *
 * @param {string} [staggerClass] - Optional stagger delay class (e.g. 'stagger-1')
 * @param {object} [options] - IntersectionObserver options
 * @returns {React.RefObject}
 */
export default function useReveal(staggerClass, options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      // If the user prefers reduced motion, just make everything visible
      el.classList.add('active');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
        ...options,
      }
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, []);

  return ref;
}
