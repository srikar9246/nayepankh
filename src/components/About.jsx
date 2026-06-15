import React, { useState, useEffect, useRef } from 'react';
import useReveal from '../hooks/useReveal';
import maskImg from '../assets/mask_distribution.png';

const ABOUT_IMAGES = [
  {
    src: 'https://assets.zyrosite.com/YKbL494Mv8Ip3qgy/whatsapp-image-2023-01-31-at-9.40.45-pm-dWxpDb2pNbCaxERZ.jpeg',
    alt: 'NayePankh Foundation volunteers and team members'
  },
  {
    src: 'https://assets.zyrosite.com/YKbL494Mv8Ip3qgy/whatsapp-image-2023-02-05-at-9.13.05-am-AzGEo7LOeZi2gn9v.jpeg',
    alt: 'NayePankh Foundation food distribution drive'
  },
  {
    src: maskImg,
    alt: 'NayePankh Foundation mask and relief material distribution campaign'
  },
  {
    src: 'https://assets.zyrosite.com/YKbL494Mv8Ip3qgy/whatsapp-image-2023-02-05-at-9.13.03-am-YBgL64ZLPPI03WXe.jpeg',
    alt: 'NayePankh Foundation sanitary pad distribution campaign'
  }
];

export default function About() {
  const imgRef = useReveal('stagger-1');
  const textRef = useReveal('stagger-2');

  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(500);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImgIndex((prev) => (prev + 1) % ABOUT_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleImageClick = (index) => {
    if (index === activeImgIndex) return;
    setActiveImgIndex(index);
  };

  const getAboutImageStyle = (index) => {
    // Dynamic gap based on container width to prevent overflow
    const gap = Math.min(60, Math.max(30, containerWidth * 0.1));
    const maxStickUp = gap * 0.8;
    const isActive = index === activeImgIndex;
    const isLeft = (activeImgIndex - 1 + ABOUT_IMAGES.length) % ABOUT_IMAGES.length === index;
    const isRight = (activeImgIndex + 1) % ABOUT_IMAGES.length === index;

    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
        cursor: 'default',
      };
    }
    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 0.9,
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
        cursor: 'pointer',
      };
    }
    if (isRight) {
      return {
        zIndex: 2,
        opacity: 0.9,
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
        cursor: 'pointer',
      };
    }
    return {
      zIndex: 1,
      opacity: 0,
      transform: `translateX(0px) translateY(0px) scale(0.7)`,
      pointerEvents: 'none',
    };
  };

  return (
    <section id="about" className="about-section">
      <div className="container-max">
        <div className="about-grid">
          {/* Image Side with 3D Stack Effect */}
          <div ref={imgRef} className="about-image-wrapper reveal stagger-1">
            <div 
              ref={imageContainerRef} 
              className="about-image-stack-container"
            >
              {ABOUT_IMAGES.map((image, index) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  className="about-stack-img"
                  style={getAboutImageStyle(index)}
                  onClick={() => handleImageClick(index)}
                />
              ))}
            </div>
            <div className="about-glow" />
          </div>

          {/* Text Side */}
          <div ref={textRef} className="about-text-wrapper reveal stagger-2">
            <div className="about-content">
              <div className="about-card-header">
                <h6 className="font-label-caps" style={{ color: 'var(--primary)' }}>
                  About Us
                </h6>
                <h2 className="font-headline-lg" style={{ color: 'var(--on-background)' }}>
                  Think global, Act local.
                </h2>
              </div>

              <p className="font-body-lg" style={{ color: 'var(--on-surface-variant)', lineHeight: '1.75' }}>
                "NayePankh Foundation" is a non governmental organisation with a
                strong desire to help the society and make it a better place for
                all.
              </p>

              <p className="font-body-md" style={{ color: 'var(--on-surface-variant)' }}>
                Service to mankind is the service to god. We believe that by
                doing everything in our power and securing your vital support, we
                can revolutionise the society together. Our operations extend
                across Kanpur, Ghaziabad, and various other cities in India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

