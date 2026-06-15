import { FaLinkedin, FaGlobe, FaEnvelope } from 'react-icons/fa';

const LOGO_URL =
  'https://assets.zyrosite.com/YKbL494Mv8Ip3qgy/logo-AVLW2LLWZkI8v845.png';

const SOCIAL_LINKS = [
  { icon: <FaGlobe size={18} />, label: 'Website', href: 'https://nayepankh.com/' },
  { icon: <FaEnvelope size={18} />, label: 'Email', href: 'mailto:contact@nayepankh.com' },
  { icon: <FaLinkedin size={18} />, label: 'LinkedIn', href: 'https://www.linkedin.com/company/nayepankh' },
];

const EXPLORE_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact Us', href: '#' },
];

const LEGAL_LINKS = [
  { label: 'Terms of Service', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: '80G Status', href: '#' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-brand-logo">
            <img src={LOGO_URL} alt="NayePankh Foundation Logo" />
            <span className="logo-text" style={{ fontSize: 24 }}>
              NayePankh Foundation
            </span>
          </div>

          <p className="font-body-md">
            Making the world a better place, one smile at a time. Registered NGO
            under Section 8.
          </p>

          <div className="footer-socials">
            {SOCIAL_LINKS.map((s, index) => (
              <a key={index} className="social-icon" href={s.href} aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="footer-links-grid">
          <div className="footer-column">
            <h5 className="font-label-caps">Explore</h5>
            <ul>
              {EXPLORE_LINKS.map((link) => (
                <li key={link.label}>
                  <a className="font-body-md" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h5 className="font-label-caps">Legals</h5>
            <ul>
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a className="font-body-md" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column contact-col">
            <h5 className="font-label-caps">Contact</h5>
            <div className="contact-info font-body-md">
              <p>
                <span className="material-symbols-outlined">mail</span>
                contact@nayepankh.com
              </p>
              <p>
                <span className="material-symbols-outlined">call</span>
                +91-8318500748
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2024 NayePankh Foundation. All Rights Reserved. Registered NGO under Section 8.</p>
        <p>FCRA Compliance Certified</p>
      </div>
    </footer>
  );
}
