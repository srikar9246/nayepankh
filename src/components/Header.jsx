import { useState, useEffect, useCallback } from 'react';
import { ThemeToggleButton2 } from './ui/theme-toggle-buttons';

const LOGO_URL =
  'https://assets.zyrosite.com/YKbL494Mv8Ip3qgy/logo-AVLW2LLWZkI8v845.png';

const NAV_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'News', href: '#news' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = useCallback(
    (e, href) => {
      e.preventDefault();
      setMenuOpen(false);
      if (href === '#') return;
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    []
  );

  return (
    <>
      <header id="main-header" className={`header${scrolled ? ' scrolled' : ''}`}>
        <nav className="header-inner">
          <a className="logo-link" href="/" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <img className="logo-img" src={LOGO_URL} alt="NayePankh Foundation Logo" />
            <span className="logo-text">NayePankh Foundation</span>
          </a>

          {/* Desktop Nav */}
          <div className="nav-desktop">
            <div className="nav-links">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  className="nav-link font-body-md"
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <ThemeToggleButton2 className="theme-toggle-btn" />
            <a
              className="btn-donate-nav"
              href="https://nayepankh.com/donate"
            >
              Donate
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-btn"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div className={`mobile-menu-panel${menuOpen ? ' open' : ''}`}>
        <div className="mobile-menu-header">
          <span className="logo-text" style={{ fontSize: 18 }}>NayePankh</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <ThemeToggleButton2 className="theme-toggle-btn" />
            <button
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              style={{ background: 'none', color: 'var(--on-surface-variant)', display: 'flex', alignItems: 'center' }}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        </div>
        <div className="mobile-nav-links">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              className="mobile-nav-link font-body-lg"
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          className="btn-donate-mobile font-button"
          href="https://nayepankh.com/donate"
        >
          Donate Now
        </a>
      </div>
    </>
  );
}
