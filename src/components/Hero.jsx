import { useEffect, useRef } from 'react';

const HERO_BG =
  'https://assets.zyrosite.com/YKbL494Mv8Ip3qgy/whatsapp-image-2023-01-31-at-9.40.45-pm-dWxpDb2pNbCaxERZ.jpeg';

export default function Hero() {
  const bgRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const onScroll = () => {
      const scrollPos = window.scrollY;
      if (scrollPos < window.innerHeight && bgRef.current) {
        bgRef.current.style.transform = `scale(1.1) translateY(${scrollPos * 0.2}px)`;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSmoothScroll = (e, target) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="hero">
      <div className="hero-bg-wrapper">
        <img
          ref={bgRef}
          className="hero-bg-img"
          src={HERO_BG}
          alt="Diverse Indian youth volunteers and children smiling together"
        />
        <div className="hero-gradient" />
      </div>

      <div className="hero-content">
        <div className="hero-inner hero-entrance">
          <span className="hero-badge font-label-caps">Making a Difference</span>

          <h1 className="hero-title font-display-lg">
            It's that easy to bring a{' '}
            <span className="highlight">Smile</span> on Their Faces
          </h1>

          <p className="hero-subtitle font-body-lg">
            We don't ask for much, just help us with what you can—Be it Money,
            Skill or Your Time. Every contribution fuels a dream.
          </p>

          <div className="hero-actions">
            <a
              className="btn-hero-primary font-button"
              href="https://nayepankh.com/donate"
            >
              Donate Now
            </a>
            <a
              className="btn-hero-secondary font-button"
              href="#about"
              onClick={(e) => handleSmoothScroll(e, '#about')}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
