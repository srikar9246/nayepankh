import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, HeartHandshake, ShieldCheck } from 'lucide-react';
import useReveal from '../hooks/useReveal';
import ExpandingCards from './ui/expanding-cards';

const CERTIFICATES = [
  {
    id: 'society',
    title: 'Society Registration',
    regNo: 'KAN/08197/2020-2021',
    description: 'Official incorporation certificate under the Societies Registration Act, 1860, officially registering NayePankh Foundation with the UP Government.',
    src: 'https://assets.zyrosite.com/YKbL494Mv8Ip3qgy/society-AE0Ex6MNpMHg9VRg.png',
    imgSrc: 'https://assets.zyrosite.com/YKbL494Mv8Ip3qgy/society-AE0Ex6MNpMHg9VRg.png',
    icon: <Award size={24} />,
    linkHref: '#',
  },
  {
    id: '80g',
    title: '80G Tax Exemption',
    regNo: 'CIT(EXEMPTION), LUCKNOW',
    description: 'Registration under Section 80G of the Income Tax Act, allowing donors to claim a 50% tax deduction on all contributions to NayePankh Foundation.',
    src: 'https://assets.zyrosite.com/YKbL494Mv8Ip3qgy/80g-YX429rXBwRhPoXMl.png',
    imgSrc: 'https://assets.zyrosite.com/YKbL494Mv8Ip3qgy/80g-YX429rXBwRhPoXMl.png',
    icon: <HeartHandshake size={24} />,
    linkHref: '#',
  },
  {
    id: '12a',
    title: '12A Registration',
    regNo: 'AAATN5485EE20211',
    description: 'Official registration under Section 12A of the Income Tax Act, granting tax-exempt status to NayePankh Foundation, ensuring 100% of funds go to relief operations.',
    src: 'https://assets.zyrosite.com/YKbL494Mv8Ip3qgy/12a-YD0r5NDqyJSZVE5b.png',
    imgSrc: 'https://assets.zyrosite.com/YKbL494Mv8Ip3qgy/12a-YD0r5NDqyJSZVE5b.png',
    icon: <ShieldCheck size={24} />,
    linkHref: '#',
  },
];

export default function Certificates() {
  const headerRef = useReveal();
  const gridRef = useReveal('stagger-1');
  const [activeCert, setActiveCert] = useState(null);

  const handleActiveCardClick = (index) => {
    setActiveCert(CERTIFICATES[index]);
  };

  return (
    <section id="certificates" className="certificates-section section-padding">
      <div className="container-max">
        {/* Header */}
        <div ref={headerRef} className="certificates-header reveal">
          <h6 className="font-label-caps" style={{ color: 'var(--primary)' }}>
            Legitimacy & Trust
          </h6>
          <h2 className="font-headline-lg" style={{ color: 'var(--on-background)' }}>
            Our Official Certificates
          </h2>
          <p className="font-body-md" style={{ color: 'var(--on-surface-variant)', maxWidth: '600px', margin: '0 auto' }}>
            NayePankh Foundation is a government-registered non-governmental organization. All donations are tax-exempt and fully transparent.
          </p>
        </div>

        {/* Certificate Cards Grid replaced with Expanding Cards */}
        <div ref={gridRef} className="certificates-expanding-wrapper reveal stagger-1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '48px' }}>
          <ExpandingCards 
            items={CERTIFICATES} 
            defaultActiveIndex={0}
            onActiveCardClick={handleActiveCardClick}
          />
          <p className="font-body-md" style={{ textAlign: 'center', marginTop: '24px', color: 'var(--on-surface-variant)', opacity: 0.8, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--primary)' }}>info</span>
            Click on the active card to view fullscreen or download certificate files.
          </p>
        </div>
      </div>

      {/* Lightbox Modal Overlay */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            className="cert-lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCert(null)}
          >
            <motion.button 
              className="cert-lightbox-close"
              onClick={() => setActiveCert(null)}
              aria-label="Close fullscreen view"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>close</span>
            </motion.button>

            <motion.div
              className="cert-lightbox-content"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={activeCert.src} alt={activeCert.title} className="cert-img-full" />
              <div className="cert-lightbox-info">
                <h3 className="font-headline-md" style={{ color: 'var(--on-primary-container)' }}>{activeCert.title}</h3>
                {activeCert.regNo && <p className="font-body-md" style={{ color: 'var(--on-primary-container)', opacity: 0.8 }}>Reg No: {activeCert.regNo}</p>}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
