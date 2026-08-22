import styles from '../styles/Footer.module.css';
import { FOOTER_QUICK_LINKS, CONTACT_INFO } from '../lib/navigation';
import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <p className={styles.brandName}>
              <span className={styles.goText}>Go</span>
              <span className={styles.beyondText}>Beyond</span>
            </p>
            <p className={styles.brandDescription}>
              Your trusted education partner — helping students unlock endless possibilities through
              expert guidance and personalized support.
            </p>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              {FOOTER_QUICK_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className={styles.footerLink}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Contact</h3>
            <ul className={styles.contactList}>
              {CONTACT_INFO.phones.map(({ display, href }) => (
                <li key={href}>
                  <a href={href} className={styles.footerLink}>
                    {display}
                  </a>
                </li>
              ))}
              <li>
                <a href={CONTACT_INFO.email.href} className={styles.footerLink}>
                  {CONTACT_INFO.email.display}
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Social</h3>
            <a
              href={CONTACT_INFO.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Go Beyond on Instagram"
            >
              <Instagram size={20} aria-hidden="true" />
              <span>{CONTACT_INFO.instagram.display}</span>
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 Go Beyond. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
