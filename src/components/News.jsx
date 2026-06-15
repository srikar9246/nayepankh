import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useReveal from '../hooks/useReveal';

const NEWS_ITEMS = [
  {
    id: 'news-1',
    headline: 'NayePankh Foundation conducts food distribution drive in Kanpur slums',
    paper: 'Dainik Jagran',
    date: 'February 2023',
    description: 'NayePankh Foundation volunteers reached out to over 500 underprivileged families in Kanpur, providing dry rations, hygiene kits, and hot meals.',
    src: 'https://assets.zyrosite.com/YKbL494Mv8Ip3qgy/media-AR0ezRyVXqSaNNg2.jpeg',
  },
  {
    id: 'news-2',
    headline: 'Sanitary pads distribution drive held for women in Ghaziabad',
    paper: 'Hindustan Times',
    date: 'March 2023',
    description: 'Promoting menstrual hygiene and breaking social stigmas, student-led NGO NayePankh distributed biodegradable sanitary pads to over 1000 girls.',
    src: 'https://assets.zyrosite.com/YKbL494Mv8Ip3qgy/whatsapp-image-2023-02-15-at-9.17.30-pm-AVLPXr08jETq2nyv.jpeg',
  }
];

export default function News() {
  const headerRef = useReveal();
  const listRef = useReveal('stagger-1');
  const [activeNews, setActiveNews] = useState(null);

  return (
    <section id="news" className="news-section">
      <div className="container-max">
        {/* Header */}
        <div ref={headerRef} className="news-header reveal">
          <h6 className="font-label-caps" style={{ color: 'var(--primary)' }}>
            Media Recognition
          </h6>
          <h2 className="font-headline-lg" style={{ color: 'var(--on-background)' }}>
            NayePankh in the News
          </h2>
          <p className="font-body-md" style={{ color: 'var(--on-surface-variant)', maxWidth: '600px', margin: '0 auto' }}>
            Read what prominent national newspapers and publications have written about the impact drives conducted by our volunteers.
          </p>
        </div>

        {/* News Grid */}
        <div ref={listRef} className="news-grid reveal stagger-1">
          {NEWS_ITEMS.map((item) => (
            <div key={item.id} className="news-card news-card-text-top" onClick={() => setActiveNews(item)}>
              <div className="news-info">
                <div className="news-meta">
                  <span className="news-tag font-label-caps">{item.paper}</span>
                  <span className="news-date">{item.date}</span>
                </div>
                <h4 className="font-headline-md news-headline">
                  {item.headline}
                </h4>
                <p className="font-body-md news-description">
                  {item.description}
                </p>
              </div>
              <figure className="news-image-wrapper">
                <img src={item.src} alt={item.headline} className="news-img" />
              </figure>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox zoom modal */}
      <AnimatePresence>
        {activeNews && (
          <motion.div
            className="cert-lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveNews(null)}
          >
            <motion.button
              className="cert-lightbox-close"
              onClick={() => setActiveNews(null)}
              aria-label="Close fullscreen view"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>close</span>
            </motion.button>

            <motion.div
              className="cert-lightbox-content"
              style={{ maxWidth: '750px', backgroundColor: 'var(--surface-container-lowest)' }}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={activeNews.src} alt={activeNews.headline} className="cert-img-full" style={{ maxHeight: '80vh', objectFit: 'contain', backgroundColor: 'var(--surface-container-lowest)' }} />
              <div className="cert-lightbox-info" style={{ backgroundColor: 'var(--primary-container)' }}>
                <h3 className="font-headline-md" style={{ color: 'var(--on-primary-container)' }}>{activeNews.headline}</h3>
                <p className="font-body-md" style={{ color: 'var(--on-primary-container)', opacity: 0.85, marginTop: '4px' }}>Published in {activeNews.paper} • {activeNews.date}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
