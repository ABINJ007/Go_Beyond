import { useState, useEffect, useCallback } from 'react';
import styles from '../styles/Navbar.module.css';
import { NAV_LINKS } from '../lib/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const handleNavClick = () => {
    closeMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    if (menuOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [menuOpen, closeMenu]);

  return (
    <header className={styles.header}>
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`} aria-label="Main navigation">
        <div className={styles.navbarInner}>
          <a href="#home" className={styles.logoLink} onClick={handleNavClick}>
            <span className={styles.logo}>
              <span className={styles.goText}>Go</span>
              <span className={styles.beyond}>Beyond</span>
            </span>
          </a>

          <ul className={styles.navLinks}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className={styles.navLink}>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <a href="#contact" className={`btn btnPrimary ${styles.ctaButton}`}>
              Book a Consultation
            </a>

            <button
              type="button"
              className={styles.menuButton}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className={`${styles.menuBar} ${menuOpen ? styles.menuBarOpen : ''}`} />
              <span className={`${styles.menuBar} ${menuOpen ? styles.menuBarOpen : ''}`} />
              <span className={`${styles.menuBar} ${menuOpen ? styles.menuBarOpen : ''}`} />
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
          aria-hidden={!menuOpen}
        >
          <ul className={styles.mobileNavLinks}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className={styles.mobileNavLink} onClick={handleNavClick}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className={`btn btnPrimary ${styles.mobileCta}`}
            onClick={handleNavClick}
          >
            Book a Consultation
          </a>
        </div>

        {menuOpen && (
          <button
            type="button"
            className={styles.overlay}
            onClick={closeMenu}
            aria-label="Close menu"
            tabIndex={-1}
          />
        )}
      </nav>
    </header>
  );
}
